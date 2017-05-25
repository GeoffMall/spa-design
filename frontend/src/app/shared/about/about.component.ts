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
    this.title = 'Empress Day Spa';
    this.subTitle = 'Sheree Weaver ';
  }

}
