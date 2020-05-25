import { Component, OnInit } from "@angular/core";
import { InfopaginaService } from "../../services/infopagina.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"],
})
export class HeaderComponent implements OnInit {
  isShow = true;
  constructor(public Servicio: InfopaginaService, private router: Router) {}

  ngOnInit(): void {}

  buscarProducto(termino: string) {
    if (termino.length < 1) {
      return;
    }
    this.router.navigate(["/search", termino]);
    console.log(termino);
    this.toggleDisplay();
  }
  toggleDisplay() {
    this.isShow = false;
  }
  toggleDisplayOn() {
    this.isShow = true;
  }
}
