"use client";

import React, { useState } from "react";

interface Project {
  id: string;
  title: string;
  category: string;
  year: string;
  image?: string;
  icon?: string;
  description: string;
  bullets: string[];
  outcome: string;
  tags: string[];
  github?: string;
  live?: string;
}

const projects: Project[] = [
  {
    id: "antigravity",
    title: "Antigravity: Autonomous UI Designer",
    category: "AI Agents",
    year: "2024",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDz7UGgxLO-SzscKyVk4PJtd2OFFAy7UarNo9YVqTHoj84naXMm3pr0RMzbkp-pxji8Vh4hhIVv_DxfJDLK8VsjSMnIpU-JRbj9uMSO93MFR3LeQmWVklrlC-F8S_daHE1N_qxkCQ-31bWsbZJCFYy65HNOLq5CE92Y9BvXP2dXEafyRbVZa3o2GTej_vMRKQu3FH1JpUUQbMjCF-Do5DKDqMvcly7uXB76ZakuCY1xpoBqguKbnww3",
    description: "Autonomous redraw cycles & context retention across agentic iterations using Gemini 2.5.",
    bullets: [
      "**Closed-Loop Critic**: Triggers autonomous redraw cycles by validating mockup images against guidelines.",
      "**Evaluator Scoring**: Computes quantitative metrics for brand consistency, color alignment, and layout accuracy to score attempts.",
      "**State & Memory**: Manages agent context and state retention across iterations using a central memory store to refine subsequent generation.",
      "**Robust Guardrails**: Enforces strict boundaries via JSON schema validation, retry loops, and degrade-gracefully fallbacks.",
      "**Streaming Timeline**: Traces and displays the agentic step-by-step cognitive thoughts and evaluations alongside intermediate drawing cycles.",
      "**Google Agentic Systems**: Orchestrates multimodal Gemini 2.5 and Imagen 4 Ultra models to analyze briefs and generate images."
    ],
    outcome: "A state-of-the-art design workspace demonstrating expert command over multimodal image data through self-correcting agentic loops.",
    tags: ["Gemini 2.5", "Imagen 4", "Google Agentic Systems", "Critique Loop", "Memory", "Next.js", "Tailwind"],
    live: "https://antigravity-studio-blush.vercel.app/Antigravitystudio"
  },
  {
    id: "organizer",
    title: "Local Multi-Agent Folder Organizer",
    category: "AI Agents",
    year: "2024",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDbPOu3vJZrcLbj6V6RNno9V8BenMHlMr32YGylpV3ySo2yOfNlFCZ_YdLXi6NPOPy493rSDDXEcD1ijSO-OtcqRdGW96afmyvRDeoBNRQqYogScZnunuJt5IX30klxIdPO0zQVd3nGP8_ouf46gYp3y8jOdxicCpP5nr1LA2OWGEJ-nmWK4uPxsbNCIuLY77mwAqxS0k_jXoCizPWmrIvzO2y8-AByNazctphl_mD3eXWOATgrrqLI",
    description: "A local-first system running fully on-device via Ollama that restructures cluttered downloads folders into semantic, context-aware nested subdirectories.",
    bullets: [
      "**Hierarchical Architecture**: Configures a lead orchestrator agent that partitions folder listings into subtask categories, preventing context window limits.",
      "**Multi-Agent Concurrency**: Spawns category-specific specialist subagents in parallel using a Python ThreadPoolExecutor to slash local Ollama inference latency by 60%.",
      "**Pydantic Output Validation**: Enforces strict JSON schemas on local SLMs using CrewAI's output parsing, guaranteeing zero formatting errors.",
      "**Human-in-the-Loop Safe Gate**: Implements a CLI preview table and user confirmation prompt before mutating any folder structure, supporting a dry-run mode.",
      "**Transactional Rollback Log**: Records all file migrations atomically in a central history.json transaction log, facilitating instant programmatic recovery."
    ],
    outcome: "A local-first system running fully on-device via Ollama that restructures cluttered downloads folders into semantic, context-aware nested subdirectories.",
    tags: ["CrewAI", "Ollama", "Llama 3.2", "Pydantic", "Python", "Local LLMs", "Systems Automation"],
    github: "https://github.com/hargurjeet/local_agent_organizer"
  },
  {
    id: "benchmarking",
    title: "Local AI Assistant & SLM Benchmarking",
    category: "AI & Benchmarks",
    year: "2024",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCagh6Kwhs_9vqs24p699vgrMx6LTo7_bWbe6t171BXtG6sHPllQihER6vLFYFcUv2Me2jkrGMYemR7OHWRbLas_vbzoxXBDspJ_ghICyWeJgyNnKfe51bnOeU3Hs4Ozv4XHGQCCvuzWM31DR6KfWFOO3WNM7UqJQDbGlfzfWL-mOUkiyxuvR68RkJn758578wgERkJCWMNEuN8nyeCzIXDKp6hVRlx4otyddX5vtJ6MSdg_BIRMz8P",
    description: "Rigorous local benchmark of 30 multi-domain prompts published on Dev.to and GitHub. Proved Llama 3.2 (3B) is the most reliable for structured JSON.",
    bullets: [
      "**Local SLM evaluation**: Developed a FastAPI testing harness benchmarking Llama 3.2 (3B), Phi-3 Mini (3.8B), and Mistral (7B) fully on-device via Ollama.",
      "**Inference speed profiling**: Measured performance where Phi-3 Mini led at 22.70 tokens/sec (323.99ms TTFT), and Llama 3.2 followed at 22.24 tokens/sec (427.29ms TTFT).",
      "**Pydantic schema enforcement**: Structured LLM outputs using validation schemas. Llama 3.2 achieved 100% compliance via retry reprompts, and Mistral 7B achieved 90% compliance.",
      "**Resource allocation tracking**: Measured memory-bound constraints on Apple Silicon Mac mini (16GB RAM) where CPU load remained low (13-15%) but memory hit 88.8% to 94.4%."
    ],
    outcome: "Rigorous local benchmark of 30 multi-domain prompts. Proved Llama 3.2 (3B) is the most reliable for structured JSON pipelines, while Phi-3 Mini excels in speed.",
    tags: ["Ollama", "FastAPI", "Llama 3.2", "Mistral 7B", "Phi-3", "Pydantic", "Python", "Apple Silicon"],
    github: "https://github.com/hargurjeet/local_slm_experiments"
  },
  {
    id: "mcp",
    title: "Generic Database MCP Server",
    category: "MCP & Developer Tools",
    year: "2024",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=600&q=80",
    description: "Pass any DuckDB file and get a full data-quality report + LLM-written root cause analysis in seconds — no config, no hardcoded schema.",
    bullets: [
      "**Zero hardcoding** — connects to any DuckDB file and auto-discovers every table and column at runtime.",
      "**Type-aware quality checks**: numeric columns get distribution stats + Z-score; VARCHAR gets cardinality; TIMESTAMP gets gap detection.",
      "**Ollama ReAct loop**: llama3.2 iteratively calls MCP tools, drills into anomalies, and writes a plain-English RCA report.",
      "**FastAPI REST layer**: exposes drag-and-drop file upload, per-table quality checks, and RCA generation as HTTP endpoints.",
      "**Next.js dashboard**: visualises schema, null rates, distribution cards, and cardinality in a 3-step upload flow."
    ],
    outcome: "Pass any DuckDB file and get a data-quality report + LLM-written root cause analysis in seconds — no config, no hardcoded schema.",
    tags: ["FastMCP", "DuckDB", "Ollama", "llama3.2", "FastAPI", "Next.js", "Recharts", "Python"],
    github: "https://github.com/hargurjeet/database-mcp"
  },
  {
    id: "parser",
    title: "AI-Powered Resume Parser",
    category: "AI Applications",
    year: "2024",
    image: "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=600&q=80",
    description: "Structured output guaranteed at the schema level — retry logic and graceful failure handle the edge cases that plain prompting misses.",
    bullets: [
      "**PDF -> structured JSON pipeline**: pdfplumber extracts text -> Llama 3.3 70B parses via Fireworks AI.",
      "**JSON schema enforcement**: instructor library constrains LLM output to an exact Pydantic v2 model.",
      "**Retry mechanism**: catches invalid outputs, re-prompts the LLM once, then fails gracefully — no silent errors.",
      "**Split-view UI**: original PDF alongside experience timeline, color-coded skill tags, and education cards.",
      "**One-click JSON export**: drag-and-drop upload with animated progress steps, dark/light mode."
    ],
    outcome: "Live on Fly.io. Structured output guaranteed at the schema level — retry logic and graceful failure handle the edge cases that plain prompting misses.",
    tags: ["FastAPI", "Next.js", "Llama 3.3 70B", "Fireworks AI", "pdfplumber", "Pydantic", "Fly.io"],
    live: "https://hargurjeet-resume-ui.fly.dev"
  },
  {
    id: "rag",
    title: "Production-Grade RAG Evaluation Pipeline",
    category: "RAG & LLMOps",
    year: "2023",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=600&q=80",
    description: "Quality regressions caught at PR stage, not in production. Stack: LangChain/LangGraph, Chroma vector store, Cohere reranker — every retrieval step traceable.",
    bullets: [
      "**Hybrid retrieval**: BM25 sparse + contextual dense search — fed through a Cohere reranker.",
      "**Citation enforcement**: grounds every answer in source documents; no hallucinated references.",
      "**Prompts version-controlled**: every change is tracked and reproducible in a config file.",
      "**Offline RAGAS script**: measures faithfulness, answer relevancy, and context precision.",
      "**GitHub Actions gate**: runs eval on every PR; merge blocked if any metric drops below threshold."
    ],
    outcome: "Quality regressions caught at PR stage, not in production. Stack: LangChain/LangGraph, Chroma vector store, Cohere reranker — every retrieval step traceable, every prompt change auditable.",
    tags: ["RAG", "RAGAS", "BM25", "LangChain", "LangGraph", "Cohere", "Chroma", "GitHub Actions", "Python"],
    live: "https://huggingface.co/spaces/Hargurjeet/hybrid-rag-nextjs"
  }
];

