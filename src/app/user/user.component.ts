import {Component, OnInit} from '@angular/core';
import {UserService} from "../user.service";
import {UserInterface} from "../user-interface";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit{

  userList: UserInterface[] = [];

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getAllUsers().subscribe(data=>{
      this.userList = data;
    })
  }

}
