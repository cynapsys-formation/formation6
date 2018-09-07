import {Component, Input, OnInit} from '@angular/core';
import {Link} from '../../../shared/models/link';
import {NotificationService} from '../../../shared/services/notification.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  @Input() title;
  @Input() links: Array<Link> = [];
  isNavbarCollapsed; boolean;

  message: string;

  constructor(private notificationService: NotificationService) {

  }

  ngOnInit() {
    this.notificationService.getMessage.subscribe(data => {
      console.log('gggg', data);
      this.message = data;
    });
  }

}
