import { defineAstroPaperConfig } from "./src/types/config";

export default defineAstroPaperConfig({
  site: {
    url: "https://astro-paper.pages.dev/",
    title: "Hilman",
    description: "Portofolio & CV Hilman Bintang Ardhani.",
    author: "Hilman Bintang Ardhani",
    profile: "https://github.com/HilmanBintang22",
    ogImage: "default-og.jpg",
    lang: "en",
    timezone: "Asia/Jakarta",
    dir: "ltr",
  },
  posts: {
    perPage: 4,
    perIndex: 4,
    scheduledPostMargin: 15 * 60 * 1000,
  },
  features: {
    lightAndDarkMode: true,
    dynamicOgImage: true,
    showArchives: true,
    showBackButton: true,
    editPost: {
      enabled: false,
      // url: "https://github.com/HilmanBintang22",
    },
    search: "pagefind",
  },
  socials: [
    { name: "github",   url: "https://github.com/HilmanBintang22" },
    { name: "linkedin", url: "https://www.linkedin.com/in/hilman-bintang-ardhani-17a68291/" },
  ],
  shareLinks: [
    { name: "whatsapp", url: "https://wa.me/?text=" },
    { name: "facebook", url: "https://www.facebook.com/sharer.php?u=" },
    { name: "x",        url: "https://x.com/intent/post?url=" },
    { name: "telegram", url: "https://t.me/share/url?url=" },
    { name: "pinterest", url: "https://pinterest.com/pin/create/button/?url=" },
    { name: "mail",     url: "mailto:?subject=See%20this%20post&body=" },
  ],
});