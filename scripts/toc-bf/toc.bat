
@echo off

chcp 65001

::隐藏 cmd 窗口
REM if "%1"=="h" goto begin
REM start mshta vbscript:createobject("wscript.shell").run("""%~nx0"" h",0)(window.close)&&exit
REM :begin

::以下为正常批处理命令，不可含有pause set/p等交互命令

echo 正在识别 Python 环境，请稍等...

tasklist -v | findstr "python3" > NUL
echo 识别完成.
if ErrorLevel 1 (
  python ./toc/toc.py
) else (
  python3 ./toc/toc.py
)

REM pause
