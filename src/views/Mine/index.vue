<template>
    <div>
        我的
    </div>
    <div>
        <h3>标题</h3>
        <p>内容</p>
        <div>
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>
        </div>
        <div>结尾</div>
    </div>
    <div class="footer">
        尾部
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