/**
 * Created by alex on 18/10/2016.
 */
export  class Message{
    content:string;
    username:string;
    messageId :string;
    userId:string;


    constructor(content:string,username?:string,messageId?:string,userId?:string){
        this.content=content;
        this.messageId=messageId;
        this.username=username;
        this.userId=userId;

    }


}