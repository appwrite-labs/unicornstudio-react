// @ts-expect-error - original.js is a converted JS file
import { initUnicornStudio } from "./original.js";
import { useEffect, useState, useRef } from "react";

export function useUnicornStudioScript() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const initRef = useRef(false);

  useEffect(() => {
    // Check if UnicornStudio is already initialized
    if (typeof window !== "undefined" && window.UnicornStudio) {
      setIsLoaded(true);
      return;
    }

    // Initialize only once
    if (initRef.current) {
      return;
    }

    initRef.current = true;

    try {
      // Call the initialization function
      initUnicornStudio();
      
      // Check if initialization was successful
      if (window.UnicornStudio) {
        setIsLoaded(true);
      } else {
        setError(new Error("Failed to initialize UnicornStudio"));
      }
    } catch (err) {
      setError(err instanceof Error ? err : new Error("Failed to initialize UnicornStudio"));
    }
  }, []);

  return { isLoaded, error };
}

// Re-export shared hooks
export { useUnicornScene } from "../shared/hooks";
export type { UseUnicornSceneParams } from "../shared/hooks";
