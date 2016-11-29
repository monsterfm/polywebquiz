import { NgModule  }      from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import { FormsModule}   from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule, JsonpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {HeaderComponent} from "./header.component";
import {FooterComponent} from "./footer.component";
import {AccueilComponent} from "./accueil.component";
import {InstructionsComponent} from "./instructions.component";
import {TabBordComponent} from "./tabBord.component";
import {AjouterQuestionComponent} from "./ajouterQuestion.component";
import {TestRapideComponent} from "./testRapide.component";
import {ExamenComponent} from "./examen.component";
import {ResultatsExamenComponent} from "./resultatsExamen.component";


const routes: Routes = [
  { path: 'accueil', component: AccueilComponent },
  { path: 'instructions', component: InstructionsComponent },
  { path: 'tabBord', component: TabBordComponent },
  { path: 'ajouterQuestion', component: AjouterQuestionComponent },
  { path: 'testRapide', component: TestRapideComponent },
  { path: 'examen', component: ExamenComponent },
  { path: 'resultatsExamen', component: ResultatsExamenComponent },
  { path: '', component: AccueilComponent }

];

@NgModule({
  imports: [ BrowserModule,FormsModule,  RouterModule.forRoot(routes), HttpModule, JsonpModule ],
  declarations: [ AppComponent, HeaderComponent, FooterComponent, AccueilComponent, InstructionsComponent,TabBordComponent,AjouterQuestionComponent,TestRapideComponent,ExamenComponent,ResultatsExamenComponent],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
