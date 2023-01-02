import { Component, OnInit } from '@angular/core';
import { NavController, Platform } from '@ionic/angular';
import { AddnotepagePage } from '../addnotepage/addnotepage.page';
import { NoteService } from 'src/app/note-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {
  constructor() {}
}
