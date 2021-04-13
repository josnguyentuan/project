import { AuthorService } from './../../../../services/author.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-author',
  templateUrl: './edit-author.component.html',
  styleUrls: ['./edit-author.component.css']
})
export class EditAuthorComponent implements OnInit {
  authorId: Number = -1;
  editAuthor!: FormGroup;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authorService: AuthorService
  ) { 
    this.editAuthor = this.editForm();
  }

  async ngOnInit(){
    await this.route.params.subscribe(params=>{
      this.authorId = params.id;
    });
    await this.authorService.findById(this.authorId).subscribe(data=>{
      this.editAuthor.setValue({id: data.id,
      name: data.name});
    })
  }
  editForm(): FormGroup{
    return new FormGroup({
      id: new FormControl(-1),
      name: new FormControl('',[
        Validators.required,
        Validators.minLength(10)
      ])
    })
  }
  saveAuthor($event: any){
    $event.preventDefault();
    this.authorService.put(this.editAuthor.value).subscribe(data=>{
      this.router.navigate(['/admin/authors']);
    })
  }
}
