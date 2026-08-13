"use client";

import { useEffect, useState } from "react";

export const MESH_READY_EVENT = "strong8k:mesh-ready";

/** Matches `.particles-mesh` opacity transition in globals.css */
export const MESH_FADE_MS = 350;
const MESH_FALLBACK_MS = 2000;

let meshSequenceComplete = false;

export function notifyMeshReady() {
  meshSequenceComplete = true;
  window.dispatchEvent(new Event(MESH_READY_EVENT));
}

/**
 * True after the network mesh has booted and faded in.
 * Falls back so hero titles never stay hidden if particles fail.
 */
export function useMeshReady() {
  const [ready, setReady] = useState(meshSequenceComplete);

  useEffect(() => {
    if (meshSequenceComplete) {
      setReady(true);
      return;
    }

    const onReady = () => setReady(true);
    window.addEventListener(MESH_READY_EVENT, onReady);
    const fallback = window.setTimeout(onReady, MESH_FALLBACK_MS);

    return () => {
      window.removeEventListener(MESH_READY_EVENT, onReady);
      window.clearTimeout(fallback);
    };
  }, []);

  return ready;
}
