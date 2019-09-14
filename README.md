# Code128 Image Generator for JS



This is a simple code128 barcode generator.



## How to Use

Import the encode.js file then:


```
let str = "qweqrerer";
let code128 = new encode();
code128.addData(str);
code128.make();
let img = code128.createBase64()
```




