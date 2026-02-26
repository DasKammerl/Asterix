type UsePageSeoOptions = {
  title: string
  description: string
  path?: string
  image?: string
  type?: 'website' | 'article'
  /** Zusätzliche Suchbegriffe für diese Seite (z. B. Kammerl Bouldern, Boulderhalle Wieselburg) */
  keywords?: string
}

const defaultKeywords = 'Das Kammerl, Kammerl, Kammerl Bouldern, Boulderhalle Wieselburg, Bouldern Wieselburg, daskammerl.at'

export const usePageSeo = (options: UsePageSeoOptions) => {
  const route = useRoute()
  const {
    public: { siteName, siteUrl, defaultOgImage, siteLanguage }
  } = useRuntimeConfig()

  const targetPath = options.path ?? route.path ?? '/'
  const canonical = new URL(targetPath, siteUrl).toString()
  const image = new URL(options.image ?? defaultOgImage, siteUrl).toString()
  const title = `${options.title} | ${siteName}`
  const keywords = options.keywords ? `${defaultKeywords}, ${options.keywords}` : defaultKeywords

  useHead({
    title: options.title,
    meta: [
      { name: 'keywords', content: keywords }
    ],
    link: [
      { rel: 'canonical', href: canonical },
      { rel: 'alternate', hreflang: siteLanguage, href: canonical }
    ]
  })

  useSeoMeta({
    title,
    description: options.description,
    ogTitle: title,
    ogDescription: options.description,
    ogType: options.type ?? 'website',
    ogUrl: canonical,
    ogImage: image,
    ogImageWidth: 1200,
    ogImageHeight: 630,
    ogLocale: 'de_AT',
    twitterTitle: title,
    twitterDescription: options.description,
    twitterCard: 'summary_large_image',
    twitterImage: image
  })
}
