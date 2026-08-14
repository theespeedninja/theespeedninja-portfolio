// Shared scroll-in animation settings, used across all sections.
//
// - `once: false` makes the animation replay every time the element
//   re-enters the viewport (scrolling back up triggers it again too).
// - `amount: 0.3` waits until 30% of the element is visible before firing,
//   so it doesn't trigger the instant a section barely peeks into view.
export const scrollViewport = { once: false, amount: 0.3 } as const;

// Base duration/easing for entrance animations. framer-motion's default
// duration is 0.3s when none is given, which reads as abrupt — this slows
// things down to a smoother, more deliberate pace.
export const fadeTransition = { duration: 1, ease: "easeOut" } as const;