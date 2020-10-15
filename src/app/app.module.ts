import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { RegisterComponent } from "./register/register.component";
import { BackendService } from "./backend.service";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";
import { LoginComponent } from "./login/login.component";
import { CovidTableComponent } from './covid-table/covid-table.component';

@NgModule({
  imports: [BrowserModule, FormsModule, HttpClientModule, AppRoutingModule],
  declarations: [
    AppComponent,
    HelloComponent,
    RegisterComponent,
    LoginComponent,
    CovidTableComponent
  ],
  bootstrap: [AppComponent],
  providers: [BackendService]
})
export class AppModule {}
