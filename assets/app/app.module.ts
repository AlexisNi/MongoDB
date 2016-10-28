import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from "./app.component";
import {MessageComponent} from "./messages/message.component";
import {MessageListomponent} from "./messages/mesage-list.component";
import {MessageInputComponent} from "./messages/message-input.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MessagesComponent} from "./messages/messages.component";
import {AuthenticationComponent} from "./auth/authentication.component";
import {HeaderComponent} from "./header.component";
import {routing} from "./app.routing";
import {LogoutComponent} from "./auth/logout.component";
import {SignupComponent} from "./auth/signup.component";
import {SigninComponent} from "./auth/signin.component";
import {HttpModule} from "@angular/http";
import {AuthService} from "./auth/auth.service";
import {ErrorComponent} from "./errors/error.component";
import {ErrorService} from "./errors/error.service";
import {MessageModule} from "./messages/message.module";

@NgModule({
    declarations: [
        AppComponent,MessageComponent,MessageListomponent,MessageInputComponent,MessagesComponent,AuthenticationComponent,
        HeaderComponent,LogoutComponent,SignupComponent,SigninComponent,ErrorComponent
    ],
    imports: [BrowserModule,FormsModule,routing,ReactiveFormsModule,HttpModule],
    providers:[AuthService,ErrorService],
    bootstrap: [AppComponent]
})
export class AppModule {

}