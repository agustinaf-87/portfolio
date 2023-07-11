import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LandingPageComponent } from "./core/pages/landing-page/landing-page.component";
import { LoginComponent } from "./core/components/login/login.component";

const routes: Routes = [
  {
    path: "",
    component: LandingPageComponent,
    data: {
      breadcrumb: "LandingPage",
    },
  },
  {
    path: "login",
    component: LoginComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
