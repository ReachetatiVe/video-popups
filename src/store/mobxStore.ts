import { makeAutoObservable, makeObservable } from "mobx";

let instance: any;

class mobxStore {
  constructor() {
    if (!instance) instance = this;
    makeAutoObservable(instance);
    return instance;
  }

  phoneNumber: string = "";

  concatPhoneNumber(value: string) {
    instance.phoneNumber += value;
    console.log("new phoneNumver value: " + instance.phoneNumber);
  }

  getPhoneNumber() {
    return instance.phoneNumber;
  }
}

export default new mobxStore();
