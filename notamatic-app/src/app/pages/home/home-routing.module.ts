import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: HomePage,
    children: [
      {
        path: 'notes',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../notes/notes.module').then((m) => m.NotesPageModule),
          },
        ],
      },
      {
        path: 'reminder',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../reminder/reminder.module').then(
                (m) => m.ReminderPageModule
              ),
          },
        ],
      },
      {
        path: 'calendar',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../calendar/calendar.module').then(
                (m) => m.CalendarPageModule
              ),
          },
        ],
      },
      {
        path: '',
        redirectTo: '/tabs/notes',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/tabs/notes',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
