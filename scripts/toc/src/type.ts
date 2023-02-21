export type LanguageType = 'cn' | 'en'

export interface LeetCodeFolderInfo {
  folderName: string
  number: number | string
  name: string
  subFileInfos: FileInfo[]
}

export interface FileInfo {
  fullName: string
  name: string
  suffix: string
  programLang: string
  langTitle: string
}

export interface LeetCodeProblemInfo {
  id: string
  title: string
  titleCn: string
  titleSlug: string
}

export interface LeetCodeCommonResult {
  status: number
  statusText: string
  headers: object
  config: object
  request: object
}

export interface LeetCodeProblemResult extends LeetCodeCommonResult {
  data: {
    data: {
      problemsetQuestionList: {
        __typename: string
        questions: LeetCodeProblemOnLine[]
        hasMore: boolean
        total: number
      }
    }
  }
}

export interface LeetCodeProblemOnLine {
  __typename: string
  acRate: number
  difficulty: string
  freqBar: number
  paidOnly: boolean
  status: string
  frontendQuestionId: string
  isFavor: boolean
  solutionNum: number
  title: string
  titleCn: string
  titleSlug: string
  topicTags: {
    id: string
    name: string
    slug: string
    nameTranslated: string
    __typename: string
  }[]
  extra: {
    companyTagNum: number
    hasVideoSolution: boolean
    topCompanyTags: {
      imgUrl: string
      slug: string
      __typename: string
    }[]
    __typename: string
  }
}

export interface LeetCodeProblemDetailResult extends LeetCodeCommonResult {
  data: {
    data: {
      question: {
        questionId: string
        questionFrontendId: string
        categoryTitle: string
        boundTopicId: number
        title: string
        titleSlug: string
        content: string
        translatedTitle: string
        translatedContent: string
        isPaidOnly: boolean
        difficulty: string
        likes: number
        dislikes: number
        isLiked: boolean
        similarQuestions: string
        contributors: []
        langToValidPlayground: string
        topicTags: {
          name: string
          slug: string
          translatedName: string
          __typename: string
        }[]
        companyTagStats: null
        codeSnippets: {
          lang: string
          langSlug: string
          code: string
          __typename: string
        }[]
        stats: string
        hints: string[]
        solution: {
          id: string
          canSeeDetail: boolean
          __typename: string
        }
        status: string
        sampleTestCase: string
        metaData: string
        judgerAvailable: boolean
        judgeType: string
        mysqlSchemas: []
        enableRunCode: boolean
        envInfo: string
        book: null
        isSubscribed: boolean
        isDailyQuestion: boolean
        dailyRecordStatus: string
        editorType: string
        ugcQuestionId: null
        style: string
        exampleTestcases: string
        jsonExampleTestcases: string
        __typename: string
      }
    }
  }
}
