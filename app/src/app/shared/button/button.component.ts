import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input()
  text: string = '';

  @Input()
  mode: string = 'default';

  @Output()
  handleBtnClick = new EventEmitter<void>();

  constructor() {}

  handleClick() {
    this.handleBtnClick.emit();
  }
}
