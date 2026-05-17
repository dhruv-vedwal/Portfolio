export interface Metric {
  value: string;
  label: string;
  description: string;
}

export interface Capability {
  title: string;
  subtitle: string;
  description: string;
  technologies: string[];
  icon: string;
}

export interface SystemNodeData {
  id: string;
  label: string;
  type: 'ingress' | 'queue' | 'processing' | 'database' | 'external' | 'storage';
  description: string;
  x: number;
  y: number;
}

export interface SystemEdgeData {
  id: string;
  source: string;
  target: string;
  animated?: boolean;
  label?: string;
}

export interface SystemNarrative {
  problem: string;
  decision: string;
  scaling: string;
  failure: string;
  tradeoffs: string;
  improvements: string;
}

export interface SystemData {
  id: string;
  title: string;
  description: string;
  tag: string;
  impact: string;
  tech: string[];
  nodes: SystemNodeData[];
  edges: SystemEdgeData[];
  narrative: SystemNarrative;
}

export interface TimelineEvent {
  version: string;
  title: string;
  subtitle: string;
  date: string;
  description: string;
  deliverables: string[];
}

export interface NoteMetadata {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
}

// 1. Bio & Stats
export const DEV_INFO = {
  name: "Dhruv Vedwal",
  role: "Full Stack Product Engineer",
  status: "Active",
  location: "India",
  experience: "2+ Years",
  currentRole: "Senior Full Stack Developer",
  focus: [
    "SaaS Systems",
    "Real-Time Architecture",
    "AI Workflows",
    "Product Engineering"
  ]
};

// 2. Real Metrics
export const IMPACT_METRICS: Metric[] = [
  {
    value: "40%",
    label: "No-Show Reduction",
    description: "Achieved via advanced automated reminder queues and seamless doctor-patient scheduling workflows."
  },
  {
    value: "70%",
    label: "Dashboard Speedup",
    description: "Optimized complex DB queries, implemented strict Redis caching strategies, and established paginated data streams."
  },
  {
    value: "18%",
    label: "Revenue Growth Impact",
    description: "Direct conversion attribution pipeline linking marketing metrics with sales checkouts, empowering product expansion."
  },
  {
    value: "60%",
    label: "Processing Throughput",
    description: "Designed distributed message workers and concurrency throttles, significantly improving batch import and export times."
  },
  {
    value: "400+",
    label: "DSA Problems Solved",
    description: "Demonstrated solid foundation in core algorithms, complexity analysis, and efficient data structure selection."
  }
];

// 3. Capabilities
export const CAPABILITIES: Capability[] = [
  {
    title: "Real-Time Systems",
    subtitle: "High-Concurrancy Messaging",
    description: "Designing sub-100ms data synchronization engines. Expert in state synchronization, active channel connections, typing status updates, and scalable presence channels.",
    technologies: ["WebSockets", "Socket.io", "Redis Pub/Sub", "Server-Sent Events", "Firebase Realtime DB"],
    icon: "MessageSquareCode"
  },
  {
    title: "Event-Driven Backend",
    subtitle: "Asynchronous Pipelines",
    description: "Building decoupling event handlers, webhook receivers, retry handlers, and reliable queue processing. Experienced in ensuring system stability during massive spikes.",
    technologies: ["Node.js", "BullMQ", "RabbitMQ", "Redis Cache", "Worker Clusters", "Dead Letter Queues"],
    icon: "Network"
  },
  {
    title: "AI Product Systems",
    subtitle: "Cognitive Automation Flows",
    description: "Integrating intelligent pipelines that perform raw audio ingestion, trigger chunked Speech-to-Text transcriptions, apply LLM sanitization, and output structured dashboard summaries.",
    technologies: ["OpenAI API", "Whisper", "LangChain / AI Agents", "Structured JSON Schemas", "Vector Embeddings"],
    icon: "Cpu"
  },
  {
    title: "Full Stack Product Delivery",
    subtitle: "User Centered Engineering",
    description: "Translating complex design blueprints into production-ready user interfaces. Linking solid databases with optimized APIs and fast server-side rendered screens.",
    technologies: ["Next.js (App Router)", "TypeScript", "Tailwind CSS", "Prisma ORM", "PostgreSQL", "Docker", "AWS S3 / EC2"],
    icon: "Layers"
  }
];

