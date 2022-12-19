import { UnReadNotification } from './../../application/use-cases/unread-notification';
import { ReadNotification } from './../../application/use-cases/read-notifications';
import { GetRecipientNotification } from './../../application/use-cases/get-recipient-notifications';
import { CountRecipientNotification } from './../../application/use-cases/count-recipient-notifications';
import { CancelNotification } from './../../application/use-cases/cancel-notification';
import { SendNotification } from './../../application/use-cases/send-notification';
import { Module } from '@nestjs/common';
import { NotificationsController } from './controllers/notifications.controller';
import { DatabaseModule } from '../database/database.module';

@Module({
    imports: [DatabaseModule],
    controllers:[NotificationsController],
    providers:[
        SendNotification,
        CancelNotification,
        CountRecipientNotification,
        GetRecipientNotification,
        ReadNotification,
        UnReadNotification
    ],
})


export class HttpModule {}