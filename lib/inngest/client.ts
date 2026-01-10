import {Inngest} from "inngest";

if (!process.env.INNGEST_EVENT_KEY) {
  throw new Error("INNGEST_EVENT_KEY is missing");
}
export const inngest = new Inngest({
    id: 'signalX',
    ai: {gemini:{apiKey: process.env.GEMINI_API_KEY!}},
    eventKey: process.env.INNGEST_EVENT_KEY
})