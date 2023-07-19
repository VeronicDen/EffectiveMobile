import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {HeaderComponent} from "./header.component";
import {MatButtonModule} from "@angular/material/button";

/**
 * Модуль для работы с шапкой приложения
 */
@NgModule({
  declarations: [
    HeaderComponent,
  ],
  imports: [
    CommonModule,
    MatButtonModule,
  ],
  exports: [
    HeaderComponent,
  ]
})
export class HeaderModule { }
