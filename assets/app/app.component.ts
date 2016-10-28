import { Component } from '@angular/core';
import {MessageComponent} from "./messages/message.component";
import {MessageListomponent} from "./messages/mesage-list.component";
import {MessageInputComponent} from "./messages/message-input.component";
import {MessageService} from "./messages/message.service";

@Component({
    selector: 'my-app',


    template:`
                <div class="container">
                
                <app-header></app-header>
                <hr>
                <router-outlet></router-outlet>
                <app-error></app-error>
                
</div>
            `,

    providers:[MessageService]
})
export class AppComponent {



}