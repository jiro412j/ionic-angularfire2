import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import {AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  movies: FirebaseListObservable<any>;;
  name;
  rating;
  af: AngularFire;

  constructor(public navCtrl: NavController, af: AngularFire) {
      this.movies = af.database.list('/movies');
  }

  postDataToFirebase() {
    const dataToBeSent = {
      name: this.name,
      rating: this.rating
    }
    this.movies.push(dataToBeSent);
  }
  
}
