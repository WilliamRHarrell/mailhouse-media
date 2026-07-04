# Mailhouse Media Email Outreach Templates

## Step 1 — Day 0: Intro (Curiosity)
**Subject:** Quick question about {business_name}

Hey {first_name},

I'm putting together a community mailer for {city} — a large 9x12 postcard that goes to every single doorstep in the area via USPS.

We're offering local businesses a chance to get their ad in front of thousands of households for a fraction of what normal advertising costs.

The mailer hits {city} homes directly — no digital scrolling, no ad blockers, just real people seeing your business in their hands.

We have a few ad spaces left and I wanted to give {business_name} first shot at one before we fill up.

Interested in hearing more? Just reply to this email and I'll send over the details.

— Ryan Harrell
Mailhouse Media
(910) XXX-XXXX

---

## Step 2 — Day 3: Social Proof
**Subject:** {business_name} — here's who else is in

Hey {first_name},

Just following up on the community mailer I mentioned.

We've already got {spaces_filled} local businesses signed up for the {city} edition — including {sample_businesses}.

These are businesses that know their customers are right here in town, and they're not leaving their visibility to algorithms.

The mailer goes to 5,000+ homes. That's $0.11 per household — cheaper than a Facebook ad, and 5x the response rate.

Still a few spaces left. Want me to hold one for {business_name}?

— Ryan

---

## Step 3 — Day 8: Urgency
**Subject:** {spaces_remaining} spots left — closing soon

Hey {first_name},

Quick heads up — we're down to {spaces_remaining} ad spaces for the {city} mailer and I'm closing reservations this week.

Once it's full, we go straight to print and it's out to every doorstep.

If {business_name} wants in, now's the time. After this edition, the next one won't be for a few months.

Here's the link to grab your space: {payment_link}

Or just reply to this email and I'll walk you through it.

— Ryan Harrell
Mailhouse Media

---

## Reply Handler (n8n trigger)

When a prospect replies positively:
1. n8n detects reply (via email webhook or manual tag)
2. Auto-update prospect status to "interested"
3. Send reservation link: {landing_page_url}#reserve
4. Notify Ryan via Telegram

When a prospect replies negatively:
1. Update status to "not_interested"
2. Log reason if provided
3. Remove from future sequences

---

## Messenger Template (Facebook/Instagram DM)

Hey {first_name}! 👋 I'm putting together a community mailer for {city} — a big postcard that goes to every doorstep via USPS.

We've got ad spaces available for local businesses and I thought {business_name} might be interested.

It's $550 for a spot that reaches 5,000+ homes. Way cheaper than Facebook ads and people actually SEE it.

Want me to send you the details?
