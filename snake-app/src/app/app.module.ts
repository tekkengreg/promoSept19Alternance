import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MatrixComponent } from './matrix/matrix.component';
import { CellComponent } from './cell/cell.component';
import { PadComponent } from './pad/pad.component';
import { PionComponent } from './pion/pion.component';

@NgModule({
  declarations: [
    AppComponent,
    MatrixComponent,
    CellComponent,
    PadComponent,
    PionComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
