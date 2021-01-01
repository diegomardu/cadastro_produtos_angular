import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  product: Product = {
    name: 'Produto teste',
    price: 128.50
  }

  constructor(private productService: ProductService,
      private router: Router) { }

  ngOnInit(): void {
  }

  createProduct():void{
    this.productService.create(this.product).subscribe(() => {
      this.productService.showMessage('Produto cadastrado')
      this.router.navigate(['/products'])
    })
  }

  cancel():void{
    this.router.navigate(['/products'])
  }

}
