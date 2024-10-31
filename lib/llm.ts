import fs from "fs";
import path from "path";
import { remark } from "remark";
import strip from "strip-markdown";
import { visit } from "unist-util-visit";

const contentDir = path.join(process.cwd(), "content");

function getAllMdxFiles(dirPath: string, arrayOfFiles: string[] = []) {
  const files = fs.readdirSync(dirPath);

  files
    .filter((e) => e != "v1")
    .forEach((file) => {
      const fullPath = path.join(dirPath, file);
      if (fs.statSync(fullPath).isDirectory()) {
        getAllMdxFiles(fullPath, arrayOfFiles);
      } else if (fullPath.endsWith(".mdx")) {
        arrayOfFiles.push(fullPath);
      }
    });

  return arrayOfFiles;
}

async function getMergedMDXContent() {
  const mdxFiles = getAllMdxFiles(contentDir);

  const contents = await Promise.all(
    mdxFiles.map(async (filePath) => {
      const fileContent = fs.readFileSync(filePath, "utf-8");

      // Use remark to remove elements other than text and code blocks
      const strippedContent = await remark()
        .use(strip, { keep: ["code", "link"], remove: ["mdxjsEsm"] }) // Keeps code blocks intact
        // .use(() => (tree) => {
        //   visit(tree, "code", (node) => {
        //     // Ensure code blocks are properly formatted in Markdown
        //     node.type = "text";
        //     if (node.value.split("\n").length < 2) {
        //       node.value = `\n\n\`${node.value}\`\n\n`;
        //     } else {
        //       node.value = `\n\n\`\`\`\n${node.value}\n\`\`\`\n\n`;
        //     }
        //   });
        // })
        .process(fileContent);

      return strippedContent.toString().trim(); // Trim to remove extra newlines
    }),
  );

  // Join all content with clear section breaks for LLM readability
  return contents.join("\n\n---\n\n").replaceAll("// [!code highlight]", "");
  // .replaceAll("\\```", "```")
  // .replaceAll("\\`", "`")
  // .replaceAll("\\<", "<")
}

export { getMergedMDXContent };
