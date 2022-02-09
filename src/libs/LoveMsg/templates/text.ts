/**
 * @description 纯文本模板-企业微信消息通知
 * https://open.work.weixin.qq.com/api/doc/90000/90135/90236
 */

import dayjs from '../../../utils/dayjs'

export const textTemplate = (data: TextTemplateProps,customText) => {
  const { caiHongpi, sayLove, songLyrics, oneMagazines, netEaseCloud, oneWord, dayEnglish } = data
  let text = customText
  // 添加笑话
  if (caiHongpi) {
    text += `\ ${caiHongpi.content}\n`
  }
  if (sayLove) {
    text += `${sayLove.content}\n`
  }
  // 诗句
  if (songLyrics) {
    text += `『${songLyrics.source}』${songLyrics.content}\n`
  }
  if (oneMagazines) {
    text += `『ONE杂志』${oneMagazines.word}\n`
  }
  if (netEaseCloud) {
    text += `『网易云音乐热评』${netEaseCloud.content}——${netEaseCloud.source}\n`
  }
  // 添加一句一言
  if (oneWord) {
    text += `『一言』${oneWord.hitokoto}\n`
  }
  // 每日英语
  if (dayEnglish) {
    text += `『每日英语（${dayjs(dayEnglish.date).format('ll')}』${dayEnglish.content}`
  }
  return {
    msgtype: 'text',
    text: {
      content: text
    }
  }
}
