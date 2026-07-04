# Single Account Organization Guide

## Overview

Use a **single GHL account** for all Mailhouse Media operations. Organize everything with tags, custom fields, and smart lists.

---

## Tag Structure

### City Tags
```
city-fayetteville
city-jacksonville
city-raleigh
city-charlotte
city-tampa
city-orlando
city-san-antonio
city-austin
city-columbus
city-indianapolis
```

### Route Tags
```
route-1
route-2
route-3
route-4
route-5
route-6
route-7
route-8
```

### Status Tags
```
status-new
status-contacted
status-interested
status-not-interested
status-reserved
status-paid
status-ad-received
status-mailed
status-do-not-contact
```

### Source Tags
```
source-google-maps
source-website
source-referral
source-cold-call
```

### Package Tags
```
package-standard
package-premium
package-featured
```

---

## Custom Fields

| Field Name | Type | Example Value | Purpose |
|------------|------|---------------|---------|
| `city` | Text | Fayetteville | City name |
| `state` | Text | NC | State code |
| `routeNumber` | Text | 1 | Route number |
| `zipCode` | Text | 28301 | ZIP code |
| `businessName` | Text | Joe's Pizza | Business name |
| `category` | Text | restaurant | Business category |
| `googleRating` | Text | 4.5 | Google rating |
| `reviewCount` | Number | 127 | Number of reviews |
| `adSpaceRoute` | Text | 1 | Route where ad is placed |
| `adSpaceSlot` | Number | 5 | Slot number (1-20) |
| `adSpaceStatus` | Text | paid | Status of ad space |
| `adSpaceType` | Text | standard | Package type |
| `adSpacePrice` | Number | 550 | Price paid |
| `mailerEdition` | Text | Fayetteville Summer 2026 | Mailer edition |

---

## Smart Lists (Saved Filters)

### By City
```
Name: "Fayetteville - All Leads"
Filter: Tag contains "city-fayetteville"

Name: "Jacksonville - All Leads"
Filter: Tag contains "city-jacksonville"

Name: "Raleigh - All Leads"
Filter: Tag contains "city-raleigh"
```

### By Route
```
Name: "Fayetteville - Route 1"
Filter: Tag contains "city-fayetteville" AND Tag contains "route-1"

Name: "Fayetteville - Route 2"
Filter: Tag contains "city-fayetteville" AND Tag contains "route-2"
```

### By Status
```
Name: "New - All Cities"
Filter: Tag contains "status-new"

Name: "Contacted - All Cities"
Filter: Tag contains "status-contacted"

Name: "Interested - All Cities"
Filter: Tag contains "status-interested"

Name: "Paid - All Cities"
Filter: Tag contains "status-paid"

Name: "Mailed - All Cities"
Filter: Tag contains "status-mailed"
```

### By Package
```
Name: "Standard Package - All Cities"
Filter: Tag contains "package-standard"

Name: "Premium Package - All Cities"
Filter: Tag contains "package-premium"

Name: "Featured Package - All Cities"
Filter: Tag contains "package-featured"
```

### Complex Filters
```
Name: "Needs Follow-Up"
Filter: Tag contains "status-contacted" AND Tag does NOT contain "status-interested"

Name: "Ready for Ad Collection"
Filter: Tag contains "status-paid" AND Tag does NOT contain "status-ad-received"

Name: "High-Value Leads"
Filter: Tag contains "package-premium" OR Tag contains "package-featured"
```

---

## Pipeline Views

### Main Pipeline: "Ad Space Sales"

**Stages:**
1. New Lead (tag: status-new)
2. Contacted (tag: status-contacted)
3. Interested (tag: status-interested)
4. Space Reserved (tag: status-reserved)
5. Paid (tag: status-paid)
6. Ad Creative Received (tag: status-ad-received)
7. In Design (tag: status-in-design)
8. Mailer Sent (tag: status-mailed)

**Pipeline Views (filtered):**
```
View: "All Cities"
Filter: (none) — show everything

View: "Fayetteville"
Filter: Tag contains "city-fayetteville"

View: "Jacksonville"
Filter: Tag contains "city-jacksonville"

View: "Paid - All Cities"
Filter: Tag contains "status-paid"

View: "Needs Attention"
Filter: Tag contains "status-reserved" AND Tag does NOT contain "status-paid"
```

---

## Reporting

### Contacts Report by City

1. Go to Reports → Contacts
2. Add filter: Tag contains "city-fayetteville"
3. Save as: "Fayetteville - Contacts"
4. See: total contacts, conversion rate, revenue

