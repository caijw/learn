# 词法分析

词法分析器的任务：

从左向右逐行扫描源程序的字符，识别出各个单词，确定单词的类型。

将识别出的单词转换成统一的机内表示（词法单元token的形式）

token：

<种别码, 属性值>

|                 | 单词类型         | 种别            | 种别码          |
| :-------------: | :-------------: | :-------------:| :-------------:|
| 1      | 关键字 | program、if、else、then、... | 一词一码 |
| 2      | 标识符 | 变量名、数组名、记录名、过程名、... | 多词一码 |
| 3      | 常量 | 整形、浮点型、字符型、布尔型 | 一型一码 |
| 4      | 运算符 | 算术（+ - * / ++ --）关系（> < == != >= <=）逻辑（& | ~） | 一词一码 或 一型一码 |
| 5      | 界限符 | ; ( ) = { } ... | 一词一码 |
