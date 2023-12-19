import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedComponent } from './shared.component';
import { MatInputModule} from '@angular/material/input';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatIconModule} from '@angular/material/icon';
import { MatButtonModule} from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MatMenuModule} from '@angular/material/menu';
import { MatDialogModule} from '@angular/material/dialog';



@NgModule({
  imports: [
    CommonModule,
    MatInputModule, MatFormFieldModule, MatButtonModule, MatIconModule, ReactiveFormsModule,
    ToastrModule.forRoot({}), MatMenuModule,MatDialogModule,
  ],
  exports: [
    MatInputModule, MatFormFieldModule, MatButtonModule, MatIconModule, ReactiveFormsModule,
    NavbarComponent,SidebarComponent, MatMenuModule,MatDialogModule,
  ],
  declarations: [SharedComponent,NavbarComponent,SidebarComponent]
})
export class SharedModule { }
