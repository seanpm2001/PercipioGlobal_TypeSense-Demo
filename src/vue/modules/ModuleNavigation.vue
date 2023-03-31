<script>
import { defineComponent } from 'vue'

import ButtonHamburger from '@/vue/_atoms/buttons/button--hamburger.vue'
import NavigationMobile from '@/vue/_organisms/navigations/navigation--mobile.vue'

export default defineComponent({
    components: { 
        'button--hamburger': ButtonHamburger,
        'navigation--mobile': NavigationMobile,
    }
})
</script>