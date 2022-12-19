import { makeNotification } from '../../../test/factories/notification-factory'
import { InMemoryNotificationRepository } from './../../../test/repositories/in-memory-notifications-repository';
import { GetRecipientNotification } from './get-recipient-notifications';

describe("Get recipient notification test", () =>{
    it("should be possible create method Get recipient notification (use-case)", async() =>{
        const notificationsRepository = new InMemoryNotificationRepository();
        const getRecipientNotifications = new GetRecipientNotification(notificationsRepository);

       
       await notificationsRepository.create(
        makeNotification({recipientId: 'recipient-test-count-1'}),
       )
       await notificationsRepository.create(
        makeNotification({recipientId: 'recipient-test-count-1'}),
       )
       await notificationsRepository.create(
        makeNotification({recipientId: 'recipient-test-count-2'}),
       )

       const {notifications} = await getRecipientNotifications.execute({
        recipientId: 'recipient-test-count-1'
       })

       expect(notifications).toHaveLength(2);
       expect(notifications).toEqual(
        expect.arrayContaining([
            expect.objectContaining({ recipientId: 'recipient-test-count-1'}),
            expect.objectContaining({ recipientId: 'recipient-test-count-1'}),
        ])
       )
       
    })
})