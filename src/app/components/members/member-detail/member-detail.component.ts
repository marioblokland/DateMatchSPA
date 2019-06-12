import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { User } from '../../../models/user';
import { UserService } from '../../../services/user.service';
import { NotificationService } from '../../../services/notification.service';
import { ActivatedRoute } from '@angular/router';
import { NgxGalleryAnimation, NgxGalleryImage, NgxGalleryOptions } from 'ngx-gallery';

@Component({
  selector: 'app-member-detail',
  templateUrl: './member-detail.component.html',
  styleUrls: ['./member-detail.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class MemberDetailComponent implements OnInit {
  /**
   * User will be shown
   */
  user: User;

  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];

  /**
   * Constructor
   * @param userService User service.
   * @param notify Notification service.
   * @param route Activated route.
   */
  constructor(private userService: UserService, private notify: NotificationService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.user = data.user;
    });

    this.galleryOptions = [
      {
        width: '500px',
        height: '500px',
        imagePercent: 100,
        thumbnailsColumns: 4,
        imageAnimation: NgxGalleryAnimation.Slide,
        preview: false
      }
    ];

    this.galleryImages = this.getImages();
  }

  /**
   * Returns a list of images, including the images description from the user.
   */
  getImages() {
    const images = [];

    for (const photo of this.user.photos) {
      images.push({small: photo.url, medium: photo.url, big: photo.url, description: photo.description});
    }

    return images;
  }
}
