module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
    let step=(Math.pow(2,disksNumber)-1);
    return {
        turns:step,
        seconds:step/(turnsSpeed/3600)
    }
}