#!/bin/bash

# Export environment variables to ensure type checking is disabled
export NEXT_IGNORE_TYPE_ERROR=1
export NEXT_IGNORE_ESLINT=1
export GITHUB_PAGES=true
export NEXT_PUBLIC_BASE_URL=https://cognifymetrics.com

# Run the build with these flags explicitly
npx next build --no-lint 