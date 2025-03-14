import { Component } from '@angular/core';
import { User } from '../types/user';
import { NgClass } from '@angular/common';
import users from '../../assets/users.json';

@Component({
  selector: 'app-users-list',
  imports: [NgClass],
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.css',
})
export class UsersListComponent {
  users: Array<User> = users;
}
