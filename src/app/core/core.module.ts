import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {RouterModule} from '@angular/router';
import {ConfigService} from './services/config.service';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {NotificationModule} from '../shared/components/notification/notification.module';
import {NotificationService} from '../shared/services/notification.service';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';


export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}



@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,

    NgbModule.forRoot(),
    NotificationModule,

    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    }),
  ],
  declarations: [
    NavbarComponent
  ],
  exports: [
    HttpClientModule,
    TranslateModule,

    NavbarComponent
  ],
  providers: [
   // ConfigService
    NotificationService
  ]
})
export class CoreModule { }
