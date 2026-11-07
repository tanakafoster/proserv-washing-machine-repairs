import type { ContentPage } from './types';
import { site, brandUrl, areaList } from './site';

const f = site.facts;

export interface ErrorCode {
  code: string;
  meaning: string;
  causes: string;
  /** Safe, non-electrical check for the owner. */
  check: string;
}

/** A manufacturer document or support page the codes on a guide were checked against. */
export interface CodeSource {
  /** e.g. "Samsung South Africa support: washing machine error codes" */
  label: string;
  url: string;
}

export interface ErrorGuide extends ContentPage {
  brand: string;
  brandSlug: string;
  codes: ErrorCode[];
  /** Where the codes were checked: shown on the page under the code table. */
  sources?: CodeSource[];
}

/*
 * Every code below was checked against the manufacturer's own documents (listed in `sources`
 * on each guide and shown under the code table). Don't add a code without a manufacturer source.
 */
export const errorGuides: ErrorGuide[] = [
  {
    slug: 'lg',
    brand: 'LG',
    brandSlug: 'lg',
    name: 'LG error codes',
    title: 'LG Washing Machine Error Codes: OE, IE, UE | ProServ',
    description: `LG washing machine error codes from LG's own manuals: IE, OE, UE, dE, LE, tE, PE, AE and more, with safe checks. Call ${site.phone.display}.`,
    h1: 'LG washing machine error codes',
    primaryKeyword: 'LG washing machine error codes',
    summary: 'IE, OE, UE, dE, LE, tE, PE, AE, CL and more.',
    intro: `<p>LG washing machine error codes are short letter codes, such as <strong>IE</strong>, <strong>OE</strong> and <strong>UE</strong>, that show which part of the wash went wrong: water in, water out, balance, the door or the electronics. Here's what each one means in LG's own manuals, and what you can safely check.</p>`,
    body: `
<h2>How LG shows a fault</h2>
<p>An LG washer shows a fault as a code on the display and usually pauses or stops the programme. Most codes are two letters, and some add a number that narrows the fault down. A few are messages rather than faults: CL (child lock), tCL (tub clean reminder), Sud (too many suds) and PF (the power went off mid-cycle).</p>
<p>Front loaders, top loaders and washer dryers don't share one list. On LG front loaders AE means water is leaking inside the machine, but on some top loaders LG lists AE with LE as a drum rotation problem, and washer dryers add drying codes such as dHE.</p>

<h2>Reading the display correctly</h2>
<p>Digital displays build letters from short bars, so IE can read as 1E, and LG notes that vS can show as uS or u5. The number after a door code matters too: LG explains that dE1 means the door isn't closed properly, often with laundry caught in the seal, while dE2 means it's shut but hasn't locked.</p>
<p>On LG top loaders, a small uE during the spin means the machine is rebalancing the load, which LG says it tries up to three times by itself, so only step in if the cycle pauses. If UE appears at the very end of a front loader cycle, the clothes may be too wet to spin out: rearrange them, close the door and press Start/Pause.</p>

<h2>Find your LG model number</h2>
<p>Codes change between ranges, so the model number matters. On front loaders the label is usually inside the door opening or on the back panel; on top loaders, check the back or under the lid. LG publishes the owner's manual for each model on its support site, with the codes in the troubleshooting section.</p>

<h2>Safe first checks</h2>
<div class="callout callout-safety"><p><strong>Safety first:</strong> switch off at the wall and unplug before you clean a filter or move a hose, and let the water cool after a hot wash. Never open panels or touch wiring.</p></div>
<ol class="steps">
  <li><strong>Write the code down</strong>, with any number after it and the point in the cycle where it appeared.</li>
  <li><strong>Restart once.</strong> LG's advice for several codes is to unplug for 10 to 60 seconds and try again; if the same code returns, the cause is still there.</li>
  <li><strong>Do the check in the table</strong> for your code: the tap and inlet hose for IE, the load for UE, the door seal for dE.</li>
  <li><strong>For OE on a front loader, clean the drain pump filter</strong> as your manual shows. It sits behind the small cover at the bottom front: put down towels and a shallow tray, let the water out through the little drain tube first, then unscrew the filter slowly, rinse it and screw it back firmly.</li>
</ol>

<h2>Codes that need a technician</h2>
<p>LG's manuals tell owners to call for service on tE, FE, PE, vS and AE, and on a door code that won't clear. These involve sensors, valves, the door lock or a leak inside the cabinet, and finding the fault means testing parts that carry mains power.</p>
<p>Act quickly on two of them. With <strong>FE</strong> the machine is overfilling, so switch off at the wall, unplug it and close the tap straight away. With <strong>AE</strong> water is escaping inside the machine: switch off at the wall, close the tap and keep children away from water on the floor. If the earth leakage or circuit breaker trips, leave the machine off until it has been checked.</p>

<h2>What our technician checks</h2>
<p>The technician confirms the code, asks when it appeared and tests the parts behind it before replacing anything. IE and FE lead to the inlet valve and water level sensor, OE to the drain pump, dE to the door lock and catch, and tE to the temperature sensor and heater. Balance and drive codes mean checking the suspension and, on direct drive models, the motor's position sensor and wiring.</p>
<p>You get a quote before any work starts, and if the part is available most repairs are finished on the same visit. The call-out fee is ${f.calloutFee}, ${f.calloutCondition}. Parts and labour are covered by a ${f.warranty} warranty. Our <a href="${brandUrl('lg')}">LG washing machine repairs</a> page covers the wider faults on these machines, and there's more on <a href="/services/front-loader-repairs/">front loader repairs</a>, <a href="/services/top-loader-repairs/">top loader repairs</a> and <a href="/services/washer-dryer-repairs/">washer dryer repairs</a>.</p>

<h2>Booking an LG repair</h2>
<p>Call or WhatsApp us with the code and model number, or use our <a href="/contact/">contact page</a>. We aim to arrive ${f.arrivalTime} on urgent call-outs, depending on where the technician is working. If your machine has a fault but no code, start with our guide to <a href="/">washing machine repairs</a>.</p>

<h2>If your code isn't listed</h2>
<p>Some LG models add codes of their own, such as the dispenser codes on machines with automatic dosing. Check your manual's troubleshooting pages or send us the code and model number, and see our guides to a <a href="/problems/washing-machine-not-draining/">washing machine not draining</a> and a <a href="/problems/washing-machine-not-filling-with-water/">washing machine not filling with water</a>. ProServ is an independent repairer with no link to LG; the meanings below come from LG's published manuals and support pages.</p>`,
    codes: [
      { code: 'IE', meaning: "Water inlet error: the drum hasn't filled in time", causes: 'Tap closed or partly open, kinked hose, blocked inlet hose filter, low pressure, a faulty inlet valve, or a leaking Aqua stop hose (red indicator)', check: 'Open the tap fully, straighten the hose and clean the inlet hose filter with the tap closed' },
      { code: 'OE', meaning: "Drain error: the water isn't draining, or drains too slowly", causes: 'Kinked or blocked drain hose, clogged drain pump filter, too many suds or a failed drain pump', check: 'Straighten the drain hose and clean the drain pump filter (switch off and unplug first, expect water)' },
      { code: 'UE', meaning: "Unbalanced load: the drum can't be balanced for the spin", causes: 'Load too small, one heavy item, laundry bunched on one side, an overfull drum or the machine not level', check: 'Spread the load out, add one or two similar items to a small load and level the machine' },
      { code: 'dE / dE1 / dE2 / dE4', meaning: "Door error: the door isn't closed properly or hasn't locked", causes: 'Laundry caught in the seal, door not pushed shut, an overfull drum, a bent or broken catch, or a faulty lock', check: 'Clear the seal, close the door firmly, then switch off at the wall for a minute and restart' },
      { code: 'LE', meaning: "Motor locked: the drum isn't turning as it should", causes: 'An overloaded drum, or a coin or other item jamming it; otherwise a motor fault', check: 'Reduce the load, remove anything stuck and leave the machine off for 30 minutes before restarting' },
      { code: 'tE', meaning: "Heating or temperature sensor error (LG's front loader manual calls it a control error)", causes: 'Usually a faulty temperature sensor (thermistor), or a heating fault', check: 'Switch off at the wall and call a technician' },
      { code: 'FE', meaning: 'Overflow: too much water in the drum', causes: "An inlet valve that won't close, or extra water coming in through the detergent drawer", check: 'Close the tap, switch off at the wall, unplug and call a technician' },
      { code: 'PE', meaning: "Pressure sensor error: the machine can't read the water level", causes: 'A faulty water level sensor or connection', check: 'Restart once; if PE returns, close the tap and call a technician' },
      { code: 'AE', meaning: 'Water leak inside the machine on front loaders (a drum rotation problem on some top loaders)', causes: 'A loose or damaged inlet hose, a leak inside the cabinet or a faulty leak safety switch', check: 'Switch off at the wall, close the tap and call a technician' },
      { code: 'vS (uS, u5)', meaning: 'Vibration sensor error', causes: 'A failed sensor or a poor connection', check: 'Press Start/Pause to carry on; if it returns, call a technician' },
      { code: 'CE', meaning: 'Motor over-current: too much current in the motor circuit', causes: 'A short circuit, loose connection, earth fault or power surge', check: 'Unplug for 10 seconds and retry; if it returns, close the tap and call a technician' },
      { code: 'PF', meaning: 'Power failure: the power was cut during the cycle', causes: 'Load shedding, an outage or a loose plug', check: 'Restart the programme once the power is stable' },
      { code: 'Sud', meaning: 'Too many suds: the machine runs extra steps to clear the foam', causes: "Too much detergent, or one that isn't low-suds (HE)", check: 'Let it finish, then use less low-suds (HE) detergent' },
      { code: 'dHE', meaning: 'Drying error on LG washer dryers', causes: 'A fault in the drying system', check: 'Restart once; if it returns, call a technician' },
      { code: 'CL', meaning: 'Child lock is on (not a fault)', causes: 'The child lock was switched on, sometimes by accident', check: 'Hold the Child Lock button (or the two buttons marked with a lock) for about 3 seconds' },
      { code: 'tCL', meaning: 'Tub clean reminder (not a fault)', causes: 'A prompt to run the Tub Clean programme', check: 'Run Tub Clean with the drum empty' },
    ],
    sources: [
      { label: "LG FV1450S4W and FV1409S4W owner's manual (MFL71408049): troubleshooting", url: 'https://www.manualslib.com/manual/2656181/Lg-Fv1450s4w.html?page=35' },
      { label: 'LG Help Library: front load washer error code list', url: 'https://www.lg.com/us/support/help-library/lg-front-load-washer-error-code-list--20155069413456' },
      { label: 'LG Help Library: washer error code list (front and top load)', url: 'https://www.lg.com/us/support/help-library/lg-washer-error-codes--20150140270078' },
      { label: 'LG Help Library: front load washer dE, dE1 and dE2 codes', url: 'https://www.lg.com/us/support/help-library/front-load-washer-what-are-de-de1-and-de2-error-codes--1400508168566' },
      { label: 'LG UK support: washing machine common error messages', url: 'https://www.lg.com/uk/support/product-support/troubleshoot/help-library/cs-CT00008363-20152500935902/' },
      { label: 'LG India support: top load washer error code list', url: 'https://www.lg.com/in/support/product-support/troubleshoot/help-library/cs-CT52006627-20154403824705/' },
    ],
    faqs: [
      { q: 'Why does my LG show IE when the tap is fully open?', a: "IE means the drum didn't fill in the expected time, so the tap is only one part of it. A kinked hose, a blocked mesh filter in the hose or low water pressure in the house can all slow the flow. If the supply is good and the filter is clean, the inlet valve needs testing." },
      { q: 'Is CL on an LG washer a fault?', a: "No. CL means the child lock is on, and the buttons won't respond until you switch it off. Press and hold the Child Lock button, or the pair of buttons marked with a lock on some models, for about three seconds." },
      { q: 'My LG showed PF after load shedding. Is it damaged?', a: "Not necessarily. PF records that the power was cut during the cycle, and LG's advice is to restart the programme once the power is back. If the machine won't restart, or shows a different code when the power returns, get it checked." },
      { q: 'Does an LE code mean the motor has failed?', a: "Not always. LG links LE to an overloaded drum or something stuck in it, and advises leaving the machine off for 30 minutes before trying again. If LE keeps coming back with a normal load, the motor, its sensor or the wiring needs testing." },
      { q: 'What does tCL mean on my LG?', a: "tCL is a reminder to run the Tub Clean programme, not an error. Run it with the drum empty, adding a drum cleaning product if your manual calls for one. LG suggests running it about once a month." },
      { q: 'Can I keep washing if my LG shows tE?', a: "No. tE points to the temperature sensor or the heating control, so washes may not heat properly, and LG's manual says to unplug the machine and call for service. Switch it off at the wall and book a repair." },
      { q: "Why does my LG show OE when the drain hose isn't blocked?", a: "The drain pump filter is the next place to look, because fluff, coins and hair clips collect there. Too many suds can also stop the pump moving water, so use less detergent. If the filter is clean and you can't hear the pump running, the pump itself may have failed." },
    ],
  },
  {
    slug: 'samsung',
    brand: 'Samsung',
    brandSlug: 'samsung',
    name: 'Samsung error codes',
    title: 'Samsung Washing Machine Error Codes: 4C, 5C | ProServ',
    description: `Samsung washing machine error codes from Samsung's own guides: 4C, 5C, Ub, dC, LC, HC, UC and more, with safe checks. Call ${site.phone.display}.`,
    h1: 'Samsung washing machine error codes',
    primaryKeyword: 'Samsung washing machine error codes',
    summary: '4C, 5C, Ub, dC, LC, HC, UC, Sud and more.',
    intro: `<p>Samsung washing machine error codes, which Samsung calls information codes, pair a number or letter with C or E, such as <strong>4C</strong> (no water coming in) and <strong>5C</strong> (not draining). Here is what each code means according to Samsung's own support guides, with the checks you can safely do first.</p>`,
    body: `
<h2>How Samsung information codes work</h2>
<p>A Samsung machine shows a code when one of its self-checks fails, then stops or pauses the programme. Samsung lists the C and E forms of each code together with one meaning, so 4C and 4E both mean a water supply problem, and your machine shows one form or the other. An extra digit narrows things down: 4C2 means the incoming water is too hot, and dC1 points to the door lock rather than an open door.</p>
<p>Samsung warns that some characters look alike on the display, such as 5 and S or 3 and E, so read the code twice if it seems to be missing from the table.</p>

<h2>Find your Samsung model number</h2>
<p>Samsung says codes can differ between models, so have the model number ready. It usually starts with WW on a front loader, WA on a top loader and WD on a washer dryer. The rating label is usually at the back of the machine; many front loaders also have one inside the door opening, and on a top loader you can check under the lid.</p>

<h2>Safe checks before you call</h2>
<div class="callout callout-safety"><p><strong>Safety first:</strong> switch off at the wall and unplug before you touch a filter or hose. Samsung warns you to take extra care with the hot water connection, and water left after a hot wash can scald, so let it cool first.</p></div>
<h3>Not filling: 4C and 4C2</h3>
<p>Check that the tap is fully open, the hose isn't kinked and the pressure is normal at another tap. For 4C2, move the cold inlet hose off the hot tap, which in most homes is the one fed by the geyser. With the taps closed, rinse the mesh filter in the hose, and clean the detergent drawer, which Samsung links to some 4C codes.</p>
<h3>Not draining: 5C</h3>
<p>On a front loader, the debris filter is behind a small cover at the bottom front. Put down towels and a container, pull out the emergency drain hose, take off its cap and let the water run out. Then turn the filter anticlockwise, clean it with a soft brush and refit it clockwise until it's secure.</p>
<h3>Balance and power: Ub and UC</h3>
<p>For Ub, spread the laundry evenly around the drum and check the machine stands level on a flat, stable floor. For UC or the 9C codes, plug the machine straight into a wall socket, not an extension lead, and wait for steady power.</p>

<h2>When a technician is needed</h2>
<p>For the sensor, motor, heating and board codes (1C, 3C, 8C, AC, HC, tE and tC), Samsung's advice is to switch off, wait a minute and start a new programme. If the code comes back, the part behind it needs testing. The top loader clutch codes PC and PE, and an overflow code that returns after a drain and spin, need a technician too.</p>
<p>If the machine overfills or you find water underneath, switch off at the wall and close the tap. If the earth leakage trips when the machine starts, leave it off until it has been checked.</p>

<h2>What happens on a repair visit</h2>
<p>The technician reads the code, asks what the machine was doing when it stopped and tests the parts behind it: for 4C and 1C, the inlet valve, the water level sensor and the small air hose that feeds it; for 5C, the drain pump; for dC1, the door lock; for HC or tE, the heater and temperature sensor. On inverter models, 3C and AC6 mean testing the motor, its wiring and the inverter board.</p>
<p>You get a quote before any work starts, and most repairs are done there and then when the part is available. The call-out fee is ${f.calloutFee}, ${f.calloutCondition}, and every repair comes with a ${f.warranty} warranty on parts and labour. See <a href="${brandUrl('samsung')}">Samsung washing machine repairs</a> for the wider picture, or our <a href="/services/front-loader-repairs/">front loader repairs</a> and <a href="/services/top-loader-repairs/">top loader repairs</a> pages.</p>

<h2>Book a Samsung repair</h2>
<p>Call or WhatsApp with the code and your model number, or use our <a href="/contact/">contact form</a>. We've been repairing washing machines for ${f.yearsInBusiness} years, and our <a href="/">washing machine repairs</a> page explains how a visit works.</p>

<h2>If your code isn't listed</h2>
<p>Washer dryers and machines with extra features have codes of their own, so check your model's manual or send us the code with the model number. Our guides to a <a href="/problems/washing-machine-not-filling-with-water/">washing machine not filling with water</a> and a <a href="/problems/washing-machine-door-wont-open/">washing machine door that won't open</a> cover the symptoms behind several codes. We're an independent repairer, not part of Samsung; the meanings here come from Samsung's own support pages.</p>`,
    codes: [
      { code: '4C / 4E', meaning: "Water supply problem: the machine isn't filling", causes: 'Tap closed, kinked hose, low pressure, a clogged mesh filter or blocked detergent drawer; also the inlet valve, level sensor or main board', check: 'Open the tap, straighten the hose, and clean the mesh filter (taps closed) and the detergent drawer' },
      { code: '4C2 / 4E2', meaning: 'The water coming in is too hot', causes: 'The cold inlet hose is on a hot tap', check: 'Close the taps, move the hose to the cold tap, then switch off and restart' },
      { code: '5C / 5E', meaning: "Drain problem: the water isn't draining", causes: 'Clogged debris filter, kinked or blocked drain hose, a blocked household drain or a faulty drain pump', check: 'Straighten the drain hose and clean the debris filter (switch off and unplug first, expect water)' },
      { code: 'dC / dE', meaning: "Door open: the door isn't properly closed", causes: 'Door not pushed shut, or laundry caught in it', check: 'Close the door firmly with nothing caught in it' },
      { code: 'dC1 / dE1', meaning: "The door lock isn't locking or unlocking properly", causes: 'A door lock fault', check: 'Switch off at the wall, wait a minute and restart; if it returns, call a technician' },
      { code: 'ddC', meaning: 'Add Door opened without pressing Start/Pause (models with an Add Door)', causes: "The small Add Door was opened mid-cycle or isn't shut", check: 'Close the Add Door, then press and hold Start/Pause' },
      { code: 'OC / OE / OF', meaning: 'Overflow: too much water in the drum', causes: "Water still coming in, such as an inlet valve that won't close or a water level fault", check: 'Let it drain and spin, then restart; if it returns, close the tap and call a technician' },
      { code: 'Ub / UE', meaning: "Unbalanced load: the spin can't start", causes: 'Laundry bunched on one side, one bulky item, or the machine not level', check: 'Spread the laundry evenly and check the machine is level and stable' },
      { code: 'LC / LE', meaning: 'Low water level or a drain hose problem (also LC1 or LE1)', causes: 'Drain hose end too low so water siphons out, a blocked drain hose, or a leak', check: 'Raise the hose end to the height in your manual and look for water under the machine' },
      { code: '1C / 1E', meaning: "Water level sensor isn't working properly", causes: 'The level sensor, its air hose or its connection', check: 'Restart once; if it returns, call a technician' },
      { code: '3C / 3E', meaning: "Drum motor isn't running as expected", causes: 'A fault in the motor or the parts that drive it', check: 'Switch off for a minute and start a new programme; if it returns, call a technician' },
      { code: 'HC / HE', meaning: 'Water temperature or heating problem', causes: 'A hose on a hot supply, or a heating fault', check: 'Check the hose is on the cold tap and restart; if it returns, call a technician' },
      { code: 'tE / tC1 / tC2 / tC3', meaning: 'Temperature sensor error (also tE1, tE2 or tE3)', causes: 'A faulty temperature sensor or connection', check: 'Switch off at the wall for a minute and start a new programme; if it returns, call a technician' },
      { code: '8C / 8E', meaning: 'Vibration (MEMS) sensor fault; on some models 8E is a current error instead', causes: 'A fault in the sensor that detects out-of-balance movement', check: 'Restart once; if it returns, call a technician' },
      { code: 'AC / AE', meaning: "Control boards aren't communicating (AC6 or AE6: the main and inverter boards)", causes: 'A board or wiring fault', check: 'Switch off and restart; if the code stays, call a technician' },
      { code: 'UC / 9C1 / 9C2', meaning: 'Supply voltage too low or unstable (also 9E1 or 9E2)', causes: 'Power cuts, an irregular supply, or an extension lead or adaptor', check: 'Plug straight into a wall socket and wait for steady power' },
      { code: 'PC / PE', meaning: "Clutch position can't be detected (top loaders; also PC1 or PE1)", causes: 'A clutch or clutch sensor fault', check: 'Switch off at the wall and call a technician' },
      { code: 'bE1 / bE2 / bE3', meaning: 'A button is stuck or not responding', causes: 'A sticking control panel button', check: 'Switch off, unplug and wipe the buttons with a lightly dampened cloth' },
      { code: 'Sud', meaning: 'Too much foam: the machine removes it, then carries on (not a fault)', causes: 'Too much detergent, or a build-up of powder detergent', check: 'Use less detergent; if it keeps happening, run Eco Drum Clean or an empty 90°C cotton cycle' },
    ],
    sources: [
      { label: 'Samsung South Africa support: information codes on your washing machine', url: 'https://www.samsung.com/za/support/home-appliances/check-out-the-information-codes-on-my-washing-machine/' },
      { label: "Samsung South Africa support: when the washing machine doesn't fill or drain", url: 'https://www.samsung.com/za/support/home-appliances/what-to-do-when-my-washing-machine-does-not-fill-up-or-drain/' },
      { label: 'Samsung UK support: what the codes on your washing machine mean', url: 'https://www.samsung.com/uk/support/home-appliances/what-do-the-codes-on-my-washing-machine-mean/' },
      { label: 'Samsung UK support: the 4E or 4C error code', url: 'https://www.samsung.com/uk/support/home-appliances/the-4e-error-is-displayed-on-the-panel-of-my-washing-machine-what-can-i-do/' },
      { label: 'Samsung support: why the washing machine shows SUD', url: 'https://www.samsung.com/latin_en/support/home-appliances/why-does-my-washing-machine-show-sdu-on-the-screen/' },
    ],
    faqs: [
      { q: 'Are 4C and 4E the same code on a Samsung?', a: "Yes. Samsung lists them together with one meaning: water isn't being supplied. Which one you see depends on the model, and the checks are the same for both: the tap, the hose, the pressure and the mesh filter." },
      { q: 'Why will my Samsung not respond after showing 4C?', a: "Samsung says the machine drains for about three minutes after a 4C code, and the buttons stay disabled while it does. Wait for it to finish, sort out the water supply, then start the programme again." },
      { q: 'What does 4C2 mean on a Samsung washing machine?', a: "It means the water coming in is too hot, usually because the cold inlet hose has been connected to a hot tap. Move the hose to the cold tap, switch off and restart. Samsung warns that hot water may deform some laundry on certain cycles." },
      { q: 'Why does my Samsung show LC when nothing is leaking?', a: "LC can come from the drain hose rather than a leak. If the end of the hose sits too low, for example on the floor, water can siphon out while the machine fills. Raise the hose end into the standpipe or sink as the manual shows, and check it isn't blocked." },
      { q: 'What does UC mean on my Samsung?', a: "UC means the supply voltage is low or unstable, which can happen around load shedding or when the machine runs off an extension lead. Plug it straight into a wall socket and wait for steady power. If it keeps showing when the rest of the house has a good supply, have the machine checked." },
      { q: 'Is Sud a fault on a Samsung washing machine?', a: "No. Sud means the machine has detected too much foam and is removing it, after which it carries on with the wash. Use less detergent next time, and choose one made for automatic machines rather than hand washing." },
      { q: 'Does dC mean my Samsung door lock is broken?', a: "Usually not. dC means the machine is trying to run with the door open, so close it firmly and check that no laundry is caught. If you see dC1 instead, the lock itself isn't locking or unlocking properly, and it needs a technician if it returns after a restart." },
    ],
  },
  {
    slug: 'bosch',
    brand: 'Bosch',
    brandSlug: 'bosch',
    name: 'Bosch error codes',
    title: 'Bosch Washing Machine Error Codes: E18, E17 | ProServ',
    description: `Bosch washing machine error codes from Bosch's own pages and manuals: E17, E18, E23, newer E:30 and E:36 codes, and safe checks. Call ${site.phone.display}.`,
    h1: 'Bosch washing machine error codes',
    primaryKeyword: 'Bosch washing machine error codes',
    summary: 'E17, E18, E23 and the newer E:30 and E:36 codes.',
    intro: `<p>Bosch washing machine error codes come in two styles: a letter and two digits, such as <strong>E18</strong> (not draining) or <strong>E17</strong> (water supply), and on many newer models a longer code with a suffix, such as <strong>E:36-25</strong>. This guide explains both, using Bosch's own support pages and manuals.</p>`,
    body: `
<h2>Two styles of Bosch code</h2>
<p>Many Bosch washing machines show a letter and two digits, and the same fault can appear in more than one form: Bosch's support pages pair the codes as E17 or F17 and E23 or F23, and say that F18 and d02 are the same fault as E18.</p>
<p>Newer Bosch machines use a longer code with a suffix, such as E:36-25 for a blocked drain pump or E:30-10 for a water supply problem, so note down both parts. Some faults on these machines show as a symbol instead: a tap symbol means the water pressure is too low, and a flashing door symbol means the door isn't closed properly.</p>

<h2>Find the E-Nr on your Bosch</h2>
<p>Bosch identifies each machine by its E-Nr (the model number) and an FD number that records when it was made. Both are on the rating plate, which Bosch puts inside the door, inside the maintenance flap or on the back, depending on the model. The manual for your E-Nr has the code table for your machine.</p>
<p>Siemens washing machines come from the same manufacturer and many use similar codes, but check your own manual first. See <a href="/brands/siemens-washing-machine-repairs/">Siemens washing machine repairs</a> if that's your brand.</p>

<h2>Safe checks for common codes</h2>
<div class="callout callout-safety"><p><strong>Safety first:</strong> close the tap, then switch off at the wall and pull out the plug before you touch the drain pump or a hose. Bosch warns that water from a hot wash can scald, so let it cool before you open the service flap, and have towels and a shallow container ready.</p></div>
<h3>Not filling: E17, E:30-10 or the tap symbol</h3>
<p>Turn the tap fully on and check that the inlet hose isn't kinked or squashed behind the machine. With the tap closed, clean the small filters at the hose connection as your manual shows, then check the pressure at another tap.</p>
<h3>Not draining: E18, E:30-80 or E:36</h3>
<p>Check that the drain hose isn't kinked, trapped or routed too high, and that no unapproved extension has been added. Then clean the drain pump: open the service flap at the bottom front, drain the water through the small emergency hose into a container, unscrew the pump cover slowly and remove any fluff, coins or hair clips so the impeller turns freely. Screw the cover back on firmly. Then, as Bosch suggests, pour about a litre of water into compartment II of the drawer and run the drain programme to check for leaks.</p>

<h2>Faults Bosch says you can't fix</h2>
<p>Bosch says the owner can't put right E19, E23, E25, E26, F27 or E28, which cover the heating, the Aquastop leak protection and the machine's sensors. For these, switch off at the wall and book a technician. E20 is worth one reset by switching off and on; if it returns, it needs a repair.</p>
<p>Take E23 seriously: Aquastop stops the water when it detects a leak, so clearing the code without fixing the leak lets water escape again on the next wash. If the earth leakage or breaker trips when the machine runs, leave it switched off until it has been checked.</p>

<h2>What the technician checks</h2>
<p>A Bosch repair starts with the code and the E-Nr. E18 and the E:36 codes lead to the drain pump, its housing and the hose run; E17 and E:30-10 to the inlet valve, the water level sensor and, where fitted, the flow sensor. For E23 the technician traces the leak to a hose, the pump, a seal or the tub before the leak protection is reset. Heating codes mean testing the element and its sensor.</p>
<p>You'll have a quote before any work starts. The call-out fee is ${f.calloutFee}, ${f.calloutCondition}, and a ${f.warranty} warranty covers the parts and labour. Our <a href="${brandUrl('bosch')}">Bosch washing machine repairs</a> page covers the wider faults on these machines, from door locks to bearings.</p>

<h2>Book a Bosch repair</h2>
<p>Call or WhatsApp us with the code and the E-Nr, or fill in the form on our <a href="/contact/">contact page</a>. We aim to be with you ${f.arrivalTime} on urgent call-outs, depending on where the technician is working. If the machine has stopped without a code, our main <a href="/">washing machine repairs</a> page explains how a visit works.</p>

<h2>If your code isn't listed</h2>
<p>Bosch has made many generations of washing machines, and no single table covers them all. For a code your manual doesn't list, Bosch's newer manuals say to hold the on/off button for about five seconds to restart; if the code returns, unplug the machine for at least 30 seconds and book a repair, quoting the exact code. Our guides to a <a href="/problems/washing-machine-not-draining/">washing machine not draining</a> and a <a href="/problems/washing-machine-leaking/">washing machine leaking</a> cover the symptoms. ProServ is an independent repair business with no tie to Bosch; every meaning in the table comes from Bosch's published support pages and manuals.</p>`,
    codes: [
      { code: 'E16 / F16', meaning: 'Door open', causes: "The door isn't closed properly, or laundry is caught in it", check: 'Close the door firmly; if the code stays, call a technician' },
      { code: 'E17 / F17', meaning: "Water supply time exceeded: the machine didn't fill in time", causes: 'Tap closed, kinked inlet hose, blocked inlet filter or low water pressure', check: 'Open the tap fully, straighten the hose and clean the inlet filter with the tap closed' },
      { code: 'E18 / F18 / d02', meaning: "No drainage: the water isn't being pumped out", causes: 'A blocked drain pump or a kinked or blocked drain hose; if both are clear, a faulty pump', check: 'Straighten the drain hose, then drain and clean the pump as your manual shows' },
      { code: 'E19 / F19', meaning: "Heating time exceeded: the water didn't heat up in time", causes: 'A heating fault, such as the element or its temperature sensor', check: 'Switch off at the wall and call a technician' },
      { code: 'E20 / F20', meaning: "Unexpected heating: the machine heated when it shouldn't have", causes: 'A fault in the heating control', check: 'Reset by switching the machine off and on; if it returns, call a technician' },
      { code: 'E23 / F23', meaning: 'Aquastop activated: the leak protection has stopped the machine', causes: 'Water leaking inside the machine, for example from a hose, the pump or a seal', check: "Switch off at the wall, close the tap and call a technician; don't keep resetting it" },
      { code: 'E25 / F25', meaning: 'Turbidity sensor faulty (it checks how cloudy the water is)', causes: 'A faulty sensor or connection', check: 'Switch off at the wall and call a technician' },
      { code: 'E26 / F26', meaning: 'Analogue pressure (water level) sensor faulty', causes: 'A faulty sensor or connection', check: 'Switch off at the wall and call a technician' },
      { code: 'F27', meaning: 'Pressure sensor faulty', causes: 'A faulty water level sensor or connection', check: 'Switch off at the wall and call a technician' },
      { code: 'E28 / F28', meaning: 'Flow sensor faulty (it measures the water coming in)', causes: 'A faulty sensor or connection', check: 'Switch off at the wall and call a technician' },
      { code: 'E:30-10', meaning: 'Water supply problem (newer models)', causes: 'Tap off, inlet hose kinked or jammed, inlet filters blocked, low water pressure, or a faulty water level sensor', check: 'Turn the tap fully on, check the hose, clean the inlet filters and check the pressure at another tap' },
      { code: 'E:30-20', meaning: 'Water level fault that Bosch calls a critical malfunction', causes: 'Too much detergent, or water added during the programme; otherwise a fault that needs a technician', check: 'Turn off the tap, wait about 5 minutes for it to drain and restart; call a technician if it returns' },
      { code: 'E:36-10 / E:30-80', meaning: "Water isn't being pumped out", causes: 'Drain hose routed too high, kinked, trapped or wrongly extended, or a blocked drain pipe or hose', check: 'Check the drain hose against the installation instructions, clear any blockage and clean the drain pump' },
      { code: 'E:36-25 / E:36-26', meaning: 'Drain pump blocked', causes: 'Fluff, coins or small items caught in the drain pump', check: 'Switch off and unplug, let hot water cool, then drain and clean the pump as your manual shows' },
      { code: 'E:38-25 / E:38-26', meaning: 'Drain pump blocked, or the inlet opening in the rubber door seal is blocked', causes: 'Fluff or debris in the pump or in the small opening in the door seal', check: 'Run the drum clean programme, then clean the drain pump and the opening in the door seal as your manual describes' },
      { code: 'H:32', meaning: 'Spin stopped: the laundry is unevenly spread', causes: 'Laundry bunched on one side, or a single heavy item', check: 'Spread the laundry out, mixing large and small items, and restart the spin' },
      { code: 'E:10-00 / E:10-10 / E:10-20', meaning: 'Automatic dosing pump blocked (models with i-DOS)', causes: 'The pump for the automatic detergent dosing system is blocked', check: "Clean the detergent drawer as your manual shows, and add detergent by hand until it's fixed" },
    ],
    sources: [
      { label: 'Bosch South Africa support: E18 in the display', url: 'https://www.bosch-home.com/za/customer-service/get-support/e18-in-display' },
      { label: 'Bosch New Zealand support: washing machine errors E16 to E28', url: 'https://www.bosch-home.co.nz/service/get-support/washing-machine-errors' },
      { label: 'Bosch New Zealand support: error E23 or F23 (Aquastop)', url: 'https://www.bosch-home.co.nz/service/get-support/error-e23-or-f23-washing-machine' },
      { label: 'Bosch WGB244AXGC user manual (9001873690): troubleshooting', url: 'https://media3.bosch-home.com/Documents/9001873690_D.pdf' },
      { label: 'Bosch WAV28KH3GB user manual (9001558664): troubleshooting', url: 'https://media3.bosch-home.com/Documents/9001558664_C.pdf' },
    ],
    faqs: [
      { q: 'Is F18 on a Bosch the same as E18?', a: "Yes. Bosch says F18 and d02 are the same fault as E18: the machine isn't draining. Start with the drain hose and the drain pump, and book a repair if the pump still won't move the water." },
      { q: 'What should I do when my Bosch shows E23?', a: "Close the tap, switch the machine off at the wall and book a technician. E23 means the Aquastop leak protection has been triggered, and Bosch says it isn't a fault owners can fix." },
      { q: 'Why does my Bosch show a tap symbol?', a: "On newer Bosch machines the tap symbol means the water pressure is too low. Make sure the tap is fully open and the hose isn't kinked, then check the pressure at another tap. If the supply is good and it still shows, the inlet filters may be blocked or the valve may need testing." },
      { q: 'What does H:32 mean on a Bosch washing machine?', a: "H:32 means the spin stopped because the laundry was unevenly spread in the drum. Redistribute the load, mixing large and small items, and restart. If it happens with every load, have the machine checked for level and worn suspension parts." },
      { q: 'Why does my Bosch show E:30-20 after a wash with extra detergent?', a: "Bosch's manual calls E:30-20 a critical malfunction, but it also lists too much detergent and water added during the programme as causes. Turn off the tap, wait about five minutes for the machine to drain and restart it. If the code returns with a normal dose, book a repair." },
      { q: 'Can I keep using my Bosch with an E19 heating code?', a: "No. E19 means the water didn't heat up in the time allowed, so washes won't reach the right temperature, and Bosch says the owner can't fix it. Switch it off at the wall and have the heater and its sensor tested." },
      { q: 'Where is the drain pump on a Bosch?', a: "On Bosch front loaders it sits behind the service flap at the bottom front of the machine, with a small emergency drain hose beside it. Switch off at the wall, unplug and let any hot water cool before you open it, and keep towels and a container ready." },
    ],
  },
  {
    slug: 'defy',
    brand: 'Defy',
    brandSlug: 'defy',
    name: 'Defy error codes',
    title: 'Defy Washing Machine Error Codes Explained | ProServ',
    description: `Defy washing machine error codes from Defy's own manuals: top loader E1 to E6, Ec, Ed, EE, Por and more, plus front loader help. Call ${site.phone.display}.`,
    h1: 'Defy washing machine error codes',
    primaryKeyword: 'Defy washing machine error codes',
    summary: 'Top loader codes E1 to E6, Ec, Ed, EE and Por, plus front loader help.',
    intro: `<p>Defy washing machine error codes appear mainly on Defy top loaders with a digital display, as a short code such as <strong>E1</strong> (slow water intake) or <strong>E2</strong> (slow draining). Many Defy front loaders show no numbered codes at all. Here's what Defy's own manuals say each code means.</p>`,
    body: `
<h2>Which Defy machines show codes</h2>
<p>Defy top loaders in the DTL range show a fault as a short code on the digital display, though Defy notes that a code can take several minutes to appear.</p>
<p>Many Defy front loaders work differently. The manuals for the DAW381 and DAW388, for example, have no list of codes at all; they work through symptoms instead, such as the door not opening or the machine not filling. If a programme can't be started or selected, Defy explains that the machine may have switched to a self protection mode because of a supply problem, such as the mains voltage or the water pressure. Turning the programme knob to another programme cancels it.</p>
<p>Two other front loader behaviours look like faults but aren't. If a wash takes longer than the manual says, Defy's automatic foam absorption may be dealing with too much detergent. If the time stops counting down, the machine may be heating the water or correcting an unbalanced load.</p>

<h2>Codes vary between Defy ranges</h2>
<p>Defy has sold many ranges over the years, and the codes aren't the same across all of them. The manual covering the DTL148, DTL149, DTL150 and DTL161 lists E1 to E6, with E6 meaning the lid is open. The DTL165 keeps E1 to E5 but adds codes for the electronics, the heating, the lid lock, the inverter and the motor drive, plus a Por warning for the power supply.</p>
<p>That's why the model number matters. It starts with DTL on Defy top loaders and DAW on front loaders, and it's printed on a sticker on the cabinet, usually at the back, under the lid or inside the door opening. Defy publishes the manuals for its current machines, with the codes in the troubleshooting pages.</p>

<h2>Safe first checks</h2>
<div class="callout callout-safety"><p><strong>Safety first:</strong> press the power button to switch off, then switch off at the wall before you touch a hose or a filter. Close the tap before you unscrew the inlet hose. Never force a locked lid and never open the cabinet: Defy's own manual warns owners not to try to repair a machine that has stopped working.</p></div>
<ul class="checklist">
  <li><strong>E1, slow water intake:</strong> check that the tap is open and the municipal supply hasn't been cut, test the pressure at another tap and make sure the hot and cold hoses haven't been swapped. With the tap closed, rinse the small filter where the hose meets the machine.</li>
  <li><strong>E2, slow draining:</strong> make sure the drain hose isn't bent, isn't hooked too high and sits properly in the standpipe or sink, and check whether the power went off during the cycle, which Defy also lists as a cause.</li>
  <li><strong>E3, unbalanced:</strong> spread the laundry evenly around the tub so it isn't clumped on one side, and check that the machine stands level.</li>
  <li><strong>E6, lid open:</strong> on the DTL148, DTL149, DTL150 and DTL161, close the lid and check that nothing is stopping it closing.</li>
  <li><strong>Por, power warning:</strong> the mains voltage is too low or too high. Wait for the supply to settle, for example after load shedding, and plug the machine straight into a wall socket rather than an extension lead.</li>
</ul>
<p>On a front loader with no code, the same basics apply: tap open, inlet hose straight, inlet filter clean, drain hose clear and the pump filter cleaned as the manual describes, with towels and a shallow tray ready for the water.</p>

<h2>Codes to leave to a technician</h2>
<p>For E4, E5, E8, Ec, Ed, EE, EF and EA, Defy's manual gives one instruction: call for service. These codes involve the water level sensor, the control electronics, the heating, the lid lock and the motor drive, none of which an owner can safely test. Switch the machine off at the wall and note the code.</p>
<p>E4 means the machine has overfilled, so close the tap as well, and with EE don't pull on the lid, because the lid lock has already failed. If the earth leakage trips when the machine runs, leave it off until a technician has checked it.</p>

<h2>What the technician checks</h2>
<p>On a top loader with E1 or E5, the technician tests the inlet valve and the water level (pressure) sensor. E2 leads to the drain path: the hose, the drain pump on pump models, and anything caught in between. An E3 that keeps coming back with a well-spread load can come down to worn suspension rods, which let the tub swing too far. Electronic codes such as Ec, E8, EF and EA mean testing the control board and the inverter before deciding what to replace.</p>
<p>You'll get a quote before any work begins. If the part is available, most repairs are completed on the same visit; if it has to be ordered, the technician tells you before you agree. The call-out fee is ${f.calloutFee}, ${f.calloutCondition}, and we give a ${f.warranty} warranty on parts and labour. Our <a href="${brandUrl('defy')}">Defy washing machine repairs</a> page covers the wider faults on Defy front and top loaders, and <a href="/services/top-loader-repairs/">top loader repairs</a> explains how those jobs are done.</p>

<h2>Book a Defy repair</h2>
<p>Call or WhatsApp us with the code and model number, or use our <a href="/contact/">contact page</a>. We've been repairing washing machines for ${f.yearsInBusiness} years and come to homes in ${areaList()}. Our <a href="/">washing machine repairs</a> page explains the whole process.</p>

<h2>If your code isn't listed</h2>
<p>Defy machines outside the ranges above may use different codes. Check the troubleshooting section of your manual, or send us the code (or a short video of the display) with the model number, and see our guides to a <a href="/problems/washing-machine-not-draining/">washing machine not draining</a> and a <a href="/problems/washing-machine-not-spinning/">washing machine not spinning</a>. We're an independent repairer with no connection to Defy, and the meanings in the table come from Defy's published manuals.</p>`,
    codes: [
      { code: 'E1', meaning: 'Water intake is very slow', causes: 'Tap shut, supply cut off, low water pressure, a clogged filter at the inlet valve, or the hot and cold hoses swapped', check: 'Open the tap, test the pressure at another tap, check the hoses are on the right taps and rinse the inlet filter with the tap closed' },
      { code: 'E2', meaning: 'Water drainage is very slow', causes: 'Drain hose badly positioned, bent or placed too high, a blockage in the hose or the drain pump (pump models), or a power failure', check: "Straighten and reposition the drain hose at the right height, check for blockages and check the power didn't go off" },
      { code: 'E3', meaning: 'Unbalanced load', causes: 'Laundry clumped on one side of the tub, or the machine not standing level', check: 'Spread the laundry evenly around the tub and level the machine' },
      { code: 'E4', meaning: 'Overflow: too much water in the tub', causes: "Water still coming in when it shouldn't, such as an inlet valve or water level fault", check: 'Close the tap, switch off at the wall and call a technician' },
      { code: 'E5', meaning: 'Water level (pressure) sensor reading out of range', causes: 'A fault in the pressure sensor or its connection', check: 'Switch off at the wall and call a technician' },
      { code: 'E6', meaning: 'Lid open (DTL148, DTL149, DTL150 and DTL161)', causes: "The lid isn't closed, or something is stopping it closing", check: 'Close the lid firmly and clear anything in the way' },
      { code: 'E8', meaning: 'Communication failure in the electronics (DTL165)', causes: 'A fault in the control electronics or their wiring', check: 'Switch off at the wall and call a technician' },
      { code: 'Ec', meaning: 'Zero-cross detection failure (DTL165)', causes: 'A fault in the way the control board senses the mains supply', check: 'Switch off at the wall and call a technician' },
      { code: 'Ed', meaning: 'Heating system failure (DTL165)', causes: 'A fault in the heater or its control', check: 'Switch off at the wall and call a technician' },
      { code: 'EE', meaning: 'Mechanical lid lock failure (DTL165)', causes: 'A broken lock, for example after the lid was forced open', check: "Don't force the lid; switch off at the wall and call a technician" },
      { code: 'EF', meaning: 'Inverter failure (DTL165)', causes: 'A fault in the inverter that drives the motor', check: 'Switch off at the wall and call a technician' },
      { code: 'EA', meaning: 'Motor drive switch (TRIAC) failure (DTL165)', causes: 'The electronic switch that powers the motor has failed', check: 'Switch off at the wall and call a technician' },
      { code: 'Por', meaning: 'Power supply out of range (a warning)', causes: 'The mains voltage is too low or too high', check: 'Wait for normal power and plug straight into a wall socket; if it keeps showing, call a technician' },
      { code: 'CL', meaning: 'Child lock is on (not a fault)', causes: 'The child lock has been switched on', check: 'Switch it off with the buttons your manual shows' },
    ],
    sources: [
      { label: 'Defy DTL165 top loader instruction manual (074879): error codes', url: 'https://www.defy.co.za/content/dam/defy-rainbow-za-aem/defy-rainbow-za-aemProductCatalog/product-documents/8100230015-DTL-165/en-US-8100230015-MDM2-USER-MANUAL-FILE-en-US.pdf' },
      { label: 'Defy DTL148, DTL149, DTL150 and DTL161 instruction manual (071070): error codes', url: 'https://www.defy.co.za/content/dam/defy-rainbow-za-aem/defy-rainbow-za-aemProductCatalog/product-documents/8100230013-DTL-160/en-GB-8100230013-202408060957817-User-Manual---File-Longen-GB.pdf' },
      { label: 'Defy DAW381 front loader user manual: troubleshooting', url: 'https://www.defy.co.za/content/dam/defy-rainbow-za-aem/defy-rainbow-za-aemProductCatalog/product-documents/7146842700-DAW381/en-GB-7146842700-MDM2-USER-MANUAL-FILE-en-GB.pdf' },
      { label: 'Defy DAW388 front loader user manual: troubleshooting', url: 'https://www.defy.co.za/content/dam/defy-rainbow-za-aem/defy-rainbow-za-aemProductCatalog/product-documents/7161342300-DAW388/en-US-7161342300-2820527303.pdf' },
    ],
    faqs: [
      { q: 'Why did my Defy take so long to show E1?', a: "Defy's DTL165 manual says it can take 6 to 10 minutes for an error code to appear, so the delay is normal. Once E1 shows, check the tap, the water pressure and the inlet filter." },
      { q: 'My Defy front loader shows no code. How do I tell what is wrong?', a: "Many Defy front loaders, such as the DAW381, don't use numbered codes. Their manuals match symptoms to causes instead, for example a door that stays locked while there's still water in the drum. If that doesn't solve it, tell us what the machine is doing and send the model number." },
      { q: 'What does Por mean on my Defy?', a: "Por is a warning that the power supply is out of range, meaning the mains voltage is too low or too high. It can happen when the supply is unstable, for example around load shedding. If it keeps appearing while the rest of the house has normal power, have the machine checked." },
      { q: 'Can I open the lid when my Defy shows EE?', a: "Don't force it. EE means the mechanical lid lock has failed, and Defy's manual asks whether the lock is broken or the lid was forced open. Switch off at the wall and book a technician to free the lid and repair the lock safely." },
      { q: 'Is E3 on a Defy top loader a serious fault?', a: "Usually not. E3 means the load is unbalanced, so spread the laundry evenly around the tub and check that the machine is level. If it shows with every load, the suspension may be worn and needs a technician." },
      { q: "Does E2 mean my Defy's pump is broken?", a: "Not necessarily. Defy lists a bent or badly placed drain hose, a hose hooked too high, a blockage and even a power failure as causes of E2. Check those first; if the water still drains slowly, a technician can test the drain pump and clear the drain path." },
      { q: 'Why does my Defy show E6?', a: "On the DTL148, DTL149, DTL150 and DTL161, E6 means the lid is open. Close it firmly and make sure nothing, such as a sleeve, is stopping it shutting. If E6 stays with the lid closed, the lid switch needs checking." },
    ],
  },
];

export const brandLink = (slug: string) => brandUrl(slug);
