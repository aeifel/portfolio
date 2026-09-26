export interface Bullet { lead: string; rest: string }
export interface Section { heading: string; bullets: Bullet[] }

export const RESUME = {
  name: 'Hari Prasath S',
  // No employer, location, or education: this page is public, and none of it
  // is needed to judge the work.
  job: {
    title: 'Software Development Engineer',
  },
  sections: [
    {
      heading: 'Agent Platform',
      bullets: [
        { lead: 'Co-developed an LLMOps platform layer', rest: ' on Agno and LiteLLM, separating agent orchestration from provider access and centralizing LLM APIs, LLM observability and security in one gateway.' },
        { lead: 'Built a stateless tool server with FastMCP and FastAPI', rest: ', enabling agent tool calling for user-authored Python tools by dynamically provisioning short-lived MCP servers — horizontally scalable without per-tool Lambdas.' },
        { lead: 'Architected and built an AI governance layer for PII protection', rest: ', de-identifying personal data before LLM calls and restoring it for tools and responses, preserving conversational coherence.' },
        { lead: 'Built real-time voice agents on LiveKit Agents', rest: ' that join and converse in live meetings via STT, TTS, and voice activity detection, with speech usage metering.' },
        { lead: 'Built an agentic NL2SQL analytics assistant with Google ADK and Gemini', rest: ', translating natural-language questions into parameterized SQL and synthesizing results into actionable insights.' },
      ],
    },
    {
      heading: 'Retrieval & Evaluation',
      bullets: [
        { lead: 'Built multimodal RAG for AI agents', rest: ' using embeddings and Qdrant to retrieve relevant context from user-provided data, grounding agent responses and tool use in that context.' },
        { lead: 'Built LLM-as-a-Judge model evaluation for AI agents', rest: ', benchmarking candidate models on accuracy, bias, and fairness to guide model selection.' },
      ],
    },
    {
      heading: 'Inference Engineering',
      bullets: [
        { lead: 'Re-engineered the inference path', rest: ' around a persistent vLLM engine and streaming relay, replacing per-request AWS Step Functions/Batch execution — reducing time-to-first-token from <b>1.9 s to 23 ms (~99%)</b>, eliminating gateway timeouts, and accelerating repeat agent calls <b>24×</b> through cached prompt prefixes.' },
        { lead: 'Built autoscaling multi-model serving on ECS', rest: ', packing multiple vLLM engines per GPU to cut per-model cost by <b>75%</b>; drove scale-out/in via custom CloudWatch metrics and alarms, with health-gated production deployments.' },
      ],
    },
    {
      heading: 'Engineering Practice',
      bullets: [
        { lead: 'Resolved production issues end-to-end', rest: ' — from root-cause analysis through fixes and regression tests, with runbooks enabling reliable handoff and ongoing maintenance.' },
        { lead: 'Drove system design and code reviews across these systems', rest: ', working cross-functionally with ML, product and customer teams; mentored an intern and made AI-assisted development an integral part of the engineering workflow.' },
      ],
    },
  ] as Section[],
  project: {
    heading: 'PERSONAL PROJECT · DELTA',
    bullets: [
      { lead: 'Built Delta, a change-intelligence platform', rest: ' that maintains live state per tracked entity and emits events only for material changes.' },
      { lead: 'Engineered Delta’s event-driven backbone with transactional outbox and Kafka', rest: '; added Debezium CDC for analytics/reporting and deployed services on Kubernetes with Helm, Terraform, and CI.' },
      { lead: 'Kept Delta’s state deterministic', rest: ' — constrained LLM extraction to structured output grounded in source text at ingest, while RAG chat cites retrieved evidence at query time.' },
    ] as Bullet[],
  },
  skills: [
    ['LANGUAGES', 'Python · Java · TypeScript · JavaScript · SQL · Bash'],
    ['GENAI & LLMOPS', 'Agno · LiteLLM · Model Context Protocol · FastMCP · Function Calling · RAG · Prompt Engineering · Context Engineering · Model Evaluation · Amazon Bedrock · Gemini'],
    ['AI GOVERNANCE', 'Guardrails · PII Protection · Data Privacy · Hallucination Mitigation · AgentOps'],
    ['ML & MLOPS', 'vLLM · PyTorch · CUDA · KV Cache · Model Deployment · Model Monitoring · GPU Benchmarking'],
    ['RETRIEVAL & DATA', 'PostgreSQL · pgvector · Vector Databases · Reranking · Embeddings · Redis · MongoDB · OpenSearch'],
    ['BACKEND & APIS', 'FastAPI · Pydantic · asyncio · SQLAlchemy · Celery · Kafka · REST · SSE · Microservices'],
    ['CLOUD & DEVOPS', 'AWS (ECS · EC2 · Lambda · Step Functions · SQS · S3 · CloudWatch) · Kubernetes · Helm · Terraform · Docker · CI/CD · Linux'],
  ] as [string, string][],
  datasheet: [
    'I build and own production systems, working across backend, distributed systems, real-time video and AI/ML pipelines.',
    'What I enjoy most about engineering is designing systems for real-world scale, use cases and problems. I’ve always had a keen interest in the fundamentals.',
    'As a founding engineer, I’ve had great exposure to real-world systems, building them from requirements through production, and the vast amount of learning that came with it.',
  ],
};

export const LINKS = {
  linkedin: 'https://www.linkedin.com/in/hariprasathtech',
  github: 'https://github.com/aeifel',
};
