import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatButtonModule, MatIconModule, MatInputModule, MatGridListModule, MatCheckboxModule, MatToolbarModule, NoConflictStyleCompatibilityMode} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AddRemoveComponent } from './solvers/common/addRemove.component';
import { AppComponent } from './app.component';
import { AnagramComponent } from './solvers/anagram/anagram.component';
import { AnagramService } from './solvers/anagram/anagram.service';
import { AsciiComponent } from './solvers/ascii/ascii.component';
import { AsciiService } from './solvers/ascii/ascii.service';
import { ListComponent } from './list.component';
import { BrailleComponent } from './solvers/braille/braille.component';
import { BrailleService } from './solvers/braille/braille.service';
import { MorseComponent } from './solvers/morse/morse.component';
import { MorseService } from './solvers/morse/morse.service';
import { RotComponent } from './solvers/rot/rot.component';
import { RotService } from './solvers/rot/rot.service';
import { SemaphoreComponent } from './solvers/semaphore/semaphore.component';
import { SemaphoreService } from './solvers/semaphore/semaphore.service';
import { SolverComponent } from './solver.component';
import { ToolBarComponent } from './toolbar.component';

const appRoutes: Routes = [
  { path: 'anagram', component: AnagramComponent },  
  { path: 'ascii', component: AsciiComponent },
  { path: 'braille', component: BrailleComponent },
  { path: 'morse', component: MorseComponent },   
  { path: 'rot', component: RotComponent },     
  { path: 'semaphore', component: SemaphoreComponent },   
  {
    path: 'index',
    component: ListComponent,
  },
  { path: '',
    redirectTo: '/index',
    pathMatch: 'full'
  },
  { path: '**', component: SolverComponent }
];

@NgModule({
  declarations: [
    AddRemoveComponent,
    AppComponent,
    AnagramComponent,
    AsciiComponent,
    BrailleComponent,
    ListComponent,
    MorseComponent,
    RotComponent,
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
  providers: [AnagramService, AsciiService, BrailleService, MorseService, RotService, SemaphoreService],
  bootstrap: [AppComponent]
})
export class AppModule { }
