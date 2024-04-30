import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopHeadingComponent } from './top-heading/top-heading.component';
import { HttpClientModule} from '@angular/common/http';
import { NewApiService } from './services/new-api.service'

@NgModule({
  declarations: [
    AppComponent,
    TopHeadingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [NewApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
