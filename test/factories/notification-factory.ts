import { Content } from '../../src/application/entities/content-notification'
import { Notification, notificationProps } from '../../src/application/entities/notification';

type Override = Partial<notificationProps>

export function makeNotification(override?: Override){
   return new Notification ({
           category: 'shakai',
           content: new Content("do you a new friend request"),
           recipientId: 'recipient-test-count-2',
           ...override,
       })
}