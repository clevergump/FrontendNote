[TOC]

# String

---

## length

- static field length of String class is 1

  ```javascript
  String.length == 1
  ```

---

## indexOf()

>  *str.indexOf(searchValue[, fromIndex])*

- Returns -1 if the value is not found. Return the index of the searchValue in the **original** string if it exists.

  ```javascript
  'Blue Whale'.indexOf('Whale', 5); // returns  5 not 0
  ```

- If searchValue is an empty string, the behaviour is as follows — if fromIndex < str.length, fromIndex is returned; if fromIndex >= str.length, str.length is returned.

  ```javascript
  'Blue Whale'.indexOf('');         // returns  0
  'Blue Whale'.indexOf('', 9);      // returns  9
  'Blue Whale'.indexOf('', 10);     // returns 10
  'Blue Whale'.indexOf('', 11);     // returns 10
  ```

- check if a specific string exists within another string:

  ```javascript
  function contains(str, searchContent) {
      return str.indexOf(searchContent) !== -1;
  }
  contains('Blue Whale', 'Blue'); // true
  contains('Blue Whale', 'Bloe'); // false
  ```

---

## lastIndexOf()

> *str.lastIndexOf(searchValue[, fromIndex])*

- If contains, the containing substring must begin from a character within the left part of the original string divided by the *fromIndex*. The left part substring contains the character at the index of *fromIndex*. (*fromIndex* is included, not excluded)

  ```javascript
  /**
   * returns 1 not 3, since the left part divided by the fromIndex 2 is 'can', which means 
   * that if the string contains the searchString 'a', the containing substring must begin 
   * from a character in the left part substring('can'), so the containing substring that 
   * contains the searchString 'a' has to be the character 'a' in string 'can' whose index 
   * is 1, not 'a' at other indexes. So the result is 1 not 3.
   */
  'canal'.lastIndexOf('a', 2);   // 1 not 3
  ```

- The default value of *fromIndex* is +Infinity if not specified. So the default searched string is the whole string.

- **IMPORTANT**: If *fromIndex* < 0, it may cause misunderstanding of the return value. It will not directly return -1 as you originally think, but it will be the same as if it would be 0. Since this condition equals that the *fromIndex* == 0, it will still check if the first character of the string is the serachValue. So the return value can be two possible values: 0 or -1 depending on the checking result.

  ```javascript
  'canal'.lastIndexOf('c', -5); // returns 0
  'canal'.lastIndexOf('ca', -5)); // returns 0
  ```

- **IMPORTANT**: The influence of the parameter *fromIndex* to the return value is that it restricts the searchValue must begin from somewhere within the left part of the original string divided by the *fromIndex*. If the left part does not contain the searchValue, then it returns -1. The calculation steps of the return value are as follows:

  1. Calculate the left part of the original string divided by the *fromIndex* parameter. The following table shows the left parts calculated according to the *fromIndex* value:

     | string  | fromIndex                         | left part |
     | ------- | --------------------------------- | --------- |
     | 'hello' | -3 (the same effect with 0)       | 'h'       |
     | 'hello' | 1                                 | 'he'      |
     | 'hello' | 7 (the same effect with length-1) | 'hello'   |

  2. Check if the first character of the *searchValue* is within the left part. If not, then directly return -1. Otherwise, continue to check if the beginning part of the searchValue is within the left part. If not, returns -1. Otherwise, continue to check if the remaining part of the searchValue is just after the matched strings in the left part and within the original string. If yes, then it contains and returns the index of the first character of the containing substring of the original string. Examples are in the following table.

     | string        | search Value | from Index       | left part | substrings of the left part containing the first character of searchValue('a') ---- search RTL | substrings of the original string (if contains, the containing part must begin from a char in the bold area) | return value                             |
     | ------------- | ------------ | ---------------- | --------- | :--------------------------------------- | ---------------------------------------- | ---------------------------------------- |
     | '**d**acabab' | 'ab'         | -2 (same with 0) | 'd'       | /                                        | /                                        | -1                                       |
     | '**d**acabab' | 'ab'         | 0                | 'd'       | /                                        | /                                        | -1                                       |
     | '**da**cabab' | 'ab'         | 1                | 'da'      | 'a'                          (begin index 1) | '**a**cabab'  (begin index 1)            | -1  (beginning must contain 'a' at index 1, so -1) |
     | '**dac**abab' | 'ab'         | 2                | 'dac'     | 'ab'                        (begin index 1) | '**ac**abab'        (begin index 1)      | -1 (beginning must contain 'ac' at index 1, so -1) |
     | '**daca**bab' | 'ab'         | 3                | 'daca'    | ① 'a'                     (begin index 3)  ② 'aca'                 (begin index 1) | ①'**a**bab'                     (begin index 3)                   ② '**aca**bab'                 (begin index 1) | 3                 (①contains two 'ab', but beginning must contain 'a' at index 3, so 3) |
     | '**dacab**ab' | 'ab'         | 4                | 'dacab'   | ① 'ab'               (begin index 3)                       ② 'acab'                   (begin index 1) | ① '**ab**ab'                (begin index 3)                    ② '**acab**ab'                  (begin index 1) | 3                 (①contains two 'ab', but beginning must contain 'ab' at index 3, so 3) |
     | '**dacaba**b' | 'ab'         | 5                | 'dacaba'  | ① 'a'               (begin index 5)                       ② 'aba'                   (begin index 3)                               ③ 'acaba'                      (begin index 1) | ① '**a**b'               (begin index 5)                       ② '**aba**b'                   (begin index 3)                               ③ '**acaba**b'                      (begin index 1) | 5 (②contains)                            |
     | '**dacabab**' | 'ab'         | 6                | 'dacabab' | ① 'ab'               (begin index 5)                       ② 'abab'                   (begin index 3)                               ③ 'acabab'                      (begin index 1) | ① '**ab**'               (begin index 5)                       ② '**abab**'                   (begin index 3)                               ③ '**acabab**'                      (begin index 1) | 5 (②contains)                            |
     | '**dacabab**' | 'ab'         | 7 (same with 6)  | 'dacabab' | ① 'ab'               (begin index 5)                       ② 'abab'                   (begin index 3)                               ③ 'acabab'                      (begin index 1) | ① '**ab**'               (begin index 5)                       ② '**abab**'                   (begin index 3)                               ③ '**acabab**'                      (begin index 1) | 5 (②contains)                            |

     ```javascript
     'dacabab'.lastIndexOf('ab', -5);  // -1
     'dacabab'.lastIndexOf('ab', 0);   // -1
     'dacabab'.lastIndexOf('ab', 1);   // -1
     'dacabab'.lastIndexOf('ab', 2);   // -1
     'dacabab'.lastIndexOf('ab', 3);   //  3
     'dacabab'.lastIndexOf('ab', 4);   //  3
     'dacabab'.lastIndexOf('ab', 5);   //  5
     'dacabab'.lastIndexOf('ab', 6);   //  5
     'dacabab'.lastIndexOf('ab', 7);   //  5
     ```

---

