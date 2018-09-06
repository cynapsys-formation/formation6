import {Component, OnDestroy, OnInit} from '@angular/core';
import {ConfigService} from './core/services/config.service';
import {Observable, Subscription} from 'rxjs';
import {filter, map, mergeAll} from 'rxjs/operators';
import {Link} from './shared/models/link';

// import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  title: string;
  links: Array<Link> = [];
  configs$: Observable<any>;

  subscriptions$: Array<Subscription> = [];


  constructor(private configService: ConfigService) {}

  ngOnInit(): void {
    this.getConfig();
  }

  private getConfig() {
    this.configs$ = this.configService.getConfig();

    this.configService.getConfig()
      .subscribe((data: any) => {
          this.title = data.title;
        }
      );

    const subscription$ = this.configService.getConfig()
      .pipe(
        map((data: any) =>  data.links),
        mergeAll(),
        // filter((data: any) => data.title !== 'Home'),
        map((link: Link) => {
          this.links.push(link);
        })
      ).subscribe();
    this.subscriptions$.push(subscription$);
  }

  ngOnDestroy(): void {
      this.subscriptions$.forEach(sub => sub.unsubscribe());
  }
}
