# 数据整理工具

# TOC

README.md 目录生成工具（python3编写）

## 运行

1. 安装 python3，确认配置好环境变量

2. 双击 toc.bat 运行

## 打包

使用 `pyinstaller` 打包 `py` 文件成 `exe` 程序

### 下载 `pyinstaller`

```
pip install pyinstaller
```

### 使用 `pyinstaller` 打包 `py` 文件成 `exe` 程序


```
pyinstaller -F -w toc.py
```

### 常用参数说明：

```
--icon=图标路径
-F 打包成一个exe文件
-w 使用窗口，无控制台
-c 使用控制台，无窗口
-D 创建一个目录，里面包含exe以及其他一些依赖性文件
pyinstaller -h 来查看参数
```

### 示例：

pyinstaller 改变生成exe程序的图标

zain.ico 是一个图标名，和当前的test.py文件在同一个目录下

```
pyinstaller -F -w --icon=zain.ico toc.py
```
