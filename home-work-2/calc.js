const quadratucEquation = (a, b, c) => {
    if (typeof a !== "number" || typeof b !== "number" || typeof c !== "number") {
        return [NaN, NaN]; 
    } else {
        let d = b * b - 4 * a * c;
        let result = [];
        result[0] = (-1 * b + Math.sqrt(d)) / (2 * a),
        result[1] = (-1 * b - Math.sqrt(d)) / (2 * a);
        return result;
    };         
}