import API from '../../../api/loveMsg'
import { wxNotify } from '../../WxNotify'
import { textCardTemplate } from '../templates/textcard'
import { newsTemplate } from '../templates/news'

/*
   集中处理生成特殊布局的模板
*/ 

// 特殊布局 card卡片模板
export const prodCard = async () => {
    const weather = await API.getWeather('成都')
    if (weather) {
      const lunarInfo = await API.getLunarDate(weather.date)
      const template = textCardTemplate({ ...weather, lunarInfo })
      console.log('weatherInfo', template)
      // 发送消息
      await wxNotify(template)
    }
}

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

// 特殊布局 获今日取故事
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

// 特殊布局 获取新闻
export const prodNews = async() => {
    try {
      // 今日头条
      const todayTopNews = await API.getTianTopNews()
      console.log('todayTopNews', todayTopNews.length)
      // 每次信息最多8个
      // 设定发送两次一共16个信息，数据如果不够则请求另一个接口
      let result: any = []
      const len = todayTopNews.length
      if (len >= 16) {
        // 则这条接口满足条件 2 * 8 = 16
        result = todayTopNews.slice(0, 16)
      }
      else {
        // 取 0- 8 条
        result = todayTopNews.slice(0, len >= 8 ? 8 : len)
        // 数据不够，请求另一个接口
        const dailyBriefing = await API.getDailyBriefing()
        console.log('dailyBriefing', dailyBriefing.length)
        const formateData: TodayHeadlines[] = dailyBriefing.map(n => ({
          ...n,
          title: n.title,
          description: n.digest,
          picUrl: n.imgsrc,
          ctime: n.mtime,
        }))
        // 已经有8条
        if (result.length === 8) {
          result = [
            ...result,
            ...formateData.slice(0, formateData.length >= 8 ? 8 : formateData.length),
          ]
        }
        // 少于 8 条数据的情况
        if (result.length < 8) {
          const sencondLen = result.length + formateData.length
          if (sencondLen >= 16)
            result = [...result, ...formateData.slice(result.length, 16)]
          else
            result = [...result, ...formateData.slice(result.length, formateData.length)]
        }
      }
      // 发送消息
      const times = Math.ceil(result.length / 8)
      for (let i = 0; i < times; i++) {
        const start = 8 * i
        const end = 8 * i + 8 < result.length ? 8 * i + 8 : result.length
        console.log(result.length, start, end)
        const template = newsTemplate(result.slice(start, end))
        await wxNotify(template)
      }
    }
    catch (error) {
      console.log('goodEvening', error)
    }
}