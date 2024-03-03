import { Component, EventEmitter, Input, KeyValueDiffers, Output } from '@angular/core';

@Component({
  selector: 'shared-components-search-box',
  templateUrl: './search-box.component.html',
  styleUrl: './search-box.component.css'
})
export class SearchBoxComponent {



  @Input()
  public placeHolder:string ='';

  @Output()
  public onValue = new EventEmitter<string>();

  emitValue(value:string):void{
    this.onValue.emit(value);
  }
}
