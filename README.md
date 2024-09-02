# ts-rag-chromadb-ollama

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
ollama run llama3.1
```

### Import

```bash
bun run import.ts
```

This project was created using `bun init` in bun v1.1.26. [Bun](https://bun.sh) is a fast all-in-one JavaScript runtime.

- [chromadb](https://cookbook.chromadb.dev/running/running-chroma/)
- [ollama](https://github.com/ollama/ollama?tab=readme-ov-file)
