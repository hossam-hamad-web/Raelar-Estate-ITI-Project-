import { Component, OnInit, Renderer2, HostListener } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [FooterComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent implements OnInit {
  btn: any;

  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {
    this.btn = document.querySelector('.btn');
    this.renderer.listen(this.btn, 'click', () => {
      window.scrollTo({
        left: 0,
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    if (window.scrollY >= 500) {
      this.btn.style.display = 'block';
    } else {
      this.btn.style.display = 'none';
    }
  }

}
