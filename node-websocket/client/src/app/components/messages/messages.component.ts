import { MessageService } from './../../shared/message.service';
import { Component, OnInit } from '@angular/core';
import { Message } from 'src/app/shared/message';
import { validateHorizontalPosition } from '@angular/cdk/overlay';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {

  message: Message = new Message();
  messages: Message[] = [];
  username: string = 'anonyme';
  users: string[] = [];

  constructor(private messageService: MessageService) { }

  ngOnInit() {
    this.username = prompt("Please enter your name", "Harry Potter");
    console.log(this.username)
    this.messageService.joinRoom(this.username)
    this.messageService.getRoomate().subscribe(users => {
      console.log("roomate",users)
      this.users=users
    })
    this.messageService.getMessage().subscribe(message => {
      console.log('new message : ', message);
      this.messages.push(message);
    });
  }

  send() {
    this.message.username = this.username;
    this.messageService.sendMessage(this.message);
    this.message = new Message();
  }
}
