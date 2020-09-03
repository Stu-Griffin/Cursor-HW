const ukraine = { tax: 0.195, middleSalary: 1789, vacancies: 11476 };
const latvia = { tax: 0.25, middleSalary: 1586, vacancies: 3921 };
const litva = { tax: 0.15, middleSalary: 1509, vacancies: 1114 };
//1
function getMyTaxes(salary) {
    return(this.tax * salary);
}
//2
function getMiddleTaxes() {
    return(this.tax * this.middleSalary);
}
//3
function getTotalTaxes() {
    return(this.tax * this.middleSalary * this.vacancies);
}
//4
function getMySalary(country) {
    const randomSalary = Math.round(Math.random() * (2000 - 1500 + 1) + 1500);
    function getMyTax() {return(this.tax)}
    const countryTax = getMyTax.call(country);
    const tax = randomSalary * countryTax;
    const profit = randomSalary - tax;
    const result = `slary: ${randomSalary}, tax: ${tax}, profit: ${profit}`
    return result
}
let timer = setInterval(() => console.log(getMySalary(ukraine)), 10000);
const a = [getMyTaxes.call(ukraine, 10000), getMiddleTaxes.call(ukraine).toFixed(2), getTotalTaxes.call(ukraine), getMySalary(ukraine)]
export default a