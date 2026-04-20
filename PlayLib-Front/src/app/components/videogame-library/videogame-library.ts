import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Videogame } from '../../model/videogame';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-videogame-library',
  imports: [
    CommonModule,
    FormsModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './videogame-library.html',
  styleUrl: './videogame-library.css',
})
export class VideogameLibrary {

  searchText = '';
  filter = 'all';

  videogames: Videogame[] = [
    {
      id: '1',
      name: 'Undertale',
      description: '',
      developer: 'Toby Fox',
      image_route: 'https://i.imgur.com/EEnkEEf.jpg',
      release_date: new Date('2015-09-15'),
      format: 'Digital'
    },
    {
      id: '2',
      name: 'Deltarune',
      description: '',
      developer: 'Toby Fox',
      image_route: 'https://i.imgur.com/Sfh0vjn.jpg',
      release_date: new Date('2018-10-31'),
      format: 'Digital'
    },
    {
      id: '3',
      name: 'Red Dead Redemption 2',
      description: '',
      developer: 'Rockstar Games',
      image_route: 'assets/img/rdr2.jpg',
      release_date: new Date('2018-10-26'),
      format: 'PC'
    },
    {
      id: '4',
      name: 'Elden Ring',
      description: '',
      developer: 'FromSoftware',
      image_route: 'assets/img/eldenring.jpg',
      release_date: new Date('2022-02-25'),
      format: 'PC'
    },
    {
      id: '5',
      name: 'God of War',
      description: '',
      developer: 'Santa Monica Studio',
      image_route: 'assets/img/godofwar.jpg',
      release_date: new Date('2018-04-20'),
      format: 'PlayStation'
    },
    {
      id: '6',
      name: 'Horizon Zero Dawn',
      description: '',
      developer: 'Guerrilla Games',
      image_route: 'assets/img/horizon.jpg',
      release_date: new Date('2017-02-28'),
      format: 'PC'
    },
    {
      id: '7',
      name: 'The Last of Us Part II',
      description: '',
      developer: 'Naughty Dog',
      image_route: 'assets/img/tlou2.jpg',
      release_date: new Date('2020-06-19'),
      format: 'PlayStation'
    },
    {
      id: '8',
      name: 'Assassin’s Creed Valhalla',
      description: '',
      developer: 'Ubisoft',
      image_route: 'assets/img/valhalla.jpg',
      release_date: new Date('2020-11-10'),
      format: 'PC'
    },
    {
      id: '9',
      name: 'Minecraft',
      description: '',
      developer: 'Mojang',
      image_route: 'assets/img/minecraft.jpg',
      release_date: new Date('2011-11-18'),
      format: 'Multiplatform'
    },
    {
      id: '10',
      name: 'Grand Theft Auto V',
      description: '',
      developer: 'Rockstar Games',
      image_route: 'assets/img/gtav.jpg',
      release_date: new Date('2013-09-17'),
      format: 'PC'
    }
  ];

}