import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup, FormArray } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'questions-form',
  templateUrl: './questions-form.component.html',
  styleUrls: ['./questions-form.component.scss'],
})
export class QuestionsFormComponent implements OnInit {
  @Input() gameId = '';
  questionsForm = new FormGroup({
    questions: new FormArray([new FormControl('')]),
  });
  firestore: AngularFirestore;

  constructor(firestore: AngularFirestore) {
    this.firestore = firestore;
  }

  get questions(): FormArray {
    return this.questionsForm.get('questions') as FormArray;
  }

  addQuestion(): void {
    this.questions.push(new FormControl(''));
  }

  ngOnInit(): void {}

  onSubmit(): void {
    const { questions } = this.questionsForm.value;
    const questionsByIdx = questions.reduce((acc, question, idx) => {
      acc[idx] = question;
      return acc;
    }, {});
    const docKey = `games/BWlLLxSFKkSLgvxw48vA`;
    this.firestore
      .doc(docKey)
      .set({ questions: questionsByIdx }, { merge: true });
  }
}
