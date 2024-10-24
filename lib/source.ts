import { createElement } from "react";
import { docs, meta } from "@/.source";
import { createMDXSource } from "fumadocs-mdx";
import { loader } from "fumadocs-core/source";
import { icons } from "lucide-react";
import { ReactNativeIcon, ExpoIcon, NodeJsIcon } from "@/components/icons";

// export const pages = [
//   {
//     title: "react",
//     description: "Desc",
//     url: "/react",
//     icon: HomeIcon,
//   },
// ];

export const source = loader({
  baseUrl: "/",
  rootDir: "",
  source: createMDXSource(docs, meta),
  icon: (icon) => {
    // console.log(icon);
    if (!icon) {
      return;
    }
    if (icon.toLowerCase() == "react") return createElement(ReactNativeIcon);
    if (icon.toLowerCase() == "expo") return createElement(ExpoIcon);
    if (icon.toLowerCase() == "nodejs") return createElement(NodeJsIcon);
    if (icon in icons) return createElement(icons[icon as keyof typeof icons]);
  },
});
