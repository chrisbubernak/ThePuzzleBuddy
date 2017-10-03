import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatButtonModule, MatIconModule, MatGridListModule, MatCheckboxModule, MatToolbarModule, NoConflictStyleCompatibilityMode} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ListComponent } from './list.component';
import { SemaphoreComponent } from './solvers/Semaphore.component';
import { SemaphoreService } from './solvers/Semaphore.service';
import { SolverComponent } from './solver.component';
import { ToolBarComponent } from './toolbar.component';

const appRoutes: Routes = [
  { path: 'solver', component: SolverComponent },
  { path: 'semaphore', component: SemaphoreComponent },  
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
    ListComponent,
    SemaphoreComponent,
    SolverComponent,
    ToolBarComponent,
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      //{ enableTracing: true } // <-- debugging purposes only
    ),
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    MatButtonModule,
    MatGridListModule,
    MatIconModule,
    MatCheckboxModule,
    MatToolbarModule,
    NoConflictStyleCompatibilityMode
  ],
  providers: [SemaphoreService],
  bootstrap: [AppComponent]
})
export class AppModule { }