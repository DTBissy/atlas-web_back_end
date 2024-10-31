export default class HolbertonCourse {
  constructor(name, length, students) {
    this._name = name;
    this._length = length;
    this._students = students;

  }

  get name() {
    this._name;
  }

  get length() {
    this._length;
  }

  get students() {
    this._students;
  }

  set name(value) {
    if (typeof value === 'string') {
      this._name = value;
    } else {
      throw new Error('Name must be a string');
    }
  }

  set length(value) {
    if (typeof value === 'number') {
      this._length = value;
    } else {
      throw new Error('Length must be a number');
    }
  }

  set students(value) {
    if (!Array.isArray(value) && value.some((student) => typeof student !== 'string')) {
      this._students = value;
    } else {
      throw new Error('Students must be an array with strings')
    }
  }
}

