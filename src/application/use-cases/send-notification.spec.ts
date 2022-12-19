import { InMemoryNotificationRepository } from './../../../test/repositories/in-memory-notifications-repository';
import { SendNotification } from './send-notification'

describe("send notification test", () =>{
    it("should be possible create method send notification (use-case)", async() =>{
        const notificationsRepository = new InMemoryNotificationRepository();
        const sendNotification = new SendNotification(notificationsRepository);

      const { notification } =  await sendNotification.execute({
            category: 'social',
            content: 'do you have a new notification',
            recipientId: '91481934'
        })

        expect(notificationsRepository.notifications).toHaveLength(1);
        expect(notificationsRepository.notifications[0]).toEqual(notification);
    })
})