import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-prop1',
  standalone: true,
  imports: [FooterComponent],
  templateUrl: './prop1.component.html',
  styleUrl: './prop1.component.css'
})
export class Prop1Component {

}
