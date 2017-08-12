---
typora-root-url: ./
---

# CSS浮动

- CSS为某元素设置浮动后, 位于该浮动元素后边的元素(简称"后边元素"), 只有文本内容会环绕该浮动元素, 而背景则不会环绕该浮动元素, 而是直接来到该浮动元素的下方.

  ```css
  <style>
          body, p { margin: 0; padding: 0;}
          p { width: 200px; height: 30px;}
          .floatleft {float: left;}
          #p1 {background: coral;}
          #p2 {background: yellow; height: 40px; width: 300px;}
  </style>
  ```

  ```html
  <div>
      <p id="p1" class="floatleft">111</p>
      <p id="p2">444</p>
  </div>
  ```

  效果图:
  ![css_float_1](/img/css_float_1.png)

  ​