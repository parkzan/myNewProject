import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { freeapiService } from './services/freeApi.services';
import { HttpClientModule } from '@angular/common/http';
import { AppfooterComponent } from './components/appfooter/appfooter.component';
import { AppheaderComponent } from './components/appheader/appheader.component';
import { AppsettingComponent } from './components/appsetting/appsetting.component';
import { AppmenuComponent } from './components/appmenu/appmenu.component';
import { PageHomeComponent } from './components/page-home/page-home.component';
import { PageDetailComponent } from './components/page-detail/page-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    AppfooterComponent,
    AppheaderComponent,
    AppsettingComponent,
    AppmenuComponent,
    PageHomeComponent,
    PageDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: 'home', component: PageHomeComponent},
      {path: 'detail', component: PageDetailComponent},
      {path: '', component: PageHomeComponent}
  ])
  ],
  providers: [
    freeapiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
