export type SiteConfig = {
  name: string;
  fancyName: string;
  title: string;
  description: string;
  keywords: string[];

  links: {
    x: string;
    instagram: string;
    github: string;
  };

  host: string;
  backendUri: string;

  features: {
    login: boolean;
  };
};

export const siteConfig: SiteConfig = {
  name: "AYA",
  fancyName: "𝕒𝕔𝕀𝕜 𝕪𝕒𝕫𝕀𝕃𝕀𝕞 𝕒𝕘𝕀",
  title: "AYA",
  description: "Gönüllü geliştirilen yazılımlarla oluşan bir yazılım vakfı",
  keywords: ["AYA", "Açık Yazılım Ağı", "Açık Kaynak", "Açık Veri"],

  links: {
    x: "https://twitter.com/acikyazilimagi",
    instagram: "https://www.instagram.com/acikyazilimagi/",
    github: "https://github.com/acikyazilimagi",
  },

  // deno-lint-ignore no-process-global
  host: process.env.NEXT_PUBLIC_HOST ?? "acikyazilimagi.com",
  // deno-lint-ignore no-process-global
  backendUri: process.env.NEXT_PUBLIC_BACKEND_URI ?? "http://localhost:3000/contract/mocks",

  features: {
    login: false,
  },
};

export const forbiddenSlugs: readonly string[] = [
  "about",
  "admin",
  "api",
  "auth",
  "communities",
  "community",
  "config",
  "contact",
  "dashboard",
  "element",
  "elements",
  "events",
  "faq",
  "feed",
  "guide",
  "help",
  "home",
  "impressum",
  "imprint",
  "jobs",
  "legal",
  "login",
  "logout",
  "news",
  "null",
  "organizations",
  "orgs",
  "people",
  "policies",
  "policy",
  "privacy",
  "products",
  "profile",
  "profiles",
  "projects",
  "register",
  "root",
  "search",
  "services",
  "settings",
  "signin",
  "signout",
  "signup",
  "support",
  "tag",
  "tags",
  "terms",
  "tos",
  "undefined",
  "user",
  "users",
  "verify",
  "wiki",
];
