# 什么是编译

高级语言 -> 编译 -> 汇编语言 -> 汇编 -> 机器语言

hight level language -> compiling -> assembly language -> assembling -> mathine language

高级语言 -> 编译 -> 机器语言

hight level language -> compiling -> mathine language

编译：

将高级语言（源语言）翻译成汇编语言或机器语言（目标语言）的过程

源文件 -> 预处理器（preprocessor） -> 经过预处理的源程序 -> 编译器 -> 汇编语言程序 -> 汇编器（assembler） -> 可重定位的机器代码 -> 链接器（linker）/加载器（loader） -> 目标机器代码

预处理器：

把存储在不同文件的源程序聚会在一起

把被称为宏的缩写语句转换为原始语句

可重定位（relocatable）：在内存中存放的起始位置L不是固定的。起始位置+相对位置=绝对位置

加载器：

修改可重定位地址

将修改后的指令和数据放到内存中适当的位置

链接器：

将多个可重定位的机器代码文件（包括库文件）链接到一起

解决外部内存地址问题
