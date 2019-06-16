import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { User } from '../../../models/user';
import { ActivatedRoute } from '@angular/router';
import { NotificationService } from '../../../services/notification.service';
import { NgForm } from '@angular/forms';
import { UserService } from '../../../services/user.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-member-edit',
  templateUrl: './member-edit.component.html',
  styleUrls: ['./member-edit.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class MemberEditComponent implements OnInit {
  @ViewChild('editForm') editForm: NgForm;

  user: User;

  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private notify: NotificationService,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.route.data.subscribe(data => (this.user = data.user));
  }

  updateUser() {
    this.userService.updateUser(this.authService.decodedToken.nameid, this.user).subscribe(
      () => {
        this.notify.success('Profile successfully updated');
        this.editForm.reset(this.user);
      },
      error => this.notify.error(error)
    );
  }
}
