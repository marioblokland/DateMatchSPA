import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { NotificationService } from '../../services/notification.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model: any = {username: '', password: ''};

  constructor(private authService: AuthService, private notification: NotificationService, private router: Router) {
  }

  ngOnInit() {
  }

  login() {
    this.authService.login(this.model).subscribe(next => {
      this.notification.success('Successfully logged in');
    }, error => this.notification.error(error),
      () => this.router.navigate(['members']));
  }

  loggedIn(): boolean {
    return this.authService.isLoggedIn();
  }

  logout() {
    localStorage.removeItem('token');
    this.notification.info('Logged out');
    this.router.navigate(['home']);
  }
}
