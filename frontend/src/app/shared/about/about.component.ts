import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styles: []
})
export class AboutComponent implements OnInit {
  public title: string;
  public subTitle: string;


  constructor() { }

  ngOnInit() {
    this.title = 'About Me';
    this.subTitle = 'My Name';
  }

}
