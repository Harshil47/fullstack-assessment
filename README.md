This project is a sample eCommerce application built with Next.js (App Router) that includes:

* Product List Page
* Category & Subcategory Filtering
* Search
* Product Detail Page
* API Routes

The original implementation contained architectural issues, security risks, missing error handling, and performance problems.
# Issues Identified & Fixes

## 1. Product Data Passed via Query String 

**Issue:**
The entire product object was passed via URL query parameters and parsed on the Product page.

**Problems:**

* Security risk via URL manipulation
* Large/unreliable URLs
* API routes unused
* Not shareable or reload-safe

**Fix:**
Implemented dynamic routing (`/product/[sku]`) and fetched product data from `/api/product/[sku]`.
It Ensures secure, RESTful, and scalable architecture aligned with Next.js best practices.

## 2. Broken Subcategory Filtering

**Issue:**
Frontend did not pass `category` to `/api/subcategories`.
Updated API call to include `?category=` query parameter.
Restores correct filtering behavior and enforces proper API contract.

## 3. Missing Error Handling in Fetch Calls

**Issue:**
All fetch calls assumed success and lacked error handling.
Added `res.ok` checks, `catch` blocks, and fallback UI states.
Prevents UI from breaking or hanging during network/API failures.

## 4. Incorrect API Route Typing

**Issue:**
`params` in product API route was incorrectly typed as a `Promise`.
Corrected TypeScript typing to `{ params: { sku: string } }`.
Ensures proper type safety and correctness.

# Enhancements Made

* Migrated to secure dynamic routing
* Improved API validation
* Added defensive programming patterns
* Improved performance and UX
* Strengthened TypeScript correctness

# Result

The application now:

* Uses proper RESTful dynamic routing
* Securely fetches product data from the API
* Handles errors gracefully
* Filters correctly
* Performs efficiently
* Follows Next.js App Router best practices
