module.exports = {
  siteUrl: "https://tikvahadasha.co.il", // Site domain. Do not include a trailing slash!

  postsPerPage: 12, // Number of posts shown on paginated pages (changes this requires sometimes to delete the cache)

  siteTitleMeta: "תקווה חדשה", // This allows an alternative site title for meta data for pages.
  siteDescriptionMeta:
    "תקווה חדש - אתר החדשות שנותן לכולנו תקווה בלב", // This allows an alternative site description for meta data for pages.

  shareImageWidth: 1000, // Change to the width of your default share image
  shareImageHeight: 523, // Change to the height of your default share image

  shortTitle: "תקווה חדשה", // Used for App manifest e.g. Mobile Home Screen
  siteIcon: "favicon.png", // Logo in /static dir used for SEO, RSS, and App manifest
  backgroundColor: "#e9e9e9", // Used for Offline Manifest
  themeColor: "#15171A", // Used for Offline Manifest
  apiUrl: "https://spidernet.co.il",
  subscribeWidget: {
    visible: true,
    title: "תקווה חדשה",
    helpText: "הישארו מעודכנים",
    successMessage: "תודה ההודעה נשלחה בהצלחה",
  },
  header: {
    navigation: [
      {
        label: "דף הבית",
        url: "https://tikvahadasha.co.il/",
      },
      {
        label: "יצירת קשר",
        url: "https://tikvahadasha.co.il/contact",
      },
    ],
  },
  footer: {
    copyright: "כל הזכויות שמורות ",
    navigation: [
      {
        label: "דף הבית",
        url: "https://tikvahadasha.co.il/",
      },
      {
        label: "Sitemap",
        url: "https://tikvahadasha.co.il/sitemap.xml",
      },
      
      {
        label: "יצירת קשר",
        url: "https://tikvahadasha.co.il/contact",
      },
     
    ],
  },
  socialLinks: {
    twitter: "",
    facebook: "",
    instagram: "",
    linkedin: "",
    github: "",
    pinterest: "",
    youtube: "",
    dribbble: "",
    behance: "",
    externalLink: "",
    whatsapp: "",
  },
  contactWidget: {
    title: "https://tikvahadasha.co.il/",
    successMessage: "ניצור עמך קשר בהקדם.",
  },
  metadata: {
    title: "תקווה חדשה",
    description:
      "תקווה חדשה",
  },
  siteTitle: "tikvahadasha",
  siteDescription:
    "tikvahadasha",
  language: "he",
  direction: "rtl",
  logoUrl: "logo.png",
  iconUrl: "favicon.png",
  coverUrl: "cover.jpg",
  alternateLogoUrl: "logo.png",
  themeConfig: {
    variables: [
      {
        varName: "--primary-color",
        value: `#ff0030`,
      },
      {
        varName: "--primary-color-active",
        value: `#ff0030`,
      },
      {
        varName: "--primary-color-light",
        value: `#ff0030`,
      },
     
    
    ],
    	 stylesheets: [
    'https://tikvahadasha.ussl.co.il/style.css',
    {
      href: 'https://tikvahadasha.ussl.co.il/style.css',
      type: 'text/css',
      direction: "rtl",
    },
  ],

   
  },
};
