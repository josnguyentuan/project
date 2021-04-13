import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category';
import { BookService } from 'src/app/services/book.service';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  cates!: Category[];
  constructor(private cateService: CategoryService,
            private bookService: BookService) { }

  ngOnInit(): void {
    this.getCatesData();
  }

  getCatesData(){
    this.cateService.all().subscribe(data => {
      this.cates = data;
    })
  }

  deleteCate(id: any){
    this.cateService.findById(id).subscribe(cate => {
      this.cateService.delete(cate.id).subscribe(data =>{
        this.cates = this.cates.filter(el=> el.id != cate.id);
      })
    });
  }

}
