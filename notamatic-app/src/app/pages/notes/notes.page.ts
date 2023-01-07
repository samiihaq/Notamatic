import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { NoteService } from 'src/app/note-service.service';
import { Note } from 'src/models/note.models';
import { AddnotepagePage } from '../addnotepage/addnotepage.page';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.page.html',
  styleUrls: ['./notes.page.scss'],
})
export class NotesPage {
  notes: Promise<Note[]>;

  doSomething(event) {
    setTimeout(() => {
      event.target.complete();
    }, 2000);
  }

  constructor(
    public navCtrl: NavController,
    private noteService: NoteService
  ) {}

  ionViewDidEnter() {
    this.notes = this.getAllNotes();
  }

  getAllNotes() {
    return this.noteService.getAllNotes();
  }

  notePageForward() {
    this.navCtrl.navigateForward('/tabs/addnotepage');
  }
}
