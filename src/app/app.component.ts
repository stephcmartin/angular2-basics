import { Component } from '@angular/core';
import { UsersSerivce} from './users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'app works!';
  age = 27;
  person= {
    name: 'Steph',
    age: 27
  };

  users: any[];

  constructor(private usersSerivce: UsersSerivce){
    this.users = this.usersSerivce.getUsers()
  }

  getName()
  {
    return 'Steph';
  };

  setAge(age: number){
    this.age = age;
  }

  onChildAlert(message: string){
    alert(message)
  }
}
