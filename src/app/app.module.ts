import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidemenuComponent } from './components/elements/sidemenu/sidemenu.component';

import { HeroComponent } from './components/elements/hero/hero.component';
import { CtaMainComponent } from './components/elements/cta-main/cta-main.component';
import { BrandStripComponent } from './components/elements/brand-strip/brand-strip.component';
import { BrandLogoComponent } from './components/elements/brand-logo/brand-logo.component';
import { HeaderNavComponent } from './components/elements/header-nav/header-nav.component';
import { MenuIconComponent } from './components/elements/menu-icon/menu-icon.component';
import { UserAuthbtnsComponent } from './components/elements/user-authbtns/user-authbtns.component';
import { HomeComponent } from './components/pages/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    SidemenuComponent,
    HeroComponent,
    CtaMainComponent,
    BrandStripComponent,
    BrandLogoComponent,
    HeaderNavComponent,
    MenuIconComponent,
    UserAuthbtnsComponent,
    HomeComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
