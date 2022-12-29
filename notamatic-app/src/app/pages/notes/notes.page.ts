import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AddnotepagePageModule } from '../addnotepage/addnotepage.module';
import { AddnotepagePage } from '../addnotepage/addnotepage.page';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.page.html',
  styleUrls: ['./notes.page.scss'],
})
export class NotesPage implements OnInit {
  constructor(public navCtrl: NavController) {}

  ngOnInit() {}
}
