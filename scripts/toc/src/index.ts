/* eslint-disable no-console */
import * as fs from 'fs'

import { localLang } from './language'
import {
  getLeetCodeProblemDetail,
  getLeetCodeProblemQuestionLists,
} from './services'
import { LanguageType, LeetCodeFolderInfo, LeetCodeProblemInfo } from './type'
import {
  getFolderMethodToCodes,
  getLeetCodeProblemDetailCode,
  getLeetCodeProblemDetailDirectory,
  getSubFileInfos,
} from './utils'

class Toc {
  leetCodePath = './LeetCode'

  leetCodeFolderInfos: LeetCodeFolderInfo[] = []

  leetCodeProblemLists: LeetCodeProblemInfo[] = []

  async start() {
    await this.initData()
    this.generateLeetCodeReadmeDirectory('cn')
    this.generateLeetCodeReadmeDirectory('en')
    const folderNames = process.argv.slice(2)
    if (folderNames.length > 0) {
      // 过滤只处理指定文件夹
      const folderInfos = this.leetCodeFolderInfos.filter((folder) => {
        return folderNames.includes(folder.folderName)
      })
      await this.generateLeetCodeProblemDetails('cn', folderInfos)
      await this.generateLeetCodeProblemDetails('en', folderInfos)
    } else {
      await this.generateLeetCodeProblemDetails('cn')
      await this.generateLeetCodeProblemDetails('en')
    }
  }

  async initData() {
    console.log('zain>>>>>🚀 | 开始：初始化加载数据')
    this.loadLeetCodeFolderInfos()
    await this.loadLeetCodeAllProblemLists()
    console.log('zain>>>>>🚀 | 完成：初始化加载数据')
  }

  loadLeetCodeFolderInfos() {
    console.log('zain>>>>>🚀 | 开始：加载 LeetCode 文件夹下所有子文件夹信息')
    const files = fs.readdirSync(this.leetCodePath)
    const folderInfos = files
      .filter((file) => {
        const filePath = `${this.leetCodePath}/${file}`
        const fileStats = fs.statSync(filePath)
        return fileStats.isDirectory()
      })
      .map((file) => {
        const splitStr = file.split('. ')
        const firstStr = splitStr.shift() || ''
        const lastStr = splitStr.join('. ')
        const firstNumber = Number(firstStr)
        const filePath = `${this.leetCodePath}/${file}`
        const subFileInfos = getSubFileInfos(filePath)
        return {
          folderName: file,
          number: firstNumber !== 0 && !firstNumber ? firstStr : firstNumber,
          name: lastStr,
          subFileInfos,
        }
      })
    const numberFolderInfos = folderInfos
      .filter((file) => typeof file.number === 'number')
      .sort((file1, file2) => {
        return file1.number > file2.number ? 0 : -1
      })
    const stringFolderInfos = folderInfos.filter(
      (file) => typeof file.number !== 'number'
    )
    this.leetCodeFolderInfos = [...numberFolderInfos, ...stringFolderInfos]
    console.log('zain>>>>>🚀 | 完成：加载 LeetCode 文件夹下所有子文件夹信息')
  }

  async loadLeetCodeAllProblemLists(skip = 0, limit = 100) {
    if (skip === 0) {
      console.log('zain>>>>>🚀 | 开始：LeetCode 题目列表加载')
      this.leetCodeProblemLists = []
    }
    console.log(
      `zain>>>>>🚀 | 进行中：LeetCode 题目列表，正在加载第${skip / limit + 1}页`
    )
    const lists = await getLeetCodeProblemQuestionLists(skip, limit)
    if (lists?.length > 0) {
      this.leetCodeProblemLists = [...this.leetCodeProblemLists, ...lists]
      await this.loadLeetCodeAllProblemLists(skip + limit)
    } else {
      console.log('zain>>>>>🚀 | 完成：LeetCode 题目列表加载')
    }
  }

  generateLeetCodeReadmeDirectory(language: LanguageType) {
    console.log('zain>>>>>🚀 | 开始：生成 LeetCode 题目列表，', language)
    let writeContent = localLang.leetCodeReadmeDirectorySwitchLang[language]
    writeContent += '# LeetCode\n\n'
    writeContent += localLang.leetCodeReadmeDirectoryTableHeader[language]
    writeContent += ':-:|:--|:--\n'
    this.leetCodeFolderInfos.forEach((item) => {
      const problemInfo = this.leetCodeProblemLists.find(
        (problem) => `${problem.id}` === `${item.number}`
      )
      const link = `./${item.folderName.replace(/ /g, '%20')}/${
        localLang.readmeFileName[language]
      }`
      const title =
        language === 'en' ? problemInfo?.title : problemInfo?.titleCn
      const programLangs = Array.from(
        new Set(
          item.subFileInfos
            .filter((file) => !!file.programLang)
            .map((file) => file.programLang)
        )
      )
      writeContent += `${
        item.number
      } | [${title}](${link}) | ${programLangs.join(', ')}`
      writeContent += '\n'
    })
    fs.writeFileSync(
      `${this.leetCodePath}/${localLang.readmeFileName[language]}`,
      writeContent
    )
    console.log('zain>>>>>🚀 | 完成：生成 LeetCode 题目列表，', language)
  }

  async generateLeetCodeProblemDetails(
    language: LanguageType,
    folderInfos?: LeetCodeFolderInfo[]
  ) {
    console.log('zain>>>>>🚀 | 开始：生成 LeetCode 题目详情，', language)
    const folders = folderInfos || this.leetCodeFolderInfos
    for (let i = 0; i < folders.length; i += 1) {
      const folder = folders[i]
      console.log(
        `zain>>>>>🚀 | 进行中：正在生成题目详情【${folder.folderName}】`
      )
      const problemInfo = this.leetCodeProblemLists.find(
        (problem) => `${problem.id}` === `${folder.number}`
      )
      if (problemInfo) {
        const mapMethodToCodes = getFolderMethodToCodes(folder)
        let writeContent = localLang.leetCodeProblemDetailSwitchLang[language]
        writeContent += getLeetCodeProblemDetailDirectory(
          mapMethodToCodes,
          language
        )
        writeContent += `# ${localLang.title[language]}\n\n`
        writeContent += `>[${localLang.directory[language]}](#${localLang.directory[language]})\n\n`
        writeContent += `${problemInfo.id}.&nbsp;${
          language === 'cn' ? problemInfo.titleCn : problemInfo.title
        }\n\n`
        // eslint-disable-next-line no-await-in-loop
        const problemDetail = await getLeetCodeProblemDetail(
          problemInfo.titleSlug
        )
        writeContent +=
          language === 'cn'
            ? problemDetail.translatedContent
            : problemDetail.content
        writeContent += '\n\n'
        writeContent += `# ${localLang.solution[language]}\n\n`
        writeContent += getLeetCodeProblemDetailCode(
          folder,
          mapMethodToCodes,
          this.leetCodePath,
          language
        )
        fs.writeFileSync(
          `${this.leetCodePath}/${folder.folderName}/${localLang.readmeFileName[language]}`,
          writeContent
        )
      } else {
        console.log(
          `zain>>>>>🚀 | 进行中：生成题目失败【${folder.folderName}】`
        )
      }
    }
    console.log('zain>>>>>🚀 | 完成：生成 LeetCode 题目详情，', language)
  }
}

const toc = new Toc()

toc.start()
