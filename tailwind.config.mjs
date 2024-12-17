import animations from '@midudev/tailwind-animations'

export default {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx,vue,svelte}',
    './src/assets/css/main.css',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#5d35f5',
        secundary: '#ffffff',
      },
    },
  },
  plugins: [animations],
}
