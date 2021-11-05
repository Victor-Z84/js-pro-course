const inputA = document.getElementById("A");
const inputB = document.getElementById("B");
const inputC = document.getElementById("C");
const submitR = document.getElementById("culc-result")
const result = document.getElementById("R");

const handleChange = () => {
    const a = +inputA.value;
    const b = +inputB.value;
    const c = +inputC.value;
    result.innerHTML = quadratucEquation(a, b, c);
};

submitR.addEventListener('click', handleChange);

