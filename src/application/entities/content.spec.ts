import { Content } from "./content"

describe('Notification content', () => {
    it('it may be possible to create a notification content', () => {
        const content = new Content('you got a new friend request');

        expect(content).toBeTruthy();
    })

    it('it shoudnt be able to create a notification content with less than 5 characters', () => {
        expect(() => new Content('ii')).toThrow();
    })

    it('it shoudnt be able to create a notification content with more than 240 characters', () => {
        expect(() => new Content('a.'.repeat(250))).toThrow();
    })
})

