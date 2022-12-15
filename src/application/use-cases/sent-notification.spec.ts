import { SendNotification } from "./send-notification";


describe('send notification', () => {
    it('should be able to send a notidication', async () => {
        const sendNotification = new SendNotification();

        const { notification } = await sendNotification.execute({
            content: 'new friend request',
            category: 'social',
            recipientId: 'teste-id'
        });

        expect(notification).toBeTruthy();
    })
})