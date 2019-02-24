import { Component } from '@angular/core';
import { AuthorsService } from './shared/authors.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular2';
  authors:string[];
  constructor(private authorsService:AuthorsService){
    this.authors = authorsService.getAuthors();    
  }
}
