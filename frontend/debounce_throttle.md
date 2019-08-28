# debounce and throttle

在开发过程中会遇到频率很高的事件或者连续的事件，为了解决这类问题，常常使用的方法就是throttle(节流)和debounce(去抖)。throttle(节流)和debounce(去抖)都是用来控制某个函数在一定时间内执行多少次的解决方案，两者相似而又不同。

## debounce(去抖)

把触发非常频繁的事件合并成一次执行

### debounce场景

假设你正在乘电梯上楼，当电梯门关闭之前发现有人也要乘电梯，礼貌起见，你会按下开门开关，然后等他进电梯； 

如果在电梯门关闭之前，又有人来了，你会继续开门；

这样一直进行下去，你可能需要等待几分钟，最终没人进电梯了，才会关闭电梯门，然后上楼。

debounce 策略的电梯。如果电梯里有人进来，等待15秒。如果又人进来，15秒等待重新计时，直到15秒超时，开始运送。

### debounce作用

当调用动作触发一段时间后，才会执行该动作，若在这段时间间隔内又调用此动作则将重新计算时间间隔。

### debounce实现

```js
var debounce = function(action, delay) {
    var timer = null;
    return function() {
        var self = this,
            args = arguments;
        clearTimeout(timer);
        timer = setTimeout(function() {
            action.apply(self, args)
        }, delay);
    }
}
```

## throttle(节流)

设置一个阀值，在阀值内，把触发的事件合并成一次执行；当到达阀值，必定执行一次事件

### throttle场景

假设你正在乘电梯上楼，当电梯门关闭之前发现有人也要乘电梯，礼貌起见，你会按下开门开关，然后等他进电梯；  

但是，你是个没耐心的人，你最多只会等待电梯停留一分钟；

在这一分钟内，你会开门让别人进来，但是过了一分钟之后，你就会关门，让电梯上楼。

throttle 策略的电梯。保证如果电梯第一个人进来后，15秒后准时运送一次，不等待。如果没有人，则待机。

### throttle作用

预先设定一个执行周期，当调用动作的时刻大于等于执行周期则执行该动作，然后进入下一个新的时间周期。

### throttle实现

```js
var throttleV1 = function(action, delay, mustRunDelay) {
    var timer = null,
          startTime;
    return function() {
        var self = this,
              args = arguments,
              currTime = new Date();
        clearTimeout(timer);
        if(!startTime) {
            startTime = currTime;
        }
        if(currTime - startTime >= mustRunDelay) {
            action.apply(self, args);
            startTime = currTime;
        }
        else {
            timer = setTimeout(function() {
                action.apply(self, args);
            }, delay);
        }
    };
};
```

```js
var throttleV2 = function(action, delay){
    var statTime = 0;
    return function() {
        var currTime = +new Date();
        if (currTime - statTime > delay) {
            action.apply(this, arguments);
            statTime = currTime ;
        }
    }
}  
```

## 参考资料

- <https://github.com/WilberTian/throttle-debounce>
