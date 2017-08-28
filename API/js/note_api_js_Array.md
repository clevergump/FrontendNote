# Array

---

## length

- You can get or set the length of an array object.

- The value is an unsigned, 32-bit integer. So the valid range of length is [0, 2^32^ - 1] when setting.

  ```javascript
  var items = ['shoes', 'shirts', 'socks', 'sweaters'];
  items.length; // returns 4

  var namelistA = new Array(4294967296); //2 to the 32nd power = 4294967296 
  var namelistC = new Array(-100) //negative sign

  console.log(namelistA.length); //RangeError: Invalid array length 
  console.log(namelistC.length); //RangeError: Invalid array length 

  var namelistB = []; 
  namelistB.length = Math.pow(2,32)-1; //set array length less than 2 to the 32nd power 
  console.log(namelistB.length);  //4294967295
  ```

- We can truncate an array by setting a shorter length than its original value.

  ```javascript
  var numbers = [1, 2, 3, 4, 5];

  if (numbers.length > 3) {
    numbers.length = 3;
  }

  console.log(numbers); // [1, 2, 3]
  console.log(numbers.length); // 3
  ```

  ​