module.exports = function transform(arr) {
    let resultArr = [];
    if (arr.constructor != Array) throw Error('Error');
    arr.forEach((el, i) => {
        if (el == '--discard-next') {
            //------skip add next element
        } else
            if (el == '--discard-prev') {
                if (i > 0) {
                    resultArr.pop();
                }
            } else
                if (el == '--double-next') {
                    if (arr.length - 1 > i) {
                        resultArr.push(arr[i + 1]);
                    }
                } else {
                    if (el == '--double-prev') {
                        if (i > 0) {
                            resultArr.push(arr[i - 1]);
                        }
                    }
                    else {
                        if (arr[i - 1] != '--discard-next') {
                            resultArr.push(el);
                        }
                    }
                }
    });
    return resultArr;
};
