# redis

https://www.cnblogs.com/haoworld/p/redis-ji-qun-fang-shi.html

redis官方集群模式包括：单节点、一主一从，一主多从、哨兵模式、cluster模式等

## 列表

使用场景

### 消息队列

redis的lpush和brpop命令组合即可实现阻塞队列

生产者客户端使用lpush从列表左侧插入元素，多个消费者客户端使用brpop命令阻塞式的抢列表尾部的元素

多个客户端保证了消费的负载均衡和高可用性
