::隐藏 cmd 窗口

@echo off
if "%1"=="h" goto begin
start mshta vbscript:createobject("wscript.shell").run("""%~nx0"" h",0)(window.close)&&exit
:begin

::以下为正常批处理命令，不可含有pause set/p等交互命令

tasklist -v | findstr "python31" > NUL
if ErrorLevel 1 (
  python3 ./toc/toc.py
) else (
  python ./toc/toc.py
)

pause
