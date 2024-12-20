//O Angular 18 gera esse arquivo, nele fica armazenado o Array de Rotas

import { Routes } from '@angular/router';
import { HomeComponent } from "./components/pages/home/home.component";
import { ContentComponent } from "./components/pages/content/content.component";


export const routes: Routes = [

  { path: '', 
    component: HomeComponent 
},

{ path: "content/:id", 
    component: ContentComponent },


];
