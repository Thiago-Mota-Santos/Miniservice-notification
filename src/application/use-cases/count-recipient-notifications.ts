import { Injectable } from '@nestjs/common';
import { NotificationRepository } from '../repositories/notification-repository';

export interface CountRecipientNotificationRequest{
    recipientId: string;
    
}

interface CountRecipientNotificationResponse{
    count: number;
} 

@Injectable()
export class CountRecipientNotification{

    constructor(private notificationRepository: NotificationRepository){

    }

    async execute(request: CountRecipientNotificationRequest): Promise<CountRecipientNotificationResponse>{

        const { recipientId } = request;

        const count = await this.notificationRepository.countManyByRecipient(
            recipientId
        );

        return{
            count,
        };
    }   
}
