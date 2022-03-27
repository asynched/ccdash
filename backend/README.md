# CC-Dash

Backend for the Computer Science dashboard.

## Tables

Structure of the database inside the application.

### Subject

Representation of a subject (such as `math` or `oop`) inside the database.

| Field      | Type    |
| ---------- | ------- |
| id         | uuid    |
| name       | varchar |
| created_at | date    |
| updated_at | date    |

### Teacher

Representation of a teacher inside the database.

| Field         | Type    |
| ------------- | ------- |
| id            | uuid    |
| name          | varchar |
| profile_image | varchar |
| created_at    | date    |
| updated_at    | date    |

### Task

Representation of a task inside the database.

| Field      | Type    |
| ---------- | ------- |
| id         | uuid    |
| title      | varchar |
| content    | text    |
| subject    | \*uuid  |
| due_date   | date    |
| created_at | date    |
| updated_at | date    |

### Schedule

Representation of a given subject schedule inside the database.

| Field      | Type              |
| ---------- | ----------------- |
| id         | uuid              |
| weekday    | varchar (`enum?`) |
| from       | varchar           |
| to         | varchar           |
| subject    | \*uuid            |
| created_at | date              |
| updated_at | date              |

### Resource

Representation of a resource inside the database, this should be mainly used for links and other stuff.

| Field       | Type    |
| ----------- | ------- |
| id          | uuid    |
| name        | varchar |
| description | text    |
| url         | varchar |
| subject     | \*uuid  |
| created_at  | date    |
| updated_at  | date    |
