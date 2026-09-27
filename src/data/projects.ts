export interface Project {
  id: string;
  /** Shown under the mark. */
  caption: string;
  href: string;
  /** Rendered as separate units so a name never splits across lines. */
  stack: string[];
  /** Inline SVG paths for the mark, drawn in one monoline notation. */
  mark: string;
  /** Read by assistive technology in place of the mark. */
  markAlt: string;
}

/** Order on the row is the order here. The row grows sideways, never wraps. */
export const PROJECTS: Project[] = [
  {
    id: 'delta',
    caption: 'Delta: A change intelligence platform',
    href: '/projects/delta',
    stack: [
      'Python', 'PostgreSQL + pgvector', 'Kafka', 'Debezium',
      'Redis', 'Kubernetes (k3s)', 'Terraform', 'React',
    ],
    markAlt: 'A triangle between two brackets',
    mark: `<path class="pj-mark" d="M30 13 C16 27 16 45 30 59"/>
           <path class="pj-mark" d="M60 22 L75 51 L45 51 Z"/>
           <path class="pj-mark" d="M90 13 C104 27 104 45 90 59"/>`,
  },
];
