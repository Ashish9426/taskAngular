import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  src = "https://www.chetu.com/img/chetu-logo-white.png"
  constructor() { }

  ngOnInit(): void {
  }

}
