# BankDetektiv — WordPress theme + Meilisearch integration

Custom WordPress theme with Meilisearch-powered search over a merchant directory.

## What’s inside
- Custom WP theme (`bankdetektiv_theme`)
- Search page template (query via `?q=...`)
- Admin-managed data structure for merchants (via ACF)

## Search flow (high level)
1) Merchant entries are managed in WP Admin  
2) Data is indexed into Meilisearch  
3) Search page sends query and renders results

## ACF structure (used in this project)
Post Type: `Merchant` (slug: `merchant`)

Field Group: `Merchant Fields` (location: Post Type = Merchant)
- `display_name` (Text)
- `statement_contains` (Textarea)
- `logo` (Image)
- `category` (Text)
- `explanation_short` (Textarea)
- `preferred_url` (URL)

## Configuration
This project expects Meilisearch credentials to be provided as environment variables / constants (do not store keys in the repository):

- `MEILI_HOST`
- `MEILI_SEARCH_KEY`

## Notes for portfolio usage
- WordPress core files and `wp-config.php` are intentionally excluded
- No production secrets are included
