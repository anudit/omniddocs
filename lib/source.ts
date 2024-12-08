import { createElement } from "react";
import { docs, meta } from "@/.source";
import { createMDXSource } from "fumadocs-mdx";
import { loader } from "fumadocs-core/source";
import { icons } from "lucide-react";
import {
  ReactNativeIcon,
  ExpoIcon,
  NodeJsIcon,
  EyeOffIcon2,
} from "@/components/icons";
import { createOpenAPI } from "fumadocs-openapi/server";
import { FingerprintIcon } from "@/components/icons/FingerprintIcon";
import { SearchIcon } from "@/components/icons/SearchIcon";
import { BookTextIcon } from "@/components/icons/BookIcon";
import { TelescopeIcon } from "@/components/icons/TelescopeIcon";

export const openapi = createOpenAPI({
  // options
});

export const source = loader({
  baseUrl: "/",
  rootDir: "",
  source: createMDXSource(docs, meta),
  icon: (icon) => {
    if (!icon) {
      return;
    }
    if (icon.toLowerCase() == "react") return createElement(ReactNativeIcon);
    if (icon.toLowerCase() == "expo") return createElement(ExpoIcon);
    if (icon.toLowerCase() == "nodejs") return createElement(NodeJsIcon);
    if (icon.toLowerCase() == "EyeOffIcon2".toLowerCase())
      return createElement(EyeOffIcon2);
    if (icon.toLowerCase() == "FingerprintIcon".toLowerCase())
      return createElement(FingerprintIcon);
    if (icon.toLowerCase() == "SearchIcon".toLowerCase())
      return createElement(SearchIcon);
    if (icon.toLowerCase() == "BookTextIcon".toLowerCase())
      return createElement(BookTextIcon);
    if (icon.toLowerCase() == "TelescopeIcon".toLowerCase())
      return createElement(TelescopeIcon);

    if (icon in icons) return createElement(icons[icon as keyof typeof icons]);
  },
});
