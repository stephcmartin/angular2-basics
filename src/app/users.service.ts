export class UsersService{
  private registerUsers=['Steph', 'Harry', 'Waldo'];

  getUsers(){
    return this.registerUsers;
  }
}
