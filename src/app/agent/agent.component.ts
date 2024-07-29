import { Component, OnInit, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { FooterComponent } from "../footer/footer.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-agent',
  standalone: true,
  imports: [FooterComponent,CommonModule],
  templateUrl: './agent.component.html',
  styleUrl: './agent.component.css'
  })

export class AgentComponent implements OnInit {
  constructor() { }
  @ViewChildren('.team-member') teamMembers!: QueryList<ElementRef>;


  ngOnInit(): void {
    this.updateLinks();
  }

  updateLinks(): void {
    this.teamMembers.forEach((member: ElementRef, index: number) => {
      const arrowLink = member.nativeElement.querySelector('.arrow a');
      if (arrowLink) {
        arrowLink.href = `../agent-details?id=${index + 1}`;
      }
    });
  }
}




  