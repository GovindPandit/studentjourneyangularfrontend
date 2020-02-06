import { Component, OnInit, Input } from '@angular/core';
import { User } from '../user'
import {UserService} from '../user.service'
import {Router} from '@angular/router';


@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  u=new User();
  @Input() selectedUser=User;

  addUser(u:User):void
  {
    this.userService.addUser(u).subscribe();
    this.router.navigateByUrl("display");
  }

  updateUser(u:User):void
  {
    this.userService.updateUser(u).subscribe();
  }

  cancel()
  {
    this.selectedUser=null;
  }

  constructor(private userService:UserService,private router:Router) { }
  ngOnInit() {
  }

}
