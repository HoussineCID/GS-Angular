import { Component } from '@angular/core';
import { Menu } from './menu';
import { MatExpansionModule } from '@angular/material/expansion';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    MatExpansionModule,
    MatListModule,
    MatCardModule,
    RouterModule,
  ],
})
export class MenuComponent {
  public menuProperties: Array<Menu> = [
    {
      id: '1',
      titre: 'Tableau de bord',
      icon: '',
      url: '',
      sousMenu: [
        {
          id: '11',
          titre: 'KPI',
          icon: '',
          url: '',
        },
        {
          id: '12',
          titre: 'Statistiques',
          icon: '',
          url: 'statistique',
        },
      ],
    },
    {
      id: '2',
      titre: 'Articles',
      icon: '',
      url: '',
      sousMenu: [
        {
          id: '21',
          titre: 'Articles',
          icon: '',
          url: '',
        },
        {
          id: '22',
          titre: 'Mouvements du stock',
          icon: '',
          url: '',
        },
      ],
    },
    {
      id: '3',
      titre: 'Clients',
      icon: '',
      url: '',
      sousMenu: [
        {
          id: '31',
          titre: 'Clients',
          icon: '',
          url: '',
        },
        {
          id: '32',
          titre: 'Commandes clients',
          icon: '',
          url: '',
        },
      ],
    },
    {
      id: '4',
      titre: 'Fournisseurs',
      icon: '',
      url: '',
      sousMenu: [
        {
          id: '41',
          titre: 'Fournisseurs',
          icon: '',
          url: '',
        },
        {
          id: '42',
          titre: 'Commandes fournisseurs',
          icon: '',
          url: '',
        },
      ],
    },
    {
      id: '5',
      titre: 'Parametrages',
      icon: '',
      url: '',
      sousMenu: [
        {
          id: '51',
          titre: 'Categories',
          icon: '',
          url: '',
        },
        {
          id: '52',
          titre: 'Utilisateurs',
          icon: '',
          url: '',
        },
      ],
    },
  ];
  constructor(private router: Router) {}
  navigate(url: string): void {
    this.router.navigate([url]);
  }
}
