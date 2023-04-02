import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http'; 
@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {

  constructor(private router:Router, private http:HttpClient) { }
  title = "LIST OF AUTHORS"
  authorList = [
    {
      "id": 1,
      "name": "Arthur Conan Doyle",
      "birthDate": "10/05/1860",
      "nationality": "British"
    },
    {
      "id": 2,
      "name": "James Dutta Chowdhury",
      "birthDate": "10/09/1890",
      "nationality": "Indian"
    },
    {
      "id": 3,
      "name": "J K Rowling",
      "birthDate": "19/03/1974",
      "nationality": "American"
    },
    {
      "id": 4,
      "name": "Rabindranath Tagore",
      "birthDate": "22/02/1880",
      "nationality": "Pakistani"
    },
    {
      "id": 5,
      "name": "Adolf Hitler",
      "birthDate": "20/04/1889",
      "nationality": "German"
    }
  ]
  ngOnInit(): void {
  }
  addAuthor()
  {
    console.log("Add Author Button was clicked!");
    this.router.navigateByUrl('/add-author');
  }
}
