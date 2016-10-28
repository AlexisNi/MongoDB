import {Component, OnInit} from "@angular/core";
import {Message} from "./message";
import {MessageService} from "./message.service";
import {NgForm} from "@angular/forms";

/**
 * Created by alex on 19/10/2016.
 */
@Component({
    selector:'app-messag-input',
    template:`
        

<div class="col-md-8 col-lg-offset-2">
   <form (ngSubmit)="onSubmit(f)" #f="ngForm">
    <div class="form-group">
        <label for="content"> Content</label>
        <input type="text"
               id="content"
               class="form-control"
               [ngModel]="message?.content"
               name="content"
               required>
    </div>
    <button type="button" class="btn btn-danger" (click)="onClear(f)">Cancel</button>
    <button class="btn btn-primary" type="submit">
            Submit
    </button>
   </form> 
</div>

`,

})
export class MessageInputComponent implements OnInit{
     message:Message;
    ngOnInit(): void {
        console.log('On Init');
        this.messageService.messageIsEdit.subscribe(
            (message:Message)=>this.message=message
        );
    }
    constructor(private messageService:MessageService){}
        onSubmit(form:NgForm){
            if(this.message){
                this.message.content=form.value.content;
                this.messageService.updateMessage(this.message)
                    .subscribe(
                        result=>console.log(result)
                    );
                this.message=null;

            }else{
                console.log(form);
                const  message=new Message(form.value.content,'Max');
                this.messageService.addMessage(message)
                    .subscribe(
                        data => console.log(data),
                        error => console.error(error)
                    );
                form.resetForm();
            }




        }
        onClear(form:NgForm){
            this.message=null;
            form.resetForm();

        }
}