import { ProductService } from './services/product.service';
import { CategoryService } from './services/category.service';
import { AdminAuthGuardService as AdminAuthGuard } from './admin-auth-guard.service';
import { UserService } from './user.service';
import { AuthGuardService as AuthGuard } from './auth-guard.service';
import { AuthenticationService } from './auth.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';

import { LoginComponent } from './login/login.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from 'src/environments/environment';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { ProductsComponent } from './products/products.component';
import { ProductFormComponent } from './admin/product-form/product-form.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ShoppingCartComponent,
    CheckOutComponent,
    OrderSuccessComponent,
    MyOrdersComponent,
    ProductsComponent,
    AdminProductsComponent,
    AdminOrdersComponent,
    LoginComponent,
    ProductFormComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase), AngularFireDatabaseModule, AngularFireAuthModule,
        NgbModule.forRoot()], 

  providers: [ AdminAuthGuard, UserService, AuthenticationService, AuthGuard, CategoryService, ProductService], 
  bootstrap: [ AppComponent ]  
})
export class AppModule { }
