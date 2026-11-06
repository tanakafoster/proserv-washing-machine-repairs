# Google Business Profile setup

Set up ProServ as a **service-area business**: you serve customers at their homes, so **hide your street address** and list service areas instead. Google requires the address field during verification, but tick "I deliver goods and services to my customers" and clear the public address.

Use the exact name, phone and website from `CITATIONS.md`. Don't add keywords or area names to the business name (Google treats that as a guideline violation and it can get the profile suspended).

## Business name
ProServ Washing Machine Repairs

## Categories
Check each one exists in the GBP category picker before choosing it (Google changes the list from time to time).

- **Primary:** Washer & dryer repair service
- **Secondary:**
  - Appliance repair service
  - Appliances customer service (only if it appears in your picker; skip otherwise)

If "Washer & dryer repair service" isn't available, use **Appliance repair service** as the primary category.

## Description (679 characters)

> ProServ Washing Machine Repairs is a mobile repair service for homes across Gauteng. Our technicians come to your door to repair front loaders, top loaders and washer-dryers from all major brands, including Defy, LG, Samsung, Bosch, Whirlpool, Hisense, AEG and Siemens. We diagnose the fault on site and give you a clear quote before any work starts, and most repairs are done on the first visit because we carry common parts. We fix drainage and spin problems, leaks, error codes, door locks, bearings, pumps, motors, heating elements and control boards, and we also install and service washing machines. Every repair carries our warranty. Call or WhatsApp 079 895 0496 to book.

(Check: under 750 characters. It names no brand affiliation and makes no "cheapest" or "best" claims.)

## Services (add each under "Services" with this short description)

| Service | Description (under 300 characters) |
|---|---|
| Front loader repairs | Bearings, pumps, door locks, seals, brushes, heaters and control boards on all front loading washing machines. Diagnosed and quoted at your home. |
| Top loader repairs | Lid switches, drive couplings, gearboxes, suspension rods, pumps and inlet valves on top loaders. Quote before work starts. |
| Washer-dryer repairs | Drying faults (heater, fan, condenser, sensors) plus all the usual washing faults on combo washer-dryers, including integrated models. |
| Washing machine installation | New or moved machines connected to your tap and drain, transit bolts removed, levelled and test-run. |
| Washing machine servicing | Filters, hoses, seals, bearings, brushes and suspension checked and cleaned to prevent bigger repairs. |
| Parts replacement | Drain pumps, motors and brushes, drum bearings, door seals, PCBs/control boards, heating elements and inlet valves supplied and fitted. |
| Washing machine not draining | Blocked filters, hoses and failed drain pumps cleared or replaced on site. |
| Error code diagnosis | We find out what the code on your display means and fix the cause. |

## Service areas
Add each as a service area (Google allows up to 20). [CONFIRM] these match `src/data/site.ts`.

Johannesburg · Pretoria · Centurion · Sandton · Midrand · Benoni · Boksburg · Kempton Park · Germiston · Edenvale · Randburg · Roodepoort · Fourways · Bryanston

## Other profile settings
- **Phone:** 079 895 0496
- **Website:** https://proservwashingmachinerepairs.co.za/
- **Appointment link:** https://proservwashingmachinerepairs.co.za/contact/
- **Hours:** [CONFIRM] use the same hours as `src/data/site.ts`
- **Messaging / WhatsApp:** add the WhatsApp link https://wa.me/27798950496 if your profile offers a WhatsApp/chat field
- **Attributes:** "Onsite services", "Online appointments" where available
- **Opening date:** [CONFIRM] the real year you started trading

## First 4 GBP posts

**Post 1: Welcome / what we do** (button: Call now)
> Washing machine stopped mid-wash? ProServ comes to you anywhere in our Gauteng service area. We diagnose the fault at your home and give you a clear quote before any work starts. Front loaders, top loaders and washer-dryers, all major brands. Call or WhatsApp 079 895 0496.

**Post 2: Load shedding tip** (button: Learn more → /blog/protect-washing-machine-from-load-shedding/)
> Load shedding tip: switch your washing machine off at the wall when the power goes, and wait a few minutes after it comes back before switching on. Surges when power returns are a common cause of dead control boards. Machine not switching on after an outage? We can help: 079 895 0496.

**Post 3: Not draining** (button: Learn more → /problems/washing-machine-not-draining/)
> Water stuck in the drum? Before you call, check the drain hose isn't kinked and clean the pump filter behind the little flap at the bottom front. Still not draining? It may be the pump. We carry pumps on the van, so it's usually a one-visit fix. WhatsApp us on 079 895 0496.

**Post 4: Rumbling on spin** (button: Learn more → /blog/signs-washing-machine-bearings-are-worn/)
> Does your washing machine sound like a jet engine on spin? That rumble is often worn drum bearings. Catching it early keeps the repair simpler and cheaper. Book an inspection: 079 895 0496.

Post once a week if you can. Real photos of jobs (with the customer's permission and no personal details visible) work best.

## Photos to upload
Upload at least 10 real photos to start, then a few new ones every month:

1. Logo (square, 720 × 720) and cover photo (1080 × 608)
2. You or your technician(s) in uniform, smiling, at a customer's machine
3. The service van, with branding if you have it
4. A front loader being repaired (panel off, technician working)
5. A top loader being repaired
6. Before and after: a cleaned pump filter, a replaced door seal
7. Old vs new parts: worn bearing, burnt pump, worn carbon brushes
8. Tools and parts stock in the van
9. A finished, installed machine, level and tidy
10. Team photo

Don't use stock photos or brand logos. Photos taken on site in Gauteng help most.

## Verification and ongoing
- Verify by the method Google offers (video verification is common for service-area businesses: show your van, tools, branded items and proof of business).
- Reply to every review within a couple of days, good or bad.
- Use `REVIEWS.md` to ask happy customers for reviews. Never offer rewards for reviews.
- Add Q&A: post and answer the most common questions from the website FAQ.
- Once live, add the profile and review links to `src/data/site.ts` (`sameAs` and `googleReviewUrl`).
