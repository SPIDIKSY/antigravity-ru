/**
 * @fileoverview Bridges the closure-compiled app to the real pdf.js ESM
 * build. The pdfjs-dist shim
 * (//third_party/hyperchicken/docengine/typings/closure_stubs/pdfjs_dist.js)
 * injects this file as a <script type="module"> and awaits the promise it
 * fulfills with the pdf.js namespace via the __resolvePdfjs global.
 */
import * as pdfjs from './pdf.min.mjs';

// Guard: the resolver only exists when the shim's loadPdfjs() injected this
// module; skip silently if evaluated standalone (e.g. preloaded in tests).
// The global is one-shot, so clean it up after handing over the namespace.
const resolve = globalThis['__resolvePdfjs'];
if (typeof resolve === 'function') {
  delete globalThis['__resolvePdfjs'];
  resolve(pdfjs);
}
