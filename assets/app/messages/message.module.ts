import {NgModule} from '@angular/core';
import {MessageComponent} from "./message.component";
import {MessageListomponent} from "./mesage-list.component";
import {MessageInputComponent} from "./message-input.component";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {MessageService} from "./message.service";


@NgModule({
    declarations:[
        MessageComponent,
        MessageListomponent,
        MessageComponent,
        MessageInputComponent
    ],
    imports:[
        CommonModule,
        FormsModule
    ],
    providers:[MessageService]
})
export  class MessageModule{

}