import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-nav-btn',
  templateUrl: './nav-btn.component.html',
  styleUrls: ['./nav-btn.component.css']
})
export class NavBtnComponent implements OnInit {
  @Input() route_name:string
  constructor() { }

  ngOnInit(): void {
  }

}
