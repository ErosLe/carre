import { Component } from '@angular/core';

import { DUMMY_USERS } from '../dummy-users';

//declare function getRandomInt(min: number, max: number): number;

const randomIndex= Math.floor(Math.random()* DUMMY_USERS.length)
//const randomIndex : number=  getRandomInt(0, DUMMY_USERS.length)

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  selectedUser = DUMMY_USERS[randomIndex];

  get imagePath () {
    return 'assets/users/' + this.selectedUser.avatar
  }
}
