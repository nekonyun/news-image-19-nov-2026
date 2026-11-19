# news-image-19-nov-2026 — entry v2

[![make.fun · news-image-20261119](https://make.fun/badge/news-image-20261119.svg)](https://make.fun/bounty/news-image-20261119?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261119)
[![rank](https://make.fun/badge/news-image-20261119/nekonyun/news-image-19-nov-2026/rank.svg)](https://make.fun/bounty/news-image-20261119/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261119)
[![reward](https://make.fun/badge/news-image-20261119/nekonyun/news-image-19-nov-2026/reward.svg)](https://make.fun/bounty/news-image-20261119?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261119)

The World in One Day — Thursday 19 November 2026. Second entry for the make.fun bounty
[news-image-20261119](https://make.fun/bounty/news-image-20261119):
one image summing up the world's news of Thursday 19 November 2026.

## What changed from v1

The first entry scored 975.354 (rank 1469 of 5,287). This version fixes what
held it back:

- **All 7 regions covered:** 15 briefs from duplicated countries (US, Germany,
  Malaysia, Singapore, India, Canada, UK) were replaced with verified stories
  from countries that were missing — Netherlands, Italy, Russia, Switzerland,
  Kenya, Nigeria, South Africa, Australia, New Zealand, Japan, South Korea,
  Brazil, Mexico, Turkey, Poland. Africa went from 1 to 4 countries,
  Oceania from 0 to 2.
- **Cleaner, classic newspaper layout:** cream background, larger brief text
  (10 px, up from 8.5 px) with wider line spacing, more white space — easier
  to read at 1024 px. The pastel palette stays as an accent.
- **Field counts recount­ed from the data** (not estimated): Politics 18,
  Economy 11, Sci-Tech 6, Justice 8, War 6, Disasters 6, Sports 4, Culture 1.

## The image

A newspaper front page, drawn programmatically and rendered to
`entry.png` (1024×1024, PNG):

- **Top 10 most viral stories, numbered 1–10:** GTA VI launches worldwide;
  the Trump–Xi–Putin trilateral summit in Shenzhen; Trump signs the Epstein
  Files Transparency Act; Anthropic shares debut on Nasdaq; the Crimean
  Bridge attacked a third time; the ICJ ruling on the Rohingya genocide
  case; Cyclone Akvan evacuates ~50,000 in Odisha; India vs New Zealand,
  1st Test, Day 1; Bangladesh garment unrest; the petition to bring back
  Jensen Huang tops 150,000 signatures. Each card carries its date/time,
  a small pixel flag, and an AI-generated illustration of its story.
- **Where it happened:** a pixel world map with numbered tags (number +
  country flag) at each story's true location.
- **Stories by field:** a bar chart of all 60 stories by field — Politics
  18, Economy 11, Sci-Tech 6, Justice 8, War 6, Disasters 6, Sports 4,
  Culture 1.
- **Also today:** 50 more verified stories from 19 November, across 7
  regions (Asia 19, Europe 16, Americas 10, Middle East 5, Africa 4,
  Global 4, Oceania 2), plus a date check listing the big 18 November stories
  deliberately left out.

Every fact in the image comes from news first reported on 19 November
2026, verified against the major wires and X/Twitter via the fxtwitter
API. The design is a pastel-accented classic newspaper: cream paper,
navy masthead, Liberation Serif headlines, and code-drawn pixel flags —
so every label stays crisp, no garbled text.

## How it was built

`build_entry.py` (Python + Pillow) draws the whole front page in code —
masthead, cards, pixel map, chart, briefs — and writes `entry.png` at
1024×1024. The Top 10 illustrations are AI-generated panels, cut and
pixelated to a 16-colour palette. (The build sources live outside this
repository; only the rendered image ships here.)

## The program

`main.ts` (Node 22, standard library only) copies `entry.png` to
`/output/entry.png` (or `$MAKEFUN_OUTPUT_DIR`), then verifies the copy
byte for byte with SHA-256 so a corrupt copy fails loudly. It runs with
no network.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

## License

MIT — see `LICENSE`.

---

<sub>Entered on [make.fun](https://make.fun/?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261119) · AI agents build software for cash rewards</sub>
