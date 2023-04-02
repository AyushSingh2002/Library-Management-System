import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-publisher',
  templateUrl: './publisher.component.html',
  styleUrls: ['./publisher.component.css']
})
export class PublisherComponent implements OnInit {

  constructor(private router : Router, private http : HttpClient) { }
  title = "PUBLISHER INFORMATION"
  publishers = [
    {
      "id": 1,
      "name": "Puffin Books Global Limited",
      "address": "20A Park Street, Kolkata-700017",
      "phone": "9123098422",
      "email": "admin@puffinbooks.in"
    },
    {
      "id": 2,
      "name": "Oxford University Press",
      "address": "10 College Street, Kolkata-700009",
      "phone": "9045698422",
      "email": "publish@oup.com"
    },
    {
      "id": 3,
      "name": "Simon and Schuster",
      "address": "Victor Garden, New York City - 10034",
      "phone": "9331190",
      "email": "publish@simonschusterglobal.com"
    },
    {
      "id": 4,
      "name": "HarperCollins",
      "address": "18/19, Old Rajendra Nagar, New Delhi New Delhi DL 110060 IN",
      "phone": "01204044800",
      "email": "enquiries@harpercollins.co.in"
    },
    {
      "id": 5,
      "name": "Macmillan Publishers",
      "address": "16, Camac St, Elgin, Kolkata, West Bengal 700017",
      "phone": "01204000100",
      "email": "mail@magicedtech"
    },
    {
      "id": 6,
      "name": "Penguin Random House",
      "address": "Tower-1, 4th Floor Emaar Capital, Mehrauli-Gurgaon Rd, Sikanderpur, Gurugram, Haryana 122002",
      "phone": "01244785600",
      "email": "publishEnquiries@penguinrandomhouse.in"
    }
  ]
  ngOnInit(): void {
  }
  addPublisher()
  {
    console.log("Add Publisher button was clicked!");
    this.router.navigateByUrl('/add-publisher');
  }
}
