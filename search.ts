import ollama from "ollama";
import { ChromaClient } from "chromadb";
import { getConfig } from "./utils";

const { embedmodel, mainmodel } = getConfig();
const collectionName = "buildragwithts";

const chroma = new ChromaClient({
  path: "localhost:8000",
});
const collection = await chroma.getOrCreateCollection({
  name: collectionName,
});
const query = process.argv.slice(2).join(" ");
const queryembed = (
  await ollama.embeddings({
    model: embedmodel,
    prompt: query,
  })
).embedding;
const relevantDocs = (
  await collection.query({
    queryEmbeddings: [queryembed],
    nResults: 5,
  })
).documents[0].join("\n\n");

const modelQuery = `${query} - Answer that question using the following text as a resource: ${relevantDocs}`;

const stream = await ollama.generate({
  model: mainmodel,
  prompt: modelQuery,
  stream: true,
});

for await (const chunk of stream) {
  process.stdout.write(chunk.response);
}
