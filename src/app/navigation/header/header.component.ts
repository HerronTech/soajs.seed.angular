import {Component, EventEmitter, OnInit, Output} from '@angular/core';

import {UracService} from '../../services/urac.service';
import {AuthenticationService} from '../../services/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() public sidenavToggle = new EventEmitter();
  userInfo = null;

  constructor(
    private uracService: UracService,
    private authenticationService: AuthenticationService,
  ) {
  }

  ngOnInit(): void {
    this.uracService.userInfo.subscribe(userInfo => this.userInfo = userInfo);
  }

  logout() {
    this.authenticationService.logout();
    this.userInfo = null;
  }

  public onToggleSidenav = () => {
    this.sidenavToggle.emit();
  }

}