### Revenue Report by City

1. Go to Reports → Payments
2. Group by: Custom field "city"
3. See: revenue per city
4. Filter by date range

### Pipeline Performance by City

1. Go to Reports → Pipelines
2. Add filter: Tag contains "city-raleigh"
3. See: deals in each stage, win rate, avg deal size

### Monthly Comparison

1. Go to Reports → Overview
2. Set date range: Last 30 days
3. Compare to: Previous 30 days
4. See: growth trends

---

## Workflows with City-Specific Logic

### Workflow: New Lead → Email Sequence

**Trigger:** Tag added → `status-new`

**Action:** Send email (same template for all cities)

**Personalization:**
```
Hey {{contact.firstName}},

I'm putting together a community mailer for {{contact.city}} — specifically for the {{contact.zipCode}} area (Route {{contact.routeNumber}}).
```

**Note:** Use custom fields for personalization. Same workflow works for all cities.

### Workflow: City-Specific Follow-Up (Optional)

**Trigger:** Tag added → `status-new`

**Condition:** If custom field "city" = "Fayetteville"

**Action:** Send Fayetteville-specific email

**Condition:** If custom field "city" = "Jacksonville"

**Action:** Send Jacksonville-specific email

**Note:** Only needed if messaging differs significantly by city.

---

## Daily Operations

### Morning Routine (15 min)

1. **Check new leads**
   - Smart List: "New - All Cities"
   - Review new contacts from overnight scraping

2. **Check replies**
   - Smart List: "Contacted - All Cities"
   - Respond to any replies

3. **Check pipeline**
   - View: "Needs Attention"
   - Follow up on reserved spaces not yet paid

### Weekly Routine (1 hour)

1. **Review city performance**
   - Run reports for each active city
   - Compare conversion rates
   - Identify underperforming cities

2. **Check ad collection**
   - Smart List: "Ready for Ad Collection"
   - Send reminders to paid customers

3. **Plan outreach**
   - Check which routes need more leads
   - Trigger batch scraper for those routes

### Monthly Routine (2 hours)

1. **Revenue analysis**
   - Total revenue by city
   - Revenue by package type
   - Month-over-month growth

2. **Pipeline health**
   - Conversion rates by stage
   - Bottlenecks in sales process
   - Adjust workflows if needed

3. **Scale planning**
   - Which cities to expand next
   - Hire needs
   - Budget for next month

---

## Team Management

### User Roles

**Admin (Ryan):**
- Full access to everything
- Can modify workflows, pipelines, settings

**Sales Rep:**
- Access to contacts, pipelines
- Can send emails, make calls
- Cannot modify workflows

**Designer:**
- Access to paid customers
- Can view ad creative
- Cannot access leads/prospects

**VA:**
- Access to ad collection
- Can send reminders
- Limited access to contacts

### Permissions Setup

1. Go to Settings → Users
2. Add team member
3. Set role and permissions
4. Assign to specific cities (optional)

---

## Scaling Checklist

### 1-5 Cities (Current)
- [x] Single account
- [x] Tag-based organization
- [x] Smart lists for each city
- [x] Unified pipeline
- [x] Basic reporting

### 5-10 Cities
- [ ] Hire first sales rep
- [ ] Create city manager role
- [ ] Build more detailed reports
- [ ] Optimize workflows based on data

### 10-20 Cities
- [ ] Hire dedicated team
- [ ] Create city-specific workflows (if needed)
- [ ] Build custom dashboards
- [ ] Document everything for SaaS licensing

### 20+ Cities
- [ ] Enable SaaS mode
- [ ] Start licensing to operators
- [ ] Build operator onboarding process
- [ ] Scale to $1M+ revenue

---

## Key Benefits of Single Account

✅ **One login** — See everything in one place  
✅ **Unified reporting** — Aggregate analytics across all cities  
✅ **Cross-city insights** — Spot trends, compare performance  
✅ **Simpler management** — No switching between accounts  
✅ **Easier team management** — One account for all team members  
✅ **Better automation** — Workflows work across all cities  
✅ **Clean separation** — Mailhouse Media is separate from ATS sub-accounts  

---

## Support

**GHL Smart Lists:** help.gohighlevel.com/article/smart-lists  
**GHL Custom Fields:** help.gohighlevel.com/article/custom-fields  
**GHL Reporting:** help.gohighlevel.com/article/reports

**Mailhouse Media:**  
hello@mailhousemedia.com  
mailhousemedia.com

---

**Last Updated:** June 27, 2026
