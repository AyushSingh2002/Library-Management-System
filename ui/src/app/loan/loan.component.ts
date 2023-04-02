import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-loan',
  templateUrl: './loan.component.html',
  styleUrls: ['./loan.component.css']
})
export class LoanComponent implements OnInit {

  constructor(private router : Router, private http : HttpClient) { }
  title = "LOAN MANAGEMENT SYSTEM"
  loans = [
    {
      "id": 1,
      "bookId": 2,
      "studentId": 1,
      "checkoutDate": "01/10/2022",
      "dueDate": "31/10/2022",
      "returnDate": "10/12/2022"
    },
    {
      "id": 2,
      "bookId": 5,
      "studentId": 3,
      "checkoutDate": "11/12/2022",
      "dueDate": "10/01/2023",
      "returnDate": "04/03/2023"
    },
    {
      "id": 33,
      "bookId": 3,
      "studentId": 5,
      "checkoutDate": "11/03/2022",
      "dueDate": "20/03/2022",
      "returnDate": "18/03/2022"
    },
    {
      "id": 34,
      "bookId": 7,
      "studentId": 2,
      "checkoutDate": "07/06/2022",
      "dueDate": "15/07/2022",
      "returnDate": "17/07/2022"
    },
    {
      "id": 35,
      "bookId": 27,
      "studentId": 3,
      "checkoutDate": "25/09/2022",
      "dueDate": "05/10/2022",
      "returnDate": "11/11/2022"
    }
  ]
  ngOnInit(): void {
  }
  addLoan()
  {
    console.log("Add Loan button was clicked.");
    this.router.navigateByUrl('/add-loan');
  }
}
