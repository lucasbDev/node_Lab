import { Module } from "@nestjs/common";
import { NotificationsRepository } from "src/application/repositories/notifications-repository";
import { PrismaService } from "./prisma/prisma.service";
import { PrismaNotificationsRepository } from "./prisma/repositories/prisma-notifications-repositories";

@Module({
    providers: [PrismaService,
    {
        provide: NotificationsRepository,
        useClass: PrismaNotificationsRepository
    },],
    exports: [NotificationsRepository] //compartilhados entre todos os providers
})
export class DatabaseModule {}