import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-confirm-dialog',
  // templateUrl: './confirm-dialog.component.html',
  
   template: `
   

     <h1 mat-dialog-title>Biztos benne?</h1>
      <!-- <div mat-dialog-actions> -->
      <div >
        <button id="yes" mat-button (click)="onConfirm()">Igen</button>
        <button id="cancel" mat-button (click)="onCancel()">Nem</button>
      </div>

   
   `,
  styleUrl: './confirm-dialog.component.css',
})
export class ConfirmDialogComponent {
  constructor(public dialogRef: MatDialogRef<ConfirmDialogComponent>) {}

  onConfirm(): void {
    this.dialogRef.close(true);
  }

  onCancel(): void {
    this.dialogRef.close(false);
  }
}
