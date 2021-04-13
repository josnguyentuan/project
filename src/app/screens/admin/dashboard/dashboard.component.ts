import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import { Category } from 'src/app/models/category';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  cates!: Category[];

  constructor(private cateService: CategoryService) { }

  ngOnInit(): void {
  }
  getCatesData(){
    this.cateService.all().subscribe(data => {
      this.cates = data;
    })
  }

}
