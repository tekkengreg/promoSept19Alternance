import { Message } from './message';
import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(private socket: Socket) { }

  joinRoom(username: string) {
    console.log('joinroom')
    this.socket.emit('join', { room: "chat", username })
  }
  
  getRoomate(): Observable<string[]> {
    console.log('getRoomate')
    return this.socket.fromEvent("join")
  }
  
  sendMessage(message: Message) {
    console.log('sendmessage')
    this.socket.emit("message", message);
  }
  
  getMessage(): Observable<Message> {
    console.log('getmessage')
    return this.socket.fromEvent("message");
  }
}
