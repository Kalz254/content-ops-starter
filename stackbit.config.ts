import { defineStackbitConfig } from "@stackbit/types";
import { GitContentSource } from "@stackbit/cms-git";

export default defineStackbitConfig({
  stackbitVersion: "0.1.0", // required
  contentSources: [
    new GitContentSource({
      rootPath: __dirname,
      contentDirs: ["content"],
      models: [
        {
          name: "Post",
          type: "page",          // mark as page
          urlPath: "/{slug}",    // connect model to URL
          filePath: "content/pages/{slug}.md",
          fields: [
            { name: "title", type: "string", required: true },
            { name: "markdown_content", type: "markdown_content" }
          ]
        }
      ]
    })
  ]
});
