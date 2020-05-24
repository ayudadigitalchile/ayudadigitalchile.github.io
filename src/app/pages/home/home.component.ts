import { Component, OnInit } from "@angular/core";
import { InfopaginaService } from "src/app/services/infopagina.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {
  constructor(public _infoService: InfopaginaService) {}

  ngOnInit(): void {}
}
