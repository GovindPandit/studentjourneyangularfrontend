import { Component, OnInit, OnChanges } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user';
import { Observable, of } from 'rxjs';
import {Router} from '@angular/router';

@Component({
  selector: 'app-display-users',
  templateUrl: './display-users.component.html',
  styleUrls: ['./display-users.component.css']
})
export class DisplayUsersComponent implements OnInit {

  users:User[];
  selectedUser:User;

  constructor(private userService:UserService,private router:Router) { }

  displayUsers():void
  {
    this.userService.displayUsers().subscribe(users => this.users =users);
  }

  deleteUser(u:User):void
  {
    this.userService.deleteUser(u).subscribe();  
    alert("Data deleted successfully!!!");
  }

  selectUser(u:User):void
  {
      this.selectedUser=u;
  }

  ngOnInit() 
  {
    this.displayUsers();
  }

}
