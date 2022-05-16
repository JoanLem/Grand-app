import { Injectable } from '@angular/core';
import {Home} from '../components/home/home.interface';
import { HEROES } from '../mock-home'

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  static getHeroes() {
    throw new Error('Method not implemented.');
  }

  constructor() { }
  getHeroes(): Home[] {
    return HEROES;
  }

}
