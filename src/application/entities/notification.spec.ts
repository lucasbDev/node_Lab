import { Content } from "./content";
import { Notification } from "./notification"

describe('Notification', () => {
    it('it may be possible to create a notification content', () => {
        const notification = new Notification({
            content: new Content('new friendy request'),
            category: 'basic',
            recipientId: 'basic-test',
        });

        expect(notification).toBeTruthy();
    })
})
