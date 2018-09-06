import {Component, Input, OnInit} from '@angular/core';
import {Link} from '../../../shared/models/link';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  @Input() title;
  @Input() links: Array<Link> = [];
  isNavbarCollapsed; boolean;

  constructor() { }

  ngOnInit() {

  }

}
