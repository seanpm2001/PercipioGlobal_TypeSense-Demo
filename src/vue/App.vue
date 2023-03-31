<script>
import { defineComponent } from 'vue'

import { init as initPageAnimation } from '@/js/animations/page'

export default defineComponent({
    mounted() {
        document.getElementById('page').style.opacity = ""
        initPageAnimation()
    }
})
</script>