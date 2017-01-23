import { Component, OnInit, Input, ViewChild, Renderer  } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Album } from '../album.model';



@Component({
  selector: 'app-album-detail',
  templateUrl: './album-detail.component.html',
  styleUrls: ['./album-detail.component.css']
})


export class AlbumDetailComponent implements OnInit {
  @Input() src: string;
  @ViewChild('player') player;

  albumId: number = null;

  constructor(private route: ActivatedRoute, private location: Location, public renderer: Renderer) {}



  ngOnInit() {
    this.route.params.forEach((urlParametersArray) => {
      this.albumId = parseInt(urlParametersArray['id']);
    });
  }

  ngAfterViewInit() {
    console.log(this.player);
  }

}
