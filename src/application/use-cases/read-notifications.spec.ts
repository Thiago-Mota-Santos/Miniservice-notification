import { makeNotification } from '../../../test/factories/notification-factory';
import { NotificationNotFound } from './erros/notification-not-found';
import { InMemoryNotificationRepository } from './../../../test/repositories/in-memory-notifications-repository';
import { ReadNotification } from './read-notifications';


describe("Read notification test", () =>{
    it("should be possible create method read notification (use-case)", async() =>{
        const notificationsRepository = new InMemoryNotificationRepository();
        const readNotification = new ReadNotification(notificationsRepository);

       const notification = makeNotification();

       await notificationsRepository.create(notification);

       await readNotification.execute({
        notificationId: notification.id
       })

        expect(notificationsRepository.notifications[0].readAt).toEqual(expect.any(Date));   
    })


    it("should not be able to read a non existing notification", () =>{
        const notificationsRepository = new InMemoryNotificationRepository();
        const readNotification = new ReadNotification(notificationsRepository);

        expect(() =>{
            return readNotification.execute({
                notificationId: 'fake-notificationid',
            })
        }).rejects.toThrow(NotificationNotFound);
    })

})