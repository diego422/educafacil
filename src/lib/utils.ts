import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function classNames(...classes: (string | boolean | undefined | null)[]): string {
  return classes.filter(Boolean).join(" ")
}
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
