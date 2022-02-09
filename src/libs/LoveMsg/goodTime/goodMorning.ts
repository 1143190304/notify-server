/**
 * @name goodMorning
 * @description 说早安
 * 根据自己情况自定义招呼语getcustom
 * 通过调用prodGoodWord生成短语情话
 * 通过调用prodSpecialWord生成特殊布局趣味语言
 */
import { weekToday } from '../../../utils/dayjs'
import { prodCard } from '../prodWords/prodSpecialWord'
import { prodGoodWord } from '../prodWords/prodGoodWord'

// 自定义早安情话招呼语
function getcustom() {
  let text = '早安呀，我可爱的徐小鸭~\n\n'
  // // 工作日/休息日，需要排除节假日
  // const week = weekToday()
  // if (['星期六', '星期日'].includes(week)) {
  //   text += `如果徐小鸭起床啦！崽崽向你说早安呦~，记得吃早饭呀😆\n嗯哼哼~今天可是${week}哦，上班别迟到了哦~\n`
  // }
  // else {
  //   text += `如果我徐小鸭还没起床呀！崽崽就等着徐小鸭起床给我说早安呦🤣嗯哼~，既然今天是${week}，就让你再睡会懒觉~下次可不能啦~😝\n\n`
  // }
  return text
}
// goodMorning
export const goodMorning = async (isCard,textArray) => {
  const customText = getcustom()
  if(isCard == 'card'){
     await prodCard()
  }
  await prodGoodWord(textArray,customText)
}
