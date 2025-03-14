import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms'; 
import { UsersListComponent } from './users-list/users-list.component';

import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-root',
  imports: [
    UsersListComponent,FormsModule,CommonModule, FormsModule
  ],
 
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'UserList lab2';
}
