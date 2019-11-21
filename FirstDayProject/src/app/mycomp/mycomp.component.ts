import { Component, OnInit,Input } from '@angular/core';
import { UserService } from '../shared/userdata.service';
import { DepartmentService } from '../shared/departmentdata.service';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-mycomp',
  templateUrl: './mycomp.component.html',
  styleUrls: ['./mycomp.component.css']
})
export class MycompComponent implements OnInit {

  userdata
  departmentdata
  mycity="Pune";
  defaulttotalLikes = 200;
  @Input()
   isActive=true
  colorValue="green";
  myStyles = {
    'background-color':'pink',
    'font-size':'30px'
  }
  myimage="https://www.w3schools.com/howto/img_avatar2.png"
  constructor(private ud:UserService,private dd:DepartmentService) { }

  ngOnInit() {
    this.userdata = this.ud.loadUsers();
    this.departmentdata = this.dd.loadDepartments();
  }

  clickMe()
  {
    this.mycity="haridwar";
  }
}
