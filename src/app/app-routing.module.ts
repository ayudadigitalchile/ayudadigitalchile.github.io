import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DonacionesComponent } from "./pages/donaciones/donaciones.component";
import { AboutComponent } from "./pages/about/about.component";
import { ItemComponent } from "./pages/item/item.component";
import { SearchComponent } from "./pages/search/search.component";
import { HomeComponent } from "./pages/home/home.component";

const app_routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "about", component: AboutComponent },
  { path: "search/:termino", component: SearchComponent },
  { path: "**", pathMatch: "full", redirectTo: "home" },
];
@NgModule({
  imports: [RouterModule.forRoot(app_routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
