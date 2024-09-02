import { ChromaClient } from "chromadb";

const collectionName = "buildragwithts";

const chroma = new ChromaClient({
  path: "http://localhost:8000",
});
// NOTE: Normally you would not want to to this, but in this example we are deleting the collection
await chroma.deleteCollection({
  name: collectionName,
});
const collection = await chroma.getOrCreateCollection({
  name: collectionName,
});

console.log("Collection", collection);
