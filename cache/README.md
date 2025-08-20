# Image Cache Directory

This top-level `cache/` directory contains cached image files and manifests to improve build performance.

## Files in this directory:

### ✅ **Committed to Git**

- Downloaded Prismic images are stored locally in `public/` directory
- Image manifests track which images belong to which documents

### ❌ **Gitignored**

- `drafts/` - Temporary files (if any)
- `temp/` - Temporary processing files

## How it works:

1. **Image downloading**: Images are fetched from Prismic and stored locally

   - Images are downloaded to `public/` directory during build
   - Local paths are generated based on image URLs and metadata
   - Manifest files track the relationship between documents and images

2. **Image optimization**: Images are processed for web delivery
   - Duplicate images are deduplicated based on URL
   - Orphaned images are cleaned up automatically

## Cache management:

The image cache is managed automatically during builds:

- Images are downloaded when missing from local storage
- Existing images are verified and reused when available
- Orphaned images are cleaned up to save space
