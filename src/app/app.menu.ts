import { MenuItem } from 'src/frmwrk/services/menu.service';

export let  initialMenuItems: Array<MenuItem> = [
    {
        text: 'Dashboard',
        icon: 'D',
        route: '/dashboard',
        submenu: null
    },
    {
        text: 'Countries',
        icon: 'C',
        route: '/countries',
        submenu: null
    },
    {
        text: 'Settings',
        icon: 'S',
        route: '/settings',
        submenu: null
    }
]