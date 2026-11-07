import type { ContentPage } from './types';
import { site, errorCodeUrl } from './site';

export interface Brand extends ContentPage {
  brand: string;
  /** True when an error code guide exists at /error-codes/[slug]-washing-machine-error-codes/ */
  hasErrorGuide: boolean;
}

const indie = (b: string) =>
  `<p class="callout">ProServ is an independent repairer. We are not affiliated with, authorised or endorsed by ${b}. ${b} is a trademark of its owner and is used here only to describe the machines we repair. If your machine is still under the manufacturer's warranty, contact ${b} first, because outside repairs may affect that warranty.</p>`;

export const brands: Brand[] = [
  {
    slug: 'defy',
    brand: 'Defy',
    name: 'Defy',
    hasErrorGuide: true,
    title: 'Defy Washing Machine Repairs | ProServ',
    description: `Defy washing machine repairs for front and top loaders: pumps, bearings, door locks, boards. Quote on site. Call ${site.phone.display}.`,
    h1: 'Defy washing machine repairs',
    primaryKeyword: 'Defy washing machine repairs',
    summary: 'Front and top loaders, from older Autowashers to current models.',
    intro: `<p>Defy washing machine repairs are a daily job for us. Defy machines are in homes all over South Africa, from hard-working top loaders to modern front loaders, and the brand's long local history means we see everything from 15-year-old machines to ones bought last month. We come to you, diagnose the fault and quote before starting.</p>`,
    body: `
<h2>Common Defy washing machine faults</h2>
<h3>Defy front loaders</h3>
<ul>
  <li><strong>Drain problems</strong>: blocked pump filters and worn drain pumps, often with an error on the display. See our <a href="${errorCodeUrl('defy')}">Defy washing machine error codes</a> guide.</li>
  <li><strong>Door lock faults</strong>: the machine won't start or the door won't release.</li>
  <li><strong>Bearing noise</strong>: rumbling on spin on older or heavily used machines.</li>
  <li><strong>Carbon brushes</strong>: the drum turns slowly or stops on spin.</li>
  <li><strong>Heating</strong>: element or temperature sensor faults, so washes come out cold.</li>
  <li><strong>Control board damage</strong> after surges and load shedding.</li>
</ul>
<h3>Defy top loaders</h3>
<ul>
  <li>Lid switch faults that stop the spin.</li>
  <li>Worn drive couplings or clutches, so the motor runs but the drum doesn't move.</li>
  <li>Suspension rods wearing, causing banging on spin.</li>
  <li>Inlet valves failing, so the machine won't fill.</li>
</ul>

<h2>Repair or replace your Defy?</h2>
<p>Defy machines are generally straightforward to work on and parts for common models are widely available in South Africa, which keeps most repairs well below the cost of a new machine. For older machines, we'll look at the overall condition, the tub and the cabinet before recommending a repair. Our <a href="/repair-or-replace/">repair or replace guide</a> helps with the decision.</p>

<h2>What to tell us when you book</h2>
<p>Send us the model number (on a sticker inside the door rim or at the back), whether it's a front or top loader, any code on the display, and what it's doing. A short video on WhatsApp helps. Related: <a href="/services/front-loader-repairs/">front loader repairs</a> and <a href="/services/top-loader-repairs/">top loader repairs</a>.</p>
${indie('Defy')}`,
    faqs: [
      { q: 'Do you repair old Defy machines?', a: 'Yes. We repair older Defy top loaders and front loaders, as long as parts are still available. We will check part availability before quoting.' },
      { q: 'My Defy shows an error code. What does it mean?', a: 'See our Defy error code guide, then send us the code and model number on WhatsApp. Codes can vary between models.' },
    ],
  },
  {
    slug: 'lg',
    brand: 'LG',
    name: 'LG',
    hasErrorGuide: true,
    title: 'LG Washing Machine Repairs | ProServ',
    description: `LG washing machine repairs for direct drive front loaders, top loaders and washer-dryers. OE, IE, UE faults fixed. Call ${site.phone.display}.`,
    h1: 'LG washing machine repairs',
    primaryKeyword: 'LG washing machine repairs',
    summary: 'Direct drive front loaders, top loaders and washer-dryers.',
    intro: `<p>LG washing machine repairs make up a big share of our call-outs, because LG front loaders, top loaders and washer-dryers are very popular in Gauteng homes. Many LG machines use a direct drive motor, where the motor sits right on the back of the drum with no belt. That design is quiet and reliable, but it has its own set of faults that need the right know-how.</p>`,
    body: `
<h2>Common LG washing machine faults</h2>
<ul>
  <li><strong>Not draining (OE)</strong>: a blocked filter or failed drain pump. See our <a href="${errorCodeUrl('lg')}">LG washing machine error codes</a> guide for OE, IE, UE and others.</li>
  <li><strong>Not filling (IE)</strong>: low water pressure, a blocked inlet filter or a failed inlet valve.</li>
  <li><strong>Unbalanced or not spinning (UE)</strong>: load balance, or a fault with the motor's hall sensor or stator.</li>
  <li><strong>Door faults (dE)</strong>: door lock or catch not engaging.</li>
  <li><strong>Motor locked (LE)</strong>: a direct drive motor fault, wiring issue or something jamming the drum.</li>
  <li><strong>Bearing noise</strong>: a rumble on spin. On direct drive machines the rotor has to come off to reach the bearings.</li>
  <li><strong>Washer-dryer not drying</strong>: heater, fan or condenser faults. See <a href="/services/washer-dryer-repairs/">washer dryer repairs</a>.</li>
</ul>

<h2>About direct drive repairs</h2>
<p>On a direct drive LG, the motor's rotor (the round part on the back of the drum) and stator (the coil assembly behind it) replace the belt and pulley. Faults show up as spinning problems, a loud knock on spin, or an LE or UE code. We test the hall sensor, stator windings and wiring before replacing anything, because the cheapest part is often the culprit.</p>

<h2>Top loaders and washer-dryers</h2>
<p>LG top loaders commonly need lid switches, drain pumps or inlet valves. Washer-dryers add the drying system, which we also repair. Related: <a href="/services/front-loader-repairs/">front loader repairs</a> and <a href="/services/top-loader-repairs/">top loader repairs</a>.</p>
${indie('LG')}`,
    faqs: [
      { q: 'What does OE mean on an LG washing machine?', a: 'OE generally means the machine could not drain. Start by checking the drain hose and pump filter. Our LG error code guide explains more.' },
      { q: 'Can you replace bearings on a direct drive LG?', a: 'On many models, yes. The rotor and stator come off first, then the tub is stripped. We will tell you if your model has a sealed tub that makes this uneconomical.' },
    ],
  },
  {
    slug: 'samsung',
    brand: 'Samsung',
    name: 'Samsung',
    hasErrorGuide: true,
    title: 'Samsung Washing Machine Repairs | ProServ',
    description: `Samsung washing machine repairs: 4C, 5C, UB and door faults, bearings, pumps and boards. Front and top loaders. Call ${site.phone.display}.`,
    h1: 'Samsung washing machine repairs',
    primaryKeyword: 'Samsung washing machine repairs',
    summary: 'Front loaders, top loaders and washer-dryers, including inverter models.',
    intro: `<p>Samsung washing machine repairs cover a wide range of machines, from compact front loaders in apartments to large-capacity top loaders and washer-dryers. Many Samsung models use digital inverter motors and display clear error codes, which makes diagnosis faster. We repair them at your home and quote before starting.</p>`,
    body: `
<h2>Common Samsung washing machine faults</h2>
<ul>
  <li><strong>Water supply (4C / 4E)</strong>: the machine isn't filling. Usually the tap, the inlet filter, pressure or the inlet valve. See our <a href="${errorCodeUrl('samsung')}">Samsung washing machine error codes</a> guide.</li>
  <li><strong>Drain (5C / 5E)</strong>: a blocked filter, hose or pump.</li>
  <li><strong>Unbalanced (UB / UE / Ub)</strong>: a load that can't be balanced, worn shock absorbers, or a motor sensor issue.</li>
  <li><strong>Door (DC / DE / dE)</strong>: the door lock or catch.</li>
  <li><strong>Heating (HC / HE)</strong>: element or temperature sensor.</li>
  <li><strong>Suds (SUD / Sd)</strong>: too much detergent, or the wrong kind. Use low-suds HE detergent in front loaders.</li>
  <li><strong>Bearings and drum spider</strong>: rumbling and drum play on older front loaders.</li>
  <li><strong>Control board</strong> faults, particularly after surges.</li>
</ul>

<h2>Samsung top loaders</h2>
<p>Large Samsung top loaders sometimes develop balance issues, lid lock faults or drain problems. Suspension rods can wear on heavily used machines, making them bang on spin. See <a href="/services/top-loader-repairs/">top loader repairs</a>.</p>

<h2>Samsung washer-dryers</h2>
<p>Drying faults are usually the heater, fan or a blocked condenser. See <a href="/services/washer-dryer-repairs/">washer dryer repairs</a>.</p>

<h2>Book a Samsung repair</h2>
<p>Send us the code on the display and the model number from the sticker. We'll tell you what it usually means for that model and book a technician. Related: <a href="/services/front-loader-repairs/">front loader repairs</a>.</p>
${indie('Samsung')}`,
    faqs: [
      { q: 'What does 4C mean on a Samsung washing machine?', a: 'It generally means a water supply problem: the machine is not filling. Check the tap, hose and pressure first. See our Samsung error code guide.' },
      { q: 'Why does my Samsung show Sud?', a: 'Too many suds were detected, usually from too much detergent or non-HE detergent. Reduce the dose and run a rinse.' },
    ],
  },
  {
    slug: 'bosch',
    brand: 'Bosch',
    name: 'Bosch',
    hasErrorGuide: true,
    title: 'Bosch Washing Machine Repairs | ProServ',
    description: `Bosch washing machine repairs: E18 drain faults, E17 fill faults, bearings, pumps and Aquastop leaks. Quote first. Call ${site.phone.display}.`,
    h1: 'Bosch washing machine repairs',
    primaryKeyword: 'Bosch washing machine repairs',
    summary: 'Front loaders and washer-dryers, freestanding and integrated.',
    intro: `<p>Bosch washing machine repairs need care, because Bosch front loaders are well engineered and worth fixing properly. Most Bosch machines we see are front loaders, freestanding or integrated, along with some washer-dryers. They're dependable, but drain pumps, door locks, carbon brushes and bearings do wear, and leak protection systems can stop the machine when they detect water.</p>`,
    body: `
<h2>Common Bosch washing machine faults</h2>
<ul>
  <li><strong>Drain fault (E18 / F18)</strong>: usually a blocked pump filter or drain hose, sometimes a failed pump. See our <a href="${errorCodeUrl('bosch')}">Bosch washing machine error codes</a> guide.</li>
  <li><strong>Water supply fault (E17 / F17)</strong>: tap closed, low pressure, blocked inlet filter or inlet valve.</li>
  <li><strong>Leak protection (E23 / F23)</strong>: water has been detected in the base of the machine. A leak needs to be found and fixed, not just reset.</li>
  <li><strong>Motor and drum (E21 / F21)</strong>: the drum isn't turning as expected. Carbon brushes are a common cause on brushed-motor machines.</li>
  <li><strong>Door lock faults</strong>: the machine won't start or the door won't open.</li>
  <li><strong>Bearings</strong>: rumbling and roaring on spin.</li>
  <li><strong>Heating</strong>: element and temperature sensor faults.</li>
</ul>

<h2>Integrated Bosch machines</h2>
<p>Integrated machines sit behind a kitchen cabinet door. We slide them out carefully, repair them, and refit them, checking the door alignment afterwards. It adds time to the job, which we include in the quote.</p>

<h2>Is a Bosch worth fixing?</h2>
<p>In most cases, yes. Bosch machines are built to be repaired, and a pump, lock or brush replacement costs far less than a new machine of the same quality. We'll tell you if a repair doesn't make sense. Related: <a href="/services/front-loader-repairs/">front loader repairs</a>, <a href="/services/washer-dryer-repairs/">washer dryer repairs</a>, and the closely related <a href="/brands/siemens-washing-machine-repairs/">Siemens washing machine repairs</a>.</p>
${indie('Bosch')}`,
    faqs: [
      { q: 'What does E18 mean on a Bosch washing machine?', a: 'E18 generally means the machine could not drain. Check the pump filter and drain hose. Our Bosch error code guide has more detail.' },
      { q: 'My Bosch shows a leak code. Can I just reset it?', a: 'Resetting may clear the code, but if water is in the base of the machine there is a leak that needs to be found. Please get it checked.' },
    ],
  },
  {
    slug: 'whirlpool',
    brand: 'Whirlpool',
    name: 'Whirlpool',
    hasErrorGuide: false,
    title: 'Whirlpool Washing Machine Repairs | ProServ',
    description: `Whirlpool washing machine repairs for front and top loaders: drainage, spin, leaks and door faults. Quote on site. Call ${site.phone.display}.`,
    h1: 'Whirlpool washing machine repairs',
    primaryKeyword: 'Whirlpool washing machine repairs',
    summary: 'Front and top loaders, including older belt-driven models.',
    intro: `<p>Whirlpool washing machine repairs cover both front loaders and top loaders, including older models still going strong in many homes. Whirlpool machines are generally simple to work on, and most faults come down to wear on the usual parts: pumps, belts, brushes, locks and bearings. We fix them at your home.</p>`,
    body: `
<h2>Common Whirlpool washing machine faults</h2>
<h3>Front loaders</h3>
<ul>
  <li><strong>Not draining</strong>: pump filter blockages and worn pumps. See <a href="/problems/washing-machine-not-draining/">washing machine not draining</a>.</li>
  <li><strong>Not spinning</strong>: worn carbon brushes or a slipped belt. See <a href="/problems/washing-machine-not-spinning/">washing machine not spinning</a>.</li>
  <li><strong>Door lock faults</strong>: the machine won't start or the door stays locked.</li>
  <li><strong>Bearing noise</strong> on older machines.</li>
  <li><strong>Door seal leaks</strong>.</li>
</ul>
<h3>Top loaders</h3>
<ul>
  <li>Lid switch or lid lock faults that stop the spin.</li>
  <li>Worn drive couplings or clutches.</li>
  <li>Suspension wear, causing the machine to bang and walk.</li>
  <li>Inlet valve faults, so the machine won't fill.</li>
</ul>

<h2>Error codes on Whirlpool machines</h2>
<p>Whirlpool codes vary a lot between models and regions, so we don't publish a general list. Photograph the code and send it to us with the model number from the sticker, and we'll tell you what it means for your machine. Our general guide to a <a href="/problems/washing-machine-showing-error-code/">washing machine showing an error code</a> covers the safe first steps.</p>

<h2>Book a Whirlpool repair</h2>
<p>We diagnose and quote before any work, and repairs are covered by our warranty. Related: <a href="/services/front-loader-repairs/">front loader repairs</a> and <a href="/services/top-loader-repairs/">top loader repairs</a>.</p>
${indie('Whirlpool')}`,
    faqs: [
      { q: 'Do you repair older Whirlpool top loaders?', a: 'Yes, as long as the parts are still available. Many older Whirlpool top loaders are simple and well worth repairing.' },
      { q: 'Why is my Whirlpool not spinning?', a: 'Common causes are an unbalanced load, water not draining, worn carbon brushes, a slipped belt or a lid switch fault.' },
    ],
  },
  {
    slug: 'hisense',
    brand: 'Hisense',
    name: 'Hisense',
    hasErrorGuide: false,
    title: 'Hisense Washing Machine Repairs | ProServ',
    description: `Hisense washing machine repairs for front and top loaders: not draining, not spinning, door and board faults. Call ${site.phone.display}.`,
    h1: 'Hisense washing machine repairs',
    primaryKeyword: 'Hisense washing machine repairs',
    summary: 'Front loaders and top loaders, including inverter models.',
    intro: `<p>Hisense washing machine repairs have become a regular part of our work as more Gauteng households choose Hisense for value. We repair Hisense front loaders and top loaders at your home, from drain and door faults to motor and board problems, and quote before starting.</p>`,
    body: `
<h2>Common Hisense washing machine faults</h2>
<ul>
  <li><strong>Not draining</strong>: usually a blocked pump filter or drain hose, sometimes a failed pump. See <a href="/problems/washing-machine-not-draining/">washing machine not draining</a>.</li>
  <li><strong>Not filling</strong>: tap, pressure, inlet filter or inlet valve. See <a href="/problems/washing-machine-not-filling-with-water/">not filling with water</a>.</li>
  <li><strong>Door lock faults</strong> on front loaders, and lid lock faults on top loaders.</li>
  <li><strong>Spin and balance problems</strong>, including worn shock absorbers and suspension rods.</li>
  <li><strong>Control board faults</strong>, especially after power surges. See <a href="/blog/protect-washing-machine-from-load-shedding/">protecting your machine from load shedding</a>.</li>
  <li><strong>Leaks</strong> from door seals, hoses or the pump.</li>
</ul>

<h2>Parts for Hisense machines</h2>
<p>Common parts such as pumps, inlet valves and door locks are usually available. Model-specific parts like control boards may need to be ordered in, and we'll give you the timeline with the quote.</p>

<h2>Error codes</h2>
<p>Hisense codes vary between models. Send us the code and model number on WhatsApp, and see our guide to a <a href="/problems/washing-machine-showing-error-code/">washing machine showing an error code</a> for safe first steps.</p>

<h2>Book a Hisense repair</h2>
<p>Related: <a href="/services/front-loader-repairs/">front loader repairs</a>, <a href="/services/top-loader-repairs/">top loader repairs</a> and <a href="/services/washing-machine-parts-replacement/">parts replacement</a>.</p>
${indie('Hisense')}`,
    faqs: [
      { q: 'Is a Hisense washing machine worth repairing?', a: 'Usually, yes, for common faults like pumps, inlet valves and door locks. For major faults on older machines, we will compare the repair cost with replacement.' },
      { q: 'Can you repair Hisense top loaders?', a: 'Yes. We repair both Hisense top loaders and front loaders.' },
    ],
  },
  {
    slug: 'aeg',
    brand: 'AEG',
    name: 'AEG',
    hasErrorGuide: false,
    title: 'AEG Washing Machine Repairs | ProServ',
    description: `AEG washing machine repairs, including washer dryers: drainage, door locks, bearings, heating and boards. Quote first. Call ${site.phone.display}.`,
    h1: 'AEG washing machine repairs',
    primaryKeyword: 'AEG washing machine repairs',
    summary: 'Premium front loaders and washer-dryers, freestanding and integrated.',
    intro: `<p>AEG washing machine repairs mean working on premium European front loaders and washer-dryers that are well worth keeping going. AEG machines are refined, with sophisticated electronics and sensors, so careful diagnosis matters. We test before replacing parts, and quote before we start.</p>`,
    body: `
<h2>Common AEG washing machine faults</h2>
<ul>
  <li><strong>Drain faults</strong>: blocked pump filter or failed pump. See <a href="/problems/washing-machine-not-draining/">not draining</a>.</li>
  <li><strong>Water inlet faults</strong>: tap, pressure, inlet filter or valve.</li>
  <li><strong>Door lock faults</strong>: the machine won't start or the door won't open.</li>
  <li><strong>Heating faults</strong>: the element or temperature sensor.</li>
  <li><strong>Bearing noise</strong> on older or heavily used machines.</li>
  <li><strong>Board and display faults</strong>, sometimes after surges.</li>
</ul>

<h2>AEG washer-dryers</h2>
<p>AEG washer-dryers can develop drying faults from the heater, fan, condenser or humidity sensor. See <a href="/services/washer-dryer-repairs/">washer dryer repairs</a>.</p>

<h2>Integrated machines</h2>
<p>Many AEG machines are built into kitchen cabinetry. We'll remove the machine carefully, repair it and refit it, and include that time in the quote.</p>

<h2>Error codes</h2>
<p>AEG codes vary by model and generation. Send us the code and model number on WhatsApp, and see our guide to a <a href="/problems/washing-machine-showing-error-code/">washing machine showing an error code</a> for safe first steps.</p>

<h2>Book an AEG repair</h2>
<p>Related: <a href="/services/front-loader-repairs/">front loader repairs</a> and <a href="/services/washing-machine-parts-replacement/">parts replacement</a>.</p>
${indie('AEG')}`,
    faqs: [
      { q: 'Are AEG parts hard to find?', a: 'Common parts are generally available. Some model-specific parts are ordered in. We will give you a timeline with the quote.' },
      { q: 'Do you repair AEG washer-dryers?', a: 'Yes, both the washing and drying functions.' },
    ],
  },
  {
    slug: 'siemens',
    brand: 'Siemens',
    name: 'Siemens',
    hasErrorGuide: false,
    title: 'Siemens Washing Machine Repairs | ProServ',
    description: `Siemens washing machine repairs for iQ front loaders and washer dryers: drain, fill, leak and door faults. Call ${site.phone.display}.`,
    h1: 'Siemens washing machine repairs',
    primaryKeyword: 'Siemens washing machine repairs',
    summary: 'iQ front loaders and washer-dryers, freestanding and integrated.',
    intro: `<p>Siemens washing machine repairs share a lot with Bosch, because many Siemens and Bosch machines are built on similar platforms. Siemens iQ front loaders and washer-dryers are high-quality machines, and when something goes wrong it's usually a wear part that can be replaced. We diagnose at your home and quote first.</p>`,
    body: `
<h2>Common Siemens washing machine faults</h2>
<ul>
  <li><strong>Drain faults</strong>: blocked pump filters, hoses or failed pumps. See <a href="/problems/washing-machine-not-draining/">washing machine not draining</a>.</li>
  <li><strong>Water supply faults</strong>: tap, pressure, inlet filter or inlet valve.</li>
  <li><strong>Leak protection</strong>: water detected in the base. The leak has to be found and fixed.</li>
  <li><strong>Carbon brushes and motor faults</strong>: the drum stops turning or turns slowly.</li>
  <li><strong>Door locks</strong>.</li>
  <li><strong>Bearings</strong>: rumbling on spin.</li>
  <li><strong>Heating</strong>: element and sensor faults.</li>
</ul>

<h2>Siemens and Bosch error codes</h2>
<p>Because the platforms are related, some Siemens models show the same codes as Bosch, but not all. Our <a href="${errorCodeUrl('bosch')}">Bosch washing machine error codes</a> guide is a useful starting point, and you should always confirm against the manual for your exact model. For general steps, see <a href="/problems/washing-machine-showing-error-code/">washing machine showing an error code</a>. See also <a href="/brands/bosch-washing-machine-repairs/">Bosch washing machine repairs</a>.</p>

<h2>Washer-dryers and integrated machines</h2>
<p>We repair Siemens washer-dryers (see <a href="/services/washer-dryer-repairs/">washer dryer repairs</a>) and integrated models fitted behind cabinet doors.</p>

<h2>Book a Siemens repair</h2>
<p>Related: <a href="/services/front-loader-repairs/">front loader repairs</a> and <a href="/services/washing-machine-parts-replacement/">parts replacement</a>.</p>
${indie('Siemens')}`,
    faqs: [
      { q: 'Are Siemens and Bosch washing machines the same?', a: 'Many are built on related platforms by the same parent group, so faults and parts are often similar. Models differ, so we always check the exact model number.' },
      { q: 'Is a Siemens washing machine worth repairing?', a: 'Usually, yes. They are high-quality machines and most faults involve replaceable wear parts.' },
    ],
  },
];

/** Brands mentioned on the hub page only (no dedicated page yet). */
export const otherBrands = ['Miele', 'Smeg', 'Electrolux', 'Speed Queen'];

export const trademarkNote =
  'Brand names are trademarks of their respective owners and are used only to describe the machines we repair. ProServ is an independent repairer and is not affiliated with, authorised or endorsed by any manufacturer.';
