export type Channels = Partial<Record<"Instagram" | "Medium" | "LinkedIn", string>>
export const socialProfiles: Channels = {}

export interface Report {
  slug: string
  title: string
  subtitle: string
  summary: string
  category: string
  lead?: string
  body: { heading: string; paragraphs: string[] }[]
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

export const reports: Report[] = [workReport, featuredReport]
export const reportPath = (report: Report) => "/reports/" + report.slug
export function publishedReports(collection = reports) {
  return collection.filter(report => report.status === "published").sort((a, b) =>
    (b.publishedAt ?? "").localeCompare(a.publishedAt ?? ""))
}
export const siteOrigin = new URL(process.env.FWD_PUBLIC_SITE_URL || process.env.APP_BASE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL ? "https://" + process.env.VERCEL_PROJECT_PRODUCTION_URL : "http://localhost:3000"))
