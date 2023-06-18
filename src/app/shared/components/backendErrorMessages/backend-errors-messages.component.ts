import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { BackendErrorsInterface } from 'src/app/shared/types/backendErrors.interface';

@Component({
  selector: 'mc-backend-errors-messages',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './backend-errors-messages.component.html',
})
export class BackendErrorMessagesComponent implements OnInit {
  @Input() backendErrors: BackendErrorsInterface = {};

  errorMessages: string[] = [];

  ngOnInit(): void {
    this.errorMessages = Object.keys(this.backendErrors).map((name: string) => {
      const messages = this.backendErrors[name].join(' ');
      return `${name} ${messages}`;
    });
  }
}
