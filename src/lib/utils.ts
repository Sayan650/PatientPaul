import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Returns the absolute URL for an API endpoint
 * @param path - The relative path for the API endpoint (e.g., '/api/patients')
 * @returns The absolute URL
 */
export function getAbsoluteUrl(path: string): string {
  // Check if we're in a browser environment
  const isServer = typeof window === 'undefined';
  
  // Base URL from environment or default to localhost in development
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 
    (isServer ? process.env.VERCEL_URL : window.location.origin);
  
  // Default to localhost:3000 if we can't determine the base URL
  const host = baseUrl || 'http://localhost:3000';
  
  // Ensure base URL has protocol (especially for Vercel URLs)
  const baseUrlWithProtocol = host.startsWith('http') ? host : `https://${host}`;
  
  // Ensure path starts with a slash
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  
  return `${baseUrlWithProtocol}${normalizedPath}`;
}