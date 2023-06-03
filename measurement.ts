class Measurement {
    length: number;
    unit: string;
  
    constructor(length: number, unit: string) {
      this.length = length;
      this.unit = unit;
    }
  
    convertToMeters(): void {
      switch (this.unit) {
        case 'nm':
          this.length /= 1e9;
          break;
        case 'um':
          this.length /= 1e6;
          break;
        case 'mm':
          this.length /= 1000;
          break;
        case 'cm':
          this.length /= 100;
          break;
        case 'm':
          break;
        case 'km':
          this.length *= 1000;
          break;
        case 'mile':
          this.length *= 1609.34;
          break;
        case 'yard':
          this.length *= 0.9144;
          break;
        case 'dm':
          this.length /= 10;
          break;
        case 'pm':
          this.length /= 1e12;
          break;
        case 'fm':
          this.length /= 1e15;
          break;
        case 'lightyear':
          this.length *= 9.461e15;
          break;
        case 'lightsecond':
          this.length *= 299792458;
          break;
        default:
          console.log('Invalid unit of measurement!');
      }
      this.unit = 'm';
    }
  
    convertToMillimeters(): void {
      switch (this.unit) {
          case 'nm':
              this.length *= 1e6;
              break;
          case 'um':
              this.length *= 1000;
              break;
          case 'mm':
              break;
          case 'cm':
              this.length *= 10;
              break;
          case 'm':
              this.length *= 1000;
              break;
          case 'km':
              this.length *= 1e6;
              break;
          case 'mile':
              this.length *= 1609344;
              break;
          case 'yard':
              this.length *= 914.4;
              break;
          case 'dm':
              this.length *= 100;
              break;
          case 'pm':
              this.length *= 1e9;
              break;
          case 'fm':
              this.length *= 1e12;
              break;
          case 'lightyear':
              this.length *= 9.461e18;
              break;
          case 'lightsecond':
              this.length *= 299792458000;
              break;
          default:
              console.log('Invalid unit of measurement!');
      }
      this.unit = 'mm';
  }
  
  convertToCentimeters(): void {
    switch (this.unit) {
        case 'nm':
            this.length *= 1e7;
            break;
        case 'um':
            this.length *= 10;
            break;
        case 'mm':
            this.length *= 0.1;
            break;
        case 'cm':
            break;
        case 'm':
            this.length *= 100;
            break;
        case 'km':
            this.length *= 1e5;
            break;
        case 'mile':
            this.length *= 160934.4;
            break;
        case 'yard':
            this.length *= 91.44;
            break;
        case 'dm':
            this.length *= 10;
            break;
        case 'pm':
            this.length *= 1e10;
            break;
        case 'fm':
            this.length *= 1e13;
            break;
        case 'lightyear':
            this.length *= 9.461e17;
            break;
        case 'lightsecond':
            this.length *= 29979245800;
            break;
        default:
            console.log('Invalid unit of measurement!');
    }
    this.unit = 'cm';
  }
  
  
  convertToInches(): void {
    switch (this.unit) {
        case 'nm':
            this.length *= 3.937e-8;
            break;
        case 'um':
            this.length *= 3.937e-5;
            break;
        case 'mm':
            this.length *= 0.03937;
            break;
        case 'cm':
            this.length *= 0.3937;
            break;
        case 'm':
            this.length *= 39.37;
            break;
        case 'km':
            this.length *= 39370.1;
            break;
        case 'mile':
            this.length *= 63360;
            break;
        case 'yard':
            this.length *= 36;
            break;
        case 'dm':
            this.length *= 3.937;
            break;
        case 'pm':
            this.length *= 3.937e-11;
            break;
        case 'fm':
            this.length *= 3.937e-14;
            break;
        case 'lightyear':
            this.length *= 3.724e+17;
            break;
        case 'lightsecond':
            this.length *= 1.864e+12;
            break;
        default:
            console.log('Invalid unit of measurement!');
    }
    this.unit = 'inch';
  }
  
  
  convertToFeet(): void {
    switch (this.unit) {
        case 'nm':
            this.length *= 3.281e-9;
            break;
        case 'um':
            this.length *= 3.281e-6;
            break;
        case 'mm':
            this.length *= 0.003281;
            break;
        case 'cm':
            this.length *= 0.03281;
            break;
        case 'm':
            this.length *= 3.281;
            break;
        case 'km':
            this.length *= 3280.84;
            break;
        case 'mile':
            this.length *= 5280;
            break;
        case 'yard':
            this.length *= 3;
            break;
        case 'dm':
            this.length *= 0.3281;
            break;
        case 'pm':
            this.length *= 3.281e-12;
            break;
        case 'fm':
            this.length *= 3.281e-15;
            break;
        case 'lightyear':
            this.length *= 3.104e+16;
            break;
        case 'lightsecond':
            this.length *= 1.553e+11;
            break;
        default:
            console.log('Invalid unit of measurement!');
    }
    this.unit = 'foot';
  }
  
  }
  
  // Example usage
  
  // let length = 2000;
  // let unit = 'nm';
  
  // let myMeasurement = new Measurement(length, unit);
  // console.log(myMeasurement); // { length: 2000, unit: 'nm' }
  
  // myMeasurement.convertToMeters();
  // console.log(myMeasurement); // { length: 2e-6, unit: 'm' }
  