import { NotificationsRepository } from "src/application/repositories/notifications-repository"
import { Notification } from "src/application/entities/notification"

//desacoplamento entre as camadas
export class InMenmoryNotificationsRepository implements NotificationsRepository {
    public notifications: Notification[] = []
    async create(notification: Notification) {
        this.notifications.push(notification)
    }
}