/**
 * 
 * @param {Array} products cartProducts: array of objects
 * @returns {number} Total Price
 */


export const totalPrice = (products) => {

    let sum = 0
    products.forEach(item => sum += item.price )
    return sum
}

