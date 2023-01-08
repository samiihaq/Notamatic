import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { CalendarMode } from 'ionic2-calendar/calendar';
import { Step } from 'ionic2-calendar/calendar';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.page.html',
  styleUrls: ['./calendar.page.scss'],
})
export class CalendarPage implements OnInit {
  eventSource = [];
  viewTitle = 'string';
  selectedDay = new Date();

  calendar = {
    mode: 'month' as CalendarMode,
    step: 30 as Step,
    currentDate: this.selectedDay,
  };

  constructor(public navCtrl: NavController) {}

  onCurrentDateChanged = (ev: Date) => {
    console.log('Currently viewed date: ' + ev);
  };

  onEventSelected = (event) => {
    console.log(event.title);
  };
  onTimeSelected = (ev: {
    selectedTime: Date;
    events: any[];
    disabled: boolean;
  }) => {
    console.log(
      'Selected time: ' +
        ev.selectedTime +
        ', hasEvents: ' +
        (ev.events !== undefined && ev.events.length !== 0) +
        ', disabled: ' +
        ev.disabled
    );
  };
  onViewTitleChanged = (title: string) => {
    this.viewTitle = title;
  };

  ngOnInit() {}
}
