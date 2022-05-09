import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  constructor() {
    
  }

  // items: MenuItem[] = []
  ngOnInit(): void {
  //   this.items = [
  //     {label: 'inicio',
  //     icon:'pi pi-fw pi-file',
  //     items:[
  //       {
  //           label:'New',
  //           icon:'pi pi-fw pi-plus',
  //           items:[
  //             {
  //                 label:'New',
  //                 icon:'pi pi-fw pi-plus',   
  //             }]   
  //       }]
  //     },
  //     {label: 'control'},
  //     {label: 'inventario'}
  //     ]
   }

}
