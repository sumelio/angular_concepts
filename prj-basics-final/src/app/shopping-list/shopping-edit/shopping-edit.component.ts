import { Component, OnInit, ViewChild, Output, EventEmitter, ElementRef } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') nameInput: ElementRef;
  @ViewChild('amountInput') amountInput: ElementRef;
  @Output() addNewShopping  = new EventEmitter<Ingredient>();

  constructor() { }

  ngOnInit() {
  }

  saveInf() {
    console.log('save');
    this.addNewShopping.emit(new Ingredient(this.nameInput.nativeElement.value , this.amountInput.nativeElement.value));
  }
}
