/**
 * @name goodEvening
 * @description 说晚安
 * 根据自己情况自定义招呼语getcustom
 * 通过调用prodGoodWord生成短语情话
 * 通过调用prodSpecialWord生成特殊布局趣味语言
 */
import { prodNews , prodStorybook , prodCard } from '../prodWords/prodSpecialWord'
import { prodGoodWord } from '../prodWords/prodGoodWord'
// 自定义中午情话招呼语
function getcustom() {
  let text = '晚上好呀，我可爱的徐小鸭~\n\n'
  return text
}
// 执行函数
//自定义晚间内容
export const goodEvening = async(isCard,textArray) => {
  const customText = getcustom()
  if(isCard == 'card'){
    await prodCard()
  } 
  await prodNews()
  await prodStorybook()
  await prodGoodWord(textArray,customText)
}
