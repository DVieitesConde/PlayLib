import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { Tabletop } from '../../model/tabletop';

@Component({
  selector: 'app-scrollable-list-tg',
  imports: [MatCardModule, MatIconModule, MatButtonModule],
  templateUrl: './scrollable-list-tg.html',
  styleUrl: './scrollable-list-tg.css',
})
export class ScrollableListTg {
  @Input() title: string = '';
  @Input() tabletopGames: Tabletop[] = [];

  scroll(container: HTMLElement, direction: number) {
    container.scrollBy({
      left: direction * 300,
      behavior: 'smooth'
    });
  }
}
