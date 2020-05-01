import { Component } from '@angular/core';

const QUESTIONS = [
  'What is the air-speed velocity of an unladen swallow?',
  'What is your favorite color?',
  'What is your name?',
];

const ANSWERS = [
  'What do you mean? African or European?',
  'Blue.',
  'Arthur, King of the Britons.',
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'family-trivia';
  gameId = 'BWlLLxSFKkSLgvxw48vA';
}
