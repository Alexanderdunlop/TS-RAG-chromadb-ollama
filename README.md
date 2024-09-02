# Basic TS RAG Application

To install dependencies:

## Install

```bash
bun install
```

To run Chroma:

## Run

### Chroma

```bash
chroma run --host localhost --port 8000 --path ./my_chroma_data
```

### Ollama

```bash
ollama run gemma:2b
```

Make sure you pull

```bash
ollama pull nomic-embed-text
```

```bash
ollama pull gemma:2b
```

### Import

```bash
bun run import.ts
```

### Search

```bash
bun run What happened in Taiwan
```

```bash
bun run What is the vision pro
```

### Info

This project was created using `bun init` in bun v1.1.26. [Bun](https://bun.sh) is a fast all-in-one JavaScript runtime.

- [chromadb](https://cookbook.chromadb.dev/running/running-chroma/)
- [ollama](https://github.com/ollama/ollama?tab=readme-ov-file)
- [nomic](https://ollama.com/library/nomic-embed-text)

### More things to do

- If it is a new site then all the more recent data will be more relevant add dates to the meta data and sort the results by date.

- If the question has a date in it, then filters down the search to only documents from that date.

- Search using the web app then import and embed the top 5 results, then do a similarity search and get the answer from the model.
