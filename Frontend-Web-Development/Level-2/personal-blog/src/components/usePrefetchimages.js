// usePrefetchImages.js
import { useEffect } from "react";

/**
 * Preload images in the background. Non-blocking.
 * Pass an array of src strings. Optionally limit how many to preload.
 */
export default function usePrefetchImages(urls = [], { limit = 20 } = {}) {
  useEffect(() => {
    if (!urls || urls.length === 0) return;
    const list = urls.slice(0, limit); // don't preload unlimited images
    const imgs = [];
    for (const src of list) {
      const img = new Image();
      img.src = src;
      // optional: set decoding/hints
      img.decoding = "async";
      imgs.push(img);
    }
    // cleanup not strictly needed for Image objects, but good habit
    return () => {
      imgs.forEach((img) => {
        // dereference
        try { img.src = ""; } catch {}
      });
    };
  }, [urls, limit]);
}
