import { ChromaClient } from "chromadb";
import { getConfig, readText } from "./utils";
import { chunkTextBySentences } from "matts-llm-tools";
import ollama from "ollama";

const collectionName = "buildragwithts";
const { embedmodel } = getConfig();

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

const docstoimport = (await Bun.file("sourcedocs.txt").text()).split("\n");

for (const doc of docstoimport) {
  console.log(`\nEmbedding chunks from ${doc}\n`);
  const text = await readText(doc);
  const chunks = chunkTextBySentences(text, 7, 2);

  for await (const [index, chunk] of chunks.entries()) {
    const embed = (
      await ollama.embeddings({
        model: embedmodel,
        prompt: chunk,
      })
    ).embedding;
    await collection.add({
      ids: [doc + index],
      embeddings: [embed],
      metadatas: {
        source: doc,
      },
      documents: [chunk],
    });
    process.stdout.write(".");
  }
}
