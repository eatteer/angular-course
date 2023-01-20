import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Hero } from '../../interfaces/heroes.interfaces';

@Component({
  selector: 'app-confirm-deletion',
  templateUrl: './confirm-deletion.component.html',
  styles: [],
})
export class ConfirmDeletionComponent {
  public constructor(
    private matDialogRef: MatDialogRef<ConfirmDeletionComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Hero
  ) {}

  public close(): void {
    this.matDialogRef.close();
  }

  public confirm(): void {
    this.matDialogRef.close(true);
  }
}
