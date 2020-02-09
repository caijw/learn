# tcpdump

## 查看进程占用的端口号

```sh
ps -ef | grep TSW
netstat -anp | grep pid
```

## tcpdump 抓包

ifconfig

查看网卡

https://github.com/linuxwiki/SourceWiki/blob/master/%E7%BD%91%E7%BB%9C/tcpdump.md

获取抓包

tcpdump -i eth1 -vv -X -w dump.pcap

过来ws链接

tcp.port == 80 && (http || websocket) && (ip.dst == 9.149.21.106 || ip.src == 9.149.21.106  )
