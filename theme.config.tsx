import { AddIcon, BookIcon, HomeIcon, InfinityIcon, NodeJsIcon, ReactNativeIcon, VersionIcon } from '@components/icons';
import Tag from '@components/tag';
import { useRouter } from 'next/router';
import type { DocsThemeConfig } from 'nextra-theme-docs';
import { useConfig } from 'nextra-theme-docs';

const logo = (
  <svg
    height="30"
    viewBox="0 0 500 150"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill="currentColor" d="M198.6 124.2q-12.5 0-22.2-6.1t-15.2-16.8q-5.4-10.8-5.4-24.5 0-13.8 5.6-24.7Q167 41.3 176.8 35q9.8-6.3 22.3-6.6 12.4 0 22.1 6.1 9.8 6.2 15.3 16.9Q242 62 242 75.8q0 13.8-5.6 24.7-5.6 11-15.4 17.2-9.7 6.3-22.4 6.6Zm-.3-9.4q9.4 0 16.7-5 7.3-5 11.5-13.8t4.2-20.2q0-11-4-19.7-4.1-8.6-11.2-13.5-7-4.8-16.1-4.8-9.5 0-16.8 5-7.3 5-11.4 13.7-4.2 8.8-4.2 20.1 0 11.1 4 19.7 4 8.7 11.1 13.6 7 5 16.2 5Zm60.6 7.5V75.8q3.2-3.4 7-6 3.6-2.6 7.3-4.2 3.6-1.7 6.6-1.7 4.3 0 6.6 2t3.3 5.4q.9 3.4.9 8v43h10.7V77.8q0-6.6-2-11.8-2-5.2-6.4-8.2-4.3-3-11.3-3-3.8 0-8.1 1.4-4.4 1.5-8.3 4.1-4 2.6-7.1 5.8l-2-9.3h-7.8v65.5ZM300 75.8q3.2-3.4 6.8-6 3.7-2.6 7.3-4.2 3.7-1.7 6.8-1.7 4.2 0 6.5 2t3.3 5.4q1 3.4 1 8v43h10.6V77.8q0-6.6-2-11.8-2-5.2-6.4-8.2-4.4-3-11.3-3-3.7 0-8.1 1.4-4.4 1.5-8.4 4.1-4 2.6-7 5.8Zm61.3 46.5V75.8q3.2-3.4 7-6t7.8-4.2q4-1.7 7.2-1.7 6.8 0 9.3 4.4 2.5 4.3 2.5 11v43h10.6V78q0-6.8-2.1-12-2.2-5.2-6.7-8.2-4.5-3-11.7-3-4.3 0-9 1.4-4.5 1.5-8.5 4.1-4.1 2.6-7.2 5.8l-1.9-9.3h-7.8v65.5Zm63.7 0V56.8h-10.8v65.5Zm-5.5-78.5q3 0 5-2 2.2-2.2 2.2-5.3 0-3-2.2-5.2-2.2-2-5.2-2t-5.1 2q-2 2.1-2 5.2t2 5.2q2 2.1 5.3 2.1Zm56.9 67.9 4.3 10.6h6.5V27l-10.8 1.3Zm3-6.4q-3.7 4.5-8 7.1-4.3 2.6-10.5 2.6-6.8 0-11.3-3.3-4.5-3.3-6.8-9.2-2.2-5.9-2.2-13.3 0-7.2 2.3-12.8 2.3-5.6 6.9-9 4.6-3.3 11.2-3.3 6.5 0 10.7 2.5 4.3 2.5 8 6.7L483 66q-2.7-3.4-6.4-5.8-3.7-2.5-7.8-3.8-4-1.4-7.5-1.4-9.8 0-16.8 4.4-7.1 4.4-11 12.1-3.7 7.7-3.7 17.8 0 10.3 3.7 18.1 3.6 7.8 10.6 12.2 7 4.4 16.9 4.4 3.4 0 7.4-1.2t7.9-3.8q3.7-2.5 6.6-6Z" />
    <path fill="currentColor" d="M100.9 74.1c0 32.6-13.5 59-30 59-16.6 0-30-26.4-30-59s13.4-59 30-59c16.5 0 30 26.4 30 59Zm-30-56c-10 0-18 25.1-18 56 0 31 8 56 18 56s18-25 18-56c0-30.9-8-56-18-56Z" />
    <path fill="currentColor" d="M70 120.1c-32.6 0-59-11.1-59-25 0-13.8 26.4-25 59-25 32.5 0 59 11.2 59 25 0 13.9-26.5 25-59 25Zm56-25c0-8.2-25.1-15-56-15-31 0-56 6.8-56 15 0 8.4 25 15 56 15 30.9 0 56-6.6 56-15Z" />
    <style jsx>{`
      svg {
        mask-image: linear-gradient(
          60deg,
          black 25%,
          rgba(0, 0, 0, 0.2) 50%,
          black 75%
        );
        mask-size: 400%;
        mask-position: 0%;
      }
      svg:hover {
        mask-position: 100%;
        transition:
          mask-position 1s ease,
          -webkit-mask-position 1s ease;
      }
    `}</style>
  </svg>
)

