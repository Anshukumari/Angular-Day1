import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  userdata ={
    uname:'admin',
    income:77685,
    rating:4.9869,
    joinDate : new Date('11/11/2017')
  }
  constructor() { }

  ngOnInit() {
  }

}
