var Measurement = /** @class */ (function () {
    function Measurement(length, unit) {
        this.length = length;
        this.unit = unit;
    }
    Measurement.prototype.convertToMeters = function () {
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
    };
    Measurement.prototype.convertToMillimeters = function () {
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
    };
    Measurement.prototype.convertToCentimeters = function () {
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
    };
    Measurement.prototype.convertToInches = function () {
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
    };
    Measurement.prototype.convertToFeet = function () {
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
    };
    Measurement.prototype.convertToMiles = function () {
        switch (this.unit) {
            case 'nm':
                this.length *= 6.2137e-13;
                break;
            case 'um':
                this.length *= 6.2137e-10;
                break;
            case 'mm':
                this.length *= 6.2137e-7;
                break;
            case 'cm':
                this.length *= 6.2137e-6;
                break;
            case 'm':
                this.length *= 0.00062137;
                break;
            case 'km':
                this.length *= 0.62137;
                break;
            case 'mile':
                break;
            case 'yard':
                this.length *= 0.00056818;
                break;
            case 'dm':
                this.length *= 0.000062137;
                break;
            case 'pm':
                this.length *= 6.2137e-16;
                break;
            case 'fm':
                this.length *= 6.2137e-19;
                break;
            case 'lightyear':
                this.length *= 5.8785e-13;
                break;
            case 'lightsecond':
                this.length *= 1.1717e-8;
                break;
            default:
                console.log('Invalid unit of measurement!');
        }
        this.unit = 'mile';
    };
    Measurement.prototype.convertToLightSecond = function () {
        switch (this.unit) {
            case 'nm':
                this.length *= 3.3356e-24;
                break;
            case 'um':
                this.length *= 3.3356e-21;
                break;
            case 'mm':
                this.length *= 3.3356e-18;
                break;
            case 'cm':
                this.length *= 3.3356e-17;
                break;
            case 'm':
                this.length *= 3.3356e-16;
                break;
            case 'km':
                this.length *= 3.3356e-13;
                break;
            case 'mile':
                this.length *= 1.1717e-8;
                break;
            case 'yard':
                this.length *= 3.3356e-16;
                break;
            case 'dm':
                this.length *= 3.3356e-15;
                break;
            case 'pm':
                this.length *= 3.3356e-27;
                break;
            case 'fm':
                this.length *= 3.3356e-30;
                break;
            case 'lightyear':
                this.length *= 1.057e-22;
                break;
            default:
                console.log('Invalid unit of measurement!');
        }
        this.unit = 'lightsecond';
    };
    Measurement.prototype.convertToLightYear = function () {
        switch (this.unit) {
            case 'nm':
                this.length *= 1.057e-22;
                break;
            case 'um':
                this.length *= 1.057e-19;
                break;
            case 'mm':
                this.length *= 1.057e-16;
                break;
            case 'cm':
                this.length *= 1.057e-15;
                break;
            case 'm':
                this.length *= 1.057e-14;
                break;
            case 'km':
                this.length *= 1.057e-11;
                break;
            case 'mile':
                this.length *= 3.724e-8;
                break;
            case 'yard':
                this.length *= 1.057e-14;
                break;
            case 'dm':
                this.length *= 1.057e-13;
                break;
            case 'pm':
                this.length *= 1.057e-25;
                break;
            case 'fm':
                this.length *= 1.057e-28;
                break;
            case 'lightsecond':
                this.length *= 2.9979e-9;
                break;
            default:
                console.log('Invalid unit of measurement!');
        }
        this.unit = 'lightyear';
    };
    Measurement.prototype.convertToFM = function () {
        switch (this.unit) {
            case 'nm':
                this.length *= 1e+6;
                break;
            case 'um':
                this.length *= 1e+9;
                break;
            case 'mm':
                this.length *= 1e+12;
                break;
            case 'cm':
                this.length *= 1e+13;
                break;
            case 'm':
                this.length *= 1e+14;
                break;
            case 'km':
                this.length *= 1e+17;
                break;
            case 'mile':
                this.length *= 3.536e+8;
                break;
            case 'yard':
                this.length *= 1e+14;
                break;
            case 'dm':
                this.length *= 1e+15;
                break;
            case 'pm':
                this.length *= 1e-9;
                break;
            case 'lightyear':
                this.length *= 9.461e+21;
                break;
            case 'lightsecond':
                this.length *= 2.9979e+23;
                break;
            default:
                console.log('Invalid unit of measurement!');
        }
        this.unit = 'fm';
    };
    Measurement.prototype.convertToPM = function () {
        switch (this.unit) {
            case 'nm':
                this.length *= 1e+3;
                break;
            case 'um':
                this.length *= 1e+6;
                break;
            case 'mm':
                this.length *= 1e+9;
                break;
            case 'cm':
                this.length *= 1e+10;
                break;
            case 'm':
                this.length *= 1e+11;
                break;
            case 'km':
                this.length *= 1e+14;
                break;
            case 'mile':
                this.length *= 3.527e+11;
                break;
            case 'yard':
                this.length *= 1e+11;
                break;
            case 'dm':
                this.length *= 1e+12;
                break;
            case 'pm':
                this.length *= 1e-3;
                break;
            case 'lightyear':
                this.length *= 9.461e+18;
                break;
            case 'lightsecond':
                this.length *= 2.9979e+20;
                break;
            default:
                console.log('Invalid unit of measurement!');
        }
        this.unit = 'pm';
    };
    Measurement.prototype.convertToDM = function () {
        switch (this.unit) {
            case 'nm':
                this.length *= 1e+7;
                break;
            case 'um':
                this.length *= 1e+4;
                break;
            case 'mm':
                this.length *= 1e+1;
                break;
            case 'cm':
                this.length *= 1e+0;
                break;
            case 'm':
                this.length *= 1e-1;
                break;
            case 'km':
                this.length *= 1e-4;
                break;
            case 'mile':
                this.length *= 3.937e-1;
                break;
            case 'yard':
                this.length *= 1e+0;
                break;
            case 'dm':
                this.length *= 1e+1;
                break;
            case 'pm':
                this.length *= 1e-11;
                break;
            case 'lightyear':
                this.length *= 9.461e+16;
                break;
            case 'lightsecond':
                this.length *= 2.9979e+18;
                break;
            default:
                console.log('Invalid unit of measurement!');
        }
        this.unit = 'dm';
    };
    Measurement.prototype.convertToYard = function () {
        switch (this.unit) {
            case 'nm':
                this.length *= 1.0936e-12;
                break;
            case 'um':
                this.length *= 1.0936e-9;
                break;
            case 'mm':
                this.length *= 1.0936e-6;
                break;
            case 'cm':
                this.length *= 1.0936e-5;
                break;
            case 'm':
                this.length *= 1.0936e-3;
                break;
            case 'km':
                this.length *= 1.0936e-6;
                break;
            case 'mile':
                this.length *= 1.0936e-3;
                break;
            case 'yard':
                break;
            case 'dm':
                this.length *= 1.0936e-2;
                break;
            case 'pm':
                this.length *= 1.0936e-16;
                break;
            case 'lightyear':
                this.length *= 1.037e-12;
                break;
            case 'lightsecond':
                this.length *= 3.2616e-8;
                break;
            default:
                console.log('Invalid unit of measurement!');
        }
        this.unit = 'yard';
    };
    return Measurement;
}());
// Example usage
//   let myMeasurement = new Measurement(2000, 'nm');
//   console.log(myMeasurement); // { length: 2000, unit: 'nm' }
//   myMeasurement.convertToMeters();
//   console.log(myMeasurement); // { length: 2e-6, unit: 'm' }
//   myMeasurement.convertToMillimeters()
//   console.log(myMeasurement);
