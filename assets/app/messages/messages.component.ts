import {Component} from "@angular/core";

@Component({
    selector:'app-messages',
    template:`
       <div class="row" style="background-color: red">
       </div> 
       <div class="row">       
                   <app-messag-input></app-messag-input>  
       </div>
       <hr>
       <div class="row">
        <app-message-list></app-message-list>
       </div>
        
            `
})
export class MessagesComponent{

}