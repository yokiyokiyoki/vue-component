<template>
    <div class="cascader">
        <div class="select-text">
            <span></span>
        </div>
        <transition name="fade">
            <Caspanel v-if="show"></Caspanel>
        </transition>
    </div>
</template>
<script>
import '@/assets/less/cascader.less'
import Caspanel from './caspanel'
export default {
    name: 'Cascader',
    data() {
        return {
            show: false,
        }
    },
    components: {
        Caspanel
    },
    
}
</script>