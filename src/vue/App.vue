<script lang="ts">
import { defineComponent } from 'vue'

import { init as initNavigation } from '@/js/animations/navigation'
import { init as initPageAnimation } from '@/js/animations/page'
import { init as initCopy } from '@/js/utils/copy-to-clipboard'

import AnimationMain from '@/vue/atoms/animations/animation-main.vue'
import ContentCode from '@/vue/molecules/content/content--code.vue'
import ViewDemo from '@/vue/organisms/views/view--demo.vue'

export default defineComponent({
    components: { 
        'animations--animation-main': AnimationMain,
        'content--code': ContentCode,
        'view--demo': ViewDemo
    },
    mounted() {
        initNavigation()
        initPageAnimation()
        initCopy()
    }
})
</script>