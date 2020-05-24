import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {NeuomorphicModule} from './neuomorphic/neuomorphic.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NeuomorphicModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
