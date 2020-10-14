import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from 'src/app/src/frmwrk/menus/menu/menu.component';
import { MenuItemComponent } from './menu-item/menu-item.component';
import { MenuService } from '../services/menu.service';



@NgModule({
  declarations: [
    MenuComponent,
    MenuItemComponent],
  imports: [
    CommonModule
  ],
  providers: [MenuService]
})
export class MenusModule { }
