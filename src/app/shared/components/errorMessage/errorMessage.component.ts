import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'mc-error-message',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div>
      {{ message }}
    </div>
  `,
})
export class ErrorMessageComponent {
  @Input() message: string = 'Something went wrong.';
}
