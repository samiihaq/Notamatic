import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { NoteService } from '../../note-service.service';

@Component({
  selector: 'app-addnotepage',
  templateUrl: './addnotepage.page.html',
  styleUrls: ['./addnotepage.page.scss'],
})
export class AddnotepagePage {
  constructor(
    public navCtrl: NavController,
    private noteService: NoteService
  ) {}

  addNote(value: { title: string }) {
    this.noteService.addNote(value);
  }
}
