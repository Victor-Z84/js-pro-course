// Массив с данными, цикл для проверки результата и сравнения с ожидаемыми значениями

describe("Проверка решения квадратного уравнения", () => {

    describe("Квадратное уравнение принимает валидные коэффициенты", () => {
        const tests = [
            [-1, -5, 14, [-7, 2]],
            [1, -13, 36, [9, 4]],
            [2, -1, -15, [3, -2.5]],
            [5, -3, -2, [1, -0.4]],
            [1, -6, 9, [3, 3]],
            [3, -18, 27, [3, 3]],
        ];

        tests.forEach(test =>
            it(`Уравнение имеет корни с коэффициентами: ${test[0]}, ${test[1]}, ${test[2]}`, () => {
                assert.deepEqual(quadratucEquation(test[0], test[1], test[2]), test[3]);    
            })
        );
    });

    describe("Квадратное уравнение не имеет корней", () => {
        const tests = [
            [1, -5, 9, [NaN, NaN]],
            [4, 0, 8, [NaN, NaN]],
        ];

        tests.forEach(test =>
            it(`Не имеет корней с коэффициентами: ${test[0]}, ${test[1]}, ${test[2]}`, () => {
                assert.deepEqual(quadratucEquation(test[0], test[1], test[2]), test[3]);    
            })
        );
    });

    describe("Квадратное уравнение с невалидными коэффициентами", () => {
        const tests = [
            ['sds', 8, 5, [NaN, NaN]],
            [9, [], 45, [NaN, NaN]],
            [5, -13, true, [NaN, NaN]],
        ];

        tests.forEach(test => 
            it(`Не работает с коэффициентами: ${test[0]}, ${test[1]}, ${test[2]}`, () => {
                assert.deepEqual(quadratucEquation(test[0], test[1], test[2]), test[3]);    
            })
        );
    });
})