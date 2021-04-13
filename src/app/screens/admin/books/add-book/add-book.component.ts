import { Observable } from 'rxjs';
import { AuthorService } from './../../../../services/author.service';
import { CategoryService } from './../../../../services/category.service';
import { Router } from '@angular/router';
import { BookService } from 'src/app/services/book.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, NumberValueAccessor } from '@angular/forms';
import { Category } from 'src/app/models/category';
import { Author } from 'src/app/models/author';
import { AngularFireStorage } from '@angular/fire/storage';
import {  finalize } from "rxjs/operators";


@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {
  bookForm!: FormGroup;
  cates!: Category[];
  authors!: Author[];
  downloadURL !: Observable<string>;
  
  constructor(
    private bookService: BookService,
    private router: Router,
    private cateService: CategoryService,
    private authorService: AuthorService,
    private storage: AngularFireStorage
  ) { }
  
  ngOnInit(): void {

    this.bookForm = this.createBook();
    this.getCatesData();
    this.getAuthorsData();
  }
  
  createBook(){
    
    return new FormGroup({
      title: new FormControl('',[
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(100)
      ]),
      price: new FormControl('',[
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(6)
      ]),
      image: new FormControl('',[
        Validators.required,
      ]),
      categoryId: new FormControl(Number(''),[
        Validators.required
      ]),
      authorId: new FormControl(Number,[
        Validators.required,
        
      ])
    })
  }

  saveBook($event: any){


    this.bookService.store(this.bookForm.value).subscribe(data=>{

      this.upload;
      this.router.navigate(['/admin/books']);
    })
  }
  getCatesData(){
    this.cateService.all().subscribe(data => {
      this.cates = data;
      this.bookForm.controls['authorId'].setValue(data[0].id, {onlySelf: true})

    })
  }
  getAuthorsData(){
    this.authorService.all().subscribe(data=>{
      this.authors = data;
    })
  }
 upload($event:any){
  $event.preventDefault()
  var n = Date.now();
  const file = $event.target.files[0];
  const filePath = `Uploads/${n}`;
  const fileRef = this.storage.ref(filePath);
  const task = this.storage.upload(`Uploads/${n}`, file);
  task
    .snapshotChanges()
    .pipe(
      finalize(() => {
        this.downloadURL = fileRef.getDownloadURL();
        this.downloadURL.subscribe(url => {
          this.bookForm.value.image = url;
          console.log(url);
        });
      })
    )
    .subscribe(url => {
      if (url) {
        console.log(url);
      }
    });
 }
  
}
