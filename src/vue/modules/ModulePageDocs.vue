<script>
import { defineComponent } from 'vue'

import MediaCode from '@/vue/_molecules/media/media--code.vue'
import NavigationDocs from '@/vue/_organisms/navigations/navigation--docs.vue'

export default defineComponent({
    components: { 
        'media--code': MediaCode,
        'navigation--docs': NavigationDocs,
    },
})
</script>