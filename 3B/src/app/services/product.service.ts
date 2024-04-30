import { Injectable } from "@angular/core";
import { Product } from "../models/product";

@Injectable({
  providedIn: "root",
})
export class ProductService {
  private products = [
    {
      id: 1,
      productName: "Product 1",
      date: "2024-04-12",
      quantity: "4",
      price:"500",
    },
    {
      id: 2,
      productName: "Product 1",
      date: "2024-04-13",
      quantity: "6",
      price:"4500",
    },
  ];

  constructor() { }

  getAllUsers(): Product[] {
    return this.products;
  }

  addUser(user: Product) {
    user.id = this.products.length + 1;
    this.products.push(user);
  }

  updateUser(user: Product) {
    const index = this.products.findIndex((u) => user.id === u.id);
    this.products[index] = user;
  }

  deleteUser(user: Product) {
    this.products.splice(this.products.indexOf(user), 1);
  }
}
