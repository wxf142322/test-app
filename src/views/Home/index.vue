<template>
    <div>
        <h3>主页</h3>
        <p>标题</p>
        <p>内容</p>
        <div>结尾</div>
    </div>
    <div class="footer">
        结尾
    </div>
</template>

<script>
import { reactive, toRefs } from 'vue'

export default {
    setup () {
        const state = reactive({
            count: 0,
        })

        return {
            ...toRefs(state),
        }
    }
}
</script>

<style lang="scss" scoped>

</style>