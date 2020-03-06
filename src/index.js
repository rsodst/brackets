module.exports = function check(str, bracketsConfig) {
    let openBrackets = bracketsConfig.map(p => p[0]);
    let closeBrackets = bracketsConfig.map(p => p[1]);
    let arr = Array.from(str);

    let identicalBrackets = [];
    closeBrackets.forEach((p, i) => {
        if (openBrackets[i] == p) {
            closeBrackets[i] = `t${p}`;
            identicalBrackets.push(p);
        }
    });

    let counter = 1;
    identicalBrackets.forEach(i => {
        arr.forEach((j, k) => {
            if (j == i) {
                if (counter % 2 == 0) {
                    arr[k] = `t${j}`;
                }
                counter += 1;
            }
        });
        counter = 1;
    });


    let a = arr.join('');

    let stack = [];

    for (let i in arr) {
        if (openBrackets.includes(arr[i])) {
            stack.push(arr[i]);
        }

        if (closeBrackets.includes(arr[i])) {

            if (stack.length == 0) {
                return false;
            }

            let a = closeBrackets.indexOf(arr[i]);
            let b = openBrackets.indexOf(stack[stack.length - 1]);

            if (closeBrackets.indexOf(arr[i]) != openBrackets.indexOf(stack[stack.length - 1])) {
                return false;
            }

            stack.pop();
        }
    }

    return stack.length == 0;
}