import { NgModule  }      from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import { FormsModule}   from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule, JsonpModule } from '@angular/http';

import { AppComponent } from './components/app.component';
import {HeaderComponent} from "./components/header.component";
import {FooterComponent} from "./components/footer.component";
import {AccueilComponent} from "./components/accueil.component";
import {InstructionsComponent} from "./components/instructions.component";
import {StatsComponent} from "./components/stats.component";
import {TabBordComponent} from "./components/tabBord.component";
import {AjouterQuestionComponent} from "./components/ajouterQuestion.component";
import {TestRapideComponent} from "./components/testRapide.component";
import {ExamenComponent} from "./components/examen.component";
import {ResultatsExamenComponent} from "./components/resultatsExamen.component";


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
  declarations: [ AppComponent, HeaderComponent, FooterComponent, AccueilComponent, InstructionsComponent,TabBordComponent,AjouterQuestionComponent,TestRapideComponent,ExamenComponent,ResultatsExamenComponent,StatsComponent],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
