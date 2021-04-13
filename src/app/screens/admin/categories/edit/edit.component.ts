import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  cateId: Number = -1;
  editCate: FormGroup;
  constructor(private route: ActivatedRoute,
            private router: Router,
            private cateService: CategoryService) {
    this.editCate = this.createForm();
  }

  async ngOnInit() {
    await this.route.params.subscribe(params => {
      this.cateId = params.id;
    });
    await this.cateService.findById(this.cateId).subscribe(data => {
        
      this.editCate.setValue({id: data.id, name: data.name});
    })
  }

  get f(){
    return this.editCate.controls;
  }

  createForm(): FormGroup{
    return new FormGroup({
      id: new FormControl(-1),
      name: new FormControl('', [
        Validators.required,
        Validators.minLength(4)
      ])
    })
  }

  saveCate(event: any){
    event.preventDefault();
    this.cateService.put(this.editCate.value).subscribe(data => {
      this.router.navigate(['/admin/categories']);
    })
  }

}