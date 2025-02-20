import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-lampadina',
  standalone: false,
  templateUrl: './lampadina.component.html',
  styleUrl: './lampadina.component.css'
})
export class LampadinaComponent implements OnChanges {
   color:string = '#ffffff';
   on: boolean = false;
  @Input() toggleValue: boolean = false;
  @Output() sendMessage: EventEmitter<string> = new EventEmitter<string>()
  
  ngOnChanges(changes: SimpleChanges): void {
    if(!this.toggleValue) {
      this.color = '#ffffff'
      this.on= false;
      this.sendMessage.emit('sono spento');

    } else {
      this.color = '#ffff00'
      this.sendMessage.emit('sono acceso')
    }


   


  }
  lampeggia(evt: any){
      this.on = evt.checked;
  }


}

