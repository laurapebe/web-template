import { Injectable } from '@angular/core';
import { FrameworkConfigSettings } from '../interfaces/FrameworkConfigSettings';
import { IconFiles } from '../interfaces/IconFiles';

@Injectable({
  providedIn: 'root'
})
export class FrameworkConfigService {

  showLanguageSelector = true;
  showUserControls = true;
  showStatusBar = true;
  showsStatusBarBreakpoint = 0;
  socialIcons = new Array<IconFiles>();

  configure(settings : FrameworkConfigSettings): void {
    // Assign all values of settings object to the service's instance. 
    Object.assign(this, settings)
  }
  constructor() { }
}

/**
 * This service allows configuration of the interface depending on the application's needs. 
 */
