import { Component, OnInit } from "@angular/core";
import { ProductosService } from "../../services/productos.service";

@Component({
  selector: "app-donaciones",
  templateUrl: "./donaciones.component.html",
  styleUrls: ["./donaciones.component.css"],
})
export class DonacionesComponent implements OnInit {
  constructor(public productosService: ProductosService) {}

  ngOnInit(): void {}
}
