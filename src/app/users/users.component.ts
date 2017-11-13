import { Component, Input, EventEmitter, Output } from "@angular/core";
import { UsersService } from "../users.service";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  providers: [UsersService]
})

export class UsersComponent {
  showInfo = false;
  color = 'green';
  // @Input() users: any;
  users: any[];
  @Output() alertThrown = new EventEmitter<string>();

  constructor(private usersService: UsersService) {
    this.users = this.usersService.getUsers();
  }

  onShowAlert() {
    this.alertThrown.emit('This is my message');
  }
}
