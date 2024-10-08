import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog'; // MatDialog importálása
import { DUMMY_USERS } from '../dummy-users';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';



const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'] // Többes szám helyesen
})
export class UserComponent {
  selectedUser = DUMMY_USERS[randomIndex];
  
  constructor(private dialog: MatDialog) {} // Helyesen itt inicializáljuk a MatDialog-ot

  // get imagePath () {
  //   return 'assets/users/' + this.selectedUser.avatar;
  // }

  // Kattintásra nyíló dialógus
  openConfirmDialog(): void {
    const dialogRef = this.dialog.open(ConfirmDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        // Választás esetén új random felhasználót választunk
        const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
        this.selectedUser = DUMMY_USERS[randomIndex];
        console.log('Felhasználó megerősítette');
      } else {
        console.log('Felhasználó megszakította');
      }
    });
  }
}
