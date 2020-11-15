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
        dirString = i.decode('gbk')
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

def readmeResetGroupCheckButton():
    """README 生成方式复选框，按组单选，重新生成 README"""
    readmeResetCheckButton.select()
    readmeResetBooleanVar.set(True)
    insertEndDisabled(consoleText, '重新生成 README\n', 'showTime')

def readmeDirectoryGroupCheckButton():
    """README 总目录生成复选框，选中后只能生成总目录"""
    if readmeDirectoryBooleanVar.get() == True:
        readmeDirectoryBooleanVar.set(False)
        insertEndDisabled(consoleText, '取消 README 总目录生成\n', 'showTime')
    else:
        readmeDirectoryBooleanVar.set(True)
        insertEndDisabled(consoleText, 'README 总目录生成\n', 'showTime')

# --------------------
# 文件处理生成 README 功能
# --------------------
def getDeduplicationFolderPaths():
    """获取去重后的所有文件夹路径"""
    filePathBoxContent: tuple = filePathListbox.get(0, END)
    return tuple(set(filePathBoxContent))

def getPathChildrenFolderAll(path: str):
    """获取指定路径下的所有子目录"""
    folderAll: list = []
    for root, dirs, files in os.walk(path):
        if path is not root:
            folderAll.append(root)
    return tuple(set(folderAll))

def getChildrenFolderAll():
    """获取选中路径下的所有子目录"""
    folderDeduplication: tuple = getDeduplicationFolderPaths()
    folderAll: list = []
    for path in folderDeduplication:
        for root, dirs, files in os.walk(path):
            if path is not root:
                folderAll.append(root)
                # print(root)  # 当前目录路径
                # print(dirs)  # 当前路径下的所有子目录
                # print(files)
    return tuple(set(folderAll))

def getProcessFolder():
    """根据选择的文件处理类型，获取需要处理的所有文件夹"""
    if fileSelectBooleanVar.get() == True:
        folderDeduplication: tuple = getDeduplicationFolderPaths()
        return folderDeduplication
    else:
        return getChildrenFolderAll()

def getProgramLangSuffixDict():
    """获取编程语言后缀对应编程语言字典"""
    programLangSuffixDict: dict = {
        '.c': 'C',
        '.cpp': 'C++',
        '.js': 'JavaScript',
        '.py': 'Python',
        '.ts': 'TypeScript'
    }
    return programLangSuffixDict

def getProgramLangDirectoryIndex():
    """编程语言对应目录索引"""
    langDirectoryIndex: dict = {
        '.c': 'code-c',
        '.cpp': 'code-cpp',
        '.js': 'code-js',
        '.py': 'code-python',
        '.ts': 'code-ts'
    }
    return langDirectoryIndex

def getPathFileListDict(path: str):
    """获取指定文件夹下，所有文件(包含文件名、文件路径、文件后缀名)"""
    fileList: list = []
    for file in os.listdir(path):
        filePath = os.path.join(path, file)
        if not os.path.isdir(filePath):
            fileDict: dict = {}
            fileDict['filePath'] = filePath
            fileDict['fileNameSuffix'] = file
            splitext = os.path.splitext(file)
            fileDict['fileName'] = splitext[0]
            fileDict['fileSuffix'] = splitext[1]
            programLangSuffixDict = getProgramLangSuffixDict()
            if programLangSuffixDict.get(fileDict['fileSuffix']):
                fileDict['methodNumber'] = fileDict['fileName'].split('-')[-1]
            else:
                fileDict['methodNumber'] = ''
            fileList.append(fileDict)
    return fileList

def getMethodFilesDictList(files: list):
    """解析所有文件信息，获取所有方法对应的所有文件信息"""
    methodToFilesDictList: dict = {}
    for item in files:
        methodNumber = item.get('methodNumber')
        if methodNumber:
            if methodToFilesDictList.get(methodNumber):
                methodToFilesDictList[methodNumber].append(item)
            else:
                methodToFilesDictList.setdefault(methodNumber, [])
                methodToFilesDictList[methodNumber].append(item)
    return methodToFilesDictList

