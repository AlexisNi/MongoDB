/**
 * Created by alex on 20/10/2016.
 */
import {Component, OnInit} from "@angular/core";
import {FormGroup, Validators, FormControl} from "@angular/forms";
import {User} from "./user";
import {AuthService} from "./auth.service";
import {Router} from "@angular/router";
@Component({
    selector:'app-sigin',
    templateUrl:'./signin.component.html'
})

export class SigninComponent implements OnInit{
    myForm:FormGroup;
    constructor(private  authService:AuthService, private router:Router){}
    onSubmit(){
        const user= new User(this.myForm.value.email,this.myForm.value.password);
        this.authService.signin(user)
            .subscribe(
                    data=>{
                        localStorage.setItem('token',data.token);
                        localStorage.setItem('userId',data.userId);
                        this.router.navigateByUrl('/');
                    },
                    error=>console.error(error)
            );
        this.myForm.reset();
    }

    ngOnInit(): void {
        this.myForm=new FormGroup({
            email:new FormControl(null,[
                Validators.required,
            ]),
            password:new FormControl(null,Validators.required),
        });
    }

}