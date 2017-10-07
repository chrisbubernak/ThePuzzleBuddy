import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatButtonModule, MatIconModule, MatInputModule, MatGridListModule, MatCheckboxModule, MatToolbarModule, NoConflictStyleCompatibilityMode} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ListComponent } from './list.component';
import { BrailleComponent } from './solvers/braille/braille.component';
import { BrailleService } from './solvers/braille/braille.service';
import { MorseComponent } from './solvers/morse/morse.component';
import { MorseService } from './solvers/morse/morse.service';
import { SemaphoreComponent } from './solvers/semaphore/semaphore.component';
import { SemaphoreService } from './solvers/semaphore/semaphore.service';
import { SolverComponent } from './solver.component';
import { ToolBarComponent } from './toolbar.component';

const appRoutes: Routes = [
  { path: 'braille', component: BrailleComponent },
  { path: 'morse', component: MorseComponent },   
  { path: 'semaphore', component: SemaphoreComponent },   
  { path: 'solver', component: SolverComponent },
  {
    path: 'index',
    component: ListComponent,
  },
  { path: '',
    redirectTo: '/index',
    pathMatch: 'full'
  },
  //{ path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    BrailleComponent,
    ListComponent,
    MorseComponent,
    SemaphoreComponent,
    SolverComponent,
    ToolBarComponent,
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
    ),
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    MatButtonModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,    
    MatCheckboxModule,
    MatToolbarModule,
    NoConflictStyleCompatibilityMode
  ],
  providers: [BrailleService, MorseService, SemaphoreService],
  bootstrap: [AppComponent]
})
export class AppModule { }
