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
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  cates!: Category[];
  books!: Books[];
  authors !: Author[];
  cateId: string ="";
  bookId: string="";
  category: any;
  totalLength: any;
  page: number = 1;
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
      this.cateId = params.id;
    });
    await this.cateService.findById(this.bookId).subscribe(data=>{
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
      name: "Low - High Price"
    },
    {
      id: "2",
      name: "High - Low Price"
    },
    {
      id: "3",
      name: "Name A - Z"
    },
    {
      id: "4",
      name: "Name Z - A"
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
      this.totalLength = data.length;
      this.books= data;
    })
  }

}
