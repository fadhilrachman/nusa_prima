import { create } from 'zustand'

export const useSiteStore = create((set, get) => ({
  siteData: null,
  loading: false,
  error: null,
  fetchSiteData: async () => {
    set({ loading: true, error: null })
    try {
      const response = await fetch('https://nusaprima.site.arnatech.id/api/public/site/home/')
      if (!response.ok) throw new Error('Failed to fetch data')
      const data = await response.json()
      set({ siteData: data, loading: false })
    } catch (err) {
      set({ error: err.message, loading: false })
    }
  },
  getSectionData: (type) => {
    const { siteData } = get()
    if (!siteData || !siteData.sections) return null
    return siteData.sections.find((s) => s.type === type)
  }
}))
