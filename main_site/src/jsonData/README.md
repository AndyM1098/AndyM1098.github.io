# JSON Data Schema Specification

This repository includes two structured JSON files representing experience and education records for dynamic rendering in a TypeScript-based frontend.

---

## File: `jobs.json`

### Type Definition

```ts
type JobEntry = {
  job_title: string;
  location: string;
  dates: string;
  bullet_points: string[];
  logo_path: string;
};

type JobsJson = JobEntry[];
```

### Example

```json
[
  {
    "job_title": "Software Intern",
    "location": "Acme Corp – San Francisco, CA",
    "dates": "June 2022 – August 2022",
    "bullet_points": [
      "Implemented automated test framework for React components",
      "Reduced build times by 30% through Webpack optimization"
    ],
    "logo_path": "/logos/acme_logo.png"
  }
]
```

---

## File: `edu.json`

### Type Definition

```ts
type EducationEntry = {
  degree: string;
  institution: string;
  date: string;
  gpa: string;
  honors: string | null;
  description: string | null;
  logo_path: string;
  certificate: string;
};

type EducationJson = EducationEntry[];
```

### Example

```json
[
  {
    "degree": "Bachelor of Science in Computer Science",
    "institution": "University of Tennessee",
    "date": "Aug 2020 – May 2024",
    "gpa": "3.85",
    "honors": "summa cum laude",
    "description": "Coursework focused on systems programming and machine learning.",
    "logo_path": "/logos/Tennessee_Volunteers_logo.svg.png",
    "certificate": "/certificates/bs_cs.pdf"
  }
]
```

---

## Notes

- All file paths (`logo_path`, `certificate`) are relative to the public root in a React environment.
- Both files are treated as typed JSON modules with the assumption that `resolveJsonModule` is enabled in `tsconfig.json`.
- Nullable fields are explicitly typed as `string | null` and must conform to this definition to avoid structural mismatches during static analysis.

```ts
import jobs from './jobs.json';
import edu from './edu.json';

const parsedJobs: JobsJson = jobs;
const parsedEdu: EducationJson = edu;
```
