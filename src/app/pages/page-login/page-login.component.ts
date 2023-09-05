import { Component } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
@Component({
  selector: 'app-page-login',
  templateUrl: './page-login.component.html',
  styleUrls: ['./page-login.component.scss'],
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatGridListModule,
    MatDividerModule,
    MatButtonModule,
  ],
})
export class PageLoginComponent {}
