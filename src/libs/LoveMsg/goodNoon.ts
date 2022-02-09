/**
 * @name goodNoon
 * @description 中午
 */
import { prodCard } from './prodCard'
import { prodGoodWord } from './prodgoodWord'
import { prodJoke } from './prodJoke'
// 自定义中午情话招呼语
function getcustom() {
    let text = '午安呀，我可爱的徐小鸭~\n'
    return text
  }
export const goodNoon = async(isCard,textArray) => {
  const customText = getcustom()
  if(isCard == 'card'){
     await prodCard()
  }
  await prodJoke() //生成特殊布局的长文章(笑话)
  await prodGoodWord(textArray,customText)
}