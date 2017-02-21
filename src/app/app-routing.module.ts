import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {FeaturesComponent} from './features/features.component';
import {DownloadComponent} from './download/download.component';
import {AboutComponent} from './about/about.component';
import {ContactComponent} from './contact/contact.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: FeaturesComponent
  },
  {
    path: 'features',
    component: FeaturesComponent
  },
  {
    path: 'download',
    component: DownloadComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }