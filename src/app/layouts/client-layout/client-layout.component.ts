import { CategoryService } from './../../services/category.service';
import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category';

@Component({
  selector: 'app-client-layout',
  templateUrl: './client-layout.component.html',
  styleUrls: ['./client-layout.component.css']
})
export class ClientLayoutComponent implements OnInit {
  cates: Category[] = [];

  constructor(
    private categoryService: CategoryService
  ) { }

  ngOnInit(): void {
    this.getMenuData()
  }
  getMenuData(){
    this.categoryService.all().subscribe(data => {
      this.cates = data;
    });
  }

}
