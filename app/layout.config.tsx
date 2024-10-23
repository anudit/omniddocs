import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";
import Image from "next/image";

/**
 * Shared layout configurations
 *
 * you can configure layouts individually from:
 * Home Layout: app/(home)/layout.tsx
 * Docs Layout: app/docs/layout.tsx
 */
export const baseOptions: BaseLayoutProps = {
  nav: {
    title: (
      <div className="flex items-center gap-1">
        <Image alt="Sailos" src="/favicon.svg" width={24} height={24} />
        <span className="hidden text-base font-bold md:block">Omnid Docs</span>
      </div>
    ),
  },
  githubUrl: "https://github.com/anudit/omniddocs",
  links: [
    {
      text: "Home",
      url: "https://omnid.io",
      active: "nested-url",
    },
    {
      text: "Documentation",
      url: "/",
      active: "nested-url",
    },
  ],
};
