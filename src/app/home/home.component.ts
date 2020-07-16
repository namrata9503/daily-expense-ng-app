import { Component, OnInit } from '@angular/core';
import { BudgetItem } from 'src/shared/models/budget-items.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
budgetItems: BudgetItem[]= new Array<BudgetItem>();
  constructor() { }

  ngOnInit() {
  }

  addItem(newItem: BudgetItem){
      this.budgetItems.push(newItem);
  }

  deleteItem(item : BudgetItem){
    let index= this.budgetItems.indexOf(item);
    this.budgetItems.splice(index, 1);

  }
}
