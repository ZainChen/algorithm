import tkinter as tk # 引入tkinter模块，并命名为tk
from tkinter import Button
from tkinter import Canvas as C
from tkinter import Text

win = tk.Tk() # 创建主窗口

win.title("Hello")  # 标题
win.geometry("400x400+400+200")  # 大小和位置
text = "Hello, Majesty!" # 要显示的内容
b = tk.Label(win, text=text).pack()

Text(win, width=10, height=10).pack()

b = Button(win, text="close", command=win.quit).pack()
Button(win, text="0", underline=0,command=win.quit).pack()   # 下划线
Button(
    win, text="1",
    activeforeground="#ff00ff",
    activebackground="#00ff00",
    state="active"
).pack() # 设置作用中的背景色与前景色,状态设置为作用中

coord = 50,50,200,200
c = C(win)
c.create_arc(coord, start=0, extent = 120, fill="red")
c.pack()

c = C(win)
c.create_bitmap(40,40, bitmap="error")
c.pack()


# 进入消息循环，显示窗口界面
win.mainloop()