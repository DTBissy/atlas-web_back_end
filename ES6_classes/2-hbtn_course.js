export default class HolbertonCourse {
  constructor(name, length, students) {
    this._name = name;
    this._length = length;
    this._students = students;

    Object.defineProperty(this, 'name', {
      get: () => this._name,
      set: (value) => {
        if (typeof value === 'string') {
          return this._name = value;
        } else {
          throw new Error('Name must be a string')
        }
      }
    });

    Object.defineProperty(this, 'length', {
      get: () => this._length,
      set: (value) => {
        if (typeof value === 'number') {
          return this._length;
        } else {
          throw new Error('Length must be a number');
        }
      }
    });

    Object.defineProperty(this, 'students', {
      get: () => this.__students,
      set: (value) => {
        if (Array.isArray(value)) {
          return this._students = value;
        } else {
          throw new Error('Students must be an array')
        }
      }
    });
  }
}

