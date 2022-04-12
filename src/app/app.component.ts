import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bs';

  public books = [{
    title: 'Harry Potter',
    price: 10
  },
  {
    title: 'Narnia',
    price: 15
  },
  ];

  public movies = [{
    title: 'Die Hard',
    star: 'Bruce Willis'
  },
  {
    title: 'Pulp Fiction',
    star: 'John Travolta'
  },
  {
    title: 'The big Lebowski',
    star: 'John Goodman'
  }];

  clickBook(book:any) {
    alert(`Libro: ${JSON.stringify(book)}`);
  }

  clickMovie(movie:any) {
    alert(`Film: ${JSON.stringify(movie)}`);
  }
}