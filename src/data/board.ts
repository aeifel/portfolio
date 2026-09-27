export type Status = 'live' | 'warm' | 'draft' | 'always';

export interface BoardComponent {
  id: string;
  title: string;
  /** One line, shown on the collapsed card. */
  head: string;
  status: Status;
  /** Optional amber pill under the head line. */
  stat?: string;
  /** Body paragraphs; may contain inline <b>, <em>, <code>. */
  body: string[];
}

export const STATUS_LABEL: Record<Status, string> = {
  live: 'RUNNING',
  warm: 'WARM · LOCAL',
  draft: 'NOT SHIPPED',
  always: 'ALWAYS ON',
};

/** Order on the board is the order here. Designators (U1, U2…) are derived. */
export const COMPONENTS: BoardComponent[] = [
  {
    id: 'video',
    title: 'video/',
    head: 'Continuously watching video feeds, and delivering the analytics in real time.',
    status: 'live',
    body: [
      'Similar to text data, visual data like video holds the potential to produce a lot of analytical data in the modern world. But going through all of it, continuously watching it, and delivering analytics in real time is a monumental effort. So there was a big opportunity in video analytics: by leveraging ever-advancing visual models, technology that can process them at blazingly fast scale, and the right infrastructure to continuously watch these feeds, we could build a solution that delivers real-time alerts for everything from traffic to public safety and a lot more.',
      'I worked on developing such a video intelligence platform, right from the data models to the real-time infrastructure that continuously ingests feeds from different sources, takes them through a processing pipeline, runs them through visual models, and delivers the analytics back to the user.',
      'It demanded understanding how video streaming and communication actually happen in the real world through WebRTC, RTMP, RTSP, etc., and picking the right frameworks like LiveKit to act as the heart of ingestion and bring the layer to life.',
      'In the platform, the scale is handled through queues and async processing to make sure that no frames that could potentially lead to an alert or incident are lost. And solving this was the interesting part.',
    ],
  },
  {
    id: 'tools',
    title: 'tools/',
    head: 'Moving from just using LLMs to putting them into action.',
    status: 'live',
    body: [
      'The world was moving from just using LLMs to putting them into action, and the things that made this possible were tools and the harness around them. So when we set out to build an agentic platform, the first component we set up was the tooling flow, without which it cannot be truly agentic. Once the tools were written, we needed a harness to bring the LLM calls, the tools, and the agent orchestration together and connect the dots, and for that purpose, we used the Agno framework.',
      'So far, we had provided the agent platform with what it needed to complete the basic tasks. But when a user wants to perform more complex tasks, they would want to attach their own tools for the agents to access and utilize. To achieve this, I took advantage of FastMCP to host the user-provided tool code, and to manage the scale, I introduced FastAPI entrypoints through which dynamic tool instances are spawned to respond to MCP queries.',
      'With this, the platform was no longer limited to just talking with LLMs — it could now make them reason, act, and use the right tools to see a task through end-to-end.',
    ],
  },
  {
    id: 'governance',
    title: 'governance/',
    head: 'Keeping personal data out of the models.',
    status: 'live',
    body: [
      `When we use LLMs, we end up sharing data with them as a natural byproduct of how we interact with them. This could be anything from medical symptoms and personal history to important personal and professional documents shared for better understanding. Even if the AI labs don't use this data for training, the fact that our personal details now exist in one more place on the internet introduces additional security risks and concerns about accidental exposure.`,
      `For organizations, accidentally sharing sensitive data with third parties can also lead to violations of GDPR and other data protection regulations. So managing and securing data without compromising LLM performance is a crucial part of modern AI systems.`,
      `That is why I built a data protection layer that de-identifies PII before it reaches LLMs. It also provides the supporting infrastructure through tooling mechanisms, allowing LLMs to use function calling whenever an action needs to be performed on the data, without actually exposing the underlying data to the LLM.`,
      `The PII is replaced with canonical-context placeholders and unique identifier tokens, giving LLMs enough context to work with the data while making it easy for the platform to restore the original information before displaying the response to the user. The mapping between the original data and the PII tokens is stored securely, with restricted access, to prevent accidental exposure. This also helps in user data management and makes it easier to purge customer data when requested.`,
      `With this, we can leverage modern AI while keeping security in place, getting the best of both worlds.`,
    ],
  },
  {
    id: 'inference',
    title: 'inference/',
    head: 'Running open-weight models in production.',
    status: 'live',
    body: [
      `As AI became a more integral part of our lives, it went from basic chats to coding assistants, AI agents, and automating day-to-day tasks. Alongside the proprietary, closed-source models built by frontier labs, open-weight models also started becoming increasingly popular. Although these models performed well, running them ourselves was a different problem. Larger models can require dedicated infrastructure with multiple high-end GPUs, and the cost of keeping that infrastructure running can quickly add up.`,
      `So, I built an inference platform that enables users to host and use open-weight models. The platform is designed to plan and make better use of the underlying resources to achieve cost efficiency. But the solution doesn't just stop at hosting the models — to deliver quick results, I leveraged prefix caching, and to avoid interruptions as the load increases, I architected an auto-scaling setup.`,
      `But once we have multiple replicas of a model running, how do we decide where each request should go? Typical load balancing that works for web applications doesn't necessarily work for AI workloads. We need more intelligent load balancing — one that is cache-aware, load-aware, and length-aware. Once we know which model we want, the job is to route the request to the right replica. But when we have to decide which model should handle the task in the first place, that's where intelligent model routing comes in. As AI infrastructure becomes a bigger part of the budget, making better-informed decisions about which model to use becomes increasingly important.`,
      `And the landscape keeps changing, with a lot more to come.`,
    ],
  },
  {
    id: 'under-the-hood',
    title: 'under-the-hood/',
    head: "I don't like stopping at the surface.",
    status: 'always',
    body: [
      `Whenever I come across something new, either at work or outside of work, I tend to jump right into it if it interests me. I don't like stopping at the surface — I go all the way, until I understand it well enough to work with it confidently. I won't blindly accept a concept unless I understand it, very similar to one saying that I won't drive a car without knowing how the engine works.`,
      `And when something really piques my curiosity, I like experimenting with different ways of approaching it rather than just following how it is generally done. Not all of it might be needed to do the job, but it changes how I do the job.`,
    ],
  },
];
