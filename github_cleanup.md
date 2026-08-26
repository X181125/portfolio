# GitHub cleanup and repository README kit

This checklist is intentionally conservative. Start with a dry run, review the candidate list, then run the visibility update only after checking that no public repository is needed for a portfolio, collaboration, or application.

## 1. Find and privatize non-crucial repositories

Requirements:

- Install and authenticate GitHub CLI: `gh auth login`.
- Use an account token that can administer repository visibility.
- Edit `KEEP_REPOS` before running the write step.
- Forks can belong to a repository network and GitHub may reject a visibility change. Keep `ALLOW_FORKS=0` for the first pass; only enable it after checking each fork manually.

Save this as `scripts/private-nonessential-repos.sh` in a separate local folder, or run it from Git Bash/WSL:

```bash
#!/usr/bin/env bash
set -euo pipefail

OWNER="${OWNER:-X181125}"
DRY_RUN="${DRY_RUN:-1}"       # 1 = report only, 0 = call PATCH
ALLOW_FORKS="${ALLOW_FORKS:-0}"

# Keep portfolio, active collaboration, and flagship project repositories public.
KEEP_REPOS=(
  "portfolio"
  "AutoPentest-Agent"
  "graph-transformer-vulnerability-detection"
  "auction_web"
  "Internet_Cafe_Manager_App"
)

contains() {
  local needle="$1"
  shift
  local item
  for item in "$@"; do
    [[ "$item" == "$needle" ]] && return 0
  done
  return 1
}

echo "Reviewing repositories for ${OWNER}..."

gh api --paginate "/users/${OWNER}/repos?per_page=100&type=owner&sort=updated" \
  --jq '.[] | [.name, (.fork // false), (.archived // false), (.private // false), (.description // "")] | @tsv' |
while IFS=$'\t' read -r name is_fork is_archived is_private description; do
  if contains "$name" "${KEEP_REPOS[@]}"; then
    printf 'KEEP   %s\n' "$name"
    continue
  fi

  if [[ "$is_private" == "true" ]]; then
    printf 'SKIP   %s (already private)\n' "$name"
    continue
  fi

  if [[ "$is_archived" == "true" ]]; then
    printf 'SKIP   %s (archived; inspect manually)\n' "$name"
    continue
  fi

  if [[ "$is_fork" == "true" && "$ALLOW_FORKS" != "1" ]]; then
    printf 'REVIEW %s (fork; set ALLOW_FORKS=1 only after checking the fork network)\n' "$name"
    continue
  fi

  printf 'CANDIDATE %s — %s\n' "$name" "$description"

  # The write is opt-in. Re-run with DRY_RUN=0 after reviewing the output.
  if [[ "$DRY_RUN" == "0" ]]; then
    gh api --method PATCH \
      "/repos/${OWNER}/${name}" \
      -f private=true \
      --jq '"UPDATED: " + .full_name + " -> private=" + (.private | tostring)'
  fi
done

if [[ "$DRY_RUN" == "1" ]]; then
  echo
  echo "Dry run complete. If the candidates are correct, run:"
  echo "  DRY_RUN=0 bash scripts/private-nonessential-repos.sh"
fi
```

Useful review commands:

```bash
# Inspect one repository before changing it.
gh repo view X181125/REPOSITORY_NAME

# Confirm visibility after the write step.
gh api repos/X181125/REPOSITORY_NAME --jq '{name, private, fork, archived}'
```

## 2. README template: AutoPentest Agent

Replace every bracketed placeholder before pushing this content to the repository.

