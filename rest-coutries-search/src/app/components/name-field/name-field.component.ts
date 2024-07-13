import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-name-field',
  templateUrl: './name-field.component.html',
  styleUrls: ['./name-field.component.scss']
})
export class NameFieldComponent {
  @Input() name: string = "";
  @Output() nameChange = new EventEmitter<string>();

  onNameChanged(event: any): void {
    const value = (event.target as HTMLInputElement).value;
    this.nameChange.emit(value);
  }
}
