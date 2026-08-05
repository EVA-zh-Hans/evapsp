---
description: "Evangelion: Jo (PSP) - Chinese patch"
---

<GameInfo slug="eva-jo" />

## Introduction

*Evangelion: Jo* was released on PSP in 2009 as a film adaptation. This project is the translation and reverse-engineering effort for the PSP version (ULJS00201).

## Translation notes

- Python tooling processes text, images, `NEVA.PKG`, and the ISO
- A PSP plugin loads the custom PGF font
- The repository contains build code, fonts, and file-level ParaTranz JSON — no game images

<GameSerials slug="eva-jo" />

<GameReleases slug="eva-jo" />

## How to use

1. Download the `ULJS00201-zh.xdelta` patch
2. Apply it to the original Japanese ISO (ULJS00201) with [Xdelta patcher](https://kotcrab.github.io/xdelta-wasm/)
3. If PPSSPP menu text does not render, switch to software rendering in settings, or use a [daily build](https://www.ppsspp.org/devbuilds/) of PPSSPP

## Contribute

Development and reverse-engineering happen in [EVA-zh-Hans/eva_jo_re](https://github.com/EVA-zh-Hans/eva_jo_re).