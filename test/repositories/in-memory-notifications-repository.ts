import { Notification } from "src/application/entities/notification";
import { NotificationRepository } from "src/application/repositories/notification-repository";
export class InMemoryNotificationRepository implements NotificationRepository{
   
    
   public notifications: Notification[] = [];
    
   async create(notification: Notification): Promise<void> {
        this.notifications.push(notification);
    }

    async save(notification: Notification): Promise<void> {
        const notificationIndex = this.notifications.findIndex(
            (item) => item.id === notification.id
        );

        if(notificationIndex >= 0){
            this.notifications[notificationIndex] = notification;
        }
    }
    async findById(notificationId: string): Promise<Notification | null> {
        const notification = this.notifications.find(
         (item) => item.id === notificationId,
        );
 
        if(!notification){
         return null;
        }
 
        return notification;
    }

  async countManyByRecipient(recipientId: string): Promise<number> {
        return this.notifications.filter(notification => notification.recipientId === recipientId).length;
    }

  async findManyByRecipient(recipientId: string): Promise<Notification[]> {
        return this.notifications.filter(notification => notification.recipientId === recipientId);
}

}