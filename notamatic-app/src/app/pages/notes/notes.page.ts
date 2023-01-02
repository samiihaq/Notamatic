import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { NoteService } from 'src/app/note-service.service';
import { AddnotepagePage } from '../addnotepage/addnotepage.page';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.page.html',
  styleUrls: ['./notes.page.scss'],
})
export class NotesPage {
  notes: { title: string }[] = [];

  constructor(
    public navCtrl: NavController,
    private noteService: NoteService
  ) {}

  ionViewWillEnter() {
    this.notes = this.getAllNotes();
  }

  getAllNotes() {
    return this.noteService.getAllNotes();
  }
}
