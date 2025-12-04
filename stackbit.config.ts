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
          name: "Post",          // Model name
          type: "page",          // Tell editor this is a page
          urlPath: "/{slug}",    // URL path pattern for pages
          filePath: "content/pages/{slug}.md", // Where the files live
          fields: [
            { name: "title", type: "string", required: true },
            { name: "body", type: "markdown", required: true } // Optional: body content
          ]
        }
      ]
    })
  ]
});
