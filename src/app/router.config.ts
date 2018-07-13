import { RouterModule, Routes } from '@angular/router';
import { RootComponent } from './root/root.component';
import { ListTaskComponent } from './list-task/list-task.component';
import { AddWordComponent } from './add-word/add-word.component';
import { removeSummaryDuplicates } from '../../node_modules/@angular/compiler';
import { RemoveWordComponent } from './remove-word/remove-word.component';
import { QuizComponent } from './quiz/quiz.component';


export const routerConfig : Routes = [
    {
        path:'home',
        component: ListTaskComponent
    },
    {
        path:'add-card',
        component: AddWordComponent
    },
    {
        path:'remove-card',
        component: RemoveWordComponent
    },
    {
        path:'quiz',
        component: QuizComponent
    },
    {
        path:'',
        redirectTo:'home',
        pathMatch:'full'
    },
    {
        path:'**',
        redirectTo:'home'
    }
];