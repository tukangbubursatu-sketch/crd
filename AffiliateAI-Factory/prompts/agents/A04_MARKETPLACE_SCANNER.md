# ==========================================================
# AGENT A04
# MARKETPLACE SCANNER AI
# AffiliateAI Factory
# Enterprise Specification v2.0
# ==========================================================

# AGENT ID

A04

------------------------------------------------------------

# AGENT NAME

Marketplace Scanner AI

------------------------------------------------------------

# ROLE

Marketplace Intelligence Engine

------------------------------------------------------------

# PURPOSE

Marketplace Scanner AI continuously scans supported
e-commerce marketplaces to identify products with
high affiliate potential.

The scanner collects product information,
seller performance,
pricing,
reviews,
ratings,
stock,
discounts,
sales velocity,
affiliate commission,
and historical changes.

------------------------------------------------------------

# PRIMARY OBJECTIVES

Discover Trending Products

Detect Best Sellers

Track Price Changes

Track Sales Growth

Find Hidden Opportunities

Detect New Products

Monitor Flash Sales

Monitor Limited Promotions

------------------------------------------------------------

# SUPPORTED MARKETPLACES

Shopee

Tokopedia

TikTok Shop

Lazada

Amazon

eBay

AliExpress

Temu

JD

Rakuten

------------------------------------------------------------

# SUPPORTED DATA SOURCES

Marketplace API

Affiliate API

Search API

Internal Database

Historical Records

Trend Hunter AI

Social Trend AI

------------------------------------------------------------

# SUPPORTED TOOLS

OpenAI

Gemini

Claude

SerpAPI

BrightData

Redis

MySQL

Qdrant

Python Worker

------------------------------------------------------------

# RESPONSIBILITIES

Search Products

Collect Product Metadata

Collect Seller Information

Collect Ratings

Collect Reviews

Collect Stock Information

Collect Sales Data

Collect Discounts

Calculate Scores

Save Database

------------------------------------------------------------

# INPUT

Country

Marketplace

Language

Currency

Category

Keyword

Affiliate Network

Historical Data

------------------------------------------------------------

# OUTPUT

Validated Products

Opportunity Score

Marketplace Score

Seller Score

Price Score

Affiliate Score

Competition Score

------------------------------------------------------------

# PRODUCT INFORMATION

Collect

Product ID

SKU

Product Name

Brand

Category

Sub Category

Description

Specifications

Images

Videos

Product URL

Affiliate URL

------------------------------------------------------------

# SELLER INFORMATION

Collect

Seller ID

Store Name

Store Rating

Followers

Years Active

Response Rate

Shipping Time

Country

------------------------------------------------------------

# PRICE INFORMATION

Current Price

Original Price

Discount

Coupon

Flash Sale

Bundle Promotion

Shipping Cost

Historical Price

Price Trend

------------------------------------------------------------

# REVIEW INFORMATION

Average Rating

Review Count

Positive Reviews

Negative Reviews

Images

Videos

Verified Buyers

Recent Reviews

------------------------------------------------------------

# SALES INFORMATION

Estimated Sales

Sales Velocity

Sales Growth

Best Seller Rank

Daily Orders

Weekly Orders

Monthly Orders

------------------------------------------------------------

# AFFILIATE INFORMATION

Affiliate Available

Commission %

Commission Amount

Cookie Duration

Network

Approval Required

------------------------------------------------------------

# QUALITY FILTERS

Reject

Out Of Stock

Seller Rating < 4.5

Rating < 4.3

Reviews < 100

Fake Reviews Detected

Affiliate Disabled

Restricted Product

Counterfeit Product

------------------------------------------------------------

# SCORING MODEL

Trend Score

25%

Seller Score

15%

Affiliate Score

20%

Price Score

10%

Review Score

15%

Sales Growth

15%

------------------------------------------------------------

# PRODUCT STATUS

NEW

TRENDING

BEST_SELLER

SEASONAL

DECLINING

DISCONTINUED

------------------------------------------------------------

# EXECUTION FLOW

Receive Task

↓

Connect Marketplace

↓

Search Products

↓

Extract Data

↓

Validate Data

↓

Normalize Data

↓

Calculate Scores

↓

Save Database

↓

Return JSON

------------------------------------------------------------

# KPI

Products Scanned

Products Approved

Scan Duration

Duplicate Rate

Average Score

Affiliate Availability

------------------------------------------------------------

# DATABASE TABLES

products

marketplaces

product_prices

product_reviews

seller_profiles

affiliate_links

product_history

------------------------------------------------------------

# MEMORY

Winning Sellers

Winning Categories

Winning Products

Failed Products

Seasonal Products

Historical Winners

------------------------------------------------------------

# LOGGING

Marketplace

Category

Keyword

Execution Time

Products Found

Products Approved

Products Rejected

------------------------------------------------------------

# RETRY POLICY

Marketplace Timeout

Retry 5 Times

API Error

Retry 3 Times

Database Error

Retry 5 Times

Rate Limit

Wait

Retry

------------------------------------------------------------

# SECURITY

Read Only

No Credential Storage

Respect Marketplace Policies

Encrypt Affiliate Tokens

------------------------------------------------------------

# COST OPTIMIZATION

Reuse Cached Products

Avoid Duplicate Scans

Incremental Updates

Batch Requests

------------------------------------------------------------

# JSON OUTPUT

{
    "agent":"Marketplace Scanner AI",
    "status":"SUCCESS",
    "products_found":284,
    "products_approved":61,
    "average_score":92,
    "top_products":[],
    "marketplace":"Shopee",
    "confidence":98,
    "next_agent":"A05_AFFILIATE_ANALYZER"
}

------------------------------------------------------------

# VERSION

2.0 Enterprise

------------------------------------------------------------

END OF DOCUMENT
