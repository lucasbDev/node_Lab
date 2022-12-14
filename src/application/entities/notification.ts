import { Replace } from "src/helpers/Replace";
import { Content } from "./content";
import { randomUUID } from "crypto";

export interface INotificationProps {
    recipientId: string;
    content: Content;
    category: string;
    readAt?: Date | null; //undefined-null-date;
    createdAt: Date
}


export class Notification {
    private _id: string //gerando id automatico
    private props: INotificationProps;

    constructor(props: Replace<INotificationProps, {createdAt?: Date}>) {
        this._id = randomUUID();
        this.props = {
            ...props,
            createdAt: props.createdAt ?? new Date(),
        }
    }

    public get id() {
        return this._id;
    }

    public set(recipientId: string) {
        this.props.recipientId = recipientId
    }

    public get recipientId(): string {
        return this.props.recipientId;
    }

    public set content(content: Content) {
        this.props.content = content
    }

    public get content(): Content {
        return this.props.content;
    }

    public set category(category: string) {
        this.props.category = category
    }

    public get category(): string {
        return this.props.category;
    }
    public set readAt(readAt: Date | null | undefined) {
        this.props.readAt = readAt
    }

    public get readAt(): Date | null | undefined{
        return this.props.readAt;
    }

    public get createdAt(): Date {
        return this.props.createdAt; //apenas buscar 
    }
}
