class Measurement {
  length: number;
  unit: string;

  constructor(length: number, unit: string) {
    this.length = length;
    this.unit = unit;
  }

  validateUnit(): boolean {
    const validUnits = ['mm', 'cm', 'm', 'km', 'mile', 'yard'];

    if (!validUnits.includes(this.unit)) {
      console.log('Invalid unit of measurement!');
      return false;
    }

    return true;
  }

  convertTo(unit: string): void {
    if (!this.validateUnit()) {
      return;
    }

    switch (unit) {
      case 'mm':
        this.length *= 1000;
        this.unit = 'mm';
        break;
      case 'cm':
        this.length *= 100;
        this.unit = 'cm';
        break;
      case 'm':
        this.length *= 0.001;
        this.unit = 'm';
        break;
      case 'km':
        this.length *= 0.000001;
        this.unit = 'km';
        break;
      case 'mile':
        this.convertToMiles();
        break;
      case 'yard':
        this.convertToYard();
        break;
      default:
        console.log('Invalid unit of measurement!');
    }
  }

  convertToMiles(): void {
    if (!this.validateUnit()) {
      return;
    }

    switch (this.unit) {
      case 'mm':
        this.length *= 0.00000062137;
        this.unit = 'mile';
        break;
      case 'cm':
        this.length *= 0.0000062137;
        this.unit = 'mile';
        break;
      case 'm':
        this.length *= 0.00062137;
        this.unit = 'mile';
        break;
      case 'km':
        this.length *= 0.62137;
        this.unit = 'mile';
        break;
      case 'mile':
        // No conversion needed, already in miles
        break;
      case 'yard':
        this.length *= 0.00056818;
        this.unit = 'mile';
        break;
      default:
        console.log('Invalid unit of measurement!');
    }
  }

  convertToYard(): void {
    if (!this.validateUnit()) {
      return;
    }

    switch (this.unit) {
      case 'mm':
        this.length *= 0.0010936;
        this.unit = 'yard';
        break;
      case 'cm':
        this.length *= 0.010936;
        this.unit = 'yard';
        break;
      case 'm':
        this.length *= 1.0936;
        this.unit = 'yard';
        break;
      case 'km':
        this.length *= 1093.6;
        this.unit = 'yard';
        break;
      case 'mile':
        this.length *= 1760;
        this.unit = 'yard';
        break;
      case 'yard':
        // No conversion needed, already in yards
        break;
      default:
        console.log('Invalid unit of measurement!');
    }
  }

  add(...values: any[]): void {
    for (let i = 0; i < values.length; i += 2) {
      const num = parseFloat(values[i]);
      const unit = values[i + 1];

      const validUnits = ['mm', 'cm', 'm', 'km', 'mile', 'yard'];

      if (!validUnits.includes(unit)) {
        console.log('Invalid unit of measurement!');
        return;
      }

      switch (unit) {
        case 'mm':
          this.length += num * 0.001;
          break;
        case 'cm':
          this.length += num * 0.01;
          break;
        case 'm':
          this.length += num;
          break;
        case 'km':
          this.length += num * 1000;
          break;
        case 'mile':
          this.length += num * 1609.34;
          break;
        case 'yard':
          this.length += num * 0.9144;
          break;
        default:
          console.log('Invalid unit of measurement!');
      }
    }
  }
}

let myMeasurement = new Measurement(2, 'cm');
console.log(myMeasurement); // { length: 2, unit: 'cm' }

myMeasurement.convertTo('mile');
console.log(myMeasurement); // { length: 0.0012427424, unit: 'mile' }

myMeasurement.convertToMiles();
console.log(myMeasurement); // { length: 0.0012427424, unit: 'mile' }

myMeasurement.convertTo('yard');
console.log(myMeasurement); // { length: 2116.8038400000003, unit: 'yard' }

myMeasurement.add(2, 'mm', 5, 'mile');
console.log(myMeasurement); // { length: 804686.75124, unit: 'yard' }

myMeasurement.add('2mm+5mile');
console.log(myMeasurement); // { length: 804686.75124, unit: 'yard' }

