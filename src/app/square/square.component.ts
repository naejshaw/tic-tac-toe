import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-square',
  template: `
      <button>{{value}}</button>
  `,
  styles: [
    `
      button {
        width: 100%;
        height: 100%;
        border: none;
        font-size: 80px;
        font-weight: bold;
        cursor: pointer;
      }
    `
  ]
})
export class SquareComponent {

  @Input() value: 'X' | 'O' | undefined;
}
