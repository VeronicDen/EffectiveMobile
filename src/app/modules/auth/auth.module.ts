import {AuthorizationPageComponent} from './authorization-page/authorization-page.component';
import {MainPageComponent} from './main-page/main-page.component';
import {MatButtonModule} from "@angular/material/button";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatIconModule} from "@angular/material/icon";
import {MatInputModule} from "@angular/material/input";
import {NgIf} from '@angular/common';
import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from "@angular/forms";
import {RegistrationPageComponent} from "./registration-page/registration-page.component";
import {RouterModule, Routes} from "@angular/router";

/**
 * Модуль авторизации
 */
const routes: Routes = [
  {
    path: '',
    component: MainPageComponent
  },
  {
    path: 'authorization',
    component: AuthorizationPageComponent
  },
  {
    path: 'registration',
    component: RegistrationPageComponent
  },
  {
    path: '**',
    redirectTo: ''
  },
];

@NgModule({
  declarations: [
    AuthorizationPageComponent,
    MainPageComponent,
    RegistrationPageComponent,
  ],
  imports: [
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    NgIf,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
  ],
})
export class AuthModule {
}
