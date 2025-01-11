import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { BrandLogoComponent } from './components/brand-logo/brand-logo.component';
import { FeaturesDropdownComponent } from './components/features-dropdown/features-dropdown.component';
import { CompanyDropdownComponent } from './components/company-dropdown/company-dropdown.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { UserauthBtnsComponent } from './components/userauth-btns/userauth-btns.component';
import { HeaderComponent } from './components/header/header.component';
import { SidemenuComponent } from './components/sidemenu/sidemenu.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, BrandLogoComponent, FeaturesDropdownComponent, CompanyDropdownComponent, NavigationComponent, UserauthBtnsComponent, HeaderComponent, SidemenuComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
