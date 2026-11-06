import type { ContentPage } from './types';
import { site, brandUrl, errorCodeUrl } from './site';

const f = site.facts;

export interface Service extends ContentPage {
  serviceType: string;
}

export const services: Service[] = [
  {
    slug: 'front-loader-repairs',
    name: 'Front loader repairs',
    serviceType: 'Front loader washing machine repair',
    title: 'Front Loader Repairs in Gauteng | ProServ',
    description:
      `Front loader repairs at your door: bearings, pumps, door seals, PCBs and more. Quote before we start. Call or WhatsApp ${site.phone.display}.`,
    h1: 'Front loader repairs at your home',
    primaryKeyword: 'front loader repairs',
    summary: 'Bearings, pumps, door locks, seals and control boards on all front loading machines.',
    image: { src: '/images/service-front-loader.webp', alt: 'Technician checking the drum bearings of a front loader washing machine in a kitchen', width: 960, height: 640 },
    intro: `<p>Front loader repairs are most of what we do. Front loading washing machines wash well and use less water, but they pack a lot of parts into a small, sealed cabinet: a heavy drum on two bearings, a rubber door seal, an electronic door lock, a drain pump and a control board that runs the lot. When one of those fails, the machine usually stops mid-cycle, shows an error, or starts making a noise you can hear from the next room. Our technician comes to you, finds the cause, gives you a price and fixes it on the spot wherever the part is on the van.</p>`,
    body: `
<h2>Front loader faults we fix every week</h2>
<ul>
  <li><strong>Worn drum bearings.</strong> A rumbling or roaring sound that gets louder on spin is the classic sign. Left too long, the drum starts to rub and the damage spreads to the seal and the tub. See <a href="/blog/signs-washing-machine-bearings-are-worn/">signs your washing machine bearings are worn</a>.</li>
  <li><strong>Drain pump blockages and failures.</strong> Coins, hair clips and lint jam the pump, or the pump motor burns out. The machine stops with water in the drum. More on this under <a href="/problems/washing-machine-not-draining/">washing machine not draining</a>.</li>
  <li><strong>Door lock and door seal problems.</strong> A faulty interlock means the door won't open, or the machine won't start because it can't confirm the door is locked. A split or mouldy door seal causes leaks at the front.</li>
  <li><strong>Not spinning.</strong> Worn carbon brushes, a failed motor, a broken belt or a faulty tacho sensor can all stop the drum turning at speed.</li>
  <li><strong>Heating faults.</strong> Cold washes when you've chosen 40°C or 60°C usually mean a failed heating element or temperature sensor.</li>
  <li><strong>Control board (PCB) faults.</strong> Power surges and load shedding take a toll on electronics. We test before we condemn a board, because many "dead" machines just need a fuse, a relay or a connector repaired.</li>
</ul>

<h2>How a front loader repair works with ProServ</h2>
<p>You call or WhatsApp us with the brand, the model if you have it, and what the machine is doing. We book a time that suits you and aim to arrive ${f.arrivalTime} on urgent jobs. The technician runs a proper diagnosis: we check the error history where the machine stores one, test the motor, pump, heater and lock, and inspect the bearings and seal. You get a clear quote before any work starts.</p>
<p>The call-out fee is ${f.calloutFee}, ${f.calloutCondition}. Every repair carries our ${f.warranty} warranty on parts and labour.</p>

<h2>Brands of front loader we repair</h2>
<p>We repair all major washing machine brands. Front loaders we see often include <a href="${brandUrl('lg')}">LG</a>, <a href="${brandUrl('samsung')}">Samsung</a>, <a href="${brandUrl('bosch')}">Bosch</a>, <a href="${brandUrl('defy')}">Defy</a>, <a href="${brandUrl('siemens')}">Siemens</a>, <a href="${brandUrl('aeg')}">AEG</a> and <a href="${brandUrl('hisense')}">Hisense</a>. If your machine is showing a code, our guides to <a href="${errorCodeUrl('lg')}">LG error codes</a> and <a href="${errorCodeUrl('samsung')}">Samsung error codes</a> explain what it means.</p>

<h2>Is a front loader worth repairing?</h2>
<p>Usually, yes. A mid-range front loader costs a good few thousand Rand to replace, and most faults (pumps, locks, brushes, heaters, seals) are a fraction of that. Bearings on machines with a sealed, one-piece tub are the main exception, because the whole tub assembly has to be replaced. We'll tell you honestly if the numbers don't make sense. Our <a href="/repair-or-replace/">repair or replace guide</a> walks through the decision, and the <a href="/washing-machine-repair-cost/">washing machine repair cost</a> page explains what drives the price.</p>

<h2>Before you call</h2>
<p>A few quick checks can save you a call-out: make sure the plug and wall switch are on, the tap is open, and the child lock isn't active. If water is stuck in the drum, don't force the door. Switch off at the wall and call us.</p>`,
    faqs: [
      { q: 'How long does a front loader repair take?', a: 'Most repairs, such as a pump, door lock, carbon brushes or heating element, are done in one visit of about an hour once the part is on hand. Bearing replacements take longer because the machine has to be stripped down, and sometimes need a second visit.' },
      { q: 'Can you replace the bearings on any front loader?', a: 'On most machines with a split tub, yes. Some newer machines have a sealed tub where the bearings cannot be replaced separately, so the whole tub assembly is needed. We will tell you which type you have and what it costs before starting.' },
      { q: 'Why does my front loader smell?', a: 'Detergent residue and lint build up in the door seal, drawer and pump filter, especially with cold washes. Our article on why your washing machine smells covers how to prevent it.' },
    ],
  },
  {
    slug: 'top-loader-repairs',
    name: 'Top loader repairs',
    serviceType: 'Top loader washing machine repair',
    title: 'Top Loader Repairs in Gauteng | ProServ',
    description:
      `Top loader repairs for Defy, Samsung, LG, Hisense, Whirlpool and Speed Queen. Clear quote before work starts. Call or WhatsApp ${site.phone.display}.`,
    h1: 'Top loader repairs, done at your home',
    primaryKeyword: 'top loader repairs',
    summary: 'Agitators, gearboxes, lid switches, pumps and motors on all top loading machines.',
    image: { src: '/images/service-top-loader.webp', alt: 'Open top loader washing machine with the lid up, ready for repair', width: 960, height: 640 },
    intro: `<p>Top loader repairs are a big part of our work, because the top loader is still the machine in a lot of South African homes. They're tough, quick and easy on the back, but after years of heavy family loads the same handful of parts wear out: lid switches, drive couplings, gearboxes, pumps and suspension rods. We come to your home, find the fault and give you a quote before we touch anything.</p>`,
    body: `
<h2>Common top loader problems</h2>
<h3>Not agitating or not spinning</h3>
<p>If the motor hums but the agitator or pulsator doesn't move, it's often a worn drive coupling, a slipping belt or a stripped clutch. If nothing happens at all once the lid is closed, the lid switch is the first suspect, because the machine won't spin unless it knows the lid is shut. See <a href="/problems/washing-machine-not-spinning/">washing machine not spinning</a> for the full list of causes.</p>
<h3>Banging and walking on spin</h3>
<p>A top loader that thumps the cabinet and creeps across the floor usually has worn suspension rods or springs, or a load that's all bunched on one side. Worn rods are a quick, inexpensive fix that stops damage to the tub and cabinet. Our page on a <a href="/problems/washing-machine-noisy-when-spinning/">washing machine that's noisy when spinning</a> explains how to tell the difference.</p>
<h3>Water not draining or not filling</h3>
<p>A blocked drain hose or failed pump leaves dirty water in the tub. A slow fill or no fill points to the inlet valve, a blocked inlet filter or low water pressure, which is common in parts of Gauteng during supply interruptions. See <a href="/problems/washing-machine-not-filling-with-water/">washing machine not filling with water</a>.</p>
<h3>Gearbox and transmission wear</h3>
<p>On agitator-style machines the gearbox can start leaking oil or grinding. We'll check whether it's the gearbox itself, the seal or the bearing underneath, and quote accordingly.</p>

<h2>Top loader brands we repair</h2>
<p>We repair all major washing machine brands, including <a href="${brandUrl('defy')}">Defy</a>, <a href="${brandUrl('samsung')}">Samsung</a>, <a href="${brandUrl('lg')}">LG</a>, <a href="${brandUrl('hisense')}">Hisense</a> and <a href="${brandUrl('whirlpool')}">Whirlpool</a>, plus Speed Queen and other heavy-duty machines. Brand names are trademarks of their owners and we are an independent repairer.</p>

<h2>What you can expect from us</h2>
<ul>
  <li>A booked time and a technician who arrives when we said, ${f.arrivalTime} on urgent call-outs where we can.</li>
  <li>A diagnosis on site and a written or WhatsApped quote before work starts.</li>
  <li>A call-out fee of ${f.calloutFee}, ${f.calloutCondition}.</li>
  <li>Quality replacement parts and a ${f.warranty} warranty on the repair.</li>
</ul>

<h2>When a top loader isn't worth fixing</h2>
<p>If the outer tub is cracked, the cabinet has rusted through, or the gearbox and motor have both gone on an older machine, a new one may be better value. We'll say so plainly. Read our <a href="/repair-or-replace/">repair or replace</a> guide, or see <a href="/washing-machine-repair-cost/">what affects the cost of a repair</a>.</p>`,
    faqs: [
      { q: 'Why does my top loader fill but not wash?', a: 'Most often the drive coupling, belt or clutch has worn out, or the motor capacitor has failed. The motor runs but the drive is not reaching the agitator. A technician can confirm which part in a few minutes.' },
      { q: 'Do you repair Speed Queen top loaders?', a: 'Yes. We repair Speed Queen and other heavy-duty top loaders. Parts for some models are ordered in, so we may need a second visit.' },
      { q: 'My top loader is very old. Is it worth repairing?', a: 'Older top loaders are often simpler and very repairable. If the tub and cabinet are sound, replacing a pump, switch or coupling is usually far cheaper than a new machine.' },
    ],
  },
  {
    slug: 'washer-dryer-repairs',
    name: 'Washer-dryer repairs',
    serviceType: 'Washer dryer repair',
    title: 'Washer Dryer Repairs at Home | ProServ',
    description:
      `Washer dryer repairs for machines that won't dry, heat or spin. We diagnose and quote on site. Call or WhatsApp ProServ on ${site.phone.display}.`,
    h1: 'Washer dryer repairs for combo machines',
    primaryKeyword: 'washer dryer repairs',
    summary: 'Drying faults, heaters, fans, thermostats and all the usual washing faults on combo machines.',
    image: { src: '/images/service-washer-dryer.webp', alt: 'Integrated washer dryer in a small apartment kitchen', width: 960, height: 640 },
    intro: `<p>Washer dryer repairs need a technician who understands both halves of the machine. A washer-dryer is a front loader with a drying system built in: a separate heating element, a fan, a condenser or air duct and extra thermostats. That makes it ideal for flats and townhouses without space for a tumble dryer, and it also means more that can go wrong. We repair the washing side and the drying side at your home.</p>`,
    body: `
<h2>Washer dryer not drying?</h2>
<p>This is the most common complaint, and the cause is usually one of these:</p>
<ul>
  <li><strong>Failed drying heater or thermal fuse.</strong> The drum turns and the fan runs, but the clothes stay cold and damp.</li>
  <li><strong>Blocked condenser or air duct.</strong> Lint builds up where you can't see it. The machine heats but the moisture has nowhere to go, so clothes come out hot and wet.</li>
  <li><strong>Fan motor fault.</strong> No airflow means no drying, and the machine may cut out on its safety thermostat.</li>
  <li><strong>Faulty humidity or temperature sensor.</strong> The machine stops the drying cycle too early or runs far too long.</li>
  <li><strong>Overloading.</strong> A washer-dryer can wash more than it can dry. Drying a full wash load in one go leaves clothes damp. Check the drying capacity on your model.</li>
</ul>

<h2>Washing faults on washer-dryers</h2>
<p>Because the washing side is a front loader, you can get the same problems as any <a href="/services/front-loader-repairs/">front loader</a>: drain pump blockages, door lock faults, worn bearings and leaking door seals. We handle all of those on the same visit.</p>

<h2>Brands we see most</h2>
<p>Washer-dryers we repair often include <a href="${brandUrl('lg')}">LG</a>, <a href="${brandUrl('samsung')}">Samsung</a>, <a href="${brandUrl('bosch')}">Bosch</a>, <a href="${brandUrl('siemens')}">Siemens</a>, <a href="${brandUrl('aeg')}">AEG</a> and <a href="${brandUrl('hisense')}">Hisense</a>, as well as integrated models fitted into kitchen cabinets. Integrated machines take longer to remove and refit, which we'll factor into the quote.</p>

<h2>Safety first</h2>
<p>A washer-dryer that smells of burning, trips the electricity or gets hot on the outside should be switched off at the wall and left alone until a technician has seen it. Drying systems run at high temperatures, and we don't recommend any DIY on heating parts.</p>

<h2>Pricing and warranty</h2>
<p>You'll get a quote after diagnosis and before any work. The call-out fee is ${f.calloutFee}, ${f.calloutCondition}. Repairs carry our ${f.warranty} warranty. See <a href="/washing-machine-repair-cost/">washing machine repair cost</a> for what affects the price.</p>`,
    faqs: [
      { q: 'Why are my clothes hot but still wet after drying?', a: 'The heater works but moist air is not being cleared, usually because the condenser or air duct is blocked with lint, or the fan has failed. A technician can clean or replace the part.' },
      { q: 'Can I keep using the washing cycle if the dryer is broken?', a: 'In most cases yes, as long as the machine is not tripping the electricity or smelling of burning. If it is, switch off at the wall and wait for a technician.' },
      { q: 'Do you repair integrated washer-dryers?', a: 'Yes. Integrated machines need to be slid out of the cabinet, so the visit takes a little longer, but the repair itself is the same.' },
    ],
  },
  {
    slug: 'washing-machine-installation',
    name: 'Installation and plumbing-in',
    serviceType: 'Washing machine installation',
    title: 'Washing Machine Installation & Plumbing | ProServ',
    description:
      `Washing machine installation and plumbing-in: taps, drain hoses, levelling and test run. New or moved machines. Call ${site.phone.display}.`,
    h1: 'Washing machine installation and plumbing-in',
    primaryKeyword: 'washing machine installation',
    summary: 'New or moved machines connected, levelled, transit bolts removed and tested.',
    image: { src: '/images/service-installation.webp', alt: 'Technician connecting the inlet hose of a new washing machine to a wall tap', width: 960, height: 640 },
    intro: `<p>Washing machine installation sounds simple until the hoses don't reach, the drain overflows or the machine dances across the floor on its first spin. We install new and second-hand machines, move machines from one spot to another, and connect them properly to the water supply and the drain, so the first wash is also the first of many.</p>`,
    body: `
<h2>What our installation includes</h2>
<ul>
  <li><strong>Transit bolts removed.</strong> New front loaders ship with bolts that lock the drum. Running a machine with them in place can wreck the bearings and suspension within a few washes.</li>
  <li><strong>Inlet connection.</strong> We connect to your existing washing machine tap and check for leaks. Where a hot and cold supply are both available, we connect according to the machine's instructions.</li>
  <li><strong>Drain set-up.</strong> The drain hose has to sit at the right height in a standpipe or under-sink trap, with an air gap so dirty water can't siphon back. A badly placed drain is one of the most common reasons a machine won't drain properly or keeps draining while it fills.</li>
  <li><strong>Levelling.</strong> We adjust the feet so the machine sits level and solid, which cuts vibration and noise.</li>
  <li><strong>Test run.</strong> We run a short cycle to check filling, draining and spinning, and show you the pump filter and detergent drawer.</li>
</ul>

<h2>Plumbing-in where there's no connection yet</h2>
<p>If the spot you want doesn't have a washing machine tap or a drain point, we'll tell you what's needed. Minor plumbing such as fitting a tap adaptor or a drain connection to an existing sink trap can often be done on the same visit. Larger plumbing changes, or new electrical points, need a registered plumber or electrician, and we'll say so rather than improvise. [CONFIRM: scope of plumbing work you offer]</p>

<h2>Moving house?</h2>
<p>A front loader needs its transit bolts refitted before it's moved, or the drum can swing and damage the suspension on the back of a bakkie. If you've lost the bolts, tell us when you book. We can also uninstall and reinstall the machine at the new address. More tips are in our guide to <a href="/blog/front-loader-vs-top-loader/">front loaders vs top loaders</a>.</p>

<h2>Already installed and causing trouble?</h2>
<p>If a recently installed machine is <a href="/problems/washing-machine-leaking/">leaking</a>, <a href="/problems/washing-machine-noisy-when-spinning/">shaking on spin</a> or <a href="/problems/washing-machine-not-draining/">not draining</a>, the installation is the first thing we check.</p>

<h2>Pricing</h2>
<p>Installation is priced as a fixed job: [PLACEHOLDER: installation price]. Extra parts like longer hoses or adaptors are quoted on the spot. See <a href="/washing-machine-repair-cost/">our pricing page</a>.</p>`,
    faqs: [
      { q: 'Do I need a plumber to install a washing machine?', a: 'Not if there is already a washing machine tap and a drain point. We can connect, level and test the machine. New pipework or electrical points need a registered plumber or electrician.' },
      { q: 'What are transit bolts and do I have to remove them?', a: 'They are bolts in the back of a new front loader that lock the drum in place for delivery. They must be removed before use, and kept for when the machine is moved again.' },
      { q: 'Can you install a washing machine and a dishwasher off the same tap?', a: 'Often yes, using a double outlet tap or a Y-piece, if the water pressure and drain set-up allow it. We will check on site.' },
    ],
  },
  {
    slug: 'washing-machine-servicing',
    name: 'Servicing and maintenance',
    serviceType: 'Washing machine servicing',
    title: 'Washing Machine Servicing & Maintenance | ProServ',
    description:
      `Washing machine servicing to catch worn parts early: filters, hoses, seals, brushes and drum checks. Book on ${site.phone.display} or WhatsApp.`,
    h1: 'Washing machine servicing and maintenance',
    primaryKeyword: 'washing machine servicing',
    summary: 'A full check of filters, hoses, seals, bearings and brushes to catch problems early.',
    image: { src: '/images/service-servicing.webp', alt: 'Technician cleaning the drain pump filter at the bottom of a front loader', width: 960, height: 640 },
    intro: `<p>Washing machine servicing costs far less than most repairs, because it heads off the expensive ones before they happen. A machine that runs a load or two a day in a busy home works hard. A service catches the worn hose before it bursts, the blocked filter before it kills the pump, and the noisy bearing before it wrecks the tub.</p>`,
    body: `
<h2>What a ProServ service covers</h2>
<ol>
  <li><strong>Pump filter and drain path</strong> cleaned of lint, coins and grit.</li>
  <li><strong>Inlet filters</strong> at the back of the machine cleared, so it fills quickly and evenly.</li>
  <li><strong>Hoses checked</strong> for cracks, bulges and perished rubber. A burst inlet hose can flood a kitchen in minutes.</li>
  <li><strong>Door seal or lid seal inspected</strong> and cleaned of mould and detergent build-up.</li>
  <li><strong>Drum and bearings checked</strong> for play and noise.</li>
  <li><strong>Carbon brushes measured</strong> on machines with brushed motors, and replaced if worn (quoted first).</li>
  <li><strong>Suspension and shock absorbers tested</strong>, and the machine re-levelled.</li>
  <li><strong>Test cycle</strong> run, with fill, heat, drain and spin checked.</li>
  <li><strong>Advice for your household</strong> on detergent dose, load size and cycles.</li>
</ol>

<h2>How often should you service a washing machine?</h2>
<p>For an average family, once a year is plenty. If you run more than one load a day, wash work clothes, or have a guesthouse or Airbnb, every six months is worth it. Rentals between tenants are another good time.</p>

<h2>Small habits that help between services</h2>
<ul>
  <li>Run a hot maintenance wash once a month with no clothes in it.</li>
  <li>Leave the door and detergent drawer open after the last wash to let them dry.</li>
  <li>Use the right amount of detergent. More is not cleaner; excess suds strain the pump and leave residue. Our post on <a href="/blog/why-does-my-washing-machine-smell/">why washing machines smell</a> goes into this.</li>
  <li>Empty pockets. Coins and hair clips are the number one cause of pump blockages.</li>
  <li>Protect electronics from surges, especially around load shedding. See <a href="/blog/protect-washing-machine-from-load-shedding/">protecting your washing machine from load shedding</a>.</li>
</ul>

<h2>When servicing turns up a problem</h2>
<p>If we find a part that's close to failing, we'll show you and quote. You can approve the repair there and then, or leave it. There's no pressure. For parts and pricing see <a href="/services/washing-machine-parts-replacement/">parts replacement</a> and <a href="/washing-machine-repair-cost/">washing machine repair cost</a>.</p>

<h2>Price</h2>
<p>A standard service is [PLACEHOLDER: service price]. Parts, if needed, are quoted separately.</p>`,
    faqs: [
      { q: 'Is servicing worth it on a new machine?', a: 'For the first year or two most machines only need you to clean the filter and drawer. A professional service becomes more valuable from about year three, or sooner on heavily used machines.' },
      { q: 'How long does a service take?', a: 'About an hour for most machines, a little longer for washer-dryers or integrated machines.' },
      { q: 'Do you service machines for landlords and guesthouses?', a: 'Yes. We can service several machines on one visit. Get in touch for a combined quote.' },
    ],
  },
  {
    slug: 'washing-machine-parts-replacement',
    name: 'Parts replacement',
    serviceType: 'Washing machine parts replacement',
    title: 'Washing Machine Parts Replacement | ProServ',
    description:
      `Washing machine parts replacement: pumps, motors, bearings, door seals, PCBs and heating elements, fitted at home. Call ${site.phone.display}.`,
    h1: 'Washing machine parts replacement',
    primaryKeyword: 'washing machine parts replacement',
    summary: 'Pumps, motors, bearings, door seals, PCBs and heating elements supplied and fitted.',
    image: { src: '/images/service-parts.webp', alt: 'Replacement washing machine drain pump, door seal and carbon brushes laid out on a workbench', width: 960, height: 640 },
    intro: `<p>Washing machine parts replacement is where a repair gets its value: the right part, fitted properly, with a warranty. We supply and fit the parts below for all major brands, and test the machine before we leave. We use original manufacturer parts where they're available and good-quality equivalents where they're not, and we'll tell you which you're getting.</p>`,
    body: `
<h2>Parts we replace</h2>
<h3>Drain pumps</h3>
<p>The pump pushes water out at the end of every wash and before every spin. When it's blocked or burnt out, the machine stops with water in the drum. Sometimes a clean is all it needs; sometimes the motor has failed and it needs replacing. Related: <a href="/problems/washing-machine-not-draining/">washing machine not draining</a>.</p>
<h3>Motors and carbon brushes</h3>
<p>Many machines use a brushed motor with two carbon brushes that wear down over time. Replacing the brushes is a common, inexpensive repair. Direct-drive and inverter motors don't have brushes, but their stators, rotors and hall sensors can fail. Related: <a href="/problems/washing-machine-not-spinning/">washing machine not spinning</a>.</p>
<h3>Drum bearings and seals</h3>
<p>Bearings let the drum turn smoothly at high speed. When they wear, you'll hear a rumble on spin, and water can get past the seal into the bearings. We replace bearings and the shaft seal together. See <a href="/blog/signs-washing-machine-bearings-are-worn/">signs your bearings are worn</a> and the price guide on our <a href="/washing-machine-repair-cost/">repair cost page</a>.</p>
<h3>Door seals (gaskets)</h3>
<p>The rubber seal around the door of a front loader tears, perishes or grows mould. A damaged seal leaks during the wash. Related: <a href="/problems/washing-machine-leaking/">washing machine leaking</a>.</p>
<h3>PCBs and control boards</h3>
<p>The control board is the machine's brain. Surges and load shedding can damage it. We test the board and its connections first; where a board can be repaired rather than replaced, we'll offer that option. Related: <a href="/problems/washing-machine-wont-turn-on/">washing machine won't turn on</a>.</p>
<h3>Heating elements and temperature sensors</h3>
<p>If the washing comes out cold, or the machine trips the electricity when it starts to heat, the element is a prime suspect. These are electrical parts and should only be tested and replaced by a technician.</p>
<h3>Also commonly replaced</h3>
<ul>
  <li>Door locks and interlocks</li>
  <li>Inlet (fill) valves</li>
  <li>Pressure switches and water level sensors</li>
  <li>Shock absorbers, springs and suspension rods</li>
  <li>Drive belts, couplings and clutches (top loaders)</li>
  <li>Inlet and drain hoses</li>
  <li>Door handles, hinges and detergent drawers</li>
</ul>

<h2>Parts availability</h2>
<p>We carry the most common parts on the van, so many repairs are finished on the first visit. Model-specific parts such as PCBs or certain door seals are ordered in, usually within [PLACEHOLDER: typical parts lead time]. We'll give you the timeline with the quote.</p>

<h2>Warranty</h2>
<p>Parts we fit carry our ${f.warranty} repair warranty. If the same fault comes back within that time, we'll come back and sort it out.</p>`,
    faqs: [
      { q: 'Do you use original parts?', a: 'We use original manufacturer parts where they are available in South Africa and reasonably priced, and good-quality equivalents where they are not. We will tell you which you are getting before we fit it.' },
      { q: 'Can I buy the part and have you fit it?', a: 'We prefer to supply the part so we can warranty the whole repair. If you have already bought a part, ask us. We can fit it, but the warranty will cover our labour only.' },
      { q: 'Which part fails most often?', a: 'Drain pumps (usually blocked by small objects), carbon brushes, door locks and door seals are the parts we replace most.' },
    ],
  },
];

export const serviceBySlug = (slug: string) => services.find((s) => s.slug === slug);
export const serviceUrl = (slug: string) => `/services/${slug}/`;
