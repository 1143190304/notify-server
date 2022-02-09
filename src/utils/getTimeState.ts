export default function(){
    // 获取当前时间
    let timeNow = new Date();
    // 获取当前小时
    let hours = timeNow.getHours();
    let stateConfig= {
        txt : '',
        MESSAGE_TYPE : ''
    };
    // 判断当前时间段
    if (hours >= 0 && hours <= 10) {
        stateConfig.txt = `早上好!`;
        stateConfig.MESSAGE_TYPE = `goodMorning`;
    } else if (hours > 10 && hours <= 14) {
        stateConfig.txt= `中午好!`;
        stateConfig.MESSAGE_TYPE = `goodNoon`;
    } else if (hours > 14 && hours <= 18) {
        stateConfig.txt= `下午好!`;
        stateConfig.MESSAGE_TYPE = `goodAfternoon`;
    } else if (hours > 18 && hours <= 24) {
        stateConfig.txt= `晚上好!`;
        stateConfig.MESSAGE_TYPE = `goodEvening`;
    }
    return stateConfig;
}