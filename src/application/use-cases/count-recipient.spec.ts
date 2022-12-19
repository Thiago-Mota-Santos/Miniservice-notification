import { makeNotification } from '../../../test/factories/notification-factory'
import { InMemoryNotificationRepository } from './../../../test/repositories/in-memory-notifications-repository';
import { CountRecipientNotification } from './count-recipient-notifications';

describe("count recipient notification test", () =>{
    it("should be possible create method count recipient notification (use-case)", async() =>{
        const notificationsRepository = new InMemoryNotificationRepository();
        const countRecipientNotification = new CountRecipientNotification(notificationsRepository);

       
       await notificationsRepository.create(
        makeNotification({recipientId: 'recipient-test-count-1'}),
       )
       await notificationsRepository.create(
        makeNotification({recipientId: 'recipient-test-count-1'}),
       )
       await notificationsRepository.create(
        makeNotification({recipientId: 'recipient-test-count-2'}),
       )

       const { count } = await countRecipientNotification.execute({
        recipientId: 'recipient-test-count-1'
       })

       expect(count).toEqual(2);
       
    })
})