import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  constructor(private router:Router, private http:HttpClient) { }
  title = "BOOK MANAGEMENT SYSTEM"
  books = [
    {
      "id": 1,
      "title": "Journey to the End of Time",
      "author": "Stephen Hawkins",
      "isbn": "9034-2309-1900-4072",
      "publicationDate": "10-09/1990",
      "publisher": "Puffin Books Global Ltd.",
      "copies": 10000,
      "category": "Science",
      "genre": "Space Exploration",
      "subgenre": "Deep Space Research"
    },
    {
      "id": 2,
      "title": "The Hunchback of Notre Dame",
      "author": "Victor Hugo",
      "isbn": "9091-3019-3201-4810",
      "publicationDate": "16/03/1831",
      "publisher": "Oxford University Press",
      "copies": 10000,
      "category": "Novel",
      "genre": "Romantic",
      "subgenre": "Gothic Fiction"
    },
    {
      "id": 3,
      "title": "Romeo and Juliet",
      "author": "William Shakespeare",
      "isbn": "9091-4747-3201-2309",
      "publicationDate": "15/10/1597",
      "publisher": "Classic Books Global Ltd.",
      "copies": 12450,
      "category": "Play",
      "genre": "Tragedy",
      "subgenre": "Tragic Fiction"
    },
    {
      "id": 4,
      "title": "Mein Kampf",
      "author": "Sir Adolf Hitler",
      "isbn": "9091-4091-1201-0009",
      "publicationDate": "10/03/1940",
      "publisher": "Nazi Publications",
      "copies": 90000,
      "category": "Autobiography",
      "genre": "Realistic",
      "subgenre": "Super Real"
    }
  ]

  addBook()
  {
    console.log("Add Books Button was clicked!");
    this.router.navigateByUrl('/add-book');
  }
  isColor = true
  ngOnInit(): void {
  }

}
