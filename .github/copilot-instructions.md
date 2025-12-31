<!-- Auto-generated guidance for AI coding agents in this repo -->
# Copilot / AI agent instructions for tan_nodejs_1231

Purpose: short, actionable directions so an AI agent can be productive immediately.

- **Big picture:** This is a minimal Node.js demo project. It contains two trivial JS files: `app.js` (startup entry logged by `npm start`) and `hello.js` (small demo outputs). There is no web server or database present; changes should preserve the simple CommonJS runtime.

- **Entry points & runtime:** `package.json` sets `"type": "commonjs"` and `"main": "hello.js"`. The runtime entry used by scripts is `app.js`.
  - Start with: `npm start` -> runs `node app.js` ([app.js](app.js#L1)).
  - Development: `npm run dev` -> `nodemon app.js` (note: `nodemon` is referenced in scripts but not declared in `package.json`). See [package.json](package.json#L1).

- **Files to inspect first:**
  - [app.js](app.js#L1) — current application startup stub (logs).
  - [hello.js](hello.js#L1) — demo outputs; `main` in package.json points here.
  - [package.json](package.json#L1) — scripts and runtime type are here.

- **Project-specific conventions discovered:**
  - The project uses CommonJS by default (`"type": "commonjs"`). Prefer `require()` / `module.exports` over ES module `import` unless you also update `package.json`.
  - No dependencies or tests are declared. The `test` script is a placeholder and will always fail if run unchanged.
  - `nodemon` is used in the `dev` script but not in `dependencies` — installing it locally (`npm i -D nodemon`) or using a global installation is expected before using `npm run dev`.

- **Practical editing guidance for AI agents:**
  - For changes to runtime behavior, modify `app.js` (the start script target). Keep `hello.js` for demo output unless the task requires moving `main`.
  - When adding new packages, update `package.json` and run `npm install`. Prefer adding dev tools to `devDependencies`.
  - Avoid converting files to ES modules unless you also change `package.json` `type` and ensure compatibility.

- **Useful commands (run from repo root):**
```bash
# install dependencies (none currently declared)
npm install

# run the app
npm start

# run in dev mode (ensure nodemon is installed)
npm run dev
```

- **What not to assume:**
  - There is no test framework configured; do not add tests that require specific runners unless you also add them to `package.json`.
  - There is no CI config or contribution rules in the repo; avoid changing repo-wide config without asking.

- **When modifying this repo:**
  - Keep changes minimal and explicitly update `package.json` when adding scripts or dependencies.
  - If creating an HTTP server or more complex service, place startup code in `app.js` and export modules from other files using CommonJS.

If any section is unclear or you'd like more detail (example PR changes, tests, or a README), tell me what to expand.
