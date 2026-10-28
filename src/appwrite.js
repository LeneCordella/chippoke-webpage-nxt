import { Client } from "appwrite";

const endpoint =
  process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT ??
  "https://nyc.cloud.appwrite.io/v1";
const projectId =
  process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID ?? "6ada7b3f002a5aeb3602";

const client = new Client().setEndpoint(endpoint).setProject(projectId);

export { client };
export default client;
