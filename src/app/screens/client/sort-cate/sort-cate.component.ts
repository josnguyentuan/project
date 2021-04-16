import { ActivatedRoute } from '@angular/router';
import { AuthorService } from './../../../services/author.service';
import { CategoryService } from 'src/app/services/category.service';
import { Component, OnInit } from '@angular/core';
import { Author } from 'src/app/models/author';
import { Books } from 'src/app/models/books';
import { Category } from 'src/app/models/category';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-shop',
  templateUrl: './sort-cate.component.html',
  styleUrls: ['./sort-cate.component.css']
})
export class SortCateComponent implements OnInit {
  cates!: Category[];
  books!: Books[];
  authors !: Author[];
  authorId: string ="";
  bookId: string="";
  category: any;
  author: any;
  constructor(
    private cateService: CategoryService,
    private bookService: BookService,
    private authorService: AuthorService,
    private route: ActivatedRoute

  ) { 
    this.getCatesData();
    this.getAuthorData();
    this.getBooksData();
  }
  async ngOnInit() {
    await this.route.params.subscribe(params => {
      this.authorId = params.id;
    });
 
    await this.authorService.findById(this.authorId).subscribe(data=>{
      this.category = data.books;
      console.log(data);
    })
  }
  getCatesData(){
    this.cateService.all().subscribe(data => {
      this.cates = data;
    })
  }
  filterObject = {
    keyword: "",
    orderBy: "1"
  }

  orderCondition: any[] = [
    {
      id: "1",
      name: "Giá tăng dần"
    },
    {
      id: "2",
      name: "Giá giảm dần"
    },
    {
      id: "3",
      name: "Tên tăng dần"
    },
    {
      id: "4",
      name: "Tên giảm dần"
    }
  ];
  search(){
    this.bookService.getAll(this.filterObject).subscribe(data => {
      this.books = data;
    })
  }
  getAuthorData(){
    this.authorService.all().subscribe(data=>{
      this.authors = data;
    })
  }
  getBooksData(){
    this.bookService.all().subscribe(data=>{
      this.books= data;
    })
  }

}
