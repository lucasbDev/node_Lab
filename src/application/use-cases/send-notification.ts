import { Injectable } from "@nestjs/common";
import { Content } from "../entities/content";
import { Notification } from "../entities/notification"
import { NotificationsRepository } from "../repositories/notifications-repository";

export interface SendNotificationRequest {
    recipientId: string;
    content: string;
    category: string;
}

interface SendNotificationResponse {
    notification: Notification
}

@Injectable()
export class SendNotification {
    constructor(private notificationRepository: NotificationsRepository) {}

    async execute(request: SendNotificationRequest): Promise<SendNotificationResponse> {
        const { recipientId, content, category} = request;

        const notification = new Notification({
            recipientId,
            content: new Content(content),
            category
        })
        //deve persistir no bd
        
        await this.notificationRepository.create(notification) //salvando onde?

        return {
            notification,
        }

    }
}