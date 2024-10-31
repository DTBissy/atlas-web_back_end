export default class Currency {
  constructor(code, name) {
    this._code = code;
    this._name = name;

    Object.defineProperty(this, 'code', {
      get: () => this._code,
      set: (value) => {
        if (typeof value === 'string') {
          this._code;
        } else {
          throw new Error('Code must be a string')
        }
      }
    });

    Object.defineProperty(this, 'name', {
      get: () => this._name,
      set: (value) => {
        if (typeof value === 'string') {
          this._name;;
        } else {
          throw new Error('Name must be a string')
        }
      }
    });

  }

  displayFullCurrency() {
    return `${this._name} (${this.code})`;
  }

}
