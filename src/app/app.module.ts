import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RoutesModule } from './routes/routes.module';

import { AppComponent } from './app.component';
import { QuotesComponent } from './quotes/components/quotes.component';

@NgModule({
  declarations: [
    AppComponent,
    QuotesComponent
  ],
  imports: [
    BrowserModule,
    RoutesModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
