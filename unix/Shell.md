# Shell

## Shell特殊变量

| 变量 | 含义 |
| --- | --- |
| $0 | 当前脚本的文件名 |
| $n | 传递给脚本或函数的参数。n 是一个数字，表示第几个参数。例如，第一个参数是$1，第二个参数是$2。 |
| $# | 传递给脚本或函数的参数个数 |
| $* | 传递给脚本或函数的所有参数 |
| $@ | 传递给脚本或函数的所有参数。被双引号(" ")包含时，与 $* 稍有不同，下面将会讲到 |
| $? | 上个命令的退出状态，或函数的返回值。一般情况下，大部分命令执行成功会返回 0，失败返回 1。 | 
| $$ | 当前Shell进程ID。对于 Shell 脚本，就是这些脚本所在的进程ID。 |

$* 和 $@ 的区别

$* 和 $@ 都表示传递给函数或脚本的所有参数，不被双引号(" ")包含时，都以"$1" "$2" … "$n" 的形式输出所有参数。

但是当它们被双引号(" ")包含时，"$*" 会将所有的参数作为一个整体，以"$1 $2 … $n"的形式输出所有参数；"$@" 会将各个参数分开，以"$1" "$2" … "$n" 的形式输出所有参数。

下面的例子可以清楚的看到 $* 和 $@ 的区别：

```sh
#!/bin/bash
echo "\$*=" $*
echo "\"\$*\"=" "$*"
echo "\$@=" $@
echo "\"\$@\"=" "$@"
echo "print each param from \$*"
for var in $*
do
    echo "$var"
done
echo "print each param from \$@"
for var in $@
do
    echo "$var"
done
echo "print each param from \"\$*\""
for var in "$*"
do
    echo "$var"
done
echo "print each param from \"\$@\""
for var in "$@"
do
    echo "$var"
done
```

执行 ./test.sh "a" "b" "c" "d"，看到下面的结果：

```sh
$*=  a b c d
"$*"= a b c d
$@=  a b c d
"$@"= a b c d
print each param from $*
a
b
c
d
print each param from $@
a
b
c
d
print each param from "$*"
a b c d
print each param from "$@"
a
b
c
d
```

说明：双引号包含时，"$*"的参数被当做一个整体，而"$@"还是遍历每一个参数

## shell 判断表达式

### 文件表达式

| 表达式 | 含义 |
| --- | --- |
| -e filename | 如果 filename存在，则为真，如： [ -e /var/log/syslog ] |
| -d filename | 如果 filename为目录，则为真 |
| -f filename | 如果 filename为常规文件，则为真 |
| -L filename | 如果 filename为符号链接，则为真 |
| -r filename | 如果 filename可读，则为真 |
| -w filename | 如果 filename可写，则为真  |
| -x filename | 如果 filename可执行，则为真 |
| -s filename | 如果文件长度不为0，则为真 |
| -h filename | 如果文件是软链接，则为真 |
| filename1 -nt filename2 | 如果 filename1比 filename2新，则为真 |
| filename1 -ot filename2 | 如果 filename1比 filename2旧，则为真 |

### 整数变量表达式

| 表达式 | 含义 |
| --- | --- |
| -eq | 等于 |
| -ne | 不等于 |
| -gt | 大于 |
| -ge | 大于等于 |
| -lt | 小于 |
| -le | 小于等于 |

### 字符串变量表达式

| 表达式 | 含义 |
| --- | --- |
| If  [ $a = $b ] | 如果string1等于string2，则为真 |
| if  [ $string1 !=  $string2 ] | 如果string1不等于string2，则为真 |
| if  [ -n $string  ] | 如果 string长度非零，则为真 |
| if  [ -z $string  ] | 如果 string长度为零，则为真 |
| if  [ $sting ]  | 如果string 非空，返回0 (和-n类似)  |

### 逻辑

| 表达式 | 含义 |
| --- | --- |
| if [ ! 表达式 ] | 逻辑非 |
| if [ 表达式1  –a  表达式2 ] | 逻辑与 |
| if [ 表达式1  –o 表达式2 ] | 逻辑或 |

## 其他

### 磁盘、文件大小

`df -h` 查看磁盘占用情况

`du -sm ./*` 查看当前目录下文件大小，单位M
