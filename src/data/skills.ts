export interface CoreMark {
  id: string;
  label: string;
  /** Inline SVG body, drawn on a 24×24 grid, stroke-only. */
  art: string;
}

export interface SkillGroup {
  name: string;
  art: string;
  items: string[];
}

export const CORE: CoreMark[] = [
  { id: 'python', label: 'python', art: `<path d="M16.8 6.4h-5.4a2.8 2.8 0 0 0 0 5.6h3.2a2.8 2.8 0 0 1 0 5.6H8.6"/><circle cx="8.3" cy="17.6" r="1.45" fill="currentColor" stroke="none"/>` },
  { id: 'git', label: 'git', art: `<circle cx="7" cy="5.6" r="2.1"/><circle cx="7" cy="18.4" r="2.1"/><circle cx="16.5" cy="16.9" r="2.1"/><path d="M7 7.7v8.6"/><path d="M7 10.6h5.5a4 4 0 0 1 4 4v.2"/>` },
  { id: 'postgres', label: 'postgres', art: `<ellipse cx="12" cy="7" rx="6.5" ry="2.6"/><path d="M5.5 7v10a6.5 2.6 0 0 0 13 0V7"/><path d="M5.5 12a6.5 2.6 0 0 0 13 0"/>` },
  { id: 'docker', label: 'docker', art: `<rect x="6" y="10.5" width="3.6" height="3.6" rx=".6"/><rect x="10.2" y="10.5" width="3.6" height="3.6" rx=".6"/><rect x="14.4" y="10.5" width="3.6" height="3.6" rx=".6"/><rect x="10.2" y="6.3" width="3.6" height="3.6" rx=".6"/><path d="M3.6 17.9q2.6-2 5.2 0t5.2 0 5.2 0"/>` },
  { id: 'aws', label: 'aws', art: `<path d="M7.8 15a3.3 3.3 0 0 1 .5-6.6 4.4 4.4 0 0 1 8.2-1 3.4 3.4 0 0 1 .3 7.6Z"/><path d="M5.5 18.3c4.2 2.3 8.8 2.3 13 0"/><path d="M16.6 17.2 18.5 18.3l-1.3 1.6"/>` },
  { id: 'vllm', label: 'vllm', art: `<rect x="3.5" y="7" width="8.5" height="10" rx="2.2"/><circle cx="7.75" cy="12" r="1.6"/><path d="M14.2 8.8 17.4 12l-3.2 3.2"/><path d="M18.6 9.9 20.7 12l-2.1 2.1"/>` },
  { id: 'linux', label: 'linux', art: `<path d="M12 3.6c-2.15 0-3.75 1.7-3.75 3.8v3.1c0 2.6-2.15 4.3-2.15 6.7 0 1.6 1.35 2.7 2.95 2.7h5.9c1.6 0 2.95-1.1 2.95-2.7 0-2.4-2.15-4.1-2.15-6.7V7.4c0-2.1-1.6-3.8-3.75-3.8Z"/><circle cx="10.5" cy="8" r=".72" fill="currentColor" stroke="none"/><circle cx="13.5" cy="8" r=".72" fill="currentColor" stroke="none"/><path d="M11 10.5h2"/><path d="M9.6 19.9c-.6.9-1.7 1.3-2.8 1.1"/><path d="M14.4 19.9c.6.9 1.7 1.3 2.8 1.1"/>` },
  { id: 'redis', label: 'redis', art: `<rect x="4" y="5.5" width="16" height="13" rx="2.6"/><path d="M13 8.4 9.6 13.3h2.6l-.9 3.9 3.6-4.9h-2.6Z"/>` },
  { id: 'mongodb', label: 'mongo', art: `<path d="M12 3.6c3.4 3.9 5 6.9 5 9.9 0 3.2-2.1 5.5-5 6.3-2.9-.8-5-3.1-5-6.3 0-3 1.6-6 5-9.9Z"/><path d="M12 7.4v12.4"/><path d="M12 19.9v1.7"/>` },
  { id: 'kubernetes', label: 'kubernetes', art: `<path d="M12 3.5 18.6 6.7 20.3 13.9 15.7 19.7H8.3L3.7 13.9 5.4 6.7Z"/><circle cx="12" cy="9.7" r="1.15"/><circle cx="9.3" cy="14.4" r="1.15"/><circle cx="14.7" cy="14.4" r="1.15"/>` },
  { id: 'kafka', label: 'kafka', art: `<rect x="5" y="9" width="14" height="6" rx="1.4"/><path d="M8.5 9v6M12 9v6M15.5 9v6"/><path d="M1.9 12H5"/><path d="M19 12h3.1"/><path d="M21 10.9 22.1 12 21 13.1"/>` },
  { id: 'terraform', label: 'terraform', art: `<path d="M5 8 10.2 11v5.4L5 13.4Z"/><path d="M11 4.6 16.2 7.6V13L11 10Z"/><path d="M11 11.6 16.2 14.6V20L11 17Z"/>` },
];

