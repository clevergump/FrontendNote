# 第4章 表达式和运算符

## 4.13 其他运算符

### 4.13.2  typeof

用法： typeof 变量，  或  typeof(变量)

返回值：始终是一个字符串，但根据变量类型的不同，返回的字符串内容不同

| x                            | typeof x                                                     |
| ---------------------------- | ------------------------------------------------------------ |
| undefined                    | "undefined"                                                  |
| null, 任意内置对象（非函数） | “object”                                                     |
| true, false                  | "boolean"                                                    |
| 任意数字，NaN                | "number"                                                     |
| 任意字符串                   | “string”                                                     |
| 任意函数                     | “function”                                                   |
| 任意宿主对象                 | 由编译器各自实现的字符串，但不是 "undefined"、"boolean"、"number"或 “string” |

**注意：虽然函数也属于一种对象，但是对函数使用 typeof 运算的结果不是 "object"，而是 "function".**

函数是一种可执行对象，但可执行对象不仅仅有函数还有其他对象.

ES5规定：所有可执行对象进行 typeof 运算都将返回 “function”.

如果使用 typeof 运算判断出一个变量是 object类型，那么还可以进一步使用 instanceof运算符 (c4.9.4), class特性 (c6.8.2), constructor 属性 (c6.8.1  c9.2.2) 等来判断该对象是属于哪个类，如下图：

![](../img_jsDG/chapter4/typeof_instanceof.png)







