import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FrameworkBodyComponent } from './framework-body/framework-body.component';
import { ContentComponent } from './content/content.component';
import { TitleBarComponent } from './title-bar/title-bar.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { StatusBarComponent } from './status-bar/status-bar.component';
import { FrameworkConfigService } from './services/framework-config.service';
import { ScreenService } from './services/screen.service';
import { ScreenBelowLarge } from './directives/screen-below-large.directive';
import { ScreenLarge } from './directives/screen-large.directive';
import { MenuService } from './services/menu.service';
import { MenuComponent } from 'src/app/src/frmwrk/menus/menu/menu.component';
import { MenuItemComponent } from './menus/menu-item/menu-item.component';
import { MenusModule } from './menus/menus.module';



@NgModule({
  declarations: [
    FrameworkBodyComponent,
    ContentComponent,
    TitleBarComponent,
    TopBarComponent,
    StatusBarComponent,
    ScreenBelowLarge,
    ScreenLarge,
  ],
  imports: [
    CommonModule,
    MenusModule
  ],
  exports: [
    FrameworkBodyComponent ,// Only export the framework body component 
  ],
  providers : [
    FrameworkConfigService,
    ScreenService
  ]
})
export class FrmwrkModule { }
