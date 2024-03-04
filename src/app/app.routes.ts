import { Routes } from '@angular/router';
import { HomeComponent } from './Pages/home/home.component';
import { CartComponent } from './Pages/cart/cart.component';
import { SaleComponent } from './Pages/sale/sale.component';

export const routes: Routes = [
    {
        path: "**",
        component:HomeComponent
    },
    {
        path: 'products',
        component:HomeComponent
    },
    {
        path:'cart',
        component: CartComponent
    },{
        path:'sale',
        component: SaleComponent
    }
];
