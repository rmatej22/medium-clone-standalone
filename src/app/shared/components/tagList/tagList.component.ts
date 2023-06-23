import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { PopularTagType } from '../../types/popularTag.type';

@Component({
  selector: 'mc-tag-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tagList.component.html',
})
export class TagListComponent {
  @Input() tags: PopularTagType[] = [];
}
