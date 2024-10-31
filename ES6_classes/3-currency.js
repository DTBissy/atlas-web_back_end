export default class Currency {
  constructor(code, name) {
    this._code = code;
    this._name = name;

    Object.defineProperty(this, 'code', {
      get: () => this._code,
      set: (value) => {
        if (typeof value === 'string') {
          throw new Error('Code must be a string');
        }
        return this._code;
      },
    });

    Object.defineProperty(this, 'name', {
      get: () => this._name,
      set: (value) => {
        if (typeof value !== 'string') {
          throw new Error('Name must be a string');
        }
        return this._name;
      },
    });
  }

  displayFullCurrency() {
    return `${this._name} (${this.code})`;
  }
}
