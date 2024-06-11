export type SiteConfig = typeof siteConfig;
const API_CLIENTID = process.env.NEXT_PUBLIC_API_CLIENTID;

export const siteConfig = {
  name: "Snap Nomad",
  description: "Capturing Moments, Creating Memories.",
  navItems: [
    {
      label: "મુખપૃષ્ઠ",
      href: "/",
      tooltip: "Home"
    },
    {
        label: "અમારા વિશે",
        href: "/about",
      tooltip: "About Us"

      },
     { 
      label: "પોર્ટફોલિયો",
      href: "/portfolio",
      tooltip: "Portfolio"

    },
    {
      label: "સેવાઓ",
      href: "/services",
      tooltip: "Services",
    },
    {
      label: "સંપર્ક",
      href: "/contact",
      tooltip: "Contact",

    },

 
  ],
  unsplash:[`https://api.unsplash.com/search/photos?client_id=${API_CLIENTID}`],
  services : [
    "Commercial Photography",
    "Wedding Photography",
    "Pre-wedding Shoots",
    "Portrait Photography",
    "Event Photography",
    "Product Photography",
    "Lifestyle Photography",
    "Corporate Headshots",
    "Family Photography",
    "Newborn Photography",
    "Aerial Photography",
    "Concert Photography",
  ]


};


export type Images = {
  id : number,
  urls : {
    full: string,
    small: string,
    regular: string

  },
  blur_hash: string,
  height : number,
  width:number
  description: string


}
