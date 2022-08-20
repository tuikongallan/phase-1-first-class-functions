function receivesAFunction (callBack) {
    console.log('Javascript is Interesting')
    callBack();
}

function returnsANamedFunction () {
    return function returnedFunction(){}
}

function returnsAnAnonymousFunction () {
    return function(){}
}