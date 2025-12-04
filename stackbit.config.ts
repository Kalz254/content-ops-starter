import { GitContentSource } from "@stackbit/cms-git";
import { defineStackbitConfig } from "@stackbit/types";

export default defineStackbitConfig({
  stackbitVersion: "0.1.0",  // Required property
  contentSources: [
    new GitContentSource({
      rootPath: __dirname,
      contentDirs: ["content"], // Root content folder
      models: [
        {
          name: "Post",                 // Model name
          type: "page",                 // Tells editor this is a page
          urlPath: "/blog/{slug}",      // URL pattern for pages
          filePath: "content/pages/blog/{slug}.md", // Folder where Markdown files live
          fields: [
            { name: "title", type: "string", required: true },
            { name: "body", type: "markdown", required: true } // Body content field
          ]
        }
      ]
    })
  ]
});
