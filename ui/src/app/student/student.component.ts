import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  constructor(private router : Router, private http : HttpClient) { }
  title = "STUDENT INFORMATION"
  students = [
    {
      "id": 1,
      "name": "Ayush Singh",
      "department": "CSE",
      "rollNumber": "72",
      "birthDate": "04/09/2002",
      "mobileNumber": "6291156651"
    },
    {
      "id": 2,
      "name": "Abhirup Das",
      "department": "CSE",
      "rollNumber": "13",
      "birthDate": "19/05/2002",
      "mobileNumber": "9163515283"
    },
    {
      "id": 3,
      "name": "Arnab Chowdhury",
      "department": "CSE",
      "rollNumber": "12",
      "birthDate": "14/08/2002",
      "mobileNumber": "6969696969"
    },
    {
      "id": 4,
      "name": "Sankhadeep Hazra",
      "department": "CSE",
      "rollNumber": "25",
      "birthDate": "10/11/2002",
      "mobileNumber": "6969696969"
    },
    {
      "id": 5,
      "name": "Swata Saha",
      "department": "CSE",
      "rollNumber": "64",
      "birthDate": "18/04/2001",
      "mobileNumber": "8420473035"
    },
    {
      "id": 6,
      "name": "Pratik Saha",
      "department": "CSE",
      "rollNumber": "63",
      "birthDate": "19/02/2002",
      "mobileNumber": "8385833366"
    }
  ]
  ngOnInit(): void {
  }
  addStudent()
  {
    console.log("Add Student button was clicked!");
    this.router.navigateByUrl('/add-student');
  }
}
