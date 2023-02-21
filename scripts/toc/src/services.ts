/* eslint-disable no-console */
import axios from 'axios'

import {
  LeetCodeProblemDetailResult,
  LeetCodeProblemInfo,
  LeetCodeProblemOnLine,
  LeetCodeProblemResult,
} from './type'

/**
 * 获取 LeetCode 题目列表
 * 直接网页复制请求的 curl 到 postman 中，使用 Code snippet 自动生成 NodeJs - Axios 代码，复制到这里
 * @param skip 从第个数据开始，根据 limit 的值设置页数，limit 为 100 时，skip = 100 为第二页
 * @param limit 每页的数据条数，最大 100
 * @returns 题目列表
 */
export const getLeetCodeProblemQuestionLists = async (
  skip = 0,
  limit = 100
): Promise<LeetCodeProblemInfo[]> => {
  const data = JSON.stringify({
    query:
      '\n    query problemsetQuestionList($categorySlug: String, $limit: Int, $skip: Int, $filters: QuestionListFilterInput) {\n  problemsetQuestionList(\n    categorySlug: $categorySlug\n    limit: $limit\n    skip: $skip\n    filters: $filters\n  ) {\n    hasMore\n    total\n    questions {\n      acRate\n      difficulty\n      freqBar\n      frontendQuestionId\n      isFavor\n      paidOnly\n      solutionNum\n      status\n      title\n      titleCn\n      titleSlug\n      topicTags {\n        name\n        nameTranslated\n        id\n        slug\n      }\n      extra {\n        hasVideoSolution\n        topCompanyTags {\n          imgUrl\n          slug\n          numSubscribed\n        }\n      }\n    }\n  }\n}\n    ',
    variables: {
      categorySlug: '',
      skip,
      limit,
      filters: {},
    },
  })

  const config = {
    method: 'post',
    url: 'https://leetcode.cn/graphql/',
    headers: {
      authority: 'leetcode.cn',
      accept: '*/*',
      'accept-language': 'zh-CN,zh;q=0.9,en;q=0.8',
      authorization: '',
      baggage:
        'sentry-environment=production,sentry-release=l6bxFXRwFAer5cZVv7D_d,sentry-transaction=%2Fproblemset%2F%5Bslug%5D,sentry-public_key=7e9f5c528a9f4ee3b2bd215153cb69a7,sentry-trace_id=1b02434bf67d4787b47240c3ea6f6bea,sentry-sample_rate=0.05',
      'cache-control': 'no-cache',
      'content-type': 'application/json',
      cookie:
        'csrftoken=6hiW9JvViHIyiQ7DYQGRxXsEGg3aE1rX2AizHR8avTJCQVCrm0D96vB1pdTx00tM; aliyungf_tc=f5108f3262132a580800025dc09154eec4e66bc2f7d79225354d54205907b124; Hm_lvt_f0faad39bcf8471e3ab3ef70125152c3=1674873464; gr_user_id=9d029b33-e646-4586-949b-b4ec50b68219; _bl_uid=90lLydhnfetcnRekmzvCz603U2n3; a2873925c34ecbd2_gr_last_sent_cs1=zainchen-u; Hm_lvt_fa218a3ff7179639febdb15e372f411c=1674874794; NEW_PROBLEMLIST_PAGE=1; Hm_lpvt_fa218a3ff7179639febdb15e372f411c=1675218677; __appToken__=; _gid=GA1.2.2129443843.1676293058; _ga_PDVPZYN3CW=GS1.1.1676293057.9.1.1676294321.0.0.0; _ga=GA1.2.95854045.1674873464; LEETCODE_SESSION=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJuZXh0X2FmdGVyX29hdXRoIjoiLyIsIl9hdXRoX3VzZXJfaWQiOiI2MDY4ODUiLCJfYXV0aF91c2VyX2JhY2tlbmQiOiJkamFuZ28uY29udHJpYi5hdXRoLmJhY2tlbmRzLk1vZGVsQmFja2VuZCIsIl9hdXRoX3VzZXJfaGFzaCI6IjYzZDE1Njg0MDNmNTQ2Nzc2YWI2YjcwNDA1MDgyOTczOTAzMWUxZTY2NDE2OTcyM2ZiOTI2ZGM0YWQ1YWQ0OGMiLCJpZCI6NjA2ODg1LCJlbWFpbCI6IjIzODQ0MzkyNjZAcXEuY29tIiwidXNlcm5hbWUiOiJ6YWluY2hlbi11IiwidXNlcl9zbHVnIjoiemFpbmNoZW4tdSIsImF2YXRhciI6Imh0dHBzOi8vYXNzZXRzLmxlZXRjb2RlLmNuL2FsaXl1bi1sYy11cGxvYWQvdXNlcnMvemFpbmNoZW4vYXZhdGFyXzE1NjIwNjk3NTYucG5nIiwicGhvbmVfdmVyaWZpZWQiOmZhbHNlLCJfdGltZXN0YW1wIjoxNjc0ODc0Nzg4LjAwNzM0ODgsImV4cGlyZWRfdGltZV8iOjE2Nzc0MzgwMDAsInZlcnNpb25fa2V5XyI6MCwibGF0ZXN0X3RpbWVzdGFtcF8iOjE2NzYyOTYxNDl9.Ll7a3jQBW4WmpzdlnWgF3vGZOdv_u3fZ1UJr2ttpWag; Hm_lpvt_f0faad39bcf8471e3ab3ef70125152c3=1676296151; a2873925c34ecbd2_gr_session_id=d6a04040-11c9-4467-8b2d-470b538cda78; a2873925c34ecbd2_gr_last_sent_sid_with_cs1=d6a04040-11c9-4467-8b2d-470b538cda78; a2873925c34ecbd2_gr_cs1=zainchen-u; a2873925c34ecbd2_gr_session_id_d6a04040-11c9-4467-8b2d-470b538cda78=true; csrftoken=6hiW9JvViHIyiQ7DYQGRxXsEGg3aE1rX2AizHR8avTJCQVCrm0D96vB1pdTx00tM',
      origin: 'https://leetcode.cn',
      pragma: 'no-cache',
      'random-uuid': '469512e0-6d8d-c98a-d467-929d766d6163',
      referer: 'https://leetcode.cn/problemset/all/?page=1',
      'sec-ch-ua':
        '"Not_A Brand";v="99", "Google Chrome";v="109", "Chromium";v="109"',
      'sec-ch-ua-mobile': '?0',
      'sec-ch-ua-platform': '"macOS"',
      'sec-fetch-dest': 'empty',
      'sec-fetch-mode': 'cors',
      'sec-fetch-site': 'same-origin',
      'sentry-trace': '1b02434bf67d4787b47240c3ea6f6bea-a0b16d05187bf9b9-0',
      'user-agent':
        'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36',
      'x-csrftoken':
        '6hiW9JvViHIyiQ7DYQGRxXsEGg3aE1rX2AizHR8avTJCQVCrm0D96vB1pdTx00tM',
    },
    data,
  }

  const result = (await axios(config)) as LeetCodeProblemResult
  const problemset = result.data.data.problemsetQuestionList.questions || []
  return problemset.map((item: LeetCodeProblemOnLine) => {
    return {
      id: item.frontendQuestionId,
      title: item.title,
      titleCn: item.titleCn,
      titleSlug: item.titleSlug,
    }
  })
}

