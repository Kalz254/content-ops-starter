import { GitContentSource } from "@stackbit/cms-git";
import { defineStackbitConfig } from "@stackbit/types";

export default defineStackbitConfig({
  stackbitVersion: "0.1.0",  // ✅ ADD THIS LINE
  contentSources: [
    new GitContentSource({
      rootPath: __dirname,
      contentDirs: ["content"],
      models: [
        {
          name: "Post",
          type: "page",
          urlPath: "/{slug}",
          filePath: "content/pages/{slug}.md",
          fields: [{ name: "title", type: "string", required: true }]
        }
      ]
    })
  ]
});
