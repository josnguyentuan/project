import { environment } from './../environments/environment';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './screens/admin/categories/list/list.component';
import { AddComponent } from './screens/admin/categories/add/add.component';
import { EditComponent } from './screens/admin/categories/edit/edit.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { ClientLayoutComponent } from './layouts/client-layout/client-layout.component';
import { DashboardComponent } from './screens/admin/dashboard/dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListBookComponent } from './screens/admin/books/list-book/list-book.component';
import { AddBookComponent } from './screens/admin/books/add-book/add-book.component';
import { EditBookComponent } from './screens/admin/books/edit-book/edit-book.component';
import { EditAuthorComponent } from './screens/admin/author/edit-author/edit-author.component';
import { ListAuthorComponent } from './screens/admin/author/list-author/list-author.component';
import { AddAuthorComponent } from './screens/admin/author/add-author/add-author.component';
import {
  AngularFireStorageModule,
  
} from "@angular/fire/storage";
import { AngularFireModule } from '@angular/fire';
import { ListBookStoreComponent } from './screens/client/list-book-store/list-book-store.component';
import { DetailBooksComponent } from './screens/client/detail-books/detail-books.component';
import { ShopComponent } from './screens/client/shop/shop.component';
import { SortCateComponent } from './screens/client/sort-cate/sort-cate.component';
import { SortAuthorComponent } from './screens/client/sort-author/sort-author.component';

import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    AddComponent,
    EditComponent,
    AdminLayoutComponent,
    ClientLayoutComponent,
    DashboardComponent,
    ListBookComponent,
    AddBookComponent,
    EditBookComponent,
    EditAuthorComponent,
    ListAuthorComponent,
    AddAuthorComponent,
    ListBookStoreComponent,
    DetailBooksComponent,
    ShopComponent,
    SortCateComponent,
    SortAuthorComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireStorageModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
        NgxPaginationModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
