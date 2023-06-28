import { Component } from '@angular/core';
import { ArticleFormComponent } from 'src/app/shared/components/articleForm/articleForm.component';
import { ArticleFormValuesInterface } from 'src/app/shared/components/articleForm/types/articleFormValues.interface';

@Component({
  selector: 'mc-create-article',
  standalone: true,
  imports: [ArticleFormComponent],
  templateUrl: './createArticle.component.html',
})
export class CreateArticleComponent {
  initialValues = {
    title: '',
    description: '',
    body: '',
    tagList: [],
  };

  onSubmit(articleFormValues: ArticleFormValuesInterface): void {
    console.log(articleFormValues);
  }
}
