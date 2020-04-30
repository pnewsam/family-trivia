import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup, FormArray } from '@angular/forms';

@Component({
  selector: 'answers-form',
  templateUrl: './answers-form.component.html',
  styleUrls: ['./answers-form.component.scss'],
})
export class AnswersFormComponent implements OnInit {
  @Input() questions = [];
  answersForm = new FormGroup({
    answers: new FormArray([]),
  });

  constructor() {}

  get answers() {
    return this.answersForm.get('answers') as FormArray;
  }

  ngOnInit(): void {
    this.questions.forEach((_) => {
      this.answers.push(new FormControl(''));
    });
  }

  onSubmit() {
    console.warn(this.answersForm.value);
  }
}
