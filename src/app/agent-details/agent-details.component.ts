import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FooterComponent } from '../footer/footer.component';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-agent-details',
  standalone: true,
  imports:[FooterComponent,CommonModule],
  templateUrl: './agent-details.component.html',
  styleUrls: ['./agent-details.component.css']
})
export class AgentDetailsComponent implements OnInit {
   agents = [

      {
          id: 1,
          name: "Amber Johnson",
          title: "Property Expert",
          def: "Building lasting relationships based on trust and integrity is at the core of Scarlett Gray`s parctice He takes pride in providing exceptional service",
          position: "Rental Property Expert",
          projects: "200+ Property",
          experience: "15+ Years",
          phone: "+0123-456 789",
          location: "New Jersey, New York",
          email: "amber@example.com",
          practice: "Property Seller",
          description: "	Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, omnis eveniet! Dignissimos, reprehenderit? Officiis quae velit in perferendis impedit minima exercitationem, ipsam cum consectetur, optio maxime, beatae iure quaerat totam soluta suscipit facere praesentium fugiat laborum! Necessitatibus minima repudiandae ipsa laborum illum delectus eaque dolores, facere quas excepturi porro tempore vel at quod rem corporis adipisci, earum, id dicta expedita.",
          photo: "assets/Agents/team_2_1_1.jpg"
      },
      {
          id: 2,
          name: "Willam Morgan",
          title: "Property Expert",
          def: "Building lasting relationships based on trust and integrity is at the core of Scarlett Gray`s parctice He takes pride in providing exceptional service",
          position: "Rental Property Expert",
          projects: "200+ Property",
          experience: "15+ Years",
          phone: "+0123-456 789",
          location: "New Jersey, New York",
          email: "willam@example.com",
          practice: "Property Seller",
          description: "	Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, omnis eveniet! Dignissimos, reprehenderit? Officiis quae velit in perferendis impedit minima exercitationem, ipsam cum consectetur, optio maxime, beatae iure quaerat totam soluta suscipit facere praesentium fugiat laborum! Necessitatibus minima repudiandae ipsa laborum illum delectus eaque dolores, facere quas excepturi porro tempore vel at quod rem corporis adipisci, earum, id dicta expedita.",
          photo: "assets/Agents/team_2_2_1.jpg"
      },
      {
          id: 3,
          name: "Alexander Hughes",
          title: "Property Expert",
          def: "Building lasting relationships based on trust and integrity is at the core of Scarlett Gray`s parctice He takes pride in providing exceptional service",
          position: "Rental Property Expert",
          projects: "200+ Property",
          experience: "15+ Years",
          phone: "+0123-456 789",
          location: "New Jersey, New York",
          email: "alexander@example.com",
          practice: "Property Seller",
          description: "	Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, omnis eveniet! Dignissimos, reprehenderit? Officiis quae velit in perferendis impedit minima exercitationem, ipsam cum consectetur, optio maxime, beatae iure quaerat totam soluta suscipit facere praesentium fugiat laborum! Necessitatibus minima repudiandae ipsa laborum illum delectus eaque dolores, facere quas excepturi porro tempore vel at quod rem corporis adipisci, earum, id dicta expedita.",
          photo: "assets/Agents/team_2_3_1.jpg"
      },
      {
          id: 4,
          name: "Emily Turner",
          title: "Property Expert",
          def: "Building lasting relationships based on trust and integrity is at the core of Scarlett Gray`s parctice He takes pride in providing exceptional service",
          position: "Rental Property Expert",
          projects: "200+ Property",
          experience: "15+ Years",
          phone: "+0123-456 789",
          location: "New Jersey, New York",
          email: "emily@example.com",
          practice: "Property Seller",
          description: "	Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, omnis eveniet! Dignissimos, reprehenderit? Officiis quae velit in perferendis impedit minima exercitationem, ipsam cum consectetur, optio maxime, beatae iure quaerat totam soluta suscipit facere praesentium fugiat laborum! Necessitatibus minima repudiandae ipsa laborum illum delectus eaque dolores, facere quas excepturi porro tempore vel at quod rem corporis adipisci, earum, id dicta expedita.",
          photo: "assets/Agents/team_2_4_1.jpg"
      },
      {
          id: 5,
          name: "Michal Smith",
          title: "Property Expert",
          def: "Building lasting relationships based on trust and integrity is at the core of Scarlett Gray`s parctice He takes pride in providing exceptional service",
          position: "Rental Property Expert",
          projects: "200+ Property",
          experience: "15+ Years",
          phone: "+0123-456 789",
          location: "New Jersey, New York",
          email: "michal@example.com",
          practice: "Property Seller",
          description: "	Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, omnis eveniet! Dignissimos, reprehenderit? Officiis quae velit in perferendis impedit minima exercitationem, ipsam cum consectetur, optio maxime, beatae iure quaerat totam soluta suscipit facere praesentium fugiat laborum! Necessitatibus minima repudiandae ipsa laborum illum delectus eaque dolores, facere quas excepturi porro tempore vel at quod rem corporis adipisci, earum, id dicta expedita.",
          photo: "assets/Agents/team_2_5_1.jpg"
      },
      {
          id: 6,
          name: "Lily Carter",
          title: "Property Expert",
          def: "Building lasting relationships based on trust and integrity is at the core of Scarlett Gray`s parctice He takes pride in providing exceptional service",
          position: "Rental Property Expert",
          projects: "200+ Property",
          experience: "15+ Years",
          phone: "+0123-456 789",
          location: "New Jersey, New York",
          email: "lily@example.com",
          practice: "Property Seller",
          description: "	Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, omnis eveniet! Dignissimos, reprehenderit? Officiis quae velit in perferendis impedit minima exercitationem, ipsam cum consectetur, optio maxime, beatae iure quaerat totam soluta suscipit facere praesentium fugiat laborum! Necessitatibus minima repudiandae ipsa laborum illum delectus eaque dolores, facere quas excepturi porro tempore vel at quod rem corporis adipisci, earum, id dicta expedita.",
          photo: "assets/Agents/team_2_6_1.jpg"
      }

  

        ];

  agent: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      const agentId = +params['id'];
      this.agent = this.agents.find(agent => agent.id === agentId);
    });
  }
}
