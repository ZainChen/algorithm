#!/usr/bin/python3
from tkinter import *
from tkinter import ttk
import os
import windnd
import time

# ===========================================================
# 功能函数
# ===========================================================
# --------------------
# 控件交互功能
# --------------------
def insertEndDisabled(text: Text, content: str, showTime: str = 'false'):
    """输入框控件，尾部输入字符串后，禁止编辑"""
    if showTime != 'false':
        content = time.strftime("%Y-%m-%d %H:%M:%S", time.localtime()) + '：' + content
    text.config(state=NORMAL)  # 启用输入框编辑
    text.insert(END, content)  # 控制台输入框输入文本
    text.config(state=DISABLED)  # 禁用输入框编辑
    text.see(END)  # 查看尾部部数据

def filePathListboxInsert(files: list):
    """路径列表框控件，鼠标拖入文件夹后，插入路径"""
    count: int = 0
    for i in files:
        dirString = i.decode('utf-8')
        if os.path.isdir(dirString):
            filePathListbox.insert('end', dirString)
            count = count + 1
            insertEndDisabled(consoleText, '添加'+dirString+'.\n', 'showTime')
        else:
            insertEndDisabled(consoleText, '不是文件夹:'+dirString+'\n', 'showTime')
    if count > 0:
        insertEndDisabled(consoleText, '添加文件夹数量：'+str(count)+'\n', 'showTime')
    else:
        insertEndDisabled(consoleText, '文件夹添加失败\n', 'showTime')

def deleteSelectFilePathListbox():
    """路径列表框控件，删除选中内容"""
    filePathListbox.delete(ACTIVE)
    insertEndDisabled(consoleText, '删除选中的文件夹.\n', 'showTime')

def deleteFilePathListbox():
    """路径列表框控件，删除所有内容"""
    filePathListbox.delete(0, END)
    insertEndDisabled(consoleText, '删除所有文件夹.\n', 'showTime')

def fileSelectGroupCheckButton():
    """文件处理类型复选框，按组单选，处理当前选中文件夹"""
    fileAllChildCheckButton.deselect()
    fileAllChildBooleanVar.set(False)
    fileSelectCheckButton.select()
    fileSelectBooleanVar.set(True)
    insertEndDisabled(consoleText, '处理当前选中文件夹\n', 'showTime')

def fileAllChildGroupCheckButton():
    """文件处理类型复选框，按组单选，处理所有子文件夹"""
    fileSelectCheckButton.deselect()
    fileSelectBooleanVar.set(False)
    fileAllChildCheckButton.select()
    fileAllChildBooleanVar.set(True)
    insertEndDisabled(consoleText, '处理所有子文件夹\n', 'showTime')

def readmeAddGroupCheckButton():
    """README 生成方式复选框，按组单选，增量修正 README"""
    readmeResetCheckButton.deselect()
    readmeResetBooleanVar.set(False)
    readmeAddCheckButton.select()
    readmeAddBooleanVar.set(True)
    insertEndDisabled(consoleText, '增量修正 README\n', 'showTime')

def readmeResetGroupCheckButton():
    """README 生成方式复选框，按组单选，重新生成 README"""
    readmeAddCheckButton.deselect()
    readmeAddBooleanVar.set(False)
    readmeResetCheckButton.select()
    readmeResetBooleanVar.set(True)
    insertEndDisabled(consoleText, '重新生成 README\n', 'showTime')


# --------------------
# 文件处理生成 README 功能
# --------------------



# ===========================================================
# tkinter 控件创建及关联
# ===========================================================
window = Tk()  # 创建主窗口

window.title('ZainJane - algorithm README 智能生成或修改工具')  # 主窗口标题
window.geometry('510x400')  # 主窗口初始宽高
window.resizable(0, 0) # 防止用户调整尺寸

# --------------------
# 顶部区域
# --------------------
topFrame = Frame(window, bg='#ddd')  # 框架控件
topFrame.pack(side=TOP, fill=X)

# --------------------
# 文件夹，输入控件
# --------------------
filePathFrame = Frame(topFrame, bg='#ccc')  # 框架控件
filePathFrame.pack(side=LEFT, padx=8, pady=8)  # 停靠在父控件下方，水平填充
filePathTopFrame = Frame(filePathFrame)
filePathTopFrame.pack(side=TOP)
filePathBottomFrame = Frame(filePathFrame)
filePathBottomFrame.pack(side=BOTTOM)

Label(filePathTopFrame, text="请拖入文件夹：", width=18, anchor=W).pack(side=LEFT)

