/**
 * Created by alex on 18/10/2016.
 */
import {Component, Input} from '@angular/core';
import {Message} from "./message";
import {MessageService} from "./message.service";
@Component({
    selector:'my-message',
    template:`  <article class="panel panel-default" [ngStyle]="{backgroundColor: color}" (mouseenter)="color='green'"  (mouseleave)="color='red'">
                     <div class="panel-body">
                        {{message.content}}
                     </div>
                     <footer class="panel-footer">
                           <div class="author">
                              {{message.username}}
                              </div>
                              <div *ngIf="belongsToUser()" class="config">
                                 <a  (click)="onClick()">Edit</a>
                                   <a (click)="onDelete()">delete</a>                             
                              </div>
                     </footer>
                 </article>`,

    styles:[`
        .author{
        display:inline-block;
        font-style: italic;
        font-size: 12px;
        width: 80%;
        }
        .config{
        display: inline-block;
        text-align: right;
        font-size: 12px;
        width: 19%;
        }
        

        `]
})
export  class MessageComponent{
    constructor(private messageService:MessageService){}
   @Input() message:Message;
    color='red';

    onClick(){
        this.messageService.editMessage(this.message);

    }
    onDelete(){
        this.messageService.deleteMessage(this.message).subscribe(
            result=>console.log(result)
        );


    }
    belongsToUser(){
        return localStorage.getItem('userId') == this.message.userId;
    }
}