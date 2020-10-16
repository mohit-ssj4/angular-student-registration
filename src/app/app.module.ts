import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { BackendService } from "./backend.service";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";
import { LoaderComponent } from "./loader/loader.component";
import { CovidtableComponent } from "./covidtable/covidtable.component";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";

@NgModule({
  imports: [BrowserModule, FormsModule, HttpClientModule, AppRoutingModule],
  declarations: [
    AppComponent,
    HelloComponent,
    RegisterComponent,
    LoginComponent,
    LoaderComponent,
    CovidtableComponent
  ],
  bootstrap: [AppComponent],
  providers: [BackendService]
})
export class AppModule {}
