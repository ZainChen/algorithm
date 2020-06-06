from tkinter import *
import windnd

# ===========================================================
# 功能函数
# ===========================================================
def insertEndDisabled(text: Text, content: str):
    """输入框控件，尾部输入字符串后，禁止编辑"""
    text.config(state=NORMAL)  # 启用输入框编辑
    text.insert(END, content)  # 控制台输入框输入文本
    text.config(state=DISABLED)  # 禁用输入框编辑
    text.see(END)  # 查看尾部部数据

def filePathInsert(files: list):
    msg = '\n'.join((item.decode('gbk') for item in files))
    insertEndDisabled(consoleText, msg)


# --------------------
# leetcode README.md 文件智能生成或修改
# --------------------




# ===========================================================
# tkinter 控件创建及关联
# ===========================================================
window = Tk()  # 创建主窗口

window.title('ZainJane Windows')  # 主窗口标题
window.geometry('510x400')  # 主窗口初始宽高
window.resizable(0, 0) # 防止用户调整尺寸

# --------------------
# 顶部区域
# --------------------
topFrame = Frame(window, bg='#ddd')  # 框架控件
topFrame.pack(side=TOP, fill=X)

# --------------------
# 文件或文件夹路径，输入控件
# --------------------

filePathFrame = Frame(topFrame, bg='#ccc')  # 框架控件
filePathFrame.pack(side=LEFT, padx=8, pady=8)  # 停靠在父控件下方，水平填充

filePathTopFrame = Frame(filePathFrame)
filePathTopFrame.pack(side=TOP)

filePathBottomFrame = Frame(filePathFrame)
filePathBottomFrame.pack(side=BOTTOM)

filePathLabel = Label(filePathTopFrame, text="请拖入文件或文件夹：", width=21, anchor=W)
filePathLabel.pack(side=LEFT)

filePathClearButton = Button(filePathTopFrame, text="清空路径")
filePathClearButton.pack(side=RIGHT)

filePathListbox = Listbox(filePathBottomFrame, width=30, height=11)
filePathListbox.pack()

# --------------------
# 功能选择和执行区域
# --------------------
funSelectConfirmFrame = Frame(topFrame, bg='#bbb')  # 框架控件
funSelectConfirmFrame.pack(side=LEFT, fill=Y, padx=8, pady=8)  # 停靠在父控件下方，水平填充


bbb = Button(funSelectConfirmFrame, text="aaaa")
bbb.pack(side=TOP)


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
# 控件逻辑
# ===========================================================

# 列表控件拖入文件或文件夹路径
windnd.hook_dropfiles(filePathListbox, func=filePathInsert)



# ===========================================================
# 进入消息循环，显示窗口界面
# ===========================================================
window.mainloop()
