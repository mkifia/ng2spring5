import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../authentication.service';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent implements OnInit {

  constructor(public authenticationService: AuthenticationService) { }
  counter = 0;
  isLoggedIn = false;
  connectionError = 'no error';
  ngOnInit() {
    setInterval(() =>{
      this.counter++;
    }, 1000);
  }
  public login(username, password) {
    this.authenticationService.isLoggedIn(username, password).subscribe(
      res => this.isLoggedIn = res, error => this.connectionError = error);
  }
}
