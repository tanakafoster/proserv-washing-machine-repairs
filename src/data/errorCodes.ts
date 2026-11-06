import type { ContentPage } from './types';
import { brandUrl } from './site';

export interface ErrorCode {
  code: string;
  meaning: string;
  causes: string;
  /** Safe, non-electrical check for the owner. */
  check: string;
  /**
   * true until this code has been checked against the manufacturer's manual for the
   * models you service. Shows a [VERIFY] tag on the site. Set to false once confirmed.
   */
  verify: boolean;
}

export interface ErrorGuide extends ContentPage {
  brand: string;
  brandSlug: string;
  codes: ErrorCode[];
}

export const errorGuides: ErrorGuide[] = [
  {
    slug: 'lg',
    brand: 'LG',
    brandSlug: 'lg',
    name: 'LG error codes',
    title: 'LG Washing Machine Error Codes: OE, IE, UE | ProServ',
    description: 'LG washing machine error codes explained: OE, IE, UE, dE, LE and more, with safe first checks. Need a technician? Call 079 895 0496.',
    h1: 'LG washing machine error codes',
    primaryKeyword: 'LG washing machine error codes',
    summary: 'OE, IE, UE, dE, LE, PE, FE, tE and more.',
    intro: `<p>LG washing machine error codes are short two-letter codes that tell you which system the machine has a problem with. The most common ones, like <strong>OE</strong> (drain), <strong>IE</strong> (water inlet) and <strong>UE</strong> (unbalanced), often have a simple cause you can check yourself. Others point to a part that needs a technician. Use this guide to work out what your machine is telling you.</p>`,
    body: `
<h2>Before you start</h2>
<p>Codes and their meanings can differ between LG models and years. Find your model number on the sticker inside the door rim or on the back of the machine, and check it against your manual. Codes marked [VERIFY] below still need to be confirmed against LG's documentation for the models we service.</p>
<p>Many LG machines show <strong>CL</strong> when the child lock is on. That isn't a fault: hold the child lock button (or the button pair shown in your manual) for a few seconds to turn it off.</p>`,
    codes: [
      { code: 'OE', meaning: 'Drain error: water not pumped out in time', causes: 'Blocked pump filter, kinked or blocked drain hose, blocked household drain, failed drain pump', check: 'Straighten the drain hose; clean the pump filter (expect water)', verify: true },
      { code: 'IE', meaning: 'Water inlet error: machine not filling in time', causes: 'Tap closed, low water pressure, kinked hose, blocked inlet filter, failed inlet valve', check: 'Open the tap fully; check pressure; clean the mesh filter in the inlet hose', verify: true },
      { code: 'UE', meaning: 'Unbalanced load: can\'t balance for spin', causes: 'One heavy item, very small load, machine not level, worn shock absorbers, motor sensor fault', check: 'Redistribute the load, add or remove items, check the machine is level', verify: true },
      { code: 'dE', meaning: 'Door error: door not detected as closed or locked', causes: 'Door not shut fully, laundry caught in the seal, faulty door lock or catch', check: 'Open and close the door firmly; check nothing is caught in the seal', verify: true },
      { code: 'LE', meaning: 'Motor locked: motor overloaded or not turning', causes: 'Overloaded drum, object jamming the drum, direct drive motor or wiring fault', check: 'Reduce the load; switch off for 30 minutes and retry', verify: true },
      { code: 'FE', meaning: 'Overfill: too much water in the drum', causes: 'Faulty inlet valve not closing, pressure switch or sensor fault', check: 'Switch off at the wall and turn off the tap; call a technician', verify: true },
      { code: 'PE', meaning: 'Water level sensor error', causes: 'Pressure sensor, its hose or wiring', check: 'Switch off and on; if it returns, call a technician', verify: true },
      { code: 'tE', meaning: 'Heating or temperature sensor error', causes: 'Thermistor, heating element or wiring fault', check: 'None: electrical part. Call a technician', verify: true },
      { code: 'PF', meaning: 'Power failure: power was interrupted during the cycle', causes: 'Load shedding, tripped supply, loose plug', check: 'Restart the cycle once power is stable', verify: true },
      { code: 'AE', meaning: 'Leak detected (on models with leak sensing)', causes: 'Leaking hose, pump, seal or tub inside the machine', check: 'Switch off, turn off the tap; call a technician', verify: true },
      { code: 'Sud', meaning: 'Excess suds detected', causes: 'Too much detergent, or non-HE detergent in a front loader', check: 'Use less low-suds detergent; run a rinse cycle', verify: true },
    ],
    faqs: [
      { q: 'How do I reset an LG washing machine error code?', a: 'Switch off at the wall for a few minutes, then switch on and restart. If the same code returns, the fault is still there and needs to be fixed.' },
      { q: 'What does OE mean on my LG?', a: 'OE generally means the machine could not drain. Check the drain hose and clean the pump filter first. If that does not clear it, the pump may need replacing.' },
      { q: 'Is CL an error code?', a: 'No. On many LG models CL means the child lock is active. See your manual for how to turn it off.' },
    ],
  },
  {
    slug: 'samsung',
    brand: 'Samsung',
    brandSlug: 'samsung',
    name: 'Samsung error codes',
    title: 'Samsung Washing Machine Error Codes: 4C, 5C | ProServ',
    description: 'Samsung washing machine error codes explained: 4C, 5C, UB, DC, HC and more, with safe first checks. Technician help on 079 895 0496.',
    h1: 'Samsung washing machine error codes',
    primaryKeyword: 'Samsung washing machine error codes',
    summary: '4C, 5C, UB, DC, HC, LC, 3C, Sud and more.',
    intro: `<p>Samsung washing machine error codes usually combine a number or letter with C or E, such as <strong>4C</strong> (water supply) and <strong>5C</strong> (drain). Older Samsung machines tend to use the E versions (4E, 5E) and newer ones the C versions, but they generally mean the same thing. This guide explains the common Samsung washing machine error codes and what you can safely check before you call.</p>`,
    body: `
<h2>Before you start</h2>
<p>Samsung codes vary between models and between front and top loaders. Find the model number on the sticker on the door rim or back of the machine and check your manual. Codes marked [VERIFY] still need to be confirmed against Samsung's documentation for the models we service.</p>`,
    codes: [
      { code: '4C / 4E', meaning: 'Water supply error: machine not filling', causes: 'Tap closed, low pressure, kinked hose, blocked inlet filter, inlet valve fault, hot and cold hoses swapped', check: 'Open the tap; check pressure; clean the inlet hose filter', verify: true },
      { code: '5C / 5E', meaning: 'Drain error: water not draining', causes: 'Blocked pump filter or drain hose, blocked household drain, failed pump', check: 'Straighten the hose; clean the pump filter (expect water)', verify: true },
      { code: 'UB / UE / Ub', meaning: 'Unbalanced load', causes: 'One heavy item, small load, machine not level, worn shock absorbers', check: 'Redistribute the load and level the machine', verify: true },
      { code: 'DC / DE / dE', meaning: 'Door error: door not closed or not locking', causes: 'Door not shut, laundry in the seal, faulty lock or catch', check: 'Close the door firmly; clear the seal', verify: true },
      { code: 'HC / HE', meaning: 'Heating error', causes: 'Heating element, temperature sensor or wiring', check: 'None: electrical part. Call a technician', verify: true },
      { code: 'LC / LE', meaning: 'Water level or leak error (varies by model)', causes: 'Leak inside the machine, drain hose too low causing siphoning, level sensor', check: 'Check the drain hose height; look for water under the machine', verify: true },
      { code: '1C / 1E', meaning: 'Water level sensor error', causes: 'Pressure sensor, its hose or wiring', check: 'Switch off and on; if it returns, call a technician', verify: true },
      { code: '3C / 3E', meaning: 'Motor error', causes: 'Overload, object jamming the drum, motor, sensor or wiring fault', check: 'Reduce the load; check nothing is stuck in the drum', verify: true },
      { code: 'OC / OE', meaning: 'Overflow: too much water detected', causes: 'Inlet valve not closing, level sensor fault', check: 'Switch off and turn off the tap; call a technician', verify: true },
      { code: 'Sud / SD / 5d', meaning: 'Excess suds detected', causes: 'Too much detergent, non-HE detergent', check: 'Use less low-suds detergent; let it finish or run a rinse', verify: true },
      { code: 'tC / tE', meaning: 'Temperature sensor error', causes: 'Thermistor or wiring', check: 'None: electrical part. Call a technician', verify: true },
    ],
    faqs: [
      { q: 'What is the difference between 4C and 4E on a Samsung?', a: 'They generally mean the same water supply problem. Newer models tend to show 4C and older ones 4E.' },
      { q: 'My Samsung shows 5C but the water drained. Why?', a: 'The machine may have drained too slowly, which triggers the code. A partly blocked filter, hose or a weak pump is the usual cause.' },
      { q: 'How do I clear a Samsung error code?', a: 'Switch off at the wall for a few minutes, then restart. If it returns, the cause needs fixing.' },
    ],
  },
  {
    slug: 'bosch',
    brand: 'Bosch',
    brandSlug: 'bosch',
    name: 'Bosch error codes',
    title: 'Bosch Washing Machine Error Codes: E18, E17 | ProServ',
    description: 'Bosch washing machine error codes explained: E18, E17, E23, E21 and more, with safe first checks. Technician help on 079 895 0496.',
    h1: 'Bosch washing machine error codes',
    primaryKeyword: 'Bosch washing machine error codes',
    summary: 'E17, E18, E21, E23 and the older F versions.',
    intro: `<p>Bosch washing machine error codes usually appear as an E followed by a number, such as <strong>E18</strong> (drain) or <strong>E17</strong> (water supply). Older machines may show the same number with an F, such as F18. Some models show the code as "E:18" with a colon. This guide explains what the common Bosch washing machine error codes usually mean and the safe checks you can do yourself.</p>`,
    body: `
<h2>Before you start</h2>
<p>Bosch has made many generations of machines, and codes are not identical across all of them. Find your model number (the "E-Nr") on the sticker inside the door rim and check your manual. Codes marked [VERIFY] still need to be confirmed against Bosch's documentation for the models we service.</p>
<p>Many Siemens machines are built on related platforms and may show similar codes. See <a href="/brands/siemens-washing-machine-repairs/">Siemens washing machine repairs</a>.</p>`,
    codes: [
      { code: 'E18 / F18', meaning: 'Drain error: water not pumped out in time', causes: 'Blocked pump filter, kinked or blocked drain hose, blocked drain, failed pump', check: 'Straighten the hose; clean the pump filter (expect water)', verify: true },
      { code: 'E17 / F17', meaning: 'Water supply error: not filling in time', causes: 'Tap closed, low pressure, kinked hose, blocked inlet filter, inlet valve or Aquastop valve', check: 'Open the tap fully; check pressure; check the hose is not kinked', verify: true },
      { code: 'E23 / F23', meaning: 'Leak protection (Aquastop): water in the base of the machine', causes: 'Leaking hose, pump, seal or tub inside the machine; excess suds', check: 'Switch off and turn off the tap; do not just reset it. Call a technician', verify: true },
      { code: 'E21 / F21', meaning: 'Motor or drum not turning as expected', causes: 'Overloaded drum, object jamming the drum, worn carbon brushes, motor or tacho fault', check: 'Reduce the load; check nothing is jammed in the drum', verify: true },
    ],
    faqs: [
      { q: 'What does E18 mean on a Bosch?', a: 'E18 generally means the machine could not drain in time. Clean the pump filter and check the drain hose. If it returns, the pump may need replacing.' },
      { q: 'Can I reset a Bosch E23 error?', a: 'You may be able to clear the display, but E23 generally means water has been detected in the base of the machine, so there is a leak to fix. Please get it checked.' },
      { q: 'Why are there so few codes listed?', a: 'We only list codes we are confident about. Bosch codes vary across generations. Send us your code and model number for anything not listed here.' },
    ],
  },
  {
    slug: 'defy',
    brand: 'Defy',
    brandSlug: 'defy',
    name: 'Defy error codes',
    title: 'Defy Washing Machine Error Codes Explained | ProServ',
    description: 'Defy washing machine error codes explained for front loaders: door, water, drain and heating faults, plus safe checks. Call 079 895 0496.',
    h1: 'Defy washing machine error codes',
    primaryKeyword: 'Defy washing machine error codes',
    summary: 'Common front loader codes for door, water, drain and heating faults.',
    intro: `<p>Defy washing machine error codes depend a lot on the model, because Defy has sold many ranges of front loaders and top loaders over the years. Many current Defy front loaders show an <strong>E</strong> followed by two digits, such as E01 or E03. This guide covers the common Defy washing machine error codes on front loaders and the safe checks you can do, and explains when to call a technician.</p>`,
    body: `
<h2>Before you start</h2>
<p>Defy codes are <strong>not</strong> the same across every range, and top loaders often use different codes or flashing lights. Find the model number on the sticker on the door rim or at the back of the machine and check your manual. Every code below is marked [VERIFY] because it still needs to be confirmed against Defy's documentation for your specific model. If your code isn't listed, or your manual says something different, the manual is right.</p>`,
    codes: [
      { code: 'E01', meaning: 'Door lock fault: door not locking', causes: 'Door not closed, laundry in the seal, faulty door lock or catch', check: 'Close the door firmly; clear the seal', verify: true },
      { code: 'E02', meaning: 'Water inlet fault: not filling in time', causes: 'Tap closed, low pressure, kinked hose, blocked inlet filter, inlet valve', check: 'Open the tap; check pressure; clean the inlet filter', verify: true },
      { code: 'E03', meaning: 'Drain fault: water not draining', causes: 'Blocked pump filter or hose, failed pump', check: 'Straighten the hose; clean the pump filter (expect water)', verify: true },
      { code: 'E04', meaning: 'Overflow: too much water', causes: 'Inlet valve not closing, level sensor fault', check: 'Switch off, turn off the tap; call a technician', verify: true },
      { code: 'E05', meaning: 'Temperature sensor fault', causes: 'Sensor (NTC) or wiring', check: 'None: electrical part. Call a technician', verify: true },
      { code: 'E06', meaning: 'Heating fault', causes: 'Heating element or wiring', check: 'None: electrical part. Call a technician', verify: true },
    ],
    faqs: [
      { q: 'My Defy code is not on this list. What now?', a: 'Send us the code and model number on WhatsApp. Defy codes vary a lot between ranges, so we confirm against the model before advising.' },
      { q: 'My Defy top loader flashes lights instead of a code.', a: 'Many top loaders show faults as a pattern of flashing lights. Take a short video and send it with the model number.' },
    ],
  },
];

export const brandLink = (slug: string) => brandUrl(slug);
