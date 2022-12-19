import { makeNotification } from '../../../test/factories/notification-factory';
import { NotificationNotFound } from './erros/notification-not-found';
import { CancelNotification } from './cancel-notification';
import { InMemoryNotificationRepository } from './../../../test/repositories/in-memory-notifications-repository';


describe("Cancel notification test", () =>{
    it("should be possible create method cancel notification (use-case)", async() =>{
        const notificationsRepository = new InMemoryNotificationRepository();
        const cancelNotification = new CancelNotification(notificationsRepository);

       const notification = makeNotification();

       await notificationsRepository.create(notification);

       await cancelNotification.execute({
        notificationId: notification.id
       })

        expect(notificationsRepository.notifications[0].canceledAt).toEqual(expect.any(Date));   
    })


    it("should not be able to cancel a non existing notification", () =>{
        const notificationsRepository = new InMemoryNotificationRepository();
        const cancelNotification = new CancelNotification(notificationsRepository);

        expect(() =>{
            return cancelNotification.execute({
                notificationId: 'fake-notificationid',
            })
        }).rejects.toThrow(NotificationNotFound);
    })

})