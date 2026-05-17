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
    subtitle: "High-Concurrency Messaging",
    description: "Designing sub-100ms data synchronization engines. Expert in state synchronization, active channel connections, typing status updates, and scalable presence channels.",
    technologies: ["Socket.io", "Firebase Realtime DB", "Redis Caching", "WebSockets", "REST APIs"],
    icon: "MessageSquareCode"
  },
  {
    title: "Event-Driven Backend",
    subtitle: "Asynchronous Pipelines",
    description: "Building decoupling event handlers, webhook receivers, retry handlers, and reliable queue processing. Experienced in ensuring system stability during massive spikes.",
    technologies: ["Node.js", "Express.js", "AWS SQS", "Worker Threads", "Redis Caching", "Webhooks"],
    icon: "Network"
  },
  {
    title: "AI Product Systems",
    subtitle: "Cognitive Automation Flows",
    description: "Integrating intelligent pipelines that perform raw audio ingestion, trigger chunked Speech-to-Text transcriptions, apply LLM sanitization, and output structured dashboard summaries.",
    technologies: ["OpenAI API", "Whisper API", "Structured AI Summaries", "WhatsApp API", "Node.js Workers"],
    icon: "Cpu"
  },
  {
    title: "Full Stack Product Delivery",
    subtitle: "User Centered Engineering",
    description: "Translating complex design blueprints into production-ready user interfaces. Linking solid databases with optimized APIs and fast server-side rendered screens.",
    technologies: ["Next.js (App Router)", "TypeScript", "Tailwind CSS", "Prisma ORM", "Sequelize ORM", "PostgreSQL", "MongoDB"],
    icon: "Layers"
  }
];

