import { Component } from '@angular/core';
//Importação dos meus componentes
import { MenuBarComponent } from '../../menu-bar/menu-bar.component'
import { TitleComponent } from '../../title/title.component';
import { MainCardComponent } from '../../main-card/main-card.component';
import { MiniCardComponent } from "../../mini-card/mini-card.component";


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MenuBarComponent, TitleComponent, MainCardComponent,MiniCardComponent,],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
