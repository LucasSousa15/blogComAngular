import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

//Importação dos meus componentes
import { HomeComponent } from "./components/pages/home/home.component";



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HomeComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-blog';
}
