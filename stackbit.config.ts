import { GitContentSource } from "@stackbit/cms-git";
import { defineStackbitConfig } from "@stackbit/types";

export default defineStackbitConfig({
  stackbitVersion: "0.1.0",
  contentSources: [
    new GitContentSource({
      rootPath: __dirname,
      contentDirs: ["content"],
      models: [
        {
          name: "Page",
          type: "page",
          urlPath: "/{slug}", // this creates the URL automatically
          filePath: "content/pages/blog/{slug}.md",
          fields: [
            { name: "title", type: "string", required: true },
            { name: "body", type: "markdown", required: true }
          ]
        }
      ]
    })
  ]
});
