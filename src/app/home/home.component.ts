import {
  AfterViewInit,
  Component,
  ElementRef,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class HomeComponent implements AfterViewInit {
  @ViewChild('test1') test1!: ElementRef;
  @ViewChild('youtubeModal') youtubeModal!: ElementRef;
  @ViewChild('ytIframe') ytIframe!: ElementRef;

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
      img: 'https://scontent.fesb10-4.fna.fbcdn.net/v/t1.6435-9/87454010_2584991181820558_3660209380629938176_n.jpg?_nc_cat=107&cb=99be929b-3346023f&ccb=1-7&_nc_sid=9267fe&_nc_ohc=SEIbln9RKPUAX8n7HBh&_nc_ht=scontent.fesb10-4.fna&oh=00_AfAbplZ6WglKO1tiTYEuTXt8Y11vdovXbV5vkASMD10aCQ&oe=64E0F624',
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
      img: 'https://scontent.fesb10-4.fna.fbcdn.net/v/t1.6435-9/87454010_2584991181820558_3660209380629938176_n.jpg?_nc_cat=107&cb=99be929b-3346023f&ccb=1-7&_nc_sid=9267fe&_nc_ohc=SEIbln9RKPUAX8n7HBh&_nc_ht=scontent.fesb10-4.fna&oh=00_AfAbplZ6WglKO1tiTYEuTXt8Y11vdovXbV5vkASMD10aCQ&oe=64E0F624',
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
      img: 'https://scontent.fesb10-4.fna.fbcdn.net/v/t1.6435-9/87454010_2584991181820558_3660209380629938176_n.jpg?_nc_cat=107&cb=99be929b-3346023f&ccb=1-7&_nc_sid=9267fe&_nc_ohc=SEIbln9RKPUAX8n7HBh&_nc_ht=scontent.fesb10-4.fna&oh=00_AfAbplZ6WglKO1tiTYEuTXt8Y11vdovXbV5vkASMD10aCQ&oe=64E0F624',
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
  ngAfterViewInit(): void {}

  ngOnInit(): void{}

  public scrollRight(): void {
    var blockOuterWidth = $(this.test1.nativeElement).find('> div > div').outerWidth(true);
    var newPos = $(this.test1.nativeElement).scrollLeft() + blockOuterWidth;
    $(this.test1.nativeElement).animate(
      {
        scrollLeft: newPos,
      },
      150
    );
  }
  public scrollLeft(): void {
    var blockOuterWidth = $(this.test1.nativeElement).find('> div > div').outerWidth(true);
    var newPos = $(this.test1.nativeElement).scrollLeft() - blockOuterWidth;
    $(this.test1.nativeElement).animate(
      {
        scrollLeft: newPos,
      },
      150
    );
  }

  public openYoutubeModal(): void {
    this.ytIframe.nativeElement.src = 'https://www.youtube.com/embed/5pqsUfK2N1o?autoplay=1';
    this.youtubeModal.nativeElement.classList.remove('hidden');
  }
}