```md
# AutoPentest Agent

> A guarded, role-separated multi-agent workflow for repeatable security assessment experiments.

![Python](https://img.shields.io/badge/Python-3.11+-3776AB?logo=python&logoColor=white)
![LangGraph](https://img.shields.io/badge/orchestration-LangGraph-1f2937)
![Status](https://img.shields.io/badge/status-research%20prototype-b9f227)

## What it does

AutoPentest Agent is a CLI-first system that coordinates a Planner, Executor, and Reviewer through a controlled LangGraph state machine. It is designed for authorized, scoped security assessments and produces inspectable artifacts instead of an opaque final answer.

## System architecture

<!-- PLACEHOLDER: add a diagram at docs/architecture.png and update the path below. -->
![System Architecture Diagram](docs/architecture.png)

## Demo

<!-- PLACEHOLDER: add a short CLI GIF or PNG at docs/demo.gif or docs/demo.png. -->
![Demo CLI output](docs/demo.gif)

## Installation & local setup

### Poetry

```bash
poetry install
poetry run autopentest --help
```

### pip

```bash
python -m venv .venv
source .venv/bin/activate  # Windows: .venv\Scripts\activate
pip install -e .
autopentest --help
```

Copy `.env.example` to `.env` and provide an API key for the model provider used by the local experiment. Never commit credentials or real target data.

## Technical highlights

- **MCP integration:** [PLACEHOLDER: describe the MCP servers/tools, input schema, and permission boundary.]
- **Multi-agent state:** [PLACEHOLDER: explain the LangGraph state object, transitions, and which fields each role may read/write.]
- **Guardrails:** [PLACEHOLDER: document target-scope validation, allowlists, rate limits, and human approval points.]
- **Observability:** [PLACEHOLDER: list emitted artifacts, structured logs, run IDs, and replay/debug workflow.]

## Safety boundary

Use this project only against systems you own or are explicitly authorized to test. Keep target scope, credentials, and generated reports local and review every tool call before execution.

## Roadmap

- [ ] [PLACEHOLDER: next evaluation milestone]
- [ ] [PLACEHOLDER: next observability milestone]

## License

[PLACEHOLDER: add license and attribution details.]
```

## 3. README template: Graph Transformer for Vulnerability Detection

```md
# Graph Transformer for Vulnerability Detection

> A dual-view PyTorch pipeline for classifying C/C++ vulnerabilities from syntax and data-flow graphs.

![PyTorch](https://img.shields.io/badge/PyTorch-2.x-EE4C2C?logo=pytorch&logoColor=white)
![Research](https://img.shields.io/badge/type-deep%20learning%20research-67e8f9)

## Overview

This project builds AST and data-flow graph representations of C/C++ code, encodes both views, and combines them with a Graph Transformer classifier. The pipeline keeps preprocessing, training, evaluation, and TensorBoard artifacts reproducible.

## System architecture

<!-- PLACEHOLDER: add the end-to-end diagram at docs/architecture.png. -->
![System Architecture Diagram](docs/architecture.png)

## Demo

<!-- PLACEHOLDER: add a training/evaluation GIF or PNG at docs/demo.gif or docs/demo.png. -->
![Demo output](docs/demo.gif)

## Installation & local setup

### Poetry

```bash
poetry install
poetry run python -m src.train --help
```

### pip

```bash
python -m venv .venv
source .venv/bin/activate  # Windows: .venv\Scripts\activate
pip install -r requirements.txt
python -m src.train --help
```

## Technical highlights

- **Graph construction:** [PLACEHOLDER: describe AST/data-flow extraction, node features, edge types, and filtering.]
- **Dual-view model:** [PLACEHOLDER: explain how AST and data-flow encoders interact inside the Graph Transformer.]
- **Training protocol:** [PLACEHOLDER: document dataset split, seed, class balancing, and checkpoint selection.]
- **Evaluation:** [PLACEHOLDER: report precision, recall, F1, ROC-AUC, and per-class results with the evaluation commit/config.]
- **Reproducibility:** [PLACEHOLDER: list config path, environment, data version, and TensorBoard command.]

## Run TensorBoard

```bash
tensorboard --logdir runs
```

## Dataset and responsible use

[PLACEHOLDER: state the dataset license, provenance, de-identification status, and any restrictions on redistribution.]

## License

[PLACEHOLDER: add license and citation information.]
```

## 4. Push checklist

- [ ] Replace architecture and demo placeholders with real assets.
- [ ] Record the commit/config used for screenshots and metrics.
- [ ] Remove API keys, private URLs, local paths, and sensitive logs.
- [ ] Add a license and dataset provenance statement.
- [ ] Test the exact Poetry and pip setup commands from a clean environment.
- [ ] Pin the public repository links in the portfolio data source after the repos are ready.
