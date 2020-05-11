[English](./README.md) | 简体中文

# 目录

>- [说明](#说明)
>- [编译及调试环境配置](#编译及调试环境配置)
>    - [CPP](#CPP)
>       - [安装CPP扩展](#安装CPP扩展)
>       - [配置MinGw](#配置MinGw)
>           - [MinGw下载](#MinGw下载)
>           - [MinGw安装及环境变量配置](#MinGw安装及环境变量配置)
>       - [配置vscode_CPP](#配置vscode_CPP)
>           - [launch_CPP](#launch_CPP)
>           - [c_cpp_properties_CPP](#c_cpp_properties_CPP)
>           - [tasks_CPP](#tasks_CPP)
>       - [编译及调试CPP代码](#编译及调试CPP代码)
>    - [JavaScript](#JavaScript)
>       - [配置Nodejs](#配置Nodejs)
>       - [配置vscode_JS](#配置vscode_JS)
>           - [launch_JS](#launch_JS)
>       - [编译及调试JavaScript代码](#编译及调试JavaScript代码)
>    - [Python](#Python)

# 说明

>[目录](#目录)

刷题，算法总结，算法库。包含语言：`C/C++`、`JavaScript`、`Python` ...

# 编译及调试环境配置

这里用的是 `vscode` 配置各种语言的编译和调试环境，系统为windows。

## CPP

>[目录](#目录) | [说明](#说明)

### 安装CPP扩展

`vscode` 扩展中心搜索 `C/C++` 下载并安装扩展。

### 配置MinGw

>[目录](#目录) | [说明](#说明)

#### MinGw下载

通过下列链接下载自己喜欢的版本

64位(x64): [http://mingw-w64.org/doku.php/download/mingw-builds](http://mingw-w64.org/doku.php/download/mingw-builds)

32位(x86): [https://osdn.net/projects/mingw/releases](https://osdn.net/projects/mingw/releases)

#### MinGw安装及环境变量配置

>[目录](#目录) | [说明](#说明)

引用两个比较好的教程

64位(x64): [https://sourceforge.net/projects/mingw-w64/files/](https://sourceforge.net/projects/mingw-w64/files/)

32位(x86): [https://www.cnblogs.com/lidabo/p/8990348.html](https://www.cnblogs.com/lidabo/p/8990348.html)

### 配置vscode_CPP

>[目录](#目录) | [说明](#说明)

`./.vscode` 文件夹下添加下列配置文件：[launch.json](./.vscode/launch.json)、[c_cpp_properties.json](./.vscode/c_cpp_properties.json)、[tasks.json](./.vscode/tasks.json)、[settings.json](./.vscode/settings.json)

#### launch_CPP

具体说明见注释，需注意把 `"miDebuggerPath"` 的值改为自己的 `MinGW` 安装路径。

[launch.json](./.vscode/launch.json)

```js
{
    "version": "0.2.0",
    "configurations": [
        {
            "name": "C++ debug (GDB)", // 配置名称，将会在启动配置的下拉菜单中显示
            "type": "cppdbg", // 配置类型，这里只能为 cppdbg
            "request": "launch", // 请求配置类型，可以为 launch（启动）或 attach（附加）
            "targetArchitecture": "x64", // 生成目标架构，一般为 x86 或 x64，可以为 x86, arm, arm64, mips, x64, amd64, x86_64
            "program": "${file}.exe", // 即将进行调试的程序
            "miDebuggerPath": "D:\\Install\\NoGreenInstall\\mingw-w64\\mingw64\\bin\\gdb.exe", // miDebugger 的路径，注意这里要与自己的 MinGw 安装路径对应
            "args": [
                "zain",
                "jane",
                "ZainJane"
            ], // 程序调试时传递给程序的命令行参数，一般设为空即可，int main(int argc, char* argv[]) 函数的参数
            "stopAtEntry": false, // 设为 true 时程序将暂停在程序入口处，一般设置为 false
            "cwd": "${workspaceRoot}", // 调试程序时的工作目录，一般为 ${workspaceRoot} 即代码所在目录
            "externalConsole": true, // 调试时是否显示控制台窗口，一般设置为 true 显示控制台
            "preLaunchTask": "g++" // 调试会话开始前执行的任务，一般为编译程序，c++ 为 g++, c 为 gcc
        }
    ]
}
```

#### c_cpp_properties_CPP

>[目录](#目录) | [说明](#说明)

需注意把 `"compilerPath"` 的值改为自己的 `MinGW` 安装路径，其它设置不变。

[c_cpp_properties.json](./.vscode/c_cpp_properties.json)

```json
{
    "configurations": [
        {
            "name": "MinGW",
            "includePath": [
                "${workspaceFolder}/**"
            ],
            "defines": [
                "_DEBUG",
                "UNICODE",
                "_UNICODE"
            ],
            "windowsSdkVersion": "8.1",
            "compilerPath": "D:\\Install\\NoGreenInstall\\mingw-w64\\mingw64\\bin\\g++.exe",
            "cStandard": "c11",
            "cppStandard": "c++17",
            "intelliSenseMode": "gcc-x64"
        }
    ],
    "version": 4
}
```

#### tasks_CPP

>[目录](#目录) | [说明](#说明)

这个文件不用改动

[tasks.json](./.vscode/tasks.json)

```js
{
    "version": "2.0.0",
    "command": "g++",
    "args": [
        "-g",
        "${file}",
        "-o",
        "${file}.exe"
    ], // 编译命令参数
    "problemMatcher": {
        "owner": "cpp",
        "fileLocation": [
            "relative",
            "${workspaceRoot}"
        ],
        "pattern": {
            "regexp": "^(.*):(\\d+):(\\d+):\\s+(warning|error):\\s+(.*)$",
            "file": 1,
            "line": 2,
            "column": 3,
            "severity": 4,
            "message": 5
        }
    }
}
```

### 编译及调试CPP代码

>[目录](#目录) | [说明](#说明)

将需要编译和调试的代码放到 `.vscode` 文件夹所在的工作区文件夹内。打开文件，在调试侧边栏将调试配置选择为 `launch.json` 文件中 `"name"` 对应值，鼠标单击调试按钮或按下键盘 `F5` 开始编译和调试。

## JavaScript

>[目录](#目录) | [说明](#说明)

### 配置Nodejs

Nodejs下载：[http://nodejs.cn/download](http://nodejs.cn/download)

下载好后安装到自己喜欢的文件夹，不用手动配置环境变量。 

### 配置vscode_JS

>[目录](#目录) | [说明](#说明)

`./.vscode/launch.json` 文件新增下列内容，如果没有 `launch.json` 文件则新建。

#### launch_JS

[launch.json](./.vscode/launch.json)

```js
{
    "version": "0.2.0",
    "configurations": [
        {
            "type": "node",
            "request": "launch",
            "name": "Node debug (js)",
            "program": "${file}",
            "sourceMaps": true
        }
    ]
}
```

### 编译及调试JavaScript代码

>[目录](#目录) | [说明](#说明)

同 C/C++ 编译及调试，将需要编译和调试的代码放到 `.vscode` 文件夹所在的工作区文件夹内。打开文件，在调试侧边栏将调试配置选择为 `launch.json` 文件中 `"name"` 对应值，鼠标单击调试按钮或按下键盘 `F5` 开始编译和调试。

## Python

>[目录](#目录) | [说明](#说明)

...