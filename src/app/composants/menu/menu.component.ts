import { Component } from '@angular/core';
import { Menu } from './menu';
import { MatExpansionModule } from '@angular/material/expansion';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
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
    MatIconModule,
  ],
})
export class MenuComponent {
  public menuProperties: Array<Menu> = [
    {
      id: '1',
      titre: 'Tableau de bord',
      icon: 'monitoring',
      url: '',
      sousMenu: [
        {
          id: '11',
          titre: 'KPI',
          icon: 'donut_small',
          url: '',
        },
        {
          id: '12',
          titre: 'Statistiques',
          icon: 'bar_chart_4_bars',
          url: 'statistique',
        },
      ],
    },
    {
      id: '2',
      titre: 'Articles',
      icon: 'pallet',
      url: '',
      sousMenu: [
        {
          id: '21',
          titre: 'Articles',
          icon: 'receipt',
          url: '',
        },
        {
          id: '22',
          titre: 'Mouvements du stock',
          icon: 'trolley',
          url: '',
        },
      ],
    },
    {
      id: '3',
      titre: 'Clients',
      icon: 'add_business',
      url: '',
      sousMenu: [
        {
          id: '31',
          titre: 'Clients',
          icon: 'group',
          url: '',
        },
        {
          id: '32',
          titre: 'Commandes clients',
          icon: 'receipt_long',
          url: '',
        },
      ],
    },
    {
      id: '4',
      titre: 'Fournisseurs',
      icon: 'storefront',
      url: '',
      sousMenu: [
        {
          id: '41',
          titre: 'Fournisseurs',
          icon: 'handshake',
          url: '',
        },
        {
          id: '42',
          titre: 'Commandes fournisseurs',
          icon: 'receipt_long',
          url: '',
        },
      ],
    },
    {
      id: '5',
      titre: 'Parametrages',
      icon: 'settings_account_box',
      url: '',
      sousMenu: [
        {
          id: '51',
          titre: 'Categories',
          icon: 'dynamic_feed',
          url: '',
        },
        {
          id: '52',
          titre: 'Utilisateurs',
          icon: 'supervisor_account',
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
