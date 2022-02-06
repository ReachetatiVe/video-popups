import { makeAutoObservable } from "mobx";

let instance: any;

class mobxStore {
  constructor() {
    if (!instance) instance = this;
    makeAutoObservable(instance);
    return instance;
  }

  phoneNumber: string = "+7(___)___-__-__";
  isValid: boolean = true;
  isChecked: boolean = false;
  isSuccess: boolean = false;

  concatPhoneNumber(value: string) {
    for (let i = 0; i < instance.phoneNumber.length; i++) {
      if (instance.phoneNumber[i] === "_") {
        this.replaceAt(i, value, instance.phoneNumber);
        break;
      }
    }
    if (instance.phoneNumber[instance.phoneNumber.length - 1] !== "_")
      instance.isValid = true;
    else instance.isValid = false;
  }

  removeLastSymbol() {
    for (let i = instance.phoneNumber.length - 1; i > 2; i--) {
      if (
        instance.phoneNumber[i] !== "-" &&
        instance.phoneNumber[i] !== ")" &&
        instance.phoneNumber[i] !== "_"
      ) {
        this.replaceAt(i, "_", instance.phoneNumber);
        break;
      }
    }
    instance.isValid = false;
  }

  setSuccess(value: boolean) {
    instance.isSuccess = value;
  }

  getSuccess() {
    return instance.isSuccess;
  }

  setChecked(value: boolean) {
    instance.isChecked = value;
  }

  getChecked() {
    return instance.isChecked;
  }

  getIsValid() {
    return instance.isValid;
  }

  getPhoneNumber() {
    return instance.phoneNumber;
  }

  replaceAt(index: number, replacement: string, input: string) {
    instance.phoneNumber =
      input.substr(0, index) +
      replacement +
      input.substr(index + replacement.length);
  }
}

export default new mobxStore();
