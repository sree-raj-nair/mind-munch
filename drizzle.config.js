/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./utils/schema.tsx",
    dialect: 'postgresql',
    dbCredentials: {
      url: 'postgresql://ai-app_owner:bD4VC8ZWBopM@ep-square-limit-a5k45g6c.us-east-2.aws.neon.tech/ai-app?sslmode=require',
    }
  };