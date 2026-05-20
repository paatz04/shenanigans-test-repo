# Copilot Instructions

## Project focus

This repository is a single Next.js web app for calculating stock returns.

Current scope:

- `app/` contains the App Router UI.
- The project starts with a basic scaffold and will expand over time with return calculators, richer inputs, and charts.

Optimize for a simple local-first workflow:

- keep the app easy to run with `npm install` and `npm run dev`
- prefer straightforward Next.js and TypeScript solutions over extra tooling
- preserve clear boundaries between UI, calculation logic, and any future charting or data-fetching layers
- avoid introducing backend services, external providers, or complex architecture unless the task clearly requires them

## Working style

- Enter plan mode by default for non-trivial work: 3+ meaningful steps, architectural choices, or tasks that need explicit verification.
- Start non-trivial tasks with a short plan that includes verification.
- If new evidence invalidates the plan, stop and re-plan before continuing.
- Prefer small, reviewable diffs over broad rewrites.
- Fix root causes instead of layering brittle patches.
- Keep changes cohesive and directly related to the task.
- Do not make unrelated refactors.
- If an approach becomes too complex, redesign around a simpler boundary.

## Project structure guidance

- Keep reusable stock-return math and financial calculations in small typed utilities rather than embedding them deeply in page components.
- Keep UI components focused on presentation and interaction.
- Prefer pure functions for calculations so future tests and chart inputs stay deterministic.
- Add abstractions only when they remove real duplication or clarify ownership.
- Preserve existing style and public APIs unless the task requires a change.

## Code quality

- Prefer simple, readable, strongly typed TypeScript.
- Use idiomatic Next.js App Router patterns.
- Default to server components unless client-side state or browser APIs are actually needed.
- Keep forms, inputs, and result rendering accessible and easy to extend.
- Avoid passing loosely shaped objects when an explicit type would clarify behavior.
- Keep business logic testable outside the UI whenever practical.

## Solution quality

- Prefer the simplest solution that fully solves the problem.
- Build only the structure the current task needs; do not over-engineer for hypothetical future features.
- When adding future analytics or charting, extend from clear seams instead of rewriting the app shell.
- If a fix feels hacky, redesign it with the full problem in view rather than stacking exceptions.

## Testing and verification

- Never mark work complete without proving it works.
- Before marking work complete, run the most relevant verification available.
- Prefer focused validation for the changed behavior before broad checks.
- For app-wide changes, use `npm run build` as the default verification baseline.
- Keep calculation logic deterministic where possible.
- If tests or checks cannot be run, state exactly why.
- Update `README.md` when setup steps, commands, or user-visible behavior change.

## Documentation and task tracking

- Keep durable setup and usage guidance in `README.md`.
- Do not create extra planning or task-tracking files unless the work becomes large enough that the user asks for them or they clearly improve execution.
- When documenting future work, keep notes concise and directly useful for the next implementation step.

## Subagent strategy

- Use subagents for read-only exploration or focused research when the codebase grows enough to benefit from context isolation.
- Prefer one focused question per subagent.
- Avoid using subagents for straightforward single-file changes.

## Reviewer expectations

- Assume changes should satisfy a senior-level review for correctness, readability, and maintainability.
- Be explicit about trade-offs and limitations.
- Do not add process commentary, generated-by notes, or AI-assistance traces to project files.
- Do not change `.gitignore` rules without explicit approval.