/**
 * @name goodAfternoon
 * @description 下午
 * 根据自己情况自定义招呼语getcustom
 * 通过调用prodGoodWord生成短语情话
 * 通过调用prodSpecialWord生成特殊布局趣味语言
 */
import { prodCard , prodJoke } from '../prodWords/prodSpecialWord'
import { prodGoodWord } from '../prodWords/prodGoodWord'
// 自定义中午情话招呼语
function getcustom() {
    let text = '下午好呀，我可爱的徐小鸭~\n\n'
    return text
}
export const goodAfternoon = async(isCard,textArray) => {
  const customText = getcustom()
  if(isCard == 'card'){
     await prodCard()
  }
  await prodJoke() //生成特殊布局的长文章(笑话)
  await prodGoodWord(textArray,customText)
}