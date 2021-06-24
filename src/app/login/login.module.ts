import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './containers/login/login.component';
import {LoginRoutingModule} from './login.routing-module';
import {ReactiveFormsModule} from '@angular/forms';
import { AuthenticatedDirective } from './directives/authenticated.directive';



@NgModule({
    declarations: [
        LoginComponent,
        AuthenticatedDirective
    ],
    exports: [
        AuthenticatedDirective
    ],
    imports: [
        CommonModule,
        LoginRoutingModule,
        ReactiveFormsModule
    ]
})
export class LoginModule { }
