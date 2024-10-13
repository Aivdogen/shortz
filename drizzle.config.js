
import { defineConfig } from "drizzle-kit";

export default defineConfig({
  schema: "./config/schema.js",
  dialect: "postgresql",
  dbCredentials: {
    url: 'postgresql://aivdogen_owner:iqoMD4YUT3AZ@ep-ancient-tree-a5nb7b3g.us-east-2.aws.neon.tech/aivdogen?sslmode=require',
  },
});
