export default defineAppConfig({
  profile: {
    name: 'Gustavo Rodrigues',
    picture: 'https://gravatar.com/avatar/4039a864f60bdb71f6b8ad64f0b94f87?s=400'
  },
  socials: {
    github: 'https://github.com/qgustavor',
    mastodon: 'https://urusai.social/@qgustavor',
    signal: 'https://signal.me/#eu/IRvCPi0rPBIpa3MCO7I4ixdDXcL44VAumqdfnGjtWDvgccTRV-lD66kvycc1PQpZ'
  },
  seo: {
    title: "qgustavor's website",
    description: 'This is the website from qgustavor, with some posts and other assorted things.',
    url: 'https://qgustavor.tk'
  },
  ui: {
    colors: {
      primary: 'emerald',
      neutral: 'neutral'
    },
    notifications: {
      position: 'top-0 bottom-auto'
    },
    notification: {
      progress: {
        base: 'absolute bottom-0 end-0 start-0 h-0',
        background: 'bg-transparent dark:bg-transparent'
      }
    },
    button: {
      slots: {
        base: 'cursor-pointer'
      },
      defaultVariants: {
        color: 'neutral'
      }
    },
    input: {
      defaultVariants: {
        color: 'neutral'
      }
    },
    textarea: {
      defaultVariants: {
        color: 'neutral'
      }
    },
    icons: {
      loading: 'lucide:loader'
    }
  },
  link: [
    {
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico'
    },
    {
      rel: 'apple-touch-icon',
      sizes: '180x180',
      href: '/apple-touch-icon.png'
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      href: '/favicon-32x32.png'
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      href: '/favicon-16x16.png'
    },
    {
      rel: 'manifest',
      href: '/site.webmanifest'
    }
  ]
})
