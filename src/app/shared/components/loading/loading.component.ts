import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'mc-loading',
  standalone: true,
  imports: [CommonModule],
  template: ` <div>Loading...</div> `,
})
export class LoadingComponent {}
