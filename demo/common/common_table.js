function createTd(tdContent) {
    document.write("<td>");
    document.write(tdContent);
    document.write("</td>");
}

function createTh(thContent) {
    document.write("<th>");
    document.write(thContent);
    document.write("</th>");
}

function createTdRow(tdArr) {
    docwrite("<tr>");
    var length = tdArr.length;
    for(var index = 0; index < length; index++){
        createTd(tdArr[index]);
    }
    docwrite("</tr>");
}

function createThRow(thArr) {
    docwrite("<tr>");
    var length = thArr.length;
    for(var index = 0; index < length; index++){
        createTh(thArr[index]);
    }
    docwrite("</tr>");
}