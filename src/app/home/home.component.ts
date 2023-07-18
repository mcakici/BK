import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements AfterViewInit {
  @ViewChild('test1') test1!: ElementRef;

  testimonials = [
    {
      author: 'Zoomerr',
      title: 'Manager',
      realname: 'Hellena John',
      comment:
        'Egestas elit dui scelerisque ut eu purus aliquam fvitae habitasse.',
      img: 'https://media.gq.com/photos/59135193dd27d21b427e26be/16:9/w_2560%2Cc_limit/acg-sneakers.jpg',
    },
    {
      author: 'SHELLS',
      title: 'Co-founder',
      realname: 'Hellen Jummy',
      comment:
        'Sit bibendum donec dolar fames neque vulputate non sit aliquam. Consequat turpis natoque leo,  massa.',
      img: 'https://images.pexels.com/photos/3490360/pexels-photo-3490360.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    },
    {
      author: 'ArtVenue',
      title: 'Founder',
      realname: 'Peter Bishop',
      comment:
        'Cras venenatis lorem non nibh rhoncus placerat. Integer ut tortor ut felis aliquam luctus.',
      img: 'https://static.nike.com/a/images/f_auto/dpr_3.0,cs_srgb/h_500,c_limit/f55bf732-7fa9-4b38-8464-3332d97f879a/nike%E2%80%99s-best-casual-shoes-for-everyday-wear.jpg',
    },
    {
      author: 'BOOMER',
      title: 'Team Lead',
      realname: 'David Backend',
      comment:
        'Cras venenatis lorem non nibh rhoncus placerat. Integer ut tortor ut felis aliquam luctus.',
      img: 'https://static.nike.com/a/images/f_auto/dpr_3.0,cs_srgb/h_500,c_limit/f55bf732-7fa9-4b38-8464-3332d97f879a/nike%E2%80%99s-best-casual-shoes-for-everyday-wear.jpg',
    },
    {
      author: 'CrazyBoy34',
      title: 'Manager',
      realname: 'Belina Bonhem',
      comment:
        'Egestas elit dui scelerisque ut eu purus aliquam fvitae habitasse.',
      img: 'https://media.gq.com/photos/59135193dd27d21b427e26be/16:9/w_2560%2Cc_limit/acg-sneakers.jpg',
    },
    {
      author: 'Charles',
      title: 'Co-founder',
      realname: 'John Smith',
      comment:
        'Sit bibendum donec dolar fames neque vulputate non sit aliquam. Consequat turpis natoque leo,  massa.',
      img: 'https://images.pexels.com/photos/3490360/pexels-photo-3490360.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    },
    {
      author: 'Angel',
      title: 'Team Lead',
      realname: 'Chris Pane',
      comment:
        'Cras venenatis lorem non nibh rhoncus placerat. Integer ut tortor ut felis aliquam luctus.',
      img: 'https://static.nike.com/a/images/f_auto/dpr_3.0,cs_srgb/h_500,c_limit/f55bf732-7fa9-4b38-8464-3332d97f879a/nike%E2%80%99s-best-casual-shoes-for-everyday-wear.jpg',
    },
    {
      author: 'Croppic',
      title: 'Team Lead',
      realname: "Carlos De'man",
      comment:
        'Cras venenatis lorem non nibh rhoncus placerat. Integer ut tortor ut felis aliquam luctus.',
      img: 'https://static.nike.com/a/images/f_auto/dpr_3.0,cs_srgb/h_500,c_limit/f55bf732-7fa9-4b38-8464-3332d97f879a/nike%E2%80%99s-best-casual-shoes-for-everyday-wear.jpg',
    },
    {
      author: 'Next',
      title: 'Manager',
      realname: 'Richard Garriot',
      comment:
        'Egestas elit dui scelerisque ut eu purus aliquam fvitae habitasse.',
      img: 'https://media.gq.com/photos/59135193dd27d21b427e26be/16:9/w_2560%2Cc_limit/acg-sneakers.jpg',
    },
    {
      author: 'Power',
      title: 'Co-founder',
      realname: 'Christina Lane',
      comment:
        'Sit bibendum donec dolar fames neque vulputate non sit aliquam. Consequat turpis natoque leo,  massa.',
      img: 'https://images.pexels.com/photos/3490360/pexels-photo-3490360.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    },
    {
      author: 'TurtleBeach',
      title: 'Team Lead',
      realname: 'Haneka Osawaki',
      comment:
        'Cras venenatis lorem non nibh rhoncus placerat. Integer ut tortor ut felis aliquam luctus.',
      img: 'https://static.nike.com/a/images/f_auto/dpr_3.0,cs_srgb/h_500,c_limit/f55bf732-7fa9-4b38-8464-3332d97f879a/nike%E2%80%99s-best-casual-shoes-for-everyday-wear.jpg',
    },
    {
      author: 'Sunrise',
      title: 'Senior Developer',
      realname: 'Harold Finch',
      comment:
        'Cras venenatis lorem non nibh rhoncus placerat. Integer ut tortor ut felis aliquam luctus.',
      img: 'https://static.nike.com/a/images/f_auto/dpr_3.0,cs_srgb/h_500,c_limit/f55bf732-7fa9-4b38-8464-3332d97f879a/nike%E2%80%99s-best-casual-shoes-for-everyday-wear.jpg',
    },
  ];
  constructor(private elemRef: ElementRef) {}
  ngAfterViewInit(): void {
  }

  public scrollRight(): void {
    $(this.test1.nativeElement).animate(
      {
        scrollLeft: $(this.test1.nativeElement).scrollLeft() + 275,
      },
      150
    );
  }
  public scrollLeft(): void {
    $(this.test1.nativeElement).animate(
      {
        scrollLeft: $(this.test1.nativeElement).scrollLeft() - 275,
      },
      150
    );
  }
}
