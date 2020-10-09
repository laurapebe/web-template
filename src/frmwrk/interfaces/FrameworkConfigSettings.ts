import { IconFiles } from './IconFiles';

export interface FrameworkConfigSettings {
    showLanguageSelector?: boolean,
    showUserControls?: boolean,
    showStatusBar?: boolean,
    showsStatusBarBreakpoint?: number,
    socialIcons?: Array<IconFiles>;
}