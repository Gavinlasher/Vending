import { ProxyState } from "../AppState.js";
import { vendingService } from "../Services/VendingService.js";

function _drawMoney() {
  let money = ProxyState.money;
  document.getElementById("money").innerHTML = `<div class="col-12 text-center">
<button class="btn btn-primary" onclick="app.vendingController.addMoney()">${money}</button>
</div>
`;
}

function _drawSnack() {
  console.log("drWING SNACKS");
  let temp = "";

  let snacks = ProxyState.snacks;
  snacks.forEach(
    (snacks) =>
      (temp += `
      <div class="col-6 p-5 text-center" onclick="app.vendingController.buySnack(${snacks.cost})">
      <img class="img-fluid" onclick="" src="${snacks.imgUrl}" alt="">
<p>${snacks.cost}</p>
<p>${snacks.name}</p>
    </div>
  
  
  `)
  );
  document.getElementById("snacks").innerHTML = temp;
}

export class VendingController {
  constructor() {
    _drawMoney();
    _drawSnack();
  }
  buySnack() {
    console.log("buy snack");
    vendingService.buySnack();
  }

  addMoney() {
    console.log("game controller");
    vendingService.addMoney();
    _drawMoney();
  }
  buySnack(price) {
    vendingService.buySnack(price);
    _drawMoney();
  }
}
