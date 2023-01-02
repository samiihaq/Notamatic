import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { NoteService } from '../../note-service.service';
import { Note } from 'src/models/note.models';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { NotesPage } from '../notes/notes.page';

@Component({
  selector: 'app-addnotepage',
  templateUrl: './addnotepage.page.html',
  styleUrls: ['./addnotepage.page.scss'],
})
export class AddnotepagePage {
  formgroup: FormGroup;
  note!: Note;
  date: Date = new Date();
  title: string = '';
  subject: string = '';
  content: string = '';

  constructor(public navCtrl: NavController, private noteService: NoteService) {
    this.formgroup = new FormGroup({
      title: new FormControl(),
      content: new FormControl(),
      subject: new FormControl(),
      date: new FormControl(),
    });
  }

  addNote(note: Note) {
    this.noteService.addNote(note);
  }
}
