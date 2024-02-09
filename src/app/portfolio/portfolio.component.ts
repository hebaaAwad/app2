import { Component } from '@angular/core';


interface PortfolioPicture{
  pImg?:string;
 
}

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {
  allPicture:PortfolioPicture[]=[
    {pImg:"../../assets/img/1.jpg"},
    {pImg:"../../assets/img/3.jpg"},
    {pImg:"../../assets/img/5.jpg"},
    {pImg:"../../assets/img/11.jpg"},
    {pImg:"../../assets/img/8.jpg"},
    {pImg:"../../assets/img/9.jpg"},
]

}
