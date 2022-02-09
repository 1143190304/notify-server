/**
 * @name loveMsg
 * @description 入口
 */
import dotenv from 'dotenv'
import getTimeState from '../../utils/getTimeState'
const requireContext = require('require-context')
const path = require('path')
/*
requireContext 遍历导入模块 （ 路径 ， 是否深入文件便利 ， 文件后缀）
返回一个函数request,函数可以直接调用得到对应模块，函数其中有个属性keys也是一个函数，调用该函数则返回数组，该数组包含了所有遍历的模块
*/
const fileList = requireContext(path.join(__dirname,'./goodTime'), false, /.ts/);
let fileEnum = {}
fileList.keys().forEach(item=>{
  fileEnum = {...fileEnum,...fileList(item)}
})
dotenv.config() //将环境变量中的变量从 .env 文件加载到 process.env 中
/*
推送的入口函数,调用main即可
根据不同时间来调用不同时间段的推送方法
*/
export default function main() {
  const stateConfig = getTimeState()
  const pushMessage = fileEnum[stateConfig.MESSAGE_TYPE]
  pushMessage(null,['getNetEaseCloud'])
  /*
    pushMessage(表示不同时间段的推送方法)可传入的参数 : 
    参数一 : 字符串 'card' 需要推送生成textcard模板可传,不需要card则传空
    参数二 : 数组 需要推送生成text模板,数组中传入需要的短语情话类型
    getSaylove,           // 土味情话
    getCaihongpi,         // 彩虹屁
    getOneWord,           // 一言
    getSongLyrics,        // 最美宋词
    getOneMagazines,      // one杂志
    getNetEaseCloud,      // 网易云热评
    getDayEnglish,        // 每日英语
  */
}
