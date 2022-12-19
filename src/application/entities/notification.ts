import { Replace } from './../../helpers/replace';
import { Content } from './content-notification';
import { randomUUID } from  'node:crypto'

export interface notificationProps {
    recipientId: string;
    content: Content;
    category:string;
    readAt?: Date | null;
    createAt: Date; 
    canceledAt?: Date | null;
}

export class Notification{
    private props: notificationProps
    private _id : string


public set recipientId(recipientId: string) {
    this.props.recipientId = recipientId;
    
}

public get recipientId() {
    return this.props.recipientId

}

public set content(content: Content) {
    this.props.content = content;

}


public get content(): Content {
    return this.props.content

}

public get category() {
    return this.props.category

}

public set category(category: string) {
    this.props.category = category

}


public read(){
    this.props.readAt = new Date();
}

public unread(){
    this.props.readAt = null;
}

public get readAt(): Date | null | undefined {
    return this.props.readAt

}

public get createAt() {
    return this.props.createAt

}

public cancel(){
    this.props.canceledAt = new Date();
}


public get canceledAt(): Date | null | undefined {
    return this.props.canceledAt;
}


public get id(){
    return this._id
}


constructor(props: Replace<notificationProps, {createAt?: Date}>, id?:string){
    this._id = id ?? randomUUID();
    this.props = {
        ...props,
        createAt: props.createAt ?? new Date()
    }
}

}