const config: DocsThemeConfig = {
  project: {
    link: 'https://github.com/anudit/omnid'
  },
  chat: { link: "https://discord.gg/MFtmrng9J7" },
  docsRepositoryBase: 'https://github.com/anudit/omniddocs/tree/main',
  useNextSeoProps() {
    const { asPath } = useRouter()
    if (asPath !== '/') {
      return {
        titleTemplate: '%s – Omnid'
      }
    }
  },
  logo,
  head: function useHead() {
    const { title } = useConfig()
    const { route } = useRouter()
    const socialCard =
      route === '/' || !title
        ? 'https://docs.omnid.io/og.jpeg'
        : `https://docs.omnid.io/api/og?title=${title}`

    return (
      <>
        <meta name="msapplication-TileColor" content="#fff" />
        <meta name="theme-color" content="#fff" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Language" content="en" />
        <meta
          name="description"
          content="Make beautiful websites with Next.js & MDX."
        />
        <meta
          name="og:description"
          content="Make beautiful websites with Next.js & MDX."
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={socialCard} />
        <meta name="twitter:site:domain" content="omnid.io" />
        <meta name="twitter:url" content="https://omnid.io" />
        <meta
          name="og:title"
          content={title ? title + ' – Omnid' : 'Omnid Docs'}
        />
        <meta name="og:image" content={socialCard} />
        <meta name="apple-mobile-web-app-title" content="Omnid" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </>
    )
  },
  navbar: {
    extraContent: (
      <>
        <a
          style={{ padding: "0.5rem" }}
          target="_blank"
          href="https://twitter.com/0xOmnid"
          aria-label="Omnid Twitter"
          rel="nofollow noreferrer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="currentColor"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-twitter"
          >
            <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
          </svg>
        </a>
      </>
    ),
  },
  editLink: {
    text: 'Edit this page on GitHub →'
  },
  feedback: {
    content: 'Question? Give us feedback →',
    labels: 'feedback'
  },
  sidebar: {
    titleComponent({ title, type, route }) {
      const iconStyle = {
        marginTop: '2px', marginRight: '10px', strokeWidth: '4px', height: '16px',
        fill: 'currentColor',
        stroke: 'currentColor'
      }
      if (type === 'separator') return (<div>{title}</div>)

      if (route === '/docs' || route === '') return (<><HomeIcon style={{
        ...iconStyle,
        strokeWidth: '1.5px'
      }} />{title}</>)
      if (route === '/docs/protocol') return (<div style={{ display: 'flex', flexDirection: 'row', }}><InfinityIcon style={{
        ...iconStyle,
        strokeWidth: '40px',
      }} />{title}</div>)
      if (route === '/docs/integration') return (<div style={{ display: 'flex', flexDirection: 'row', }}><AddIcon style={{
        ...iconStyle,
        strokeWidth: '40px',
      }} />{title}</div>)
      if (route === '/docs/react-native') return (
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '100%' }}>
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            <ReactNativeIcon style={{
              marginTop: '3px', marginRight: '10px', height: '14px',
            }} />
            {title}
          </div>
          <Tag>
            Soon
          </Tag>
        </div>
      )
      if (route === '/docs/nodejs') return (
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '100%' }}>
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            <NodeJsIcon style={{
              marginTop: '2px', marginRight: '10px', height: '16px',
            }} />
            {title}
          </div>
          <Tag>
            Soon
          </Tag>
        </div>
      )
      if (route === '/docs/tutorials') return (
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <BookIcon style={{ ...iconStyle, strokeWidth: '0.5px', height: '20px', marginRight: '6px', marginTop: '0px', marginLeft: '-2px' }} />
          {title}
        </div>
      )
      if (route === '/docs/v1') return (
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <VersionIcon style={{ ...iconStyle, strokeWidth: '0.5px', marginTop: '3px', height: '14px', marginRight: '10px' }} />
          {title}
        </div>
      )

      return <p style={{ paddingLeft: '6px', paddingRight: '6px' }}>{title}</p>
    },
    defaultMenuCollapseLevel: 2,
    toggleButton: true
  },
  footer: {
    text: (
      <div className="flex w-full flex-col items-center sm:items-start">
        <p className="mt-6 text-xs">
          © {new Date().getFullYear()} Cupoc, Inc.
        </p>
      </div>
    )
  },
  banner: {
    key: "isBannerOpen",
    text: () => {
      return (
        <>
          ✨ Learn more about <a href="https://blog.cupoc.space/" target="_blank"> Convo Space & Omnid →</a>
        </>);
    },
  },
  toc: {
    extraContent: <a href="https://cupoc.space/careers" target="_blank"><img src="/hiring.webp" width="150px" /></a>,
    float: true,
    backToTop: true
  },
}

export default config