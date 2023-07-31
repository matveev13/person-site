import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderAppComponent } from './header-app/header-app.component';
import { FooterAppComponent } from './footer-app/footer-app.component';
import { MainComponent } from './main/main.component';
import { MyExperienceComponent } from './main/my-experience/my-experience.component';
import { MySkillsComponent } from './main/my-skills/my-skills.component';
import { MyContactsComponent } from './main/my-contacts/my-contacts.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderAppComponent,
    FooterAppComponent,
    MainComponent,
    MyExperienceComponent,
    MySkillsComponent,
    MyContactsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
