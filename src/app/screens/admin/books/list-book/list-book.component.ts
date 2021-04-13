import { CategoryService } from './../../../../services/category.service';
import { BookService } from 'src/app/services/book.service';
import { Category } from './../../../../models/category';
import { Component, OnInit } from '@angular/core';
import { Books } from 'src/app/models/books';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-list-book',
  templateUrl: './list-book.component.html',
  styleUrls: ['./list-book.component.css']
})
export class ListBookComponent implements OnInit {
  category: any;
  books!: Books[];
  constructor(private route: ActivatedRoute,
    private router: Router,
    private bookService: BookService,
    private cateService: CategoryService
  ) { }

  ngOnInit(): void {
    this.getBooksData();
  }
  getBooksData(){
    this.bookService.all().subscribe(data=>{
      this.category = data;
      console.log(data);
    })
  }
  deleteBooks(id: any){
    // lấy thông tin danh mục kèm các quyển sách
    this.bookService.findById(id).subscribe(book => {
      this.bookService.delete(book.id).subscribe(data =>{
        this.books = this.books.filter(el=> el.id != book.id);
      })
    });
    
  }

}
