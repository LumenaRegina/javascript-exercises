const removeFromArray = function(arr, ...eliminator) {

    let eliminators = Array.from(eliminator)

    eliminators.map((el) => {
        let index = arr.indexOf(el);

        while (index > -1) {
            arr.splice(index, 1);
            index = arr.indexOf(el);
        }
    })

    return arr
};

const array = [1, 2, 2, 3, 4]

console.log(removeFromArray(array, 2, 3))

// Do not edit below this line
module.exports = removeFromArray;
