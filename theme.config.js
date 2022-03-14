import DocSearch from './components/DocSearch'
import Logo from './components/Logo'

export default {
  projectLink: 'https://github.com/anudit/omnid',
  docsRepositoryBase: 'https://github.com/anudit/omniddocs',
  titleSuffix: " – Omnid",
  search: true,
  customSearch: <DocSearch />,
  // unstable_flexsearch: true,
  floatTOC: true,
  feedbackLink: () => {
    return ("Question? Give us feedback →");
  },
  feedbackLabels: "feedback",
  prevLinks: true,
  nextLinks: true,
  logo: () => {
    return (
      <>
        <Logo height={32} classes="mt-1 invert-on-dark" />
        <span
          className="mx-2 font-extrabold hidden md:inline select-none"
          title="Omnid"
        >
          Omnid
        </span>
      </>
    );
  },
  head: ({ title, meta }) => {
    return (
      <>
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Language" content="en" />
        <meta name="description" content={title ? title + " - Omnid" : "Omnid : Identity Layer of the Internet"} />
        <meta name="og:description" content={meta.description || "Omnid : Identity Layer of the Internet"} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={meta.image || "https://docs.omnid.space/poster.png"} />
        <meta name="twitter:site:domain" content="docs.omnid.space" />
        <meta name="twitter:url" content="https://docs.omnid.space" />
        <meta name="og:title" content={title ? title + " - Omnid" : "Omnid : Identity Layer of the Internet"} />
        <meta name="og:image" content={meta.image || "https://docs.omnid.space/poster.png"} />
        <meta name="apple-mobile-web-app-title" content="Omnid" />
        <link rel='manifest' href='/manifest.json' />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-icon-180x180.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/android-icon-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href="/favicon-96x96.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
      </>
    );
  },
  footerEditLink: () => {
    return "Edit this page on GitHub →";
  },
  footerText:  `MIT ${new Date().getFullYear()} © Cupoc, Inc.`
};
