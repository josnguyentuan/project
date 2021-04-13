import { Observable } from 'rxjs';
import { AuthorService } from './../../../../services/author.service';
import { CategoryService } from 'src/app/services/category.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/services/book.service';
import { Category } from 'src/app/models/category';
import { Author } from 'src/app/models/author';
import { AngularFireStorage } from '@angular/fire/storage';
import { map, finalize } from "rxjs/operators";

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent implements OnInit {
  bookId : Number = -1;
  editBook!: FormGroup;
  cates!: Category[];
  authors!: Author[];
  downloadURL!: Observable<string>

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private bookService: BookService,
    private cateService: CategoryService,
    private authorSerice: AuthorService,
    private storage: AngularFireStorage

  ) {
    this.editBook = this.editForm();
    this.getCatesData();
    this.getAuthorsData();

   }

 async ngOnInit() {
   await this.route.params.subscribe(params=>{
     this.bookId = params.id;
   });
   await this.bookService.findById(this.bookId).subscribe(data =>{
     this.editBook.setValue({
       id: data.id,
       title: data.title,
       price: data.price,
       image: data.image,
       categoryId: data.categoryId,
       authorId: data.authorId,
     })
   })
  }
  editForm(): FormGroup {
    return new FormGroup({
      id: new FormControl(-1),
      categoryId: new FormControl("",[
        Validators.required
      ]),
      authorId: new FormControl("",[
        Validators.required
      ]),
      title: new FormControl('',[
        Validators.required,
        Validators.minLength(20),
        Validators.maxLength(100)
      ]),
      price: new FormControl("", [
        Validators.required,
        Validators.minLength(5)
      ]),
      image: new FormControl("",
      [
        Validators.required
      ])
    })
  }
  saveBook($event: any){
    $event.preventDefault();
    this.bookService.put(this.editBook.value).subscribe(data=>{
      this.upload
      this.router.navigate(['/admin/books']);
    })
  }
  getCatesData(){
    this.cateService.all().subscribe(data => {
      this.cates = data;
      this.editBook.controls['authorId'].setValue(data[0].id, {onlySelf: true})

    })
  }
  getAuthorsData(){
    this.authorSerice.all().subscribe(data=>{
      this.authors= data;
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
            this.editBook.value.image = url;
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
