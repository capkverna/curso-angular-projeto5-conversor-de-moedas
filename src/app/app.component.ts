import { Component } from '@angular/core';
import { ConversorComponent } from './conversor';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ConversorComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = "Conversor de moedas"
}
