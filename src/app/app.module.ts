import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { GlobalInterceptor } from './interceptors/global.interceptor';
import { ToastrModule } from 'ngx-toastr';
import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { NgxSpinnerModule } from "ngx-spinner";
import { LoadingInterceptor } from './interceptors/loading.interceptor';


@NgModule({
  declarations: [
    AppComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgxSpinnerModule,
    HttpClientModule,
    NgxSpinnerModule.forRoot
    ({ type: 'ball-scale-multiple' }),
    ToastrModule.forRoot({
      closeButton: true,
      timeOut: 1000,
      progressBar: true,
    }),
    
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: GlobalInterceptor,
      multi: true
    },
    {
      provide:HTTP_INTERCEPTORS,
      useClass:LoadingInterceptor,
      multi: true
    }
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
