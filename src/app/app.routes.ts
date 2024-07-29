import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { AgentComponent } from './agent/agent.component'
import { AgentDetailsComponent } from './agent-details/agent-details.component';
import { PropertiesComponent } from './properties/properties.component';
import { ContactComponent } from './contact/contact.component';
import { Prop1Component } from './prop1/prop1.component'

export const routes: Routes = [
    { path: '', component: HomeComponent, pathMatch: 'full' },
    { path: 'about', component: AboutComponent },
    { path: 'agent', component: AgentComponent },
    { path: 'agent-details', component: AgentDetailsComponent },
    { path: 'properties', component: PropertiesComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'prop1', component: Prop1Component },
];
