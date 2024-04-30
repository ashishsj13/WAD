import { AfterViewInit, Component, ViewChild } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { Product } from "./models/product";
import { ProductService } from "./services/product.service";
import { ModeEnum } from "./enum/mode.enum";
import { MatTable } from "@angular/material/table";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements AfterViewInit {
  form = this.fb.group({
    id: [],
    productName: ["", Validators.required],
    date: ["", Validators.required],
    quantity: ["", Validators.required],
    price: ["", Validators.required],
  });

  ModeEnum = ModeEnum;
  displayedColumns: string[] = ["id", "productName", "date", "quantity", "price", "action"];

  products: Product[];
  mode = ModeEnum.NON;
  @ViewChild(MatTable) table: MatTable<Product>;

  constructor(private productService: ProductService, private fb: FormBuilder) { }

  ngAfterViewInit() {
    this.setUsers();
  }

  private setUsers() {
    this.products = this.productService.getAllUsers();
    this.table.renderRows();
  }

  editUser(user?: Product) {
    if (user) {
      this.form.setValue(user);
      this.mode = ModeEnum.EDIT;
    } else {
      this.mode = ModeEnum.ADD;
    }
  }

  saveUser() {
    const user = this.form.value as Product;

    if (this.mode === ModeEnum.ADD) {
      this.productService.addUser(user);
    } else {
      this.productService.updateUser(user);
    }
    this.form.reset();
    this.setUsers();
    this.mode = ModeEnum.NON;
    this.cancel();
  }

  removeUser(user: Product) {
    this.productService.deleteUser(user);
    this.setUsers();
  }

  cancel() {
    this.mode = ModeEnum.NON;
  }
}
