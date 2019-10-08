import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GridComponent } from './grid/grid.component';
import { CellComponent } from './cell/cell.component';
import { PionComponent } from './pion/pion.component';

@NgModule({
  declarations: [
    AppComponent,
    GridComponent,
    CellComponent,
    PionComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
