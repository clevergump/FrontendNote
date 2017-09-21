/**
 * Created by abc on 2017/8/27.
 */

/**************** length ********************/

function lengthDemo() {
    var x = 'Mozilla';
    var empty = '';

    docwrite('Mozilla is ' + x.length + ' code units long');
    /* "Mozilla is 7 code units long" */

    docwrite('The empty string has a length of ' + empty.length);
    /* "The empty string has a length of 0" */

    docwrite('The static field value of this class ---- String.length = ' + String.length);
    /* "The static field value of this class ---- String.length = 1" */
}


/**************** indexOf() ********************/
/**
 * To check if a given string contains another string as part of it.
 * @param str a given string
 * @param searchContent the contained string to check
 * @returns {boolean}
 */
function contains(str, searchContent) {
    return str.indexOf(searchContent) !== -1;
}

function containsDemo(str, searchStr) {
    docwrite("Is the string \"" + str + "\" contains the string \"" + searchStr + "\" ? "
        + contains(str, searchStr));
}


/******************* lastIndexOf()***********************/
function lastIndexOfDemo() {
    docwrite("");
    var str;
    var searchStr;
    /**
     * returns 1 not 3, since the left part divided by the fromIndex 2 is 'can', which means
     * that if the string contains the searchString 'a', the containing substring must begin
     * from a character in the left part substring('can'), so the containing substring that
     * contains the searchString 'a' has to be the character 'a' in string 'can' whose index
     * is 1, not 'a' at other indexes. So the resule is 1 not 3.
     */
    printLastIndex('canal', 'a', 2); // 1 not 3
    docwrite("");


    docwrite("'hello'.lastIndexOf('o', 4) = " + 'hello'.lastIndexOf('o', 4));
    docwrite("'hello'.lastIndexOf('o', 5) = " + 'hello'.lastIndexOf('o', 5));
    docwrite("");
    docwrite("'hello'.lastIndexOf('hello', 2) = " + 'hello'.lastIndexOf('hello', 2));
    docwrite("'hello'.lastIndexOf('ello', 2) = " + 'hello'.lastIndexOf('ello', 2));
    docwrite("'hello'.lastIndexOf('llo', 2) = " + 'hello'.lastIndexOf('llo', 2));
    docwrite("'hello'.lastIndexOf('lo', 2) = " + 'hello'.lastIndexOf('lo', 2));
    docwrite("'hello'.lastIndexOf('o', 2) = " + 'hello'.lastIndexOf('o', 2));
    docwrite("");
    printLastIndex('canal', 'c', -5);
    printLastIndex('canal', 'c', 0);
    printLastIndex('canal', 'c', 1);
    printLastIndex('canal', 'c', 2);
    printLastIndex('canal', 'c', 3);
    printLastIndex('canal', 'c', 4);
    printLastIndex('canal', 'c', 5);
    docwrite("");
    printLastIndex('canal', 'ca', -5);
    printLastIndex('canal', 'ca', 0);
    printLastIndex('canal', 'ca', 1);
    printLastIndex('canal', 'ca', 2);
    printLastIndex('canal', 'ca', 3);
    printLastIndex('canal', 'ca', 4);
    printLastIndex('canal', 'ca', 5);
    docwrite("");
    function printLastIndex(wholeStr, searchStr, fromLastIndex) {
        docwrite("'" + wholeStr + "'.lastIndexOf('" + searchStr + "', " + fromLastIndex + ") = "
            + wholeStr.lastIndexOf(searchStr, fromLastIndex));
    }

    printLastIndex('canal', 'al', -5);
    printLastIndex('canal', 'al', 0);
    printLastIndex('canal', 'al', 1);
    printLastIndex('canal', 'al', 2);
    printLastIndex('canal', 'al', 3);
    printLastIndex('canal', 'al', 4);
    printLastIndex('canal', 'al', 5);
    docwrite("");

    str = 'dacabab';
    searchStr = 'ab';
    printLastIndex(str, searchStr, -5);
    printLastIndex(str, searchStr, 0);
    printLastIndex(str, searchStr, 1);
    printLastIndex(str, searchStr, 2);
    printLastIndex(str, searchStr, 3);
    printLastIndex(str, searchStr, 4);
    printLastIndex(str, searchStr, 5);
    printLastIndex(str, searchStr, 6);
    printLastIndex(str, searchStr, 7);
    docwrite("");
    printLastIndex('canal', 'l', -5);
    printLastIndex('canal', 'l', 0);
    printLastIndex('canal', 'l', 1);
    printLastIndex('canal', 'l', 2);
    printLastIndex('canal', 'l', 3);
    printLastIndex('canal', 'l', 4);
    printLastIndex('canal', 'l', 5);
    docwrite("");
    docwrite("'canal'.lastIndexOf('cA', -5) = " + 'canal'.lastIndexOf('cA', -5));
}