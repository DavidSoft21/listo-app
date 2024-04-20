import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  
  @Output() static updateBackground = new EventEmitter<boolean>();
  userLoginOn: boolean = false;

  ngOnInit() {
  }
}