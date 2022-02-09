/**
 * @name loveMsg
 * @description 入口
 */
import dotenv from 'dotenv'
import getTimeState from '../../utils/getTimeState'
import { goodMorning } from './goodMorning'
import { goodAfternoon } from './goodAfternoon'
import { goodEvening } from './goodEvening'
dotenv.config()
const FnObj = {
  goodMorning,
  goodAfternoon,
  goodEvening
}
//根据不同时间来调用不同时间段的推送方法
export default function main() {
  const stateConfig = getTimeState()
  const pushMessage = FnObj[stateConfig.MESSAGE_TYPE]
  //pushMessage(表示不同时间段的推送方法)可传入的参数 : 
  /*
    参数一 : 字符串 'card' 需要推送生成textcard模板可传,不需要card则传空
    参数二 : 数组 需要推送生成text模板,数组中传入需要的情话类型
    getSaylove,           // 土味情话
    getCaihongpi,         // 彩虹屁
    getOneWord,           // 一言
    getSongLyrics,        // 最美宋词
    getOneMagazines,      // one杂志
    getNetEaseCloud,      // 网易云热评
    getDayEnglish,        // 每日英语
  */
  pushMessage('card',['getSaylove'])
}
