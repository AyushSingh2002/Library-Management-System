import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private router : Router, private http : HttpClient) { }
  title = "ADMIN LIST"
  admins = [
    {
      "id": 1,
      "name": "Sankhadeep Hazra",
      "username": "warden1",
      "password": "grandwarden"
    },
    {
      "id": 2,
      "name": "Rishabh Dutta",
      "username": "warden2",
      "password": "king"
    }
  ]
  ngOnInit(): void {
  }
  addAdmin()
  {
    console.log("Add Admin button was clicked!");
    this.router.navigateByUrl('/add-admin');
  }
}
