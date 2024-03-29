import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ProductoListComponent } from './producto-list/producto-list.component';
import {DataTablesModule} from 'angular-datatables';
import { AddProductoComponent } from './add-producto/add-producto.component';
import { TipoProductolistComponent } from './tipoProductolist/tipoproductolist.component';
import { AddTipoProductoComponent } from './add-tipo-producto/add-tipo-producto.component';

@NgModule({
  declarations: [
    AppComponent,    
    ProductoListComponent,
      AddProductoComponent,
    TipoProductolistComponent,
    AddTipoProductoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    DataTablesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
