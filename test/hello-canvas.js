/*
1. canvas画布的默认大小为300像素×150像素（宽×高）。但是可以使用HTML height和width属性定义自定义大小。
2. fillRect(x, y, width, height)绘制一个填充的矩形。
3. strokeRect(x, y, width, height)绘制矩形轮廓。
4. clearRect(x, y, width, height)清除指定的矩形区域，使其完全透明。
5. beginPath()新建一条路径，生成之后，图形绘制命令被指向到路径上生成路径。
6. closePath()闭合路径之后图形绘制命令又重新指向到上下文中。
7. stroke()通过线条来绘制图形轮廓。
8. fill()通过填充路径的内容区域生成实心的图形。
9. moveTo(x, y)将笔移动到由x和指定的坐标y。
10. lineTo(x, y)从当前绘图位置到由x和指定的位置绘制一条线y。
11. arc(x, y, radius, startAngle, endAngle, anticlockwise)绘制一个以（x，y）位置为中心的弧，半径为r，从startAngle开始，以endAngle结束，沿逆时针方向指示给定方向（默认为顺时针方向）。
12. arcTo(x1, y1, x2, y2, radius)绘制具有给定控制点和半径的圆弧，通过直线连接到前一个点。

Bézier曲线
13. quadraticCurveTo(cp1x, cp1y, x, y)从当前笔位置到由指定的结束点绘制的二次贝塞尔曲线x，并y使用由指定的控制点cp1x和cp1y。
14. bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y)使用由（，）和（cp2x，cp2y）指定的控制点，从当前笔位置到由x和指定的终点绘制三次贝塞尔曲线。ycp1xcp1y

15. rect(x, y, width, height)绘制一个矩形，其左上角由（x，y）指定width和指定height。

*/
/*
Path2D

1. Path2D.addPath(path [, transform])使用可选的转换矩阵添加到当前路径的路径。
新canvas Path2DAPI的另一个强大功能是使用SVG路径数据初始化画布上的路径。这可能允许您传递路径数据并在SVG和canvas中重复使用它们。
*/
/**
 * Colors
 * 
 * 1. fillStyle = color设置图形的填充颜色。
 * 2. strokeStyle = color设置图形轮廓的颜色。
 * color 可以是表示 CSS 颜色值的字符串，渐变对象或者图案对象。
 * 注意: 一旦您设置了 strokeStyle 或者 fillStyle 的值，那么这个新值就会成为新绘制的图形的默认值。如果你要给每个图形上不同的颜色，你需要重新设置 fillStyle 或 strokeStyle 的值。
 * 3. globalAlpha = transparencyValue这个属性影响到 canvas 里所有图形的透明度，有效的值范围是 0.0 （完全透明）到 1.0（完全不透明），默认是 1.0。
 * globalAlpha 属性在需要绘制大量拥有相同透明度的图形时候相当高效。
 * 
 */

 /**
  * Line styles
  * 
  * 1. lineWidth = value设置线条宽度。
  * 2. lineCap = type设置线条末端样式。
  * 3. lineJoin = type设定线条与线条间接合处的样式。
  * 4. miterLimit = value限制当两条线相交时交接处最大长度；所谓交接处长度（斜接长度）是指线条交接处内角顶点到外角顶点的长度。
  * 5. getLineDash()返回一个包含当前虚线样式，长度为非负偶数的数组。
  * 6. setLineDash(segments)设置当前虚线样式。
  * 7. lineDashOffset = value设置虚线样式的起始偏移量。
  * 
  */

  /**
   * 渐变 Gradients
   * 1. createLinearGradient(x1, y1, x2, y2)createLinearGradient 方法接受 4 个参数，表示渐变的起点 (x1,y1) 与终点 (x2,y2)。
   * 2. createRadialGradient(x1, y1, r1, x2, y2, r2)createRadialGradient 方法接受 6 个参数，前三个定义一个以 (x1,y1) 为原点，半径为 r1 的圆，后三个参数则定义另一个以 (x2,y2) 为原点，半径为 r2 的圆。
   * 3. gradient.addColorStop(position, color)addColorStop 方法接受 2 个参数，position 参数必须是一个 0.0 与 1.0 之间的数值，表示渐变中颜色所在的相对位置。例如，0.5 表示颜色会出现在正中间。color 参数必须是一个有效的 CSS 颜色值（如 #FFF， rgba(0,0,0,1)，等等）。
   */

   /**
    * 图案样式 Patterns
    * 1. createPattern(image, type)该方法接受两个参数。Image 可以是一个 Image 对象的引用，或者另一个 canvas 对象。Type 必须是下面的字符串值之一：repeat，repeat-x，repeat-y 和 no-repeat。
    * 注意: 用 canvas 对象作为 Image 参数在 Firefox 1.5 (Gecko 1.8) 中是无效的。
    *
    */
