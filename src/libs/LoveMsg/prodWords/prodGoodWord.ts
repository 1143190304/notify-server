import API from '../../../api/loveMsg'
import { wxNotify } from '../../WxNotify'
import { textTemplate } from '../templates/text'
// 集中处理生成美丽短句 简易的文字布局
export const prodGoodWord = async (textArray,customText) => {
    try {
      let querylist = []
      if(textArray.length && textArray.length > 0){
        querylist = textArray.map(item=>{
          return API[item]()
        })
      }
      const dataSource = await Promise.allSettled(querylist)
      // 过滤掉异常数据
      const [sayLove, caiHongpi, oneWord, songLyrics, oneMagazines, netEaseCloud, dayEnglish] =
        dataSource.map((n) => (n.status === 'fulfilled' ? n.value : null)) || []
      // 对象写法
      const data: any = {
        sayLove,
        caiHongpi,
        oneWord,
        songLyrics,
        oneMagazines,
        netEaseCloud,
        dayEnglish
      }
      const template = textTemplate(data,customText)
      wxNotify(template)
    } catch (error) {
      console.log('goodWord:err', error)
    }
}