import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../authentication.service';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent implements OnInit {

  constructor(public authenticationService: AuthenticationService) { }
  username = 'Mario';
  isLoggedIn = false;
  ngOnInit() {
    this.isLoggedIn = this.authenticationService.isLoggedIn(this.username);
  }

}
