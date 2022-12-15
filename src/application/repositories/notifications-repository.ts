import { Notification } from "../entities/notification";

//nest trabalha com class abstratas
export abstract class NotificationsRepository {
    abstract create(notification: Notification): Promise<void>;
}

//contrato de notification