export const getLeetCodeProblemDetail = async (titleSlug: string) => {
  const data = JSON.stringify({
    operationName: 'questionData',
    variables: {
      titleSlug,
    },
    query:
      'query questionData($titleSlug: String!) {\n  question(titleSlug: $titleSlug) {\n    questionId\n    questionFrontendId\n    categoryTitle\n    boundTopicId\n    title\n    titleSlug\n    content\n    translatedTitle\n    translatedContent\n    isPaidOnly\n    difficulty\n    likes\n    dislikes\n    isLiked\n    similarQuestions\n    contributors {\n      username\n      profileUrl\n      avatarUrl\n      __typename\n    }\n    langToValidPlayground\n    topicTags {\n      name\n      slug\n      translatedName\n      __typename\n    }\n    companyTagStats\n    codeSnippets {\n      lang\n      langSlug\n      code\n      __typename\n    }\n    stats\n    hints\n    solution {\n      id\n      canSeeDetail\n      __typename\n    }\n    status\n    sampleTestCase\n    metaData\n    judgerAvailable\n    judgeType\n    mysqlSchemas\n    enableRunCode\n    envInfo\n    book {\n      id\n      bookName\n      pressName\n      source\n      shortDescription\n      fullDescription\n      bookImgUrl\n      pressImgUrl\n      productUrl\n      __typename\n    }\n    isSubscribed\n    isDailyQuestion\n    dailyRecordStatus\n    editorType\n    ugcQuestionId\n    style\n    exampleTestcases\n    jsonExampleTestcases\n    __typename\n  }\n}\n',
  })

  const config = {
    method: 'post',
    url: 'https://leetcode.cn/graphql/',
    headers: {
      authority: 'leetcode.cn',
      accept: '*/*',
      'accept-language': 'zh-CN',
      'cache-control': 'no-cache',
      'content-type': 'application/json',
      cookie:
        'csrftoken=6hiW9JvViHIyiQ7DYQGRxXsEGg3aE1rX2AizHR8avTJCQVCrm0D96vB1pdTx00tM; aliyungf_tc=f5108f3262132a580800025dc09154eec4e66bc2f7d79225354d54205907b124; Hm_lvt_f0faad39bcf8471e3ab3ef70125152c3=1674873464; gr_user_id=9d029b33-e646-4586-949b-b4ec50b68219; _bl_uid=90lLydhnfetcnRekmzvCz603U2n3; a2873925c34ecbd2_gr_last_sent_cs1=zainchen-u; Hm_lvt_fa218a3ff7179639febdb15e372f411c=1674874794; NEW_PROBLEMLIST_PAGE=1; Hm_lpvt_fa218a3ff7179639febdb15e372f411c=1675218677; __appToken__=; a2873925c34ecbd2_gr_session_id=412953ca-54bf-420e-9d67-7879966b4e4b; a2873925c34ecbd2_gr_last_sent_sid_with_cs1=412953ca-54bf-420e-9d67-7879966b4e4b; a2873925c34ecbd2_gr_session_id_412953ca-54bf-420e-9d67-7879966b4e4b=true; _gid=GA1.2.1440748728.1676525727; Hm_lpvt_f0faad39bcf8471e3ab3ef70125152c3=1676526476; _ga=GA1.1.95854045.1674873464; a2873925c34ecbd2_gr_cs1=zainchen-u; _ga_PDVPZYN3CW=GS1.1.1676525727.11.1.1676526622.0.0.0; LEETCODE_SESSION=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJuZXh0X2FmdGVyX29hdXRoIjoiLyIsIl9hdXRoX3VzZXJfaWQiOiI2MDY4ODUiLCJfYXV0aF91c2VyX2JhY2tlbmQiOiJkamFuZ28uY29udHJpYi5hdXRoLmJhY2tlbmRzLk1vZGVsQmFja2VuZCIsIl9hdXRoX3VzZXJfaGFzaCI6IjYzZDE1Njg0MDNmNTQ2Nzc2YWI2YjcwNDA1MDgyOTczOTAzMWUxZTY2NDE2OTcyM2ZiOTI2ZGM0YWQ1YWQ0OGMiLCJpZCI6NjA2ODg1LCJlbWFpbCI6IjIzODQ0MzkyNjZAcXEuY29tIiwidXNlcm5hbWUiOiJ6YWluY2hlbi11IiwidXNlcl9zbHVnIjoiemFpbmNoZW4tdSIsImF2YXRhciI6Imh0dHBzOi8vYXNzZXRzLmxlZXRjb2RlLmNuL2FsaXl1bi1sYy11cGxvYWQvdXNlcnMvemFpbmNoZW4vYXZhdGFyXzE1NjIwNjk3NTYucG5nIiwicGhvbmVfdmVyaWZpZWQiOmZhbHNlLCJfdGltZXN0YW1wIjoxNjc0ODc0Nzg4LjAwNzM0ODgsImV4cGlyZWRfdGltZV8iOjE2Nzc0MzgwMDAsInZlcnNpb25fa2V5XyI6MCwibGF0ZXN0X3RpbWVzdGFtcF8iOjE2NzY1MjY2MjJ9.w9GzLVw61a1_yPqNG5GNTgr9ApKLktfO839uJ4jGXVw; csrftoken=6hiW9JvViHIyiQ7DYQGRxXsEGg3aE1rX2AizHR8avTJCQVCrm0D96vB1pdTx00tM',
      origin: 'https://leetcode.cn',
      pragma: 'no-cache',
      'random-uuid': '469512e0-6d8d-c98a-d467-929d766d6163',
      referer: 'https://leetcode.cn/problems/two-sum/',
      'sec-ch-ua':
        '"Not_A Brand";v="99", "Google Chrome";v="109", "Chromium";v="109"',
      'sec-ch-ua-mobile': '?0',
      'sec-ch-ua-platform': '"macOS"',
      'sec-fetch-dest': 'empty',
      'sec-fetch-mode': 'cors',
      'sec-fetch-site': 'same-origin',
      'user-agent':
        'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36',
      'x-csrftoken':
        '6hiW9JvViHIyiQ7DYQGRxXsEGg3aE1rX2AizHR8avTJCQVCrm0D96vB1pdTx00tM',
      'x-definition-name': 'question',
      'x-operation-name': 'questionData',
      'x-timezone': 'Asia/Shanghai',
    },
    data,
  }

  const result = (await axios(config)) as LeetCodeProblemDetailResult
  const problemDetails = result.data.data.question
  return problemDetails
}
