import { ActivatedRoute } from '@angular/router';
import { CategoryService } from './../../../services/category.service';
import { Component, OnInit } from '@angular/core';
import { Books } from 'src/app/models/books';
import { Category } from 'src/app/models/category';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-detail-books',
  templateUrl: './detail-books.component.html',
  styleUrls: ['./detail-books.component.css']
})
export class DetailBooksComponent implements OnInit {
  category: any;
  bookId: string="";
  books!: Books[];
  book : any;
  categories!: Category[];
  constructor(
    private bookService: BookService,
    private categoryService: CategoryService,
    private route: ActivatedRoute
  ) { }

  async ngOnInit() {
    await this.route.params.subscribe(params => {
      this.bookId = params.id;
    });

    await this.bookService.findById(this.bookId).subscribe(data => {
      this.book = data;
      console.log(data);
    });
    await this.categoryService.findById(this.bookId).subscribe(data=>{
      this.category = data.books;
      console.log(data);
    })
  }

}
  


