export interface Article {
  title: string;
  link: string;
  platform: "Medium" | "Dev.to" | "LinkedIn";
  date: string;
  description: string;
  tags: string[];
}

export const articles: Article[] = [
  {
    title: "Vibe Coding in Production: How to Ship AI-Generated Code Responsibly",
    link: "https://dev.to/gurjeet333/vibe-coding-in-production-how-to-ship-ai-generated-code-responsibly-174m",
    platform: "Dev.to",
    date: "2026-04-28",
    description: "Notes from a recent developer conference from AWS and Anthropic — practical wisdom for engineers navigating the AI-assisted coding era.",
    tags: ["Vibe Coding", "AWS", "Anthropic", "AI Coding", "DevOps"]
  },
  {
    title: "Running LLMs Locally: A Rigorous Benchmark of Phi-3, Mistral, and Llama 3.2 on Ollama",
    link: "https://dev.to/gurjeet333/running-llms-locally-a-rigorous-benchmark-of-phi-3-mistral-and-llama-32-on-ollama-2289",
    platform: "Dev.to",
    date: "2026-03-15",
    description: "This report presents a comprehensive evaluation of three small language models (SLMs) – Llama 3.2 (3B), Phi-3 mini, and Mistral (7B) on performance benchmarks, inference speed, and JSON schema compliance.",
    tags: ["Ollama", "Mistral", "Llama 3.2", "SLMs", "FastAPI"]
  },
  {
    title: "From Videos to Blogs: Unlock Content Creation with Crewai",
    link: "https://gurjeet333.medium.com/from-videos-to-blogs-unlock-content-creation-with-crewai-774f1bc083bf?source=rss-754d934862a1------2",
    platform: "Medium",
    date: "2024-06-04",
    description: "A Step-by-Step Guide to Building and Leveraging Collaborative AI for Blog Writing from YouTube Videos.",
    tags: ["CrewAI", "AI Agents", "Content Creation", "Python"]
  },
  {
    title: "Mastering AI Agents: A Journey from Basics to Execution",
    link: "https://gurjeet333.medium.com/mastering-ai-agents-a-journey-from-basics-to-execution-3ec35c6aa93c?source=rss-754d934862a1------2",
    platform: "Medium",
    date: "2024-05-26",
    description: "Your Guide to Creating AI Agents for Specific Data Tasks.",
    tags: ["AI Agents", "Data Science", "Machine Learning"]
  },
  {
    title: "Stop Writing Buggy APIs: Why Pydantic Should Be Your New Best Friend",
    link: "https://www.linkedin.com/pulse/stop-writing-buggy-apis-why-pydantic-should-your-new-best-ganger-vpcpc/",
    platform: "LinkedIn",
    date: "2024-03-15",
    description: "Learn how to use Pydantic to build robust, type-safe APIs in Python, preventing common bugs and streamlining request validation.",
    tags: ["Pydantic", "FastAPI", "Python", "API Design", "Validation"]
  },
  {
    title: "Learn how to build a chatbot from scratch on a free cloud vector database.",
    link: "https://medium.com/analytics-vidhya/learn-how-to-build-a-chatbot-from-scratch-on-a-free-cloud-vector-database-193a7fa29c13?source=rss-754d934862a1------2",
    platform: "Medium",
    date: "2023-12-06",
    description: "Learn how to build an advanced chatbot with a cloud vector database. In this Blog, We built a QA chatbot that uses a custom knowledge base that is built on a Free Cloud Vector Database.",
    tags: ["Chatbots", "Vector Database", "Q&A", "Pinecone"]
  },
  {
    title: "Performing Sentence Similarity By Leveraging Hugging Face APIs",
    link: "https://gurjeet333.medium.com/performing-sentence-similarity-by-leveraging-hugging-face-apis-8ca0846e299c?source=rss-754d934862a1------2",
    platform: "Medium",
    date: "2022-08-29",
    description: "How To Perform API Calls to hugging Face APIs to leverage the existing trained models.",
    tags: ["Hugging Face", "NLP", "APIs", "Sentence Similarity"]
  },
  {
    title: "Working with SQL in Python Environment ?",
    link: "https://gurjeet333.medium.com/working-with-sql-in-python-environment-917385774583?source=rss-754d934862a1------2",
    platform: "Medium",
    date: "2022-06-10",
    description: "Data Science Working with SQL in Python Environment? You will learn to leverage the power of both the languages to perform data pre-processing activities on jupyter notebooks.",
    tags: ["Python", "SQL", "Pandas", "Data Wrangling"]
  },
  {
    title: "Best Known Techniques For Data Scientist To Handle Missing/Null Values In Any Tabular Dataset",
    link: "https://gurjeet333.medium.com/best-known-techniques-for-data-scientist-to-handle-missing-null-values-in-any-tabular-dataset-3a9f71c9486?source=rss-754d934862a1------2",
    platform: "Medium",
    date: "2022-03-11",
    description: "Being a data scientist, It is quite intimidating to handle missing values at times. This blog will help you to build the right mindset.",
    tags: ["Data Cleaning", "Data Science", "Null Values"]
  },
  {
    title: "Time Series Forecasting Using AUTO ARIMA + PROPHET + LightGBM",
    link: "https://gurjeet333.medium.com/time-series-forecasting-using-auto-arima-prophet-lightgbm-6362ef486c95?source=rss-754d934862a1------2",
    platform: "Medium",
    date: "2022-01-16",
    description: "Predicting the price of Nifty 50 stocks using Machine Learning.",
    tags: ["Time Series", "Arima", "Prophet", "LightGBM"]
  },
  {
    title: "Sentiment Analysis of Movie Reviews with Google’s BERT",
    link: "https://gurjeet333.medium.com/sentiment-analysis-of-movie-reviews-with-googles-bert-c2b97f4217f?source=rss-754d934862a1------2",
    platform: "Medium",
    date: "2021-12-10",
    description: "Performing NLP tasks by leveraging transformer encoder architecture (BERT) against the traditional LSTM's.",
    tags: ["BERT", "Transformers", "NLP", "Sentiment Analysis"]
  },
  {
    title: "Understanding Machine Learning Pipeline — A Gentle Introduction",
    link: "https://gurjeet333.medium.com/understanding-machine-learning-pipeline-a-gentle-introduction-ca96419108dc?source=rss-754d934862a1------2",
    platform: "Medium",
    date: "2021-11-03",
    description: "Simplifying Data Preprocessing with Sklearn Pipeline Class.",
    tags: ["Machine Learning", "Pipeline", "Scikit-Learn"]
  },
  {
    title: "Learning k-folds Cross Validations",
    link: "https://gurjeet333.medium.com/learning-k-folds-cross-validations-69b981c91e3a?source=rss-754d934862a1------2",
    platform: "Medium",
    date: "2021-08-30",
    description: "In this tutorial I demonstrate implementation of k-folds Cross Validations on a Supervised Regression Machine Learning Problem.",
    tags: ["Cross Validation", "Machine Learning", "Model Evaluation"]
  }
];
