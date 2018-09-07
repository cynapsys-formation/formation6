import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {RouterModule} from '@angular/router';
import {ConfigService} from './services/config.service';
import {HttpClientModule} from '@angular/common/http';
import {NotificationModule} from '../shared/components/notification/notification.module';
import {NotificationService} from '../shared/services/notification.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,

    NgbModule.forRoot(),
    NotificationModule
  ],
  declarations: [
    NavbarComponent
  ],
  exports: [
    NavbarComponent
  ],
  providers: [
   // ConfigService
    NotificationService
  ]
})
export class CoreModule { }