// 4. Interactive Systems (React Flow representation + narratives)
export const SYSTEMS_DATA: SystemData[] = [
  {
    id: "ai-audio",
    title: "AI Audio Analytics System",
    description: "Webhook-driven call tracking & AI analytics platform that ingests raw audio, generates automated call transcripts, and extracts insights.",
    tag: "AI & Event Ingestion",
    impact: "12% Sales Attribution | AI Insights",
    tech: ["Node.js", "Express.js", "AWS SQS", "Whisper API", "OpenAI GPT-4", "PostgreSQL", "Redis"],
    nodes: [
      { id: "1", label: "Call Provider Webhook", type: "ingress", description: "Receives raw audio payloads and triggers session authentication.", x: 50, y: 150 },
      { id: "2", label: "Express.js Webhook Ingress", type: "processing", description: "Validates signatures, validates headers, and logs transaction metadata.", x: 250, y: 150 },
      { id: "3", label: "AWS SQS Ingestion Queue", type: "queue", description: "Buffers incoming event streams to insulate downstream workers from load surges.", x: 450, y: 150 },
      { id: "4", label: "Whisper Transcription Worker", type: "processing", description: "Consumes SQS messages, downloads audio streams, and transcribes speech-to-text.", x: 650, y: 50 },
      { id: "5", label: "OpenAI GPT-4 Insights", type: "processing", description: "Feeds raw transcripts to LLM to extract structured summaries and sentiment analytics.", x: 650, y: 250 },
      { id: "6", label: "PostgreSQL Database Store", type: "database", description: "Stores persistent audio logs, JSON summary payloads, and attribution metrics.", x: 880, y: 150 },
      { id: "7", label: "Analytics Dashboard UI", type: "external", description: "Provides real-time analytics updates and visual call records via Next.js and Prisma.", x: 1080, y: 150 }
    ],
    edges: [
      { id: "e1-2", source: "1", target: "2", animated: true, label: "POST /webhook" },
      { id: "e2-3", source: "2", target: "3", animated: true, label: "Push metadata" },
      { id: "e3-4", source: "3", target: "4", animated: true, label: "Transcription job" },
      { id: "e3-5", source: "3", target: "5", animated: true, label: "Summary job" },
      { id: "e4-6", source: "4", target: "6", animated: false, label: "Save transcript" },
      { id: "e5-6", source: "5", target: "6", animated: false, label: "Save summary" },
      { id: "e6-7", source: "6", target: "7", animated: true, label: "Prisma Query" }
    ],
    narrative: {
      problem: "Ingesting call audio files directly in single request cycles caused server timeouts and out-of-memory errors when processing multi-hour files during high traffic peaks.",
      decision: "I split the solution into an asynchronous pipeline. A lightweight Express.js gateway validates hook signatures immediately, enqueues the session metadata in AWS SQS, and returns a fast 200 OK. Background workers pull from SQS to process audio streams, transcribe via Whisper, and use OpenAI GPT-4 to extract structured call summaries.",
      scaling: "At scale, AWS SQS acts as a buffer that isolates downstream workers from traffic spikes. Webhook intake response times remain sub-200ms regardless of active transcription queue depth.",
      failure: "Failed transcription tasks are insulated with exponential backoff and placed in an AWS SQS Dead Letter Queue (DLQ) for engineering analysis. Relational transaction integrity is enforced via PostgreSQL.",
      tradeoffs: "We chose AWS SQS over local Redis queues to guarantee enterprise durability and leverage AWS's built-in message visibility timeouts and natively integrated DLQs.",
      improvements: "I would incorporate localized caching of frequent caller transcripts to skip expensive OpenAI summaries for standard interactive voice response (IVR) call profiles."
    }
  },
  {
    id: "live-chat",
    title: "Real-Time Live Chat Platform",
    description: "Ultra-low latency customer support gateway connecting active clients to multi-agent dashboards with read receipts and active presence.",
    tag: "Real-time Connectivity",
    impact: "Sub-100ms Delivery | Multi-Agent Routing",
    tech: ["Node.js", "Express.js", "Firebase Realtime DB", "Socket.io", "Redis", "React / Chakra UI"],
    nodes: [
      { id: "1", label: "Client Chat Interface", type: "ingress", description: "React.js widget establishing persistent websocket sessions or direct Firebase sync.", x: 50, y: 150 },
      { id: "2", label: "Express.js Socket.IO Nodes", type: "processing", description: "Node.js application nodes handling web socket connections and active heartbeats.", x: 250, y: 150 },
      { id: "3", label: "Redis Presence & TTL Cache", type: "storage", description: "Stores session tokens, online availability, and active typing indicators.", x: 480, y: 50 },
      { id: "4", label: "Firebase Realtime DB Sync", type: "storage", description: "Synchronizes message streams, delivery indicators, and read receipts instantly.", x: 480, y: 250 },
      { id: "5", label: "MongoDB Conversation Store", type: "database", description: "Stores persistent conversation history, message archives, and offline logs.", x: 720, y: 150 },
      { id: "6", label: "Support Agent Console", type: "external", description: "React-based admin console rendering active queues, analytics, and chats.", x: 940, y: 150 }
    ],
    edges: [
      { id: "e1-2", source: "1", target: "2", animated: true, label: "WebSockets" },
      { id: "e2-3", source: "2", target: "3", animated: false, label: "Heartbeat state" },
      { id: "e1-4", source: "1", target: "4", animated: true, label: "Direct Sync" },
      { id: "e2-5", source: "2", target: "5", animated: true, label: "Save history" },
      { id: "e5-6", source: "5", target: "6", animated: true, label: "Real-time updates" }
    ],
    narrative: {
      problem: "Traditional database polling for incoming customer support messages created extreme database query load, resulting in 5+ second message delivery delays.",
      decision: "Architected a hybrid real-time structure combining Firebase and Socket.IO. Firebase manages instant message state and read receipts, while Node.js Socket.IO manages agent routing, presence status, and queue telemetry.",
      scaling: "Kept ephemeral actions like typing indicators and online presence in a high-speed Redis cache with active TTLs, keeping the main database query load negligible.",
      failure: "If the WebSocket connection drops, Socket.IO automatically reconnects and synchronizes missing local history with Firebase state, ensuring zero lost messages.",
      tradeoffs: "Chose Firebase Realtime DB to offload live message synchronization, focusing server resources entirely on multi-agent routing logic.",
      improvements: "I would unify all database storage into PostgreSQL with Sequelize to simplify data schema consistency and relational analytics reporting."
    }
  },
  {
    id: "telecare",
    title: "Telehealth & Zoom Scheduling",
    description: "HIPAA-compliant patient/doctor scheduling portal that automates appointment workflows, handles secure video links, and fires text/OTP alerts.",
    tag: "Clinical Web & Integration",
    impact: "40% No-Show Reduction | 45% Adherence",
    tech: ["Next.js", "Node.js", "Express.js", "Zoom SDK", "Twilio SMS/OTP", "PostgreSQL", "Redis"],
    nodes: [
      { id: "1", label: "Patient Booking Portal", type: "ingress", description: "Next.js forms for patient appointment booking and doctor discovery.", x: 50, y: 50 },
      { id: "2", label: "Doctor Consultation App", type: "ingress", description: "Next.js admin console managing slots and clinical histories.", x: 50, y: 250 },
      { id: "3", label: "Next.js Core Scheduling", type: "processing", description: "Orchestrates appointment availability rules and prevents slot conflicts.", x: 300, y: 150 },
      { id: "4", label: "Zoom Embedded Video SDK", type: "external", description: "Provides private, secure video consultation rooms directly within the dashboard.", x: 550, y: 50 },
      { id: "5", label: "Twilio SMS & OTP Worker", type: "processing", description: "Dispatches verification codes and automated text reminders.", x: 550, y: 250 },
      { id: "6", label: "Redis Notification Queue", type: "queue", description: "Schedules automated alert reminders at precise time intervals.", x: 300, y: 350 },
      { id: "7", label: "PostgreSQL Database (Prisma)", type: "database", description: "Stores encrypted health data, user profiles, and schedules.", x: 800, y: 150 }
    ],
    edges: [
      { id: "e1-3", source: "1", target: "3", animated: true, label: "Book slot" },
      { id: "e2-3", source: "2", target: "3", animated: true, label: "Start session" },
      { id: "e3-4", source: "3", target: "4", animated: true, label: "Video token" },
      { id: "e3-6", source: "3", target: "6", animated: true, label: "Queue alerts" },
      { id: "e6-5", source: "6", target: "5", animated: true, label: "Trigger SMS" },
      { id: "e3-7", source: "3", target: "7", animated: false, label: "Save schedule" }
    ],
    narrative: {
      problem: "Missed telehealth appointments (no-shows) severely degraded clinic efficiency, while manual meeting creation wasted clinician hours.",
      decision: "Integrated Next.js with the Zoom SDK to automate private room creations instantly. To combat no-shows, built a scheduling engine that queues SMS alerts in Redis, triggering automated text reminders via Twilio at 24-hour and 10-minute intervals.",
      scaling: "Video traffic runs directly peer-to-peer via the Zoom client SDK, offloading processing load from core servers.",
      failure: "Implemented OTP verification via Twilio to secure patient login credentials. Database transactions are isolated and fully encrypted.",
      tradeoffs: "Used Twilio SMS instead of in-app notifications because text messages are far more effective for immediate mobile reminders.",
      improvements: "I would transition notifications to WhatsApp Business API to leverage structured, rich media templates and interactive quick replies."
    }
  },
  {
    id: "attribution",
    title: "Conversion Attribution Engine",
    description: "Event-driven tracking pipeline that attributes Facebook/WhatsApp ad clicks directly to checkout sales, calculating ROI without data duplication.",
    tag: "High-Volume Ingestion",
    impact: "20% ROI Visibility | Zero Duplicate Checkouts",
    tech: ["Node.js", "Express.js", "AWS SQS", "Facebook Marketing API", "PostgreSQL", "Redis Cache"],
    nodes: [
      { id: "1", label: "Marketing Tracking SDK", type: "ingress", description: "Collects UTM campaign codes and unique client fingerprints on page loading.", x: 50, y: 150 },
      { id: "2", label: "Express.js Ingress Gateway", type: "processing", description: "Fast webhook receiver executing raw event ingestion with sub-5ms latency.", x: 260, y: 150 },
      { id: "3", label: "Redis Deduplication Cache", type: "storage", description: "Filters event hashes within a 60-second window to prevent duplicate counts.", x: 480, y: 50 },
      { id: "4", label: "AWS SQS Attribution Queue", type: "queue", description: "Durable queue that ingests, partitions, and schedules conversion jobs.", x: 480, y: 250 },
      { id: "5", label: "Attribution Match Engine", type: "processing", description: "Worker matching checkout signals back to original ad-click UTM sources.", x: 700, y: 150 },
      { id: "6", label: "PostgreSQL Campaign Store", type: "database", description: "Persists aggregated ROI records and detailed campaign logs.", x: 920, y: 150 }
    ],
    edges: [
      { id: "e1-2", source: "1", target: "2", animated: true, label: "Click payload" },
      { id: "e2-3", source: "2", target: "3", animated: true, label: "Verify unique" },
      { id: "e2-4", source: "2", target: "4", animated: true, label: "Enqueue conversion" },
      { id: "e4-5", source: "4", target: "5", animated: true, label: "Match UTM" },
      { id: "e5-6", source: "5", target: "6", animated: false, label: "Write ROI" }
    ],
    narrative: {
      problem: "Double-counting checkout events from page refreshes skewed marketing campaign data, leading to incorrect budget decisions.",
      decision: "Built a real-time attribution gateway. Every conversion action generates a unique transaction fingerprint. The Express.js gateway checks this against Redis cache to filter duplicates, then enqueues unique events into AWS SQS for processing and matching.",
      scaling: "Using Redis as a key-value deduplication gate handles massive event surges with sub-millisecond lookup latency.",
      failure: "If the main PostgreSQL database goes down, incoming conversions are safely held in SQS for up to 14 days, protecting valuable ad spend data from being lost.",
      tradeoffs: "Used Redis for deduplication instead of standard database unique constraints to prevent heavy locking on Postgres tables during sales spikes.",
      improvements: "I would move tracking SDK execution to edge scripts to block duplicate clicks before they reach the server."
    }
  },
  {
    id: "bulk-process",
    title: "Bulk Import/Export Ingestion",
    description: "Fault-tolerant asynchronous CSV processing system that parses, validates, and uploads large datasets using parallel threads.",
    tag: "Platform Infrastructure",
    impact: "60% Throughput | 50,000+ Row Parsing",
    tech: ["Next.js", "Node.js", "AWS SQS", "Worker Threads", "AWS S3", "PostgreSQL", "Prisma"],
    nodes: [
      { id: "1", label: "Dashboard Import UI", type: "ingress", description: "Selects files, performs local checks, and requests S3 direct upload tokens.", x: 50, y: 150 },
      { id: "2", label: "AWS S3 Upload Bucket", type: "storage", description: "Secure, durable file storage hosting raw and parsed CSV data.", x: 260, y: 150 },
      { id: "3", label: "S3 Stream Ingestion Engine", type: "processing", description: "Streams CSV raw files from S3 in lightweight memory batches to avoid OOM.", x: 480, y: 150 },
      { id: "4", label: "AWS SQS Batch Queue", type: "queue", description: "Splits bulk spreadsheets into SQS batch tasks (1,000 rows each).", x: 700, y: 150 },
      { id: "5", label: "Node.js Worker Threads", type: "processing", description: "Parallel multi-thread processes checking schemas and database constraints.", x: 700, y: 300 },
      { id: "6", label: "PostgreSQL Database Store", type: "database", description: "Stores persistent records using high-performance batch insert statements.", x: 920, y: 150 }
    ],
    edges: [
      { id: "e1-2", source: "1", target: "2", animated: true, label: "Direct S3 Upload" },
      { id: "e2-3", source: "2", target: "3", animated: true, label: "Stream CSV" },
      { id: "e3-4", source: "3", target: "4", animated: true, label: "Split 1k rows" },
      { id: "e4-5", source: "4", target: "5", animated: true, label: "Parallel validate" },
      { id: "e5-6", source: "5", target: "6", animated: true, label: "Batch COPY" }
    ],
    narrative: {
      problem: "Uploading large CSV files (50k+ rows) in single HTTP threads caused Out-of-Memory crashes and server timeouts.",
      decision: "Designed an asynchronous, decoupled import architecture. The client uploads the CSV directly to S3. A Node.js backend streams the file from S3, splits it into 1,000-row chunks, and distributes them via AWS SQS to separate Worker Threads for parallel database insertion.",
      scaling: "Distributing execution across Node.js Worker Threads prevents heavy parsing loads from locking the single-threaded event loop.",
      failure: "Validation failures for specific rows are logged to a separate Postgres session log. The main process continues import, giving the user a downloadable list of failed rows.",
      tradeoffs: "Uploading files directly to S3 routes network-heavy uploads away from Node.js servers, keeping the API fast and responsive.",
      improvements: "I would add a Firebase-backed subscription stream to update the frontend progress bar (e.g., 45% parsed, 12 errors) in real time."
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
