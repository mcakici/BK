import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-custompage',
  templateUrl: './custompage.component.html',
  styleUrls: ['./custompage.component.scss'],
})
export class CustompageComponent {
  public data:any;
  constructor(private activatedroute: ActivatedRoute) {
    this.activatedroute.data.subscribe((data) => {
      this.data = data;
    });
  }
}
