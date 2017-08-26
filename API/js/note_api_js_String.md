# String

---

## length

- String类的静态属性length值为1

  ```javascript
  String.length ==1
  ```

---

## indexOf()

>  *str.indexOf(searchValue[, fromIndex])*

- Returns -1 if the value is not found. Return the index of the searchValue in the **original** string if it exists.

  ```javas
  'Blue Whale'.indexOf('Whale', 5); // returns  5 not 0
  ```

- If searchValue is an empty string, the behaviour is as follows — if fromIndex < str.length, fromIndex is returned; if fromIndex >= str.length, str.length is returned.

  ```javas
  'Blue Whale'.indexOf('');         // returns  0
  'Blue Whale'.indexOf('', 9);      // returns  9
  'Blue Whale'.indexOf('', 10);     // returns 10
  'Blue Whale'.indexOf('', 11);     // returns 10
  ```

- check if a specific string exists within another string:

  ```javas
  'Blue Whale'.indexOf('Blue') !== -1; // true
  'Blue Whale'.indexOf('Bloe') !== -1; // false
  ```

---

## lastIndexOf()



