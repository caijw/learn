const {
	SyncHook,
	SyncBailHook,
	SyncWaterfallHook,
	SyncLoopHook,
	AsyncParallelHook,
	AsyncParallelBailHook,
	AsyncSeriesHook,
	AsyncSeriesBailHook,
	AsyncSeriesWaterfallHook
 } = require("tapable");


const FrontEnd = new AsyncSeriesWaterfallHook(['name']);
FrontEnd.tapAsync('webpack',(name,cb)=>{
    setTimeout(() => {
      console.log(name+" get webpack ")
      cb(null,'小李');
    }, 1000);
});
FrontEnd.tapAsync('webpack',(name,cb)=>{
  setTimeout(() => {
    console.log(name+" get webpack ")
    cb(null,'小张');
  }, 1000);
});
FrontEnd.tapAsync('webpack',(name,cb)=>{
  setTimeout(() => {
    console.log(name+" get webpack ")
    cb(null,'小红');
  }, 1000);
});
FrontEnd.start=(...args)=>{
  FrontEnd.callAsync(...args,(data)=>{
    console.log("全学完了",)
  })
};
FrontEnd.start('小王');

 
 