Button(filePathTopFrame, text="删除选中", command=deleteSelectFilePathListbox).pack(side=LEFT)
Button(filePathTopFrame, text="删除所有", command=deleteFilePathListbox).pack()

# 文件夹列表框控件滚动条
filePathListboxScrollbarY = Scrollbar(filePathBottomFrame, orient=VERTICAL)
filePathListboxScrollbarY.pack(side=RIGHT, fill=Y)
filePathListboxScrollbarX = Scrollbar(filePathBottomFrame, orient=HORIZONTAL)
filePathListboxScrollbarX.pack(side=BOTTOM, fill=X)
# 文件夹列表框控件
filePathListbox = Listbox(
    filePathBottomFrame,
    yscrollcommand=filePathListboxScrollbarY.set,  # 文件夹列表框控件关联滚动条
    xscrollcommand=filePathListboxScrollbarX.set,
    width=33,
    height=11
)
filePathListbox.pack()
# 文件夹列表框控件关联滚动条
filePathListboxScrollbarY.config(command=filePathListbox.yview)
filePathListboxScrollbarX.config(command=filePathListbox.xview)

windnd.hook_dropfiles(filePathListbox, func=filePathListboxInsert)  # 列表控件拖入文件夹


# --------------------
# 功能选择和执行区域
# --------------------
funSelectConfirmFrame = Frame(topFrame)  # 框架控件
funSelectConfirmFrame.pack(side=RIGHT, fill=Y, padx=(0, 8), pady=8)
funSelectConfirmLeftFrame = Frame(funSelectConfirmFrame)
funSelectConfirmLeftFrame.pack(side=LEFT, fill=Y)
funSelectConfirmRightFrame = Frame(funSelectConfirmFrame, bg='#ccc')
funSelectConfirmRightFrame.pack(side=RIGHT, fill=Y)

Label(funSelectConfirmLeftFrame, text="文件处理类型：", width=28, anchor=W).pack()
fileSelectBooleanVar = BooleanVar()
fileSelectBooleanVar.set(True)
fileSelectCheckButton = Checkbutton(funSelectConfirmLeftFrame, text="处理当前选中文件夹", command=fileSelectGroupCheckButton)
fileSelectCheckButton.select()
fileSelectCheckButton.pack(anchor=W, padx=(16, 0))
fileAllChildBooleanVar = BooleanVar()
fileAllChildBooleanVar.set(False)
fileAllChildCheckButton = Checkbutton(funSelectConfirmLeftFrame, text="处理所有子文件夹", command=fileAllChildGroupCheckButton)
fileAllChildCheckButton.pack(anchor=W, padx=(16, 0))

Label(funSelectConfirmLeftFrame, text="README 生成：").pack(anchor=W, pady=(8, 0))
readmeAddBooleanVar = BooleanVar()
readmeAddBooleanVar.set(True)
readmeAddCheckButton = Checkbutton(funSelectConfirmLeftFrame, text="增量修正 README", command=readmeAddGroupCheckButton)
readmeAddCheckButton.select()
readmeAddCheckButton.pack(anchor=W, padx=(16, 0))
readmeResetBooleanVar = BooleanVar()
readmeResetBooleanVar.set(False)
readmeResetCheckButton = Checkbutton(funSelectConfirmLeftFrame, text="重新生成 README", command=readmeResetGroupCheckButton)
readmeResetCheckButton.pack(anchor=W, padx=(16, 0))

Button(funSelectConfirmRightFrame, text="开始").pack(side=TOP)

taskProgressbar = ttk.Progressbar(funSelectConfirmRightFrame, length=219, mode="determinate", orient=VERTICAL)
taskProgressbar.pack()
taskProgressbar.config(maximum=100, value=50)

# --------------------
# 控制台控件
# --------------------
consoleFrame = Frame(window)  # 框架控件
consoleFrame.pack(side=BOTTOM, fill=X)  # 停靠在父控件下方，水平填充

consoleText = Text(consoleFrame, height=12, width=70, state=DISABLED)  # 控制台输入框控件(bg="light yellow")
consoleText.pack(side=LEFT, fill=Y)  # 停靠在父控件左边，垂直填充

consoleScrollbar = Scrollbar(consoleFrame)  # 控制台滚动条控件
consoleScrollbar.pack(side=RIGHT, fill=Y)  # 停靠在父控件右边，垂直填充

consoleScrollbar.config(command=consoleText.yview)  # 控制台滚动条挂关联控制台输入框
consoleText.config(yscrollcommand=consoleScrollbar.set)  # 控制台输入框关联控制台滚动条

# ===========================================================
# 进入消息循环，显示窗口界面
# ===========================================================
window.mainloop()
