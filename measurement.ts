class Measurement {
  length: number;
  unit: string;

  constructor(length: number, unit: string) {
    this.length = length;
    this.unit = unit;
  }

  static convertTo(targetUnit: string, measurement?: Measurement): Measurement {
    if (!measurement || !measurement.validateUnit()) {
      throw new Error('Invalid measurement or unit');
    }

    const length = measurement.length;
    const unit = measurement.unit;

    switch (targetUnit) {
      case 'mm':
        return new Measurement(length * 1000, 'mm');
      case 'cm':
        return new Measurement(length * 100, 'cm');
      case 'm':
        return new Measurement(length * 0.001, 'm');
      case 'km':
        return new Measurement(length * 0.000001, 'km');
      case 'mile':
        return Measurement.convertToMiles(measurement);
      case 'yard':
        return Measurement.convertToYard(measurement);
      default:
        throw new Error('Invalid unit of measurement');
    }
  }

  static convertToMiles(measurement: Measurement): Measurement {
    if (!measurement.validateUnit()) {
      throw new Error('Invalid measurement or unit');
    }

    const length = measurement.length;
    const unit = measurement.unit;

    switch (unit) {
      case 'mm':
        return new Measurement(length * 0.00000062137, 'mile');
      case 'cm':
        return new Measurement(length * 0.0000062137, 'mile');
      case 'm':
        return new Measurement(length * 0.00062137, 'mile');
      case 'km':
        return new Measurement(length * 0.62137, 'mile');
      case 'mile':
        return measurement;
      case 'yard':
        return new Measurement(length * 0.00056818, 'mile');
      default:
        throw new Error('Invalid unit of measurement');
    }
  }

  static convertToYard(measurement: Measurement): Measurement {
    if (!measurement.validateUnit()) {
      throw new Error('Invalid measurement or unit');
    }

    const length = measurement.length;
    const unit = measurement.unit;

    switch (unit) {
      case 'mm':
        return new Measurement(length * 0.0010936, 'yard');
      case 'cm':
        return new Measurement(length * 0.010936, 'yard');
      case 'm':
        return new Measurement(length * 1.0936, 'yard');
      case 'km':
        return new Measurement(length * 1093.6, 'yard');
      case 'mile':
        return new Measurement(length * 1760, 'yard');
      case 'yard':
        return measurement;
      default:
        throw new Error('Invalid unit of measurement');
    }
  }

  validateUnit(): boolean {
    const validUnits = ['mm', 'cm', 'm', 'km', 'mile', 'yard'];

    if (!validUnits.includes(this.unit)) {
      throw new Error('Invalid unit of measurement');
    }

    return true;
  }
}

class MeasurementBuilder {
  private measurement: Measurement;

  constructor(length: number, unit: string) {
    this.measurement = new Measurement(length, unit);
  }

  convertTo(unit: string): MeasurementBuilder {
    this.measurement = Measurement.convertTo(unit, this.measurement);
    return this;
  }

  convertToMiles(): MeasurementBuilder {
    this.measurement = Measurement.convertToMiles(this.measurement);
    return this;
  }

  convertToYard(): MeasurementBuilder {
    this.measurement = Measurement.convertToYard(this.measurement);
    return this;
  }

  convertToKm(): MeasurementBuilder {
    this.measurement = Measurement.convertTo('km', this.measurement);
    return this;
  }

  convertToCm(): MeasurementBuilder {
    this.measurement = Measurement.convertTo('cm', this.measurement);
    return this;
  }

  convertToMm(): MeasurementBuilder {
    this.measurement = Measurement.convertTo('mm', this.measurement);
    return this;
  }

  convertToM(): MeasurementBuilder {
    this.measurement = Measurement.convertTo('m', this.measurement);
    return this;
  }

  add(...values: any[]): MeasurementBuilder {
    for (let i = 0; i < values.length; i += 2) {
      const num = Number(values[i]);
      const unit = values[i + 1];

      this.measurement = Measurement.convertTo(unit, this.measurement);

      if (!this.measurement.validateUnit()) {
        throw new Error('Invalid measurement or unit');
      }

      this.measurement.length += num;
    }
    return this;
  }

  build(): Measurement {
    return this.measurement;
  }
}

const myMeasurement = new MeasurementBuilder(2, 'cm')
  .convertToMiles()
  .convertToYard()
  .convertToKm()
  .convertToMm()
  .convertToCm()
  .convertToM()
  .convertTo('mile')
  .convertTo('yard')
  .convertTo('km')
  .convertTo('mm')
  .convertTo('cm')
  .convertTo('m')
  .add(5, 'km', 2, 'mm')
  .add('7', 'km', '6', 'mm')
  .build();

console.log(myMeasurement);
