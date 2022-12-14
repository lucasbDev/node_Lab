export class Content {
    private readonly content: string;

    get value(): string {
        return this.content;
    }

    private ValidContenLenght(content: string): boolean {
        return content.length >= 6 && content.length <= 240;
    }

    constructor(content: string) {
        const isContentLengthValid = this.ValidContenLenght(content);

        //validando
        if (!isContentLengthValid) {
            throw new Error('Content lenght error!');
        }

        this.content =content;
    }
}