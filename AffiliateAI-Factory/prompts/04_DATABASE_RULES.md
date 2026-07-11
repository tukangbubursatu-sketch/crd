# ==========================================================
# DATABASE RULES
# AffiliateAI Factory
# Version 1.0
# ==========================================================

# PURPOSE

This document defines the database architecture, storage standards, naming conventions, validation rules, indexing strategy, and data lifecycle for AffiliateAI Factory.

Every AI Agent must follow these rules when reading or writing data.

------------------------------------------------------------

# DATABASE OBJECTIVES

The database must be:

- Fast
- Consistent
- Secure
- Scalable
- Recoverable
- Auditable

------------------------------------------------------------

# DATABASE ENGINE

Primary Database

MySQL 8+

Optional

PostgreSQL

Cache

Redis

Vector Database

Qdrant

Chroma

Pinecone

------------------------------------------------------------

# DATABASE PRINCIPLES

Single Source of Truth

Normalized Data

No Duplicate Records

Foreign Key Integrity

Soft Delete Preferred

Timestamp Everything

------------------------------------------------------------

# NAMING CONVENTION

Database

affiliate_ai

Tables

snake_case

Examples

products

videos

scripts

customers

analytics

Never use spaces.

Never use special characters.

------------------------------------------------------------

# PRIMARY KEY

Every table must contain

id

BIGINT

AUTO_INCREMENT

PRIMARY KEY

------------------------------------------------------------

# REQUIRED COLUMNS

created_at

updated_at

deleted_at

status

created_by

updated_by

------------------------------------------------------------

# STATUS VALUES

ACTIVE

INACTIVE

PENDING

PROCESSING

FAILED

ARCHIVED

------------------------------------------------------------

# PRODUCT DATA

Store

Product Name

Brand

Category

Marketplace

Affiliate Link

Commission

Price

Discount

Images

Videos

Seller

Rating

Reviews

Trend Score

Created Date

------------------------------------------------------------

# CUSTOMER DATA

Store

Persona

Age

Gender

Country

Language

Pain Points

Buying Intent

Favorite Platform

Purchase Behavior

------------------------------------------------------------

# SCRIPT DATA

Store

Hook

Body

CTA

Language

Duration

Marketing Angle

Version

------------------------------------------------------------

# VIDEO DATA

Store

Prompt

Model

Resolution

FPS

Duration

Voice

Music

Subtitle

Thumbnail

Render Time

------------------------------------------------------------

# ANALYTICS DATA

Store

Views

CTR

Watch Time

Retention

Shares

Likes

Comments

Revenue

Affiliate Clicks

Sales

ROI

------------------------------------------------------------

# MEMORY DATA

Store

Winning Hooks

Winning Prompts

Winning Products

Winning Scripts

Winning Music

Winning CTA

Winning Thumbnail

Winning Audience

Winning Categories

------------------------------------------------------------

# INDEXING

Create indexes for

product_name

category

created_at

trend_score

status

affiliate_score

video_id

script_id

------------------------------------------------------------

# DATA VALIDATION

Reject

NULL Required Fields

Duplicate Affiliate Links

Negative Price

Negative Commission

Invalid JSON

------------------------------------------------------------

# SOFT DELETE

Never permanently delete records.

Use

deleted_at

instead.

------------------------------------------------------------

# RELATIONSHIP

One Product

↓

Many Scripts

One Script

↓

Many Videos

One Video

↓

Many Analytics

One Product

↓

Many Affiliate Links

------------------------------------------------------------

# LOGGING

Every database operation must log

Time

Agent

Action

Table

Record ID

Status

Duration

------------------------------------------------------------

# TRANSACTION RULES

Use transactions for

Insert

Update

Delete

Rollback on failure.

------------------------------------------------------------

# BACKUP POLICY

Daily Backup

Weekly Full Backup

Monthly Archive

------------------------------------------------------------

# PERFORMANCE

Maximum Query Time

500 ms

Preferred

<100 ms

------------------------------------------------------------

# SECURITY

Never store

Passwords

API Keys

Secret Tokens

Private Credentials

Encrypt

Sensitive User Data

Affiliate Tokens

------------------------------------------------------------

# VERSIONING

Every important record must contain

version

revision

last_modified

------------------------------------------------------------

# DATA LIFECYCLE

Collect

↓

Validate

↓

Store

↓

Use

↓

Analyze

↓

Learn

↓

Archive

------------------------------------------------------------

# FINAL RULE

The database is the single source of truth.

Every AI Agent must trust database records over temporary memory.

END OF DOCUMENT
