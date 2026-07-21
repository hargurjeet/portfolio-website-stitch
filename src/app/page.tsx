"use client";

import React, { useState } from "react";

interface Project {
  id: string;
  title: string;
  year: string;
  image: string;
  description: string;
  tags: string[];
  details: string[];
}

export default function Home() {
  // State for collapsible project cards
  const [expandedProjects, setExpandedProjects] = useState<Record<string, boolean>>({
    antigravity: false,
    rag: false,
    pulse: false,
  });

  // State for collapsible experience block
  const [expandedExperience, setExpandedExperience] = useState(false);

  const toggleProject = (id: string) => {
    setExpandedProjects((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const handleResumeClick = () => {
    alert("Resume download feature: PDF download triggered!");
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
          <button
            onClick={handleResumeClick}
            className="neo-brutalist-border bg-primary-container text-white px-md py-sm font-label-caps hard-shadow-sm active:translate-x-0.5 active:translate-y-0.5 transition-transform btn-shift"
          >
            RESUME.PDF
          </button>
        </nav>
      </header>

      {/* Main Content */}
      <main className="max-w-container-max mx-auto px-lg py-xl space-y-xl">
        
        {/* Hero Section */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-lg">
          {/* Bio Card */}
          <div className="md:col-span-8 neo-brutalist-border p-lg flex flex-col justify-between bg-white hard-shadow relative overflow-hidden">
            <div className="z-10">
              <div className="inline-block bg-primary-container text-white font-code-sm text-code-sm px-2 py-1 mb-md">
                [ PRINCIPAL_GENAI_ARCHITECT ]
              </div>
              <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-on-surface mb-md">
                Hargurjeet Singh Ganger. <br />
                <span className="italic text-primary">Enterprise AI at Scale.</span>
              </h1>
              <p className="font-body-lg text-body-lg max-w-2xl mb-lg">
                I bridge the gap between proof-of-concept AI models and resilient, production-grade Generative AI architectures. Specializing in enterprise RAG systems and autonomous agentic workflows.
              </p>
            </div>
            <div className="flex gap-md mt-auto">
              <div className="flex flex-col">
                <span className="font-label-caps text-label-caps text-on-surface-variant uppercase">Expertise</span>
                <span className="font-code-sm text-code-sm">RAG • AGENTS • MLOPS</span>
              </div>
              <div className="flex flex-col">
                <span className="font-label-caps text-label-caps text-on-surface-variant uppercase">Location</span>
                <span className="font-code-sm text-code-sm">BANGALORE, IN</span>
              </div>
            </div>
            {/* Background Pattern */}
            <div className="absolute right-0 bottom-0 opacity-10 pointer-events-none">
              <span className="material-symbols-outlined text-[160px]" style={{ fontVariationSettings: '"wght" 200' }}>
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
            <div className="flex flex-wrap gap-sm">
              {["Python", "PyTorch", "LangChain", "Transformers", "Docker", "PostgreSQL", "FastAPI", "Kubernetes", "CUDA"].map((tech) => (
                <span key={tech} className="neo-brutalist-border bg-surface-container-low px-sm py-xs font-code-sm text-code-sm">
                  {tech}
                </span>
              ))}
            </div>
            <div className="mt-lg border-t border-on-surface pt-md grid grid-cols-1 md:grid-cols-2 gap-md">
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
            <span className="font-code-sm text-code-sm text-on-surface-variant">03 PRIMARY / 06 TOTAL</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-lg">
            
            {/* Project 1 */}
            <div className="neo-brutalist-border bg-white hard-shadow-hover transition-all group flex flex-col">
              <div className="h-48 bg-surface-container-highest border-b-2 border-on-surface relative overflow-hidden">
                <div
                  className="w-full h-full bg-cover bg-center grayscale group-hover:grayscale-0 transition-all duration-500"
                  style={{
                    backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuDz7UGgxLO-SzscKyVk4PJtd2OFFAy7UarNo9YVqTHoj84naXMm3pr0RMzbkp-pxji8Vh4hhIVv_DxfJDLK8VsjSMnIpU-JRbj9uMSO93MFR3LeQmWVklrlC-F8S_daHE1N_qxkCQ-31bWsbZJCFYy65HNOLq5CE92Y9BvXP2dXEafyRbVZa3o2GTej_vMRKQu3FH1JpUUQbMjCF-Do5DKDqMvcly7uXB76ZakuCY1xpoBqguKbnww3")`,
                    backgroundPosition: "center",
                    backgroundSize: "cover"
                  }}
                />
                <div className="absolute top-sm right-sm bg-on-surface text-white px-2 py-1 font-code-sm text-xs">2024</div>
              </div>
              <div className="p-md flex-grow">
                <h3 className="font-headline-md text-headline-md mb-xs">Antigravity</h3>
                <p className="font-body-md text-body-md text-on-surface-variant mb-md">
                  Autonomous redraw cycles &amp; context retention across agentic iterations using Gemini 2.5.
                </p>

                {/* Collapsible Details */}
                <div className={`collapsible-content space-y-2 mb-md text-sm border-t border-surface-variant pt-2 ${expandedProjects.antigravity ? "expanded" : "collapsed"}`}>
                  <ul className="list-disc ml-4 font-body-md text-on-surface-variant">
                    <li>Closed-loop critic for autonomous redraw cycles.</li>
                    <li>Quantitative scoring for brand/color/layout.</li>
                    <li>Multimodal Gemini 2.5 + Imagen 4 Ultra.</li>
                  </ul>
                </div>

                <div className="flex flex-wrap gap-xs mb-md">
                  <span className="bg-surface-variant px-2 py-1 text-xs font-code-sm">GEMINI_2.5</span>
                  <span className="bg-surface-variant px-2 py-1 text-xs font-code-sm">AGENTIC_LOOPS</span>
                </div>
              </div>
              <div className="p-md pt-0">
                <button
                  onClick={() => toggleProject("antigravity")}
                  className="w-full neo-brutalist-border py-2 font-label-caps text-label-caps hover:bg-primary-container hover:text-white transition-colors flex items-center justify-center gap-xs"
                >
                  {expandedProjects.antigravity ? "HIDE_DETAILS" : "VIEW_DETAILS"}
                  <span
                    className="material-symbols-outlined transition-transform"
                    style={{ transform: expandedProjects.antigravity ? "rotate(180deg)" : "rotate(0)" }}
                  >
                    expand_more
                  </span>
                </button>
              </div>
            </div>

            {/* Project 2 */}
            <div className="neo-brutalist-border bg-white hard-shadow-hover transition-all group flex flex-col">
              <div className="h-48 bg-surface-container-highest border-b-2 border-on-surface relative overflow-hidden">
                <div
                  className="w-full h-full bg-cover bg-center grayscale group-hover:grayscale-0 transition-all duration-500"
                  style={{
                    backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuDbPOu3vJZrcLbj6V6RNno9V8BenMHlMr32YGylpV3ySo2yOfNlFCZ_YdLXi6NPOPy493rSDDXEcD1ijSO-OtcqRdGW96afmyvRDeoBNRQqYogScZnunuJt5IX30klxIdPO0zQVd3nGP8_ouf46gYp3y8jOdxicCpP5nr1LA2OWGEJ-nmWK4uPxsbNCIuLY77mwAqxS0k_jXoCizPWmrIvzO2y8-AByNazctphl_mD3eXWOATgrrqLI")`,
                    backgroundPosition: "center",
                    backgroundSize: "cover"
                  }}
                />
                <div className="absolute top-sm right-sm bg-on-surface text-white px-2 py-1 font-code-sm text-xs">2023</div>
              </div>
              <div className="p-md flex-grow">
                <h3 className="font-headline-md text-headline-md mb-xs">RAG Evaluation</h3>
                <p className="font-body-md text-body-md text-on-surface-variant mb-md">
                  Benchmark framework for testing retrieval precision in enterprise LLM implementations.
                </p>

                {/* Collapsible Details */}
                <div className={`collapsible-content space-y-2 mb-md text-sm border-t border-surface-variant pt-2 ${expandedProjects.rag ? "expanded" : "collapsed"}`}>
                  <ul className="list-disc ml-4 font-body-md text-on-surface-variant">
                    <li>Hybrid retrieval (BM25 + Contextual Dense).</li>
                    <li>Citation enforcement to prevent hallucinations.</li>
                    <li>RAGAS metrics: faithfulness &amp; answer relevancy.</li>
                  </ul>
                </div>

                <div className="flex flex-wrap gap-xs mb-md">
                  <span className="bg-surface-variant px-2 py-1 text-xs font-code-sm">LANGGRAPH</span>
                  <span className="bg-surface-variant px-2 py-1 text-xs font-code-sm">RAGAS</span>
                </div>
              </div>
              <div className="p-md pt-0">
                <button
                  onClick={() => toggleProject("rag")}
                  className="w-full neo-brutalist-border py-2 font-label-caps text-label-caps hover:bg-primary-container hover:text-white transition-colors flex items-center justify-center gap-xs"
                >
                  {expandedProjects.rag ? "HIDE_DETAILS" : "VIEW_DETAILS"}
                  <span
                    className="material-symbols-outlined transition-transform"
                    style={{ transform: expandedProjects.rag ? "rotate(180deg)" : "rotate(0)" }}
                  >
                    expand_more
                  </span>
                </button>
              </div>
            </div>

            {/* Project 3 */}
            <div className="neo-brutalist-border bg-white hard-shadow-hover transition-all group flex flex-col">
              <div className="h-48 bg-surface-container-highest border-b-2 border-on-surface relative overflow-hidden">
                <div
                  className="w-full h-full bg-cover bg-center grayscale group-hover:grayscale-0 transition-all duration-500"
                  style={{
                    backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuCagh6Kwhs_9vqs24p699vgrMx6LTo7_bWbe6t171BXtG6sHPllQihER6vLFYFcUv2Me2jkrGMYemR7OHWRbLas_vbzoxXBDspJ_ghICyWeJgyNnKfe51bnOeU3Hs4Ozv4XHGQCCvuzWM31DR6KfWFOO3WNM7UqJQDbGlfzfWL-mOUkiyxuvR68RkJn758578wgERkJCWMNEuN8nyeCzIXDKp6hVRlx4otyddX5vtJ6MSdg_BIRMz8P")`,
                    backgroundPosition: "center",
                    backgroundSize: "cover"
                  }}
                />
                <div className="absolute top-sm right-sm bg-on-surface text-white px-2 py-1 font-code-sm text-xs">2023</div>
              </div>
              <div className="p-md flex-grow">
                <h3 className="font-headline-md text-headline-md mb-xs">Pulse Stream</h3>
                <p className="font-body-md text-body-md text-on-surface-variant mb-md">
                  Low-latency real-time stream processing for high-frequency trading data analysis.
                </p>

                {/* Collapsible Details */}
                <div className={`collapsible-content space-y-2 mb-md text-sm border-t border-surface-variant pt-2 ${expandedProjects.pulse ? "expanded" : "collapsed"}`}>
                  <ul className="list-disc ml-4 font-body-md text-on-surface-variant">
                    <li>Sub-millisecond processing of financial telemetry.</li>
                    <li>Integrated anomaly detection for market shifts.</li>
                    <li>Visual dashboard for real-time waveform monitoring.</li>
                  </ul>
                </div>

                <div className="flex flex-wrap gap-xs mb-md">
                  <span className="bg-surface-variant px-2 py-1 text-xs font-code-sm">FINTECH</span>
                  <span className="bg-surface-variant px-2 py-1 text-xs font-code-sm">STREAMING</span>
                </div>
              </div>
              <div className="p-md pt-0">
                <button
                  onClick={() => toggleProject("pulse")}
                  className="w-full neo-brutalist-border py-2 font-label-caps text-label-caps hover:bg-primary-container hover:text-white transition-colors flex items-center justify-center gap-xs"
                >
                  {expandedProjects.pulse ? "HIDE_DETAILS" : "VIEW_DETAILS"}
                  <span
                    className="material-symbols-outlined transition-transform"
                    style={{ transform: expandedProjects.pulse ? "rotate(180deg)" : "rotate(0)" }}
                  >
                    expand_more
                  </span>
                </button>
              </div>
            </div>

          </div>

          {/* View All Projects Trigger */}
          <div className="flex justify-center pt-md">
            <button className="neo-brutalist-border px-lg py-md font-label-caps hover:bg-on-surface hover:text-white transition-colors hard-shadow-sm flex items-center gap-md btn-shift">
              <span>VIEW_ALL_06_PROJECTS</span>
              <span className="material-symbols-outlined">grid_view</span>
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
              TRANSITION FROM ACADEMIC RESEARCH TO <br />
              PRODUCTION ARCHITECTURE.
            </div>
          </div>
          
          <div className="md:col-span-8 space-y-md">
            
            {/* British Telecom Card */}
            <div className="neo-brutalist-border p-lg bg-white relative">
              <div className="flex flex-col md:flex-row md:justify-between items-start mb-md">
                <div>
                  <h3 className="font-headline-md text-headline-md">Senior Data Scientist</h3>
                  <span className="font-label-caps text-label-caps text-primary">British Telecom (BT)</span>
                </div>
                <span className="font-code-sm text-code-sm bg-on-surface text-white px-2 py-1">2022 — PRESENT</span>
              </div>

              <ul className="list-disc ml-4 font-body-md text-body-md space-y-2 marker:text-primary-container">
                <li>Architected enterprise-grade conversational AI (LLMs + RAG), reducing document extraction time by 70%.</li>
                <li>Designed agentic workflows with CrewAI and LangGraph.</li>
              </ul>

              {/* Collapsible bullet list */}
              <div className={`collapsible-content pt-4 border-t border-surface-variant mt-4 ${expandedExperience ? "expanded" : "collapsed"}`}>
                <ul className="list-disc ml-4 font-body-md text-body-md space-y-2 marker:text-primary-container">
                  <li>Integrated JSON schema validation and custom hallucination guardrails.</li>
                  <li>Developed LLM evaluation framework using Ragas and LLM-as-judge pipelines.</li>
                  <li>Built email intelligence pipeline for 6,000+ weekly escalations, fine-tuning LLaMA-2 7B.</li>
                  <li>Engineered Recommendation Systems (Random Forest/XGBoost) increasing VAS sales by 30%.</li>
                </ul>
              </div>

              <button
                onClick={() => setExpandedExperience(!expandedExperience)}
                className="mt-4 text-primary font-label-caps text-xs flex items-center gap-1 hover:underline btn-shift"
              >
                {expandedExperience ? "SHOW_LESS" : "SHOW_MORE"}
                <span
                  className="material-symbols-outlined text-sm transition-transform"
                  style={{ transform: expandedExperience ? "rotate(180deg)" : "rotate(0)" }}
                >
                  expand_more
                </span>
              </button>
            </div>

            {/* Royal Dutch Shell Card */}
            <div className="neo-brutalist-border p-lg bg-white relative">
              <div className="flex flex-col md:flex-row md:justify-between items-start mb-md">
                <div>
                  <h3 className="font-headline-md text-headline-md">Data Scientist</h3>
                  <span className="font-label-caps text-label-caps text-primary">Royal Dutch Shell</span>
                </div>
                <span className="font-code-sm text-code-sm bg-on-surface text-white px-2 py-1">2016 — 2022</span>
              </div>
              <ul className="list-disc ml-4 font-body-md text-body-md space-y-2 marker:text-primary-container">
                <li>Developed predictive maintenance models cutting costs by 30% and unplanned downtime by 25%.</li>
                <li>Engineered data pipelines forecasting material delivery, saving 10% budget.</li>
              </ul>
            </div>

            <div className="flex justify-center pt-sm">
              <button className="font-label-caps text-label-caps text-on-surface-variant hover:text-primary transition-colors flex items-center gap-2 btn-shift">
                <span className="material-symbols-outlined">history</span> VIEW_OLDER_HISTORY_ (TCS_2010-2016)
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
                  <span className="font-label-caps text-label-caps text-primary">Liverpool John Moores University</span>
                </div>
                <span className="font-code-sm text-code-sm bg-on-surface text-white px-2 py-1">2023 — 2025</span>
              </div>
            </div>
            <div className="neo-brutalist-border p-lg bg-white relative">
              <div className="flex flex-col md:flex-row md:justify-between items-start mb-xs">
                <div>
                  <h3 className="font-headline-md text-headline-md">Exec. PG in Data Science &amp; AI</h3>
                  <span className="font-label-caps text-label-caps text-primary">IIIT Bangalore</span>
                </div>
                <span className="font-code-sm text-code-sm bg-on-surface text-white px-2 py-1">2022 — 2023</span>
              </div>
            </div>
            <div className="neo-brutalist-border p-lg bg-white relative">
              <div className="flex flex-col md:flex-row md:justify-between items-start mb-xs">
                <div>
                  <h3 className="font-headline-md text-headline-md">B.E. Electronics &amp; Communication</h3>
                  <span className="font-label-caps text-label-caps text-primary">New Horizon College of Engineering</span>
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
            <a className="font-label-caps text-label-caps text-on-surface-variant hover:text-primary transition-all duration-200 uppercase" href="#">
              GitHub
            </a>
            <a className="font-label-caps text-label-caps text-on-surface-variant hover:text-primary transition-all duration-200 uppercase" href="#">
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
