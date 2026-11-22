export const profile = {
  name: 'Jaya Sankar Pattem',
  tagline: 'Computer Science • AI/ML • Backend • Cloud • Software Engineering',
  heroLine1: "hi, i'm jaya",
  heroSub:
    'mechatronics engineer turned AI/ML software engineer — I build the hardware-facing systems and the models that talk to them',
  bio: `I'm Jaya Sankar Pattem, a Computer Science graduate with a multidisciplinary background in software engineering, AI/ML, cloud-integrated applications, and robotics. I enjoy building practical systems that connect intelligent models with usable applications—from multi-agent AI pipelines and local RAG agents to authenticated industrial chatbots and distributed ML projects. I'm targeting early-career software engineering roles where I can build backend APIs, AI-assisted systems, cloud-integrated applications, and reliable, testable product workflows.`,
  email: 'jayasankarnaidu07@gmail.com',
  github: 'https://github.com/jay6244',
  linkedin: 'https://www.linkedin.com/in/pattem-jaya-sankar6244',
  resume: '/resume/Pattem_Jaya_Sankar_Resume.pdf',
};

export const skillsMarquee = [
  'Python', 'React', 'FastAPI', 'LangChain', 'LangGraph', 'FAISS',
  'ChromaDB', 'Docker', 'TypeScript', 'OIDC / JWT', 'Ollama', 'Mistral LLM',
  'REST APIs', 'Git', 'Vite', 'AWS S3', 'NLP', 'Neural Networks',
  'Go', 'SQL', 'Node.js', 'Playwright', 'Zod', 'sentence-transformers',
];

export const focusAreas = [
  {
    number: '01',
    name: 'AI / ML & Multi-Agent Systems',
    description:
      'Multi-agent LangGraph pipelines, RAG, embeddings, and vector search — grounded LLM applications built and evaluated with LangChain, FAISS/ChromaDB, and local models via Ollama.',
  },
  {
    number: '02',
    name: 'Backend & Cloud',
    description:
      'FastAPI and REST API design, OIDC/JWT authentication flows, S3 integration via boto3, and containerized services with Docker.',
  },
  {
    number: '03',
    name: 'Full-Stack Development',
    description:
      'React and Vite frontends wired to real backends — routing, protected pages, and end-to-end product workflows from login to data persistence.',
  },
  {
    number: '04',
    name: 'QA / Test Engineering',
    description:
      'API contract testing with Playwright and Zod schema validation, CI enforcement via GitHub Actions, and coverage across auth, CRUD, and negative-validation scenarios.',
  },
  {
    number: '05',
    name: 'Robotics & Distributed Systems',
    description:
      'Waypoint-based patrol robotics, distributed systems coursework, and Java/Maven microservices — connecting embedded/systems thinking with software.',
  },
];

export interface BenchmarkResult {
  label: string;
  value: string;
}

export interface Project {
  id: string;
  name: string;
  category: string;
  award?: string;
  description: string;
  techStack: string[];
  highlights: string[];
  github?: string;
  evaluatedOn?: string[];
  benchmarkResults?: BenchmarkResult[];
  benchmarkNote?: string;
  pipelineStages?: string[];
  workflowSteps?: string[];
}

