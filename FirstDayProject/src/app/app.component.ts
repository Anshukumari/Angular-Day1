import { Component } from '@angular/core';
import { inject } from '@angular/core/testing';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   myval = true;
  title = 'FirstDayProject';
}
