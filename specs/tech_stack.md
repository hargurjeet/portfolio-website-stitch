# Tech Stack & Guidelines

## Core Technologies
- **Framework**: Next.js (App Router, React 19, TypeScript)
- **Styling**: Vanilla CSS / CSS Modules
- **Fonts**: Source Serif 4 (headings & body text), JetBrains Mono (data/utility labels & status tags)

## Portfolio Tech Stack List (From Live Site)

### 1. Generative AI
- RAG Patterns, Agents, Fine-tuning, Guardrails, PII Filtering, Vector DB, Observability, MCP

### 2. LLM Frameworks & APIs
- LangChain, LangGraph, CrewAI, OpenAI API, Anthropic API, Gemini API, Langfuse, Ragas (RAGAS)

### 3. MLOps
- Docker, FastAPI, MLflow, CI/CD, GitHub Actions, GitLab, AWS SageMaker, Feature Store

### 4. Cloud (AWS)
- Bedrock, Textract, OpenSearch, Lambda, Step Functions, CloudWatch, SageMaker

### 5. Core ML & Data
- XGBoost, Random Forests, PyTorch, TensorFlow, scikit-learn, BERT, PySpark, SQL

### 6. Agentic Coding Tools
- Cursor, Claude Code, Kiro, Amazon Q Developer, VS Code, GitHub Copilot

## Stitch Design Integration (Strict Compliance)
All components and layouts must match the completed **Hargurjeet Portfolio - Refined Scientific Pop** design (Screen ID: `db841db45fea4692b7951c9adae25064`) retrieved via the Stitch MCP Server.

### Design System Tokens:
*   **Colors**:
    *   `--primary`: `#9d4300` (Rust Orange)
    *   `--primary-container`: `#f97316` (Vibrant Orange)
    *   `--surface`: `#fff8f6` (Warm Off-white)
    *   `--on-surface`: `#251913` (Dark Charcoal)
    *   `--outline`: `#8c7164`
    *   `--white`: `#ffffff`
*   **Borders & Geometry**:
    *   `border: 2px solid var(--on-surface)` or `border: 2.5px solid var(--on-surface)` for all cards and buttons.
    *   `0px` border-radius (sharp, square corners) for cards, buttons, and inputs.
*   **Elevation & Depth**:
    *   No soft gradients or blurs. Depth is created via a hard-offset black shadow (`box-shadow: 4px 4px 0px 0px #251913` or similar).
    *   Hover/Active States: Shift and scale slightly (`active:translate-x-0.5 active:translate-y-0.5`).