def generateReadmeCN(path: str, files: list):
    """处理指定文件夹，智能生成 README.CN.md"""
    writeContent: str = '[Leetcode](../README.CN.md) | [English](./README.md) | 简体中文\n\n'
    writeContent += '# 目录\n\n'
    writeContent += '>- [标题](#标题)\n'
    writeContent += '>- [解](#解)\n'
    methodFilesDictList: dict = getMethodFilesDictList(files)
    programLangDirectoryIndex: dict = getProgramLangDirectoryIndex()
    programLangSuffixDict = getProgramLangSuffixDict()
    for key, values in methodFilesDictList.items():
        strKey = str(key)
        writeContent += '>    - [方法'+strKey+'](#方法'+strKey+')\n'
        for item in values:
            langDirectory = programLangDirectoryIndex.get(item.get('fileSuffix'))
            writeContent += '>        - ['+langDirectory+'-'+strKey+'](#'+langDirectory+'-'+strKey+')\n'
    writeContent += '\n# 标题\n\n'
    writeContent += '>[目录](#目录)\n\n\n'
    writeContent += '[[[题目]]]\n\n\n'
    writeContent += '# 解\n\n'
    for key, values in methodFilesDictList.items():
        strKey = str(key)
        writeContent += '## 方法'+strKey+'\n\n'
        writeContent += '>[目录](#目录) | [标题](#标题) | '
        for item in values[:-1]:
            writeContent += '['+programLangSuffixDict.get(item.get('fileSuffix'))+'](#'+programLangDirectoryIndex.get(item.get('fileSuffix'))+'-'+strKey+'), '
        if values[-1]:
            writeContent += '['+programLangSuffixDict.get(values[-1].get('fileSuffix'))+'](#'+programLangDirectoryIndex.get(values[-1].get('fileSuffix'))+'-'+strKey+')'
        writeContent += '\n\n'
        writeContent += '[[[方法简介]]]\n\n'
        writeContent += '### 分析\n\n'
        writeContent += '[[[方法分析]]]\n\n'
        writeContent += '### 代码\n\n'
        for item in values:
            writeContent += '#### '+programLangDirectoryIndex.get(item.get('fileSuffix'))+'-'+strKey+'\n\n'
            writeContent += '>[目录](#目录) | [标题](#标题) | [分析](#方法'+strKey+') | ['+item.get('fileNameSuffix')+'](./'+item.get('fileNameSuffix')+' "'+item.get('fileNameSuffix')+'")\n\n'
            writeContent += '```'+programLangSuffixDict.get(item.get('fileSuffix'))+'\n'
            readFile = open(item.get('filePath'), 'r', encoding='utf-8')
            readFileContent: list = readFile.readlines()
            for content in readFileContent:
                writeContent += content
            readFile.close()
            writeContent += '\n```\n'
            index = values.index(item)
            if index < len(values) - 1:
                writeContent += '\n'
    writeFileName = os.path.join(path, 'README.CN.md')
    writeOpen = open(writeFileName, 'w', encoding='utf-8')
    writeOpen.write(writeContent)
    # writeOpen.write(str(files).replace("'", '"'))
    # writeOpen.write('\n\n\n')
    # writeOpen.write(str(methodFilesDictList).replace("'", '"'))
    writeOpen.close()

