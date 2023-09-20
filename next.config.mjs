import nextra from 'nextra';

import withPlugins from 'next-compose-plugins';
import withPWA from 'next-pwa';

const withNextra = nextra({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
  latex: true,
  flexsearch: {
    codeblocks: false
  },
  defaultShowCopyCode: true
})

const nextConfig = {
  poweredByHeader: false,
  reactStrictMode: true,
  swcMinify: true,
}

export default withPlugins([
  [withPWA, {
    pwa: {
      dest: 'public',
      // runtimeCaching
    },
  }],
  [withNextra, {
    reactStrictMode: true,
    eslint: {
      ignoreDuringBuilds: true
    },
    redirects: () => [
    ],
    webpack(config) {
      const allowedSvgRegex = /components\/icons\/.+\.svg$/

      config.module.rules.push({
        test: allowedSvgRegex,
        use: ['@svgr/webpack']
      })
      return config
    }
  }]
], nextConfig)

