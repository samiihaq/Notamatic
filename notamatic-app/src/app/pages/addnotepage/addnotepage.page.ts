import { Component, ChangeDetectorRef } from '@angular/core';
import { NavController } from '@ionic/angular';
import { NoteService } from '../../note-service.service';
import { Note } from 'src/models/note.models';
import {
  ReactiveFormsModule,
  FormGroup,
  Validators,
  FormControl,
} from '@angular/forms';
import { NotesPage } from '../notes/notes.page';
import { NotesPageRoutingModule } from '../notes/notes-routing.module';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addnotepage',
  templateUrl: './addnotepage.page.html',
  styleUrls: ['./addnotepage.page.scss'],
})
export class AddnotepagePage {
  formGroup: FormGroup;
  note: Note;
  date: Date = new Date();
  title: string = '';
  subject: string = '';
  content: string = '';

  constructor(
    public navCtrl: NavController,
    private NoteService: NoteService,
    public router: Router
  ) {
    this.formGroup = new FormGroup({
      title: new FormControl(),
      content: new FormControl(),
      subject: new FormControl(),
      date: new FormControl(),
    });
  }

  addNote(note: Note) {
    this.NoteService.addNote(note);
    this.navCtrl.navigateBack(['/tabs/notes']);
  }
}
