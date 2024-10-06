// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  app: {
    head: {
      title: 'My Nuxt App', 
      meta: [
        { name: 'My First Nuxt App!', content: 'Just a test. Hello World.' }, 
        { name: 'keywords', content: 'first, test, app, hello, world' }, // Default keywords
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: '/favicon.png' },
      ],
    },
  },
});
