import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CovidtableComponent } from "./covidtable/covidtable.component";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";

const routes: Routes = [
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "register",
    component: RegisterComponent
  },
  {
    path: "covid-table",
    component: CovidtableComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
