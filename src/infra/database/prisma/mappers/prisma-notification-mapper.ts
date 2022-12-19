import { Notification as RawNotification} from '@prisma/client'
import { Content } from 'src/application/entities/content-notification';
import { Notification } from "src/application/entities/notification";

export class PrismaNotificationMapper{
    static toPrisma(notification: Notification){
        return {
         id: notification.id,
         category: notification.category,
         content: notification.content.value,
         recipientId: notification.recipientId,
         createAt: notification.createAt,
         readAt: notification.readAt
        }
    }

    static toDomain(raw: RawNotification): Notification{
        return new Notification({
            category: raw.category,
            content: new Content(raw.content),
            recipientId: raw.recipientId,
            canceledAt: raw.canceledAt,
            createAt: raw.createAt,
            readAt: raw.readAt,
        },
            raw.id
        )
    }       
}