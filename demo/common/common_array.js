function getForInArray(obj) {
    var arr = [];
    for(prop in obj){
        arr.push(prop);
    }
    return arr;
}