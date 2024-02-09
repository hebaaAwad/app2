import { NotfoundComponent } from './notfound/notfound.component';
import { ContactsComponent } from './contacts/contacts.component';
import { AboutComponent } from './about/about.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortfolioComponent } from './portfolio/portfolio.component';

const routes: Routes = [
{path:'' , redirectTo:'about' , pathMatch:'full' , title:'about'},
{path:'about' , component:AboutComponent , title:'about'},
{path:'portfolio' , component:PortfolioComponent , title:'portfolio'},
{path:'contacts' , component:ContactsComponent , title:'contacts'},
{path:'**' , component:NotfoundComponent , title:'notfound'},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
