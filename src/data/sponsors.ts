export type Sponsor = {
  name: string
  logo: string // path in /public or remote URL
  url?: string
}

// Edit this list to add/remove sponsors. The section will auto-adjust.
export const SPONSORS: Sponsor[] = [
  {
    name: "DERBI Foundation",
    logo: "/sponsors/derbi.jpg",
    url: "https://derbifoundation.com/",
  },
]
