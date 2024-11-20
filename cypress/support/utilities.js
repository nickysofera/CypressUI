function generatedRandomArray (length){

    // if (length < 4 ){
    //     length = 4
    // } else if (length >20 ){
    //     length = 20
    // }

    length = Math.max(4, Math.min(length,20))

    const array = []
    for (let i = 0; i < length; i++) {
        array.push(Math.floor(Math.random() * 6));
    }
    return array.join('')
}

function generatedRandomString(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;:\'",.<>?/\\ `';
    let result = '';
    for (let i = 0; i < length; i++) {
       const randomIndex = Math.floor(Math.random() * characters.length);
        result += characters.charAt(randomIndex);
        //result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
}

module.exports = { generatedRandomArray, generatedRandomString }



