import { AuthorService } from './../../../../services/author.service';
import { Author } from './../../../../models/author';
import { Component, OnInit } from '@angular/core';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-list-author',
  templateUrl: './list-author.component.html',
  styleUrls: ['./list-author.component.css']
})
export class ListAuthorComponent implements OnInit {
  authors!: Author[];
  constructor(
    private authorService: AuthorService,

  ) { }

  ngOnInit(): void {
    this.getAuthorsData();
  }
  getAuthorsData(){
    this.authorService.all().subscribe(data=>{
      this.authors=data;
    })
  }
  deleteAuthor(id: any){
    this.authorService.findById(id).subscribe(author=>{
      this.authorService.delete(author.id).subscribe(data =>{
        this.authors = this.authors.filter(el=> el.id != author.id)
      })
    })
  }
}
