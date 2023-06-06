var Measurement = /** @class */ (function () {
    function Measurement(length, unit) {
        this.length = length;
        this.unit = unit;
    }
    Measurement.convertTo = function (targetUnit, measurement) {
        if (!measurement || !measurement.validateUnit()) {
            throw new Error('Invalid measurement or unit');
        }
        var length = measurement.length;
        var unit = measurement.unit;
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
    };
    Measurement.convertToMiles = function (measurement) {
        if (!measurement.validateUnit()) {
            throw new Error('Invalid measurement or unit');
        }
        var length = measurement.length;
        var unit = measurement.unit;
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
    };
    Measurement.convertToYard = function (measurement) {
        if (!measurement.validateUnit()) {
            throw new Error('Invalid measurement or unit');
        }
        var length = measurement.length;
        var unit = measurement.unit;
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
    };
    Measurement.prototype.validateUnit = function () {
        var validUnits = ['mm', 'cm', 'm', 'km', 'mile', 'yard'];
        if (!validUnits.includes(this.unit)) {
            throw new Error('Invalid unit of measurement');
        }
        return true;
    };
    return Measurement;
}());
var MeasurementBuilder = /** @class */ (function () {
    function MeasurementBuilder(length, unit) {
        this.measurement = new Measurement(length, unit);
    }
    MeasurementBuilder.prototype.convertTo = function (unit) {
        this.measurement = Measurement.convertTo(unit, this.measurement);
        return this;
    };
    MeasurementBuilder.prototype.convertToMiles = function () {
        this.measurement = Measurement.convertToMiles(this.measurement);
        return this;
    };
    MeasurementBuilder.prototype.convertToYard = function () {
        this.measurement = Measurement.convertToYard(this.measurement);
        return this;
    };
    MeasurementBuilder.prototype.convertToKm = function () {
        this.measurement = Measurement.convertTo('km', this.measurement);
        return this;
    };
    MeasurementBuilder.prototype.convertToCm = function () {
        this.measurement = Measurement.convertTo('cm', this.measurement);
        return this;
    };
    MeasurementBuilder.prototype.convertToMm = function () {
        this.measurement = Measurement.convertTo('mm', this.measurement);
        return this;
    };
    MeasurementBuilder.prototype.convertToM = function () {
        this.measurement = Measurement.convertTo('m', this.measurement);
        return this;
    };
    MeasurementBuilder.prototype.add = function () {
        var values = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            values[_i] = arguments[_i];
        }
        for (var i = 0; i < values.length; i += 2) {
            var num = Number(values[i]);
            var unit = values[i + 1];
            this.measurement = Measurement.convertTo(unit, this.measurement);
            if (!this.measurement.validateUnit()) {
                throw new Error('Invalid measurement or unit');
            }
            this.measurement.length += num;
        }
        return this;
    };
    MeasurementBuilder.prototype.build = function () {
        return this.measurement;
    };
    return MeasurementBuilder;
}());
var myMeasurement = new MeasurementBuilder(2, 'cm')
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
