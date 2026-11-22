export type Channels = Partial<Record<"Instagram" | "Medium" | "LinkedIn", string>>
export const socialProfiles: Channels = {}

export interface ReportFigureData {
  src: string
  alt: string
  width: number
  height: number
  caption?: string
  credit?: string
}

export interface Report {
  slug: string
  title: string
  subtitle: string
  summary: string
  category: string
  lead?: string
  body: { heading: string; paragraphs: (string | ReportFigureData)[] }[]
  sources: { title: string; url: string }[]
  status: "preview" | "published"
  publishedAt?: string
  shareTitle?: string
  shareDescription?: string
  shareImageAlt?: string
  shareImage: string
  illustration?: { desktop: string; mobile: string }
  imageAlt: string
  channels: Channels
}

const summary = "The Fed warns that autonomous transfers could compress a run into minutes. Singapore’s planned sandbox offers a way to test controls on delegated payments."
export const featuredReport: Report = {
  slug: "ai-agents-bank-run",
  title: "When AI Agents Can Move Money, What Slows a Bank Run?",
  subtitle: summary,
  summary,
  category: "AI & Finance",
  lead: "A customer can authorize a transfer long before a bank comes under pressure. The question for a bank is what happens when thousands of those instructions become actionable at once.",
  body: [
    {
      "heading": "The Fed’s warning",
      "paragraphs": [
        "On November 16, Federal Reserve Governor Michael Barr described a risk for deposit-taking banks. Software monitoring rates or signs of distress could act on a customer’s standing instructions as soon as conditions change. If many agents react to the same signal, deposits could leave within minutes. Barr presented that speed as a possible outcome. His speech did not document an agent-driven run. [1]",
        {
          "src": "/fwd-public/editorial/bank-run-desktop.png",
          "alt": "Silver and blue payment routes converge on a black circuit grid.",
          "width": 641,
          "height": 328,
          "caption": "Conceptual illustration of payment instructions converging. If many agents act at once, banks could have less time to verify permissions before funds move.",
          "credit": "Illustration by FWD"
        },
        "Consider two customers with identical balances. One has to see the news, open an app, and decide where to move the money. The other made that decision last month when setting a rule. For the second account, a bank’s window to intervene depends on the time between the rule firing and the payment becoming final."
      ]
    },
    {
      "heading": "Singapore’s test",
      "paragraphs": [
        "On November 19, the Monetary Authority of Singapore described a planned Agentic Money Sandbox for corporate treasury and payment services. One use case would let customer agents instruct payments using instruments such as tokenised deposits. That gives participating institutions a setting in which to examine who authorized a payment and what limits applied when the instruction arrived. [2]",
        "An individual payment can satisfy its mandate even as many individually valid instructions create a liquidity problem. For a treasury team, those are two separate questions. Did this agent act within its customer’s authority? How much money would leave if every similar mandate fired in the same minute?"
      ]
    },
    {
      "heading": "What would count as evidence?",
      "paragraphs": [
        "FWD would look for a test that records four times for each queued payment: authorization, revocation, the bank’s receipt of that revocation, and settlement. A customer pressing Cancel tells us little about the control unless we can see which instruction reached the bank first.",
        "Then run the same workload with and without a transfer limit. Count the total value released before review, legitimate payments delayed, and cancellations honored before settlement. Publish the distribution of delays alongside the largest outflow. That would let a reader judge the cost of buying the bank another minute. The proposed measurements are FWD’s questions for a test. Results from the sandbox remain to be seen."
      ]
    }
  ],
  sources: [
    {
      "title": "Michael S. Barr, Federal Reserve Board, November 16, 2026",
      "url": "https://www.federalreserve.gov/newsevents/speech/barr20261116a.htm"
    },
    {
      "title": "Chia Der Jiun, Monetary Authority of Singapore, November 19, 2026",
      "url": "https://www.mas.gov.sg/news/speeches/2026/keynote-address-by-md-at-the-singapore-fintech-festival-2026"
    }
  ],
  status: "published",
  publishedAt: "2026-11-22",
  shareImage: "/editorial/ai-agents-bank-run-card.png",
  shareImageAlt: "FWD report cover with the bank-run headline and converging payment routes.",
  illustration: { desktop: "/fwd-public/editorial/bank-run-desktop.png", mobile: "/fwd-public/editorial/bank-run-mobile.png" },
  imageAlt: "Silver payment routes and blue highlighted paths converge at a single node on a black circuit grid.",
  channels: {},
}
const workReport: Report = {
  "slug": "ai-support-resolution",
  "title": "Which support agents gain the most from an AI assistant?",
  "subtitle": "A customer-support study measured a 15% average gain in issues resolved per hour. The gains varied substantially across workers.",
  "summary": "A customer-support study measured a 15% average gain in issues resolved per hour. The gains varied substantially across workers.",
  "category": "Work",
  "lead": "A support director deciding who gets the next seat license has a better question than how quickly an assistant writes. How many customer problems does an agent actually close in an hour, and whose performance changes?",
  "body": [
    {
      "heading": "Count the resolution",
      "paragraphs": [
        "Erik Brynjolfsson, Danielle Li, and Lindsey Raymond studied the rollout of an AI assistant to customer support workers. In their published analysis, agents with access resolved about 15% more issues per hour on average. Researchers traced the increase to shorter chats, more chats handled per hour, and a small improvement in the share resolved. [1]",
        "Those measures lead to different buying decisions. A system that only shortens conversations could leave another shift to finish the work. Counting resolutions brings the unit of measurement closer to what the customer came for."
      ]
    },
    {
      "heading": "Look beyond the average",
      "paragraphs": [
        "The gains varied by worker, with less experienced and lower-performing agents benefiting most. One interpretation is that a suggestion can put a useful response within reach of a newcomer who has yet to encounter that problem. The same suggestion can offer little to a colleague who already knows the answer. [1]",
        "For a buyer, the implication is to test where the team actually needs help. A pilot staffed exclusively by senior volunteers could miss a benefit to new hires. A trial restricted to onboarding could overstate the return on assigning a license to everyone."
      ]
    },
    {
      "heading": "Before buying the next seat",
      "paragraphs": [
        "Choose comparable queues and record tenure, case type, resolved cases per staffed hour, and repeat contacts over a stated follow-up period. Include the supervisor time spent correcting replies. A change in those numbers helps distinguish a faster first answer from a customer problem that stays solved.",
        "The study measured performance in a particular workplace. A team making a staffing decision still needs its own demand forecast, quality checks, and evidence about which cases the assistant can handle."
      ]
    }
  ],
  "sources": [
    {
      "title": "Brynjolfsson, Li, and Raymond, “Generative AI at Work,” Quarterly Journal of Economics, May 2025",
      "url": "https://doi.org/10.1093/qje/qjae044"
    }
  ],
  "status": "published",
  "publishedAt": "2026-11-22",
  "shareImage": "/editorial/fold-email.png",
  "shareImageAlt": "FWD Fold wordmark",
  "imageAlt": "FWD Fold wordmark",
  "channels": {}
}

