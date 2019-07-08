# android debug bridge

安卓手机调试工具

## 命令集合

```
adb devices , 获取设备列表及设备状态

```
```
adb get-state , 获取设备的状态

设备的状态有 3 钟，device , offline , unknown

device：设备正常连接

offline：连接出现异常，设备无响应

unknown：没有连接设备

```

```
adb logcat , 打印 Android 的系统日志
```

```
adb install , 安装应用，覆盖安装是使用 -r 选项
```

```
adb pull , 将 Android 设备上的文件或者文件夹复制到本地
例如复制 Sdcard 下的 pull.txt 文件到 D 盘：
adb pull sdcard/pull.txt d:\
如果需要重命名为 rename.txt：
adb pull sdcard/pull.txt d:\rename.txt
```

```
adb push , 推送本地文件至 Android 设备
例如推送 D 盘下的 push.txt 至 Sdcard：
adb push d:\push.txt sdcard/
```

```
adb reboot , 重启 Android 设备
bootloader , 重启设备，进入 fastboot 模式，同 adb reboot-bootloader 命令
recovery , 重启设备，进入 recovery 模式，经常刷机的同学比较熟悉这个模式
```

```
adb forward , 将 宿主机上的某个端口重定向到设备的某个端口
adb forward tcp:1314 tcp :8888
执行该命令后所有发往宿主机 1314 端口的消息、数据都会转发到 Android 设备的 8888 端口上，因此可以通过远程的方式控制 Android 设备。
```

```
adb connect 远程连接 Android 设备
```

```
adb shell 进入安卓手机shell界面
```

```
adb kill-server  终止adb服务进程
```

```
adb start-server    重启adb服务进程
```

```

```