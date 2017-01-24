import { Component } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { AlbumService } from '../album.service';
import { Album } from '../album.model';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [AlbumService]
})
export class AdminComponent {
  albums: FirebaseListObservable<any[]>;

  constructor(private albumService: AlbumService) {
  }



  submitForm(title: string, artist: string, description: string, audio: string, image: string){
    var newAlbum: Album = new Album(title, artist, description, audio, image);
    this.albumService.addAlbum(newAlbum);
  }

}
