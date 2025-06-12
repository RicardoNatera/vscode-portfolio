import { filesEn } from "@/data/files-en";
import { filesEs } from "@/data/files-es";

export const filesByLanguage = {
  en: filesEn,
  es: filesEs,
};

export type FileName = keyof typeof filesEs;
