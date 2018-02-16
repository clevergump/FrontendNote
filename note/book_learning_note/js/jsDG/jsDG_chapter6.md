# 第6章 对象

## 6.1 创建对象

###js创建对象的方式：

- 字面量（直接量）. 形式类似于json

- new 构造函数.

- Object.create(proto[, propertiesObject]). 一个非Object.prototype 的对象从其原型对象中继承属性， 而所有的原型对象最终都会继承Object.prototype 的属性，所以一个非Object.prototype 的对象既会继承其原型对象的属性又会继承Object.prototype 的属性。例如：new Date()对象既继承了 Date.prototype 的属性，又继承了 Object.prototype 的属性.

  ![](../img_jsDG/chapter6/example_prototype_property_inherit.png)

  例如：

  ```
  var o1 = Object.create({x:1, y:2}); // 参数{x:1, y:2}就是对象o1的原型对象，o1继承了属性x和y
  ```




###什么是原型？

- 原型是一个对象（通常也冗余地称为“原型对象”）
- 原型是一个相对概念，正确的说法应该是，某个对象是另一个对象的原型
- 任何非 Object.prototype 的对象都有自己的一个直接原型和可能存在的多个间接原型，这些原型的根原型是 Object.prototype
- 只有 Object.prototype 没有原型
- 一个对象可以从其原型（直接原型和间接原型）中继承属性和方法，最终这个继承关系形成的链条就叫做原型链.

