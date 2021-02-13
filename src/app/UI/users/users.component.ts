import { Component, OnInit, OnDestroy } from '@angular/core';

import { IUser } from '../../services/user/user.IService';
import { ICommon } from '../../services/common/common.IService';

import { IUserInfo } from '../../Interfaces/IUSer.Interface';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit, OnDestroy {
  
  pageName: string = 'Users';
  totalUsers: Number;
  isCardVisible : Boolean = true;
  users: Array<IUserInfo>;

  constructor(private iUser: IUser, private iCommon: ICommon) { 
    this.loadUserDetails();
    this.getClickedView();
  }

  ngOnInit() {
  }

  // load the user details from rest api
  loadUserDetails() {
    this.iUser.getAllUsers().subscribe(users => {
      this.users = users.slice(0, 6);
      this.totalUsers = this.users.length;
    });
  }

  /* This function retrives the type of users view needed to show (tile/table).
  Its value has been set from contentheader.component.html, which is part of layout module (button available there)
  So through subscription we always get the latest data here
  */
  getClickedView() {
    this.iCommon.getItemClicked().subscribe(item => {
      this.isCardVisible  = item === 'table' ? false : true;
    })
  }

  ngOnDestroy(){
  }
}
