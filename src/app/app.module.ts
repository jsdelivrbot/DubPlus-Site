import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { FuelUiModule } from 'fuel-ui';
import { Angulartics2Module, Angulartics2GoogleAnalytics } from 'angulartics2';

import { AppComponent } from './app.component';
import { FeaturesComponent } from './features/features.component';
import { FeaturesService } from './features/features.service';
import { DownloadComponent } from './download/download.component';
import { AboutComponent } from './about/about.component';
import { TeamMembersService } from './about/team-member/team-members.service';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { TeamMemberComponent } from './about/team-member/team-member.component';

@NgModule({
  declarations: [
    AppComponent,
    FeaturesComponent,
    DownloadComponent,
    AboutComponent,
    ContactComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    TeamMemberComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    FuelUiModule,
    Angulartics2Module.forRoot([ Angulartics2GoogleAnalytics ])
  ],
  providers: [
    FeaturesService,
    TeamMembersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }