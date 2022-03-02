// Uncomment these imports to begin using these cool features!

// import {inject} from '@loopback/core';
import {get} from '@loopback/rest';

interface Iproduct{
  id:number,
  name:string
}


export class ProductsController {
ourProducts={
  id:12,
  name:"Akari"

}

  @get('/Products')
  products(): Iproduct {
    return this.ourProducts;
  }
;
}
