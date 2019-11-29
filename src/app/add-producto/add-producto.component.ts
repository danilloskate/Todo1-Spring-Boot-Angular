import { Component, OnInit } from '@angular/core';
import { ProductoService } from 'src/app/Service/producto.service';
import {FormControl,FormGroup,Validators} from '@angular/forms';
import { Producto } from '../producto';
@Component({
  selector: 'app-add-producto',
  templateUrl: './add-producto.component.html',
  styleUrls: ['./add-producto.component.css']
})
export class AddProductoComponent implements OnInit {

  constructor(private productoService:ProductoService) { }

  producto : Producto=new Producto();
  submitted = false;

  ngOnInit() {
    this.submitted=false;
  }

   productosaveform=new FormGroup({
    descripcion:new FormControl('' , [Validators.required , Validators.minLength(5) ] )    
  });

  saveProducto(saveProducto){
    this.producto=new Producto();   
    this.producto.descripcion=this.ProductoDescripcion.value;
    this.submitted = true;
    this.save();
  }

  

  save() {
    this.productoService.createProducto(this.producto)
      .subscribe(data => console.log(data), error => console.log(error));
    this.producto = new Producto();
  }

  get ProductoDescripcion(){
    return this.productosaveform.get('descripcion');
  }

  
  addProductoForm(){
    this.submitted=false;
    this.productosaveform.reset();
  }
}
