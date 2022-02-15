import { Snacks } from "./Models/Snacks.js";
import { EventEmitter } from "./Utils/EventEmitter.js";
import { isValidProp } from "./Utils/isValidProp.js";

class AppState extends EventEmitter {
  /* @type {import('./Models/Value').Value[]} */
  values = [];

  money = 0;
  snacks = [
    new Snacks(
      "Snicker",
      1.25,
      "https://m.media-amazon.com/images/I/71+r1gAwsZL._SX425_.jpg"
    ),
    new Snacks(
      "lays",
      0.5,
      "https://m.media-amazon.com/images/I/81vJyb43URL._SL1500_.jpg"
    ),
  ];
}

export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop);
    return target[prop];
  },
  set(target, prop, value) {
    isValidProp(target, prop);
    target[prop] = value;
    target.emit(prop, value);
    return true;
  },
});
