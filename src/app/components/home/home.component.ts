import { Component, OnInit } from '@angular/core';
import { Home } from './home.interface';
import { HEROES } from '../../mock-home';
import {HomeService} from'../../services/home.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private heroService: HomeService) {}
  
  ngOnInit(): void {
    this.getHeroes();
  }
  
  title:any;
  heroes:Home[] = [];
  select:any;
  onSelect(h: any):void{
    this.select = h;
    this.title = this.select;
    
  }

  getHeroes(): void {
    this.heroes = this.heroService.getHeroes();
  }
}
