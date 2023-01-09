import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./pages/home/home.module').then((m) => m.HomePageModule),
  },

  {
    path: 'addnotepage',
    loadChildren: () =>
      import('./pages/addnotepage/addnotepage.module').then(
        (m) => m.AddnotepagePageModule
      ),
  },

  {
    path: 'notes',
    loadChildren: () =>
      import('./pages/notes/notes.module').then((m) => m.NotesPageModule),
  },
  {
    path: 'viewnotepage',
    loadChildren: () => import('./pages/viewnotepage/viewnotepage.module').then( m => m.ViewnotepagePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
