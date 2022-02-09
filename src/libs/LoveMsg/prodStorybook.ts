import API from '../../api/loveMsg'
import { wxNotify } from '../WxNotify'
// 获今日取故事
export const prodStorybook = async() => {
    const res = await API.getStorybook()
    const template = {
          msgtype: 'text',
          text: {
            content: `给鱼崽的今日份睡前故事来喽：🌑🌒🌓🌔🌕🌝😛\n『${res.title}』${res.content}`
          }
    }
  
    await wxNotify(template)
}