import API from '../../api/loveMsg'
import { wxNotify } from '../WxNotify'
import { textCardTemplate } from './templates/textcard'
// 集中处理生成card卡片模板
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