import { AppComponent } from './app.component';

// MDB
import { MDBBootstrapModule } from 'angular-bootstrap-md';

// ---------- M O D U L S ----------
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { CardComponent } from './components/card/card.component';
import { NavBarComponent } from './core/nav-bar/nav-bar.component';
import { RatingsComponent } from './containers/ratings/ratings.component';
import { StarComponent } from './components/star/star.component';
import { ContattiPageComponent, PopolariPageComponent } from './pages/';
import { PopolariNavComponent } from './components/popolari-nav/popolari-nav.component';
import { AvventuraPageComponent } from './pages/avventura-page/avventura-page.component';
import { CommediaPageComponent } from './pages/commedia-page/commedia-page.component';
import { AzionePageComponent } from './pages/azione-page/azione-page.component';
import { CardListComponent } from './components/card-list/card-list.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    NavBarComponent,
    RatingsComponent,
    StarComponent,
    PopolariPageComponent,
    ContattiPageComponent,
    PopolariNavComponent,
    AvventuraPageComponent,
    CommediaPageComponent,
    AzionePageComponent,
    CardListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }