<template>
    <div>
        about
        <div>文章1 {{timeAgo}}</div>
        <div>文章2 {{timeAgo2}}</div>
        <div>文章3 {{timeAgo3}}</div>
    </div>
</template>

<script>
import { onMounted, reactive, toRefs } from 'vue'
import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
import relativeTime from 'dayjs/plugin/relativeTime'
import updateLocale from 'dayjs/plugin/updateLocale'
import calendar  from 'dayjs/plugin/calendar'
dayjs.extend(utc)
dayjs.extend(relativeTime)
dayjs.extend(updateLocale)
dayjs.updateLocale('en',{
    relativeTime: {
        future: "%s",
        past: "%s 秒前",
        s: '%s 秒前',
        m: "%m 分前",
        mm: "%d 分钟前",
        h: "1 小时前",
        hh: "%d 小时前",
        d: "1 天前",
        dd: "%d 天前",
        M: "1 个月前",
        MM: "%d 个月前",
        y: "1 年前",
        yy: "%d 年前"
    },
    calendar: {
        lastDay: '[昨天] LT',
        sameDay: '[今天] LT',
        nextDay: '[明天] LT',
        lastWeek: '[上周] dddd [at] LT',
        nextWeek: 'dddd [下周] LT',
        sameElse: 'dddd'
    }
})
dayjs.extend(calendar)
dayjs().calendar(null,{
    sameDay: '[今天 ] h:mm A',
    nextDay: '[明天]',
    nextWeek: 'dddd',
    lastDay: '[Yesterday]',
    lastWeek: '[上一周]dddd',
    sameElse: 'dddd'
})
export default {
    setup () {
        const state = reactive({
            count: 0,
            timeAgo:'',
            timeAgo2:'',
            timeAgo3:''
        })
        const myModule =(function() {
            let exports = {}
            exports.foo = function() {}
            return exports
        })()

        const fn = function() {
            var timeLine = dayjs(String('2018-04-05 16:45:02')).format('YYYYMMDD HH:mm:ss')
            var time1 = dayjs.utc().format()
            var time2 = dayjs().utc().local().format()


            var b = dayjs().startOf('year').format('YYYYMMDD HH:mm:ss')
            var c = dayjs().startOf('week').format('YYYYMMDD HH:mm:ss')
            var d =dayjs().endOf('day').format('YYYYMMDD HH:mm:ss')
            const a = dayjs('20220106090503').format('YYYY-MM-DD HH:mm:ss')
            var  e = dayjs().from(a)
            var m = dayjs('20210201020301').format('YYYY-MM-DD HH:mm:ss')
            var m1 = dayjs('20220105100503').format('YYYY-MM-DD HH:mm:ss')
            var m3 = dayjs().calendar(a)

            state.timeAgo = e
            state.timeAgo2 = dayjs().from(m)
            state.timeAgo3 = dayjs().from(m1)


            console.log('timeLine',timeLine)
            console.log('time1',time1)
            console.log('time2',time2)
            console.log('b',b)
            console.log('c',c)
            console.log('d',d)
            console.log('e',e)
            console.log('a',a)
            console.log('m3',m3)
        }
        onMounted(()=>{
            fn()
        })
        return {
            ...toRefs(state),
            myModule
        }
    }
}
</script>

<style lang="scss" scoped>

</style>