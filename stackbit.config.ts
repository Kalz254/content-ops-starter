import { defineStackbitConfig } from "@stackbit/types";
import { GitContentSource } from "@stackbit/cms-git";

export default defineStackbitConfig({
  contentSources: [
    new GitContentSource({
      rootPath: __dirname,
      contentDirs: ["content/pages"], // Path where your Markdown/JSON pages are stored
      models: [
        {
          name: "Page",           // Model name
          type: "page",           // Marks it as a page for Visual Editor
          urlPath: "/{slug}",     // Maps to the page URL
          filePath: "content/pages/{slug}.md", // Path template for files
          fields: [
            { name: "title", type: "string", required: true }, // Page title
            { name: "body", type: "markdown_content" }         // Page content
          ]
        },
        {
          name: "BlogPost",
          type: "page",
          urlPath: "/blog/{slug}",
          filePath: "content/blog/{slug}.md",
          fields: [
            { name: "title", type: "string", required: true },
            { name: "excerpt", type: "string" },
            { name: "body", type: "markdown_content" },
            { name: "date", type: "date" }
          ]
        }
      ]
    })
  ],
});
