import { NgModule } from '@angular/core';
import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { DeckBuilderComponent } from './deck-builder/deck-builder/deck-builder.component';
import { DeckViewerComponent } from './deck-viewer/deck-viewer.component';

const routes: Routes = [
  {
    path: '',
    component: WelcomeComponent
  },
  {
    path: 'deck-builder',
    component: DeckBuilderComponent
  },
  {
    path: 'deck-viewer',
    component: DeckViewerComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRouting { }
