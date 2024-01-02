import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function timeAgo(dateString: string): string {
  const currentDate: Date = new Date();
  const postDate: Date = new Date(dateString);

  const timeDifferenceInSeconds: number = Math.floor(
    (currentDate.getTime() - postDate.getTime()) / 1000
  );

  const seconds: number = timeDifferenceInSeconds % 60;
  const minutes: number = Math.floor(timeDifferenceInSeconds / 60) % 60;
  const hours: number = Math.floor(timeDifferenceInSeconds / 3600) % 24;
  const days: number = Math.floor(timeDifferenceInSeconds / (3600 * 24));

  if (days > 1) {
    return `${days} days ago`;
  } else if (days === 1) {
    return "1 day ago";
  } else if (hours > 1) {
    return `${hours} hours ago`;
  } else if (hours === 1) {
    return "1 hour ago";
  } else if (minutes > 1) {
    return `${minutes} minutes ago`;
  } else if (minutes === 1) {
    return "1 minute ago";
  } else if (seconds > 1) {
    return `${seconds} seconds ago`;
  } else {
    return "just now";
  }
}
