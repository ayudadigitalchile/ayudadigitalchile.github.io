import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class InfopaginaService {
  info: infopagina = {};
  categoria: Categoria[] = [];
  cargada = false;

  equipo: any[] = [];

  constructor(private http: HttpClient) {
    this.cargarInfo();
    this.cargarEquipo();
    this.cargarInfoCategorias();
  }

  private cargarInfo() {
    // leer archivo json
    this.http
      .get("assets/data/data-pagina.json")
      .subscribe((resp: infopagina) => {
        // this.cargada = true;
        this.info = resp;
      });
  }

  private cargarInfoCategorias() {
    // leer archivo json
    this.http
      .get("assets/data/data-categorias.json")
      .subscribe((resp: Categoria[]) => {
        this.cargada = true;
        this.categoria = resp;
        console.log("categoria", this.categoria);
      });
  }

  private cargarEquipo() {
    // leer archivo json
    this.http
      .get("https://ayudadigitalchile-ac9fe.firebaseio.com/equipo.json")
      .subscribe((resp: any[]) => {
        this.cargada = true;
        this.equipo = resp;
      });
  }
}

interface infopagina {
  titulo?: string;
  email?: string;
  nombre_corto?: string;
  pagina_autor?: string;
  facebook?: string;
  twitter?: string;
  instagram?: string;
  tublr?: string;
  equipoTrabajo?: any[];
}

interface Categoria {
  categoria?: string;
  cod?: string;
  titulo?: string;
  descripcion?: string;
  url?: string;
}
