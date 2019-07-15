$(document).ready(function() {

    const canvas = document.getElementById('canvas');
    if (canvas.getContext) {//检测支持
        const ctx = canvas.getContext('2d');
        console.log('支持canvas');
        imageOne(canvas, ctx);
    } else {
        console.log('不支持canvas');
    }
});

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


