import { CategoryService } from './../../../services/category.service';
import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/services/book.service';
import { Books } from 'src/app/models/books';
import { Category } from 'src/app/models/category';

@Component({
  selector: 'app-list-book-store',
  templateUrl: './list-book-store.component.html',
  styleUrls: ['./list-book-store.component.css']
})
export class ListBookStoreComponent implements OnInit {
  category: any;
  books!: Books[];
  allBooks!: Books[];

  categories!: Category[];
  filterObject = {
    keyword: "",
    orderBy: "1"
  }
  orderCondition: any[] = [
    {
      id: "1",
      name: "Increase Price"
    },
    {
      id: "2",
      name: "Decrease Price"
    },
    {
      id: "3",
      name: "Name a-z"
    },
    {
      id: "4",
      name: "Name z-a"
    }
  ];
  constructor(
    private bookService: BookService,
    private categoryService: CategoryService
  ) { }

  ngOnInit(): void {
    this.getBooksData();
    this.getCategories();
    this.getAllBooksData();
  }
  getBooksData(){
    this.bookService.ads().subscribe(data=>{
      this.books = data;
    })
  }
  getAllBooksData(){
    this.bookService.all().subscribe(data=>{
      this.allBooks = data;
    })
  }
  getCategories(){
    this.categoryService.all().subscribe(data=>{
      this.categories = data
    })
  }

}