export const GROUPS: SkillGroup[] = [
  { name: 'Services and Api’s', art: `<path d="M9 8 5 12l4 4"/><path d="m15 8 4 4-4 4"/><path d="M13.4 6.4 10.6 17.6"/>`,
    items: ['FastAPI', 'REST', 'SQLalchemy', 'Pydantic', 'alembic', 'celery', 'SSE'] },
  { name: 'Data and Retrieval', art: `<circle cx="11" cy="11" r="6.4"/><path d="m15.6 15.6 4.6 4.6"/><circle cx="9.2" cy="9.4" r=".85" fill="currentColor" stroke="none"/><circle cx="12.6" cy="10.2" r=".85" fill="currentColor" stroke="none"/><circle cx="10.4" cy="13" r=".85" fill="currentColor" stroke="none"/>`,
    items: ['SQLite', 'ElasticSearch', 'OpenSearch', 'Qdrant', 'pgvector', 'Debezium'] },
  { name: 'Real-Time Media', art: `<rect x="3" y="7" width="12" height="10" rx="2"/><path d="m15 11 5.5-3.2v8.4L15 13Z"/>`,
    items: ['FFmpeg', 'Livekit', 'WebRTC', 'RTMP', 'RTSP'] },
  { name: 'Agents & Frameworks', art: `<circle cx="12" cy="12" r="3.2"/><path d="M12 4.3v3.4M12 16.3v3.4M4.3 12h3.4M16.3 12h3.4"/><path d="m6.8 6.8 2.1 2.1M15.1 15.1l2.1 2.1M17.2 6.8l-2.1 2.1M8.9 15.1l-2.1 2.1"/>`,
    items: ['MCP', 'Agno', 'LiteLLM', 'Presidio', 'PyTorch', 'llama.cpp'] },
  { name: 'Auth & Secrets', art: `<path d="M12 3.6 19 6.4v5.2c0 4.2-2.9 7.4-7 8.8-4.1-1.4-7-4.6-7-8.8V6.4Z"/><circle cx="12" cy="11" r="1.5"/><path d="M12 12.5v2.4"/>`,
    items: ['jwt', 'Oauth2', 'Amazon Cognito', 'AWS Kms'] },
  { name: 'Shipping IT', art: `<rect x="4" y="10" width="16" height="10" rx="2"/><path d="M12 16.5V4.5"/><path d="M9.4 7.1 12 4.5l2.6 2.6"/>`,
    items: ['ecs', 'Lambda', 'Github Actions', 'Helm', 'LocalStack'] },
  { name: 'Watching IT', art: `<rect x="3.5" y="5.5" width="17" height="13" rx="2"/><path d="m6.6 14.4 3-5 2.5 3.6 2-2.6 3.3 4.4"/>`,
    items: ['CloudWatch', 'langfuse', 'prometheus', 'Grafana', 'OpenTELemetry'] },
];

/** The ticker is the groups flattened, so the two can never drift apart. */
export const TICKER: string[] = GROUPS.flatMap((g) => g.items);
