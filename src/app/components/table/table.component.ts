import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() data!: any[];
  @Input() title: string = 'Table';
  @Input() hideAction:boolean = false;
  @Output() onItemAction = new EventEmitter();

  action(item:any) {
    this.onItemAction.emit(item);
  }

  getKeys() {
    const [first] = this.data;
    if(this.hideAction) {
      return Object.keys(first);
    }
    return [...Object.keys(first), 'Action'];
  }

  getValues(item:any) {
    return Object.values(item);
  }
}