export const featuredProjects: Project[] = [
  {
    id: 'autouml',
    name: 'AutoUML Generator',
    category: 'Software Engineering / Developer Tooling',
    award: 'Best Project Award — Advanced Software Engineering, Fall 2025',
    description:
      "UML diagrams drift out of sync with the codebase the moment someone stops maintaining them by hand. I engineered a ~26K-LOC full-stack platform (core implementation, excluding the Spring PetClinic sample repo used for testing) that parses a real repository into a unified intermediate representation and generates package, class, sequence, and activity diagrams directly from source — with diagram editing, versioned diffs across commits, software-design metrics, and LLM-assisted explanations of what a diagram section does.",
    techStack: ['Go', 'go-tree-sitter', 'go-git', 'React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Express', 'Prisma', 'JWT / bcrypt', 'Groq LLM'],
    highlights: [
      'Parsed real repositories into a unified IR using go-tree-sitter and go-git',
      'Generated package, class, sequence, and activity diagrams directly from source',
      'Built diagram editing, export, and versioned diffing across repository changes',
      'Implemented authentication (JWT/bcrypt) and project management for a multi-user workspace',
      'Added LLM-assisted (Groq) explanations of diagram sections',
      'Covered core logic with Vitest, Jest, and Supertest',
      'Received the Best Project Award for Advanced Software Engineering, Fall 2025',
    ],
    github: 'https://github.com/jay6244/Auto-UML-Generator',
    pipelineStages: ['Repo Parser (Go)', 'IR Model', 'Diagram Engine', 'React Workspace'],
    workflowSteps: ['Point at a repository', 'Parse into IR', 'Generate + edit diagrams', 'Diff across versions'],
  },
  {
    id: 'futurebots',
    name: 'FutureBots Industrial Assistant',
    category: 'Full-Stack / Backend / RAG Architecture',
    description:
      "Industrial mechanics needed a ChatGPT-style assistant that remembers who's asking and what they've uploaded — not a stateless demo. I built the retrieval and session layer: LangChain-orchestrated document ingestion (PyMuPDF) into ChromaDB, hybrid retrieval combining sentence-transformer embeddings with BM25, and an authenticated React frontend where per-user chat history and manual uploads to S3 persist across sessions.",
    techStack: ['FastAPI', 'Python', 'LangChain', 'ChromaDB', 'sentence-transformers', 'PyMuPDF', 'BM25', 'boto3', 'AWS S3', 'Docker', 'React', 'Vite', 'OIDC', 'Ant Design'],
    highlights: [
      'Built document ingestion (PyMuPDF) with chunk storage in ChromaDB',
      'Combined sentence-transformer embeddings with BM25 for hybrid retrieval',
      'Implemented the manuals upload flow to AWS S3 via boto3',
      'Built the authenticated React/Ant Design frontend with per-user chat history',
      'Containerized backend services with Docker',
    ],
    pipelineStages: ['PyMuPDF Ingest', 'ChromaDB + BM25', 'LangChain RAG', 'S3 + Auth'],
    workflowSteps: ['Sign in (OIDC)', 'Upload a manual to S3', 'Ask in authenticated chat', 'Hybrid retrieval answers'],
  },
  {
    id: 'text-to-sql',
    name: 'Multi-Agent Text-to-SQL',
    category: 'AI/ML / Multi-Agent Systems / NLP',
    description:
      "Most text-to-SQL demos stop at generating a query — they never check whether it actually runs, let alone whether it's correct. I built a 5-agent LangGraph pipeline where a Validator agent executes every generated query against the real database and a Critic agent analyzes failures and regenerates SQL until it succeeds or hits a retry limit, then evaluated the system honestly against Spider2-Lite instead of only reporting the numbers that look good.",
    techStack: ['Python', 'FastAPI', 'LangGraph', 'sentence-transformers', 'Ollama', 'Mistral 7B', 'SQLite', 'SSE'],
    highlights: [
      'Designed a 5-agent pipeline: Schema Retrieval → Query Planner → SQL Generator → Validator → Critic/Refinement',
      'Schema Retrieval combines sentence-transformer embeddings with a lexical fallback',
      'Validator executes generated SQL against the actual database, not just a syntax check',
      'Critic agent analyzes execution failures and regenerates SQL until success or a retry limit',
      'Streamed agent progress to the frontend over Server-Sent Events',
    ],
    benchmarkResults: [
      { label: 'Execution success', value: '60%' },
      { label: 'Exact-match accuracy', value: '0%' },
      { label: 'First-attempt validity', value: '20%' },
      { label: 'Schema recall', value: '79.9%' },
      { label: 'Error-resolution rate', value: '50%' },
      { label: 'Avg. refinements', value: '2.0' },
    ],
    benchmarkNote:
      "Spider2-Lite, n=5 cases — a small preliminary evaluation. Exact-result matching remains the main improvement area; the current version prioritizes execution-valid SQL generation and iterative refinement behavior.",
    pipelineStages: ['Schema Retrieval', 'Query Planner', 'SQL Generator', 'Validator + Critic'],
    workflowSteps: ['Ask a question in English', 'Agents plan + generate SQL', 'Validator executes against DB', 'Critic refines on failure'],
  },
  {
    id: 'api-test-automation',
    name: 'API Test Automation Framework',
    category: 'QA Engineering / SDET / API Contract Testing',
    description:
      "A backend can pass every unit test and still break its consumers if the API contract silently changes. I built a TypeScript testing framework that validates both success and error response schemas with Zod, covering auth success/failure, authorization boundaries, and full CRUD workflows against an Express API — wired into GitHub Actions so contract violations fail CI before they reach anyone downstream.",
    techStack: ['TypeScript', 'Playwright Test', 'Zod', 'Express', 'ESLint', 'GitHub Actions'],
    highlights: [
      'Validated success and error payload schemas with Zod',
      'Covered auth success/failure and authorized/unauthorized scenarios',
      'Built full create/update/delete user workflow tests plus negative validation for missing fields',
      'Added smoke and regression suites with type-checking and linting enforced in CI',
    ],
    pipelineStages: ['Test Spec', 'Zod Schema Check', 'Playwright Runner', 'GitHub Actions CI'],
    workflowSteps: ['Define contract in Zod', 'Run auth + CRUD scenarios', 'Validate response schemas', 'CI blocks on failure'],
  },
  {
    id: 'url-shortener',
    name: 'URL Shortener API',
    category: 'Backend / API Design',
    description:
      'A small, cleanly-typed URL shortener API — FastAPI with SQLModel and Pydantic schemas, a Pytest + HTTPX test suite, Ruff linting, and GitHub Actions CI, containerized with Docker.',
    techStack: ['FastAPI', 'SQLModel', 'Pydantic', 'Pytest', 'HTTPX', 'Ruff', 'Docker', 'GitHub Actions'],
    highlights: [
      'Designed typed request/response schemas with Pydantic and SQLModel',
      'Built a Pytest + HTTPX test suite with CI enforcement',
      'Linted with Ruff and containerized with Docker',
    ],
    pipelineStages: ['Pydantic Schema', 'SQLModel + SQLite', 'FastAPI Routes', 'GitHub Actions CI'],
    workflowSteps: ['Submit a long URL', 'Validate + generate slug', 'Store via SQLModel', 'CI runs Pytest + Ruff'],
  },
];

