import { Component, OnInit, Renderer2 } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { FooterComponent } from './footer/footer.component';
import { AgentComponent } from './agent/agent.component'
import { AgentDetailsComponent } from './agent-details/agent-details.component'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, HomeComponent, AboutComponent, FooterComponent, AgentComponent, AgentDetailsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'my-app';
  minue: any;
  nav: any;
  btn: any;

  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {
    this.minue = document.querySelector('.minue');
    this.nav = document.querySelector('.container-fauild nav');

    this.renderer.listen(this.minue, 'click', () => {
      if (this.minue.classList.contains('minue')) {
        this.nav.style.display = 'none';
        this.minue.classList.replace('minue', 'clicked');

      } else if (this.minue.classList.contains('clicked')) {
        this.nav.style.display = 'block';
        this.minue.classList.replace('clicked', 'minue');
      }
    });

  }
}
