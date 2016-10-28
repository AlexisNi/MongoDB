import {EventEmitter} from "@angular/core";
import {Error} from "./error.model";
/**
 * Created by alex on 24/10/2016.
 */
export class ErrorService{
    errorOccured =new EventEmitter<Error>();

    handleError(error:any){
        const errorData=new Error(error.title,error.message);
        this.errorOccured.emit(errorData);

    }
}