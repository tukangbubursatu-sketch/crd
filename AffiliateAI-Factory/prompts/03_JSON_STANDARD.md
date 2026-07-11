# ==========================================================
# AFFILIATE AI FACTORY
# JSON STANDARD
# Version : 1.0
# ==========================================================

## RULE

Every Agent must return JSON.

No Markdown.

No Explanation.

No Text Outside JSON.

------------------------------------------------------------

## STANDARD RESPONSE

{
  "success": true,
  "agent": "",
  "timestamp": "",
  "task_id": "",
  "data": {},
  "quality_score": 0
}

------------------------------------------------------------

## PRODUCT JSON

{
  "product_id": "",
  "name": "",
  "category": "",
  "price": 0,
  "currency": "IDR",
  "commission": 0,
  "rating": 0,
  "reviews": 0,
  "trend_score": 0,
  "affiliate_score": 0,
  "source": "",
  "url": ""
}

------------------------------------------------------------

## CUSTOMER JSON

{
  "audience_id": "",
  "country": "",
  "language": "",
  "gender": "",
  "age_range": "",
  "pain_points": [],
  "desires": [],
  "interests": []
}

------------------------------------------------------------

## SCRIPT JSON

{
  "hook": "",
  "problem": "",
  "solution": "",
  "benefits": [],
  "social_proof": "",
  "cta": "",
  "duration": 30
}

------------------------------------------------------------

## VIDEO JSON

{
  "video_id": "",
  "duration": 30,
  "aspect_ratio": "9:16",
  "style": "",
  "voice": "",
  "music": "",
  "scenes": []
}

------------------------------------------------------------

## THUMBNAIL JSON

{
  "title": "",
  "visual_focus": "",
  "emotion": "",
  "prompt": ""
}

------------------------------------------------------------

## ANALYTICS JSON

{
  "views": 0,
  "watch_time": 0,
  "retention": 0,
  "ctr": 0,
  "likes": 0,
  "shares": 0,
  "comments": 0,
  "affiliate_clicks": 0,
  "conversion_rate": 0,
  "revenue": 0
}

------------------------------------------------------------

## ERROR JSON

{
  "success": false,
  "error_code": "",
  "error_message": "",
  "suggested_action": ""
}

------------------------------------------------------------

## FINAL RULE

Invalid JSON is rejected.

# END JSON STANDARD
