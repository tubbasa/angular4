import {Observable} from 'rxjs/observable';
import {CanDeactivate} from '@angular/router';

export interface componentCanDeactivate
{
    canDeactivate:()=>boolean|Observable<boolean>
}

export class PendingChangesGuard implements CanDeactivate<componentCanDeactivate>
{
canDeactivate(component:componentCanDeactivate):boolean|Observable<boolean>{

    if(component.canDeactivate())
        {
            return true;
        }
        else{
           return confirm('You have unsaved changes. Are you sure?');
           
        }
}
}