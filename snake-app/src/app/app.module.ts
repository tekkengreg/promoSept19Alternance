import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MatrixComponent } from './matrix/matrix.component';
import { CellComponent } from './cell/cell.component';
import { PadComponent } from './pad/pad.component';
import { PionComponent } from './pion/pion.component';
import { JwtInterceptorService } from './jwt-interceptor.service';
import { SignInComponent } from './sign-in/sign-in.component';

import { FormsModule } from '@angular/forms';
import { LoggedInGuardService } from './logged-in-guard.service';


const appRoutes: Routes = [
  { path: '', component: MatrixComponent, canActivate: [LoggedInGuardService]  },
  { path: 'signin', component: SignInComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    MatrixComponent,
    CellComponent,
    PadComponent,
    PionComponent,
    SignInComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptorService, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }


/*

{ path: '', component: MatrixComponent, canActivate: [LoggedInGuardService] },

*/
