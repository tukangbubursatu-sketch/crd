# ==========================================================
# LOGGING SYSTEM
# AffiliateAI Factory
# Version 1.0
# ==========================================================

# PURPOSE

This document defines the logging architecture used by every AI Agent,
Workflow Engine, API Service, Database, and Background Worker.

Every important action must be logged.

No critical operation may execute without creating a log.

------------------------------------------------------------

# OBJECTIVES

Maintain Full Audit Trail

Track Every Decision

Measure Performance

Debug Faster

Support Analytics

Support AI Learning

Support Business Reports

------------------------------------------------------------

# LOG LEVELS

TRACE

Very detailed execution logs.

DEBUG

Developer information.

INFO

Normal operations.

WARNING

Unexpected but recoverable events.

ERROR

Task failed.

CRITICAL

Major system failure.

FATAL

System shutdown required.

------------------------------------------------------------

# WHAT MUST BE LOGGED

Workflow Started

Workflow Finished

Workflow Failed

Agent Started

Agent Finished

Agent Failed

Database Query

Database Error

API Request

API Response

API Timeout

Cache Hit

Cache Miss

Retry

Queue Processing

Memory Update

Analytics Update

Publishing

Authentication

Authorization

Configuration Changes

------------------------------------------------------------

# REQUIRED LOG FIELDS

Log ID

Timestamp

Workflow ID

Project ID

Agent Name

Module

Action

Status

Execution Time

User

Version

Environment

------------------------------------------------------------

# OPTIONAL LOG FIELDS

Input Summary

Output Summary

Error Code

Retry Count

CPU Usage

Memory Usage

API Cost

Prompt Tokens

Completion Tokens

Total Tokens

Estimated Cost

------------------------------------------------------------

# LOG FORMAT

Preferred

JSON

Example

{
  "log_id":"",
  "workflow_id":"",
  "project_id":"",
  "timestamp":"",
  "agent":"Trend Hunter",
  "module":"Product Scanner",
  "action":"Scan Marketplace",
  "status":"SUCCESS",
  "duration_ms":0
}

------------------------------------------------------------

# LOG STORAGE

Primary

MySQL

Secondary

Redis

Archive

Compressed Files

Cloud Storage

------------------------------------------------------------

# LOG RETENTION

Debug Logs

7 Days

Info Logs

30 Days

Business Logs

1 Year

Analytics Logs

Unlimited

Security Logs

Unlimited

------------------------------------------------------------

# ERROR LOGS

Must include

Stack Trace

Message

Agent

Workflow

Database Status

API Status

Retry Count

Recovery Action

------------------------------------------------------------

# PERFORMANCE LOGS

Record

Execution Time

Database Time

API Time

Queue Time

Rendering Time

Publishing Time

Learning Time

------------------------------------------------------------

# AI TOKEN LOGS

Store

Prompt Tokens

Completion Tokens

Total Tokens

Estimated Cost

Model Name

Temperature

Execution Duration

------------------------------------------------------------

# DATABASE LOGS

Insert

Update

Delete

Transaction

Rollback

Reconnect

Slow Query

------------------------------------------------------------

# API LOGS

Endpoint

Method

Headers

Response Code

Latency

Payload Size

Retry Count

------------------------------------------------------------

# SECURITY LOGS

Login

Logout

Permission Change

API Key Usage

Invalid Token

Unauthorized Access

Rate Limit

------------------------------------------------------------

# ANALYTICS LOGS

Views

CTR

Retention

Watch Time

Affiliate Click

Sales

Revenue

ROI

------------------------------------------------------------

# SEARCHABLE FIELDS

Workflow ID

Project ID

Agent

Product

Category

Platform

Status

Date

------------------------------------------------------------

# LOG ROTATION

Rotate Daily

Compress Weekly

Archive Monthly

Delete Expired Logs

------------------------------------------------------------

# LOGGING RULES

Never log

Passwords

API Keys

Secret Tokens

Personal Information

Credit Card Data

Private Credentials

------------------------------------------------------------

# ALERTS

Generate alert if

Workflow Failed

Database Down

API Failure

Repeated Retry

Security Violation

High Cost

High Token Usage

------------------------------------------------------------

# DASHBOARD METRICS

Workflow Success Rate

Average Agent Time

API Usage

Daily Cost

Video Generated

Published Videos

Affiliate Revenue

Top Products

Top Hooks

Top Scripts

------------------------------------------------------------

# FINAL RULE

If an event is important enough to affect the business,
it must exist in the logging system.

No important action should ever be invisible.

END OF DOCUMENT
