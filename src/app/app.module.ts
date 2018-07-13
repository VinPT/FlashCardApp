import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../environments/environment';



import { RootComponent } from './root/root.component';
import { ListTaskComponent } from './list-task/list-task.component';
import { AngularFireDatabase } from 'angularfire2/database';
import { AddWordComponent } from './add-word/add-word.component';
import { CardsService } from './shared/model/cards.service';
import { RouterModule } from '../../node_modules/@angular/router';
import { routerConfig } from './router.config';
import { TopMenuComponent } from './top-menu/top-menu.component';
import { RemoveWordComponent } from './remove-word/remove-word.component';
import { QuizComponent } from './quiz/quiz.component';


@NgModule({
  declarations: [
    RootComponent,
    ListTaskComponent,
    AddWordComponent,
    TopMenuComponent,
    RemoveWordComponent,
    QuizComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    RouterModule.forRoot(routerConfig)
  ],
  providers: [CardsService],
  bootstrap: [RootComponent]
})
export class AppModule { }
