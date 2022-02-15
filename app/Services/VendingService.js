import { ProxyState } from "../AppState.js";

class VendingService {
  addMoney() {
    ProxyState.money += 0.25;
  }
  buySnack(price) {
    if (price > ProxyState.money) {
      return;
    }
    if (ProxyState.money >= price) {
      ProxyState.money -= price;
      console.log(ProxyState.money);
    }
  }
}

export const vendingService = new VendingService();
