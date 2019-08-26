import { Component } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-animations',
  templateUrl: './animations.component.html',
  styleUrls: ['./animations.component.css'],
  animations: [
    trigger('shape', [
      state('SQUARE', style({
        height: '400px',
        width: '400px',
        borderRadius: '1%',
        opacity: 1,
        backgroundColor: 'blue'
      })),
     state('CIRCLE', style({
        height: '300px',
        width: '300px',
        opacity: 0.4,
        borderRadius: '100%',
        backgroundColor: 'green'
      })),
      state('RECTANGLE', style({
        height: '400px',
        width: '800px',
        opacity: 0.8,
        borderRadius: '1%',
        backgroundColor: 'firebrick'
      })),
      state('DOT', style({
        height: '50px',
        width: '50px',
        fontSize: '6px',
        opacity: 0.4,
        borderRadius: '100%',
        backgroundColor: 'gold'
      })),
      transition('SQUARE => CIRCLE', [animate('0.5s')]),
      transition('SQUARE => RECTANGLE', [animate('0.5s')]),
      transition('SQUARE => DOT', [animate('0.5s')]),
      transition('CIRCLE => SQUARE', [animate('0.5s')]),
      transition('CIRCLE => RECTANGLE', [animate('0.5s')]),
      transition('CIRCLE => DOT', [animate('0.5s')]),
      transition('RECTANGLE => SQUARE', [animate('0.5s')]),
      transition('RECTANGLE => CIRCLE', [animate('0.5s')]),
      transition('RECTANGLE => DOT', [animate('0.5s')]),
      transition('DOT => SQUARE', [animate('0.5s')]),
      transition('DOT => CIRCLE', [animate('0.5s')]),
      transition('DOT => RECTANGLE', [animate('0.5s')]),
    ]),
  ]
})
export class AnimationsComponent {

  shape: string = "SQUARE";

  changeShape(selection: string) {
    enum shapes {
      square = "SQUARE",
      circle = "CIRCLE",
      rectangle = "RECTANGLE",
      dot = "DOT"
    }
    this.shape = selection;

  }

}