// 4. Interactive Systems (React Flow representation + narratives)
export const SYSTEMS_DATA: SystemData[] = [
  {
    id: "ai-audio",
    title: "AI Audio Analytics Pipeline",
    description: "Automated transcription and AI-powered insights pipeline for high-volume audio call sessions, utilizing decoupled processing clusters.",
    tag: "AI & Event Ingestion",
    impact: "60% Ingestion Latency Reduction",
    tech: ["Node.js", "BullMQ", "Whisper STT", "OpenAI GPT-4", "Redis Cache", "PostgreSQL"],
    nodes: [
      { id: "1", label: "Call Provider Webhook", type: "ingress", description: "Receives raw audio payloads and triggers session authentication.", x: 50, y: 150 },
      { id: "2", label: "Event Ingress Gateway", type: "processing", description: "Validates headers, generates unique session hashes, and stores raw metadata.", x: 250, y: 150 },
      { id: "3", label: "BullMQ Queue Dispatcher", type: "queue", description: "Pushes job metadata into a high-throughput Redis-backed queue. Configures delay intervals.", x: 450, y: 150 },
      { id: "4", label: "Transcription Worker (Whisper)", type: "processing", description: "Consumes jobs, pulls raw audio streams, and chunks files for fast parallel Speech-to-Text.", x: 650, y: 50 },
      { id: "5", label: "AI Summary Engine (GPT)", type: "processing", description: "Feeds full transcripts to LLM alongside tailored prompt templates for QA audits.", x: 650, y: 250 },
      { id: "6", label: "Secure Data Persistence", type: "database", description: "Commits summaries, sentiment scores, and full timestamps to relational tables.", x: 880, y: 150 },
      { id: "7", label: "Analytics Dashboard UI", type: "external", description: "Server-side renders real-time insights with automatic webhook updates.", x: 1080, y: 150 }
    ],
    edges: [
      { id: "e1-2", source: "1", target: "2", animated: true, label: "POST /webhook" },
      { id: "e2-3", source: "2", target: "3", animated: true, label: "Enqueue payload" },
      { id: "e3-4", source: "3", target: "4", animated: true, label: "Job A: STT Pipeline" },
      { id: "e3-5", source: "3", target: "5", animated: true, label: "Job B: Extraction" },
      { id: "e4-6", source: "4", target: "6", animated: false, label: "Save transcript" },
      { id: "e5-6", source: "5", target: "6", animated: false, label: "Save summary" },
      { id: "e6-7", source: "6", target: "7", animated: true, label: "Next.js SSR Cache" }
    ],
    narrative: {
      problem: "We needed to transcribe and audit call logs automatically. Feeding multi-hour audio directly into a single processing cycle caused timeout failures, memory leaks, and high AI API expenses.",
      decision: "I split the solution into an asynchronous pipeline. A light Node.js gateway validates hook payloads immediately and pushes jobs to BullMQ. Workhorses pull from this queue, chunk audio into 10-minute fragments, parallel-transcribe via Whisper, and assemble the script before feeding a structured prompt template to GPT-4.",
      scaling: "At scale, raw server scaling is too slow. Instead, the Redis-backed queue isolates downstream worker failures. If transcribers experience spikes, jobs safely pool inside the queue without impacting webhook intake response times (which must complete under 200ms).",
      failure: "Any failed jobs trigger an exponential backoff retry system. If a task fails three times, it enters a Dead Letter Queue (DLQ) for engineering analysis. Network-level HTTP failures are insulated via standard idempotency keys on every transaction.",
      tradeoffs: "Using BullMQ on Redis was favored over AWS SQS because it offers sub-millisecond dispatch times and powerful job tracking features, which the product dashboard displays instantly.",
      improvements: "I would incorporate localized vector caching (Pinecone/pgvector) to detect repeated audio scripts. This would bypass expensive LLM calls entirely for standardized system recordings."
    }
  },
  {
    id: "live-chat",
    title: "Real-Time Live Chat Infrastructure",
    description: "Sub-100ms customer support gateway matching incoming client messages to agent dashboards, backed by distributed connection handling.",
    tag: "Real-time Connectivity",
    impact: "Sub-100ms Delivery | 5,000+ Concurrent Websockets",
    tech: ["Node.js", "Socket.io", "Redis Pub/Sub", "Next.js UI", "PostgreSQL"],
    nodes: [
      { id: "1", label: "Client Chat Interface", type: "ingress", description: "Web-based React chat widget establishing persistent TCP/Websocket handshake.", x: 50, y: 150 },
      { id: "2", label: "Load Balancer (Nginx)", type: "external", description: "Terminates SSL and routes WebSocket sessions using sticky IP sessions.", x: 250, y: 150 },
      { id: "3", label: "Websocket Server Cluster", type: "processing", description: "Node.js websocket nodes managing active connections and heartbeat state.", x: 480, y: 150 },
      { id: "4", label: "Redis Pub/Sub Bus", type: "queue", description: "Synchronizes chat events across detached WebSocket server nodes.", x: 700, y: 150 },
      { id: "5", label: "Presence & Active Cache", type: "storage", description: "Redis Key-Value store managing user session tokens and active typing states.", x: 700, y: 300 },
      { id: "6", label: "Message Store (PostgreSQL)", type: "database", description: "Durable persistence engine storing chat logs and indexing keywords.", x: 920, y: 150 }
    ],
    edges: [
      { id: "e1-2", source: "1", target: "2", animated: true, label: "WS Connection" },
      { id: "e2-3", source: "2", target: "3", animated: true },
      { id: "e3-4", source: "3", target: "4", animated: true, label: "Publish msg" },
      { id: "e3-5", source: "3", target: "5", animated: false, label: "Heartbeat state" },
      { id: "e4-6", source: "4", target: "6", animated: true, label: "Async persist" }
    ],
    narrative: {
      problem: "Delivering instant support chats on a single server node failed when load spiked. If a user connected to Node A and the agent was connected to Node B, messages were completely lost.",
      decision: "I added a central Redis Pub/Sub adapter to sync event signals across our WebSocket servers. Regardless of which physical node a client joins, messages publish to the Redis bus, and the relevant server immediately relays it to the recipient.",
      scaling: "Active client state (typing indicators, online flags) is kept entirely in Redis Key-Value stores with brief TTL values. This keeps our memory consumption on the WebSocket servers negligible.",
      failure: "If a WebSocket server crashes, Nginx sticky routing instantly pushes clients to a healthy node. Active reconnect mechanics on the client fetch missing chat history since the last delivered ID from the Postgres replica, ensuring zero lost messages.",
      tradeoffs: "We chose WebSockets over Server-Sent Events (SSE) because support agents require dual-way interaction (typing states, status updates) which is best done inside a single full-duplex socket channel.",
      improvements: "I would transition the Node.js WebSocket layer to Bun or Go (Gorilla WebSocket) to drastically lower container memory usage and handle more concurrent connections per CPU core."
    }
  },
  {
    id: "telecare",
    title: "Telecare Platforms & Scheduling",
    description: "Highly-secure, HIPAA-compliant patient dashboard mapping consultations, scheduling rules, and automated notification engines.",
    tag: "Healthcare Tech & Compliancy",
    impact: "40% Appointment No-Show Reduction",
    tech: ["Next.js", "Node.js WebRTC", "Redis Queue", "Twilio API", "PostgreSQL"],
    nodes: [
      { id: "1", label: "Patient App Interface", type: "ingress", description: "Mobile/Web portal for appointments booking and video calls.", x: 50, y: 50 },
      { id: "2", label: "Doctor Portal App", type: "ingress", description: "Dashboard for clinical notes, prescription generation, and session launching.", x: 50, y: 250 },
      { id: "3", label: "Core API & Booking Engine", type: "processing", description: "Validates scheduling slots, coordinates clinician calendars, and prevents double bookings.", x: 300, y: 150 },
      { id: "4", label: "WebRTC Video Gateway", type: "external", description: "HIPAA-compliant video bridge managing secure doctor-patient video feeds.", x: 550, y: 50 },
      { id: "5", label: "Twilio Notifications Worker", type: "processing", description: "Pulls notification jobs from the queue to dispatch SMS and email reminders.", x: 550, y: 250 },
      { id: "6", label: "Compliant DB Engine", type: "database", description: "AES-256 encrypted database storing logs, health stats, and session records.", x: 800, y: 150 }
    ],
    edges: [
      { id: "e1-3", source: "1", target: "3", animated: true, label: "Request slot" },
      { id: "e2-3", source: "2", target: "3", animated: true },
      { id: "e3-4", source: "3", target: "4", animated: true, label: "Token exchange" },
      { id: "e3-5", source: "3", target: "5", animated: true, label: "Schedule alerts" },
      { id: "e3-6", source: "3", target: "6", animated: false }
    ],
    narrative: {
      problem: "High patient no-show rates resulted in lost clinician time and schedule inefficiencies. Additionally, storing private consultations requires strict security compliance.",
      decision: "I designed a smart booking engine that automatically handles time zones, calendar updates, and a highly responsive notification system. An automated Redis-backed queue handles alert reminders 24-hours, 1-hour, and 10-minutes prior to sessions, utilizing Twilio SMS and secure email links.",
      scaling: "Video streams operate entirely peer-to-peer (WebRTC) backed by secure TURN/STUN servers, eliminating video data processing load on our core application instances.",
      failure: "If the Twilio API faces outages, jobs fail back to the Redis queue with exponential retries. The database is encrypted at rest and in transit (AES-256) with detailed access logs to satisfy strict security standards.",
      tradeoffs: "We implemented custom Twilio SMS reminder workers instead of simple cron jobs to ensure that high-volume message dispatches execute instantly and concurrently at precise trigger minutes.",
      improvements: "I would integrate real-time browser WebSockets to automatically pop-up visual alerts on the active clinician's desktop when a patient enters the digital waiting room."
    }
  },
  {
    id: "attribution",
    title: "Event-driven Conversion Attribution",
    description: "Real-time analytics engine matching marketing campaigns with billing checkouts to compute exact ROI without data duplication.",
    tag: "High-Volume Data Ingress",
    impact: "18% Revenue Visibility Improvement",
    tech: ["Kafka / RabbitMQ", "FastAPI Ingress", "Redis Cache", "ClickHouse / TimescaleDB"],
    nodes: [
      { id: "1", label: "Client Tracker SDK", type: "ingress", description: "Custom JS tracking code collecting UTM tokens and unique device fingerprints.", x: 50, y: 150 },
      { id: "2", label: "Fast Ingress Gateway", type: "processing", description: "Highly optimized endpoint designed for raw event intake with sub-5ms return.", x: 260, y: 150 },
      { id: "3", label: "Deduplication Cache", type: "storage", description: "Redis cluster storing event hashes to filter duplicate tracking events.", x: 480, y: 50 },
      { id: "4", label: "Event Message Queue", type: "queue", description: "RabbitMQ/Kafka broker partitioning events for parallel consumption.", x: 480, y: 250 },
      { id: "5", label: "Attribution Processor", type: "processing", description: "Worker matching checkout event IDs back to their first/last click campaign sources.", x: 700, y: 150 },
      { id: "6", label: "Analytics Database", type: "database", description: "TimescaleDB instance optimized for high-volume time-series querying and aggregated reporting.", x: 920, y: 150 }
    ],
    edges: [
      { id: "e1-2", source: "1", target: "2", animated: true, label: "HTTP Beacon" },
      { id: "e2-3", source: "2", target: "3", animated: true, label: "Check unique" },
      { id: "e2-4", source: "2", target: "4", animated: true, label: "Publish unique" },
      { id: "e4-5", source: "4", target: "5", animated: true },
      { id: "e5-6", source: "5", target: "6", animated: false, label: "Write ROI log" }
    ],
    narrative: {
      problem: "Marketing managers couldn't determine which specific ads drove sales. Duplicate conversion tracking beacons from page refreshes skewed analytics, leading to inaccurate budget allocations.",
      decision: "I built a real-time event pipeline. Every client action generates a unique transaction fingerprint. The fast API gateway verifies this hash against a distributed Redis lookup table. Unique actions are enqueued into a message queue, where background workers match the transaction back to the initial landing UTM campaign.",
      scaling: "The ClickHouse/Timescale database is highly optimized for append-only time-series writes. We use hyper-tables and pre-aggregated views, keeping queries fast even with tens of millions of records.",
      failure: "If the attribution processor suffers a failure, raw event queues continue to safely pool input data. Once workers restart, they process the backlog sequentially, ensuring 100% data integrity and zero lost attribution logs.",
      tradeoffs: "We chose message brokers (RabbitMQ) over simple HTTP writes to guarantee zero lost checkout signals. Writing directly to a relational database during flash-sales would saturate connection pools, slowing down checkout completion.",
      improvements: "I would introduce an edge-computing gateway (Cloudflare Workers) to evaluate and deduplicate incoming events directly at the network edge, reducing core server bandwidth costs."
    }
  },
  {
    id: "bulk-process",
    title: "Bulk Import Ingestion Infrastructure",
    description: "Robust asynchronous CSV data processor capable of parsing, validating, and persisting large datasets with real-time progress updates.",
    tag: "Platform Infrastructure",
    impact: "10x Ingestion Speedup | 50,000+ Rows/Sec",
    tech: ["Next.js UI", "AWS S3", "BullMQ Queue", "Fast CSV Parser", "PostgreSQL"],
    nodes: [
      { id: "1", label: "Next.js UI File Upload", type: "ingress", description: "Selects file, validates extensions, and requests secure direct-upload link.", x: 50, y: 150 },
      { id: "2", label: "S3 Ingestion Bucket", type: "storage", description: "Durable storage hosting raw CSV files. Emits file-upload creation events.", x: 260, y: 150 },
      { id: "3", label: "CSV Splitting Engine", type: "processing", description: "Reads S3 streams in chunks, generating minor sub-files to prevent memory bloating.", x: 480, y: 150 },
      { id: "4", label: "Bulk Job Queue (SQS/Bull)", type: "queue", description: "Handles distributed chunk assignments to worker nodes.", x: 700, y: 150 },
      { id: "5", label: "Validation Workers", type: "processing", description: "Parallel processes validating row structures and checking database constraints.", x: 700, y: 300 },
      { id: "6", label: "Bulk Database Copy", type: "database", description: "Executes ultra-fast bulk INSERT transactions via PostgreSQL COPY query.", x: 920, y: 150 }
    ],
    edges: [
      { id: "e1-2", source: "1", target: "2", animated: true, label: "Presigned URL" },
      { id: "e2-3", source: "2", target: "3", animated: true, label: "Read S3 Stream" },
      { id: "e3-4", source: "3", target: "4", animated: true, label: "Publish chunks" },
      { id: "e4-5", source: "4", target: "5", animated: true },
      { id: "e5-6", source: "5", target: "6", animated: true, label: "Postgres COPY" }
    ],
    narrative: {
      problem: "Users importing large CSV spreadsheets (50k+ rows) experienced HTTP timeouts and server out-of-memory errors because the backend attempted to parse and write the entire file inside a single request thread.",
      decision: "I re-architected this into an asynchronous chunking process. The frontend uploads files directly to AWS S3 via presigned URLs. The server reads this stream, splits the CSV into 1,000-row chunks, enqueues each chunk as a separate task, and processes them concurrently across multiple workers.",
      scaling: "Using the raw `COPY` command in PostgreSQL instead of ORM loops (Prisma `createMany`) bypassed ORM translation overhead, reducing database insertion times from minutes to seconds.",
      failure: "If validation fails for specific rows, workers log error details to a specific session table in Postgres. The ingestion job continues to process other chunks, reporting detailed success/failure logs to the user rather than failing the entire file.",
      tradeoffs: "We chose direct S3 uploads over standard multi-part HTTP forms because it routes network load away from application containers, ensuring the backend remains fast and responsive for other users.",
      improvements: "I would add an SSE (Server-Sent Events) pipeline to push live, highly visual import progress indicators (e.g. 34% completed, 12 errors detected) directly to the user's dashboard."
    }
  }
];

