import { Component, OnInit } from '@angular/core';
import { ModalService } from '../services/modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  message: string;

  constructor(private modal: ModalService) { }

  ngOnInit() {
    this.getMessage();
  }

  getMessage() {
    this.modal.currentMessage.subscribe(message => this.message = message);
  }
}
