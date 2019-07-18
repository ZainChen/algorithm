[English](./README.md) | 简体中文

# 目录

>- [说明](#说明)
>- [编译及调试环境配置](#编译及调试环境配置)
>    - [C/C++](#C/C++)
>       - [安装C/C++扩展](#安装C/C++扩展)
>       - [配置MinGw](#配置MinGw)
>       - [配置.vscode(C/C++)](#配置.vscode(C/C++))
>    - [JavaScript](#JavaScript)
>    - [Python](#Python)

# 说明

刷题，算法总结，算法库。包含语言：`C/C++`、`JavaScript`、`Python` ...

# 编译及调试环境配置

这里用的是 `vscode` 配置各种语言的编译和调试环境。

## C/C++

### 安装C/C++扩展

`vscode` 扩展中心搜索 `C/C++` 下载并安装扩展。

### 配置MinGw

MinGw

### 配置.vscode(C/C++)

`./.vscode` 文件夹下添加下列配置文件：[launch.json](./.vscode/launch.json)、[c_cpp_properties.json](./.vscode/c_cpp_properties.json)、[settings.json](./.vscode/settings.json)、[tasks.json](./.vscode/tasks.json)

#### 文件-1

具体说明见注释，需注意把 `"miDebuggerPath"` 的值改为自己的 `MinGW` 安装路径。

[launch.json](./.vscode/launch.json)

```json
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

#### 文件-2

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

## JavaScript

## Python