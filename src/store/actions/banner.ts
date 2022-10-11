import { compileBanner } from '@lib/banner/banner';
import { buildBorder, buildTitle, BorderConfig } from '@lib/banner/border';
import { bannerStore, setBanner } from '@stores/banner/banner';
import { getBorder, PartName } from '@stores/banner/border';
import { TITLE_PADDING, getTitle } from '@stores/banner/title';
import { onMounted, watch } from 'vue';
export const banner = bannerStore()

// Fit the borders to the title
const configFromBorder = (borderDirection: PartName) => ({
  padding: TITLE_PADDING,
  repeatable: getBorder(borderDirection),
})

export const borderTop = () => buildBorder(getTitle(), configFromBorder("TOP"))
export const borderBottom = () => buildBorder(getTitle(), configFromBorder("BOTTOM"))
export const center = () => buildTitle(getTitle(), configFromBorder("LEFT"))

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

