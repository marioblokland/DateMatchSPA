import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { NotificationService } from '../../services/notification.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model: any = {username: '', password: ''};

  constructor(private authService: AuthService, private notification: NotificationService) {
  }

  ngOnInit() {
  }

  login() {
    this.authService.login(this.model).subscribe(next => {
      this.notification.success('Successfully logged in');
    }, error => this.notification.error(error));
  }

  loggedIn(): boolean {
    return this.authService.isLoggedIn();
  }

  logout() {
    localStorage.removeItem('token');
    this.notification.info('Logged out');
  }
}