/**
 * 阴影 Shadows
 * 1. shadowOffsetX = float shadowOffsetX 和 shadowOffsetY 用来设定阴影在 X 和 Y 轴的延伸距离，它们是不受变换矩阵所影响的。负值表示阴影会往上或左延伸，正值则表示会往下或右延伸，它们默认都为 0。
 * 2. shadowOffsetY = float  shadowOffsetX 和 shadowOffsetY 用来设定阴影在 X 和 Y 轴的延伸距离，它们是不受变换矩阵所影响的。负值表示阴影会往上或左延伸，正值则表示会往下或右延伸，它们默认都为 0。
 * 3. shadowBlur = float shadowBlur 用于设定阴影的模糊程度，其数值并不跟像素数量挂钩，也不受变换矩阵的影响，默认为 0。
 * 4. shadowColor = color shadowColor 是标准的 CSS 颜色值，用于设定阴影颜色效果，默认是全透明的黑色。
 * 
 * 当我们用到 fill（或者 clip和isPointinPath ）你可以选择一个填充规则，该填充规则根据某处在路径的外面或者里面来决定该处是否被填充，这对于自己与自己路径相交或者路径被嵌套的时候是有用的。
 * 两个可能的值：
 * "nonzero": non-zero winding rule, 默认值.
 * "evenodd":  even-odd winding rule.
 * */   
/**
 * 绘制文本
 * 1. fillText(text, x, y [, maxWidth])在指定的(x,y)位置填充指定的文本，绘制的最大宽度是可选的.
 * 2. strokeText(text, x, y [, maxWidth])在指定的(x,y)位置绘制文本边框，绘制的最大宽度是可选的.
 * 3. font = value当前我们用来绘制文本的样式. 这个字符串使用和 CSS font 属性相同的语法. 默认的字体是 10px sans-serif。
 * 4. textAlign = value文本对齐选项. 可选的值包括：start, end, left, right or center. 默认值是 start。
 * 5. textBaseline = value基线对齐选项. 可选的值包括：top, hanging, middle, alphabetic, ideographic, bottom。默认值是 alphabetic。
 * 6. direction = value文本方向。可能的值包括：ltr, rtl, inherit。默认值是 inherit。
 * 7. measureText()将返回一个 TextMetrics对象的宽度、所在像素，这些体现文本特性的属性。
 * 
 */

 /**
  * 变形 Transforms
  * 1. transform(m11, m12, m21, m22, dx, dy)这个方法是将当前的变形矩阵乘上一个基于自身参数的矩阵，在这里我们用下面的矩阵：
  * 这个函数的参数各自代表如下：
m11：水平方向的缩放
m12：水平方向的倾斜偏移
m21：竖直方向的倾斜偏移
m22：竖直方向的缩放
dx：水平方向的移动
dy：竖直方向的移动
  */
