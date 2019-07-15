$(document).ready(function() {

    const canvas = document.getElementById('canvas');
    if (canvas.getContext) {//检测支持
        const ctx = canvas.getContext('2d');
        console.log('支持canvas');
        // imageOne(canvas, ctx);
        // imageTwo(canvas, ctx);
        // imageThree(canvas, ctx);
        hitRegion(canvas, ctx);
    } else {
        console.log('不支持canvas');
    }
});

/**
 * 点击区域（hit region）节
判断鼠标坐标是否在canvas上一个特定区域里一直是个有待解决的问题。hit region API让你可以在canvas上定义一个区域，这让无障碍工具获取canvas上的交互内容成为可能。它能让你更容易地进行点击检测并把事件转发到DOM元素去。这个API有以下三个方法（都是实验性特性，请先在浏览器兼容表上确认再使用）。

CanvasRenderingContext2D.addHitRegion() 
在canvas上添加一个点击区域。
CanvasRenderingContext2D.removeHitRegion() 
从canvas上移除指定id的点击区域。
CanvasRenderingContext2D.clearHitRegions() 
移除canvas上的所有点击区域。 

你可以把一个点击区域添加到路径里并检测MouseEvent.region属性来测试你的鼠标有没有点击这个区域
 * */
function hitRegion(canvas, ctx) {

    ctx.beginPath();
    ctx.arc(70, 80, 10, 0, 2 * Math.PI, false);
    ctx.fill();
    try {
        //id为空会报错
        ctx.addHitRegion({id: "circle"});
        //addHitRegion()方法也可以带一个control选项来指定把事件转发到哪个元素上（canvas里的元素）。
        // ctx.addHitRegion({id: "circle", control: "canvas"});
    } catch (e) {
        alert("请在chrome://flags中启用【实验性画布功能】或在firefox中输入about:config使canvas.hitregions.enabled值为true以开启更多功能~~~///(^v^)\\\~~~");
    }
    //　　据我目前所知，canvas纳入标准的常用交互接口（可能也就这一个）是 isPointInPath() ，它可以判断js设置的事件条件是否处于当前绘图路径中

    canvas.addEventListener("mousemove", function(event){
        if(event.region) {
            alert("hit region: " + event.region);
        }
    });
};

/**
 * 查看细节
 * @param {*} canvas 
 * @param {*} ctx 
 */
function imageThree(canvas, ctx) {

    var img = new Image();
    // img.src = 'https://mdn.mozillademos.org/files/5397/rhino.jpg';
    img.src = 'https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1563175327&di=f1fb9dc03b6e15a65e24e1e198f22904&src=http://img5.duitang.com/uploads/item/201205/15/20120515225125_4QJd3.jpeg';
    img.crossOrigin = "Anonymous";
    img.onload = function() {
        canvas.width = this.width;
        canvas.height = this.height;
        drawThree(this, canvas, ctx);
    };
};

function drawThree(img, canvas, ctx) {
    // var canvas = document.getElementById('canvas');
    // var ctx = canvas.getContext('2d');
    ctx.drawImage(img, 0, 0);
    img.style.display = 'none';
    var zoomctx = document.getElementById('zoom').getContext('2d');
   
    var smoothbtn = document.getElementById('smoothbtn');
    // 反锯齿设置
    var toggleSmoothing = function(event) {
      zoomctx.imageSmoothingEnabled = this.checked;
      zoomctx.mozImageSmoothingEnabled = this.checked;
      zoomctx.webkitImageSmoothingEnabled = this.checked;
      zoomctx.msImageSmoothingEnabled = this.checked;
    };
    smoothbtn.addEventListener('change', toggleSmoothing);
  
    var zoom = function(event) {
      var x = event.layerX;
      var y = event.layerY;
    //   zoomctx.drawImage(canvas,
    //                     Math.abs(x - 10),
    //                     Math.abs(y - 10),
    //                     20, 20,
    //                     0, 0,
    //                     200, 200);
        zoomctx.drawImage(canvas,
            Math.abs(x - 5),
            Math.abs(y - 5),
            10, 10,
            0, 0,
            200, 200);
    };
  
    canvas.addEventListener('mousemove', zoom);
  }

/**
 * 图片灰度和反相颜色
 * @param {*} canvas 
 * @param {*} ctx 
 */
function imageTwo(canvas, ctx) {

    var img = new Image();
    // img.src = '../resources/rhino.jpg';
    // img.src = 'https://mdn.mozillademos.org/files/5397/rhino.jpg';
    img.src = 'https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1563175327&di=f1fb9dc03b6e15a65e24e1e198f22904&src=http://img5.duitang.com/uploads/item/201205/15/20120515225125_4QJd3.jpeg';
    img.crossOrigin = "Anonymous";
    img.onload = function() {
        canvas.width = this.width;
        canvas.height = this.height;
        drawTwo(this, canvas, ctx);
    };
};

