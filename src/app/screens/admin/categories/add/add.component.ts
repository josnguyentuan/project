import { Router } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';

import {
  Component,
  OnInit
} from '@angular/core';
import {
  FormControl,
  FormGroup,
  MinLengthValidator,
  Validators
} from '@angular/forms';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  cateForm!: FormGroup;
  constructor(
    private CategoryService: CategoryService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.cateForm = this.createForm();
  }
  createForm() {
    return new FormGroup({
      name: new FormControl('',
        [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(20)

        ])
    })
  }
  get f() {
    return this.cateForm.controls;
  }
  saveCate($event: any) {
    $event.preventDefault();

    this.CategoryService.store(this.cateForm.value).subscribe(data=>{
      this.router.navigate(['/admin/categories']);
    })
  }

}
