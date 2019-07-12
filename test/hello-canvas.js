$(document).load(function() {
    testThree();
});

$(document).ready(function() {
    // testOne();
    // testTwo();
});

function testThree() {
    const canvas = document.getElementById('canvas');
    if (canvas.getContext) {//检测支持
        const ctx = canvas.getContext('2d');
        console.log('支持canvas');
    } else {
        console.log('不支持canvas');
    }
}

/*
1. canvas画布的默认大小为300像素×150像素（宽×高）。但是可以使用HTML height和width属性定义自定义大小。
 */
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