export const otherProjects: Project[] = [
  {
    id: 'rag-agent',
    name: 'Local RAG Document Q&A Agent',
    category: 'Generative AI / NLP / Information Retrieval',
    description:
      "A local/offline Retrieval-Augmented Generation system that ingests PDF and TXT files, creates semantic embeddings, retrieves relevant chunks through FAISS, and answers questions grounded in retrieved context using a local instruction-tuned Mistral model, with a Gradio interface and multi-turn memory.",
    techStack: ['LangChain', 'FAISS', 'all-MiniLM-L6-v2', 'Mistral-7B-Instruct-v0.2', 'llama-cpp-python', 'Gradio', 'Python'],
    highlights: [
      'Implemented document chunking and embedding generation',
      'Created and persisted the FAISS vector index for semantic retrieval',
      'Built a Gradio interface with multi-turn memory, top-k retrieval, and source visibility',
    ],
  },
  {
    id: 'job-tracker',
    name: 'Job Application Tracker',
    category: 'Full-Stack / Backend / Personal Tooling',
    description:
      'A Flask app for tracking job applications — status, company, role, and notes — backed by SQLite via Flask-SQLAlchemy, with a Pytest suite and a GitHub Actions CI pipeline, served behind Gunicorn.',
    techStack: ['Flask', 'Flask-SQLAlchemy', 'SQLite', 'Gunicorn', 'Pytest', 'Docker', 'GitHub Actions'],
    highlights: [
      'Built CRUD workflows for tracking application status across companies and roles',
      'Containerized with Docker and served via Gunicorn',
      'Added a Pytest suite and GitHub Actions CI',
    ],
  },
  {
    id: 'local-mac-assistant',
    name: 'Local Mac AI Assistant',
    category: 'AI Engineering / Local-First Systems',
    description:
      "Cloud AI assistants send every document you attach to someone else's servers. I built a local-first assistant that runs entirely on-device via Ollama — streaming responses token-by-token, running lightweight RAG over PDFs, DOCX, code files, and spreadsheets without any of it leaving the machine, and routing image generation to a local ComfyUI instance with cloud fallback only when needed.",
    techStack: ['Node.js', 'JavaScript', 'HTML/CSS', 'Ollama', 'ComfyUI', 'mammoth', 'pdf-parse'],
    highlights: [
      'Streamed model responses token-by-token from local Ollama inference',
      'Built multi-conversation management — rename, delete, export, regenerate response',
      'Implemented local document RAG over PDF, DOCX, TXT, Markdown, CSV, JSON, and code files with source references',
      'Routed image generation to a local ComfyUI instance with cloud fallback',
    ],
  },
  {
    id: 'video-streaming',
    name: 'Video Streaming Microservices',
    category: 'Backend / Distributed Systems / Java',
    description:
      'A distributed video-streaming course project split into four Java/Maven services — AdminService, ConfigService, FrontendService, and ServiceDiscovery — orchestrated with Docker Compose.',
    techStack: ['Java', 'Maven', 'JavaScript', 'HTML/CSS', 'Docker Compose'],
    highlights: [
      'Structured the system into 4 independent Maven service modules',
      'Implemented service discovery between components',
      'Orchestrated multi-service local deployment with Docker Compose',
    ],
  },
  {
    id: 'patrol-robot',
    name: 'Industrial Patrol Robot / Gas Leak Detection',
    category: 'Robotics / Industrial Automation / Simulation',
    description:
      "Manual gas-leak inspection rounds don't scale across a facility with multiple checkpoints. Using a robot-dog platform, I built waypoint-based patrol logic and the middleware coordinating movement and camera feed across roughly three inspection points, then diagnosed a simulation bug where the camera viewpoint drifted independently of the robot body.",
    techStack: ['Robotics', 'Waypoints', 'Routing', 'Middleware', 'Simulation'],
    highlights: [
      'Built routing and waypoint-based patrol behavior across ~3 inspection points',
      'Structured middleware-level communication and movement logic',
      'Diagnosed a camera/body desync bug in the simulation before real-world testing',
    ],
  },
  {
    id: 'sentiment-chatbot',
    name: 'Sentiment-Aware Customer Support Chatbot',
    category: 'NLP / Human-Computer Interaction',
    description:
      "A support chatbot that ignores how frustrated a user sounds tends to escalate the problem instead of resolving it. For this HCI + NLP project, I designed a customer-support bot that classifies sentiment mid-conversation and adapts its responses accordingly.",
    techStack: ['NLP', 'Sentiment Analysis', 'Chatbot Design', 'HCI', 'Python'],
    highlights: [
      'Defined a use case where sentiment influences conversational handling',
      'Applied NLP concepts to classify and reason about user sentiment',
      'Considered usability, conversational flow, and feedback in the interaction design',
    ],
  },
  {
    id: 'word2vec-fnn',
    name: 'Distributed Systems: Word2Vec + FNN',
    category: 'Distributed Systems / Machine Learning',
    description:
      'A distributed-systems final project involving text representation with Word2Vec and downstream classification using a feed-forward neural network.',
    techStack: ['Word2Vec', 'Python', 'Neural Networks', 'Softmax', 'Adam', 'Dropout'],
    highlights: [
      'Used 100-dimensional Word2Vec representations',
      'Built an FNN with 128-unit and 64-unit ReLU hidden layers',
      'Used softmax output, dropout regularization, and Adam at 0.001 learning rate',
    ],
  },
  {
    id: 'genetic-algorithm',
    name: 'Genetic Algorithm for Feature Selection',
    category: 'Machine Learning / Optimization',
    description:
      'A genetic-algorithm-based approach for selecting useful feature subsets, using evolutionary search to optimize model inputs.',
    techStack: ['Python', 'Genetic Algorithms', 'Feature Selection', 'Optimization'],
    highlights: [
      'Represented candidate feature subsets as individuals/chromosomes',
      'Used fitness-based selection and evolutionary operations',
      'Connected optimization decisions to model performance and dimensionality reduction',
    ],
  },
  {
    id: 'wsn',
    name: 'Wireless Sensor Networks / MAC Protocols',
    category: 'Networking / IoT / Distributed Systems',
    description:
      'Wireless Sensor Network concepts including backbone-node strategies, medium-access protocols, routing/security issues, and message-oriented IoT communication.',
    techStack: ['WSN', 'S-MAC', 'T-MAC', 'PAMAS', 'MQTT', 'Routing'],
    highlights: [
      'Studied S-MAC, T-MAC, and PAMAS energy-aware MAC approaches',
      'Worked with backbone-node and sink-oriented network concepts',
      'Covered flooding, gossiping, sinkhole attacks, and related security behavior',
    ],
  },
  {
    id: 'infosec',
    name: 'Information Assurance / Cybersecurity',
    category: 'Cybersecurity / Information Assurance',
    description:
      'Academic work in information assurance focused on protecting systems, data, and communications through security principles and threat-aware design.',
    techStack: ['Security Fundamentals', 'Network Security', 'Risk / Threat Concepts'],
    highlights: [
      'Applied confidentiality, integrity, availability, and access-control concepts',
      'Connected security principles to networked and distributed-system scenarios',
    ],
  },
  {
    id: 'priority-queue',
    name: 'Priority Queue Implementation',
    category: 'Data Structures / Python',
    description:
      'A Python-based priority queue exercise to strengthen understanding of ordering, insertion/removal behavior, and core data-structure implementation.',
    techStack: ['Python', 'Data Structures', 'Algorithms'],
    highlights: [
      'Implemented priority-based processing behavior',
      'Practiced core data-structure operations and algorithm design',
    ],
  },
];

