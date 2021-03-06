import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PartOneComponent } from './part-one/part-one.component';
import { DefaultComponent } from './default/default.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';

import { StuffListComponent } from './part-one/stuff-list/stuff-list.component';
import { NewThingComponent } from './part-one/new-thing/new-thing.component';
import { SingleThingComponent } from './part-one/single-thing/single-thing.component';
import { ModifyThingComponent } from './part-one/modify-thing/modify-thing.component';

import { LocationsListComponent } from './crud/locations-list/locations-list.component';
import { NewLocationComponent } from './crud/new-location/new-location.component';
import { SingleLocationComponent } from './crud/single-location/single-location.component';
import { ModifyLocationComponent } from './crud/modify-location/modify-location.component';

import { ReviewsListComponent } from './crud/reviews-list/reviews-list.component';
import { NewReviewComponent } from './crud/new-review/new-review.component';
import { SingleReviewComponent } from './crud/single-review/single-review.component';
//import { ModifyReviewComponent } from './crud/modify-review/modify-review.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatProgressSpinnerModule } from '@angular/material';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthInterceptor } from './interceptors/auth-interceptor';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ReportfaultComponent } from './reportfault/reportfault.component';
import { FavouritesComponent } from './favourites/favourites.component';

@NgModule({
  declarations: [
    AppComponent,
    PartOneComponent,
    DefaultComponent,
    HeaderComponent,
    SidebarComponent,

    StuffListComponent,
    NewThingComponent,
    SingleThingComponent,
    ModifyThingComponent,

    LocationsListComponent,
    NewLocationComponent,
    SingleLocationComponent,
    ModifyLocationComponent,

    ReviewsListComponent,
    NewReviewComponent,
    SingleReviewComponent,
    //ModifyReviewComponent,

    LoginComponent,
    SignupComponent,
    ReportfaultComponent,
    FavouritesComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatProgressSpinnerModule,
    HttpClientModule
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
