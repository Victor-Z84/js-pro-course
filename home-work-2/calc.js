const quadratucEquation = (a, b, c) => {
    let result = [null, null];
    let d = b * b - 4 * a * c;
    if (typeof a !== "number" || typeof b !== "number" || typeof c !== "number") {
        return result = [NaN, NaN]; 
    } else if (d > 0) {
        result[0] = (-1 * b + Math.sqrt(Math.pow(b, 2) - (4 * a * c))) / (2 * a);
        result[1] = (-1 * b - Math.sqrt(Math.pow(b, 2) - (4 * a * c))) / (2 * a);
        // return (`x<sub>1</sub>= ${result[0]}; x<sub>2</sub>= ${result[1]}`);
        return result;
    } else if (d === 0) {
        result[0] = (-1 * b) / (2 * a);
        // return (`x<sub>1</sub>=x<sub>2</sub>= ${result[0]}`);
        return result;
    } else {
        result[0] = 'корней нет';
        return result;
    };
}