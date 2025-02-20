import { Component } from '@angular/core';

@Component({
  selector: 'app-lampadine',
  standalone: false,
  templateUrl: './lampadine.component.html',
  styleUrl: './lampadine.component.css'
})
export class LampadineComponent {

  on: boolean = false;
  message: string = '';

  accendi(evt: any) {
    this.on = evt.checked;
  }

  getMessage(evt: string) {
    this.message = evt;
  }
}