function drawTwo(img, canvas, ctx) {
    // var canvas = document.getElementById('canvas');
    // var ctx = canvas.getContext('2d');
    ctx.drawImage(img, 0, 0);
    img.style.display = 'none';
    var imageData = ctx.getImageData(0,0,canvas.width, canvas.height);
    var data = imageData.data;
      
    var invert = function() {
      for (var i = 0; i < data.length; i += 4) {
        data[i]     = 255 - data[i];     // red
        data[i + 1] = 255 - data[i + 1]; // green
        data[i + 2] = 255 - data[i + 2]; // blue
      }
      ctx.putImageData(imageData, 0, 0);
    };
  
    var grayscale = function() {
      for (var i = 0; i < data.length; i += 4) {
        var avg = (data[i] + data[i +1] + data[i +2]) / 3;
        data[i]     = avg; // red
        data[i + 1] = avg; // green
        data[i + 2] = avg; // blue
      }
      ctx.putImageData(imageData, 0, 0);
    };
  
    var invertbtn = document.getElementById('invertbtn');
    invertbtn.addEventListener('click', invert);
    var grayscalebtn = document.getElementById('grayscalebtn');
    grayscalebtn.addEventListener('click', grayscale);
  }

/**
 * 图片颜色取值
 * @param {*} canvas 
 * @param {*} ctx 
 */
function imageOne(canvas, ctx) {

    var img = new Image();
    img.src = 'https://mdn.mozillademos.org/files/5397/rhino.jpg';
    // var canvas = document.getElementById('canvas');
    // var ctx = canvas.getContext('2d');
    img.crossOrigin = "Anonymous";
    img.onload = function() {
        ctx.drawImage(img, 0, 0);
        img.style.display = 'none';
    };
    var color = document.getElementById('color');
    function pick(event) {
        var x = event.layerX;
        var y = event.layerY;
        var pixel = ctx.getImageData(x, y, 1, 1);
        var data = pixel.data;
        var rgba = 'rgba(' + data[0] + ',' + data[1] +
                    ',' + data[2] + ',' + (data[3] / 255) + ')';
        color.style.background =  rgba;
        color.textContent = rgba;
    }
    canvas.addEventListener('mousemove', pick);
};

/**
 * 如果服务器响应头包含Access-Control-Allow-Origin: *，则可以从客户端修复它：向图像或视频添加属性。
 * <img src="..." crossorigin="Anonymous" />
 * <video src="..." crossorigin="Anonymous"></video>
 * 否则你必须使用服务器端代理。
 * 
 * 要使用file：//解决跨域问题，可以使用参数(--allow-file-access-from-files)启动chrome
 * 首先退出chrome，如果你在Mac上运行，打开终端并运行open /Applications/Google\ Chrome.app --args --allow-file-access-from-files命令
 * 
 * [CORS解决版本](https://stackoverflow.com/questions/35588699/response-to-preflight-request-doesnt-pass-access-control-check)
 * 
 */
// function onload() {

//     var img = new Image();
//     // img.src = '../resources/rhino.jpg';
//     img.src = 'https://mdn.mozillademos.org/files/5397/rhino.jpg';

//     var canvas = document.getElementById('canvas');
//     var ctx = canvas.getContext('2d');

//     // 打开Allow-Control-Allow-Origin: * 也需要设置这个参数才能正常使用
//     img.crossOrigin = "Anonymous";
//     img.onload = function() {
//         canvas.width = img.width;
//         canvas.height = img.height;
//         ctx.drawImage(img, 0, 0);
//         img.style.display = 'none';
//     };
//     var color = document.getElementById('color');
//     function pick(event) {
//         var x = event.layerX;
//         var y = event.layerY;
//         /**
//          * 为了获得一个包含画布场景像素数据的ImageData对像，你可以用getImageData()方法：
//          * var myImageData = ctx.getImageData(left, top, width, height);
//          * 这个方法会返回一个ImageData对象，它代表了画布区域的对象数据，此画布的四个角落分别表示为(left, top), (left + width, top), (left, top + height), 以及(left + width, top + height)四个点。这些坐标点被设定为画布坐标空间元素。
//          * 
//          * */
//         var pixel = ctx.getImageData(x, y, 1, 1);
//         var data = pixel.data;
//         var rgba = 'rgba(' + data[0] + ',' + data[1] +
//                     ',' + data[2] + ',' + (data[3] / 255) + ')';
//         color.style.background =  rgba;
//         color.textContent = rgba;
//     }
//     canvas.addEventListener('mousemove', function(e) {
//         pick(e);
//     });
// };


