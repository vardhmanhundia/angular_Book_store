import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookComponent } from './components/book/book.component';
import { BooksComponent } from './components/books/books.component';
import { AuthorComponent } from './components/author/author.component';
import { AuthorsComponent } from './components/authors/authors.component';
import { IconsProviderModule } from './icons-provider.module';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import { NzGridModule } from 'ng-zorro-antd/grid';
import en from '@angular/common/locales/en';
import { InputBookComponent } from './components/input-book/input-book.component';
import { AddAuthorComponent } from './components/add-author/add-author.component';
import { AuthorDetailviewComponent } from './components/author-detailview/author-detailview.component';
import { BookDetailviewComponent } from './components/book-detailview/book-detailview.component';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    BooksComponent,
    AuthorComponent,
    AuthorsComponent,
    InputBookComponent,
    AddAuthorComponent,
    AuthorDetailviewComponent,
    BookDetailviewComponent,
  ],
  imports: [
    NzCardModule,
    BrowserModule,
    AppRoutingModule,
    IconsProviderModule,
    NzLayoutModule,
    NzMenuModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NzGridModule,
    NzAvatarModule,
    NzFormModule,
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent],
})
export class AppModule {}
