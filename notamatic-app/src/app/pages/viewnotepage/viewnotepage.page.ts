import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from '@ionic/angular';
import { NoteService } from 'src/app/note-service.service';
import { Note } from 'src/models/note.models';

@Component({
  selector: 'app-viewnotepage',
  templateUrl: './viewnotepage.page.html',
  styleUrls: ['./viewnotepage.page.scss'],
})
export class ViewnotepagePage implements OnInit {
  public navParams = new NavParams();
  note: Note;

  constructor(
    public navCtrl: NavController,

    private noteService: NoteService
  ) {
    this.note = this.navParams.get('note');
  }

  deleteNote(createDate: number) {
    this.noteService.deleteNote(createDate);
    this.navCtrl.pop();
  }

  ngOnInit() {}
}
