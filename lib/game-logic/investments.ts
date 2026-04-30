// Investment logic code
export function calculateInvestments(amount, rate, time) {
    return amount * Math.pow((1 + rate), time);
}