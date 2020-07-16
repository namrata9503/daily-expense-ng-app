import { Component, OnInit } from "@angular/core";
import { BudgetItem } from "src/shared/models/budget-items.model";
import { UpdateEvent } from '../budget-item-list/budget-item-list.component';

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  total: number = 0;

  budgetItems: BudgetItem[] = new Array<BudgetItem>();
  constructor() {}

  ngOnInit() {}

  addItem(newItem: BudgetItem) {
    this.budgetItems.push(newItem);
    this.total += newItem.amount;
  }

  deleteItem(item: BudgetItem) {
    let index = this.budgetItems.indexOf(item);
    this.budgetItems.splice(index, 1);
    this.total -= item.amount;

  }

  updateItem(updateItem: UpdateEvent){

       //result is updated item
        //replace the item with updated item of form
       this.budgetItems[this.budgetItems.indexOf(updateItem.old)] = updateItem.new;

       //update total budget
       this.total -= updateItem.old.amount;
       this.total += updateItem.new.amount;

  }
}
