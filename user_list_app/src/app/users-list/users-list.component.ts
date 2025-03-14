import { Component } from '@angular/core';
import { User } from '../types/user';
import { NgClass } from '@angular/common';
import users from '../../assets/users.json';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 
@Component({
  selector: 'app-users-list',
  imports: [NgClass,CommonModule,FormsModule],
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.css',
})
export class UsersListComponent {
  users: Array<User> = users;
  searchQuery: string = '';
  filteredUsers = [...this.users];

  filterUsers() {
    this.filteredUsers = this.users.filter(user =>
      user.email.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  }

  resetSearch() {
    this.searchQuery = '';
    this.filteredUsers = [...this.users];
  }
}
