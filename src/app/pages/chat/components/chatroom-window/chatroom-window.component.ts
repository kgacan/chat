import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chatroom-window',
  templateUrl: './chatroom-window.component.html',
  styleUrls: ['./chatroom-window.component.scss']
})
export class ChatroomWindowComponent implements OnInit {

  dummyData = [
    {
      message: "Swefefw fwefwefwcw wececwecwe qhhehqfwefqw.",
      createdAt: new Date(),
      sender: {
        firstName: 'Steve',
        lastName: 'Smith',
        photoUrl: 'http://via.placeholder.com/50x50'
      }
    },
    {
      message: "Atgwefefw fwdqwdwsdaxygggwcw wecregerfdcccecwe qhhehqfwefqw.",
      createdAt: new Date(),
      sender: {
        firstName: 'Bob',
        lastName: 'Anderson',
        photoUrl: 'http://via.placeholder.com/50x50'
      }
    },
    {
      message: "Swefefw fwefwefwcw wececwecwe qhhehqfwefqw.",
      createdAt: new Date(),
      sender: {
        firstName: 'Steve',
        lastName: 'Smith',
        photoUrl: 'http://via.placeholder.com/50x50'
      }
    },
    {
      message: "Atgwefefw fwdqwdwsdaxygggwcw wecregerfdcccecwe qhhehqfwefqw.",
      createdAt: new Date(),
      sender: {
        firstName: 'Bob',
        lastName: 'Anderson',
        photoUrl: 'http://via.placeholder.com/50x50'
      }
    },
    {
      message: "Swefefw fwefwefwcw wececwecwe qhhehqfwefqw.",
      createdAt: new Date(),
      sender: {
        firstName: 'Steve',
        lastName: 'Smith',
        photoUrl: 'http://via.placeholder.com/50x50'
      }
    },
    {
      message: "Atgwefefw fwdqwdwsdaxygggwcw wecregerfdcccecwe qhhehqfwefqw.",
      createdAt: new Date(),
      sender: {
        firstName: 'Bob',
        lastName: 'Anderson',
        photoUrl: 'http://via.placeholder.com/50x50'
      }
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
