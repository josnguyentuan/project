import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthorService } from './../../../../services/author.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-author',
  templateUrl: './add-author.component.html',
  styleUrls: ['./add-author.component.css']
})
export class AddAuthorComponent implements OnInit {
  authorForm!: FormGroup;
  constructor(
    private authorService: AuthorService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.authorForm = this.createAuthor();
  }
  createAuthor(){
    return new FormGroup({
      name: new FormControl('',
      [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(30)
      ])
    })
  }
  saveAuthor($event: any){
    $event.preventDefault();
    this.authorService.store(this.authorForm.value).subscribe(data=>{
      this.router.navigate(['/admin/authors']);
    })
  }

}
