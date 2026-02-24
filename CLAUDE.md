# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a live stream review dashboard project for analyzing and visualizing live commerce performance data. The project is currently in the requirements phase with design specifications defined but implementation has not begun.

## Architecture

The system follows a **Modular Layout Architecture** with three main components:

1. **Module A: Trend Overview** - Top section displaying aggregate performance metrics across all live sessions
   - Line chart showing trends (deals/viewers/conversion rate)
   - KPI cards for cumulative metrics (total sales, avg conversion, total viewers)

2. **Module B: Session Selector** - Middle section for navigating between live sessions
   - Timeline tabs or horizontal scrollable buttons
   - Reverse chronological order (newest sessions first)

3. **Module C: Detail Container** - Bottom section showing session-specific data
   - Left panel: Quantitative data funnel (time, UV, interaction, deals, conversion)
   - Right panel: Qualitative review (highlights, issues, action items)

## Data Structure

The data layer uses a standardized JSON schema for live session records:

```json
{
  "id": "unique_identifier",
  "date": "display_date",
  "title": "session_name",
  "isHighlight": boolean,
  "chartMetrics": {
    "deals": number,
    "viewers": number
  },
  "detailData": {
    "time": "time_range",
    "realUV": "viewer_count",
    "interaction": "interaction_stats",
    "conversion": "conversion_rate",
    "revenue": "sales_info"
  },
  "reviewText": {
    "highlights": ["string"],
    "issues": ["string"],
    "actions": ["string"]
  }
}
```

## Design Requirements

- **Scalability**: Charts and tabs must support horizontal scrolling for unlimited session count
- **Empty States**: Display "待复盘" (pending review) for sessions without qualitative data
- **Visual Hierarchy**: Selected sessions use bold/dark styling; others use muted tones
- **Color Scheme**: Brand yellow (#FFC000) for active states, red for trend lines with gradient fill

## Current State

The repository contains:
- `需求.md` - Complete design specification document with detailed requirements
- `直播复盘数据.txt` - Sample data from two live sessions (Feb 8 and Feb 12, 2026)
- `1月31日直播复盘.pdf` - Historical review document
- `2月5日直播复盘.pdf` - Historical review document

## Implementation Notes

- Data should be configurable via JSON files or backend entry
- Frontend must auto-render based on data structure
- Y-axis charts should support switching between deals, viewers, and conversion rate
- UI must highlight peak performance points on trend lines
