class GuessingGame {
    constructor(minValue,maxValue) {
        this.minValue = minValue;
        this.maxValue = maxValue;
    }

    setRange(min, max) {
        this.minValue = min;
        this.maxValue = max;
    }

    guess() {
        return Math.ceil((this.minValue + this.maxValue) / 2);
    }

    lower() {
        this.maxValue = Math.ceil((this.minValue + this.maxValue) / 2)
    }

    greater() {
        this.minValue = Math.ceil((this.minValue + this.maxValue) / 2)
    }
}

module.exports = GuessingGame;