// 5. Timeline / Resume
export const TIMELINE_DATA: TimelineEvent[] = [
  {
    version: "v1.0",
    title: "Frontend Foundations",
    subtitle: "Creating Interactive High-Fidelity UIs",
    date: "Q1 - Q2 2024",
    description: "Built the foundation of my engineering journey by focusing on advanced user interface development, state management, and highly-performant browser interactions.",
    deliverables: [
      "Mastered Next.js App Router, React Server Components, and strict TypeScript structures",
      "Crafted responsive dashboard panels with complex layout states and customized chart layers",
      "Created sleek, micro-interactive design systems utilizing framer-motion animations"
    ]
  },
  {
    version: "v2.0",
    title: "Full Stack Product Delivery",
    subtitle: "Connecting User Experience with Scalable APIs",
    date: "Q3 - Q4 2024",
    description: "Expanded my engineering focus to backend integrations, database schemas, and building highly-efficient REST/GraphQL API systems.",
    deliverables: [
      "Engineered secure authentication pathways, token-based session managers, and custom middleware handlers",
      "Designed relational schemas utilizing Prisma ORM, implementing fast indexing and custom query joins",
      "Integrated payment processing flows and secure third-party webhook receivers"
    ]
  },
  {
    version: "v3.0",
    title: "Real-Time Architecture",
    subtitle: "Designing High-Concurrency Data Streams",
    date: "Q1 2025",
    description: "Delved into persistent connection states, optimizing sub-100ms updates, and managing message buses across multiple server instances.",
    deliverables: [
      "Created scalable WebSocket environments using Socket.io and custom cluster sticky sessions",
      "Built multi-server Redis Pub/Sub syncing systems to broadcast chat messages instantly",
      "Integrated Redis Key-Value caching to manage online presence states and user typing updates"
    ]
  },
  {
    version: "v4.0",
    title: "Event-Driven Architecture",
    subtitle: "Building Robust Asynchronous Handlers",
    date: "Q2 2025",
    description: "Architected decoupled system topologies, structured queues, task scheduling managers, and comprehensive error recovery procedures.",
    deliverables: [
      "Constructed BullMQ pipelines to handle large bulk processes asynchronously",
      "Configured robust Dead Letter Queue (DLQ) pathways and backoff retry configurations for external APIs",
      "Architected real-time event-attribution pipelines parsing millions of metrics monthly"
    ]
  },
  {
    version: "v5.0",
    title: "AI Product Workflows",
    subtitle: "Intelligent Pipeline Integration",
    date: "Q3 - Q4 2025",
    description: "Pioneered automated intelligent pipelines, combining AI models with production queuing and structured analytics databases.",
    deliverables: [
      "Created chunked Speech-to-Text audio processing systems using Whisper workers",
      "Crafted structured LLM parsing chains yielding reliable metadata with zero schema drifting",
      "Optimized intelligent prompt contexts to minimize API usage and response latency"
    ]
  },
  {
    version: "vNext",
    title: "Distributed Systems & Infrastructure",
    subtitle: "Scaling Beyond Application Boundaries",
    date: "2026 & Beyond",
    description: "Currently researching and integrating cloud-native infrastructures, zero-trust edge APIs, and decentralized computing pipelines.",
    deliverables: [
      "Deploying edge-first API wrappers using Cloudflare Workers and globally distributed stores",
      "Exploring Kubernetes cluster setups and custom service meshes for container discovery",
      "Integrating pgvector and vector database structures to scale semantic search engines"
    ]
  }
];