$(document).ready(function() {
    // testOne();
    // testTwo();
    const canvas = document.getElementById('canvas');
    if (canvas.getContext) {//检测支持
        const ctx = canvas.getContext('2d');
        console.log('支持canvas');
        // testThree(ctx);
        // testFour(ctx);
        // testFive(ctx);
        // testSix(ctx);
        // testSeven(ctx);
        // testBezierOne(ctx);
        // testBezierTwo(ctx);
        // testEight(ctx);
        // testPath2DOne(ctx);
        // testPath2DTwo(ctx);
        // testColorOne(ctx);
        // testColorTwo(ctx);
        // testColorThree(ctx);
        // testColorFour(ctx);
        // testLineStyleFour(ctx);
        testPatternOne(ctx);
    } else {
        console.log('不支持canvas');
    }
});

function testPatternOne(ctx) {

    // 创建新 image 对象，用作图案
    var img = new Image();
    img.src = 'https://mdn.mozillademos.org/files/222/Canvas_createpattern.png';
    img.onload = function() {

        // 创建图案
        var ptrn = ctx.createPattern(img, 'repeat');
        ctx.fillStyle = ptrn;
        ctx.fillRect(0, 0, 150, 150);
    }
}

function testLineStyleFour(ctx) {

    for (var i = 0; i < 10; i++){
        ctx.lineWidth = 1+i;
        ctx.beginPath();
        ctx.moveTo(5+i*14,5);
        ctx.lineTo(5+i*14,140);
        ctx.stroke();
    }
}

function testColorFour(ctx) {

    // 画背景
  ctx.fillStyle = 'rgb(255,221,0)';
  ctx.fillRect(0,0,150,37.5);
  ctx.fillStyle = 'rgb(102,204,0)';
  ctx.fillRect(0,37.5,150,37.5);
  ctx.fillStyle = 'rgb(0,153,255)';
  ctx.fillRect(0,75,150,37.5);
  ctx.fillStyle = 'rgb(255,51,0)';
  ctx.fillRect(0,112.5,150,37.5);

  // 画半透明矩形
  for (var i=0;i<10;i++){
    ctx.fillStyle = 'rgba(255,255,255,'+(i+1)/10+')';
    for (var j=0;j<4;j++){
      ctx.fillRect(5+i*14,5+j*37.5,14,27.5)
    }
  }
}

function testColorThree(ctx) {

    // 画背景
  ctx.fillStyle = '#FD0';
  ctx.fillRect(0,0,75,75);
  ctx.fillStyle = '#6C0';
  ctx.fillRect(75,0,75,75);
  ctx.fillStyle = '#09F';
  ctx.fillRect(0,75,75,75);
  ctx.fillStyle = '#F30';
  ctx.fillRect(75,75,75,75);
  ctx.fillStyle = '#FFF';

  // 设置透明度值
  ctx.globalAlpha = 0.2;

  // 画半透明圆
  for (var i=0;i<7;i++){
      ctx.beginPath();
      ctx.arc(75,75,10+10*i,0,Math.PI*2,true);
      ctx.fill();
  }
}

function testColorTwo(ctx) {

    for (var i=0;i<6;i++){
        for (var j=0;j<6;j++){
          ctx.strokeStyle = 'rgb(0,' + Math.floor(255-42.5*i) + ',' + 
                           Math.floor(255-42.5*j) + ')';
          ctx.beginPath();
          ctx.arc(12.5+j*25,12.5+i*25,10,0,Math.PI*2,true);
          ctx.stroke();
        }
      }
}

function testColorOne(ctx) {

    for (var i=0;i<6;i++){
        for (var j=0;j<6;j++){
          ctx.fillStyle = 'rgb(' + Math.floor(255-42.5*i) + ',' + 
                           Math.floor(255-42.5*j) + ',0)';
          ctx.fillRect(j*25,i*25,25,25);
        }
      }
}

function testPath2DTwo(ctx) {

    var p = new Path2D('M10 10 h 80 v 80 h -80 Z');
    ctx.fill(p);
}

function testPath2DOne(ctx) {

    var rectangle = new Path2D();
    rectangle.rect(10, 10, 50, 50);

    var circle = new Path2D();
    circle.moveTo(125, 35);
    circle.arc(100, 35, 25, 0, 2 * Math.PI);

    ctx.stroke(rectangle);
    ctx.fill(circle);
}

