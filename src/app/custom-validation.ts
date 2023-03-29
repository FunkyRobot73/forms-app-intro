import { AbstractControl } from "@angular/forms";

export function avoidWord(fc:AbstractControl) {
    let notAllowed = /hack/.test(fc.value);

    if(notAllowed){
        return {
            prohibited: {value: fc.value}
        };
    }
    else{
        return null;
    }
}