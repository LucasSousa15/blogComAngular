import { Component } from '@angular/core';
import { RouterOutlet, Routes } from '@angular/router';

//Importação dos meus componentes
import { HomeComponent } from "./components/pages/home/home.component";
import { MenuBarComponent } from './components/menu-bar/menu-bar.component'



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,MenuBarComponent, ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-blog';
}
