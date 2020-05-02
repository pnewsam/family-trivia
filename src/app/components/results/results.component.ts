import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss'],
})
export class ResultsComponent implements OnInit {
  firestore: AngularFirestore;
  responsesByPlayer: Map<string, string>;

  constructor(firestore: AngularFirestore) {
    this.firestore = firestore;
    this.firestore
      .doc('games/BWlLLxSFKkSLgvxw48vA')
      .get()
      .subscribe((doc) => {
        console.log(doc.data());
        this.responsesByPlayer = doc.data().responsesByPlayer;
        console.log(this.responsesByPlayer);
      });
  }

  ngOnInit(): void {}
}