interface Experience {
  role: string;
  company: string;
  companyUrl: string;
  location: string;
  period: string;
  bullets: string[];
}

const experiences: Experience[] = [
  {
    role: "Senior Data Scientist",
    company: "BT Group",
    companyUrl: "https://www.bt.com/",
    location: "Bangalore, India",
    period: "May 2022 – Present",
    bullets: [
      "Architected and led delivery of an enterprise-grade **conversational AI system (LLMs + RAG)**, reducing manual document extraction time by **70%** while processing **100K+ files** with **90%+ accuracy** via **AWS Bedrock** and **OpenSearch**.",
      "Designed and deployed multi-step **agentic workflows** using **CrewAI** and **LangGraph**, integrating **JSON schema validation**, retry loops, and custom **hallucination guardrails** in production.",
      "Developed an **LLM evaluation framework** using **Ragas** and **LLM-as-judge** pipelines to assess faithfulness, toxicity, bias, and hallucination detection.",
      "Built an automated **email intelligence pipeline** processing **6,000+ weekly escalation emails**, fine-tuning a **LLaMA-2 7B** model locally via **QLoRA** for a **40% F1-score improvement**.",
      "Engineered **recommendation systems** (**Random Forest + XGBoost**) and market basket analysis (**Apriori**) increasing **SD-WAN sales by 10%** and **Value-Added Services (VAS) sales by 30%**."
    ]
  },
  {
    role: "Data Scientist",
    company: "Royal Dutch Shell",
    companyUrl: "https://www.shell.com/",
    location: "Bangalore, India",
    period: "Sep 2016 – May 2022",
    bullets: [
      "Developed and evaluated **predictive maintenance models** (**XGBoost, Random Forest**) using **SHAP**-based interpretability and ROC-AUC scoring, cutting equipment maintenance costs by **30%** and unplanned downtime by **25%**.",
      "Engineered end-to-end **data pipelines** in **Python (Pandas, NumPy)** and developed **Power BI** dashboards to forecast materials on-time delivery across 5 geographies, saving **10% budget**.",
      "Acquired 5+ years of experience with **data warehousing**, **ETL pipelines**, **big data analytics**, and **relational databases**."
    ]
  },
  {
    role: "IT Analyst",
    company: "Tata Consultancy Services (TCS)",
    companyUrl: "https://www.tcs.com/",
    location: "India / UK",
    period: "Dec 2010 – Aug 2016",
    bullets: [
      "Performed **System Integration Testing (SIT)** and **User Acceptance Testing (UAT)** to validate client **Point-of-Sale (PoS)** systems at enterprise scale.",
      "Spent **one year in the UK onsite** guiding **offshore teams** through the implementation of new PoS software.",
      "Acquired extensive experience working with **card and payment systems**, **PCI standards**, and **ISO 8583 protocols**."
    ]
  }
];


