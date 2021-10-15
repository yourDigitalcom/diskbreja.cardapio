import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  constructor() { }

  @Output() public clickEmmiter: EventEmitter<any> = new EventEmitter();

  @Input() public name: string;

  ngOnInit(): void {
  }

  public emmiterClick(name: string): void {
    this.clickEmmiter.emit(name);
  }

}
