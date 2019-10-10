const cluster = require('cluster');
const http = require('http');
const numCPUs = require('os').cpus().length;

let count = 0;

// 过载保护
cluster.isMaster && process.nextTick(function() {

  let rejectRate = 0;
  let cpuUsed = 0;

  // 高负载时丢弃部分请求
  let cpuLimit = 85;

  if (process.binding('config').exposeInternals) {
      console.log('overload protection working');
      const RoundRobinHandle = require('internal/cluster/round_robin_handle');
      const distribute = RoundRobinHandle.prototype.distribute;
      if (!distribute.hasHack) {
          RoundRobinHandle.prototype.distribute = function(err, handle) {
            count++;
            if (count % 2 === 0) {
              console.log("close handle!");
              handle.close();
              return;
            }
            console.log('distribute handle');
            distribute.call(this, err, handle);
          };
          distribute.hasHack = true;
      }
  }

});

require('./master');