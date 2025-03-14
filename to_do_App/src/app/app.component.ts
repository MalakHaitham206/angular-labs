import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ToDoComponentComponent } from './to-do-component/to-do-component.component';


@Component({
  selector: 'app-root',
  imports: [
    ToDoComponentComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'ToDo lab2';
}
