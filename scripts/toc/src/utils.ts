import * as fs from 'fs'

import { langTitleMap, programLangSuffixMap } from './constant'
import { localLang } from './language'
import { FileInfo, LanguageType, LeetCodeFolderInfo } from './type'

export const getSubFileInfos = (path: string): FileInfo[] => {
  const files = fs.readdirSync(path)
  return files
    .filter((file) => {
      const filePath = `${path}/${file}`
      const fileStats = fs.statSync(filePath)
      return !fileStats.isDirectory()
    })
    .map((file) => {
      const fullName = file
      const splitStr = file.split('.')
      const lastStr = splitStr.pop() || ''
      const suffix = `.${lastStr}`
      const name = splitStr.join('.')
      const programLang = (programLangSuffixMap.get(suffix) || '') as string
      const langTitle = (langTitleMap.get(suffix) || '') as string
      return {
        fullName,
        name,
        suffix,
        programLang,
        langTitle,
      }
    })
}

export const getFolderMethodToCodes = (folder: LeetCodeFolderInfo) => {
  const map = new Map<number, FileInfo[]>()
  folder.subFileInfos.forEach((file) => {
    if (file.programLang) {
      const method = parseInt(file.name.split('-').pop() || '', 10)
      const files = map.get(method) || []
      map.set(method, [...files, file])
    }
  })
  const mapEntries = Array.from(map)
  mapEntries.sort((a, b) => {
    return a[0] - b[0]
  })
  const sortedMap = new Map(mapEntries)
  return sortedMap
}

export const getLeetCodeProblemDetailDirectory = (
  mapMethodToCodes: Map<number, FileInfo[]>,
  language: LanguageType
) => {
  let content = ''
  content += `# ${localLang.directory[language]}\n\n`
  content += `>- [${localLang.title[language]}](#${localLang.title[language]})\n`
  content += `>- [${localLang.solution[language]}](#${localLang.solution[language]})\n`
  mapMethodToCodes.forEach((files, key) => {
    const methodStr = `${localLang.method[language]}${key}`
    content += `>    - [${methodStr}](#${methodStr})\n`
    files.forEach((file) => {
      const codeStr = `${file.langTitle}-${key}`
      content += `>        - [${codeStr}](#${codeStr})\n`
    })
  })
  content += '\n'
  return content
}

export const getLeetCodeProblemDetailCode = (
  folder: LeetCodeFolderInfo,
  mapMethodToCodes: Map<number, FileInfo[]>,
  leetCodePath: string,
  language: LanguageType
) => {
  let content = ''
  mapMethodToCodes.forEach((files, key) => {
    const methodStr = `${localLang.method[language]}${key}`
    content += `## ${methodStr}\n\n`
    const indexCodes: string[] = []
    files.forEach((file) => {
      indexCodes.push(`[${file.programLang}](#${file.langTitle}-${key})`)
    })
    content += `>[${localLang.directory[language]}](#${
      localLang.directory[language]
    }) | [${localLang.title[language]}](#${
      localLang.title[language]
    }) | ${indexCodes.join(', ')}\n\n`
    content += `### ${localLang.code[language]}\n\n`
    files.forEach((file) => {
      content += `#### ${file.langTitle}-${key}\n\n`
      content += `>[${localLang.directory[language]}](#${localLang.directory[language]}) | [${localLang.title[language]}](#${localLang.title[language]}) | [${methodStr}](#${methodStr}) | [${file.fullName}](./${file.fullName} "${file.fullName}")\n\n`
      content += `\`\`\`${file.programLang}\n`
      const fileData = fs.readFileSync(
        `${leetCodePath}/${folder.folderName}/${file.fullName}`,
        'utf8'
      )
      content += `${fileData}\n`
      content += `\`\`\`\n\n`
    })
  })
  return content
}
