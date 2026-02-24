export const API_BASE = "https://roundup-briefs-germany.onrender.com";

export interface Article {
  id: number;
  title: string;
  link: string;
  summary: string;
  source: string;
  country: string;
  category: string;
  tags: string;
  topics: string;
  scraped_at: string;
  published_at?: string;
}

export interface Stats {
  total: number;
  lgbtqia_plus: number;
  women: number;
  last_scraped: string;
}

export const TOPICS = [
  { label: "Alle Themen", emoji: "✨" },
  { label: "Frauen & Feminismus", emoji: "♀️" },
  { label: "LGBTQIA+", emoji: "🏳️‍🌈" },
] as const;

export const TIME_RANGES = [
  { label: "Heute", value: "today" },
] as const;

export const TOPIC_COLORS: Record<string, { bg: string; text: string; border: string }> = {
  "Frauen & Feminismus": { bg: "#FFE5EF", text: "#C8003C", border: "#F0ADC8" },
  "LGBTQIA+":            { bg: "#EDE7F6", text: "#4A1FA8", border: "#B39DDB" },
};

export const LGBTQIA_SOURCES = new Set(["queer.de", "L-MAG"]);
export const FEMINIST_SOURCES = new Set(["EMMA", "Missy Magazine"]);

export function getSourceBorderColor(source: string): string {
  if (LGBTQIA_SOURCES.has(source)) return "#4A1FA8";
  if (FEMINIST_SOURCES.has(source)) return "#D4006A";
  return "#C8C4BA";
}
