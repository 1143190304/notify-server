import API from '../../api/loveMsg'
import { wxNotify } from '../WxNotify'
//特殊布局 生成笑话
export const prodJoke = async() => {
      const res = await API.getJoke()
      let text = ``
      text += `请欣赏以下雷人笑话😝\n`
      text += `${res.map(n => `『${n.title}』${n.content}`).join('\n\n')}`
      const template = {
        msgtype: 'text',
        text: {
          content: text,
        }
      }
      await wxNotify(template)
}