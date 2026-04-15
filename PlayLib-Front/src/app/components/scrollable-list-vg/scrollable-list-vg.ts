import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { Videogames } from '../../model/videogame';
@Component({
  selector: 'app-scrollable-list-vg',
  imports: [MatCardModule, MatIconModule, MatButtonModule],
  templateUrl: './scrollable-list-vg.html',
  styleUrl: './scrollable-list-vg.css',
})
export class ScrollableListVg {
  @Input() title: string = '';
  @Input() videogames: Videogames[] = [];

  scroll(container: HTMLElement, direction: number) {
    container.scrollBy({
      left: direction * 300,
      behavior: 'smooth'
    });
  }
}
