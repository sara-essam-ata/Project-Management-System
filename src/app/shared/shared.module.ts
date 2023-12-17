import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedComponent } from './shared.component';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    MatInputModule, MatFormFieldModule, MatButtonModule, MatIconModule, ReactiveFormsModule
  ],
  exports: [
    MatInputModule, MatFormFieldModule, MatButtonModule, MatIconModule, ReactiveFormsModule
  ],
  declarations: [SharedComponent]
})
export class SharedModule { }
