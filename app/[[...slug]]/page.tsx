import * as React from "react";
import { source } from "@/lib/source";
import {
  DocsPage,
  DocsBody,
  DocsDescription,
  DocsTitle,
} from "fumadocs-ui/page";
import { notFound } from "next/navigation";
import defaultMdxComponents from "fumadocs-ui/mdx";
import { Tabs, Tab } from "fumadocs-ui/components/tabs";
import { Steps, Step } from "fumadocs-ui/components/steps";
import { Card, Cards } from "fumadocs-ui/components/card";
import { Callout } from "fumadocs-ui/components/callout";
import { ImageZoom } from "fumadocs-ui/components/image-zoom";
import { File, Folder, Files } from "fumadocs-ui/components/files";
import { GlossaryComp } from "@/components/Glossary";

const mdxComponents = {
  ...defaultMdxComponents,
  Tabs: Tabs,
  Tab: Tab,
  Steps: Steps,
  Step: Step,
  Cards: Cards,
  Card: Card,
  Callout: Callout,
  Image: ImageZoom,
  File: File,
  Folder: Folder,
  Files: Files,
  GlossaryComp: GlossaryComp,
  Button: ({ ref: _ref, ...props }: any) => (
    <button {...props}>{props.children}</button>
  ),
};

export default async function Page(props: {
  params: Promise<{ slug?: string[] }>;
}) {
  const params = await props.params;
  const page = source.getPage(params.slug);
  if (!page) notFound();

  const MDX = page.data.body;

  return (
    <DocsPage
      toc={page.data.toc}
      full={page.data.full}
      tableOfContent={{
        style: "clerk",
      }}
      editOnGithub={{
        owner: "anudit",
        repo: "omniddocs",
        sha: "main",
        path: `content/${page.file.path}`,
      }}
    >
      <DocsTitle>{page.data.title}</DocsTitle>
      <DocsDescription>{page.data.description}</DocsDescription>
      <DocsBody>
        <MDX components={{ ...mdxComponents }} />
      </DocsBody>
    </DocsPage>
  );
}

export async function generateStaticParams() {
  return source.generateParams();
}

export async function generateMetadata(props: {
  params: Promise<{ slug?: string[] }>;
}) {
  const params = await props.params;
  const page = source.getPage(params.slug);
  if (!page) notFound();

  return {
    title: "Omnid - " + page.data.title,
    description: page.data.description,
  };
}