def generateReadmeEN(path: str, files: list):
    """处理指定文件夹，智能生成 README.md"""
    writeContent: str = '[Leetcode](../README.md) | English | [简体中文](./README.CN.md)\n\n'
    writeContent += '# Directory\n\n'
    writeContent += '>- [Title](#Title)\n'
    writeContent += '>- [Solution](#Solution)\n'
    methodFilesDictList: dict = getMethodFilesDictList(files)
    programLangDirectoryIndex: dict = getProgramLangDirectoryIndex()
    programLangSuffixDict = getProgramLangSuffixDict()
    for key, values in methodFilesDictList.items():
        strKey = str(key)
        writeContent += '>    - [Method'+strKey+'](#Method'+strKey+')\n'
        for item in values:
            langDirectory = programLangDirectoryIndex.get(item.get('fileSuffix'))
            writeContent += '>        - ['+langDirectory+'-'+strKey+'](#'+langDirectory+'-'+strKey+')\n'
    writeContent += '\n# Title\n\n'
    writeContent += '>[Directory](#Directory)\n\n\n'
    writeContent += '[[[topic]]]\n\n\n'
    writeContent += '# Solution\n\n'
    for key, values in methodFilesDictList.items():
        strKey = str(key)
        writeContent += '## Method'+strKey+'\n\n'
        writeContent += '>[Directory](#Directory) | [Title](#Title) | '
        for item in values[:-1]:
            writeContent += '['+programLangSuffixDict.get(item.get('fileSuffix'))+'](#'+programLangDirectoryIndex.get(item.get('fileSuffix'))+'-'+strKey+'), '
        if values[-1]:
            writeContent += '['+programLangSuffixDict.get(values[-1].get('fileSuffix'))+'](#'+programLangDirectoryIndex.get(values[-1].get('fileSuffix'))+'-'+strKey+')'
        writeContent += '\n\n'
        writeContent += '[[[Method Introduction]]]\n\n'
        writeContent += '### Analyze\n\n'
        writeContent += '[[[Method analysis]]]\n\n'
        writeContent += '### Code\n\n'
        for item in values:
            writeContent += '#### '+programLangDirectoryIndex.get(item.get('fileSuffix'))+'-'+strKey+'\n\n'
            writeContent += '>[Directory](#Directory) | [Title](#Title) | [Analyze](#Method'+strKey+') | ['+item.get('fileNameSuffix')+'](./'+item.get('fileNameSuffix')+' "'+item.get('fileNameSuffix')+'")\n\n'
            writeContent += '```'+programLangSuffixDict.get(item.get('fileSuffix'))+'\n'
            readFile = open(item.get('filePath'), 'r', encoding='utf-8')
            readFileContent: list = readFile.readlines()
            for content in readFileContent:
                writeContent += content
            readFile.close()
            writeContent += '\n```\n'
            index = values.index(item)
            if index < len(values) - 1:
                writeContent += '\n'
    writeFileName = os.path.join(path, 'README.md')
    writeOpen = open(writeFileName, 'w', encoding='utf-8')
    writeOpen.write(writeContent)
    # writeOpen.write(str(files).replace("'", '"'))
    # writeOpen.write('\n\n\n')
    # writeOpen.write(str(methodFilesDictList).replace("'", '"'))
    writeOpen.close()

def sortfolderChildrenPaths(path: str, folderChildrenPaths: tuple):
    """排序子路径"""
    pathsList: list = []
    for childrenPaths in folderChildrenPaths:
        pathDict: dict = {}
        pathDict['Path'] = childrenPaths
        pathDict['FolderName'] = childrenPaths.replace(path+'\\', '')
        splitName = pathDict['FolderName'].split(". ", 1)
        if len(splitName) > 1:
            pathDict['NoStr'] = splitName[0]
            pathDict['Name'] = splitName[1]
            pathDict['No'] = int(pathDict['NoStr'])
        pathsList.append(pathDict)
    pathsList = sorted(pathsList, key=lambda x:x["No"])
    return pathsList

def generateReadmeDirectoryCN(path: str, folderChildrenPaths: tuple):
    """生成总目录索引，中文"""
    insertEndDisabled(consoleText, 'zain>>>>'+path+'\n', 'showTime')

def generateReadmeDirectoryEN(path: str, folderChildrenPaths: tuple):
    """生成总目录索引，英文"""
    writeContent: str = 'English | [简体中文](./README.CN.md)\n\n'
    splitPath = path.split('\\')
    if splitPath:
        writeContent += '# ' + splitPath[len(splitPath) - 1] + '\n\n'
    writeContent += '**#**|**Title**|**Solution**\n'
    writeContent += ':-:|:--|:--\n'
    programLangSuffixDict: dict = getProgramLangSuffixDict()
    sortChildrenPaths: list = sortfolderChildrenPaths(path, folderChildrenPaths)
    for childrenPath in sortChildrenPaths:
        splitFolderName = childrenPath['FolderName'].split('\\')
        if len(splitFolderName) == 1:
            writeContent += childrenPath['NoStr'] + ' | [' + childrenPath['Name'] + '](./' + childrenPath['FolderName'].replace(' ', '%20') + '/README.md) | '
            files: list = getPathFileListDict(childrenPath['Path'])
            markHasLang: dict = {}
            langList: list = []
            for fileItem in files:
                if programLangSuffixDict.get(fileItem['fileSuffix']):
                    if markHasLang.get(fileItem['fileSuffix']) is not True:
                        markHasLang[fileItem['fileSuffix']] = True
                        langList.append(programLangSuffixDict.get(fileItem['fileSuffix']))
            for lang in langList:
                writeContent += lang
                index = langList.index(lang)
                if index < len(langList) - 1:
                    writeContent += ', '
            writeContent += '\n'
    writeFileName = os.path.join(path, 'README.md')
    writeOpen = open(writeFileName, 'w', encoding='utf-8')
    writeOpen.write(writeContent)
    writeOpen.close()

