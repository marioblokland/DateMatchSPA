import { Component, HostListener, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { User } from '../../../models/user';
import { ActivatedRoute } from '@angular/router';
import { NotificationService } from '../../../services/notification.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-member-edit',
  templateUrl: './member-edit.component.html',
  styleUrls: ['./member-edit.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class MemberEditComponent implements OnInit {
  @ViewChild('editForm') editForm: NgForm;

  user: User;

  constructor(private route: ActivatedRoute, private notify: NotificationService) {
  }

  ngOnInit() {
    this.route.data.subscribe(data => this.user = data.user);
  }

  updateUser() {
    this.notify.success('Profile updated successfully');
    this.editForm.reset(this.user);
  }
}
