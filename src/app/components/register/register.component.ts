import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { NotificationService } from '../../services/notification.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @Output() cancelRegister = new EventEmitter();

  model: any = {};

  constructor(private authService: AuthService, private notification: NotificationService) {
  }

  ngOnInit() {
  }

  register() {
    this.authService.register(this.model).subscribe(() => {
      this.notification.success(`Welcome ${this.model.user}!`);
    }, error => this.notification.error(error));
  }

  cancel() {
    this.cancelRegister.emit();
  }
}