def generateReadme(path: str):
    """处理指定文件夹，智能生成 README"""
    files: list = getPathFileListDict(path)
    generateReadmeCN(path, files)
    generateReadmeEN(path, files)

def generateAllReadme(folderPaths: tuple):
    """对选中的所有文件夹，智能生成 README"""
    for path in folderPaths:
        generateReadme(path)

def generateReadmeDirectory(folderDeduplication: tuple):
    """生成总目录索引"""
    for path in folderDeduplication:
        folderChildrenPaths: list = getPathChildrenFolderAll(path)
        generateReadmeDirectoryCN(path, folderChildrenPaths)
        generateReadmeDirectoryEN(path, folderChildrenPaths)

def readmeDirectoryStart():
    """总目录索引表生成"""
    insertEndDisabled(consoleText, '总目录索引表生成开始.\n', 'showTime')
    insertEndDisabled(consoleText, '开始获取所有文件夹路径.\n', 'showTime')
    taskProgressbar.config(maximum=1000, value=0)
    folderDeduplication: tuple = getDeduplicationFolderPaths()
    taskProgressbar.config(maximum=1000, value=200)
    if folderDeduplication:
        insertEndDisabled(consoleText, '所有文件夹路径获取完成.\n', 'showTime')
        print(folderDeduplication)
        generateReadmeDirectory(folderDeduplication)
        insertEndDisabled(consoleText, '总目录索引表生成完成.\n', 'showTime')
    else:
        insertEndDisabled(consoleText, '没有要处理的文件夹.\n', 'showTime')
    taskProgressbar.config(maximum=1000, value=1000)

def topicReadmeStart():
    """具体题目 readme 生成"""
    insertEndDisabled(consoleText, '文件处理开始.\n', 'showTime')
    insertEndDisabled(consoleText, '开始获取所有文件夹路径.\n', 'showTime')
    taskProgressbar.config(maximum=1000, value=0)
    folderPaths: tuple = getProcessFolder()
    taskProgressbar.config(maximum=1000, value=200)
    if folderPaths:
        insertEndDisabled(consoleText, '所有文件夹路径获取完成.\n', 'showTime')
        print(folderPaths)
        generateAllReadme(folderPaths)
        insertEndDisabled(consoleText, '文件处理完成.\n', 'showTime')
    else:
        insertEndDisabled(consoleText, '没有要处理的文件夹.\n', 'showTime')
    taskProgressbar.config(maximum=1000, value=1000)

def startTack():
    """文件处理开始"""
    if readmeDirectoryBooleanVar.get() == True:
        readmeDirectoryStart()
    else:
        topicReadmeStart()

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
fileSelectCheckButton = Checkbutton(funSelectConfirmLeftFrame, text="处理列表所有文件夹", command=fileSelectGroupCheckButton)
fileSelectCheckButton.select()
fileSelectCheckButton.pack(anchor=W, padx=(16, 0))
fileAllChildBooleanVar = BooleanVar()
fileAllChildBooleanVar.set(False)
fileAllChildCheckButton = Checkbutton(funSelectConfirmLeftFrame, text="处理列表所有子文件夹", command=fileAllChildGroupCheckButton)
fileAllChildCheckButton.pack(anchor=W, padx=(16, 0))

Label(funSelectConfirmLeftFrame, text="README 生成：").pack(anchor=W, pady=(8, 0))
readmeResetBooleanVar = BooleanVar()
readmeResetBooleanVar.set(True)
readmeResetCheckButton = Checkbutton(funSelectConfirmLeftFrame, text="重新生成 README", command=readmeResetGroupCheckButton)
readmeResetCheckButton.select()
readmeResetCheckButton.pack(anchor=W, padx=(16, 0))

Label(funSelectConfirmLeftFrame, text="README 总目录：").pack(anchor=W, pady=(8, 0))
readmeDirectoryBooleanVar = BooleanVar()
readmeDirectoryBooleanVar.set(False)
readmeDirectoryCheckButton = Checkbutton(funSelectConfirmLeftFrame, text="生成 README 总目录", command=readmeDirectoryGroupCheckButton)
readmeDirectoryCheckButton.pack(anchor=W, padx=(16, 0))

Button(funSelectConfirmRightFrame, text="开始", command=startTack).pack(side=TOP)

# 进度条控件
taskProgressbar = ttk.Progressbar(funSelectConfirmRightFrame, length=219, mode="determinate", orient=VERTICAL)
taskProgressbar.pack()
taskProgressbar.config(maximum=1000, value=0)

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
