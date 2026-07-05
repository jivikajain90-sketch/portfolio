---
name: Screenshot tall-viewport stitching artifact
description: Headless app_preview screenshots at very tall viewport heights (~2000px+) can produce visual paint/stitching/duplication artifacts (e.g. content appearing twice) that are not real rendering bugs.
---

When using the `screenshot` tool with `type: app_preview` and a large `viewport_size` height (roughly 2000-3000px+), the captured image can show duplicated or misaligned sections that don't reflect the actual DOM/CSS.

**Why:** This is a capture/stitching limitation of the headless screenshot mechanism at extreme viewport heights, not an application bug.

**How to apply:** When verifying a long page, take screenshots at a normal viewport height (~900-1450px) for each section instead of one giant tall screenshot. If a tall screenshot shows obviously duplicated/broken content, don't chase it as a bug — re-verify with a shorter viewport and trust code correctness (esp. if typecheck passes and the change was a simple, well-understood CSS/JSX edit).
