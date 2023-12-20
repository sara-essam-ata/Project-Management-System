import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedComponent } from './shared.component';
import { MatInputModule} from '@angular/material/input';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatIconModule} from '@angular/material/icon';
import { MatButtonModule} from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MatMenuModule} from '@angular/material/menu';
import { MatDialogModule} from '@angular/material/dialog';
import { RouterLink, RouterLinkActive, RouterModule } from '@angular/router';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { LogoutComponent } from './logout/logout.component';

@NgModule({
  imports: [
    CommonModule,
    MatInputModule, MatFormFieldModule, MatButtonModule, MatIconModule, ReactiveFormsModule,
    ToastrModule.forRoot({}), MatMenuModule,MatDialogModule,RouterLink,RouterLinkActive,RouterModule
    ,NgxDropzoneModule
  ],
  exports: [
    MatInputModule, MatFormFieldModule, MatButtonModule, MatIconModule, ReactiveFormsModule,
    NavbarComponent,SidebarComponent, MatMenuModule,MatDialogModule,NgxDropzoneModule,
    MatMenuModule,MatDialogModule,FormsModule,RouterModule
  ],

  declarations: [SharedComponent,NavbarComponent,SidebarComponent,LogoutComponent]
})
export class SharedModule { }