function testEight(ctx) {

    roundedRect(ctx, 12, 12, 150, 150, 15);
    roundedRect(ctx, 19, 19, 150, 150, 9);
    roundedRect(ctx, 53, 53, 49, 33, 10);
    roundedRect(ctx, 53, 119, 49, 16, 6);
    roundedRect(ctx, 135, 53, 49, 33, 10);
    roundedRect(ctx, 135, 119, 25, 49, 10);

    ctx.beginPath();
    ctx.arc(37, 37, 13, Math.PI / 7, -Math.PI / 7, false);
    ctx.lineTo(31, 37);
    ctx.fill();

    for (var i = 0; i < 8; i++) {
      ctx.fillRect(51 + i * 16, 35, 4, 4);
    }

    for (i = 0; i < 6; i++) {
      ctx.fillRect(115, 51 + i * 16, 4, 4);
    }

    for (i = 0; i < 8; i++) {
      ctx.fillRect(51 + i * 16, 99, 4, 4);
    }

    ctx.beginPath();
    ctx.moveTo(83, 116);
    ctx.lineTo(83, 102);
    ctx.bezierCurveTo(83, 94, 89, 88, 97, 88);
    ctx.bezierCurveTo(105, 88, 111, 94, 111, 102);
    ctx.lineTo(111, 116);
    ctx.lineTo(106.333, 111.333);
    ctx.lineTo(101.666, 116);
    ctx.lineTo(97, 111.333);
    ctx.lineTo(92.333, 116);
    ctx.lineTo(87.666, 111.333);
    ctx.lineTo(83, 116);
    ctx.fill();

    ctx.fillStyle = 'white';
    ctx.beginPath();
    ctx.moveTo(91, 96);
    ctx.bezierCurveTo(88, 96, 87, 99, 87, 101);
    ctx.bezierCurveTo(87, 103, 88, 106, 91, 106);
    ctx.bezierCurveTo(94, 106, 95, 103, 95, 101);
    ctx.bezierCurveTo(95, 99, 94, 96, 91, 96);
    ctx.moveTo(103, 96);
    ctx.bezierCurveTo(100, 96, 99, 99, 99, 101);
    ctx.bezierCurveTo(99, 103, 100, 106, 103, 106);
    ctx.bezierCurveTo(106, 106, 107, 103, 107, 101);
    ctx.bezierCurveTo(107, 99, 106, 96, 103, 96);
    ctx.fill();

    ctx.fillStyle = 'black';
    ctx.beginPath();
    ctx.arc(101, 102, 2, 0, Math.PI * 2, true);
    ctx.fill();

    ctx.beginPath();
    ctx.arc(89, 102, 2, 0, Math.PI * 2, true);
    ctx.fill();
}

function roundedRect(ctx, x, y, width, height, radius) {
    ctx.beginPath();
    ctx.moveTo(x, y + radius);
    ctx.lineTo(x, y + height - radius);
    ctx.arcTo(x, y + height, x + radius, y + height, radius);
    ctx.lineTo(x + width - radius, y + height);
    ctx.arcTo(x + width, y + height, x + width, y + height-radius, radius);
    ctx.lineTo(x + width, y + radius);
    ctx.arcTo(x + width, y, x + width - radius, y, radius);
    ctx.lineTo(x + radius, y);
    ctx.arcTo(x, y, x, y + radius, radius);
    ctx.stroke();
  }

function testBezierTwo(ctx) {

    // Cubic curves example
    ctx.beginPath();
    ctx.moveTo(75, 40);
    ctx.bezierCurveTo(75, 37, 70, 25, 50, 25);
    ctx.bezierCurveTo(20, 25, 20, 62.5, 20, 62.5);
    ctx.bezierCurveTo(20, 80, 40, 102, 75, 120);
    ctx.bezierCurveTo(110, 102, 130, 80, 130, 62.5);
    ctx.bezierCurveTo(130, 62.5, 130, 25, 100, 25);
    ctx.bezierCurveTo(85, 25, 75, 37, 75, 40);
    ctx.fill();
}

