import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {

  route_data = ['HOME', "MOVIES LIST"]

  constructor() { }

  ngOnInit(): void {
  }

}
