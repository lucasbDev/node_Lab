import { SendNotification } from "./send-notification";
import{ Notification } from "../entities/notification"
import { InMenmoryNotificationsRepository } from "test/repositories/in-memory-notifications-repository";


describe('send notification', () => {
    it('should be able to send a notidication', async () => {
        const notificationsRepository = new InMenmoryNotificationsRepository();
        const sendNotification = new SendNotification(notificationsRepository);

        const { notification } = await sendNotification.execute({
            content: 'new friend request',
            category: 'social',
            recipientId: 'teste-id'
        });

        expect(notificationsRepository.notifications).toHaveLength(1);
        expect(notificationsRepository.notifications[0]).toEqual(notification);
    })
})
