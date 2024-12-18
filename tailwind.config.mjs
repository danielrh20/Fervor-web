import animations from '@midudev/tailwind-animations'

export default {
  content: [
    './src/**/*.{astro,html,js,jsx,ts,tsx,vue,svelte}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#5d35f5',
        secondary: '#ffffff',
      },
    },
  },
  plugins: [animations],
}