export const experience = [
  {
    role: 'Internship / Team Project',
    org: 'FutureBots',
    description:
      'Built the document ingestion (PyMuPDF) and hybrid retrieval layer (ChromaDB + BM25) for an industrial assistant/chatbot, implemented the S3 manuals-upload flow via boto3, and built the authenticated React/Ant Design frontend with per-user chat history.',
  },
  {
    role: 'Front End & Software Developer Intern',
    org: 'Penna Cement Industries Limited',
    description:
      'Worked with web-development technologies including HTML, CSS, JavaScript, React, Python, Git, and REST-style integration — exposure to software development in an industrial/business environment.',
  },
  {
    role: 'Summer 2025 Branch Operations Experience',
    org: 'RBFCU',
    description:
      'Participated in a summer experience involving branch operations, market research, mentorship, and a final evaluation — business-facing experience alongside the technical portfolio.',
  },
];

export const education = [
  {
    degree: "Master's in Computer Science",
    school: 'Texas A&M University–Corpus Christi',
    description:
      'Graduate-level work in AI/ML, Deep Learning, NLP, Human-Computer Interaction, Distributed Systems, Wireless Sensor Networks, Automata, Digital Image Processing, and Information Assurance — including research on large language models and text-to-SQL.',
  },
  {
    degree: "Bachelor's in Mechatronics",
    school: 'SRM University',
    description:
      'A multidisciplinary foundation spanning programming, automation, robotics, electronics, and mechanical systems — where an interest in artificial intelligence took hold.',
  },
];