export default function Home() {
  // State for collapsible project cards
  const [expandedProjects, setExpandedProjects] = useState<Record<string, boolean>>({});

  // State for showing all 6 projects or only the first 3
  const [showAllProjects, setShowAllProjects] = useState(false);

  // State for showing all experience entries (default: BT only)
  const [showAllExperience, setShowAllExperience] = useState(false);

  const toggleProject = (id: string) => {
    setExpandedProjects((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div className="bg-surface text-on-surface font-body-md overflow-x-hidden">
      {/* Header */}
      <header className="w-full border-b-2 border-on-surface sticky top-0 bg-surface z-50">
        <nav className="flex justify-between items-center px-lg py-md max-w-container-max mx-auto">
          <div className="font-display-lg text-display-lg-mobile md:text-display-lg text-primary font-black tracking-tighter">
            H_SINGH_AI
          </div>
          <div className="hidden md:flex gap-lg items-center">
            <a
              className="font-label-caps text-label-caps uppercase tracking-wider text-primary font-bold border-b-2 border-primary transition-colors duration-150 py-1"
              href="#projects"
            >
              Projects
            </a>
            <a
              className="font-label-caps text-label-caps uppercase tracking-wider text-on-surface-variant hover:text-primary transition-colors duration-150 py-1"
              href="#experience"
            >
              Experience
            </a>
            <a
              className="font-label-caps text-label-caps uppercase tracking-wider text-on-surface-variant hover:text-primary transition-colors duration-150 py-1"
              href="#value"
            >
              Stack
            </a>
            <a
              className="font-label-caps text-label-caps uppercase tracking-wider text-on-surface-variant hover:text-primary transition-colors duration-150 py-1"
              href="#contact"
            >
              Contact
            </a>
          </div>
          <a
            href="/resume.pdf"
            download="Hargurjeet_Singh_Resume.pdf"
            className="neo-brutalist-border bg-primary-container text-white px-md py-sm font-label-caps hard-shadow-sm active:translate-x-0.5 active:translate-y-0.5 transition-transform btn-shift inline-block text-center"
          >
            RESUME.PDF
          </a>
        </nav>
      </header>

      {/* Main Content */}
      <main className="max-w-container-max mx-auto px-lg py-xl space-y-xl">
        
        {/* Hero Section */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-lg">
          {/* Bio Card */}
          <div className="md:col-span-8 neo-brutalist-border p-lg flex flex-col gap-lg bg-white hard-shadow relative overflow-hidden">
            <div className="z-10">
              {/* Option B — Availability Badge */}
              <div className="flex flex-wrap items-center gap-md mb-md">
                <div className="inline-block bg-primary-container text-white font-code-sm text-code-sm px-2 py-1">
                  [ PRINCIPAL_GENAI_ARCHITECT ]
                </div>
                <div className="flex items-center gap-xs neo-brutalist-border px-sm py-1 bg-white">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                  </span>
                  <span className="font-code-sm text-code-sm text-green-700 uppercase tracking-wider">Open to Senior AI/ML Roles</span>
                </div>
              </div>

              <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-on-surface mb-md">
                Hargurjeet Singh Ganger. <br />
                <span className="italic text-primary">Enterprise AI at Scale.</span>
              </h1>
              <p className="font-body-lg text-body-lg max-w-2xl mb-md">
                I bridge the gap between proof-of-concept AI models and resilient, production-grade Generative AI architectures. Specializing in enterprise RAG systems and autonomous agentic workflows.
              </p>

              {/* Option B — CTA Buttons */}
              <div className="flex flex-wrap gap-md mb-lg">
                <a
                  href="#projects"
                  className="neo-brutalist-border bg-primary-container text-white px-md py-sm font-label-caps hard-shadow-sm active:translate-x-0.5 active:translate-y-0.5 transition-transform btn-shift inline-block"
                >
                  → VIEW PROJECTS
                </a>
                <a
                  href="/resume.pdf"
                  download="Hargurjeet_Singh_Resume.pdf"
                  className="neo-brutalist-border bg-white text-on-surface px-md py-sm font-label-caps hard-shadow-sm active:translate-x-0.5 active:translate-y-0.5 transition-transform btn-shift inline-block"
                >
                  ↓ DOWNLOAD RESUME
                </a>
              </div>
            </div>

            {/* Option C — Animated Skill Tags Strip */}
            <div className="overflow-hidden border-t-2 border-on-surface pt-md z-10">
              <div className="flex gap-sm animate-scroll-x whitespace-nowrap">
                {[
                  "LLMs", "RAG", "LangGraph", "CrewAI", "AWS Bedrock", "MLOps",
                  "Python", "OpenSearch", "Fine-tuning", "Vector DB", "LangChain",
                  "Ragas", "Agents", "QLoRA", "FastAPI", "XGBoost", "Guardrails",
                  "LLMs", "RAG", "LangGraph", "CrewAI", "AWS Bedrock", "MLOps",
                  "Python", "OpenSearch", "Fine-tuning", "Vector DB", "LangChain",
                  "Ragas", "Agents", "QLoRA", "FastAPI", "XGBoost", "Guardrails",
                ].map((skill, i) => (
                  <span
                    key={i}
                    className="neo-brutalist-border bg-surface-container-low px-sm py-xs font-code-sm text-code-sm shrink-0"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Option A — Impact Metrics */}
            <div className="grid grid-cols-3 gap-md border-t-2 border-on-surface pt-md z-10">
              <div className="flex flex-col">
                <span className="font-display-lg text-3xl md:text-4xl font-black text-primary leading-none">10+</span>
                <span className="font-label-caps text-label-caps text-on-surface-variant uppercase mt-xs leading-tight">Years Data Science Experience</span>
              </div>
              <div className="flex flex-col">
                <span className="font-display-lg text-3xl md:text-4xl font-black text-primary leading-none">100K+</span>
                <span className="font-label-caps text-label-caps text-on-surface-variant uppercase mt-xs leading-tight">Files / Docs Processed</span>
              </div>
              <div className="flex flex-col">
                <span className="font-display-lg text-3xl md:text-4xl font-black text-primary leading-none">$50M+</span>
                <span className="font-label-caps text-label-caps text-on-surface-variant uppercase mt-xs leading-tight">Value Realised</span>
              </div>
            </div>

            {/* Background Pattern */}
            <div className="absolute right-0 top-0 opacity-5 pointer-events-none">
              <span className="material-symbols-outlined text-[220px]" style={{ fontVariationSettings: '"wght" 200' }}>
                memory
              </span>
            </div>
          </div>

          {/* Profile Image Card */}
          <div className="md:col-span-4 neo-brutalist-border overflow-hidden hard-shadow bg-surface-container">
            <img
              alt="Hargurjeet Singh Portrait"
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
              src="https://lh3.googleusercontent.com/aida/AP1WRLsyhwdIq10gOGKyCywgcZKSmAA7h2quJnQwVeELOXEqdAqTTZu_La7AmT0u1uFpu6qHRZfaXRSGerbtBTsaSII_bX-Kxog-eIeDhAfGbbMD6_8pPNOcg0zW0i58bwa36-ImxMs_crkUL1T3cAUXCtSgIN7QaYlVf2Rvi5IFPrPUIa7IEGdtdtD4qEQxIpU4P4sqKtsvaOE7HJNH7JMMmGfiOmThjFThSINB5_d0Vj-AMAa3CDM6AYuWmlQ"
            />
          </div>

          {/* Metric Card */}
          <div className="md:col-span-4 neo-brutalist-border p-lg bg-primary-container text-white hard-shadow flex flex-col justify-center items-center text-center">
            <span className="font-display-lg text-6xl md:text-8xl font-black mb-sm">70%</span>
            <span className="font-label-caps text-label-caps uppercase tracking-widest border-t border-white pt-sm">
              Reduction in Model Latency
            </span>
            <p className="font-code-sm text-code-sm mt-md opacity-90">
              Achieved via custom quantization &amp; RAG pruning.
            </p>
          </div>

          {/* Tech Stack Bento */}
          <div id="value" className="md:col-span-8 neo-brutalist-border p-lg bg-white hard-shadow">
            <h3 className="font-label-caps text-label-caps text-on-surface mb-md flex items-center gap-xs">
              <span className="material-symbols-outlined">terminal</span> TECHNICAL_STACK
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-md mb-lg">
              {/* Generative AI */}
              <div>
                <h4 className="font-label-caps text-label-caps text-primary uppercase mb-xs" style={{ fontSize: '11px' }}>Generative AI</h4>
                <div className="flex flex-wrap gap-xs">
                  {["RAG Patterns", "Agents", "Fine-tuning", "Guardrails", "PII Filtering", "Vector DB", "Observability", "MCP"].map((tech) => (
                    <span key={tech} className="neo-brutalist-border bg-surface-container-low px-2 py-0.5 font-code-sm" style={{ fontSize: '11px', lineHeight: '14px' }}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* LLM Frameworks & APIs */}
              <div>
                <h4 className="font-label-caps text-label-caps text-primary uppercase mb-xs" style={{ fontSize: '11px' }}>Frameworks &amp; APIs</h4>
                <div className="flex flex-wrap gap-xs">
                  {["LangChain", "LangGraph", "CrewAI", "OpenAI API", "Anthropic API", "Gemini API", "Langfuse", "Ragas"].map((tech) => (
                    <span key={tech} className="neo-brutalist-border bg-surface-container-low px-2 py-0.5 font-code-sm" style={{ fontSize: '11px', lineHeight: '14px' }}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* MLOps */}
              <div>
                <h4 className="font-label-caps text-label-caps text-primary uppercase mb-xs" style={{ fontSize: '11px' }}>MLOps &amp; Infra</h4>
                <div className="flex flex-wrap gap-xs">
                  {["Docker", "FastAPI", "MLflow", "CI/CD", "GitHub Actions", "GitLab", "AWS SageMaker", "Feature Store"].map((tech) => (
                    <span key={tech} className="neo-brutalist-border bg-surface-container-low px-2 py-0.5 font-code-sm" style={{ fontSize: '11px', lineHeight: '14px' }}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Cloud (AWS) */}
              <div>
                <h4 className="font-label-caps text-label-caps text-primary uppercase mb-xs" style={{ fontSize: '11px' }}>Cloud (AWS)</h4>
                <div className="flex flex-wrap gap-xs">
                  {["Bedrock", "Textract", "OpenSearch", "Lambda", "Step Functions", "CloudWatch", "SageMaker"].map((tech) => (
                    <span key={tech} className="neo-brutalist-border bg-surface-container-low px-2 py-0.5 font-code-sm" style={{ fontSize: '11px', lineHeight: '14px' }}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Core ML & Data */}
              <div>
                <h4 className="font-label-caps text-label-caps text-primary uppercase mb-xs" style={{ fontSize: '11px' }}>Core ML &amp; Data</h4>
                <div className="flex flex-wrap gap-xs">
                  {["XGBoost", "Random Forests", "PyTorch", "TensorFlow", "scikit-learn", "BERT", "PySpark", "SQL"].map((tech) => (
                    <span key={tech} className="neo-brutalist-border bg-surface-container-low px-2 py-0.5 font-code-sm" style={{ fontSize: '11px', lineHeight: '14px' }}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Agentic Coding Tools */}
              <div>
                <h4 className="font-label-caps text-label-caps text-primary uppercase mb-xs" style={{ fontSize: '11px' }}>Agentic Tools</h4>
                <div className="flex flex-wrap gap-xs">
                  {["Cursor", "Claude Code", "Kiro", "Amazon Q", "VS Code", "GitHub Copilot"].map((tech) => (
                    <span key={tech} className="neo-brutalist-border bg-surface-container-low px-2 py-0.5 font-code-sm" style={{ fontSize: '11px', lineHeight: '14px' }}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="border-t border-on-surface pt-md grid grid-cols-1 md:grid-cols-2 gap-md">
              <div>
                <h4 className="font-label-caps text-label-caps text-primary uppercase">Specializations</h4>
                <p className="font-body-md text-body-md mt-xs">
                  Scalable RAG Pipelines, Agentic Workflows, LLM Eval Frameworks, AWS Bedrock.
                </p>
              </div>
              <div>
                <h4 className="font-label-caps text-label-caps text-primary uppercase">Philosophy</h4>
                <p className="font-body-md text-body-md mt-xs">
                  I bridge proof-of-concept AI with resilient, production-grade architectures.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Project Grid */}
        <section className="space-y-lg" id="projects">
          <div className="flex items-end justify-between border-b-2 border-on-surface pb-sm">
            <h2 className="font-display-lg text-display-lg-mobile md:text-headline-md uppercase font-black">
              Featured_Projects
            </h2>
            <span className="font-code-sm text-code-sm text-on-surface-variant">
              {showAllProjects ? "06 PRIMARY / 06 TOTAL" : "03 PRIMARY / 06 TOTAL"}
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-lg">
            {projects.slice(0, showAllProjects ? 6 : 3).map((project) => (
              <div key={project.id} className="neo-brutalist-border bg-white hard-shadow-hover transition-all group flex flex-col">
                <div className="h-48 bg-surface-container-highest border-b-2 border-on-surface relative overflow-hidden">
                  {project.image ? (
                    <div
                      className="w-full h-full bg-cover bg-center grayscale group-hover:grayscale-0 transition-all duration-500"
                      style={{
                        backgroundImage: `url("${project.image}")`,
                        backgroundPosition: "center",
                        backgroundSize: "cover"
                      }}
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-primary-container text-white">
                      <span className="material-symbols-outlined text-[80px]">
                        {project.icon}
                      </span>
                    </div>
                  )}
                  <div className="absolute top-sm right-sm bg-on-surface text-white px-2 py-1 font-code-sm text-xs">{project.year}</div>
                </div>
                
                <div className="p-md flex-grow flex flex-col justify-between">
                  <div>
                    <span className="font-label-caps text-[10px] text-primary block mb-xs">{project.category}</span>
                    <h3 className="font-headline-md text-headline-md mb-xs">{project.title}</h3>
                    <p className="font-body-md text-body-md text-on-surface-variant mb-md">
                      {project.description}
                    </p>

                    {/* Collapsible Details */}
                    <div className={`collapsible-content space-y-2 mb-md text-sm border-t border-surface-variant pt-2 ${expandedProjects[project.id] ? "expanded" : "collapsed"}`}>
                      <ul className="list-disc ml-4 font-body-md text-on-surface-variant">
                        {project.bullets.map((bullet, idx) => {
                          const parts = bullet.split(/(\*\*.*?\*\*)/);
                          return (
                            <li key={idx}>
                              {parts.map((part, pIdx) => {
                                if (part.startsWith("**") && part.endsWith("**")) {
                                  return <strong key={pIdx} className="font-semibold text-on-surface">{part.slice(2, -2)}</strong>;
                                }
                                return part;
                              })}
                            </li>
                          );
                        })}
                      </ul>
                      <div className="rounded-xl p-4 mt-md bg-surface-container border-l-4 border-l-primary leading-relaxed text-xs">
                        <span className="font-bold text-on-surface">Outcome: </span>
                        {project.outcome}
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-xs mb-md mt-auto">
                    {project.tags.map((tag) => (
                      <span key={tag} className="bg-surface-variant px-2 py-1 text-xs font-code-sm">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="p-md pt-0 mt-auto space-y-xs">
                  <button
                    onClick={() => toggleProject(project.id)}
                    className="w-full neo-brutalist-border py-2 font-label-caps text-label-caps hover:bg-primary-container hover:text-white transition-colors flex items-center justify-center gap-xs"
                  >
                    {expandedProjects[project.id] ? "HIDE_DETAILS" : "VIEW_DETAILS"}
                    <span
                      className="material-symbols-outlined transition-transform"
                      style={{ transform: expandedProjects[project.id] ? "rotate(180deg)" : "rotate(0)" }}
                    >
                      expand_more
                    </span>
                  </button>
                  
                  {(project.github || project.live) && (
                    <div className="flex gap-xs">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 neo-brutalist-border py-1.5 text-center font-label-caps text-[10px] btn-github transition-colors flex items-center justify-center gap-xs btn-shift"
                        >
                          GITHUB <span className="material-symbols-outlined text-xs">open_in_new</span>
                        </a>
                      )}
                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 neo-brutalist-border py-1.5 text-center font-label-caps text-[10px] btn-live transition-colors flex items-center justify-center gap-xs btn-shift"
                        >
                          LIVE <span className="material-symbols-outlined text-xs">open_in_new</span>
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center pt-md">
            <button
              onClick={() => setShowAllProjects(!showAllProjects)}
              className="neo-brutalist-border px-lg py-md font-label-caps hover:bg-on-surface hover:text-white transition-colors hard-shadow-sm flex items-center gap-md btn-shift"
            >
              <span>{showAllProjects ? "SHOW_LESS_PROJECTS" : "VIEW_ALL_06_PROJECTS"}</span>
              <span className="material-symbols-outlined">
                {showAllProjects ? "unfold_less" : "grid_view"}
              </span>
            </button>
          </div>
        </section>

        {/* Experience Timeline */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-lg pt-xl" id="experience">
          <div className="md:col-span-4">
            <h2 className="font-display-lg text-display-lg-mobile md:text-headline-md uppercase font-black sticky top-32">
              Experience_Log
            </h2>
            <div className="mt-md text-on-surface-variant font-code-sm">
              TRANSITION FROM QUALITY ASSURANCE <br />
              TO PRODUCTION AI SYSTEMS BUILDER.
            </div>
          </div>
          
          <div className="md:col-span-8 space-y-md">
            {(showAllExperience ? experiences : experiences.slice(0, 1)).map((exp, idx) => (
              <div key={idx} className="neo-brutalist-border p-lg bg-white relative">
                <div className="flex flex-col md:flex-row md:justify-between items-start mb-md">
                  <div>
                    <h3 className="font-headline-md text-headline-md">{exp.role}</h3>
                    <a
                      href={exp.companyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-label-caps text-label-caps text-primary hover:underline"
                    >
                      {exp.company}
                    </a>
                    <span className="text-xs text-on-surface-variant block font-code-sm mt-xs">{exp.location}</span>
                  </div>
                  <span className="font-code-sm text-code-sm bg-on-surface text-white px-2 py-1 mt-xs md:mt-0">{exp.period}</span>
                </div>

                <ul className="list-disc ml-4 font-body-md text-body-md space-y-2 marker:text-primary-container leading-relaxed">
                  {exp.bullets.map((bullet, bIdx) => {
                    const parts = bullet.split(/(\*\*.*?\*\*)/);
                    return (
                      <li key={bIdx} className="text-justify">
                        {parts.map((part, pIdx) => {
                          if (part.startsWith("**") && part.endsWith("**")) {
                            return <strong key={pIdx} className="font-semibold text-on-surface">{part.slice(2, -2)}</strong>;
                          }
                          return part;
                        })}
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}

            {/* Show / Hide experience toggle */}
            <div className="flex justify-center pt-md">
              <button
                onClick={() => setShowAllExperience((prev) => !prev)}
                className="neo-brutalist-border bg-white text-on-surface px-lg py-sm font-label-caps hard-shadow-sm active:translate-x-0.5 active:translate-y-0.5 transition-transform btn-shift uppercase tracking-wider"
              >
                {showAllExperience ? "▲ Hide Full Experience" : "▼ Show Complete Experience"}
              </button>
            </div>
          </div>
        </section>

        {/* Academic Log */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-lg pt-xl" id="education">
          <div className="md:col-span-4">
            <h2 className="font-display-lg text-display-lg-mobile md:text-headline-md uppercase font-black sticky top-32">
              Academic_Log
            </h2>
            <div className="mt-md text-on-surface-variant font-code-sm">
              FORMAL EDUCATION &amp; SPECIALIZED CERTIFICATIONS.
            </div>
          </div>
          <div className="md:col-span-8 space-y-md">
            <div className="neo-brutalist-border p-lg bg-white relative">
              <div className="flex flex-col md:flex-row md:justify-between items-start mb-xs">
                <div>
                  <h3 className="font-headline-md text-headline-md">M.S. Machine Learning &amp; AI</h3>
                  <a
                    href="https://www.ljmu.ac.uk/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-label-caps text-label-caps text-primary hover:underline block mt-xs"
                  >
                    Liverpool John Moores University
                  </a>
                </div>
                <span className="font-code-sm text-code-sm bg-on-surface text-white px-2 py-1">2023 — 2025</span>
              </div>
            </div>
            <div className="neo-brutalist-border p-lg bg-white relative">
              <div className="flex flex-col md:flex-row md:justify-between items-start mb-xs">
                <div>
                  <h3 className="font-headline-md text-headline-md">Exec. PG in Data Science &amp; AI</h3>
                  <a
                    href="https://www.iiitb.ac.in/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-label-caps text-label-caps text-primary hover:underline block mt-xs"
                  >
                    IIIT Bangalore
                  </a>
                </div>
                <span className="font-code-sm text-code-sm bg-on-surface text-white px-2 py-1">2022 — 2023</span>
              </div>
            </div>
            <div className="neo-brutalist-border p-lg bg-white relative">
              <div className="flex flex-col md:flex-row md:justify-between items-start mb-xs">
                <div>
                  <h3 className="font-headline-md text-headline-md">B.E. Electronics &amp; Communication</h3>
                  <a
                    href="https://newhorizonindia.edu/nhce/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-label-caps text-label-caps text-primary hover:underline block mt-xs"
                  >
                    New Horizon College of Engineering
                  </a>
                </div>
                <span className="font-code-sm text-code-sm bg-on-surface text-white px-2 py-1">2006 — 2010</span>
              </div>
            </div>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="w-full border-t-2 border-on-surface mt-xl bg-surface-container-low" id="contact">
        <div className="flex flex-col md:flex-row justify-between items-center px-lg py-xl max-w-container-max mx-auto gap-md">
          <div className="font-code-sm text-code-sm font-bold text-on-surface uppercase">
            H_SINGH_PORTFOLIO // BUILD_2025.02.RAG
          </div>
          <div className="flex gap-lg">
            <a
              className="font-label-caps text-label-caps text-on-surface-variant hover:text-primary transition-all duration-200 uppercase"
              href="https://github.com/hargurjeet"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a
              className="font-label-caps text-label-caps text-on-surface-variant hover:text-primary transition-all duration-200 uppercase"
              href="https://www.linkedin.com/in/hargurjeet/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <a className="font-label-caps text-label-caps text-on-surface-variant hover:text-primary transition-all duration-200 uppercase" href="#">
              Scholar
            </a>
          </div>
          <div className="font-label-caps text-label-caps text-on-surface-variant opacity-60">
            © 2025 HARGURJEET SINGH GANGER. ALL RIGHTS RESERVED.
          </div>
        </div>
      </footer>
    </div>
  );
}
