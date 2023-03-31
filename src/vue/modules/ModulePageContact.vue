<script>
import { defineComponent } from 'vue'

import LineBottom from '@/vue/_atoms/lines/line--bottom.vue'
import LineTop from '@/vue/_atoms/lines/line--top.vue'

export default defineComponent({
    components: { 
        'line--bottom': LineBottom,
        'line--top': LineTop,
    }
})
</script>