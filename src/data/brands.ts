import type { ContentPage } from './types';
import { site, errorCodeUrl, brandUrl, areaUrl } from './site';

export interface Brand extends ContentPage {
  brand: string;
  /** True when an error code guide exists at /error-codes/[slug]-washing-machine-error-codes/ */
  hasErrorGuide: boolean;
}

const f = site.facts;

/** The independent-repairer note that closes every brand page. */
const indie = (b: string) =>
  `<div class="callout"><p>ProServ is an independent repairer. We are not affiliated with, authorised or endorsed by ${b}. ${b} is a trademark of its owner and is used here only to describe the machines we repair. If your machine is still under the manufacturer's warranty, contact ${b} first, because outside repairs may affect that warranty.</p></div>`;

/** All six area pages as links, for one sentence: "Johannesburg, Pretoria, … Midrand and the East Rand". */
const areaLinks = () => {
  const l = site.areas.map((a) => {
    const link = `<a href="${areaUrl(a.slug)}">${a.name}</a>`;
    return a.label.startsWith('the ') ? `the ${link}` : link;
  });
  return `${l.slice(0, -1).join(', ')} and ${l[l.length - 1]}`;
};

export const brands: Brand[] = [
  // ───────────────────────────── Defy ─────────────────────────────
  {
    slug: 'defy',
    brand: 'Defy',
    name: 'Defy',
    hasErrorGuide: true,
    title: 'Defy Washing Machine Repairs | ProServ',
    description: `Defy washing machine repairs at your home in Gauteng: front loaders, top loaders and twin tubs. Quote before any work starts. Call ${site.phone.display}.`,
    h1: 'Defy washing machine repairs',
    primaryKeyword: 'Defy washing machine repairs',
    summary: 'Front loaders, top loaders and twin tubs, older and current.',
    intro: `<p>Defy washing machine repairs, done at your home: a ProServ technician finds out why your Defy front loader, top loader or twin tub has stopped working properly, and gives you a quote before any work starts.</p>`,
    body: `
<h2>Defy machines, old and new</h2>
<p>Defy is one of the oldest names in South African appliances. The company traces its roots to 1905 in KwaZulu-Natal, and it was bought in 2011 by Arçelik, the Turkish appliance group behind Beko. That long history means many generations of Defy washing machine are still in use, from older ranges such as the Automaid and Maximaid to today's front loaders, top loaders and twin tubs.</p>
<p>Newer Defy machines use far less water and electricity than the ones they replaced, and SteamCure models add steam at the start and end of the wash. They are also run by an electronic control board and a set of sensors, so a fault is often less obvious from the outside than it was on an older machine with a mechanical timer. Defy machines of every age are part of our <a href="/">washing machine repairs</a> service, and with ${f.yearsInBusiness} years of washing machine repair experience behind us we know both the older and the newer designs.</p>

<h2>When to call us about your Defy</h2>
<p>Book a technician if your Defy does any of these:</p>
<ul>
  <li><strong>It won't start.</strong> No lights at all, or lights but no response when you press start. Our page on a <a href="/problems/washing-machine-wont-turn-on/">washing machine that won't turn on</a> lists the checks to do first.</li>
  <li><strong>It won't fill, spin or drain.</strong> The programme stalls at one stage, or the time display stops counting down and the cycle never finishes.</li>
  <li><strong>It shows a code or flashes its lights.</strong> The section on codes below explains what that tells you.</li>
  <li><strong>It bangs, bumps or grinds.</strong> Usually on spin, when worn bearings, tired suspension or something trapped between the drum and the tub make themselves heard. See <a href="/problems/washing-machine-noisy-when-spinning/">what a noisy spin can mean</a>.</li>
  <li><strong>The door or lid won't latch or open.</strong> A door lock or lid switch fault, or something caught in the door seal.</li>
  <li><strong>It leaks.</strong> Water from a hose, the pump, an inlet valve or a seal. Our guide to <a href="/problems/washing-machine-leaking/">tracing a washing machine leak</a> helps you narrow down where it is coming from.</li>
  <li><strong>It smells.</strong> A musty smell is usually residue (see <a href="/blog/why-does-my-washing-machine-smell/">why your washing machine smells</a>), but a burning or electrical smell means switch off at the wall straight away.</li>
</ul>

<h2>Defy faults we repair</h2>
<h3>Front loaders</h3>
<p>Defy front loaders usually have model numbers starting with DAW. Their faults tend to come back to the same hard-working parts:</p>
<ul>
  <li><strong>Drain pump and filter.</strong> Coins, hair clips and lint jam the pump, and pumps wear out with age. The machine stops with water in the drum. See <a href="/problems/washing-machine-not-draining/">why a washing machine won't drain</a>.</li>
  <li><strong>Door lock.</strong> The machine won't start because it can't confirm the door is locked, or the door stays locked after the cycle. Our guide to a <a href="/problems/washing-machine-door-wont-open/">washing machine door that won't open</a> explains what is safe to try.</li>
  <li><strong>Door seal.</strong> The rubber seal traps fluff and grows mould in its folds, and a split seal leaks at the front.</li>
  <li><strong>Motor and carbon brushes.</strong> Where the motor uses carbon brushes, worn brushes make the drum turn weakly or stop on spin.</li>
  <li><strong>Drum bearings.</strong> A rumble that grows louder as the spin speeds up. See <a href="/blog/signs-washing-machine-bearings-are-worn/">signs your washing machine bearings are worn</a>.</li>
  <li><strong>Heating.</strong> A failed element or temperature sensor leaves every wash cold, and scale building up on the element doesn't help.</li>
  <li><strong>Control board.</strong> Power surges, often when the electricity comes back after load shedding, can damage the electronics.</li>
</ul>
<p>Our page on <a href="/services/front-loader-repairs/">repairing front loaders</a> explains how these jobs are done.</p>
<h3>Top loaders</h3>
<p>Defy top loaders, with model numbers that usually start with DTL, come in large capacities and take a lot of strain from heavy family loads:</p>
<ul>
  <li><strong>Lid switch or lid lock.</strong> The machine fills and washes but won't spin, because it can't confirm the lid is shut. See <a href="/problems/washing-machine-not-spinning/">why a machine won't spin</a>.</li>
  <li><strong>Drive faults.</strong> The motor hums or runs but nothing turns in the tub. The link between the motor and the tub has usually worn: a belt, coupling or clutch, depending on the model.</li>
  <li><strong>Suspension.</strong> Worn suspension rods let the tub swing and knock against the cabinet on spin.</li>
  <li><strong>Inlet valve.</strong> No water, a slow fill or a machine that won't stop filling. See <a href="/problems/washing-machine-not-filling-with-water/">why a washing machine won't fill</a>.</li>
</ul>
<p>Our page on <a href="/services/top-loader-repairs/">repairing top loaders</a> covers these faults in more detail.</p>
<h3>Twin tubs</h3>
<p>A twin tub, which Defy sells with model numbers starting DTT, has a wash tub, a separate spin tub and simple controls: a wash timer, a spin timer and a drain selector. Typical repairs are a wash motor or belt that no longer turns the wash plate, a spin motor that hums without turning, worn timers, and a spin lid switch or brake that has stopped working. If the spin tub keeps turning after you lift the lid, stop using it and call us: that safety stop is there to protect your hands.</p>

<h2>Safe checks before you book</h2>
<p>Some stoppages have simple causes. Keep to these checks, and leave anything electrical or anything inside the machine to a technician:</p>
<ul class="checklist">
  <li><strong>Power:</strong> the plug is in and switched on at the wall, and the house has power. A lamp plugged into the same socket shows whether the plug point is working.</li>
  <li><strong>Water:</strong> the tap is fully open and the inlet hose isn't kinked or squashed behind the machine.</li>
  <li><strong>Drain hose:</strong> it isn't kinked, and it isn't pushed deep into the standpipe. The manual for Defy's DTL148 top loader, for example, asks for a drain hose height of 65 to 100 cm, with no more than 15 cm of hose inside the drain.</li>
  <li><strong>Load:</strong> the drum isn't packed tight, and you're not spinning one heavy item, like a bath mat, on its own.</li>
  <li><strong>Level:</strong> the machine stands firmly on all four feet and doesn't rock.</li>
</ul>
<p>On a front loader you can also clean the pump filter behind the small flap at the bottom front. The manual for Defy's DAW381 front loader, for example, suggests doing it every three months, or whenever it blocks.</p>
<div class="callout callout-safety"><p><strong>Safety first:</strong> switch off at the wall and unplug the machine before you open the filter flap. Defy warns that the water inside can reach 90°C on a hot wash, so let it cool first, put towels down and drain it through the small emergency hose into a shallow container before you unscrew the filter.</p></div>

<h2>Defy error codes and flashing lights</h2>
<p>Defy has sold many ranges over the years, and their fault signals differ: some show a code, others flash a pattern of lights, and some simply stop. A code points to the system with the problem, such as the water supply, the drain or the door lock, rather than to the exact part.</p>
<p>Our <a href="${errorCodeUrl('defy')}">Defy washing machine error codes</a> guide lists the codes Defy machines commonly show and what to check first for each one. If yours isn't listed, photograph the display (or take a short video of the flashing lights) and send it to us on WhatsApp with the model number.</p>

<h2>What the technician checks</h2>
<p>The technician starts with the simple things: whether the machine stands level, the drain hose sits at the right height, the tap is open and the right programme was chosen. Then come the parts the symptoms point to. On a front loader that can mean the pump, the door lock and the heating circuit, plus a feel for play in the drum that gives away worn bearings; on a top loader, the lid switch, the drive and the suspension.</p>
<p>Testing first matters because several faults look alike. A machine that won't spin might have worn motor brushes, a failed lid switch, undrained water or simply a lopsided load, and each needs a different fix. You get the quote once the cause is clear.</p>

<h2>Quote, call-out fee and warranty</h2>
<p>You get a quote before any work starts, and you decide whether to go ahead. The call-out fee is ${f.calloutFee}, ${f.calloutCondition}. Every repair carries our ${f.warranty} warranty on parts and labour.</p>

<h2>Repair or replace your Defy?</h2>
<p>Most Defy faults are worth repairing. Pumps, door locks, lid switches, inlet valves, carbon brushes and heating elements cost a fraction of a new machine. The decision gets harder when:</p>
<ul>
  <li>a front loader needs bearings and the tub is a sealed unit, so the whole tub has to be replaced;</li>
  <li>the outer tub is cracked, or the cabinet of a top loader has rusted through;</li>
  <li>the control board has failed on a machine that is already old, and the board alone costs a large part of a new machine; or</li>
  <li>parts for a very old model are no longer made.</li>
</ul>
<p>The technician will tell you plainly if a repair doesn't make sense. Our guide to <a href="/repair-or-replace/">repairing or replacing a washing machine</a> walks through the decision, and the <a href="/washing-machine-repair-cost/">washing machine repair cost</a> page explains what drives the cost of a job.</p>

<h2>Keeping your Defy running well</h2>
<ul>
  <li><strong>Use the right powder.</strong> Use washing powder or liquid made for automatic machines, not hand-wash powder, which makes far too much foam. Measure it: more detergent doesn't mean cleaner clothes.</li>
  <li><strong>Run the drum clean programme.</strong> The DAW381 manual suggests running the empty Drum Clean programme every one to two months. On a top loader, run an empty hot wash now and then.</li>
  <li><strong>Let it dry out.</strong> Leave the door and the detergent drawer slightly open after a wash, unless small children or pets can get into the laundry, and wipe the folds of the door seal every couple of weeks.</li>
  <li><strong>Rinse the drawer.</strong> Defy suggests cleaning the detergent drawer every four to five washes, before old powder hardens in it.</li>
  <li><strong>Empty pockets.</strong> Check them before every wash, and put underwired bras in a wash bag.</li>
  <li><strong>Protect it from surges.</strong> Switch the machine off at the wall during load shedding and wait for the power to settle before you start it again. See <a href="/blog/protect-washing-machine-from-load-shedding/">how to protect your washing machine from load shedding</a>.</li>
</ul>
<p>If you'd like an older Defy looked over before something fails, see <a href="/services/washing-machine-servicing/">washing machine servicing</a>.</p>

<h2>Areas and booking</h2>
<p>We repair Defy washing machines across ${areaLinks()}, in houses, flats and townhouses alike. If you're just outside those areas, call and ask.</p>
<p>Call or WhatsApp ${site.phone.display} to book, or <a href="/contact/">send a Defy repair request online</a>. Tell us the model number, what the machine is doing and any code or lights on the display; a short video of the fault helps the technician come prepared.</p>
${indie('Defy')}`,
    faqs: [
      { q: `Do you repair older Defy models like the Automaid and Maximaid?`, a: `Yes, as long as the parts are still available. Older Defy machines are often simple to work on, and a new pump, door lock or set of brushes can keep one going for years. The technician checks that the parts can be found before quoting.` },
      { q: `Can you fix a Defy twin tub?`, a: `Yes. We repair Defy twin tubs at your home, including the wash and spin motors, belts, timers, the drain selector and the spin lid switch. A twin tub has few parts, so a fault is usually quick to trace to one of them.` },
      { q: `My new Defy front loader shakes violently on its first spin. What is wrong?`, a: `On a new machine, the first thing to rule out is the transit bolts at the back. Defy warns that the machine will be damaged if they are not removed before it is used. Stop the machine, switch off at the wall and check with whoever installed it, or ask us to check the installation.` },
      { q: `Where do I find the model number on my Defy?`, a: `On front loaders it is on the label inside the door. On top loaders and twin tubs, look for the label on the cabinet; the user manual shows where. Write the whole number down, or photograph the label, and send it when you book.` },
      { q: `My Defy trips the earth leakage. Can I keep using it?`, a: `No. An earth leakage or breaker that trips when the machine runs can point to a dangerous fault, for example in the heating element, the wiring or a part that water has reached. Leave the machine switched off at the wall and book a technician to test it.` },
      { q: `Are parts for Defy washing machines easy to get?`, a: `For many current and recent models, wear parts such as pumps, door locks and valves are widely available locally. Parts for very old models can be harder to find, and some are no longer made. The technician confirms the part before you agree to the repair.` },
    ],
  },

  // ───────────────────────────── LG ─────────────────────────────
  {
    slug: 'lg',
    brand: 'LG',
    name: 'LG',
    hasErrorGuide: true,
    title: 'LG Washing Machine Repairs | ProServ',
    description: `LG washing machine repairs for direct drive front loaders, top loaders and washer-dryers, done at home. Quote before work starts. Call ${site.phone.display}.`,
    h1: 'LG washing machine repairs',
    primaryKeyword: 'LG washing machine repairs',
    summary: 'Direct drive front loaders, top loaders and washer-dryers.',
    intro: `<p>Has your LG stopped draining or spinning, or started to rumble on the spin? We carry out LG washing machine repairs at your home in Gauteng, on Inverter Direct Drive front loaders, top loaders and washer-dryers: the technician finds the fault on site and quotes before any work starts.</p>`,
    body: `
<h2>How LG washing machines are built</h2>
<p>Most LG front loaders use LG's Inverter Direct Drive motor. Instead of a belt and pulley, the motor is built onto the back of the tub and turns the drum shaft directly. It has two main parts: the rotor, a round magnetised housing fixed to the drum shaft, and the stator, a ring of wire windings that sits inside it. A small sensor tells the control board where the rotor is and how fast it is turning, so the board can control the drum precisely.</p>
<p>With no drive belt to slip and no carbon brushes to wear, a direct drive motor has fewer parts that wear out, which is one reason these machines run quietly. Many LG top loaders use a Smart Inverter motor, while AI DD top loaders are direct drive, like the front loaders. AI DD machines choose a wash pattern to suit the fabrics in the drum.</p>
<p>We repair LG front loaders, top loaders and washer-dryers as part of our <a href="/">washing machine repairs</a> service across Gauteng.</p>

<h2>Signs your LG needs a technician</h2>
<ul>
  <li><strong>Not spinning:</strong> the drum turns slowly, rocks back and forth, or the cycle ends before the spin. See <a href="/problems/washing-machine-not-spinning/">washing machine not spinning</a>.</li>
  <li><strong>Won't drain:</strong> water left in the drum, often with a drain code on the display.</li>
  <li><strong>Very noisy:</strong> knocking, rumbling or grinding on spin. Our guide to a <a href="/problems/washing-machine-noisy-when-spinning/">washing machine that's noisy when spinning</a> explains the usual causes.</li>
  <li><strong>Won't start:</strong> no response from the controls, or the door locks and then nothing happens.</li>
  <li><strong>Leaking, smelling or not drying:</strong> water on the floor, a musty drum, or a washer-dryer that leaves clothes damp.</li>
</ul>

<h2>LG faults we repair</h2>
<h3>Drain and water supply faults</h3>
<p>If an LG can't empty the drum in time, it stops and shows a drain code. The usual causes are a blocked pump filter, a kinked or blocked drain hose, or a worn drain pump. If it can't fill in time, it shows a water inlet code instead: the tap may be partly closed, the water pressure low, the small mesh filter where the inlet hose meets the machine blocked, or the inlet valve faulty. Low pressure during a water supply interruption can set it off too. Our guides to a <a href="/problems/washing-machine-not-draining/">machine that won't drain</a> and a <a href="/problems/washing-machine-not-filling-with-water/">machine that won't fill</a> cover the safe checks for each.</p>
<h3>Balance problems</h3>
<p>An unbalanced load code is most often the load itself: one heavy item, a very small load, or a machine that rocks because it isn't level. Worn shock absorbers, which steady the tub on spin, can cause it too, and so can a load of jeans or towels bunched on one side of the drum.</p>
<h3>Door faults</h3>
<p>A door code means the machine can't confirm the door is closed and locked. Sometimes a sock is caught in the gasket; otherwise the door lock, or the catch on the door, needs replacing. Don't force a locked door: our page on a <a href="/problems/washing-machine-door-wont-open/">washing machine door that won't open</a> explains why.</p>
<h3>Bearings and noise</h3>
<p>A deep rumble that rises with the spin speed usually means worn drum bearings, while a scrape or tick on every turn of the drum can be something caught between the drum and the tub, such as a bra wire. Our article on the <a href="/blog/signs-washing-machine-bearings-are-worn/">signs your washing machine bearings are worn</a> explains what to listen for.</p>
<h3>Washer-dryer drying faults</h3>
<p>If an LG washer-dryer washes well but won't dry, the drying heater, the fan, the condenser or a temperature sensor is usually involved. See <a href="/services/washer-dryer-repairs/">washer-dryer drying faults</a>.</p>

<h2>Testing a direct drive motor</h2>
<p>Because a direct drive motor has no belt or brushes, its faults show up differently: the drum turns jerkily or slowly, hums without turning, or the machine stops with a motor or balance code. Before replacing anything, the technician rules out the simple things that cause the same symptoms (the load, the drain and the level of the machine). Then the rotor is checked for damage, the stator windings are tested, and the rotor position sensor and its wiring are checked.</p>
<p>Often the cause turns out to be something small, such as a loose connector or a damaged wire, so testing before replacing saves you money. Stators and sensors are electrical parts, and they are only tested and replaced by a technician. For more on these repairs, see how we handle <a href="/services/front-loader-repairs/">front loader faults</a> and <a href="/services/top-loader-repairs/">top loader faults</a>.</p>

<h2>LG error codes in brief</h2>
<p>LG codes are short letter pairs that point to a system rather than a part: OE for draining, IE for the water supply, UE for an unbalanced load and dE for the door, among others. Our <a href="${errorCodeUrl('lg')}">LG washing machine error codes</a> guide lists the common ones with the safe checks for each. If a code comes back after you've done those checks, the fault needs a technician.</p>

<h2>Quick checks before you call</h2>
<p>Some LG stoppages have simple causes. Before you book, check that:</p>
<ul class="checklist">
  <li>the house has power and the plug point works (unplug the machine and try a lamp in the socket);</li>
  <li>the tap is fully open and the inlet hose isn't kinked behind the machine;</li>
  <li>the drain hose isn't squashed or pushed deep into the standpipe;</li>
  <li>the child lock is off (many LG models show CL while it's on);</li>
  <li>the load is a sensible size, with no single heavy item washed on its own; and</li>
  <li>the machine stands level and doesn't rock when you press on its top corners.</li>
</ul>
<p>If the earth leakage trips, or you smell burning, skip the checks: leave the machine switched off at the wall and book a technician.</p>

<h2>Is an LG worth repairing?</h2>
<p>Usually, yes. Pumps, door locks, inlet valves, sensors and shock absorbers are single parts that cost far less than a new machine, and most are replaced on the spot when the part is available. The decision gets harder on an older LG that needs a new tub or a main control board, because either can cost a large share of a new washer. The technician tells you plainly when that's the case. Our pages on <a href="/repair-or-replace/">whether to repair or replace</a> and <a href="/washing-machine-repair-cost/">how a repair is priced</a> explain what to weigh up.</p>

<h2>Looking after an LG</h2>
<ul>
  <li><strong>Run Tub Clean.</strong> LG suggests running the Tub Clean programme about every 30 washes, and many models remind you on the display when it's due. Run it with the drum empty, and if you add a washing machine cleaner, use an oxygen-based one, not a chlorine-based or acidic cleaner.</li>
  <li><strong>Use low-suds detergent.</strong> Front loaders need detergent made for automatic machines. Too much foam leaves residue and can stop the machine rinsing properly.</li>
  <li><strong>Clean the drain pump filter.</strong> On many LG front loaders it is behind a small cover at the bottom front, with a drain tube beside it. Switch off at the wall and unplug first, put a tray and towels down, and expect water.</li>
  <li><strong>Dry the gasket.</strong> Wipe the door gasket after washing and leave the door ajar so the drum can dry, keeping the laundry door shut if young children or pets are about.</li>
  <li><strong>Keep loads balanced.</strong> Mix big and small items rather than washing a single heavy item on its own.</li>
</ul>

<h2>Areas and booking</h2>
<p>We repair LG washing machines across ${areaLinks()}. Every repair is done at your home, so there's no need to move a heavy machine anywhere.</p>
<p>Call or WhatsApp ${site.phone.display}, or <a href="/contact/">book an LG repair online</a>. Send the model number from the label on the machine, a photo of any code on the display, and a few words on what it's doing. That's usually enough for the technician to know what to look at first.</p>
${indie('LG')}`,
    faqs: [
      { q: `Is the motor on my LG still under warranty?`, a: `It may be. LG South Africa advertises a 10-year warranty on the motor in its washing machines. If your LG is within that period and the fault looks like the motor, check your proof of purchase and the terms for your model, and contact LG before booking a repair.` },
      { q: `Do you repair LG top loaders?`, a: `Yes. We repair LG top loaders, including Smart Inverter models, for faults such as lid lock problems, drain pumps, inlet valves and balance issues. The visit works the same way as for a front loader: diagnosis first, then a quote.` },
      { q: `Can the bearings be replaced on a direct drive LG?`, a: `On many models, yes. The rotor and stator come off first, then the tub is stripped to reach the bearings and seal. Where the bearings are part of a sealed tub, the whole tub has to be replaced, and we'll tell you if that makes the repair uneconomical.` },
      { q: `Should I keep using my LG if it knocks loudly on spin?`, a: `No. Stop the programme and switch off at the wall. A loud knock can be a loose or broken part, a worn bearing or something trapped between the drum and the tub, and carrying on can turn a small repair into a big one.` },
      { q: `Can you repair an LG that I control with the ThinQ app?`, a: `Yes. App control doesn't change how the machine fills, washes, drains or spins, so the repairs are the same as on any LG. If the app has shown a fault notification, send us a screenshot with the model number when you book.` },
      { q: `Why does my LG wash take longer than the time it showed at the start?`, a: `Many LG programmes sense the load and adjust the time once the wash is under way, and the machine adds time if it has to rebalance the load before spinning. A cycle that runs a little longer is normal. If the time stops counting down altogether, or the machine never reaches the spin, book a technician.` },
    ],
  },

  // ───────────────────────────── Samsung ─────────────────────────────
  {
    slug: 'samsung',
    brand: 'Samsung',
    name: 'Samsung',
    hasErrorGuide: true,
    title: 'Samsung Washing Machine Repairs | ProServ',
    description: `Samsung washing machine repairs for front loaders, top loaders and washer-dryers, fixed at home in Gauteng. Quote first. Call ${site.phone.display}.`,
    h1: 'Samsung washing machine repairs',
    primaryKeyword: 'Samsung washing machine repairs',
    summary: 'Front loaders, top loaders and washer-dryers, including inverter models.',
    intro: `<p>When a Samsung front loader, top loader or washer-dryer won't fill, drain, lock or spin, a technician comes to your home. Our Samsung washing machine repairs in Gauteng cover water and drain faults, door locks, bearings and boards, and you get a quote before any work starts.</p>`,
    body: `
<h2>Samsung machines and their features</h2>
<p>Samsung builds front loaders, top loaders and washer-dryers in a wide range of sizes, and many of them share the same core technology. The Digital Inverter motor drives the drum on many models. EcoBubble models mix the detergent with air and water before it reaches the clothes, which Samsung says helps it clean at lower temperatures. AddWash front loaders have a small second door for adding a forgotten item mid-cycle, and newer models add AI wash programmes and app control.</p>
<p>All of that runs on sensors and a control board, so a Samsung that stops usually does so on purpose: it has detected something it can't deal with, such as water that won't drain or a load it can't balance, and it shows a code to say so. Finding the reason behind that code is the heart of every Samsung repair, and it's part of our <a href="/">washing machine repairs</a> service across Gauteng.</p>

<h2>When to call about your Samsung</h2>
<p>Book a technician if your Samsung:</p>
<ul>
  <li>won't spin, or stops before the final spin;</li>
  <li>won't drain, or drains so slowly that it stops with a code;</li>
  <li>won't work at all, or switches itself off part-way through a cycle;</li>
  <li>leaks onto the floor (see <a href="/problems/washing-machine-leaking/">why a washing machine leaks</a>);</li>
  <li>bangs, rumbles or squeals on spin;</li>
  <li>keeps the door locked, or says the door is open when it's shut;</li>
  <li>fills with foam or leaves detergent behind in the drawer; or</li>
  <li>washes properly but, as a washer-dryer, leaves the clothes damp.</li>
</ul>

<h2>Samsung faults we repair</h2>
<h3>Water supply and draining</h3>
<p>A Samsung that can't fill in time stops with a water supply code, and one that can't empty in time stops with a drain code. Fill faults usually come back to the tap, low pressure, a blocked mesh filter where the hose meets the machine, or the inlet valve. Drain faults are usually the debris filter at the bottom front, the drain hose or the drain pump. See our guides to <a href="/problems/washing-machine-not-draining/">drain problems</a> and <a href="/problems/washing-machine-not-filling-with-water/">fill problems</a>.</p>
<h3>Balance, spin and bearings</h3>
<p>A Samsung checks the balance of the load before it spins and won't speed up if the drum is lopsided. A single heavy item, a very small load or a machine that rocks on uneven feet are the usual reasons. When the load isn't the problem, worn shock absorbers, a motor sensor or worn drum bearings (a rumble that grows with speed) are next on the list. Our guides to a <a href="/problems/washing-machine-not-spinning/">machine that won't spin</a> and a <a href="/problems/washing-machine-noisy-when-spinning/">rumbling or banging spin</a> explain what to rule out first.</p>
<h3>Door locks</h3>
<p>The door lock has to confirm the door is shut and locked before the machine will fill, and it keeps the door shut until the drum is empty and safe to open. A lock that fails can stop the machine starting, or leave the door locked when the programme has finished. Don't force a locked door: see <a href="/problems/washing-machine-door-wont-open/">washing machine door won't open</a>.</p>
<h3>Leaks</h3>
<p>Water on the floor usually comes from a split or dirty door seal, a loose hose connection, a leaking drain pump or a detergent drawer that overflows, often because of too much foam. Note where the puddle appears and at which stage of the wash, because that tells the technician where to start looking.</p>
<h3>Foam and detergent problems</h3>
<p>If the drum fills with foam, the machine may pause, add rinses or show a suds code. It's almost always the detergent: too much of it, or hand-wash powder in an automatic machine. Use less detergent of a kind made for front loaders, and let the machine finish or run a rinse.</p>
<h3>Heating and electronics</h3>
<p>Cold washes point to the heating element or its temperature sensor. A dead or erratic control panel can be a board damaged by a power surge, but a fault elsewhere can look the same, so the technician tests before replacing a board.</p>

<h2>Samsung codes in general terms</h2>
<p>Samsung codes pair a number or letter with C or E. Depending on the model, a Samsung shows 4C or 4E for the water supply and 5C or 5E for draining, and Samsung gives both forms the same meaning. Other common codes cover an unbalanced load (UB) and the door (dC). The code tells you which system to look at, not which part has failed. Our <a href="${errorCodeUrl('samsung')}">Samsung washing machine error codes</a> guide covers the common codes and the safe checks for each.</p>

<h2>Samsung top loaders and washer-dryers</h2>
<p>Samsung top loaders fill from above and wash with a low wash plate in the bottom of the drum rather than a tall agitator. Their typical faults are lid lock problems, drain faults and balance trouble, and on heavily used machines the suspension rods wear and let the tub knock on spin. See <a href="/services/top-loader-repairs/">our top loader page</a>.</p>
<p>Samsung washer-dryers are front loaders with a drying system built in. When they stop drying, the drying heater, the fan or a blocked condenser is usually the cause, and the washing side is usually unaffected. We repair both halves, and our page on <a href="/services/washer-dryer-repairs/">how we repair washer-dryers</a> covers the drying side in more detail.</p>

<h2>Looking after a Samsung</h2>
<ul>
  <li><strong>Drum Clean:</strong> many Samsung front loaders flash a reminder to run Eco Drum Clean every 40 washes. Run it with the drum empty.</li>
  <li><strong>Debris filter:</strong> Samsung advises cleaning the filter at the bottom front five or six times a year. Switch off at the wall and unplug first, then drain the water through the emergency hose into a container before you unscrew the filter.</li>
  <li><strong>Detergent drawer:</strong> pull it out using the release lever and rinse it under running water with a soft brush.</li>
  <li><strong>Door and seal:</strong> wipe the seal and leave the door ajar after washing so the drum can dry; with small children or pets in the house, close the laundry door as well.</li>
  <li><strong>Power:</strong> switch off at the wall during load shedding, and wait for the power to settle before you start a wash. Our article on <a href="/blog/protect-washing-machine-from-load-shedding/">protecting your washing machine from load shedding</a> covers the rest.</li>
</ul>

<h2>Checks you can do first</h2>
<p>Switch the machine off at the wall before you check anything, then work through this list:</p>
<ul class="checklist">
  <li><strong>Power:</strong> the house has electricity and the plug point works. Unplug the machine and try a lamp in the socket.</li>
  <li><strong>Child lock:</strong> it isn't switched on. Your manual shows which buttons to hold to turn it off.</li>
  <li><strong>Water in:</strong> the tap is fully open and the hose behind the machine isn't kinked.</li>
  <li><strong>Water out:</strong> the drain hose isn't squashed, and the debris filter has been cleaned, with the machine unplugged and towels and a container ready for the water.</li>
  <li><strong>Load:</strong> the drum isn't packed tight, and bulky items go in with a few smaller ones.</li>
</ul>
<div class="callout callout-safety"><p><strong>Safety first:</strong> if the earth leakage trips, the machine sparks or you smell burning, don't switch it on again. Leave it off at the wall and book a technician. Never open the cabinet or the control panel to look for the fault yourself.</p></div>

<h2>Is a Samsung worth repairing?</h2>
<p>For most faults, yes. A drain pump, inlet valve, door lock, shock absorber or heating element is a single part, and replacing it costs far less than buying a new machine of the same size. It's a closer call when an older machine needs drum bearings, which means stripping it down to the tub, or when a control board fails on a machine that has already done years of service. The technician compares the repair with replacement and tells you plainly which makes sense; our page on <a href="/repair-or-replace/">repairing versus replacing</a> sets out the same reasoning, and our <a href="/services/front-loader-repairs/">front loader page</a> explains how the bigger jobs are done.</p>

<h2>Areas and booking</h2>
<p>We repair Samsung washing machines across ${areaLinks()}, and every repair is done at your home.</p>
<p>To book, call or WhatsApp ${site.phone.display} or send the details through our <a href="/contact/">contact page</a>. Include the model number and a photo of any code on the display, and we'll arrange a technician.</p>
${indie('Samsung')}`,
    faqs: [
      { q: `Is the motor on my Samsung covered by a 20-year warranty?`, a: `It may be. Samsung South Africa extended the warranty on the Digital Inverter motor in selected washing machines to 20 years from 1 November 2022, with terms and conditions. Check your proof of purchase and contact Samsung first if the fault looks like the motor.` },
      { q: `My Samsung says the door is open but it is closed. What should I check?`, a: `Open the door and check that no clothing is caught between the door and the seal, then close it firmly until it clicks. If the machine still won't accept the door, the door lock or the catch on the door is likely to be faulty and needs a technician.` },
      { q: `Where is the model number on my Samsung?`, a: `On a front loader it is printed around the door opening or on the back of the machine. On a top loader it is on the back. Take a photo of the label and send it with your booking.` },
      { q: `Do you repair Samsung top loaders as well as front loaders?`, a: `Yes. We repair Samsung top loaders, front loaders and washer-dryers at your home, including lid locks, drain pumps, inlet valves, suspension and control faults.` },
      { q: `My Samsung display is dead after a power cut. What should I do?`, a: `Switch off at the wall, check the plug point with a lamp and make sure the power is back and stable, then try again. If the display stays dead, a surge may have damaged the board or its power supply, which needs a technician to test.` },
      { q: `How long does a Samsung repair take?`, a: `Most single-part repairs, such as a drain pump, door lock or inlet valve, are finished on the same visit when the part is available. Bearing work takes longer, because the machine has to be stripped down to the tub. If the part needs ordering, you'll know before you approve the repair, so you can decide whether to wait for it.` },
    ],
  },

  // ───────────────────────────── Bosch ─────────────────────────────
  {
    slug: 'bosch',
    brand: 'Bosch',
    name: 'Bosch',
    hasErrorGuide: true,
    title: 'Bosch Washing Machine Repairs | ProServ',
    description: `Bosch washing machine repairs at home: drain and fill faults, AquaStop leaks, bearings, door locks and boards. Quote first. Call ${site.phone.display}.`,
    h1: 'Bosch washing machine repairs',
    primaryKeyword: 'Bosch washing machine repairs',
    summary: 'Freestanding and integrated front loaders and washer-dryers.',
    intro: `<p>If your Bosch won't fill or drain, leaks, or roars on the spin, the technician finds the cause at your home. Our Bosch washing machine repairs cover freestanding and integrated front loaders and washer-dryers across Gauteng, from drain, fill and leak faults to bearings and boards, with a quote before any work starts.</p>`,
    body: `
<h2>Bosch machines and their technology</h2>
<p>Bosch washing machines are made by BSH Hausgeräte, the home appliance company owned by the Bosch group. BSH also makes Siemens-branded machines on related platforms, which is why the two brands have so much in common (see <a href="${brandUrl('siemens')}">Siemens washing machine repairs</a>). Bosch sells its machines in ranges such as Series 4, Series 6 and Series 8, mostly as front loaders, either freestanding or built in behind a kitchen cabinet door, along with washer-dryers.</p>
<p>A few Bosch features matter when something goes wrong:</p>
<ul>
  <li><strong>EcoSilence Drive:</strong> a brushless motor, used on many newer models and designed to run quietly and efficiently.</li>
  <li><strong>AquaStop:</strong> leak protection built into the inlet hose and the base of the machine. When it detects a leak, it stops the water supply and the machine shows a fault. The safety valve sits in the housing at the tap end of the hose, so a damaged AquaStop hose is replaced as a complete unit rather than cut or patched.</li>
  <li><strong>ActiveWater:</strong> load sensing that adjusts the water to the size of the load, so a small load uses noticeably less water than a full one.</li>
  <li><strong>i-DOS:</strong> automatic dosing from built-in tanks on some models, designed for liquid detergent and fabric conditioner.</li>
</ul>
<p>Bosch machines are well made, but they share the wear parts every front loader has. The sections below explain what usually lies behind the problems you're most likely to notice.</p>

<h2>Common Bosch faults and causes</h2>
<h3>Not filling with water</h3>
<p>The tap may be partly closed, the water pressure low, or the inlet hose kinked or its filter blocked. If the AquaStop valve or the inlet valve has failed, no water gets in at all. Many models show a water supply code, such as E17, which shows as F17 on some models. See <a href="/problems/washing-machine-not-filling-with-water/">water supply faults</a>.</p>
<h3>Not draining</h3>
<p>Fluff, coins and hair clips collect in the pump filter behind the service flap at the bottom front, and that filter is the first thing to check when water stays in the drum. A kinked drain hose, a blocked household drain or a worn pump are the other usual causes. Many models show E18 for a drain fault, and Bosch says F18 and d02 are the same fault; machines that use longer codes show E:30-80 or a code starting E:36 instead. See <a href="/problems/washing-machine-not-draining/">what to check when a machine won't drain</a>.</p>
<h3>Stopping mid-cycle</h3>
<p>A Bosch that stops part-way through has usually detected something it doesn't like: water that won't drain, a door that won't stay locked, a load it can't balance, a heater that isn't warming the water, or a motor that isn't turning as it should. The display, and the point in the cycle where it stops, help the technician narrow it down.</p>
<h3>Tripping the electricity</h3>
<p>If the earth leakage trips when the machine runs, often as it starts to heat, the heating element, the wiring or water reaching an electrical part may be to blame. Leave it switched off at the wall and don't keep resetting the trip switch: this one is for a technician.</p>
<h3>Leak protection warning and leaks</h3>
<p>A leak protection warning means water has collected in the base of the machine. Resetting may clear the display, but the water came from somewhere: a hose, the pump, the door seal, the detergent drawer or a seal inside the tub. Too much foam can also overflow into the base. The leak has to be found and fixed. See <a href="/problems/washing-machine-leaking/">where washing machine leaks come from</a>.</p>
<h3>Loud on spin, or walking across the floor</h3>
<p>A rumble or roar that rises with the spin speed usually means worn drum bearings. Banging or walking can be worn shock absorbers, an unlevel machine, an unbalanced load or, on a newly installed machine, transit bolts that were never removed. See <a href="/problems/washing-machine-noisy-when-spinning/">what spin noises mean</a>.</p>
<h3>Door locked, or won't lock</h3>
<p>A Bosch keeps its door locked while there's water in the drum or the wash is still hot, so a short wait after the programme ends is normal. If it stays locked long after that, the water may not have drained, or the door lock may have failed. A lock that won't engage stops the machine starting at all. See <a href="/problems/washing-machine-door-wont-open/">washing machine door won't open</a>.</p>
<h3>Water not heating</h3>
<p>Cold washes on a hot programme mean the heating element or its temperature sensor has probably failed. Scale building up on the element over the years shortens its life.</p>
<h3>Won't start</h3>
<p>Check the simple things first: power at the wall, a delayed start setting and the child lock. If the machine still won't start, the door lock, the power supply on the control module or a stored fault may be the reason. See <a href="/problems/washing-machine-wont-turn-on/">washing machine won't turn on</a>.</p>

<h2>Bosch error codes in brief</h2>
<p>Bosch machines with a display show a fault as a code, usually an E followed by two digits (written E:18 on some models), and, depending on the model, the same fault can show with an F, such as F18 for E18. Machines without a full display flash their lights instead. Our <a href="${errorCodeUrl('bosch')}">Bosch washing machine error codes</a> guide explains the common codes and the safe checks for each. If a code returns after those checks, book a technician and send us the code with the E-Nr from the rating plate.</p>

<h2>Safe checks for Bosch owners</h2>
<ul class="checklist">
  <li>The power is on at the wall and the plug point works (test it with a lamp). During load shedding, wait until the power is back and stable.</li>
  <li>The child lock isn't on. Your manual shows which button or buttons to hold to switch it off.</li>
  <li>The tap is fully open, and the AquaStop hose isn't kinked or crushed behind the machine.</li>
  <li>The drain hose isn't kinked and runs to a clear drain.</li>
  <li>The pump filter is clean. It is behind the service flap at the bottom front, and many models have a small emergency drain hose next to it.</li>
  <li>The load is sensible and the machine stands level.</li>
  <li>If the machine was moved recently, the hoses weren't kinked or squashed when it was pushed back into place.</li>
</ul>
<div class="callout callout-safety"><p><strong>Safety first:</strong> switch off at the wall and unplug the machine before you open the service flap, and let the water cool if a hot wash was running. Put down towels and a shallow tray, and expect more water than you'd think. Never open the cabinet, and never tip the machine to clear a leak warning: the leak is still there.</p></div>

<h2>Integrated Bosch machines</h2>
<p>A built-in Bosch sits behind a kitchen cabinet door, with the hoses and plug hidden behind it. To work on it, the technician removes the plinth (the kick board under the cabinets) and slides the machine out carefully, then disconnects the hoses. Once the repair is done, the machine goes back in, the cabinet door is checked for alignment and the hoses are checked for leaks before the plinth goes back on. That takes longer than a freestanding machine, so the extra time is included in the quote. Before the visit, clear the cupboards and floor in front of the machine, and check whether the tap and plug are in the next cupboard, so the technician can reach them.</p>

<h2>Bosch washer-dryers</h2>
<p>A Bosch washer-dryer is a front loader with a drying system added: a heater and a fan blow warm air through the tumbling laundry, and a condenser takes the moisture out of that air. If it washes well but the laundry comes out damp, first check that you're drying no more than the drying capacity in the manual, which is smaller than the washing capacity. If smaller loads are still damp, the heater, the fan, a temperature sensor or lint in the drying path is the usual cause. See our page on <a href="/services/washer-dryer-repairs/">a washer-dryer that won't dry</a>.</p>

<h2>Reading the rating plate</h2>
<p>The rating plate on the inner rim of the door opening carries the E-Nr (the model number) and the FD number, which together identify the exact version of your machine. Bosch has made many generations of similar-looking machines with different parts, so these numbers are how the technician makes sure the right part is quoted. If the label isn't on the door rim, look behind the service flap or on the back of the machine.</p>

<h2>Is a Bosch worth fixing?</h2>
<p>In most cases, yes. A Bosch is a well-built machine, and a pump, door lock, set of carbon brushes, inlet valve or heating element costs far less than a new machine of the same quality. It's a harder call when an older machine needs a control module and bearings at the same time, or when the bearings sit in a tub that has to be replaced as a whole. The technician will tell you honestly if the repair doesn't make sense, and our <a href="/repair-or-replace/">repair or replace advice</a> helps with the decision. For more on what the work involves, see <a href="/services/front-loader-repairs/">how we repair front loaders</a>.</p>

<h2>Looking after your Bosch</h2>
<ul>
  <li>Clean the pump filter every few months, with the machine unplugged, and more often if you wash pet bedding or work clothes.</li>
  <li>Use a measured dose of detergent made for automatic machines. Too much foam can overflow into the base and set off the leak protection.</li>
  <li>If your model has i-DOS, fill the tanks with liquid detergent and fabric conditioner only.</li>
  <li>Run an empty hot wash, or the drum clean programme if your model has one, every month or so.</li>
  <li>Leave the door ajar after washing, as long as no small child or pet can climb in, and wipe the folds of the door seal.</li>
  <li>Switch off at the wall during load shedding, and wait until the power is stable before starting a wash.</li>
</ul>

<h2>Areas and booking</h2>
<p>We repair Bosch washing machines across ${areaLinks()}. All the work happens at your home, which matters with integrated machines that are fitted into the kitchen. Bosch is one of the brands covered by our <a href="/">washing machine repairs</a> service, and you get a quote before any work starts.</p>
<p>To book, call or WhatsApp ${site.phone.display} or use our <a href="/contact/">online booking form</a>. Send the E-Nr and FD numbers from the rating plate (or a photo of the plate), any code on the display and a few words on what the machine is doing.</p>
${indie('Bosch')}`,
    faqs: [
      { q: `Does my Bosch have carbon brushes?`, a: `It depends on the motor. Many newer Bosch machines use the EcoSilence Drive, which works without carbon brushes, while older models use a brushed motor where worn brushes can stop the spin. The technician checks which motor you have before quoting.` },
      { q: `Why do some Bosch programmes take so long?`, a: `Eco programmes save electricity by washing at lower temperatures for longer, so a long programme time is normal. A machine that stops counting down, or never reaches the end of the cycle, is a different matter and needs a technician.` },
      { q: `Can I add a forgotten item after my Bosch has started?`, a: `Many Bosch models let you pause the programme and add laundry, as long as the water level and temperature allow it, and the manual for your model explains how. If the door stays locked when you pause, the machine is protecting you from hot water or a spill. That's a safety feature, not a fault.` },
      { q: `Do I still need to close the tap if my Bosch has AquaStop?`, a: `It's still a sensible habit when you go away for a few days. AquaStop shuts off the water if it detects a leak, but closing the tap takes the pressure off the hose and valve while nobody is home to notice a problem.` },
      { q: `Why does my Bosch fill and drain at the same time?`, a: `Water that runs straight out as it comes in is usually siphoning through the drain hose, because the hose sits too low or is pushed too far into the standpipe. Check that it rises to the height your manual gives before it drops into the drain. If the hose is right and it still happens, the inlet valve or the water level sensor needs a technician.` },
      { q: `Does a Bosch washing machine need regular servicing?`, a: `Washing machines don't usually need a fixed service schedule, but an older Bosch benefits from a check-up that catches worn hoses, a tired door seal or a noisy bearing before they cause a breakdown. Our <a href="/services/washing-machine-servicing/">washing machine servicing</a> page explains what a service covers.` },
    ],
  },

  // ───────────────────────────── Whirlpool ─────────────────────────────
  {
    slug: 'whirlpool',
    brand: 'Whirlpool',
    name: 'Whirlpool',
    hasErrorGuide: false,
    title: 'Whirlpool Washing Machine Repairs | ProServ',
    description: `Whirlpool washing machine repairs for front and top loaders: draining, spinning, leaks and door faults, fixed at home. Call ${site.phone.display}.`,
    h1: 'Whirlpool washing machine repairs',
    primaryKeyword: 'Whirlpool washing machine repairs',
    summary: 'Front loaders, top loaders and washer-dryers, from 6th Sense models to older machines.',
    intro: `<p>A Whirlpool that won't drain, spin or start, or has begun to leak, is diagnosed at your home. Our Whirlpool washing machine repairs cover front loaders, top loaders and washer-dryers across Gauteng, and you get a quote before any work starts.</p>`,
    body: `
<h2>Whirlpool machines we repair</h2>
<p>Whirlpool is an American appliance maker, and you'll find its washing machines in Gauteng homes in many forms, from older top loaders to current front loaders. Recent Whirlpool front loaders sold in South Africa include models with 6th Sense load sensing and the FreshCare+ freshness feature.</p>
<p>We work on all of them: <a href="/services/front-loader-repairs/">front loaders</a> and <a href="/services/top-loader-repairs/">top loaders</a>, belt-driven and direct drive designs, compact machines and washer-dryers, old and new. The model number tells the technician which design yours is, and that decides which parts are involved when something fails.</p>

<h2>Early warning signs</h2>
<p>Apart from a machine that simply won't turn on, most faults give some warning first. Catching them early can save you money:</p>
<ul>
  <li><strong>Slow or incomplete draining:</strong> water left in the drum, or clothes that come out much wetter than usual.</li>
  <li><strong>A weak or missing spin:</strong> the drum turns but never reaches full speed.</li>
  <li><strong>Small leaks:</strong> a damp patch under the machine after each wash.</li>
  <li><strong>New noises:</strong> grinding, squealing or knocking that wasn't there before.</li>
  <li><strong>Washing that isn't clean:</strong> grey, smelly or still soapy laundry.</li>
</ul>
<p>If something doesn't seem right during a wash, stop the programme, switch off at the wall and take the laundry out once the door releases. Running a faulty machine for one more load can turn a small repair into an expensive one.</p>

<h2>Why a Whirlpool won't drain</h2>
<p>Drainage problems have several possible causes, and some are easy to rule out yourself. Start with the drain hose: a kink, a hose pushed too far into the standpipe or a blocked household drain will all stop the water. On a front loader, the next check is the pump filter, where socks, coins and fluff collect.</p>
<p>If those are clear, the fault is inside the machine. On front loaders it is usually the drain pump itself, or a blockage in the sump hose that runs from the drum to the pump. On top loaders, a faulty lid switch can stop the machine before the drain-and-spin stage, and on some older belt-driven top loaders a worn or slipping belt affects the pump as well as the spin. Our page on a <a href="/problems/washing-machine-not-draining/">washing machine that won't drain</a> goes into more detail.</p>

<h2>Whirlpool faults we repair</h2>
<h3>Doors, lids and seals</h3>
<p>A faulty door lock stops a front loader from starting, or keeps the door locked after the wash, while a worn lid switch assembly stops a top loader from spinning. A split or perished door seal leaks at the front of a front loader, and debris trapped in the seal can stop the door closing properly. See <a href="/problems/washing-machine-door-wont-open/">washing machine door won't open</a>.</p>
<h3>Water in and water out</h3>
<p>We replace drain pumps, clear blocked hoses and pump filters (the coin trap on some machines), and fix machines that won't fill because of a failed inlet valve or a blocked inlet filter. A machine that leaks can have a loose hose clamp, a cracked hose, a leaking pump or a worn tub seal. See <a href="/problems/washing-machine-leaking/">how leaks are traced and fixed</a>.</p>
<h3>Drive and spin</h3>
<p>No spin can be a worn drive belt, worn carbon brushes, a failed motor or a control fault, and on top loaders a worn coupling, clutch or gearbox. A machine that doesn't finish its cycle may be stuck waiting for water to drain or for the drum to balance. See <a href="/problems/washing-machine-not-spinning/">a machine that stops before the spin</a>.</p>
<h3>Agitator problems</h3>
<p>On a top loader with a two-part agitator, the top half is driven by small plastic cogs, often called agitator dogs, that wear over time. When they go, the bottom of the agitator still twists but the top half spins freely, and the clothes stop turning over properly. It's a small part and a straightforward repair.</p>
<h3>Noise, vibration and the drum</h3>
<p>Thumping or walking on spin usually comes from worn suspension, worn bearings or a machine that isn't standing level, and a lopsided load makes it worse. Tub and drum problems, such as a loose drum or a broken drum paddle, are repairable too. See <a href="/problems/washing-machine-noisy-when-spinning/">a noisy or shaking machine</a>.</p>

<h2>Two systems: water and electrics</h2>
<p>A washing machine is really two systems working together. The water side brings water in through the hoses and inlet valve, holds it in the tub and pumps it out through the drain hose. The electrical side is the motor, the heating element, the door lock and the control board that runs the programme.</p>
<p>You can safely look at the water side from the outside: the taps, hoses, filters and drain. The electrical side is a technician's job. Some repair guides online suggest taking off the control panel and testing parts with a multimeter, but that means working on mains-powered parts that can give you a serious shock, and it can damage a board that was working. If your checks of the water side don't find the problem, switch off at the wall and call us.</p>

<h2>Safe troubleshooting for Whirlpool owners</h2>
<div class="callout callout-safety"><p><strong>Safety first:</strong> always switch off at the wall and unplug before you check a hose or a filter. If water has reached the plug or socket, or you'd have to stand in water to reach them, leave them alone and switch off at the DB board instead. If the earth leakage or circuit breaker trips when the machine runs, leave it off and call a technician, because it can indicate a dangerous fault.</p></div>
<h3>It won't start</h3>
<p>Check the plug is in and switched on at the wall, that the house has power and that the plug point works (try a lamp in it). Make sure a delayed start or the child lock isn't set, and that the door or lid is properly closed. See <a href="/problems/washing-machine-wont-turn-on/">washing machine won't turn on</a>.</p>
<h3>It won't fill, or fills slowly</h3>
<p>Open the tap fully and check the inlet hose for kinks. If your manual shows how, you can clean the small mesh filter where the hose connects: close the tap first, switch off at the wall, unplug the machine and have a cloth ready for drips. If it still fills slowly, our guide to a <a href="/problems/washing-machine-not-filling-with-water/">machine that won't fill</a> covers the other causes.</p>
<h3>It won't drain</h3>
<p>Straighten the drain hose, check how high it runs and how far it goes into the standpipe, and clean the pump filter as your manual describes, with the machine switched off at the wall and unplugged, towels and a tray down and any hot water left to cool.</p>
<h3>It leaks</h3>
<p>Switch off at the wall first, or at the DB board if the plug or socket is wet or you'd be standing in water. Then check the hose connections at the tap and at the back of the machine, use less detergent if foam is escaping, and look for socks or hair caught in the door seal.</p>
<h3>It won't agitate or spin</h3>
<p>Take out some of the load if the drum is packed, untangle sheets wrapped around the agitator, spread the load evenly and close the lid firmly. If it still won't move, the drive or the lid switch needs a technician.</p>

<h2>Whirlpool error codes</h2>
<p>Whirlpool codes vary a lot between models, ranges and the markets they were made for, so we don't publish one general list. Your user manual lists the codes you can deal with yourself. For anything else, photograph the display and send it with the model number, and see our guide to a <a href="/problems/washing-machine-showing-error-code/">washing machine showing an error code</a> for the safe first steps.</p>

<h2>Quote first, then the repair</h2>
<p>When the technician has found the fault, you get a quote before any work starts, and the choice is yours. If you go ahead, most repairs are done on the same visit when the part is available; if a part has to be ordered, you'll know before you agree. The call-out fee is ${f.calloutFee}, ${f.calloutCondition}, and the repair carries our ${f.warranty} warranty on parts and labour.</p>

<h2>Whirlpool washer-dryers</h2>
<p>A Whirlpool washer-dryer can develop the usual washing faults plus a few of its own on the drying side. If it washes well but leaves the laundry damp, check that you're drying a smaller load than you wash, as the manual sets out, and that the drying programme suits the fabric. If it still won't dry, the drying heater, the fan, a temperature sensor or lint in the drying path needs a technician. See <a href="/services/washer-dryer-repairs/">our washer-dryer page</a>.</p>

<h2>Repair, or install a new machine</h2>
<p>If the repair isn't worth it, for example when the tub is cracked or a part costs nearly as much as a new machine, the technician will say so. If you decide to replace it, we can also install the new machine properly, with the hoses connected, the transit bolts removed and the machine levelled. See <a href="/services/washing-machine-installation/">washing machine installation</a> and our advice on <a href="/repair-or-replace/">when a machine is worth replacing</a>.</p>

<h2>Looking after your Whirlpool</h2>
<ul>
  <li><strong>Run a maintenance wash.</strong> If you mostly wash at low temperatures, run an empty hot wash about once a month to clear residue and keep smells away. Our article on <a href="/blog/why-does-my-washing-machine-smell/">why your washing machine smells</a> explains where they come from.</li>
  <li><strong>Measure the detergent.</strong> A machine that adjusts the water to the load can use very little on a small wash, so a heavy dose of detergent leaves residue and foam behind.</li>
  <li><strong>Clean the filter.</strong> Clear the pump filter on a front loader every few months, as your manual describes, with the machine unplugged first.</li>
  <li><strong>Let it breathe.</strong> Leave the door or lid open after washing so the drum and seal can dry out, and keep the laundry door closed if you have small children or pets.</li>
  <li><strong>Check the hoses.</strong> Look for bulges, cracks or damp patches at the connections now and then.</li>
  <li><strong>Protect the electronics.</strong> Switch off at the wall during load shedding, and wait for the power to settle before you start a wash.</li>
</ul>

<h2>Areas and booking</h2>
<p>We repair Whirlpool washing machines across ${areaLinks()}. Whirlpool is one of the brands covered by our <a href="/">washing machine repairs</a> service, all done at your home.</p>
<p>Phone or WhatsApp ${site.phone.display} to book a technician, or use our <a href="/contact/">contact page</a>. The model number is on a label on the machine, often inside the door rim, under the lid or on the back; send a photo of it with any code on the display.</p>
${indie('Whirlpool')}`,
    faqs: [
      { q: `Why does my Whirlpool drum move after the wash has finished?`, a: `If your machine has FreshCare+, that is the feature at work: it uses steam and gentle movements of the drum to keep the laundry fresh if you can't unload it straight away. If the drum moves on a machine without that feature, or the cycle never ends, book a technician.` },
      { q: `What does 6th Sense mean on a Whirlpool?`, a: `It is Whirlpool's name for sensors that detect how much laundry is in the drum and adjust the water, energy and programme time to suit. It also means water levels and programme times change from load to load, which is normal and not a fault.` },
      { q: `Do you repair older Whirlpool top loaders?`, a: `Yes, as long as parts are still available. Many older Whirlpool top loaders are mechanically simple, and a new lid switch, coupling, belt or pump can keep one going for years.` },
      { q: `My Whirlpool leaves detergent in the drawer. Why?`, a: `The drawer or the siphon in the softener compartment is usually blocked with old detergent, or the water pressure is too low to flush it. Take the drawer out and rinse it, check the tap is fully open and use the right amount of detergent. If it still happens, the inlet valve may not be letting enough water through.` },
      { q: `My Whirlpool shakes and moves across the floor. What should I check?`, a: `Check that the machine is level with all four feet firmly on the floor, and that the load isn't bunched on one side. On a newly installed machine, make sure the transit bolts were removed. If it still shakes, the suspension or bearings need a technician.` },
      { q: `Is my Whirlpool belt-driven or direct drive?`, a: `It depends on the model and its age, and the model number tells the technician which design you have. It matters because the faults differ: a belt-driven machine can slip or break its belt, while many direct drive top loaders link the motor to the gearbox through a coupling that wears out instead.` },
      { q: `What should I do if a hose bursts on my Whirlpool?`, a: `Switch the power off first: at the wall if the plug and socket are dry, or at the DB board, without touching the plug, if they're wet or you'd have to stand in water to reach them. Then close the tap, mop up and look at whether the hose split or came loose at a connection. A split hose has to be replaced, and the technician can fit a new one and check the other hose at the same time.` },
    ],
  },

  // ───────────────────────────── Hisense ─────────────────────────────
  {
    slug: 'hisense',
    brand: 'Hisense',
    name: 'Hisense',
    hasErrorGuide: false,
    title: 'Hisense Washing Machine Repairs | ProServ',
    description: `Hisense washing machine repairs for front loaders, top loaders and twin tubs: drain, spin, door and board faults, fixed at home. Call ${site.phone.display}.`,
    h1: 'Hisense washing machine repairs',
    primaryKeyword: 'Hisense washing machine repairs',
    summary: 'Front loaders, top loaders, twin tubs and washer-dryers.',
    intro: `<p>Whether yours is a front loader, top loader, twin tub or washer-dryer, a Hisense is repaired at your home. For Hisense washing machine repairs in Gauteng, the technician finds out what has failed and quotes before any work starts.</p>`,
    body: `
<h2>The Hisense laundry range</h2>
<p>Hisense is a Chinese electronics and appliance maker with a big presence in South Africa, where it has built TVs and fridges at its factory in Atlantis, in the Western Cape, since 2013. Its laundry range here covers front loaders, top loaders, twin tubs, single tubs and washer-dryers. Many models use inverter technology, and the newer front loaders add features such as steam programmes and automatic detergent dosing. An inverter motor changes speed smoothly under electronic control instead of running at a few fixed speeds, which saves electricity and keeps the machine quieter, but it also means the motor depends on its drive electronics.</p>
<p>The model number tells you a lot about the machine. Hisense front loaders usually have numbers starting with WF, top loaders with WT and twin tubs with WS. It's the first thing the technician needs, because parts differ between models that look alike.</p>
<p>We repair Hisense machines of every type as part of our <a href="/">washing machine repairs</a> service across Gauteng.</p>

<h2>Signs your Hisense needs a repair</h2>
<ul>
  <li>It won't drain, or stops with water in the drum.</li>
  <li>It won't fill, or fills very slowly.</li>
  <li>The drum won't spin, or the machine bangs and walks on spin.</li>
  <li>The door or lid won't lock, or won't open after the cycle.</li>
  <li>It leaks from the door, from underneath or at the hoses.</li>
  <li>The display is dead or behaving strangely after a power cut.</li>
  <li>The automatic dosing has stopped dispensing detergent.</li>
</ul>

<h2>Hisense front loader faults</h2>
<p>Hisense front loaders have the same wear parts as any front loader. The <strong>drain pump</strong> and its filter block with fluff, coins and hair clips (see <a href="/problems/washing-machine-not-draining/">drain blockages</a>). The <strong>door lock</strong> can fail, so the machine won't start or <a href="/problems/washing-machine-door-wont-open/">won't release the door</a>. The <strong>door seal</strong> can split or trap debris and <a href="/problems/washing-machine-leaking/">leak at the front</a>. <strong>Drum bearings</strong> wear and start to rumble on spin, and the <strong>heating element</strong> or temperature sensor can fail and leave washes cold.</p>
<p>On inverter models, the motor and its drive electronics work as a pair, so a spin fault isn't automatically a motor fault. The technician checks the load, the drain and the balance first, then tests the motor and the control board before quoting. See <a href="/services/front-loader-repairs/">front loader faults and fixes</a>.</p>

<h2>Top loader and twin tub faults</h2>
<p>Hisense top loaders are simple to use and carry big loads. When one fills and washes but won't spin, a faulty lid lock or lid switch is a common cause, because the machine won't spin unless it knows the lid is shut. Worn suspension rods let the tub bang against the cabinet, the inlet valve can fail so the machine won't fill, and the drain pump or drain valve can block (see <a href="/services/top-loader-repairs/">how top loaders are repaired</a>). Our guides to a <a href="/problems/washing-machine-not-spinning/">machine that won't spin</a> and a <a href="/problems/washing-machine-not-filling-with-water/">machine that won't fill</a> cover the checks you can safely make first.</p>
<p>On a twin tub, the wash side and the spin side work independently, so one can fail while the other carries on. If the wash side runs but the spin tub doesn't turn, the spin motor, its lid switch or the spin timer is the likely cause. If the spin side works but the wash plate stands still, look to the wash motor, its belt or the wash timer. Twin tubs that work hard also block their lint filter and drain, and the lint filter is easy to clean yourself.</p>

<h2>Hisense error codes</h2>
<p>Hisense codes differ between models, and between front loaders and top loaders, so check the code against the manual for your model number. The manual lists the codes you can deal with yourself, usually water supply, drain, door and balance problems. For anything else, send us a photo of the display and the model number on WhatsApp, and see our guide to a <a href="/problems/washing-machine-showing-error-code/">washing machine showing an error code</a> for the safe first steps.</p>

<h2>Checks to try before you call</h2>
<p>Switch the machine off at the wall first. Then:</p>
<ul class="checklist">
  <li>Make sure the house has power and the plug point works, by plugging a lamp into the socket.</li>
  <li>Open the tap fully and straighten any kinks in the inlet hose.</li>
  <li>Check that the drain hose isn't squashed behind the machine or pushed too far into the standpipe.</li>
  <li>On a front loader, unplug the machine and clean the drain filter as your manual describes, with towels and a tray ready for the water, and let it cool first if the last wash was hot.</li>
  <li>On a top loader or twin tub, take out part of the load if the tub is packed, and spread the rest evenly.</li>
  <li>Close the door or lid firmly, and check that the child lock and the delay timer aren't set.</li>
</ul>
<p>If the machine trips the earth leakage, sparks or smells of burning, leave it off at the wall instead and call a technician, because those signs can point to a dangerous electrical fault.</p>

<h2>Parts for Hisense machines</h2>
<p>Wear parts such as drain pumps, inlet valves and door locks are generally easier to get than parts that belong to one model, such as a control board or display panel, which sometimes have to be ordered. If the part isn't available on the day, the technician tells you before you agree to the repair, so you can decide with the full picture. Our <a href="/services/washing-machine-parts-replacement/">washing machine parts replacement</a> page explains how parts are matched to your machine.</p>

<h2>Repair or replace your Hisense?</h2>
<p>It's always worth comparing a big repair with the cost of a new machine of the same size and type. A pump, valve, door lock or lid switch is almost always worth fixing. A control board on an older machine, or bearings on a machine with a sealed tub, can cost a large share of a new one, and the technician will tell you honestly if replacing makes more sense. Our guide to <a href="/repair-or-replace/">whether a repair is worth it</a> and the <a href="/washing-machine-repair-cost/">repair cost page</a> explain the numbers.</p>

<h2>Care tips for Hisense owners</h2>
<ul>
  <li>With the machine unplugged, clean the drain filter on front loaders, and the lint filter on top loaders and twin tubs, regularly.</li>
  <li>Use detergent made for automatic machines in front loaders and top loaders; hand-wash powder foams far too much.</li>
  <li>Don't overload big top loaders. A packed tub can't move the clothes, and the load can't balance for the spin.</li>
  <li>Stand the machine on a firm, level floor, and adjust the feet so it doesn't rock or walk on spin.</li>
  <li>Switch off at the wall during load shedding. If the display is dead when the power returns, check the plug point with a lamp before calling. Our article on <a href="/blog/protect-washing-machine-from-load-shedding/">protecting your machine from load shedding</a> explains how to reduce the risk.</li>
</ul>

<h2>Areas and booking</h2>
<p>We repair Hisense washing machines across ${areaLinks()}. The technician comes to your home, so there's no need to move the machine.</p>
<p>Book by calling or WhatsApping ${site.phone.display}, or <a href="/contact/">send us your booking online</a>. Send the model number, what the machine is doing and a photo of any code, and tell us whether it's a front loader, top loader or twin tub.</p>
${indie('Hisense')}`,
    faqs: [
      { q: `Can you repair a Hisense twin tub?`, a: `Yes. We repair Hisense twin tubs at your home, including timers, wash and spin motors, belts, drain problems and the spin lid switch and brake. When you book, say which side has stopped, the wash or the spin, so the technician knows where to start.` },
      { q: `Why does my Hisense top loader take so long to fill?`, a: `A big top loader holds a lot of water, so low water pressure makes a long fill even longer. Check that the tap is fully open and the inlet hose isn't kinked. If it's still slow, the small mesh filter where the hose connects may be blocked, or the inlet valve may be failing, and the technician can check both.` },
      { q: `Does the automatic dosing tank on my Hisense need cleaning?`, a: `Yes, now and then. Old detergent can build up in the tank and its channels, so clean it as your manual describes and fill it only with the type of detergent the manual specifies. If the machine stops dosing even though the tank is full, book a technician.` },
      { q: `Why won't the lid of my Hisense top loader open after the wash?`, a: `If your model has a lid lock, it keeps the lid shut while the tub is spinning and releases it once the drum has stopped, so wait a minute or two after the programme ends. If the lid stays locked, or there's still water in the tub, don't force it. Switch off at the wall and book a technician to check the drain and the lid lock.` },
      { q: `Is it normal for my Hisense top loader to pause during the wash?`, a: `Yes. Many top loader programmes include pauses while the clothes soak between bursts of washing, and the machine may also stop briefly to sense the load. If it stops for a long time and the time display stops counting down, note the stage it stopped at and book a technician.` },
      { q: `Why does my Hisense only leak during the spin?`, a: `A leak that appears only on spin usually comes from the drain side, because that's when the pump pushes the most water out: a loose or split drain hose, a leaking pump or a standpipe that can't take the flow. With the machine switched off at the wall, check the hose connections at the back and at the drain. If they're tight and dry, the pump needs a technician.` },
      { q: `Do you repair Hisense washer-dryers?`, a: `Yes. We repair the washing side and the drying side, including drying heaters, fans, condensers and sensors. Our page on <a href="/services/washer-dryer-repairs/">repairing washer-dryers</a> explains what the technician checks.` },
    ],
  },

  // ───────────────────────────── AEG ─────────────────────────────
  {
    slug: 'aeg',
    brand: 'AEG',
    name: 'AEG',
    hasErrorGuide: false,
    title: 'AEG Washing Machine Repairs | ProServ',
    description: `AEG washing machine repairs for front loaders and washer-dryers: drains, door locks, bearings, heating and boards. Quote first. Call ${site.phone.display}.`,
    h1: 'AEG washing machine repairs',
    primaryKeyword: 'AEG washing machine repairs',
    summary: 'Premium front loaders and washer-dryers, freestanding and integrated.',
    intro: `<p>Our AEG washing machine repairs start with a proper test, not a guess. A technician comes to your home in Gauteng, diagnoses your AEG front loader, washer-dryer or integrated machine, and quotes before any work starts.</p>`,
    body: `
<h2>About AEG washing machines</h2>
<p>AEG is a German brand with a long history in electrical engineering, and its household appliance business has belonged to the Swedish Electrolux group since 1994. AEG washing machines are premium <a href="/services/front-loader-repairs/">front loaders</a> and washer-dryers, freestanding or built in. Ranges such as the 6000, 7000 and 8000 series add features like ProSense load sensing, ProSteam steam refresh and ÖKOMix, which AEG says pre-mixes the detergent with water before it reaches the clothes.</p>
<p>That sophistication is good for your clothes, but it means more sensors and electronics, so careful diagnosis matters. Because AEG and Electrolux machines come from the same group, many share engineering and some parts. The data plate carries the model number, the product number code (PNC) and the serial number, and the technician uses these to identify the exact part for your machine.</p>
<p>AEG machines are part of our <a href="/">washing machine repairs</a> service, done at your home anywhere in our Gauteng areas.</p>

<h2>Warning signs on an AEG</h2>
<p>Book a technician if your AEG:</p>
<ul>
  <li>trips the mains switch or earth leakage when it runs;</li>
  <li>won't switch on at all;</li>
  <li>won't drain, or stops with water in the drum;</li>
  <li>shows a code on the display;</li>
  <li>leaks water onto the floor;</li>
  <li>no longer dries the laundry, if it's a washer-dryer;</li>
  <li>makes unusual noises, especially on spin;</li>
  <li>smells bad, even after a hot wash; or</li>
  <li>gives you a tingle or a shock when you touch it.</li>
</ul>
<div class="callout callout-safety"><p><strong>Safety first:</strong> if the machine trips the electricity, don't keep resetting the trip switch. Leave the machine switched off at the wall until a technician has tested it. Beyond the simple checks in your manual, never open an AEG or test its parts yourself, because the electronics inside run on mains power.</p></div>

<h2>AEG faults we repair</h2>
<h3>Draining and water intake</h3>
<p>Blocked pump filters, kinked hoses and worn drain pumps cause most drain faults (see <a href="/problems/washing-machine-not-draining/">our drain fault guide</a>). Fill faults come from the tap, low water pressure, the filter in the inlet hose connection or the inlet valve (see <a href="/problems/washing-machine-not-filling-with-water/">when water won't come in</a>).</p>
<h3>Door locks</h3>
<p>If the door lock fails, the machine won't start, or the door stays locked when the programme has finished. Our page on a <a href="/problems/washing-machine-door-wont-open/">washing machine door that won't open</a> explains what you can safely try.</p>
<h3>Heating and sensors</h3>
<p>Cold washes, or programmes that run far longer than usual, can point to the heating element or the temperature sensor.</p>
<h3>Leaks</h3>
<p>On an AEG, the first places to look are the door seal and the hoses at the back. A seal that has split, or that has a sock or coin caught in its folds, lets water out at the front, while a hose that has worked loose drips behind the machine. Water from underneath is more often the drain pump or a seal inside the tub. See <a href="/problems/washing-machine-leaking/">finding the source of a leak</a>.</p>
<h3>Spin and balance</h3>
<p>Before every spin, an AEG measures how evenly the laundry is spread around the drum. If it's lopsided, the machine tumbles the load to spread it out, then spins slowly or skips the spin rather than shake itself across the floor. Bath mats, jeans and other heavy items washed on their own are the usual trigger. If the spin stays weak with a mixed, sensible load, the drain, the motor or its control electronics need testing. See <a href="/problems/washing-machine-not-spinning/">a weak or missing spin</a>.</p>
<h3>Noise and bearings</h3>
<p>A rumble that rises with the spin speed usually means worn drum bearings, while knocking can be something trapped between the drum and the tub. See <a href="/problems/washing-machine-noisy-when-spinning/">rumbling and knocking on the spin</a>.</p>
<h3>Electronics</h3>
<p>Boards and displays can fail, sometimes after a power surge when the electricity comes back after load shedding. Switching the machine off at the wall while the power is off reduces that risk, as our article on <a href="/blog/protect-washing-machine-from-load-shedding/">protecting your washing machine from load shedding</a> explains. The technician tests before replacing a board, because the fault is not always where it seems.</p>
<h3>Washer-dryers</h3>
<p>When an AEG washer-dryer stops drying, the drying heater, the fan, the condenser or the humidity sensor is usually involved. See <a href="/services/washer-dryer-repairs/">drying problems on washer-dryers</a>.</p>

<h2>Codes on the AEG display</h2>
<p>AEG codes vary between models and generations, so check yours against the manual for your model number. The manual covers the codes you can deal with yourself, such as a closed tap or a blocked filter. For the rest, send us a photo of the display with the model number and PNC, and see our guide to a <a href="/problems/washing-machine-showing-error-code/">washing machine showing an error code</a> for the safe first steps.</p>

<h2>Simple checks for AEG owners</h2>
<p>Before you book, and with the machine switched off at the wall, it's worth ruling out the simple things:</p>
<ul class="checklist">
  <li>The plug point works: unplug the machine and test the socket with a lamp.</li>
  <li>The tap is fully open and the inlet hose has no kinks.</li>
  <li>The drain hose isn't flattened behind the machine, and the pump filter is clean (your manual shows how to drain and open it: unplug first, have towels and a shallow tray ready and let hot water cool).</li>
  <li>The door is properly shut, with nothing caught in the seal.</li>
  <li>No delayed start or child lock is set.</li>
  <li>The load suits the programme: delicate and wool programmes take much smaller loads than cottons.</li>
</ul>

<h2>Why we test before replacing parts</h2>
<p>On a sensor-rich machine like an AEG, one fault can show up as several symptoms. A drain problem can look like a spin problem, and a faulty sensor can make a good heater look broken. Replacing parts on a guess wastes your money, so the technician confirms the cause first, then quotes for the part that has actually failed. The PNC on the data plate makes sure the replacement is the right one for your exact machine. See <a href="/services/washing-machine-parts-replacement/">washing machine parts replacement</a>.</p>

<h2>Integrated AEG machines</h2>
<p>Many AEG machines are built into kitchen cabinetry, with a cabinet door fixed to the front. They need more time than a freestanding machine, because the machine has to come out of its space before the repair and go back in afterwards, with the cabinet door lined up and the hoses checked for leaks. Tell us when you book that the machine is integrated, and clear the area in front of the cabinet, so the technician can allow enough time and get straight to work.</p>

<h2>Keeping an AEG in good shape</h2>
<ul>
  <li><strong>Read the manual.</strong> AEG programmes, steam options and load sensing work as intended only when they're used as intended, and the manual explains which programme suits which fabric.</li>
  <li><strong>Clean the filter, drawer and seal.</strong> With the machine unplugged, clean the pump filter as the manual shows, rinse the drawer and wipe the door seal regularly.</li>
  <li><strong>Check for leaks.</strong> Look under and behind the machine now and then, and check the hoses for bulges or cracks.</li>
  <li><strong>Don't overload it.</strong> Stick to the capacity for each programme. On a washer-dryer, the drying capacity is smaller than the washing capacity, so dry in smaller batches.</li>
  <li><strong>Use the right detergent.</strong> Use a low-suds detergent made for front loaders, measured to the load.</li>
</ul>
<p>For a professional check of an older machine, see <a href="/services/washing-machine-servicing/">washing machine servicing</a>.</p>

<h2>Areas and booking</h2>
<p>We repair AEG washing machines across ${areaLinks()}.</p>
<p>Bookings are by phone or WhatsApp on ${site.phone.display}, or through the form on our <a href="/contact/">contact page</a>. Send the model number and PNC from the data plate, a photo of any code, and let us know if the machine is integrated so the technician can allow enough time.</p>
${indie('AEG')}`,
    faqs: [
      { q: `My AEG gives me a shock when I touch it. What should I do?`, a: `Stop using it straight away. Switch off at the wall and unplug it if you can reach the plug without touching the machine; if you can't, switch the power off at the DB board instead, and don't touch the machine until the power is off. A shock usually means an earth fault or water reaching an electrical part, so a technician needs to test it before it is used again.` },
      { q: `Where is the PNC on my AEG?`, a: `It is on the data plate, which on AEG washing machines is behind the door or behind the filter door at the bottom front. Send us a photo of the whole plate when you book.` },
      { q: `Is an AEG worth repairing?`, a: `Usually, yes. AEG machines are premium appliances, and most faults involve a single replaceable part such as a pump, door lock, heater or sensor. If an older AEG needs bearings and a control board at the same time, the sums change, and the technician will tell you so before you decide.` },
      { q: `What does ProSense do on my AEG?`, a: `ProSense is AEG's load-sensing system. It weighs the laundry and adjusts the programme time, water and energy to suit, which is why the time on the display can change after the wash has started. That's normal, and not a sign of a fault.` },
      { q: `Does a smelly door seal on my AEG need replacing?`, a: `Not usually. Most smells come from residue and lint in the folds of the seal, which you can wipe out before running an empty hot wash. A seal needs replacing when it has split, or when black mould has stained deep into the rubber and keeps coming back.` },
      { q: `My AEG hums but won't drain. What does that mean?`, a: `A hum with no water moving usually means the drain pump is trying to run but something is blocking it, often a coin, button or hair clip caught in the filter. Switch off at the wall and unplug, then clean the filter as your manual describes, with towels and a tray ready and any hot water given time to cool. If the filter is clear and it still hums, the pump has probably failed and needs a technician.` },
    ],
  },

  // ───────────────────────────── Siemens ─────────────────────────────
  {
    slug: 'siemens',
    brand: 'Siemens',
    name: 'Siemens',
    hasErrorGuide: false,
    title: 'Siemens Washing Machine Repairs | ProServ',
    description: `Siemens washing machine repairs for iQ front loaders, built-in machines and washer-dryers: drain, fill, leak and spin faults. Call ${site.phone.display}.`,
    h1: 'Siemens washing machine repairs',
    primaryKeyword: 'Siemens washing machine repairs',
    summary: 'iQ front loaders and washer-dryers, freestanding and integrated.',
    intro: `<p>From drain and leak faults to door locks, bearings and electronics, our Siemens washing machine repairs cover iQ front loaders, built-in machines and washer-dryers. The technician diagnoses the machine where it stands, in your home in Gauteng, and quotes before any work starts.</p>`,
    body: `
<h2>Who makes Siemens washing machines</h2>
<p>Siemens-branded washing machines are made by BSH Hausgeräte, the home appliance company owned by the Bosch group, which uses the Siemens name under licence. Siemens AG sold its share of BSH at the start of 2015, and the Siemens and Bosch ranges are built on related platforms. That's why many Siemens faults and parts look familiar to anyone who knows Bosch machines (see <a href="${brandUrl('bosch')}">Bosch washing machine repairs</a>), although the models are not identical.</p>
<p>Siemens sells its machines in iQ ranges, such as iQ300, iQ500 and iQ700, as freestanding front loaders, built-in machines and washer-dryers. Features you may see on yours include:</p>
<ul>
  <li><strong>iQdrive:</strong> a brushless motor, so there are no carbon brushes to wear out.</li>
  <li><strong>aquaStop:</strong> leak protection that shuts off the water supply if a leak is detected.</li>
  <li><strong>varioSpeed:</strong> an option that shortens programme times when you're in a hurry.</li>
  <li><strong>i-Dos:</strong> automatic dosing of liquid detergent and softener from built-in tanks, on some models.</li>
</ul>
<p>We repair Siemens machines as part of our <a href="/">washing machine repairs</a> service, at your home.</p>

<h2>Symptoms worth a call</h2>
<ul>
  <li>Water left in the drum at the end of a programme.</li>
  <li>No water coming in, or a water supply code on the display.</li>
  <li>A leak warning, or water under the machine.</li>
  <li>A drum that won't turn, turns slowly or won't spin up.</li>
  <li>A door that won't lock or won't release.</li>
  <li>A rumble, roar or knock on spin.</li>
  <li>Cold washes on a hot programme.</li>
  <li>A blank or frozen display.</li>
</ul>

<h2>Siemens faults we repair</h2>
<h3>Drain and fill faults</h3>
<p>Drain faults are usually the pump filter behind the flap at the bottom front, a kinked or blocked drain hose or a worn pump. Fill faults are usually the tap, low pressure, a blocked filter in the hose connection, the aquaStop valve or the inlet valve. Our guides to <a href="/problems/washing-machine-not-draining/">drainage faults</a> and <a href="/problems/washing-machine-not-filling-with-water/">a slow or failed fill</a> cover the checks in more detail.</p>
<h3>Leak protection</h3>
<p>If water collects in the base of the machine, the leak protection stops the programme and the water supply. Clearing the warning isn't a repair: the source has to be found, whether it's a hose, the pump, the door seal, the drawer or foam from too much detergent. See <a href="/problems/washing-machine-leaking/">a leaking washing machine</a>.</p>
<h3>Motor and drum</h3>
<p>Newer iQdrive machines don't have carbon brushes, so a drum that won't turn points to the motor, its control electronics, the door lock or something jamming the drum. Older Siemens machines with brushed motors can simply need new brushes, which is one of the more straightforward repairs. Our guide to a <a href="/problems/washing-machine-not-spinning/">drum that won't spin</a> covers the simpler causes to rule out first.</p>
<h3>Door lock faults</h3>
<p>If the door lock can't confirm it has locked, the programme won't start, and if it can't release, the door stays shut after the wash. A sock caught in the seal or a worn catch on the door is worth ruling out before the lock itself is replaced. For what is safe to try first, see our guide to a <a href="/problems/washing-machine-door-wont-open/">door that won't open or lock</a>.</p>
<h3>Bearings</h3>
<p>Worn bearings rumble on spin and get louder as the speed rises. Catching them early matters, because a bearing that is left to fail can damage the drum shaft and the tub, which turns a bearing job into a much bigger one. See <a href="/problems/washing-machine-noisy-when-spinning/">noise on the spin</a>.</p>
<h3>Heating</h3>
<p>A failed element or temperature sensor leaves washes cold. You may notice it first as whites that come out greyer than usual, or stains that a hot programme used to shift.</p>

<h2>Siemens and Bosch error codes</h2>
<p>Because the platforms are related, many Siemens machines show codes in a similar style to Bosch machines, but not every code means the same thing on every model. Our <a href="${errorCodeUrl('bosch')}">Bosch washing machine error codes</a> guide is a useful starting point; always confirm against the manual for your model. Our guide to a <a href="/problems/washing-machine-showing-error-code/">washing machine showing an error code</a> covers the safe first steps.</p>

<h2>What you can check yourself</h2>
<p>With the machine switched off at the wall, a few quick checks can save you a call-out:</p>
<ul class="checklist">
  <li>Test the plug point with a lamp, and make sure the power is back and stable after load shedding.</li>
  <li>Turn the tap fully open, and look for kinks in the aquaStop hose behind or beside the machine.</li>
  <li>Make sure the drain hose isn't flattened and the household drain isn't blocked.</li>
  <li>Unplug the machine, then clean the pump filter behind the flap at the bottom front as your manual describes, with towels and a tray ready for the water and any hot water left to cool.</li>
  <li>Check that the child lock isn't on and that the door closes with a firm click.</li>
</ul>
<p>If a leak warning or a code comes back after these checks, leave the machine off and book a technician rather than restarting it again and again.</p>

<h2>Built-in Siemens machines</h2>
<p>With a built-in Siemens, most of the extra work is getting to the machine. It sits behind a cabinet door with the hoses and plug out of reach, so the technician slides it out of its space, carries out the repair and refits it, realigning the cabinet door afterwards. The repair itself is the same as on a freestanding machine. Mention when you book that yours is built in, and clear the area in front of the cabinet. See how we repair <a href="/services/front-loader-repairs/">front loaders</a> and <a href="/services/washer-dryer-repairs/">washer-dryers</a>.</p>
<h3>Hidden leaks</h3>
<p>Cabinetry hides the floor around a built-in machine, so a small leak can go unnoticed for a long time. Swollen cupboard edges, a musty smell from the kitchen units or damp skirting near the machine are all signs to close the tap and book a technician, even if the machine still seems to work.</p>

<h2>Finding the E-Nr and FD number</h2>
<p>Siemens machines carry an E-Nr (the model number) and an FD number (the production version) on the rating plate, usually on the inner rim of the door opening. Similar-looking machines from different years can use different parts, so the technician needs both numbers to quote the right part. A photo of the plate, sent when you book, saves time on the day. If the plate is hard to read, the model number is also printed in the manual and often on the original invoice.</p>

<h2>Siemens care tips</h2>
<ul>
  <li>Clean the pump filter every few months, with the machine unplugged and towels and a tray ready.</li>
  <li>Measure detergent carefully: excess foam can spill into the base and set off the leak protection.</li>
  <li>Run an empty hot wash now and then to clear residue, and leave the door ajar afterwards if children and pets can't get to the machine.</li>
  <li>Leave the detergent drawer slightly open between washes so it can dry, and rinse it out now and then.</li>
  <li>Keep the inlet hose free of kinks behind the machine, especially after it has been pushed back into place.</li>
</ul>

<h2>Is a Siemens worth repairing?</h2>
<p>Usually, yes. A Siemens is a well-made machine, and most faults involve a single wear part: a pump, door lock, inlet valve or heating element, or carbon brushes on older models. The numbers change when an older machine needs bearings in a sealed tub, or a control module and another major part at the same time.</p>
<p>With a built-in machine, the cost of fitting a new one into the same space belongs in the sum too. The technician will compare the cost with a new machine and say so plainly. See our guide to <a href="/repair-or-replace/">repairing or replacing an older machine</a>, and our page on <a href="/services/washing-machine-parts-replacement/">washing machine parts replacement</a>.</p>

<h2>Areas and booking</h2>
<p>We repair Siemens washing machines across ${areaLinks()}.</p>
<p>Ring or WhatsApp ${site.phone.display} to book, or leave your details on our <a href="/contact/">contact page</a>. A photo of the rating plate inside the door, plus any code on the display, helps the technician arrive knowing what to look for.</p>
${indie('Siemens')}`,
    faqs: [
      { q: `Can I put washing powder in the i-Dos tank?`, a: `No. The i-Dos tanks are made for liquid detergent and liquid softener. If you prefer powder, use the normal detergent drawer and dose it by hand.` },
      { q: `My Siemens finishes the wash but the clothes are still very wet. Why?`, a: `The machine may have skipped or cut short the final spin because the load was unbalanced or the water didn't drain fully. Switch off at the wall and unplug, clean the pump filter as your manual describes with towels and a tray ready, then spread the load more evenly. If it keeps happening, the drain pump, the motor or a sensor may need a technician.` },
      { q: `Does using varioSpeed harm my Siemens?`, a: `No. varioSpeed simply shortens the programme so the wash finishes sooner. If programmes suddenly take far longer than usual without it, mention that when you book, because a heating or drain fault can stretch a cycle.` },
      { q: `Do you repair Siemens washer-dryers?`, a: `Yes. We repair both halves of a Siemens washer-dryer, from drain and door faults on the washing side to the drying heater, fan, condenser and sensors on the drying side.` },
      { q: `Will my Siemens need a new control module after load shedding?`, a: `Not necessarily. A surge can damage the module's power supply, but a dead display can also come from the plug point, the door lock or the wiring. The technician tests those first, and if the module has failed, quotes for one that matches your E-Nr and FD number.` },
      { q: `Why does my Siemens smell of drains?`, a: `A drain smell often comes from the house drain rather than the machine: if the standpipe or trap that the machine empties into is blocked or dry, sewer smells can travel back up the hose. Switch the machine off at the wall and unplug it, then clean the pump filter over towels and a tray and run an empty hot wash. If it still smells, the technician can check the drain hose, its connection and the household drain.` },
    ],
  },

  // ───────────────────────────── Miele ─────────────────────────────
  {
    slug: 'miele',
    brand: 'Miele',
    name: 'Miele',
    hasErrorGuide: false,
    title: 'Miele Washing Machine Repairs | ProServ',
    description: `Miele washing machine repairs at your home in Gauteng: drain, water intake, door and spin faults on front loaders and washer-dryers. Call ${site.phone.display}.`,
    h1: 'Miele washing machine repairs',
    primaryKeyword: 'Miele washing machine repairs',
    summary: 'Premium front loaders and washer-dryers built for a long life.',
    intro: `<p>A Miele is built for a long working life, so a fault deserves a proper diagnosis. Our Miele washing machine repairs cover front loaders and washer-dryers at your home in Gauteng: the technician explains what has failed and what the repair involves, and quotes before any work starts.</p>`,
    body: `
<h2>Built for a long life</h2>
<p>Miele is a German company, founded in 1899 by Carl Miele and Reinhard Zinkann near Gütersloh and still owned by the two founding families. It made its first washing machine in the early 1900s, and today its machines are known for durability: Miele says it tests its washing machines to the equivalent of 20 years of use, around 10,000 hours of running. In Gauteng homes you'll find several generations side by side, from older Novotronic and Softtronic machines to the current W1 range.</p>
<p>A few Miele features you may come across. The patented honeycomb drum, introduced in 2001, has a honeycomb pattern that lets the laundry glide on a thin film of water. TwinDos models dose liquid detergent automatically from two containers behind a flap at the bottom of the machine. Models with the Miele Waterproof System (WPS) have a double-walled inlet hose with safety valves at the tap end, which shut off the water if a leak is detected. Because a Miele is designed to last, a repair is usually worth considering before replacement, and we repair Miele machines as part of our <a href="/">washing machine repairs</a> service.</p>

<h2>When your Miele needs a technician</h2>
<p>Book a technician if your Miele:</p>
<ul>
  <li>won't spin, or the laundry comes out dripping;</li>
  <li>won't drain;</li>
  <li>won't open its door after the programme;</li>
  <li>won't take in water;</li>
  <li>leaves detergent in the drawer, or TwinDos stops dosing;</li>
  <li>makes loud or unusual noises;</li>
  <li>vibrates heavily or moves during the spin;</li>
  <li>stops in the middle of a programme;</li>
  <li>trips the circuit breaker or earth leakage; or</li>
  <li>leaks.</li>
</ul>

<h2>Miele faults we repair</h2>
<h3>Draining</h3>
<p>Water left in the drum usually comes from a blocked drain filter, a kinked drain hose or a worn drain pump. Your manual shows where the drain filter is on your model and how to clean it. See <a href="/problems/washing-machine-not-draining/">what to do when the water won't drain</a>.</p>
<h3>Water intake</h3>
<p>If the machine won't take in water, check the tap first. Otherwise the cause is usually a blocked filter in the inlet hose connection, the inlet valve, or the hose itself. See <a href="/problems/washing-machine-not-filling-with-water/">a machine that won't take in water</a>.</p>
<h3>Detergent not taken in</h3>
<p>Detergent left in the drawer usually means low water pressure or a drawer that needs cleaning, especially if you use fabric softener. Rinse the drawer, including the siphon in the softener compartment, and check that the tap is fully open. If it keeps happening with good pressure, the inlet valve may be restricting the flow.</p>
<h3>Leaks</h3>
<p>Water at the front usually comes from the door seal or the detergent drawer, while water underneath or at the back points to a hose, the drain pump, or a drain filter that wasn't screwed fully home after cleaning. On WPS models, a leak can also set off the water protection, which stops the programme and shuts off the water. See <a href="/problems/washing-machine-leaking/">finding where a leak starts</a>.</p>
<h3>Door won't open</h3>
<p>Like most front loaders, a Miele keeps its door locked while there's water in the drum or the temperature inside is high, so wait for the programme to finish and the machine to cool. If the door still won't release, or there's water left inside, the drain or the door lock needs a technician. Don't force the door: see <a href="/problems/washing-machine-door-wont-open/">washing machine door won't open</a>.</p>
<h3>Noise, vibration and spinning</h3>
<p>Loud noises and heavy vibration on spin can be an unbalanced load, an unlevel machine, worn shock absorbers or springs, or worn bearings. A machine that won't spin may be protecting itself from an unbalanced load or from water that hasn't drained, or may have a motor or sensor fault. See <a href="/problems/washing-machine-noisy-when-spinning/">noise and vibration on the spin</a> and <a href="/problems/washing-machine-not-spinning/">a machine that won't spin</a>.</p>
<h3>Heating</h3>
<p>Laundry that comes out cold at the end of a hot programme points to the heating element or its temperature sensor. Scale and detergent residue on the element shorten its life, which is one more reason to run a hot wash now and then.</p>
<h3>Electronics</h3>
<p>A Miele's control electronics run the whole programme, so a fault there can look like almost anything: a dead display, buttons that don't respond or a programme that stops at random. The technician rules out the power supply, the door lock and the wiring before quoting for an electronic part.</p>
<h3>Stopping and tripping</h3>
<p>A Miele that stops mid-programme is usually reporting a fault on its display. A machine that trips the circuit breaker or earth leakage may have a fault in the heating element or wiring, or water reaching an electrical part. Leave it off at the wall and have it tested; don't keep resetting the breaker.</p>

<h2>Fault messages on Miele displays</h2>
<p>Miele machines report problems on the display, as a short message or a fault number depending on the model, and older machines without a text display flash their indicator lights instead. The manual explains the ones you can deal with yourself, such as a closed tap or a blocked drain filter, and anything else needs a technician. Photograph the message and send it to us with the model and serial number, and see our guide to a <a href="/problems/washing-machine-showing-error-code/">washing machine showing an error code</a> for the safe first steps.</p>

<h2>Before you book a Miele repair</h2>
<p>Switch the machine off at the wall, then check these simple things first:</p>
<ul class="checklist">
  <li>The plug point is working (unplug the machine and try a lamp in the socket).</li>
  <li>The tap is fully open and the inlet hose isn't kinked or crushed.</li>
  <li>The drain hose runs freely to the drain, and the drain filter is clean (unplug the machine first, and have towels and a container ready for water that may still be hot).</li>
  <li>The door is firmly closed, with no laundry trapped in the seal.</li>
</ul>
<p>If a fault message comes back after these checks, write it down or photograph it, and leave the rest to the technician.</p>

<h2>Parts for Miele machines</h2>
<p>Many Miele parts are specific to Miele, and some are made only for particular models, so the technician identifies the exact model and serial number before quoting. The data plate also carries a material number, which tells versions of the same model apart. See <a href="/services/washing-machine-parts-replacement/">washing machine parts replacement</a>.</p>

<h2>Miele washer-dryers</h2>
<p>A Miele washer-dryer combines a <a href="/services/front-loader-repairs/">front loader</a> with a drying system, so it can develop the faults of either. When it washes well but no longer dries, the drying heater, the fan, a sensor or lint build-up in the drying path is usually involved. Dry smaller loads than you wash, too: the manual gives the drying capacity for each programme. See <a href="/services/washer-dryer-repairs/">what goes wrong on the drying side</a>.</p>

<h2>Looking after a Miele</h2>
<p>Regular care keeps a Miele running efficiently and safely, and helps it reach the long life it was built for:</p>
<ul>
  <li>Clean the drain filter as the manual describes, with the machine switched off at the wall and unplugged, and towels and a container ready for the water.</li>
  <li>Rinse the detergent drawer now and then, especially the softener compartment.</li>
  <li>Run a hot wash regularly, particularly if you mostly wash at low temperatures, to keep the drum and hoses fresh.</li>
  <li>Leave the door slightly open after washing so the seal can dry, unless a small child or pet could climb inside.</li>
  <li>Check the inlet hose for bulges or cracks now and then, and keep it free of kinks.</li>
  <li>Don't overload the drum, and wash a single heavy item, such as a bath mat, with a few towels so the load can balance.</li>
</ul>

<h2>Areas and booking</h2>
<p>We repair Miele washing machines across ${areaLinks()}, and everything is done at your home.</p>
<p>Call ${site.phone.display}, or send a WhatsApp to the same number, to book; you can also use our <a href="/contact/">contact page</a>. A photo of the data plate, and of any message on the display, helps the technician prepare.</p>
${indie('Miele')}`,
    faqs: [
      { q: `Is an older Miele worth repairing?`, a: `Often, yes. A Miele with a sound drum, tub and cabinet is usually worth a repair such as a pump, valve or door lock, even after many years of use. If several major parts have failed at once, the technician will compare the cost with replacing it.` },
      { q: `Where is the model and serial number on my Miele?`, a: `On many models the data plate is above the porthole glass, visible when you open the door. It shows the model, the material number and the serial number. If it isn't there, the manual shows where to find it on your model.` },
      { q: `What happens if my Miele needs a part that has to be ordered?`, a: `The technician tells you before you agree to the repair, and explains whether the machine can be used safely in the meantime. Once the part arrives, the technician comes back to fit it.` },
      { q: `My Miele TwinDos has stopped dosing. What should I check?`, a: `Check that both containers are pushed fully into place and have detergent in them, and that TwinDos is switched on for the programme you chose. If a container is seated and full but nothing is dosed, the dosing system needs a technician.` },
      { q: `Is it safe to keep using my Miele if it leaks?`, a: `No. Switch off at the wall before you touch a wet floor, close the tap and put towels down. Even a small leak can reach electrical parts or damage the floor and cabinets around the machine, so book a technician to find where the water is coming from.` },
      { q: `Why does my Miele spin so gently on some programmes?`, a: `Delicate programmes, such as woollens and silks, spin gently on purpose to protect the fabric, and many programmes let you choose the spin speed. If laundry comes out wet on a cottons programme too, check that the load isn't bunched to one side, and clean the drain filter with the machine unplugged and towels and a tray ready. If it still happens, book a technician.` },
    ],
  },

  // ───────────────────────────── Smeg ─────────────────────────────
  {
    slug: 'smeg',
    brand: 'Smeg',
    name: 'Smeg',
    hasErrorGuide: false,
    title: 'Smeg Washing Machine Repairs | ProServ',
    description: `Smeg washing machine repairs at your home in Gauteng: freestanding and integrated machines and washer-dryers. Quote before any work. Call ${site.phone.display}.`,
    h1: 'Smeg washing machine repairs',
    primaryKeyword: 'Smeg washing machine repairs',
    summary: 'Freestanding and integrated machines and washer-dryers.',
    intro: `<p>Whether your Smeg won't drain, won't spin or has stopped mid-cycle, a technician comes to you. Our Smeg washing machine repairs cover freestanding and integrated machines and washer-dryers in homes across Gauteng, with a quote before any work starts.</p>`,
    body: `
<h2>About Smeg washing machines</h2>
<p>Smeg is an Italian company, founded in 1948 by Vittorio Bertazzoni in Guastalla, in the province of Reggio Emilia. The name is an acronym of the original enamelling and metalworking business, and the company introduced its first washing machine in the 1960s. Smeg is known for design-led appliances, and its laundry range in South Africa includes freestanding front loaders, fully integrated washer-dryers and tumble dryers, with features such as steam and automatic dosing on some models.</p>
<p>Smeg machines are part of our <a href="/">washing machine repairs</a> service, alongside all the other major brands.</p>

<h2>Newer machines need careful diagnosis</h2>
<p>A modern Smeg uses a fraction of the water and electricity an older machine needed, and it manages that with sensors and an electronic control board. That makes it efficient, but it also means a fault is rarely obvious from the outside. A machine that won't spin could have a drain problem, a door lock fault, an unbalanced load or a motor fault, and only testing tells them apart.</p>
<p>It's also why we don't advise DIY repairs on a Smeg. Beyond the simple checks in your manual, opening the machine or testing parts yourself risks an electric shock, and it can turn a small fault into a bigger and more expensive one.</p>

<h2>Signs your Smeg needs attention</h2>
<ul>
  <li>It won't drain, or water stays in the drum.</li>
  <li>It won't fill, or the programme won't start.</li>
  <li>The spin is weak or missing, or the machine shakes hard.</li>
  <li>The door won't lock or won't open.</li>
  <li>It leaks, at the front or underneath.</li>
  <li>It stops mid-cycle or shows a fault on the display. See <a href="/problems/washing-machine-showing-error-code/">what a code on the display means</a>.</li>
  <li>It no longer dries properly, if it's a washer-dryer.</li>
</ul>

<h2>Simple checks before you book</h2>
<p>These checks are safe to do yourself, as long as you switch the machine off at the wall first:</p>
<ul class="checklist">
  <li>Check that the house has power, and test the plug point with a lamp.</li>
  <li>Open the tap fully, and make sure the inlet hose hasn't been kinked behind the machine or the cabinet.</li>
  <li>Make sure the drain hose isn't squashed and the household drain is clear.</li>
  <li>Close the door firmly, with no laundry trapped in the seal.</li>
  <li>Check that a delayed start or the child lock hasn't been set by accident.</li>
</ul>
<p>Leave anything beyond that, including any fault that trips the electricity, to the technician.</p>

<h2>Smeg faults we repair</h2>
<p>Smeg front loaders share their main wear parts with other European front loaders:</p>
<ul>
  <li><strong>Drain pump and filter:</strong> blockages from coins, hair clips and lint, or a worn pump. See <a href="/problems/washing-machine-not-draining/">machines that won't drain</a>.</li>
  <li><strong>Water intake:</strong> a closed or partly closed tap, low pressure, a blocked inlet filter or a failed inlet valve. See <a href="/problems/washing-machine-not-filling-with-water/">a machine that fills slowly or not at all</a>.</li>
  <li><strong>Door lock and seal:</strong> a lock that won't engage or release, or a seal that has split or is holding debris. See <a href="/problems/washing-machine-door-wont-open/">washing machine door won't open</a>.</li>
  <li><strong>Leaks:</strong> a split door seal, a hose that has worked loose or a leaking pump. See <a href="/problems/washing-machine-leaking/">our guide to leaks</a>.</li>
  <li><strong>Bearings and suspension:</strong> rumbling, knocking or heavy vibration on spin. See <a href="/problems/washing-machine-noisy-when-spinning/">why a machine rumbles or shakes</a>.</li>
  <li><strong>Heating:</strong> the element or temperature sensor, when washes come out cold.</li>
  <li><strong>Electronics:</strong> control boards and displays, sometimes damaged by power surges.</li>
  <li><strong>Drying:</strong> on washer-dryers, the drying heater, fan, condenser or sensors. See <a href="/services/washer-dryer-repairs/">washer-dryer faults</a>.</li>
</ul>
<p>For how these repairs are done, see our page on <a href="/services/front-loader-repairs/">fixing front loaders</a>.</p>

<h2>How the technician finds the fault</h2>
<p>The technician starts by confirming the model and serial number, then runs the machine, where it's safe to, to see the fault first-hand. The installation is checked next, because a squashed hose or a drain hose set too low can mimic a failed part. Only then are the likely parts tested, such as the pump, the inlet valve, the door lock, the motor and, on a washer-dryer, the drying circuit. You get a quote once the cause is clear, before any work starts.</p>

<h2>Integrated Smeg washer-dryers</h2>
<p>A fully integrated Smeg washer-dryer hides behind a cabinet door, which keeps the kitchen tidy but makes the machine harder to reach. The technician takes it out of its space, repairs it and refits it, then checks the cabinet door and the hoses. Drying depends on the condenser and the airflow through the machine, so while it's out, the technician also checks for lint build-up that can stop it drying properly.</p>

<h2>Load shedding and your Smeg</h2>
<p>Power cuts affect washing machines in two ways. A programme interrupted mid-cycle may leave the door locked with water inside until the power returns. The bigger risk is the surge when the power comes back, which can damage the control board or display. To protect your machine:</p>
<ul class="checklist">
  <li>Switch it off at the wall before load shedding starts, or as soon as the power goes.</li>
  <li>Wait a few minutes after the power returns before switching it on again.</li>
  <li>Consider a plug-in surge protector made for appliances, rated for the machine's full load and plugged straight into the wall socket.</li>
</ul>
<p>If the display stays blank once the power is back and stable, check the plug point with a lamp, then call us. Our article on <a href="/blog/protect-washing-machine-from-load-shedding/">protecting your washing machine from load shedding</a> goes into more detail.</p>

<h2>Parts for Smeg machines</h2>
<p>Some Smeg parts are specific to particular models and have to be ordered rather than collected on the day. The technician identifies the exact model and serial number, confirms the part, and tells you before you agree to the repair if it has to be ordered. Common wear parts, such as pumps and inlet valves, are usually simpler to source. See <a href="/services/washing-machine-parts-replacement/">washing machine parts replacement</a>.</p>

<h2>Repair or replace your Smeg?</h2>
<p>For most faults, repair is the sensible choice. A pump, inlet valve, door lock or heating element costs far less than a new machine of the same standard, and with an integrated Smeg there's another reason: a replacement has to fit the same cabinet space and take the same door, which narrows your choice. Replacing makes more sense when an older machine needs several major parts at once, such as bearings and a control board. The technician sets out the options plainly, and our guide to <a href="/repair-or-replace/">repair versus replacement</a> explains how to weigh them up.</p>

<h2>Care tips for Smeg owners</h2>
<ul>
  <li>Use detergent made for front loaders, measured to the load. Where your model has automatic dosing, use the type of detergent its manual specifies.</li>
  <li>Clean the pump filter as the manual describes, with the machine off at the wall and unplugged.</li>
  <li>Rinse the detergent drawer and wipe the door seal regularly.</li>
  <li>Run an empty hot wash every month or so if you mostly wash cold.</li>
  <li>On a washer-dryer, dry smaller loads than you wash, and keep any lint filter clean.</li>
</ul>

<h2>Areas and booking</h2>
<p>We repair Smeg washing machines across ${areaLinks()}, at your home.</p>
<p>To arrange a visit, call or WhatsApp ${site.phone.display}, or fill in the form on our <a href="/contact/">contact page</a>. Send the model number from the label on the machine, tell us whether it's freestanding or integrated, and describe what it's doing. If the fault started after load shedding, after the machine was moved or after a new installation, mention that too, because it helps the technician narrow things down.</p>
${indie('Smeg')}`,
    faqs: [
      { q: `My Smeg stopped mid-cycle with water inside. What should I do?`, a: `Don't force the door. Switch off at the wall, wait a few minutes and switch on again to see whether a drain or spin programme will empty it. If it won't, the water can be let out through the pump filter as your manual describes, with the machine unplugged, any hot water given time to cool and a tray and towels ready, or you can leave it for the technician.` },
      { q: `Where do I find the model number on my Smeg?`, a: `Look for the rating label on the machine: on many front loaders it's around the door opening, and your manual shows where it is on your model. Send us a photo of it when you book.` },
      { q: `My Smeg is noisy on spin. Is it the bearings?`, a: `Not always. Before blaming the bearings, check that the machine stands level on all four feet and that the load isn't bunched up, and listen for a tick or scrape that could be a coin trapped in the drum. Bearing noise is a deep, steady roar that gets louder as the spin speeds up, and the technician confirms it before quoting.` },
      { q: `Is an integrated Smeg harder to repair?`, a: `The parts and the repair are the same as on a freestanding Smeg; what takes longer is getting to the machine. Tell us it's integrated when you book so the technician allows enough time, and clear the cupboards and floor in front of it if you can.` },
      { q: `How do I clean the pump filter on my Smeg?`, a: `Switch off at the wall and unplug the machine first. If a hot wash has just run, let the water cool before you start. On most front loaders the filter is behind a small flap at the bottom front, so put down towels and a shallow tray, drain the water through the emergency hose if your model has one, then unscrew the filter slowly. Your manual shows the exact steps for your model.` },
      { q: `My Smeg washer-dryer smells of burning when it dries. What should I do?`, a: `Stop the programme, switch off at the wall and leave the door shut until the machine has cooled. A burning smell can come from lint near the drying heater or from an electrical fault, so don't use the drying programme again until a technician has checked it.` },
    ],
  },

  // ───────────────────────────── Speed Queen ─────────────────────────────
  {
    slug: 'speed-queen',
    brand: 'Speed Queen',
    name: 'Speed Queen',
    hasErrorGuide: false,
    title: 'Speed Queen Washing Machine Repairs | ProServ',
    description: `Speed Queen washing machine repairs for heavy-duty top loaders at homes and small businesses in Gauteng. Quote first. Call ${site.phone.display}.`,
    h1: 'Speed Queen washing machine repairs',
    primaryKeyword: 'Speed Queen washing machine repairs',
    summary: 'Heavy-duty top loaders and front loaders for homes and small businesses.',
    intro: `<p>Speed Queen machines are built for heavy use, at home or in a small business, and we repair them on site across Gauteng. Our Speed Queen washing machine repairs cover heavy-duty top loaders and front loaders: the technician finds the fault and quotes before any work starts.</p>`,
    body: `
<h2>Why Speed Queen machines are different</h2>
<p>Speed Queen is an American brand with roots in 1908, when two hardware store owners in Ripon, Wisconsin, went into the washing machine business. The machines took the Speed Queen name in 1928, and the brand now belongs to Alliance Laundry Systems, which also builds machines for laundromats. That commercial background shapes the home machines: the company has used stainless steel wash tubs since 1939, and it describes its top loaders as commercial-grade machines built to last.</p>
<p>The Speed Queen top loaders sold in South Africa have a central agitator and a steel drum, and they're used both in homes and by small businesses that wash a lot, such as guest houses. They're heavy, simple to use and, with the right parts, very repairable. We repair them, and Speed Queen front loaders, as part of our <a href="/">washing machine repairs</a> service.</p>

<h2>How a top loader like yours works</h2>
<p>Every washing machine does four jobs: fill, wash, drain and spin. Knowing them makes it easier to describe a fault when you call.</p>
<ol class="steps">
  <li><strong>Fill:</strong> the inlet valves open and let hot and cold water into the tub until it reaches the right level.</li>
  <li><strong>Wash:</strong> the agitator in the middle of the tub twists back and forth, dragging the clothes down through the water and detergent and letting them work their way back up.</li>
  <li><strong>Drain:</strong> the pump pushes the dirty water out through the drain hose.</li>
  <li><strong>Spin:</strong> the inner tub spins at speed and throws the water out through the holes in its wall into the outer tub, which holds the water and sends it to the drain.</li>
</ol>
<p>The controls tell the machine how to run each stage: on simpler models a timer dial and selectors for the programme, water temperature and load size, and on newer models an electronic touchpad. Inside are the motor, the drive that links it to the agitator and tub, the pump, the agitator, the inner and outer tubs and the inlet valves. A fault in any one of them shows up at a particular stage, which is why the technician will ask exactly when the machine stopped. Our page on <a href="/services/top-loader-repairs/">repairing a top loader</a> explains how the technician tracks down which of these parts has failed.</p>

<h2>Speed Queen faults we repair</h2>
<h3>Shaking and walking</h3>
<p>A heavy top loader that thumps and moves on spin is usually out of level or out of balance. Check that all four feet are firmly on a flat, solid floor and that the load is spread evenly around the agitator. If it still shakes, the suspension that steadies the tub may be worn and need replacing. See <a href="/problems/washing-machine-noisy-when-spinning/">shaking and banging on the spin</a>.</p>
<h3>Not filling, or filling slowly</h3>
<p>Low water pressure, a partly closed tap, kinked hoses or blocked screens where the hoses connect to the machine slow the fill. A failed inlet valve stops it completely, or lets water in when it shouldn't. See <a href="/problems/washing-machine-not-filling-with-water/">slow or no fill</a>.</p>
<h3>Not draining</h3>
<p>A kinked or blocked drain hose, a blocked household drain or a worn pump leaves water in the tub. Small items, such as socks, can also find their way into the pump. See <a href="/problems/washing-machine-not-draining/">why water stays in the tub</a>.</p>
<h3>Agitator or spin not working</h3>
<p>If the machine fills but the agitator doesn't move, or it drains but won't spin, look at the lid first: the machine won't spin unless the lid switch or lid lock confirms the lid is closed. After that, the belt, the transmission and the motor are the usual suspects, and the technician tests them in turn. See <a href="/problems/washing-machine-not-spinning/">a top loader that won't spin</a>.</p>
<h3>Leaks</h3>
<p>Leaks usually come from a loose or cracked hose, the pump, or a seal where the drive meets the tub. A drip at the back points to the hose connections, while water under the machine during the drain or spin points to the pump or its hoses. See <a href="/problems/washing-machine-leaking/">tracking down a leak</a>.</p>
<h3>Wrong water temperature</h3>
<p>On a Speed Queen connected to both a hot and a cold tap, a cold wash on a warm setting usually means the hot water isn't reaching it. Check that both taps are open and that the geyser is switched on and hasn't tripped. If the supply is fine, the hot inlet valve may have failed.</p>
<h3>Noise</h3>
<p>Grinding or squealing points to a worn belt, bearings or transmission, while knocking can be the suspension or something trapped between the tubs. Coins and buttons are the usual culprits.</p>
<h3>Controls and timers</h3>
<p>On dial-controlled models, a worn timer can stop the machine moving from one stage to the next. On electronic models, the control board runs the cycle and reports faults on the display.</p>

<h2>Electronic models and fault codes</h2>
<p>Newer Speed Queen machines have electronic controls with built-in diagnostics, and the owner's manual explains the codes you can deal with yourself. For anything else, photograph the display and send it to us with the model and serial number. Our guide to a <a href="/problems/washing-machine-showing-error-code/">washing machine showing an error code</a> covers the safe first steps for any brand.</p>

<h2>Speed Queen front loaders</h2>
<p>Speed Queen also makes front loaders, and we repair them too. Their faults follow the usual front loader pattern: a door lock that won't engage or release, a blocked drain pump, a leaking door seal, worn bearings that rumble on spin, or a fault in the electronic controls. See <a href="/services/front-loader-repairs/">how front loaders are repaired</a>, and if you're choosing between the two types, our guide to <a href="/blog/front-loader-vs-top-loader/">front loaders vs top loaders</a>.</p>

<h2>Safe checks before calling</h2>
<p>Before you check anything, switch the machine off at the wall and unplug it. Then:</p>
<ul class="checklist">
  <li>Make sure the house has power and the plug point works (try a lamp in it).</li>
  <li>Open both taps fully and look for kinks in the fill hoses.</li>
  <li>Check the drain hose isn't kinked or pushed too far into the standpipe.</li>
  <li>Spread the load evenly around the agitator, and take some out if the tub is packed.</li>
  <li>Check that the machine stands level and doesn't rock.</li>
  <li>Close the lid firmly before you try again.</li>
</ul>
<p>If the machine has stopped with water in the tub, don't tip it to empty it. Leave it switched off, and the technician will drain it before starting work.</p>
<div class="callout callout-safety"><p><strong>Safety first:</strong> never lift the top, remove the control panel or open the cabinet to look inside. Speed Queen machines are heavy and run on mains power, and the drive and motor are no place for hands. If the earth leakage or circuit breaker trips when the machine runs, leave it off and call a technician.</p></div>

<h2>Homes and small businesses</h2>
<p>We repair Speed Queen washers wherever they work, in a family home or at a small business such as a guest house, where the machine may run several loads a day. Repairs are done on site, so the machine doesn't have to be moved. Because the machines are heavy, make sure the technician can get to the machine and that there's a little space around it to work.</p>
<p>On a machine that runs several loads a day, small signs matter more: a fill that's getting slower, a new noise on spin or water left in the tub at the end of a cycle. Booking at that stage usually means a simpler repair and less time without the machine.</p>
<p>A machine that works this hard benefits from a regular check-up. A <a href="/services/washing-machine-servicing/">washing machine servicing</a> visit looks over the parts that wear, such as the hoses, filters and suspension, before a small problem becomes a breakdown.</p>

<h2>Quote, call-out fee and warranty</h2>
<p>After the diagnosis you get a clear quote, and no work starts until you've agreed to it. The call-out fee is ${f.calloutFee}, ${f.calloutCondition}. Your repair is then covered by our ${f.warranty} warranty on parts and labour.</p>

<h2>Moving and installing a heavy machine</h2>
<p>Speed Queen machines are heavier than most household washers, so don't drag one across a tiled floor, tip it on its side or try to lift it on your own to move it. If yours is going into a new home or a new spot, our <a href="/services/washing-machine-installation/">washing machine installation</a> service connects and levels it properly, which matters on a machine this heavy, because one that isn't level will thump and walk on spin.</p>

<h2>Looking after a heavy-duty washer</h2>
<ul>
  <li>Don't overload, even with a big tub: the clothes need room to move around the agitator.</li>
  <li>Spread heavy items, such as towels and jeans, evenly around the agitator.</li>
  <li>Use the amount of detergent the manual suggests; extra detergent leaves residue rather than cleaner clothes.</li>
  <li>If the fill gets slow, clean the screens in the hose connections as the manual describes: close both taps, switch off at the wall and unplug first, and keep a towel ready for the water left in the hoses.</li>
  <li>Prop the lid open after washing so the tubs can dry out.</li>
  <li>If you mostly wash in cold water, run an empty hot wash now and then to clear detergent residue from the tubs.</li>
  <li>Keep the machine on a solid, level floor, which matters even more for a heavy machine on spin.</li>
</ul>

<h2>Areas and booking</h2>
<p>We repair Speed Queen washing machines across ${areaLinks()}, and the technician comes to you.</p>
<p>To book a technician, call or WhatsApp ${site.phone.display}, or <a href="/contact/">send a booking request</a>. Send the model and serial number from the label on the machine and a photo of any code, and tell us whether the machine is at a home or a business. For a business machine, say roughly how many loads it runs a day, because that helps the technician know which wear parts to check.</p>
${indie('Speed Queen')}`,
    faqs: [
      { q: `Are Speed Queen washing machines worth repairing?`, a: `Usually, yes. They are heavily built, with a steel wash tub, and most faults involve one part such as a lid switch, inlet valve, pump, belt or suspension component.` },
      { q: `Does a Speed Queen top loader use a lot of water?`, a: `An agitator top loader fills the tub to wash, so it uses more water than a front loader of a similar size. That's normal. If it overfills, keeps filling or takes far longer than usual to fill, the inlet valve or the water supply needs checking.` },
      { q: `Are Speed Queen parts available in South Africa?`, a: `Many common parts are, but as an imported brand some have to be ordered. The technician checks before quoting, and tells you if a part has to be ordered before you agree to the repair.` },
      { q: `Why do sheets tangle in my Speed Queen?`, a: `An agitator moves the load around a central post, so long items such as sheets and duvet covers can wrap around it. Load them loosely and evenly around the agitator, and don't pack the tub. Tangling on its own isn't a fault.` },
      { q: `Is my Speed Queen meant to be louder than a front loader?`, a: `An agitator top loader with a mechanical drive usually makes more noise than a modern front loader, especially as the agitator changes direction. What isn't normal is a new grinding, squealing or banging sound, which is worth booking a technician for before it gets worse.` },
      { q: `Is it worth replacing the transmission on a Speed Queen?`, a: `Often, yes, because the rest of the machine, including the steel tub, usually has plenty of life left. The transmission is one of the bigger repairs on a top loader, so the technician rules out the belt, the motor and the lid switch first, then quotes before you decide.` },
      { q: `My Speed Queen agitator moves, but the clothes don't turn over. Why?`, a: `Usually the tub is packed too tightly, or the load size setting is too low for the amount of laundry, so the clothes can't roll down through the water. Take some items out, or choose a larger load size. If the agitator moves weakly even with a sensible load, the drive or belt needs a technician.` },
    ],
  },
];

/** Brands mentioned on the hub page only (no dedicated page yet). */
export const otherBrands = ['Electrolux'];

export const trademarkNote =
  'Brand names are trademarks of their respective owners and are used only to describe the machines we repair. ProServ is an independent repairer and is not affiliated with, authorised or endorsed by any manufacturer.';