const productReport: Report = {
  "slug": "ai-suggestion-retention",
  "title": "What happens after a user accepts an AI suggestion?",
  "subtitle": "Follow accepted AI suggestions through revision and review to see what reaches the customer.",
  "summary": "An acceptance click tells a product team that a suggestion entered the workflow. Watching what reaches the customer shows whether it saved work, created work, or left an error behind.",
  "category": "Product",
  "lead": "An acceptance click tells a product team that a suggestion entered the workflow. Watching what reaches the customer shows whether it saved work, created work, or left an error behind.",
  "body": [
    {
      "heading": "The click and the finished draft",
      "paragraphs": [
        "Imagine a support agent accepts a suggested reply because the greeting and explanation are useful. Before sending, she corrects a delivery date the assistant inferred from an old order. The dashboard records an acceptance. The customer receives a corrected reply. The edit carries information that would disappear from an acceptance-only dashboard.",
        "Researchers built an editor that could capture that distinction. In CoAuthor, writers requested GPT-3 suggestions, chose whether to insert them, and could then revise the text. The project recorded these editing events across 1,445 creative and argumentative writing sessions with 63 writers. Its logs let researchers trace a suggestion beyond the insertion event. These were writing exercises. A support team would need to measure what happens in its own queue. [1]"
      ]
    },
    {
      "heading": "The denominator changes after acceptance",
      "paragraphs": [
        "In a separate essay experiment using the CoAuthor platform, participants accepted about 70% of their queries. Model-origin characters made up roughly 35% of the finished essays. The participants were asked to query the model at least five times. The two percentages count different things: one describes choices at the point of suggestion, while the other describes the composition of the final document. Neither figure tells a team what share of accepted suggestions survived intact. [2]",
        "Some edits matter far more than their length. Changing a delivery date could be the most important correction in a 200-word reply. A heavily rewritten suggestion might still have supplied the outline that helped the agent finish. An unchanged suggestion can still be wrong. Character retention describes what survived. Reviewing the final outcome tells the team whether that material belonged there."
      ]
    },
    {
      "heading": "What to measure before expanding the feature",
      "paragraphs": [
        "Pick an endpoint the user cares about. In support, that might be a sent reply and a case that stays resolved through an agreed follow-up window. Start with a consented evaluation sample and record which suggestions appeared, which were accepted, what changed before sending, and whether the case reopened. Keep abandoned drafts visible in the sample. Restrict access to raw messages and use the minimum text needed for review.",
        "Have reviewers distinguish wording changes from factual corrections, policy corrections, and removed commitments. Then compare similar tasks with and without the feature. Track review time, final-answer quality, and repeat contacts alongside acceptance. If acceptance rises while review time also rises, inspect the edits before expanding the rollout. The decision is whether the team spends less time getting to a reliable answer."
      ]
    }
  ],
  "sources": [
    {
      "title": "Mina Lee, Percy Liang, and Qian Yang, CoAuthor, CHI 2022",
      "url": "https://www-cs.stanford.edu/~minalee/pdf/chi2022-coauthor.pdf"
    },
    {
      "title": "Vishakh Padmakumar and He He, Does Writing with Language Models Reduce Content Diversity?, ICLR 2024, section 3",
      "url": "https://proceedings.iclr.cc/paper_files/paper/2024/file/02dec8877fb7c6aa9a79f81661baca7c-Paper-Conference.pdf"
    }
  ],
  "status": "published",
  "publishedAt": "2026-11-23",
  "shareImage": "/editorial/fold-email.png",
  "shareImageAlt": "FWD Fold wordmark",
  "imageAlt": "FWD Fold wordmark",
  "channels": {}
}

export const reports: Report[] = [productReport, workReport, featuredReport]
export const reportPath = (report: Report) => "/reports/" + report.slug
export function publishedReports(collection = reports) {
  return collection.filter(report => report.status === "published").sort((a, b) =>
    (b.publishedAt ?? "").localeCompare(a.publishedAt ?? ""))
}
export const siteOrigin = new URL(process.env.FWD_PUBLIC_SITE_URL || process.env.APP_BASE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL ? "https://" + process.env.VERCEL_PROJECT_PRODUCTION_URL : "http://localhost:3000"))
