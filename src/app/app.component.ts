import { Component } from '@angular/core';
import { FrameworkConfigSettings } from 'src/frmwrk/interfaces/FrameworkConfigSettings';
import { FrameworkConfigService } from 'src/frmwrk/services/framework-config.service';
import { MenuService } from 'src/frmwrk/services/menu.service';
import { initialMenuItems } from './app.menu';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'web-template';
  constructor(
    private frameworkConfigService: FrameworkConfigService,
    private menuService: MenuService) {

    let config:FrameworkConfigSettings = {
      socialIcons: [
        {imageFile: 'assets/social-fb-bw.png', alt:'Facebook', link: 'http://www.facebook.com'},
        {imageFile: 'assets/social-google-bw.png', alt:'Google+', link: 'http://www.google.com'},
        {imageFile: 'assets/social-twitter-bw.png', alt:'Twitter', link: 'http://www.twitter.com'},
      ],
      showLanguageSelector: true,
      showUserControls: true,
      showsStatusBarBreakpoint: 800
    };

    frameworkConfigService.configure(config);

    menuService.items = initialMenuItems;
  }
}
