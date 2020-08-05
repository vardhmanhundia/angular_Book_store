import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BooksComponent } from './components/books/books.component';
import { AuthorsComponent } from './components/authors/authors.component';
import { AddAuthorComponent } from './components/add-author/add-author.component';
import { InputBookComponent } from './components/input-book/input-book.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/books' },
  {
    path: 'welcome',
    loadChildren: () =>
      import('./pages/welcome/welcome.module').then((m) => m.WelcomeModule),
  },
  {
    path: 'books',
    component: BooksComponent,
  },
  {
    path: 'authors',
    component: AuthorsComponent,
  },
  {
    path: 'add-author',
    component: AddAuthorComponent,
  },
  {
    path: 'add-book',
    component: InputBookComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
