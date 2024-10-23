import "./global.css";
import { RootProvider } from "fumadocs-ui/provider";
import { Inter } from "next/font/google";
import type { ReactNode } from "react";

import { DocsLayout } from "fumadocs-ui/layouts/docs";
import { baseOptions } from "@/app/layout.config";
import { source } from "@/lib/source";

const inter = Inter({
  subsets: ["latin"],
});

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <>
        <meta name="msapplication-TileColor" content="#fff" />
        <meta name="theme-color" content="#fff" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Language" content="en" />
        <meta
          name="description"
          content="Documentation to build on the Omnid.io Ecosystem."
        />
        <meta
          name="og:description"
          content="Documentation to build on the Omnid.io Ecosystem."
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="/og.jpg" />
        <meta name="twitter:site:domain" content="omnid.io" />
        <meta name="twitter:url" content="https://omnid.io" />
        <meta name="og:title" content={"Omnid Docs"} />
        <meta name="og:image" content="/og.jpg" />
        <meta name="apple-mobile-web-app-title" content="Omnid" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <meta
          name="theme-color"
          media="(prefers-color-scheme: light)"
          content="white"
        />
        <meta
          name="theme-color"
          media="(prefers-color-scheme: dark)"
          content="black"
        />
        <link rel="manifest" href="/manifest.json" />
      </>

      <body className="flex flex-col min-h-screen">
        <RootProvider>
          <DocsLayout
            tree={source.pageTree}
            {...baseOptions}
            sidebar={{
              defaultOpenLevel: 1,
            }}
          >
            {children}
          </DocsLayout>
        </RootProvider>
      </body>
    </html>
  );
}