function testBezierOne(ctx) {

    // Quadratric curves example
    ctx.beginPath();
    ctx.moveTo(75, 25);
    ctx.quadraticCurveTo(25, 25, 25, 62.5);
    ctx.quadraticCurveTo(25, 100, 50, 100);
    ctx.quadraticCurveTo(50, 120, 30, 125);
    ctx.quadraticCurveTo(60, 120, 65, 100);
    ctx.quadraticCurveTo(125, 100, 125, 62.5);
    ctx.quadraticCurveTo(125, 25, 75, 25);
    ctx.stroke();
}

function testSeven(ctx) {

    for (var i = 0; i < 4; i++) {
        for (var j = 0; j < 3; j++) {
          ctx.beginPath();
          var x = 25 + j * 50; // x coordinate
          var y = 25 + i * 50; // y coordinate
          var radius = 20; // Arc radius
          var startAngle = 0; // Starting point on circle
          var endAngle = Math.PI + (Math.PI * j) / 2; // End point on circle
          var anticlockwise = i % 2 !== 0; // clockwise or anticlockwise
  
          ctx.arc(x, y, radius, startAngle, endAngle, anticlockwise);
  
          if (i > 1) {
            ctx.fill();
          } else {
            ctx.stroke();
          }
        }
    }
}

function testSix(ctx) {

    // Filled triangle
    ctx.beginPath();
    ctx.moveTo(25, 25);
    ctx.lineTo(105, 25);
    ctx.lineTo(25, 105);
    ctx.fill();

    // Stroked triangle
    ctx.beginPath();
    ctx.moveTo(125, 125);
    ctx.lineTo(125, 45);
    ctx.lineTo(45, 125);
    ctx.closePath();
    ctx.stroke();
}

function testThree(context) {
    
    // context.fillStyle = 'rgb(200, 0, 0)';
    // context.fillRect(10, 10, 50, 50);

    // context.fillStyle = 'rgb(0, 0, 200, 0.5)';
    // context.fillRect(30, 30, 50, 50);

    context.fillRect(25, 25, 100, 100);
    context.clearRect(45, 45, 60, 60);
    context.strokeRect(50, 50, 50, 50);
}

function testFour(ctx) {

    ctx.beginPath();
    // 注意：当前路径为空，即调用beginPath()之后，或者canvas刚建的时候，第一条路径构造命令通常被视为是moveTo（），无论实际上是什么。出于这个原因，你几乎总是要在设置路径之后专门指定你的起始位置。
    ctx.moveTo(75, 50);
    ctx.lineTo(100, 75);
    ctx.lineTo(100, 25);
    ctx.fill();
    // 注意：当你调用fill()函数时，所有没有闭合的形状都会自动闭合，所以你不需要调用closePath()函数。但是调用stroke()时不会自动闭合。
}

function testFive(ctx) {
    ctx.beginPath();
    // arc()画圆弧
    ctx.arc(75, 75, 50, 0, Math.PI * 2, true); // Outer circle
    ctx.moveTo(110, 75);
    ctx.arc(75, 75, 35, 0, Math.PI, false);  // Mouth (clockwise)
    ctx.moveTo(65, 65);
    ctx.arc(60, 65, 5, 0, Math.PI * 2, true);  // Left eye
    ctx.moveTo(95, 65);
    ctx.arc(90, 65, 5, 0, Math.PI * 2, true);  // Right eye
    ctx.stroke();
}

function testOne() {

    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');

    ctx.fillStyle = 'green';
    ctx.fillRect(10, 10, 200, 200);
};

function testTwo() {

    const ctx = document.getElementById('hello').getContext('2d');
    ctx.fillStyle = 'yellow';

    var w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    var h = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

    // 调整大小才能看到设置超出默认值的效果
    $('#hello').attr('width', w);
    $('#hello').attr('height', h);

    w = w / 2;
    h = h / 2;
    ctx.fillRect(w, h, 200, 200);
}