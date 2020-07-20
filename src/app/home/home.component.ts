import { Component, OnInit } from "@angular/core";
import { BudgetItem } from "src/shared/models/budget-items.model";
import { UpdateEvent } from "../budget-item-list/budget-item-list.component";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  total: number = 0;

  budgetItems: BudgetItem[] = new Array<BudgetItem>();

  constructor() {}

  ngOnInit() {
    this.total = +localStorage.getItem("total");
    if(this.budgetItems){
      this.budgetItems = JSON.parse(localStorage.getItem("newIt"));

    }
  }

  addItem(newItem: BudgetItem) {
   
      this.budgetItems.push(newItem);

      this.total += newItem.amount;
      const n = [...JSON.parse(localStorage.getItem("newIt")), newItem];
      localStorage.setItem("newIt", JSON.stringify(n));
  
     
       localStorage.setItem("total", JSON.stringify(this.total));
    localStorage.getItem("total");
  }

  deleteItem(item: BudgetItem) {
    let index = this.budgetItems.indexOf(item);
    const d = this.budgetItems.splice(index, 1);
    localStorage.setItem("item", JSON.stringify(item));
    localStorage.getItem("item");

    localStorage.setItem("newIt", JSON.stringify(this.budgetItems));

    this.total -= item.amount;

    localStorage.setItem("total", JSON.stringify(this.total));
    localStorage.getItem("total");
  }

  updateItem(updateItem: UpdateEvent) {
    //result is updated item
    //replace the item with updated item of form
    this.budgetItems[this.budgetItems.indexOf(updateItem.old)] = updateItem.new;

    localStorage.setItem("newIt", JSON.stringify(this.budgetItems));

    //update total budget
    this.total -= updateItem.old.amount;
    this.total += updateItem.new.amount;
    localStorage.setItem("total", JSON.stringify(this.total));
    localStorage.getItem("total");
  }
}
