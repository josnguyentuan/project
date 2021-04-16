import { SortCateComponent } from './screens/client/sort-cate/sort-cate.component';
import { ShopComponent } from './screens/client/shop/shop.component';
import { DetailBooksComponent } from './screens/client/detail-books/detail-books.component';
import { ListBookStoreComponent } from './screens/client/list-book-store/list-book-store.component';
import { EditBookComponent } from './screens/admin/books/edit-book/edit-book.component';
import { AddBookComponent } from './screens/admin/books/add-book/add-book.component';
import { EditComponent } from './screens/admin/categories/edit/edit.component';
import { ListComponent } from './screens/admin/categories/list/list.component';
import { DashboardComponent } from './screens/admin/dashboard/dashboard.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './screens/admin/categories/add/add.component';
import { ListBookComponent } from './screens/admin/books/list-book/list-book.component';
import { ListAuthorComponent } from './screens/admin/author/list-author/list-author.component';
import { AddAuthorComponent } from './screens/admin/author/add-author/add-author.component';
import { EditAuthorComponent } from './screens/admin/author/edit-author/edit-author.component';
import { ClientLayoutComponent } from './layouts/client-layout/client-layout.component';
import { SortAuthorComponent } from './screens/client/sort-author/sort-author.component';

const routes: Routes = [
  {
    path: "admin",
    component: AdminLayoutComponent,
    children: [
      {
        path: "",
        redirectTo: "dashboard",
        pathMatch: "full"
      },
      {
        path: "dashboard",
        component: DashboardComponent,
      },
      {
        path: "categories",
        component: ListComponent,
      },
      {
        path: "categories/add",
        component: AddComponent
      },
      {
        path: "categories/edit/:id",
        component: EditComponent,
      },
      {
        path: "books",
        component: ListBookComponent
      },
      {
        path: "books/add",
        component: AddBookComponent
      },
      {
        path: "books/edit/:id",
        component: EditBookComponent
      },
      {
        path: "authors",
        component: ListAuthorComponent,
      },
      {
        path: "authors/add",
        component: AddAuthorComponent
      },
      {
        path: "authors/edit/:id",
        component: EditAuthorComponent,
      },
    ]
  },
  {
    path: "",
    component: ClientLayoutComponent,
    children: [
      {
        path:"",
        redirectTo: "homepage",
        pathMatch: "full"
      },{
        path:"homepage",
        component: ListBookStoreComponent
      },
      {
        path: "book/detail/:id",
        component: DetailBooksComponent
      },
      {
        path: "shop",
        component: ShopComponent
      },
      {
        path: "shop/cate/:id",
        component: SortCateComponent
      },
      {
        path: "shop/author/:id",
        component: SortAuthorComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
