import { ProductFormComponent } from './admin/product-form/product-form.component';
import { AdminAuthGuardService } from './admin-auth-guard.service';
import { AuthGuardService } from './auth-guard.service';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CheckOutComponent } from './check-out/check-out.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
    {
        path: '',
        component: ProductsComponent
    },
    {
        path: 'products',
        component: ProductsComponent
    },
    {
        path: 'shopping-cart',
        component: ShoppingCartComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },




    {
        path: 'my-orders',
        component: MyOrdersComponent,
        canActivate: [AuthGuardService]
    },
    {
        path: 'check-out',
        component: CheckOutComponent,
        canActivate: [AuthGuardService]
    },
    {
        path: 'order-success',
        component: OrderSuccessComponent,
        canActivate: [AuthGuardService]
    },




    {
        path: 'admin/products/new',
        component: ProductFormComponent,
        canActivate: [AuthGuardService, AdminAuthGuardService]
    },
    {
        path: 'admin/products/:id',
        component: ProductFormComponent,
        canActivate: [AuthGuardService, AdminAuthGuardService]
    },
    {
        path: 'admin/products',
        component: AdminProductsComponent,
        canActivate: [AuthGuardService, AdminAuthGuardService]
    },
    {
        path: 'admin/orders',
        component: AdminOrdersComponent,
        canActivate: [AuthGuardService, AdminAuthGuardService]
    }
]

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ],
    declarations: [],
})
export class AppRoutingModule { }