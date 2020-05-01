import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup, FormArray } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { firestore } from 'firebase';

@Component({
  selector: 'answers-form',
  templateUrl: './answers-form.component.html',
  styleUrls: ['./answers-form.component.scss'],
})
export class AnswersFormComponent implements OnInit {
  @Input() gameId = '';
  answersForm = new FormGroup({
    playerName: new FormControl(''),
    answers: new FormArray([]),
  });

  game: Observable<any>;
  questions: any[];
  firestore: AngularFirestore;

  constructor(firestore: AngularFirestore) {
    this.firestore = firestore;
    this.firestore
      .doc('games/BWlLLxSFKkSLgvxw48vA')
      .get()
      .toPromise()
      .then((doc) => {
        this.questions = doc.data().questions;
        Object.values(this.questions).forEach((_) => {
          this.answers.push(new FormControl(''));
        });
      });
  }

  get answers() {
    return this.answersForm.get('answers') as FormArray;
  }

  ngOnInit(): void {}

  onSubmit(): void {
    const { playerName, answers } = this.answersForm.value;
    const answersByIdx = answers.reduce((acc, answer, idx) => {
      acc[idx] = answer;
      return acc;
    }, {});
    const docKey = `games/BWlLLxSFKkSLgvxw48vA`;
    this.firestore
      .doc(docKey)
      .set(
        { responsesByPlayer: { [playerName]: answersByIdx } },
        { merge: true }
      );
  }
}
