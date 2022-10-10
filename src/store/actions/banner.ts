import { compileBanner } from '@lib/banner';
import { fitBorder, fitTitle, withTitle } from '@lib/border';
import { bannerStore, setBanner } from '@stores/banner/banner';
import { getBorder } from '@stores/banner/border';
import { TITLE_PADDING, getTitle } from '@stores/banner/title';
import { onMounted, watch } from 'vue';
export const banner = bannerStore()

// Fit the borders to the title
export const borderTop = () => fitBorder(getTitle(), TITLE_PADDING)(getBorder("TOP"))
export const borderBottom = () => fitBorder(getTitle(), TITLE_PADDING)(getBorder("BOTTOM"))
export const center = () => fitTitle(getTitle())(getBorder('LEFT'), getBorder('RIGHT'))(TITLE_PADDING)

export const updateBanner = () => setBanner(
  banner,
  compileBanner(borderTop(), center(), borderBottom())
)

export const bannerObserver = () => {
  onMounted(() => {
    updateBanner()
  })

  watch([borderTop, center, borderBottom], () => {
    updateBanner()
  })
}