export const research = {
  title: 'Why LLMs Struggle with Real-World SQL / Text-to-SQL Research',
  description:
    'Studied limitations of LLM-based text-to-SQL systems beyond benchmark settings — the gap between academic benchmarks like Spider/BIRD and enterprise databases, schema linking, SQL dialect variation, large schemas, multi-turn interactions, and reliability in realistic database environments. This research motivated the Multi-Agent Text-to-SQL project above. Also studied GAIA-style multi-agent / general AI assistant research and prepared presentation material around the papers and their implications.',
};

export const skillGroups = [
  { area: 'Programming', items: 'Python, Go, C, C++, JavaScript, SQL; exposure to Java, C#, TypeScript' },
  { area: 'Frontend', items: 'React, Vite, HTML, CSS, JavaScript, React Router, Tailwind CSS, Ant Design' },
  { area: 'Backend / APIs', items: 'FastAPI, Flask, Express, REST APIs, authentication flows, JWT/OIDC, API integration' },
  { area: 'AI / ML', items: 'Multi-agent systems (LangGraph), machine learning fundamentals, neural networks, NLP, embeddings, vector search' },
  { area: 'GenAI / RAG', items: 'LangChain, FAISS, ChromaDB, BM25 hybrid retrieval, sentence-transformers, Ollama, Mistral, Groq' },
  { area: 'QA / Testing', items: 'Playwright Test, Zod schema validation, Pytest, Vitest, Jest, Supertest, GitHub Actions CI' },
  { area: 'Cloud / Data', items: 'AWS S3 (boto3), Docker, SQLite, SQLModel, Prisma, PostgreSQL concepts, vector indexes' },
  { area: 'Dev Tools', items: 'Git, GitHub, Docker, VS Code, Linux/macOS terminal, npm/Node tooling, ESLint/Ruff' },
];
