import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-mini-card',
  standalone: true,
  imports: [],
  templateUrl: './mini-card.component.html',
  styleUrl: './mini-card.component.css'
})
export class MiniCardComponent {
  
  @Input()
  photoCover: string = "";
  @Input()
  cardTitle: string = "";
  @Input()
  cardDescription: string = "";

}
