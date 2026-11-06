import type { FaqItem } from './types';
import { site, brandUrl, errorCodeUrl } from './site';

const f = site.facts;

/**
 * Area page content, keyed by the area slug in src/data/site.ts.
 * Each area must be genuinely different (local detail, suburbs, area-specific FAQ).
 * Suburb lists are [CONFIRM]: edit them to match where you actually work.
 */
export interface AreaContent {
  title: string;
  description: string;
  h1: string;
  intro: string;
  suburbs: string[];
  body: string;
  faqs: FaqItem[];
  /** Nearby areas (slugs) for internal links. */
  nearby: string[];
}

export const areaContent: Record<string, AreaContent> = {
  johannesburg: {
    title: 'Washing Machine Repairs Johannesburg | ProServ',
    description: 'Washing machine repairs in Johannesburg, from Randburg to Joburg South. Technician at your door, quote first. Call 079 895 0496.',
    h1: 'Washing machine repairs in Johannesburg',
    intro: `<p>ProServ does washing machine repairs across Johannesburg, from the leafy older suburbs like Parkhurst and Melville to Randburg, Roodepoort and the south. Joburg homes run their machines hard, and many have been through years of load shedding and power dips, so we see a lot of pump, board and bearing faults. Our technician comes to your house or flat, diagnoses the problem and quotes before starting.</p>`,
    suburbs: ['Randburg', 'Roodepoort', 'Northcliff', 'Melville', 'Parkhurst', 'Greenside', 'Linden', 'Rosebank', 'Parktown North', 'Killarney', 'Houghton', 'Fourways', 'Mondeor', 'Glenvista', 'Bassonia', 'Weltevreden Park'],
    body: `
<h2>What we see most in Johannesburg</h2>
<p>Johannesburg has a real mix of homes: older houses with laundries that were plumbed decades ago, cluster homes, and apartment blocks where the machine is squeezed into a kitchen. That mix shows up in the work we do:</p>
<ul>
  <li><strong>Drain problems in older houses.</strong> Old standpipes and sink traps clog, and machines installed years ago often have the drain hose at the wrong height. See <a href="/problems/washing-machine-not-draining/">washing machine not draining</a>.</li>
  <li><strong>Surge damage.</strong> Control boards and mains filters damaged when power comes back after an outage. See <a href="/blog/protect-washing-machine-from-load-shedding/">protecting your machine from load shedding</a>.</li>
  <li><strong>Bearings on well-used front loaders.</strong> Family machines doing a load a day for years. See <a href="/services/front-loader-repairs/">front loader repairs</a>.</li>
  <li><strong>Top loaders in family homes</strong>, especially in the south and west. See <a href="/services/top-loader-repairs/">top loader repairs</a>.</li>
</ul>

<h2>Flats and complexes</h2>
<p>If you're in a flat or a complex, let us know about access when you book: gate codes, visitor parking, a lift or stairs. If your machine is in a tight kitchen space, we'll bring it out carefully and protect your floors.</p>

<h2>Brands we repair in Johannesburg</h2>
<p>We repair all major washing machine brands, including <a href="${brandUrl('defy')}">Defy</a>, <a href="${brandUrl('lg')}">LG</a>, <a href="${brandUrl('samsung')}">Samsung</a>, <a href="${brandUrl('bosch')}">Bosch</a> and <a href="${brandUrl('whirlpool')}">Whirlpool</a>. If your machine is showing a code, try our <a href="${errorCodeUrl('lg')}">LG</a> or <a href="${errorCodeUrl('samsung')}">Samsung</a> error code guides first.</p>`,
    faqs: [
      { q: 'Do you come out to Randburg and Roodepoort?', a: 'Yes, both are part of our Johannesburg area. Send us your suburb when you book and we will confirm the time.' },
      { q: 'Do you work in Johannesburg South?', a: 'Yes, including Mondeor, Glenvista and Bassonia. [CONFIRM: southern suburbs covered]' },
      { q: 'Can you fix my machine in a second-floor flat?', a: 'Yes. Most repairs are done where the machine stands. Tell us about stairs, lifts and parking when you book.' },
    ],
    nearby: ['sandton', 'midrand', 'east-rand'],
  },
  pretoria: {
    title: 'Washing Machine Repairs Pretoria | ProServ',
    description: 'Washing machine repairs in Pretoria East, Hatfield, Montana and beyond. Diagnose and quote at your home. Call ProServ: 079 895 0496.',
    h1: 'Washing machine repairs in Pretoria',
    intro: `<p>ProServ offers washing machine repairs throughout Pretoria, from Pretoria East and Moreleta Park to Hatfield, Arcadia and Montana in the north. Pretoria has everything from student flats and rental units to big family homes in the east, and each comes with its own kinds of washing machine trouble. Our technician comes to you, finds the fault and gives you a price before any work begins.</p>`,
    suburbs: ['Hatfield', 'Brooklyn', 'Menlo Park', 'Waterkloof', 'Lynnwood', 'Faerie Glen', 'Garsfontein', 'Moreleta Park', 'Silver Lakes', 'Montana', 'Sinoville', 'Pretoria North', 'Arcadia', 'Sunnyside', 'Silverton', 'Queenswood'],
    body: `
<h2>Repairs for Pretoria homes, flats and rentals</h2>
<h3>Student and rental accommodation</h3>
<p>Around Hatfield, Sunnyside and Arcadia, many machines are shared by several people. Overloading, too much detergent and coins in pockets mean we see a lot of blocked pumps, broken door handles and door locks. Landlords and agents: we can report back to you with photos and a quote, and arrange access with your tenant. See <a href="/services/washing-machine-servicing/">servicing and maintenance</a> for keeping rental machines going between tenants.</p>
<h3>Family homes in Pretoria East</h3>
<p>Big households and big machines. Large-capacity front loaders and top loaders wear their bearings, shock absorbers and suspension. See <a href="/problems/washing-machine-noisy-when-spinning/">washing machine noisy when spinning</a> and <a href="/services/top-loader-repairs/">top loader repairs</a>.</p>
<h3>Security estates</h3>
<p>Many homes in the east are in estates with access control. Please register our technician at the gate, or send us the access instructions when you book, so we don't lose time at the boom.</p>

<h2>Water supply and filling problems</h2>
<p>When water pressure drops during supply interruptions, machines stop with a "no water" code. Sand and grit after pipe repairs can also block the inlet filter. If your machine won't fill, start with <a href="/problems/washing-machine-not-filling-with-water/">washing machine not filling with water</a>.</p>

<h2>Brands we repair in Pretoria</h2>
<p>We repair all major washing machine brands, including <a href="${brandUrl('samsung')}">Samsung</a>, <a href="${brandUrl('lg')}">LG</a>, <a href="${brandUrl('defy')}">Defy</a>, <a href="${brandUrl('hisense')}">Hisense</a> and <a href="${brandUrl('bosch')}">Bosch</a>.</p>`,
    faqs: [
      { q: 'Do you cover Montana and Pretoria North?', a: 'Yes. [CONFIRM: northern suburbs covered] Send us your address when you book.' },
      { q: 'Can you repair a machine in a student flat if the landlord is paying?', a: 'Yes. We can send the quote and photos to the landlord or agent for approval before starting.' },
      { q: 'Do you work inside security estates?', a: 'Yes. Please register the technician at the gate or send the access instructions with your booking.' },
    ],
    nearby: ['centurion', 'midrand'],
  },
  centurion: {
    title: 'Washing Machine Repairs Centurion | ProServ',
    description: 'Washing machine repairs in Centurion: Irene, Eldoraigne, Rooihuiskraal and more. Technician at your door, quote first. Call 079 895 0496.',
    h1: 'Washing machine repairs in Centurion',
    intro: `<p>Our washing machine repairs in Centurion cover the established suburbs like Lyttelton, Eldoraigne and Clubview as well as the estates and complexes around Irene, Rooihuiskraal and Olievenhoutbosch. Centurion is a mix of family homes and newer townhouse developments, and plenty of the machines we fix are in compact laundry spaces or kitchen nooks.</p>`,
    suburbs: ['Lyttelton', 'Clubview', 'Eldoraigne', 'Rooihuiskraal', 'Wierdapark', 'Zwartkop', 'Die Hoewes', 'Irene', 'Highveld', 'Heuweloord', 'Raslouw', 'Thatchfield', 'Olievenhoutbosch', 'Hennopspark', 'Doringkloof'],
    body: `
<h2>Townhouses, estates and tight spaces</h2>
<p>A lot of Centurion's newer homes are in complexes with small laundries, or with the machine under a kitchen counter. That brings its own problems:</p>
<ul>
  <li><strong>Drainage set-ups that don't quite work</strong>: a drain hose pushed too far into the standpipe, or shared under-sink traps that clog. See <a href="/problems/washing-machine-not-draining/">washing machine not draining</a>.</li>
  <li><strong>Vibration and noise</strong> in upstairs units, where a slightly unlevel machine sounds like a train. See <a href="/problems/washing-machine-noisy-when-spinning/">washing machine noisy when spinning</a>.</li>
  <li><strong>Washer-dryers</strong> in homes without space for a tumble dryer. See <a href="/services/washer-dryer-repairs/">washer dryer repairs</a>.</li>
  <li><strong>New machines installed in a hurry</strong> on move-in day, sometimes with transit bolts left in. See <a href="/services/washing-machine-installation/">washing machine installation</a>.</li>
</ul>

<h2>Estate access</h2>
<p>Many Centurion estates have strict access control. When you book, send us your estate name and whether the technician needs a code, a pre-registration or an ID scan. It helps us arrive on time.</p>

<h2>Brands we repair in Centurion</h2>
<p>We repair all major washing machine brands. In Centurion we often work on <a href="${brandUrl('lg')}">LG</a>, <a href="${brandUrl('samsung')}">Samsung</a>, <a href="${brandUrl('bosch')}">Bosch</a>, <a href="${brandUrl('defy')}">Defy</a> and <a href="${brandUrl('hisense')}">Hisense</a> machines. For codes, see our <a href="/error-codes/">washing machine error code guides</a>.</p>`,
    faqs: [
      { q: 'Do you cover Irene and Olievenhoutbosch?', a: 'Yes, both are part of our Centurion area. [CONFIRM]' },
      { q: 'My upstairs machine shakes the whole unit. Can you help?', a: 'Yes. We check the levelling, the load, the shock absorbers and whether transit bolts were removed, then fix the cause.' },
      { q: 'Can you install a new machine in my townhouse?', a: 'Yes. We connect, level and test new machines, and tell you if the drain or tap needs a plumber.' },
    ],
    nearby: ['pretoria', 'midrand'],
  },
  sandton: {
    title: 'Washing Machine Repairs Sandton | ProServ',
    description: 'Washing machine repairs in Sandton, Bryanston, Rivonia and Sunninghill. Premium and integrated machines. Call or WhatsApp 079 895 0496.',
    h1: 'Washing machine repairs in Sandton',
    intro: `<p>We carry out washing machine repairs all over Sandton, from apartments in Sandton Central and Morningside to family homes in Bryanston, Rivonia and Sunninghill. Sandton has a lot of premium European front loaders, washer-dryers and integrated machines built into kitchen cabinetry, so our technicians are used to working carefully in finished spaces and with high-end machines.</p>`,
    suburbs: ['Bryanston', 'Morningside', 'Rivonia', 'Sunninghill', 'Paulshof', 'Woodmead', 'Illovo', 'Hyde Park', 'Sandhurst', 'Benmore', 'Wendywood', 'Lonehill', 'Douglasdale', 'Parkmore', 'Atholl', 'Inanda'],
    body: `
<h2>Premium and integrated machines</h2>
<p>Integrated machines sit behind a kitchen cabinet door and have to be slid out carefully without damaging the cabinet or the floor. We protect your floors, remove the machine, repair it and refit it, checking the door alignment before we leave. We regularly work on <a href="${brandUrl('bosch')}">Bosch</a>, <a href="${brandUrl('siemens')}">Siemens</a> and <a href="${brandUrl('aeg')}">AEG</a> machines, as well as Miele and Smeg. Brand names are trademarks of their owners.</p>

<h2>Apartment living</h2>
<p>In Sandton's apartment blocks the washing machine is often a washer-dryer in a small cupboard. Drying faults, blocked condensers and drainage problems are common. See <a href="/services/washer-dryer-repairs/">washer dryer repairs</a>. A leak in an apartment can quickly become a problem for the unit below, so if your machine is leaking, switch it off at the wall, turn off the tap and call us. See <a href="/problems/washing-machine-leaking/">washing machine leaking</a>.</p>
<p>Please tell us about building access when you book: visitor parking, the concierge, the lift and any building rules about contractors' hours.</p>

<h2>Family homes</h2>
<p>In Bryanston, Lonehill and Douglasdale, we see the full range of <a href="/services/front-loader-repairs/">front loader</a> and <a href="/services/top-loader-repairs/">top loader</a> repairs, including <a href="${brandUrl('lg')}">LG</a> and <a href="${brandUrl('samsung')}">Samsung</a> large-capacity machines.</p>`,
    faqs: [
      { q: 'Do you repair Miele washing machines in Sandton?', a: 'Yes, we repair Miele and other premium brands. Some parts need to be ordered in, and we will give you the timeline with the quote.' },
      { q: 'Can you work in my apartment building?', a: 'Yes. Let us know about the concierge, parking and any rules about contractor hours when you book.' },
      { q: 'Do you repair integrated washer-dryers?', a: 'Yes. We remove, repair and refit integrated machines without damaging your cabinetry.' },
    ],
    nearby: ['johannesburg', 'midrand'],
  },
  midrand: {
    title: 'Washing Machine Repairs Midrand | ProServ',
    description: 'Washing machine repairs in Midrand: Kyalami, Waterfall, Carlswald, Noordwyk and more. Diagnose and quote at home. Call 079 895 0496.',
    h1: 'Washing machine repairs in Midrand',
    intro: `<p>ProServ handles washing machine repairs across Midrand, from Halfway House and Noordwyk to Kyalami, Carlswald and the newer developments at Waterfall. Midrand sits between Johannesburg and Pretoria, so it's an easy area for our technicians to reach. Many of the homes here are newer complexes and estates, with machines that are only a few years old but already working hard.</p>`,
    suburbs: ['Halfway House', 'Noordwyk', 'Vorna Valley', 'Carlswald', 'Kyalami', 'Blue Hills', 'Waterfall', 'Glen Austin', 'Crowthorne', 'Erand Gardens', 'Barbeque Downs', 'Midridge Park', 'Country View', 'President Park'],
    body: `
<h2>Newer homes, newer machines</h2>
<p>Because so much of Midrand has been built in the last 15 to 20 years, many of the machines we work on are modern inverter front loaders and washer-dryers. Common faults include:</p>
<ul>
  <li><strong>Control board faults</strong> after power outages and surges. See <a href="/problems/washing-machine-wont-turn-on/">washing machine won't turn on</a>.</li>
  <li><strong>Drain pump blockages</strong>, often from small items in pockets. See <a href="/services/washing-machine-parts-replacement/">parts replacement</a>.</li>
  <li><strong>Door lock faults</strong> on busy family machines. See <a href="/problems/washing-machine-door-wont-open/">door won't open or lock</a>.</li>
  <li><strong>Error codes</strong> on <a href="${brandUrl('lg')}">LG</a> and <a href="${brandUrl('samsung')}">Samsung</a> machines. See the <a href="${errorCodeUrl('lg')}">LG</a> and <a href="${errorCodeUrl('samsung')}">Samsung</a> error code guides.</li>
</ul>

<h2>Smallholdings and Kyalami</h2>
<p>Around Kyalami and Blue Hills some properties are on smallholdings with borehole water or tanks. Borehole water can carry sand and minerals that block inlet filters and leave scale on heating elements. If your machine is slow to fill or not heating, mention your water source when you book. See <a href="/problems/washing-machine-not-filling-with-water/">not filling with water</a>.</p>

<h2>Estates and complexes</h2>
<p>Please send gate or access instructions with your booking so the technician can get straight in.</p>

<h2>Brands we repair in Midrand</h2>
<p>We repair all major washing machine brands, including <a href="${brandUrl('hisense')}">Hisense</a>, <a href="${brandUrl('bosch')}">Bosch</a> and <a href="${brandUrl('defy')}">Defy</a>.</p>`,
    faqs: [
      { q: 'Do you cover Waterfall Estate?', a: 'Yes. Please register the technician with estate security or send access instructions when you book.' },
      { q: 'My machine is on borehole water. Does that matter?', a: 'It can. Sand and minerals can block the inlet filter and scale up the heating element. Tell us when you book so we can check those parts.' },
      { q: 'How quickly can you get to Midrand?', a: `We aim to arrive ${f.arrivalTime} on urgent call-outs, depending on where the technician is working.` },
    ],
    nearby: ['sandton', 'centurion', 'johannesburg'],
  },
  'east-rand': {
    title: 'Washing Machine Repairs East Rand | ProServ',
    description: 'Washing machine repairs on the East Rand: Benoni, Boksburg, Kempton Park, Germiston, Edenvale and more. Call ProServ on 079 895 0496.',
    h1: 'Washing machine repairs on the East Rand',
    intro: `<p>ProServ provides washing machine repairs right across the East Rand (Ekurhuleni), including Benoni, Boksburg, Kempton Park, Germiston, Edenvale and Bedfordview. The East Rand has a lot of established family homes with big households and hard-working top loaders, as well as newer estates around Benoni and Boksburg. We come to you, find the fault and quote first.</p>`,
    suburbs: ['Benoni', 'Boksburg', 'Kempton Park', 'Germiston', 'Edenvale', 'Bedfordview', 'Springs', 'Brakpan', 'Birchleigh', 'Bonaero Park', 'Northmead', 'Farrarmere', 'Beyers Park', 'Sunward Park'],
    body: `
<h2>Big families, big loads</h2>
<p>East Rand households often run large-capacity machines every day, and that's tough on the parts that carry the weight. We regularly replace:</p>
<ul>
  <li><strong>Suspension rods, springs and shock absorbers</strong> on machines that bang and walk. See <a href="/problems/washing-machine-noisy-when-spinning/">washing machine noisy when spinning</a>.</li>
  <li><strong>Drive couplings and clutches on top loaders</strong>, where the motor runs but the drum won't turn. See <a href="/services/top-loader-repairs/">top loader repairs</a>.</li>
  <li><strong>Bearings</strong> on well-used front loaders. See <a href="/services/front-loader-repairs/">front loader repairs</a>.</li>
  <li><strong>Pumps</strong> blocked by work-clothes grit, coins and small items. See <a href="/problems/washing-machine-not-draining/">washing machine not draining</a>.</li>
</ul>

<h2>Work clothes and heavy soiling</h2>
<p>If you wash overalls and work wear, sand, grit and grease build up in the drum, the filter and the pump. Shake work clothes out before washing and clean the pump filter more often. A regular <a href="/services/washing-machine-servicing/">service</a> pays for itself on these machines.</p>

<h2>Power supply problems</h2>
<p>Outages and voltage dips affect the East Rand like the rest of Gauteng, and surges when the power returns can damage boards. See <a href="/blog/protect-washing-machine-from-load-shedding/">protecting your washing machine from load shedding</a>.</p>

<h2>Brands we repair on the East Rand</h2>
<p>We repair all major washing machine brands, including <a href="${brandUrl('defy')}">Defy</a>, <a href="${brandUrl('samsung')}">Samsung</a>, <a href="${brandUrl('lg')}">LG</a>, <a href="${brandUrl('whirlpool')}">Whirlpool</a> and <a href="${brandUrl('hisense')}">Hisense</a>, plus Speed Queen top loaders. See the <a href="${errorCodeUrl('defy')}">Defy error code guide</a> if your machine is showing a code.</p>`,
    faqs: [
      { q: 'Do you go to Springs and Brakpan?', a: 'Yes. [CONFIRM: eastern suburbs covered] Send us your address when you book.' },
      { q: 'Do you repair Speed Queen top loaders?', a: 'Yes. Some parts are ordered in, which may mean a second visit.' },
      { q: 'My machine is full of sand from work clothes. Can you clean it out?', a: 'Yes. A service clears the pump, filter and sump, and we check for wear caused by grit.' },
    ],
    nearby: ['johannesburg', 'midrand'],
  },
};
