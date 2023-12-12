import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedComponent } from './shared.component';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  imports: [
    CommonModule,
    MatInputModule, MatFormFieldModule, MatButtonModule, MatIconModule
  ],
  exports: [
    MatInputModule, MatFormFieldModule, MatButtonModule, MatIconModule
  ],
  declarations: [SharedComponent]
})
export class SharedModule { }
