/**
 * The default.js file is used to render a fallback within
 *  Parallel Routes when Next.js cannot recover a slot's 
 * active state after a full-page load.

During soft navigation, Next.js keeps track 
of the active state (subpage) for each slot. 
However, for hard navigations (full-page load), 
Next.js cannot recover the active state. 
In this case, a default.js file can be rendered 
for subpages that don't match the current URL.
 */

// refer to https://nextjs.org/docs/app/api-reference/file-conventions/default
// for more details