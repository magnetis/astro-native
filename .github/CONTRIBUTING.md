# Contributing Guide

# Table of Contents

- [Branch Naming](#branch-naming)
- [Commit Messages](#commit-messages)
- [Merging Branches](#merging-branches)
- [Níveis de Requisito das Palavras-chave](#níveis-de-requisito-das-palavras-chave)

## Standards

_The key words “MUST”, “MUST NOT”, “REQUIRED”, “SHALL”, “SHALL NOT”, “SHOULD”, “SHOULD NOT”, “RECOMMENDED”, “MAY”, and “OPTIONAL” in this document are to be interpreted as described in [RFC 2119](https://www.ietf.org/rfc/rfc2119.txt)._

## Branch Naming

Every branch **MUST** be prefixed with a valid type that describes its main purpose.

| Type          | Description                                                                 |
| ------------- | --------------------------------------------------------------------------- |
| main          | Represents production code                                                  |
| feature/\*    | Represents new features or improvements on some feature that already exists |
| bugfix/\*     | Represents a bugfix                                                         |
| release/x.x.x | New release                                                                 |
| hotfix/\*     | Fix to be applied on production code                                        |
| chore/\*      | Represents changes that do not afect codebase                               |

## Commit Messages

We use [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) with [Angular Guidelines](https://github.com/angular/angular/blob/22b96b9/CONTRIBUTING.md#-commit-message-guidelines) as pattern.

Shortly, a commit:

- **MUST** have a valid type;
- **MAY** have a scope;
- **MUST** have a description, starting with capital letter;
- **MAY** have a body;
- **MAY** have footer(s);
- **MUST NOT** end with period

#### Valid Types

- **_fix_**: Patches a bug in the codebase;
- **_feat_**: Introduces a new feature to the codebase;
- **_build_**: Changes that affect the build system or external dependencies;
- **_ci_**: Changes to our CI configuration files and scripts;
- **_docs_**: Documentation only changes;
- **_style_**: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc);
- **_refactor_**: A code change that neither fixes a bug nor adds a feature;
- **_perf_**: A code change that improves performance;
- **_test_**: Adding missing tests or correcting existing tests;
- **_chore_**: Changes that do not affect codebase and doesn't fit any other type;

#### Examples

![Bad](https://img.shields.io/badge/-Bad-red)

```
feat: implement GhostButton.
```

![Bad](https://img.shields.io/badge/-Bad-red)

```
Implement GhostButton
```

![Good](https://img.shields.io/badge/-Good-green)

```
feat(Buttons): Implement GhostButton

```

## Merging Branches

It is **RECOMMENDED** that you choose the `Rebase and Merge` approach when merging a PR into main branch.

## Key words for use to indicate requirement levels

1. `MUST` This word, or the terms "REQUIRED" or "SHALL", mean that the definition is an absolute requirement of the specification.

2. `MUST NOT` This phrase, or the phrase "SHALL NOT", mean that the
   definition is an absolute prohibition of the specification.

3. `SHOULD` This word, or the adjective "RECOMMENDED", mean that there may exist valid reasons in particular circumstances to ignore a particular item, but the full implications must be understood and carefully weighed before choosing a different course.

4. `SHOULD NOT` This phrase, or the phrase "NOT RECOMMENDED" mean that there may exist valid reasons in particular circumstances when the particular behavior is acceptable or even useful, but the full implications should be understood and the case carefully weighed before implementing any behavior described with this label.

5. `MAY` This word, or the adjective "OPTIONAL", mean that an item is
   truly optional.
