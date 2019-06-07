import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule,Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { freeapiService } from './services/freeApi.services';
import { HttpClientModule } from '@angular/common/http';
import { AppfooterComponent } from './components/appfooter/appfooter.component';
import { AppheaderComponent } from './components/appheader/appheader.component';
import { AppsettingComponent } from './components/appsetting/appsetting.component';
import { AppmenuComponent } from './components/appmenu/appmenu.component';
import { PageHomeComponent } from './components/page-home/page-home.component';
import { PageDetailComponent } from './components/page-detail/page-detail.component';
import {FormsModule} from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';
import { PageSystemComponent } from './components/page-system/page-system.component';
import { ReactiveFormsModule } from '@angular/forms';

const appRoutes: Routes = [
  {path: 'home', component: PageHomeComponent},
  {path: 'system',component: PageSystemComponent},
  {path: '', component: PageHomeComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    AppfooterComponent,
    AppheaderComponent,
    AppsettingComponent,
    AppmenuComponent,
    PageHomeComponent,
    PageDetailComponent,
    PageSystemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    DataTablesModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule
  ],
  providers: [
    freeapiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
