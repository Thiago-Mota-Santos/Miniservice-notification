import { GetRecipientNotification } from './../../../application/use-cases/get-recipient-notifications';
import { CountRecipientNotification } from './../../../application/use-cases/count-recipient-notifications';
import { NotificationViewModel } from './../view-model/notifications-view-model';
import { SendNotification } from './../../../application/use-cases/send-notification';
import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { CreateNotificationBody } from '../dtos/create-notification-body';
import { UnReadNotification } from 'src/application/use-cases/unread-notification';
import { ReadNotification } from 'src/application/use-cases/read-notifications';
import { CancelNotification } from 'src/application/use-cases/cancel-notification';


@Controller('notifications')
export class NotificationsController {
  constructor(
    private sendNotification: SendNotification,
    private cancelNotification: CancelNotification,
    private readNotification: ReadNotification,
    private unreadNotification: UnReadNotification,
    private countRecipientNotifications: CountRecipientNotification,
    private getRecipientNotifications: GetRecipientNotification,
  ) {}

  @Patch(':id/cancel')
  async cancel(@Param('id') id: string) {
    await this.cancelNotification.execute({
      notificationId: id,
    });
  }


  @Get('count/from/:recipientId')
  async countFromRecipient(@Param('recipientId') recipientId: string) {
    const { count } = await this.countRecipientNotifications.execute({
      recipientId,
    });

    return {
      count,
    };
  }

  @Get('from/:recipientId')
  async getFromRecipient(@Param('recipientId') recipientId: string) {
    const { notifications } = await this.getRecipientNotifications.execute({
      recipientId,
    });

    return {
      notifications: notifications.map(NotificationViewModel.toHTTP),
    };
  }

  @Patch(':id/read')
  async read(@Param('id') id: string) {
    await this.readNotification.execute({
      notificationId: id,
    });
  }

  @Patch(':id/unread')
  async unread(@Param('id') id: string) {
    await this.unreadNotification.execute({
      notificationId: id,
    });
  }

  @Post()
  async create(@Body() body: CreateNotificationBody) {
    const { recipientId, content, category } = body;

    const { notification } = await this.sendNotification.execute({
      recipientId,
      content,
      category,
    });

    return {
      notification: NotificationViewModel.toHTTP(notification),
    };
  }
}


