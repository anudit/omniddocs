import { getMergedMDXContent } from "../../../lib/llm";

export async function GET() {
  try {
    const content = await getMergedMDXContent();
    return new Response(content, {
      status: 200,
      headers: {
        "Content-Type": "text/plain",
      },
    });
  } catch (error) {
    console.error("Failed to get MDX content:", error);
    return new Response("Failed to load content", { status: 500 });
  }
}
