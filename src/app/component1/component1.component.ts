import { Component, OnInit } from '@angular/core';
import { MatProgressBar } from '@angular/material/progress-bar';
import { interval, takeWhile, tap } from 'rxjs';
import { MatCheckbox } from '@angular/material/checkbox';
import { MatTab, MatTabGroup } from '@angular/material/tabs';

@Component({
  selector: 'app-component1',
  standalone: true,
  imports: [MatProgressBar, MatCheckbox, MatTabGroup, MatTab],
  templateUrl: './component1.component.html',
  styleUrl: './component1.component.scss',
})
export class Component1Component implements OnInit {
  progress = 0;
  currentState = 'Loading';

  ngOnInit() {
    interval(100)
      .pipe(
        takeWhile(() => this.progress < 100),
        tap(() => {
          this.progress += 1;
          console.warn(this.progress);
          if (this.progress >= 100) {
            this.progress = 100;
            this.currentState = 'Loaded';
          }
        }),
      )
      .subscribe();
  }
}
