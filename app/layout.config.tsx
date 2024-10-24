import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";
import Image from "next/image";
import { LucideGithub, LucideTwitter, BookText, HouseIcon } from "lucide-react";
import { createElement } from "react";
import { DiscordIcon } from "@/components/icons";

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
  links: [
    {
      text: "Home",
      url: "https://omnid.io",
      active: "nested-url",
      icon: createElement(HouseIcon),
    },
    {
      text: "Documentation",
      url: "/",
      active: "nested-url",
      icon: createElement(BookText),
    },
    {
      text: "Discord",
      url: "https://discord.gg/xN4hK3uQEV",
      active: "nested-url",
      icon: <DiscordIcon />,
    },
    {
      text: "Twitter",
      url: "https://x.com/ProjectOmnid",
      active: "nested-url",
      icon: createElement(LucideTwitter),
    },
    {
      text: "GitHub",
      url: "https://github.com/anudit/omniddocs",
      active: "nested-url",
      icon: createElement(LucideGithub),
    },
  ],
};
