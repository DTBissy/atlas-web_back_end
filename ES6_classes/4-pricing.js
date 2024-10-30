import Currency from "./3-currency";

export default class Pricing {
  constructor(amount, currency) {
    this._amount = amount;
    this._currency = currency;

    Object.defineProperty(this, 'amount', {
      get: () => this._amount,
      set: (value) => {
        if (typeof value === 'number') {
          this._amount
        } else {
          throw new Error('Amount must be a number')
        }
      }
    });

    Object.defineProperty(this, 'currency', {
      get: () => this._currency,
      set: () => this._currency
    });
  }

  displayFullPrice() {
    return `${}`
  }

}
