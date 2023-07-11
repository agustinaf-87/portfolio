import { NgModule, Optional, SkipSelf } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CoreRoutingModule } from "./core-routing.module";
import { CoreComponent } from "./core.component";
import { NavigationComponent } from "./components/navigation/navigation.component";
import { BreadcrumbComponent } from "./components/breadcrumb/breadcrumb.component";
import { NavigationService } from "./services/navigation-service/navigation.service";
import { SharedModule } from "../shared/shared.module";
import { SpinnerComponent } from "./components/spinner/spinner.component";
import { LoginComponent } from "./components/login/login.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { FooterComponent } from "./components/footer/footer.component";
import { LandingPageComponent } from "./pages/landing-page/landing-page.component";

@NgModule({
  declarations: [
    CoreComponent,
    NavigationComponent,
    BreadcrumbComponent,
    SpinnerComponent,
    LoginComponent,
    FooterComponent,
    LandingPageComponent,
  ],
  imports: [
    CommonModule,
    CoreRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [NavigationService],
  exports: [
    NavigationComponent,
    SpinnerComponent,
    LoginComponent,
    FooterComponent,
  ],
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    this.throwIfAlreadyLoaded(parentModule, `CoreModule`);
  }

  throwIfAlreadyLoaded(parentModule: CoreModule, moduleName: string) {
    if (parentModule) {
      throw new Error(
        `${moduleName} has already been loaded. Import core module in the app module only.`
      );
    }
  }
}
