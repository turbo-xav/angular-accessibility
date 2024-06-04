import { Component } from '@angular/core';
import {
  MatDialogActions,
  MatDialogContent,
  MatDialogRef,
} from '@angular/material/dialog';

@Component({
  selector: 'app-accessible-dialog',
  standalone: true,
  imports: [MatDialogContent, MatDialogActions],
  templateUrl: './accessible-dialog.component.html',
  styleUrl: './accessible-dialog.component.scss',
})
export class AccessibleDialogComponent {
  constructor(public dialogRef: MatDialogRef<AccessibleDialogComponent>) {}

  onClose(): void {
    this.dialogRef.close();
  }
}