// 6. Engineering Notes (Decision Journal metadata)
export const ENGINEERING_NOTES: NoteMetadata[] = [
  {
    slug: "websockets-vs-polling",
    title: "Why WebSockets Over Polling: A Sub-100ms Tradeoff Analysis",
    excerpt: "An in-depth engineering review comparing short-polling, long-polling, and WebSockets. We analyze TCP socket overhead, thread consumption, and CPU performance at scale.",
    date: "May 12, 2026",
    readTime: "7 min read",
    category: "Real-Time Systems"
  },
  {
    slug: "reliable-webhook-consumers",
    title: "Designing Reliable Webhook Consumers: Dealing with Spikes and Downtime",
    excerpt: "Webhooks are notoriously brittle. Learn how to build a highly-resilient, event-driven webhook ingress using Redis, BullMQ, and dead letter queues.",
    date: "April 28, 2026",
    readTime: "9 min read",
    category: "System Resilience"
  },
  {
    slug: "queue-strategy-async",
    title: "Queue Strategy for Asynchronous Bulk Processing",
    excerpt: "How to process 50k+ record imports without blocking HTTP threads. We walk through direct-to-S3 uploads, file chunking, and parallel worker queues.",
    date: "April 15, 2026",
    readTime: "8 min read",
    category: "Infrastructure"
  },
  {
    slug: "handling-event-duplication",
    title: "Handling Event Duplication in Event-Driven Systems",
    excerpt: "At-least-once delivery guarantees duplicate events. Here is how we implement idempotent consumer patterns using Redis caching and transaction markers.",
    date: "March 20, 2026",
    readTime: "6 min read",
    category: "Event Architecture"
  },
  {
    slug: "redis-caching-tradeoffs",
    title: "Redis Caching: Tradeoffs, Cache Invalidation, and Mitigating Dogpiling",
    excerpt: "Caching is not free. We examine the core complexities of Cache-Aside, Write-Through patterns, Cache Stampedes, and building resilient fallbacks.",
    date: "February 10, 2026",
    readTime: "11 min read",
    category: "Database Tuning"
  }
];
