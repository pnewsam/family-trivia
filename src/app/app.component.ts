import { Component } from '@angular/core';

const QUESTIONS = [
  'What is the air-speed velocity of an unladen swallow?',
  'What is your favorite color?',
  'What is your name?',
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'family-trivia';
  questions = QUESTIONS;
}
