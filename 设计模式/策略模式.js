const strategy = {
    S(salary) {
        return salary * 4
    },
    A(salary) {
        return salary * 3
    },
    B(salary) {
        return salary * 2
    }
}

const calculate = (leavl, salary) => {
    return strategy[leavl](salary)
}



const S = (salary) => {
    return salary * 4
}

const A = (salary) => {
    return salary * 3
}

const B = () => {
    return salary * 2
}

const calculate2 = (func, salary) => {
    return func(salary)
}

console.log(calculate2(A, 10000))