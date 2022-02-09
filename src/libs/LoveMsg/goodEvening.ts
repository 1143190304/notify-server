/**
 * @name goodEvening
 * @description 说晚安
 */
import { prodNews } from './prodNews'
import { prodStorybook } from './prodStorybook'
import { prodGoodWord } from './prodgoodWord'
import { prodCard } from './prodCard'
// 自定义中午情话招呼语
function getcustom() {
  let text = '晚上好呀，我可爱的徐小鸭~\n'
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
