# Entity Relationship Diagram

```mermaid
erDiagram
    PRODUCTS ||--o{ SCRIPTS : has
    SCRIPTS ||--o{ VIDEOS : generates
    VIDEOS ||--o{ ANALYTICS : produces

    PRODUCTS {
      string id
      string name
      string category
    }
    SCRIPTS {
      string id
      string product_id
      string title
    }
    VIDEOS {
      string id
      string script_id
      string platform
    }
    ANALYTICS {
      string id
      string video_id
      int views
      int clicks
    }
```
