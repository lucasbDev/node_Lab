import { Injectable } from "@nestjs/common";
import { Notification } from "src/application/entities/notification";
import { NotificationsRepository } from "src/application/repositories/notifications-repository";
import { PrismaService } from "../prisma.service";


@Injectable() //injetando as depens...
export class PrismaNotificationsRepository implements NotificationsRepository {
    constructor(private prismaService: PrismaService) {}
    
    async create(notification: Notification): Promise<void> {
        await this.prismaService.notification.create({
            data: { //how to generate a id
                id: notification.id,
                category: notification.category,
                content: notification.content.value,
                recipientId: notification.recipientId,
                readAt: notification.readAt,
                createdAt: notification.createdAt
            }
        })
    }
}
// ctrl + . -> implementa os atributos automatico