<script>
import { defineComponent } from 'vue'

// import ButtonHamburger from '@/vue/_atoms/buttons/button--hamburger.vue'
// import FilterDemo from '@/vue/_molecules/filters/filter--demo.vue'
import FormPrimary from '@/vue/_organisms/forms/form--primary.vue'
import IconFa from '@/vue/_atoms/icons/icon--fa.vue'
// import InputApi from '@/vue/_atoms/inputs/input--api.vue'
import LineBottom from '@/vue/_atoms/lines/line--bottom.vue'
import LineTop from '@/vue/_atoms/lines/line--top.vue'
// import LinesHorizontal from '@/vue/_molecules/lines/lines--horizontal.vue'
// import LinesRandom from '@/vue/_molecules/lines/lines--random.vue'
// import MediaApiResult from '@/vue/_molecules/media/media--api-result.vue'
// import MediaCode from '@/vue/_molecules/media/media--code.vue'
// import NavigationDocs from '@/vue/_organisms/navigations/navigation--docs.vue'
// import NavigationMobile from '@/vue/_organisms/navigations/navigation--mobile.vue'

export default defineComponent({
    components: { 
        'form--primary': FormPrimary,
        'icon--fa': IconFa,
        'line--bottom': LineBottom,
        'line--top': LineTop,
    }
})
</script>