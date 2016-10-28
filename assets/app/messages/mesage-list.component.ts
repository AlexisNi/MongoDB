/**
 * Created by alex on 19/10/2016.
 */
import {Component, OnInit} from "@angular/core";
import {Message} from "./message";
import {MessageComponent} from "./message.component";
import {MessageService} from "./message.service";

@Component({
    selector:'app-message-list',
    template: `
                <div class="col-md-8 col-md-offset-2">
                <my-message 
                *ngFor="let message of messages"
                 [message]="message"
                 ></my-message>

                </div>
                `,

})
export class MessageListomponent implements OnInit{
    ngOnInit(): any {
      this.messageService.getMessages()
          .subscribe(
              (messages:Message[])=> {
                  this.messages=messages;
              });

    }
    constructor(private messageService:MessageService){}
    messages:Message[]=[];



}