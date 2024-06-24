import { Routes } from '@angular/router';

import { HOMEComponent } from './components/home/home.component';
import { MenuComponent } from './components/menu/menu.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';


export const routes: Routes = [ //route array
    {//route object
        path:'Home-route',
        component: HOMEComponent
    },
    { 
        path:'Menu-route', 
        component: MenuComponent
    },
    {
        path:'About-route',
        component: AboutComponent
    },
    {
        path:'Contact-route',
        component: ContactComponent
    }
];
