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
      `Front loader repairs at your home: bearings, pumps, door locks, seals, brushes and boards. Quote before any work starts. Call ${site.phone.display}.`,
    h1: 'Front loader repairs at your home',
    primaryKeyword: 'front loader repairs',
    summary: 'Bearings, pumps, door locks, seals, brushes and control boards on front loading machines.',
    image: { src: '/images/service-front-loader.webp', alt: 'Illustration of a front loader washing machine with its door open and a spanner beside it', width: 960, height: 640 },
    intro: `<p>Front loader repairs are done at your home, whether the machine won't drain, spin, heat or unlock, or leaks or roars on the spin. The technician finds the failed part and quotes before work starts, and most repairs are finished on the same visit when the part is available.</p>`,
    body: `
<h2>How a front loader works</h2>
<p>The drum lies on its side inside an outer tub that holds the water. The tub hangs from springs at the top of the cabinet and rests on shock absorbers underneath, with heavy counterweights bolted on to keep it steady when the drum spins at speed.</p>
<p>The drum's shaft runs through two bearings at the back of the tub, behind a seal that keeps the water out. On a belt drive machine, a motor under the tub turns the drum through a belt and a large pulley. On a direct drive machine, the motor is built onto the back of the tub and turns the shaft itself.</p>
<p>Water comes in through an electric inlet valve, flushing the detergent drawer on the way. A pressure sensor tells the control board when the level is right, a heating element under the drum warms the water, and the drain pump pulls it out through a filter at the end. The door lock keeps the door shut until the drum has stopped and the water has gone.</p>

<h2>Front loader faults, by symptom</h2>
<p>Each symptom below usually points to a few parts, and links to our fuller guide.</p>
<h3>A rumble, roar or bang on the spin</h3>
<p>A rumble that grows into a roar as the drum speeds up is the classic sign of worn bearings. Banging is more often worn shock absorbers, a loose counterweight or a bunched load, and a scrape on every turn can mean an underwire is caught between the drum and the tub. Our guides to a <a href="/problems/washing-machine-noisy-when-spinning/">washing machine noisy when spinning</a> and the <a href="/blog/signs-washing-machine-bearings-are-worn/">signs of worn washing machine bearings</a> help you tell them apart.</p>
<h3>Water left in the drum</h3>
<p>If the cycle stops with grey water inside, something is in its way: a packed pump filter (on some machines called the coin trap), a kinked drain hose, a blocked standpipe, or a pump that has jammed or burnt out. Don't force the door, which normally stays locked while water is inside. See <a href="/problems/washing-machine-not-draining/">washing machine not draining</a>.</p>
<h3>The door won't open, or won't lock</h3>
<p>The door lock holds the door shut and tells the control board it's safe to fill. When it fails, the machine clicks and won't start, or finishes the wash and won't let you in. A broken handle, a bent catch or a door that has dropped on worn hinges can do the same. See <a href="/problems/washing-machine-door-wont-open/">washing machine door won't open</a>.</p>
<h3>The drum won't turn or won't spin</h3>
<p>A front loader won't spin until the water has drained and the load is balanced, so rule those out first. After that, the usual suspects are worn carbon brushes, a belt that has slipped off or snapped, a faulty speed sensor, or the motor and the electronics that drive it. See <a href="/problems/washing-machine-not-spinning/">washing machine not spinning</a>.</p>
<h3>Leaks at the front or underneath</h3>
<p>Water at the front usually comes from a split door seal, or a sock caught between the seal and the glass. Underneath, look to a pump filter that wasn't screwed in fully, a leaking pump or sump hose, or a failed shaft seal at the back of the tub. See <a href="/problems/washing-machine-leaking/">washing machine leaking</a>.</p>
<h3>Detergent left in the drawer</h3>
<p>Powder or liquid left in the drawer after the wash means the water isn't flushing it through. Caked powder, residue blocking the jets above the drawer, low water pressure or detergent in the wrong compartment is the usual reason. Failing those, the section of the inlet valve that feeds that compartment may have failed.</p>
<h3>A knock, wobble or rattle from the drum</h3>
<p>The drum's plastic paddles can crack or work loose and rattle with every turn. On many front loaders, the metal bracket on the back of the drum that carries the shaft, called the drum spider, can also corrode and crack, letting the drum wobble and knock much like worn bearings.</p>
<h3>Cold washes, or the power trips when it heats</h3>
<p>If a 60°C wash comes out cold, the heating element or its temperature sensor is the first suspect. An element that has broken down inside can trip the earth leakage as soon as it switches on, which is why some machines trip only on hot programmes.</p>
<div class="callout callout-safety"><p><strong>Safety first:</strong> if the earth leakage or a breaker trips while the machine is running, switch the machine off at the wall, unplug it and leave it off until a technician has checked it. Tripping can be a sign of a dangerous electrical fault, so don't keep resetting it.</p></div>
<h3>No power, or a code on the display</h3>
<p>A dead machine may have lost its supply, blown its mains filter or had its control board damaged by a surge after load shedding (see <a href="/problems/washing-machine-wont-turn-on/">washing machine won't turn on</a>). A code points to an area, such as the drain or the door, rather than to one part: start with <a href="/problems/washing-machine-showing-error-code/">washing machine showing an error code</a> and our <a href="${errorCodeUrl('lg')}">LG error codes</a>, <a href="${errorCodeUrl('samsung')}">Samsung error codes</a>, <a href="${errorCodeUrl('bosch')}">Bosch error codes</a> and <a href="${errorCodeUrl('defy')}">Defy error codes</a> guides.</p>

<h2>Quick checks before you book</h2>
<ul class="checklist">
  <li>The plug is in and switched on at the wall, and the house has power (try a lamp in the socket if you're unsure).</li>
  <li>No delay timer or child lock is set (look for a clock or key symbol on the display).</li>
  <li>The door is shut firmly with nothing caught in the seal, and the tap is fully open with no kinks in the hoses.</li>
  <li>If water is left inside, clean the pump filter as your manual describes, after switching off at the wall and unplugging. Expect a lot of water, so lay down towels and a shallow tray first, and give the water time to cool if the machine stopped partway through a hot wash.</li>
</ul>

<h2>What the technician checks</h2>
<ol class="steps">
  <li><strong>What happened.</strong> When it started, what the display showed, and whether there was a power cut or the machine was moved. The answers often point straight at the fault.</li>
  <li><strong>The basics.</strong> The socket, tap, hoses and standpipe are checked first, and stored fault codes are read on machines that keep them.</li>
  <li><strong>The suspect parts.</strong> With the machine switched off and unplugged, the pump, door lock, heater and motor are tested, and the brushes, bearings and door seal are checked for wear.</li>
  <li><strong>The quote.</strong> You hear what has failed, what the repair involves and what it costs before any work starts, including whether the part has to be ordered.</li>
  <li><strong>The repair and a test run.</strong> A test programme checks filling, heating, draining and spinning, and the floor is checked for drips before the technician leaves.</li>
</ol>

<h2>Is a front loader worth repairing?</h2>
<p>Usually. Pumps, door locks, carbon brushes, door seals, heating elements, inlet valves and shock absorbers are routine parts designed to be replaced, and fitting one costs far less than a new machine.</p>
<p>Bearings need more thought. Where the outer tub unbolts into two halves, new bearings and a seal can be fitted on their own, but on many newer machines the halves are welded together, so a complete new tub and drum assembly is needed instead. In that case, or on an older machine with other wear, weigh the quote against a new machine with our <a href="/repair-or-replace/">repair or replace guide</a>.</p>

<h2>What affects the cost</h2>
<p>The part, and the time it takes to reach it, decide most of the price. A cleared blockage may need no part at all, while bearings mean stripping the machine down to the tub, and a built-in machine has to come out of its cabinet first.</p>
<p>The call-out fee is ${f.calloutFee}, ${f.calloutCondition}. Every repair carries a ${f.warranty} warranty on parts and labour, and our <a href="/washing-machine-repair-cost/">repair cost page</a> explains how repairs are priced.</p>

<h2>Looking after a front loader</h2>
<ul class="checklist">
  <li>Use a low-suds detergent made for automatic or front loading machines, at the dose on the pack.</li>
  <li>Empty pockets, and wash underwired bras in a mesh bag: coins, hair clips and underwires cause many pump blockages and drum noises.</li>
  <li>Wipe the folds of the door seal after the day's last wash, and leave the door ajar so the drum can dry, unless small children or pets can reach the machine.</li>
  <li>Mix big and small items so the drum can balance, and keep within the load your manual gives.</li>
  <li>Run an empty hot maintenance wash about once a month, especially if you mostly wash cold.</li>
  <li>Switch off at the wall during load shedding, as our guide to <a href="/blog/protect-washing-machine-from-load-shedding/">protecting your washing machine from load shedding</a> explains.</li>
</ul>
<p>Our article on <a href="/blog/why-does-my-washing-machine-smell/">why washing machines smell</a> covers odours, and <a href="/services/washing-machine-servicing/">washing machine servicing</a> explains what a yearly check-up looks at.</p>

<h2>Front loader brands we repair</h2>
<p>With ${f.yearsInBusiness} years of washing machine repair experience, we work on front loaders from all major brands, including <a href="${brandUrl('bosch')}">Bosch</a>, <a href="${brandUrl('defy')}">Defy</a>, <a href="${brandUrl('lg')}">LG</a>, <a href="${brandUrl('samsung')}">Samsung</a>, <a href="${brandUrl('siemens')}">Siemens</a>, <a href="${brandUrl('aeg')}">AEG</a>, <a href="${brandUrl('miele')}">Miele</a>, <a href="${brandUrl('smeg')}">Smeg</a>, <a href="${brandUrl('hisense')}">Hisense</a> and <a href="${brandUrl('whirlpool')}">Whirlpool</a>. The layout is similar from brand to brand, but the details differ: many LG front loaders use direct drive, for example, while plenty of others turn the drum with a belt. Have the model number handy when you <a href="/contact/">book a front loader repair</a>.</p>`,
    faqs: [
      { q: `How long does a front loader repair take?`, a: `When the part is available, a drain pump, door lock, set of carbon brushes or heating element is normally fitted on the same visit. Bearings take several hours, because the machine is stripped down to the tub. If a part has to be ordered, you're told before you agree to the repair.` },
      { q: `Does a front loader need special detergent?`, a: `Yes. A front loader tumbles the washing through very little water, so it needs a low-suds detergent labelled for automatic or front loading machines. Hand-wash powder makes far too many suds, which can leak from the door, spoil the rinse and leave residue behind.` },
      { q: `Why does the door stay locked for a minute or two after the wash?`, a: `That's normal on many front loaders. Many locks use a small heated element that has to cool before the door releases, and the machine also waits for the drum to stop and the water to drain. If it's still locked five minutes later with no water inside, the lock may be faulty.` },
      { q: `What are the black marks in the folds of my door seal?`, a: `They're usually mould, growing on detergent and fabric softener residue in the damp folds. Wiping the folds after washing and running a monthly hot maintenance wash stop it spreading. Marks that have soaked deep into the rubber may never come out, and a seal that is split or perished should be replaced.` },
      { q: `Does my front loader have to come out of its space for a repair?`, a: `Usually it's pulled forward so the technician can reach the top and back panels. If it's built into a cabinet, has a dryer stacked on top or stands in a tight space, mention it when you book so enough time is set aside.` },
      { q: `Why does my front loader take so long to finish a wash?`, a: `Long programmes are normal on many modern front loaders, because eco programmes save water and electricity by washing for longer at lower temperatures. Extra suds or repeated rebalancing add time too. If it stalls on the same step every time, suspect a heating, draining or sensor fault.` },
    ],
  },
  {
    slug: 'top-loader-repairs',
    name: 'Top loader repairs',
    serviceType: 'Top loader washing machine repair',
    title: 'Top Loader Repairs in Gauteng | ProServ',
    description:
      `Top loader repairs at home for machines that won't agitate, spin, drain or fill: lid switches, belts, clutches and pumps. Call ${site.phone.display}.`,
    h1: 'Top loader repairs, done at your home',
    primaryKeyword: 'top loader repairs',
    summary: 'Lid switches, belts, clutches, gearboxes, pumps and suspension on top loading machines.',
    image: { src: '/images/service-top-loader.webp', alt: 'Illustration of a top loader washing machine with its lid open', width: 960, height: 640 },
    intro: `<p>Our top loader repairs cover agitator and pulsator machines that won't wash, spin, drain or fill, or that bang and walk across the floor on the spin. A technician comes to your home, finds the worn part and quotes before any work starts.</p>`,
    body: `
<h2>How a top loader works</h2>
<p>A top loader stands its tub upright, with a perforated basket inside that holds the washing. An agitator machine moves the clothes with a tall finned column in the centre of the basket that turns back and forth, while a pulsator machine has a low, ridged disc in the floor of the basket that whips the water into a churning current.</p>
<p>During the wash, a motor under the tub drives only the agitator or pulsator. For the spin, a clutch locks the basket to the drive so the whole basket turns at speed and flings the water out through its holes. A belt drive machine turns a pulley on the clutch or gearbox through a belt, while a direct drive machine connects the motor straight to the drive, through a coupling or by mounting it on the shaft itself.</p>
<p>The tub hangs on suspension rods or springs so it can sway on the spin without hitting the cabinet. A lid switch or lid lock tells the control board the lid is shut, and on most machines there's no spin without it. Inlet valves, often one for hot and one for cold, let the water in, and a pump or a drain valve empties the tub.</p>

<h2>Top loader won't agitate? A walk-through</h2>
<p>A machine that fills but won't wash is the classic top loader fault. A technician works through the possible causes in a logical order:</p>
<ol class="steps">
  <li><strong>Has it filled to the level it wants?</strong> Many top loaders won't start washing until a water level sensor says the tub is full enough. A slow fill, or a sensor or its small air hose that's blocked, can leave the machine waiting.</li>
  <li><strong>Does it think the lid is shut?</strong> On some models a faulty lid switch stops the wash as well as the spin.</li>
  <li><strong>Does the motor hum but not turn?</strong> A hum with no movement points to a failed motor capacitor, a seized motor or something jamming the drive.</li>
  <li><strong>Does the motor run while the agitator stays still?</strong> Then the drive isn't getting through: a slipping or snapped belt, a worn motor coupling or a worn clutch is the usual cause.</li>
  <li><strong>Does only part of the agitator move?</strong> On a two-piece agitator, the top section is meant to turn one way only, held by small plastic ratchets often called agitator dogs. When they wear, the top slips freely and the washing stops turning over.</li>
  <li><strong>Does the shaft turn under a still agitator?</strong> The splined fitting that joins the agitator to its shaft may be stripped or, if there's grinding or oil underneath, the gearbox (transmission) may have failed.</li>
  <li><strong>Are the controls switching it on?</strong> On older mechanical machines, a worn timer or programme selector can skip the wash, and on electronic machines the control board is tested last.</li>
</ol>
<p>Some of these are quick fixes and some are major, so the drive is tested before any part is replaced.</p>

<h2>Other top loader faults, by symptom</h2>
<h3>It won't spin, or the washing comes out soaking</h3>
<p>A top loader won't spin with the lid open, with water still in the tub, or with the load wrapped to one side, so check those first. If they're fine, a faulty lid switch or lid lock, a worn clutch, a slipping belt or a drain fault is the likely cause. See <a href="/problems/washing-machine-not-spinning/">washing machine not spinning</a>.</p>
<h3>It bangs, thumps or walks on the spin</h3>
<p>Many top loaders hang the tub from four suspension rods, one at each corner, each with a damper at the bottom. When they wear, the tub swings too far, hits the cabinet and drags the machine across the floor. An uneven floor or a heavy item tangled around the agitator does the same, so try a balanced load first. To tell the different noises apart, see <a href="/problems/washing-machine-noisy-when-spinning/">washing machine noisy when spinning</a>.</p>
<h3>It won't drain, or won't fill</h3>
<p>Water left in the tub points to a blocked drain hose or standpipe, a jammed or failed pump or, on models that drain by gravity, a drain valve that won't open. A slow fill or no fill points to a closed tap, a kinked hose, blocked inlet filters, a faulty inlet valve or low water pressure. See <a href="/problems/washing-machine-not-draining/">washing machine not draining</a> and <a href="/problems/washing-machine-not-filling-with-water/">washing machine not filling with water</a>.</p>
<h3>Oil underneath, or grinding from below</h3>
<p>On machines with a gearbox under the tub, a dark, oily patch on the floor or grinding from underneath during the wash can mean the gearbox, or the seal and bearing above it, is wearing. Switch the machine off at the wall and have it checked before the damage spreads.</p>
<h3>Water on the floor</h3>
<p>Leaks from a top loader usually come from a hose connection at the back, a cracked inlet or drain hose, the pump, or the seal at the bottom of the tub. Too much detergent can also make suds spill over the rim. See <a href="/problems/washing-machine-leaking/">washing machine leaking</a>.</p>

<h2>What happens on the visit</h2>
<p>The technician hears what the machine has been doing, then runs a short programme to see the fault first-hand. Depending on the model, the lid switch, inlet valves and wiring are reached through the top or the control console, and the drive, pump and motor from underneath or through a back panel.</p>
<p>Work on the clutch, the tub seal or the bearing usually means lifting out the agitator or pulsator and the basket, which takes longer. Suspension rods are checked by pressing down on the tub and watching how it settles. You get a quote before any work starts, and after the repair the machine runs a full fill, wash, drain and spin to prove it.</p>

<h2>Is an older top loader worth fixing?</h2>
<p>Often, yes. Older top loaders tend to be mechanically simple, and lid switches, belts, couplings, suspension rods, pumps and inlet valves are modest repairs next to the price of a new machine. A top loader with a sound tub, basket and cabinet can give years more service after a repair like that.</p>
<p>Replacement deserves a closer look when the outer tub is cracked, the cabinet or base has rusted through, or the gearbox and the motor have both failed on an older machine. Parts matter too, because some older or less common models are no longer supported. Our <a href="/repair-or-replace/">repair or replace guide</a> sets out how to weigh it up, and our comparison of <a href="/blog/front-loader-vs-top-loader/">front loaders and top loaders</a> helps if you're choosing a new machine.</p>

<h2>What affects the price</h2>
<p>The part is the main factor: a lid switch, belt or coupling is a small item, while a clutch, gearbox or motor is a bigger one. Labour depends on whether the repair can be done from the top or underneath, or whether the basket has to come out.</p>
<p>If a part isn't available on the day, you'll know before you approve the repair. The call-out fee is ${f.calloutFee}, ${f.calloutCondition}, and repairs carry a ${f.warranty} warranty on parts and labour. Our page on <a href="/washing-machine-repair-cost/">how repairs are priced</a> goes into more detail.</p>

<h2>Keeping a top loader running well</h2>
<ul class="checklist">
  <li>Load the washing loosely and evenly around the agitator or pulsator, and don't wind sheets around the agitator.</li>
  <li>Wash large and small items together so the tub can balance for the spin, and don't fill past the level the manual shows.</li>
  <li>Use a detergent suited to automatic top loaders, at the dose on the pack. Too much leaves residue on the clothes and in the tub.</li>
  <li>If your model has a lint filter, often clipped inside the basket, clean it as the manual describes.</li>
  <li>Run the tub-clean programme, or a hot empty wash if the machine has a hot supply, about once a month, and leave the lid open afterwards so the tub can dry.</li>
  <li>Keep the drain hose free of kinks and at the height your manual gives.</li>
</ul>

<h2>Top loader brands we repair</h2>
<p>We repair top loaders from all major brands, including <a href="${brandUrl('defy')}">Defy</a>, <a href="${brandUrl('hisense')}">Hisense</a>, <a href="${brandUrl('lg')}">LG</a>, <a href="${brandUrl('samsung')}">Samsung</a>, <a href="${brandUrl('whirlpool')}">Whirlpool</a> and the heavy-duty <a href="${brandUrl('speed-queen')}">Speed Queen</a>. Drive systems vary between brands and models, from belts and gearboxes to direct drive motors, so the model number helps the technician prepare. You'll usually find it on a sticker under the lid or on the back of the machine, and you can send a photo of it when you <a href="/contact/">book a top loader repair</a>.</p>`,
    faqs: [
      { q: `Why does my top loader fill but not wash?`, a: `The drive usually isn't reaching the agitator or pulsator: a worn coupling, a slipping belt or a worn clutch is the usual cause. If the motor only hums without turning, a failed motor capacitor or a jam is more likely, and a lid switch or water level sensor fault can stop the wash before it starts. The technician tests each of these and quotes for whichever part has failed.` },
      { q: `Why won't my top loader spin when the lid is closed?`, a: `The lid switch or lid lock may not be telling the control board that the lid is shut, so the machine won't risk a spin. Water left in the tub or an unbalanced load will also stop it. If the tub has drained and the load is even, the switch or lock needs testing.` },
      { q: `Why does my top loader stop and beep during the spin?`, a: `Most top loaders stop the spin when the load is out of balance, often because a duvet or a pair of jeans has bunched to one side. Spread the load evenly around the basket and restart the spin. If it happens with every load, worn suspension rods or a machine that isn't level could be the cause.` },
      { q: `Why won't the lid of my top loader open after the spin?`, a: `Many modern top loaders lock the lid during the spin and keep it locked until the basket has stopped completely, which can take a minute. If it stays locked long after the basket has stopped, or there's still water in the tub, the lid lock or the drain needs checking. Don't force the lid, because that can break the lock or its catch.` },
      { q: `My top loader is very old. Is it worth repairing?`, a: `Often it is. Older top loaders are usually simple machines, and if the tub, basket and cabinet are sound, a new switch, belt, pump or set of suspension rods costs far less than a replacement. If parts for the model are no longer made, the technician will tell you.` },
      { q: `Why is there oil under my top loader?`, a: `On machines with a gearbox under the tub, oil on the floor can mean the gearbox seal is leaking. Switch the machine off at the wall and stop using it until it has been checked, because running it can damage the gearbox further.` },
      { q: `Does my top loader heat its own water?`, a: `Many top loaders have no heater and use the water from your taps, so warm washes depend on a hot supply from the geyser. Some models do have a built-in heater, and the manual or specification sheet will say. If yours is meant to heat and the washing stays cold, the element or its sensor needs checking.` },
      { q: `Why does my top loader leave lint or powder on the clothes?`, a: `A full lint filter, too much detergent or an overloaded tub that can't rinse properly are the usual reasons. Clean the lint filter as the manual describes, reduce the dose and wash slightly smaller loads. If the water drains slowly, the rinse water may not be clearing, and the pump or drain hose should be checked.` },
    ],
  },
  {
    slug: 'washer-dryer-repairs',
    name: 'Washer-dryer repairs',
    serviceType: 'Washer dryer repair',
    title: 'Washer Dryer Repairs at Home | ProServ',
    description:
      `Washer dryer repairs at home for combo machines that won't dry, heat, drain or spin. Quote before any work starts. Call or WhatsApp ${site.phone.display}.`,
    h1: 'Washer dryer repairs for combo machines',
    primaryKeyword: 'washer dryer repairs',
    summary: 'Drying heaters, fans, condensers and sensors, plus the washing faults, on combo machines.',
    image: { src: '/images/service-washer-dryer.webp', alt: 'Illustration of a washer dryer with warm air rising from the drum and a stack of folded towels', width: 960, height: 640 },
    intro: `<p>Washer dryer repairs at your home cover both halves of a combo machine: the drying side that won't heat or leaves clothes damp, and the washing side that won't drain, spin or unlock. The technician tests both and quotes before any work starts.</p>`,
    body: `
<h2>How a washer-dryer dries your washing</h2>
<p>A washer-dryer is a front loader with a drying system built into the same cabinet. That makes it a good fit for flats and townhouses with no room for a separate tumble dryer, but it also means extra parts: a drying heater, a fan, an air duct, a condenser, and the thermostats and sensors that control them.</p>
<p>After the final spin, the fan blows air across the drying heater and into the drum, where it picks up moisture from the clothes as they tumble. On most washer-dryers the damp air then passes through a condenser, where a trickle of cold water cools it so the moisture turns back into water and drains away through the pump. The drier air goes back over the heater and round again.</p>
<p>Thermostats and a thermal cut-out stop the heater overheating, and on sensor programmes, sensors in the drum or the air duct tell the control board when the washing is dry. Most machines finish with a cool-down, when the heater switches off and the drum keeps turning for a while.</p>

<h2>Drying faults, by symptom</h2>
<h3>The drum turns but the clothes stay cold and damp</h3>
<p>No heat usually means the drying heater has failed, or a thermostat or thermal cut-out has tripped or failed and cut the power to it. A fan that has stopped, or a fault in the part of the control board that switches the heater, gives a similar result. These are electrical parts that need testing by a technician.</p>
<h3>Clothes come out hot but still wet</h3>
<p>If there's heat but the moisture isn't leaving, the air isn't being dried. Lint packed into the air duct or condenser, condensing water that has stopped flowing, or a fan that runs slowly can all cause it.</p>
<h3>Drying takes far too long, or stops early</h3>
<p>An overloaded drum, a low spin speed before drying, or a mix of heavy cottons and light synthetics can make drying slow and uneven. If loads that used to dry well now take much longer, or the machine stops while the clothes are still damp, a dryness or temperature sensor may be reading wrongly.</p>
<h3>A hot or burning smell, or the power trips</h3>
<p>Lint that builds up near the heater can scorch, and a drying heater with an internal fault can trip the earth leakage the moment it comes on.</p>
<div class="callout callout-safety"><p><strong>Safety first:</strong> if a washer-dryer smells of burning, trips the power or feels hot on the outside of the cabinet, switch it off at the wall and unplug it, and don't use it again until a technician has checked it. Drying systems run hot, so please don't attempt any repair to the heating parts yourself.</p></div>

<h2>Why drying needs the tap and the drain</h2>
<p>Because most washer-dryers use cold water to condense the moisture out of the drying air, the drying side depends on the water supply as much as the washing side does. On many machines the condenser has its own outlet on the inlet valve, so a closed tap, a blocked inlet filter or a fault in that part of the valve can stop the condensing and leave the washing hot and damp.</p>
<p>The condenser water leaves through the drain pump, together with the moisture taken out of the clothes. A drain fault can therefore stop the drying as well as the wash, which is why a drying fault is always checked against the drain too.</p>

<h2>Drying programmes, explained</h2>
<p>Most washer-dryers offer two ways to dry. A sensor programme dries to the level you choose, such as cupboard dry or iron dry, and stops when the sensors say the washing has reached it. A timed programme simply runs for the time you set, which suits a few items or a load that needs a little longer.</p>
<p>Many machines also have a wash and dry programme that washes and dries a small load in one go, and a lower drying temperature for synthetics. Your manual gives the load size for each programme, and sticking to it is the easiest way to get dry clothes in a sensible time.</p>

<h2>Washing faults on a washer-dryer</h2>
<p>The washing side of a washer-dryer is a front loader, so it can develop the same faults as any other front loader: a <a href="/problems/washing-machine-not-draining/">machine that won't drain</a>, a <a href="/problems/washing-machine-door-wont-open/">door that won't open</a>, <a href="/problems/washing-machine-leaking/">leaks from the door seal or hoses</a>, worn bearings and, on machines with a brushed motor, worn carbon brushes. Our page on <a href="/services/front-loader-repairs/">front loader repairs</a> covers those faults in detail, and the technician can look at both sides of the machine on the same visit.</p>

<h2>What the technician checks</h2>
<p>A drying fault is traced step by step. The technician runs a short drying programme to see whether the heater warms up and the fan moves air, then checks that the condensing water flows and looks for lint in the duct and condenser. It helps to say how long a load takes to dry now compared with when the machine was newer, and whether the problem affects every load or only big ones.</p>
<p>With the machine switched off and unplugged, the heater, thermostats, cut-outs and sensors are tested, along with the pump and the wiring to the drying parts. You get a quote before any work starts, and the repair is proved with a drying run as well as a wash.</p>

<h2>Built-in washer-dryers</h2>
<p>An integrated washer-dryer sits in a kitchen housing behind a cabinet door. To repair it, the machine is disconnected, slid out of the housing and refitted afterwards, with the door alignment and the hoses checked so nothing is pinched on the way back in. That adds time to the visit, so mention it when you book.</p>

<h2>Getting good results from a washer-dryer</h2>
<ul class="checklist">
  <li>Dry no more than the drying capacity for your model, and split a full wash into two drying loads if you need to.</li>
  <li>Spin at the highest speed the fabrics allow before drying, so there's less water to remove.</li>
  <li>Dry heavy cottons and towels separately from light synthetics, which dry much faster.</li>
  <li>If your model has a lint filter, clean it after every drying programme as the manual describes.</li>
  <li>Follow the care labels, and never dry rubber-backed mats, foam items or anything stained with oil, petrol or solvents, which can be a fire risk.</li>
  <li>Keep the tap open during drying as well as washing, and leave the door open afterwards so the drum and seal can air, as long as no young child or pet can get to it.</li>
</ul>

<h2>Is a washer-dryer worth repairing?</h2>
<p>Usually, when the fault is a heater, thermostat, fan or sensor, because those are replaceable parts and the machine does two jobs. If the drying side fails on an older machine that also needs bearings or a control board, compare the total with the price of a new washer-dryer, or of a separate washing machine and tumble dryer if you have the space. Our <a href="/repair-or-replace/">repair or replace guide</a> can help you decide.</p>
<p>The call-out fee is ${f.calloutFee}, ${f.calloutCondition}. Repairs carry a ${f.warranty} warranty on parts and labour, and our guide to <a href="/washing-machine-repair-cost/">repair costs</a> explains how a price is put together.</p>

<h2>Washer-dryer brands we repair</h2>
<p>We repair washer-dryers from all major brands, including <a href="${brandUrl('lg')}">LG</a>, <a href="${brandUrl('samsung')}">Samsung</a>, <a href="${brandUrl('bosch')}">Bosch</a>, <a href="${brandUrl('siemens')}">Siemens</a>, <a href="${brandUrl('aeg')}">AEG</a> and <a href="${brandUrl('hisense')}">Hisense</a>, both freestanding and built in. Have the model number ready when you <a href="/contact/">book a washer dryer repair</a>: it's on a sticker around the door opening or on the back of the machine, and it tells the technician which drying parts your machine uses.</p>`,
    faqs: [
      { q: `Why are my clothes hot but still wet after drying?`, a: `The heater is working, but the moist air isn't being dried. A condenser or duct packed with lint, condensing water that isn't flowing, or a slow fan is the usual cause. A technician can find which one it is and clean or replace the part.` },
      { q: `Can I keep using the washing side if the dryer has stopped working?`, a: `In most cases, yes, as long as the machine isn't tripping the power or smelling of burning. If it does either, switch it off at the wall and leave it off until it has been checked.` },
      { q: `Why does my washer-dryer use water while it's drying?`, a: `That's normal on most washer-dryers. Cold water runs through the condenser to cool the damp air, so the moisture turns back into water and drains away with it. It's also why the tap needs to stay open for drying.` },
      { q: `How much washing can I dry in one go?`, a: `Check the drying capacity in your manual or on the machine's label, because on most models it's smaller than the washing capacity. Drying more than that leaves damp patches and makes the cycle much longer. After a full wash, take part of the load out and dry it in two batches.` },
      { q: `Why does my washer-dryer stop before the clothes are dry?`, a: `On sensor programmes the machine stops when it decides the load is dry, so a mixed load can fool it: light items dry first while heavy ones stay damp. Try drying similar fabrics together, or use a timed programme. If every load stops early, a sensor may be faulty.` },
      { q: `Is it safe to leave a washer-dryer drying while I'm out?`, a: `It's safest not to. Standard fire safety advice is not to leave a washing machine or tumble dryer running overnight or while you're out, and a washer-dryer is both. Keep the area around it clear, and switch it off at the wall if it ever smells of burning.` },
      { q: `Why is there lint on my clothes after drying?`, a: `Lint builds up in the duct and condenser over time and can be blown back onto the washing. Dry towels separately from dark clothes, and clean the lint filter if your model has one. If lint keeps appearing, the condenser and duct may need cleaning by a technician.` },
      { q: `Why does the drum keep turning after the drying time has run out?`, a: `That's usually the cool-down at the end of the programme. The heater switches off while the drum keeps tumbling, which cools the washing and cuts down creasing. If the machine never seems to finish the cool-down, or the door stays locked long after it, the sensors or the door lock may need checking.` },
    ],
  },
  {
    slug: 'washing-machine-installation',
    name: 'Installation and plumbing-in',
    serviceType: 'Washing machine installation',
    title: 'Washing Machine Installation & Plumbing | ProServ',
    description:
      `Washing machine installation for new or moved machines: transit bolts out, hoses and drain connected, levelled and tested. Call ${site.phone.display}.`,
    h1: 'Washing machine installation and plumbing-in',
    primaryKeyword: 'washing machine installation',
    summary: 'New or moved machines connected, levelled, transit bolts removed and tested.',
    image: { src: '/images/service-installation.webp', alt: 'Illustration of a washing machine connected to a wall tap and a drain pipe, with a spirit level on top', width: 960, height: 640 },
    intro: `<p>Washing machine installation done properly means the transit bolts are out, the water and drain connections suit the machine, it stands level and a test run proves it all works. That goes for new machines, second-hand ones and machines moving house with you.</p>`,
    body: `
<h2>What a proper installation involves</h2>
<p>Plumbing-in a washing machine means connecting it to a water tap and a drain point, and getting the rest of the set-up right around those connections. A careful installation runs in this order:</p>
<ol class="steps">
  <li><strong>Unpack and inspect.</strong> The machine is checked for transport damage, and the packing and accessories come out, including any hoses, caps and brackets packed inside the drum.</li>
  <li><strong>Remove the transit bolts.</strong> On a front loader, the bolts that lock the tub for delivery come out of the back panel, the holes are covered with the caps supplied, and the bolts are kept for the next move.</li>
  <li><strong>Connect the water.</strong> The inlet hose goes onto the washing machine tap with its rubber washer seated properly, is tightened firmly by hand and checked for drips.</li>
  <li><strong>Set up the drain.</strong> The drain hose goes into the standpipe or onto the sink trap at the height the manual gives, held in shape by its hose guide.</li>
  <li><strong>Level the machine.</strong> The feet are adjusted until the machine is level from side to side and front to back, then locked so they can't creep.</li>
  <li><strong>Test run.</strong> A short programme checks that the machine fills, drains and spins, with no leaks at the tap, the back of the machine or the drain.</li>
</ol>

<h2>Transit bolts: the step that matters most</h2>
<p>Transit bolts stop the tub swinging around inside the cabinet while the machine is carried and driven. A front loader has several, with their heads showing on the back panel, and the installation section of the manual shows exactly where they are.</p>
<p>Running a machine with them still fitted makes it shake violently on the first spin and can damage the bearings, the suspension and the tub. If a newly delivered machine is jumping around, switch it off and check the back panel before anything else. Top loaders have transit packing too, which can be bolts, brackets or foam in the base depending on the model, and the manual lists everything that has to come out before the first wash.</p>

<h2>Water connections: hot, cold and pressure</h2>
<p>Many front loaders have a single inlet and heat their own water, so they connect to the cold supply only. Machines with two inlets, more common on top loaders, take both hot and cold, and the inlets are usually marked or colour-coded. Hoses connected the wrong way round give you cold washes when you've chosen hot, or hot water on a cold programme.</p>
<p>Use the new hoses that come with the machine rather than the old ones, because rubber hoses and their washers perish with age. If the hot tap is a long way from the geyser, the first water to arrive can be cold, which matters on a machine that takes a short hot fill. Your manual also gives the water pressure range the machine needs, and a supply outside that range can cause slow filling or errors.</p>

<h2>Getting the drain right</h2>
<p>The drain hose usually goes into a standpipe in the wall or onto the spigot of the trap under a kitchen sink. Either way, it has to sit within the height range given in your manual: high enough to stop the machine siphoning, and low enough for the pump to lift the water out.</p>
<p>If the hose sits too low, or is pushed too far down the standpipe, water can run out as fast as it comes in. The machine then fills and drains at the same time, washes poorly and may show an error. The hose shouldn't be sealed tightly into the pipe either: a small air gap around it stops a siphon forming and lets the water fall away freely.</p>
<div class="callout callout-tip"><p><strong>Tip:</strong> a drain hose hooked loosely over the edge of a sink or bath can jump out when the pump pushes hard and flood the floor. If that's your only option for now, tie the hose securely so it can't slip.</p></div>

<h2>Levelling and where the machine stands</h2>
<p>A level machine is quieter, vibrates less and puts less strain on its suspension and bearings. On most machines the feet screw in and out, with a lock nut to hold them once they're set. When the machine is level, press down on opposite corners: it shouldn't rock at all.</p>
<p>Stand the machine on a solid, flat floor rather than carpet, loose tiles or a hollow wooden platform, which can flex and let it walk. If the floor slopes towards a floor drain, as many laundry floors do, the feet can take up a slight slope but not a steep one.</p>

<h2>Under a counter, stacked or built in</h2>
<p>Front loaders fit under a kitchen counter, provided there's enough height and a little space at the sides and back for the hoses, the cable and air. A top loader's lid opens upwards, so it needs open space overhead and can't stand under a counter.</p>
<p>A tumble dryer can usually go on top of a front loader using a stacking kit made for that pair, which stops the dryer moving during the spin. Don't stack a dryer on a top loader, or a washing machine on top of a dryer. Integrated machines are built into a kitchen unit behind a matching cabinet door, so the size of the unit and the hinge positions have to match the machine's installation instructions.</p>

<h2>The plug and the socket</h2>
<p>Plug the machine straight into a wall socket rather than an extension lead or multi-plug, and choose a socket you can reach without pulling the machine out, so switching off at the wall is easy. Keep the cable clear of the feet and away from anywhere it could be squashed behind the machine. If there's no suitable socket, adding one is a job for a registered electrician.</p>

<h2>No tap or drain point yet?</h2>
<p>An installation connects the machine to a washing machine tap and a drain point. If the spot you've chosen has neither, or they're out of reach of the hoses, describe the space when you book, and a photo helps. That way you know what the job involves before anyone comes out.</p>

<h2>Moving house with your washing machine</h2>
<ol class="steps">
  <li>Run a drain or spin programme to empty the machine, then switch off at the wall, unplug it and close the tap.</li>
  <li>Let out the last of the water through the pump filter as your manual describes, with towels and a shallow tray ready.</li>
  <li>Disconnect the inlet hose from the tap and unhook the drain hose, let both empty into a bucket, then secure them for the move.</li>
  <li>Refit the transit bolts on a front loader, following the manual. If you've lost them, replacements can be ordered using the model number.</li>
  <li>Move the machine upright and strap it in so it can't tip over, rather than laying it on its back or front. It's too heavy to lift safely on your own, so use two people or an appliance trolley.</li>
</ol>
<p>At the new home, the machine needs the same care as a new installation: transit bolts out, connected to the tap and drain, levelled and tested. The drain set-up in particular is often different from the old house, so it's worth checking rather than assuming.</p>

<h2>Problems after an installation</h2>
<p>If a newly installed or moved machine starts <a href="/problems/washing-machine-leaking/">leaking</a>, <a href="/problems/washing-machine-noisy-when-spinning/">shaking on the spin</a> or <a href="/problems/washing-machine-not-draining/">not draining</a>, check the installation first. Transit bolts, hose washers, the drain hose height and the levelling feet are the first things to look at.</p>
<p>Installation is quoted before any work starts, like every job, and you can <a href="/contact/">book a washing machine installation</a> by phone, WhatsApp or the contact form. The call-out fee is ${f.calloutFee}, ${f.calloutCondition}. If you're still choosing a machine, our <a href="/blog/front-loader-vs-top-loader/">front loader vs top loader guide</a> may help, while our <a href="/washing-machine-repair-cost/">cost guide</a> covers what goes into a price.</p>`,
    faqs: [
      { q: `Do I need a plumber to install a washing machine?`, a: `Not if there's already a washing machine tap and a drain point within reach of the hoses: connecting, levelling and testing the machine is the installation itself. Adding or moving a tap or drain is plumbing work, so describe the space when you book. A new plug point is a job for a registered electrician.` },
      { q: `What are transit bolts and do I have to remove them?`, a: `They're bolts through the back of a front loader that lock the tub in place for delivery. They must come out before the first wash, because running the machine with them fitted can badly damage it. Keep them somewhere safe for the next time the machine is moved.` },
      { q: `Can a washing machine and a dishwasher share a tap and drain?`, a: `Often, yes. A dual-outlet washing machine tap can feed both machines, and a sink trap with two connections can take both drain hoses. Whether it suits your kitchen depends on the layout and the drain, so check before you buy fittings.` },
      { q: `Can I reuse the hoses from my old machine?`, a: `It's better not to. Rubber hoses and their washers harden and crack with age, and a burst inlet hose can flood a room quickly. Use the new hoses supplied with the machine, which are made to fit it.` },
      { q: `Why does my new machine keep filling and draining at the same time?`, a: `That's usually siphoning: the drain hose is too low or pushed too far down the standpipe, so water runs out as it comes in. Check the hose against the height range in your manual and make sure it isn't sealed tightly into the pipe. If that doesn't cure it, the inlet valve or the pressure sensor may be at fault.` },
      { q: `Can a tumble dryer go on top of my washing machine?`, a: `On most front loaders, yes, using the stacking kit made for that washer and dryer pair. The kit holds the dryer in place during the spin. Never stack a dryer on a top loader, and always keep the washing machine at the bottom.` },
      { q: `Should I run an empty wash before the first load?`, a: `Many manuals recommend it, often on a hot cotton programme with the drum empty, and some say to add a little detergent. It clears out residue from manufacturing and any water left in the machine from factory testing. Follow your manual, and use the run to check the tap and drain connections for drips.` },
      { q: `Can my washing machine stand outside or in a garage?`, a: `In a garage or an enclosed outside laundry, usually yes, provided there's a level floor, a tap, a drain and a proper socket. Most manuals say the machine mustn't stand out in the weather or anywhere it could freeze, and a Highveld winter frost can freeze water left in the pump and hoses. Keep the plug and socket dry and out of the rain.` },
    ],
  },
  {
    slug: 'washing-machine-servicing',
    name: 'Servicing and maintenance',
    serviceType: 'Washing machine servicing',
    title: 'Washing Machine Servicing & Maintenance | ProServ',
    description:
      `Washing machine servicing that catches worn hoses, filters, seals, brushes and bearings early, with a full test run. Book on ${site.phone.display}.`,
    h1: 'Washing machine servicing and maintenance',
    primaryKeyword: 'washing machine servicing',
    summary: 'A full check of filters, hoses, seals, bearings and brushes to catch problems early.',
    image: { src: '/images/service-servicing.webp', alt: 'Illustration of a washing machine beside a service checklist and a toolbox', width: 960, height: 640 },
    intro: `<p>Washing machine servicing is a check-up for a machine that still works, so worn hoses, blocked filters, tired brushes and noisy bearings are found before they fail. The technician works through the machine at your home and quotes for any repair before doing it.</p>`,
    body: `
<h2>What a typical service checks</h2>
<p>A thorough service works through the machine from the water supply to the drain. On a typical visit, the technician:</p>
<ul class="checklist">
  <li><strong>Inspects the inlet hoses and tap connections</strong> for cracks, bulges and perished washers, and clears the inlet filters so the machine fills at full speed.</li>
  <li><strong>Cleans the detergent drawer and its housing</strong>, where residue and mould build up out of sight.</li>
  <li><strong>Checks the door seal</strong> on a front loader for splits, mould and trapped objects, or the lid, tub rim and lint filter on a top loader.</li>
  <li><strong>Checks the door lock, hinges and catch</strong> so the door closes and locks cleanly.</li>
  <li><strong>Turns and lifts the drum by hand</strong> to feel for the roughness or play that points to worn bearings.</li>
  <li><strong>Cleans the pump filter</strong> and checks the drain hose, its height and the standpipe.</li>
  <li><strong>Looks inside the cabinet</strong>, with the machine switched off and unplugged, at the internal hoses and clips, the belt, the shock absorbers and springs, the carbon brushes on brushed motors, and any sign of leaks, rust or heat damage to the wiring.</li>
  <li><strong>Re-levels the machine</strong> and tightens the lock nuts on the feet.</li>
  <li><strong>Runs a test cycle</strong> to check filling, heating, draining and a full-speed spin, listening for noise and watching for leaks.</li>
</ul>

<h2>Front loader, top loader or washer-dryer</h2>
<p>The core of a service is the same for every machine, but the focus shifts with the design. On a front loader, the door seal, the pump filter and the bearings get the closest look, because they take the most punishment from detergent residue, small objects and fast spins.</p>
<p>On a top loader, the suspension rods, the lid switch and the drive get extra attention, along with the lint filter in the basket if your model has one. On a washer-dryer, the drying side is checked as well: the condenser and air duct for lint, the condensing water, and a short drying run to confirm the heater and fan are working. If the drying has already started to fail, see <a href="/services/washer-dryer-repairs/">washer dryer repairs</a>.</p>

<h2>What you get at the end</h2>
<p>A service ends with a plain-language rundown of the machine's condition: what's fine, what's wearing, and what's likely to need attention in the months ahead. If something is close to failing, the technician shows you and quotes for the repair, and you decide whether to go ahead then, later or not at all.</p>
<p>Wear parts found on a service are often simpler to deal with before they fail. A carbon brush that's nearly worn down is an easier job than a motor damaged by a brush that wore right through, and a split door seal is better caught before it has spent weeks leaking into the base. Our <a href="/services/washing-machine-parts-replacement/">washing machine parts replacement</a> page explains each part.</p>

<h2>How often to service a washing machine</h2>
<p>For most households, a service about once a year is plenty. A machine that runs more than one load a day, handles work clothes, pet bedding or sports kit, or serves a guesthouse or Airbnb benefits from a check every six months or so.</p>
<p>A service is also worth booking when you move into a home with a machine already in it, between tenants in a rental, or when you've bought a second-hand machine and want to know its condition.</p>

<h2>Servicing a second-hand machine</h2>
<p>A second-hand machine can be good value, but you rarely know how it was used or moved. A service shows what you've bought: whether the bearings have play, whether the door seal and hoses are sound, whether the brushes have much life left, and whether the pump filter is packed with someone else's coins and hair clips.</p>
<p>It also shows whether the machine survived the move. A front loader carried without its transit bolts can arrive with damaged suspension, and that shows up on the test spin. If the check finds a major fault, you'll know before you've spent money on smaller repairs.</p>

<h2>Signs it's due for a check</h2>
<ul>
  <li>Cycles take longer than they used to, or stall on the same step.</li>
  <li>The machine smells musty even after cleaning.</li>
  <li>Water is slow to drain, or a little is left in the drum.</li>
  <li>Clothes come out with detergent marks or lint on them.</li>
  <li>The spin is louder, or the machine moves more than it used to.</li>
  <li>There are drips or damp patches under or behind the machine.</li>
  <li>It fills slowly even though your water pressure is normal.</li>
</ul>
<p>If the machine has stopped working, <a href="/problems/washing-machine-showing-error-code/">shows an error code</a> or <a href="/problems/washing-machine-leaking/">leaks steadily</a>, it needs a repair rather than a service, so start with our list of <a href="/problems/">common washing machine problems</a>. If it trips the power, switch it off at the wall and leave it off until a technician has checked it.</p>

<h2>Hoses: small parts, big floods</h2>
<p>The inlet hose holds water at mains pressure all day, every day, even when the machine is switched off. Rubber hoses stiffen and split as they age, and a hose that bursts while nobody is home can flood a kitchen or laundry and the rooms next to it.</p>
<p>That's why hoses get a careful look on every service, at both ends and along their length. A hose with bulges, cracks, stiff or faded rubber or rusty fittings is worth replacing before it fails. Some machines come with a safety inlet hose that shuts off the water if it detects a leak, but even those need checking. Turning the tap off when you go away for a few days is a good habit too.</p>

<h2>Looking after the machine between services</h2>
<table>
  <thead><tr><th>How often</th><th>What to do</th></tr></thead>
  <tbody>
    <tr><td>Every wash</td><td>Check pockets before loading, take the washing out promptly, and leave the door and detergent drawer slightly open so the inside can dry (close the laundry door if small children or pets are about).</td></tr>
    <tr><td>Weekly</td><td>Wipe out the door seal folds and the inside of the glass.</td></tr>
    <tr><td>Monthly</td><td>Run an empty hot maintenance or drum-clean programme, and rinse out the detergent drawer.</td></tr>
    <tr><td>Every few months</td><td>Clean the pump filter as the manual describes. Switch off at the wall and unplug first, and have towels and a tray ready for the water.</td></tr>
    <tr><td>Twice a year</td><td>Look at the hoses behind the machine for bulges or cracks, and check that the machine still stands level without rocking.</td></tr>
  </tbody>
</table>
<p>Using the right amount of detergent matters as much as any of these: more doesn't clean better, and the excess leaves residue that feeds smells. Our blog post on <a href="/blog/why-does-my-washing-machine-smell/">why washing machines smell</a> goes into detail, and our guide to <a href="/blog/protect-washing-machine-from-load-shedding/">protecting a washing machine from load shedding</a> covers power surges.</p>

<h2>Servicing for landlords, guesthouses and Airbnbs</h2>
<p>Machines in rentals and guest accommodation get heavy use from people who don't always treat them gently, so overloading, too much detergent and objects left in pockets take their toll faster. A regular service keeps them running between guests, and a check between tenants shows whether anything needs sorting out before the next one moves in. If there are several machines at one address, say so when you book so the visit can be planned around them.</p>

<h2>Booking a service</h2>
<p>A service is quoted before work starts, like every job, and any parts it turns up are quoted separately and only fitted if you agree. The call-out fee is ${f.calloutFee}, ${f.calloutCondition}. You can <a href="/contact/">book a washing machine service</a> with a call, a WhatsApp message or the contact form. If the service turns up a repair, our <a href="/washing-machine-repair-cost/">washing machine repair cost</a> page sets out what goes into its price.</p>`,
    faqs: [
      { q: `Is servicing worth it on a new machine?`, a: `In the first year or two, your own routine of cleaning the filter, drawer and door seal covers most of what a new machine needs. A professional service becomes more useful as the rubber parts, brushes and bearings start to wear. If a machine still under the manufacturer's warranty develops a fault, contact the manufacturer first.` },
      { q: `How long does a service take?`, a: `It depends on the machine and what turns up, but a good part of the time goes on the test cycle, which takes the machine through a fill, heat, drain and spin. A washer-dryer takes longer, because the drying side is tested too, and so does an integrated machine, which has to be pulled out of its kitchen unit first.` },
      { q: `Which maintenance jobs can I do myself?`, a: `You can safely clean the pump filter and the inlet filter as the manual describes, clean the detergent drawer and door seal, check the hoses from the outside and keep the machine level. Anything behind a panel, from brushes and belts to the wiring and the heater, is work for a technician. Always switch off at the wall and unplug before cleaning a filter, and have towels and a tray ready for the water.` },
      { q: `What's the difference between a service and a repair?`, a: `A service is a check and clean of a machine that is still working, aimed at catching wear early. A repair fixes a fault that has already appeared. If your machine has stopped, leaks or shows a code, book a repair instead.` },
      { q: `Will a service stop my machine breaking down?`, a: `It lowers the risk but can't remove it. A service catches wear on hoses, seals, brushes, filters and bearings, but electronic parts can fail without warning, especially after a power surge. That's why surge protection and switching off at the wall during power cuts are worth doing as well.` },
      { q: `Does a service clean the inside of the drum?`, a: `A service cleans the parts that collect the most residue, like the filter, the drawer and the door seal, and a hot empty programme helps with the drum and tub. Heavy build-up between the drum and the outer tub sometimes needs the machine stripped down, which is a bigger job that would be quoted separately.` },
      { q: `Can a service fix a smelly washing machine?`, a: `Often, because most smells come from residue in the door seal, detergent drawer and pump filter, which a service cleans. If the smell is more like drains, the drain set-up may be letting smells back up the hose, so that is checked as well.` },
      { q: `Is a service worth it on an older machine?`, a: `Yes, if the machine is otherwise sound, because an older machine has more parts near the end of their life. A service shows whether it's good for a few more years with a part or two replaced, or whether a major fault is on the way. That makes the decision to repair or replace easier before anything breaks.` },
    ],
  },
  {
    slug: 'washing-machine-parts-replacement',
    name: 'Parts replacement',
    serviceType: 'Washing machine parts replacement',
    title: 'Washing Machine Parts Replacement | ProServ',
    description:
      `Washing machine parts replacement at home: pumps, motors, bearings, door seals, boards and heaters fitted and tested. Call ${site.phone.display}.`,
    h1: 'Washing machine parts replacement',
    primaryKeyword: 'washing machine parts replacement',
    summary: 'Pumps, motors, bearings, door seals, boards, heating elements and more, fitted at your home.',
    image: { src: '/images/service-parts.webp', alt: 'Illustration of washing machine parts: a drain pump, a door seal, a drum bearing, a control board and carbon brushes', width: 960, height: 640 },
    intro: `<p>Washing machine parts replacement is how most faults are fixed: confirm which part has failed, fit the right one for your model and test the machine properly. Below are the parts that commonly wear or fail, the signs of trouble and what replacing each one involves.</p>`,
    body: `
<h2>Diagnosis comes first</h2>
<p>Many faults look alike from the outside: a machine that won't spin could have worn brushes, a broken belt, a faulty speed sensor or a motor fault. Fitting the wrong part costs money without fixing anything, so parts are tested first and matched to the exact model number, because parts that look the same can differ between models of one brand. Have that number ready when you <a href="/contact/">book a parts replacement</a>.</p>
<div class="callout callout-safety"><p><strong>Safety first:</strong> most of these parts sit inside the cabinet, next to mains wiring and water, so please don't try to fit them yourself. Switch off at the wall and leave the work to a technician.</p></div>

<h2>Drainage and water parts</h2>
<h3>Drain pump and filter</h3>
<p><strong>What it does:</strong> pumps the water out before each spin, through a filter (sometimes called the coin trap) that catches coins, buttons and hair clips. On most front loaders the filter sits behind a flap at the bottom front, with the pump right behind it.</p>
<p><strong>Signs it has failed:</strong> water left in the drum, a drain error, or a hum or grinding with no water moving.</p>
<p><strong>What replacing it involves:</strong> the machine is drained, the pump is reached from the front, base or back, and the hoses and wiring are moved across. Sometimes a coin or an underwire is jamming it, and clearing it is enough. Related: <a href="/problems/washing-machine-not-draining/">a machine that won't drain</a>.</p>
<h3>Inlet valve</h3>
<p><strong>What it does:</strong> an electric valve where the hose meets the machine, opening to let water in when the control board calls for it. Many have two or three outlets feeding different parts of the detergent drawer.</p>
<p><strong>Signs it has failed:</strong> no fill or a slow fill, a water supply error, detergent left in one compartment, or water trickling in with the machine off. If that happens, close the tap.</p>
<p><strong>What replacing it involves:</strong> on most front loaders the top panel comes off, the hoses and connectors are moved to the new valve, and the joints are checked for leaks. Related: <a href="/problems/washing-machine-not-filling-with-water/">washing machine not filling with water</a>.</p>

<h2>Drive and drum parts</h2>
<h3>Motor and carbon brushes</h3>
<p><strong>What they do:</strong> the motor turns the drum. Many machines use a brushed motor, fed by two spring-loaded carbon brushes that wear down a little with every wash. Others use a brushless inverter motor, on a belt or mounted directly on the drum shaft, and many older designs and top loaders use an induction motor.</p>
<p><strong>Signs of failure:</strong> the drum turns slowly, jerks or won't reach spin speed, there's a burning smell or sparking, or the power trips when the motor starts.</p>
<p><strong>What replacing them involves:</strong> worn brushes are replaced as a pair, and the commutator they run on is checked for wear. A motor is only condemned once testing has ruled out the brushes, belt and speed sensor, then it's unbolted, replaced and run at full spin. Related: <a href="/problems/washing-machine-not-spinning/">washing machine not spinning</a>.</p>
<h3>Drive belt</h3>
<p><strong>What it does:</strong> on a belt drive machine, carries the motor's power to the pulley on the drum or, on many top loaders, to the gearbox or clutch.</p>
<p><strong>Signs it has failed:</strong> the drum or agitator won't turn although the motor runs, the drum slips under load, a squeal or a smell of hot rubber, or a belt lying off its pulley.</p>
<p><strong>What replacing it involves:</strong> a quick job once the back or base panel is off. A belt that keeps coming off points to a loose pulley, a shifted motor or worn bearings letting the drum drop, so those are checked first.</p>
<h3>Drum bearings and shaft seal</h3>
<p><strong>What they do:</strong> two bearings at the back of the outer tub carry the drum shaft and the weight of the wet washing, and a shaft seal stops water reaching them.</p>
<p><strong>Signs they have failed:</strong> a rumble on the spin that grows into a roar, a drum that feels rough or has play, or drips under the middle of the machine. See <a href="/blog/signs-washing-machine-bearings-are-worn/">signs of worn washing machine bearings</a>.</p>
<p><strong>What replacing them involves:</strong> the biggest routine repair. The machine is dismantled down to the tub, the tub halves are separated, new bearings and a seal are pressed in, and the shaft and drum spider are checked for corrosion. On a welded tub, the whole tub and drum assembly is replaced instead.</p>
<h3>Shock absorbers and suspension</h3>
<p><strong>What they do:</strong> on a front loader, springs hold the tub from above and shock absorbers damp it from below. Many top loaders hang the tub on suspension rods.</p>
<p><strong>Signs they have failed:</strong> banging on the spin, a machine that walks, a tub that bounces freely when pushed, or unbalanced errors with ordinary loads.</p>
<p><strong>What replacing them involves:</strong> the old units are unclipped or unbolted top and bottom and new ones fitted, with the counterweight bolts checked at the same time. Related: <a href="/problems/washing-machine-noisy-when-spinning/">washing machine noisy when spinning</a>.</p>

<h2>Door parts</h2>
<h3>Door seal</h3>
<p><strong>What it does:</strong> the rubber gasket that joins the front of the cabinet to the mouth of the tub on a front loader, keeping the water in while the tub moves.</p>
<p><strong>Signs it has failed:</strong> water at the front during the wash, splits or holes (often low down), hardened rubber, or mould that won't wipe away.</p>
<p><strong>What replacing it involves:</strong> the seal is held by one clamping band at the cabinet front and another around the tub, and some models need the front panel off. The new seal is lined up by its alignment marks, with its drain holes at the bottom, and tested for leaks. Related: <a href="/problems/washing-machine-leaking/">washing machine leaking</a>.</p>
<h3>Door lock</h3>
<p><strong>What it does:</strong> locks the door during the wash and tells the control board it's shut, so the machine can start.</p>
<p><strong>Signs it has failed:</strong> the machine clicks but won't start, the door stays locked after the cycle, a door error appears, or the wash stops part-way.</p>
<p><strong>What replacing it involves:</strong> on many front loaders, the outer band of the door seal is eased off to reach the lock. The new lock is tested, and the catch, handle and hinges are checked too. Related: <a href="/problems/washing-machine-door-wont-open/">washing machine door won't open</a>.</p>

<h2>Electronic and heating parts</h2>
<h3>Control board (PCB)</h3>
<p><strong>What it does:</strong> runs the programmes and switches the motor, pump, valves and heater, often with a separate display board at the front.</p>
<p><strong>Signs it has failed:</strong> a dead or unresponsive machine, programmes that stop or skip steps, random codes, or parts that won't switch on although they test fine. Faults often follow a surge when the power comes back after an outage.</p>
<p><strong>What replacing it involves:</strong> the board is the last part to blame, so the parts it controls, the wiring and the mains filter are tested first. Boards are specific to the model, and some have to be set up for the machine once fitted. Related: <a href="/problems/washing-machine-wont-turn-on/">washing machine won't turn on</a>.</p>
<h3>Heating element</h3>
<p><strong>What it does:</strong> heats the water in the bottom of a front loader's tub, with a temperature sensor reporting to the board. Many top loaders have none and use hot water from the geyser.</p>
<p><strong>Signs it has failed:</strong> cold washes, a cycle that stalls while heating, a heating error, or the earth leakage tripping when the heat comes on.</p>
<p><strong>What replacing it involves:</strong> the element is drawn out of its seal in the tub through the front or back panel, replaced and tested for leakage to earth. It's technician work only, so if the machine trips the power, leave it switched off at the wall.</p>

<h2>Other parts we replace</h2>
<ul>
  <li><strong>Lid switches and lid locks</strong> on <a href="/services/top-loader-repairs/">top loaders</a>, when the machine won't spin with the lid shut and the tub empty.</li>
  <li><strong>Detergent drawers</strong> and softener siphon caps, when powder or softener is left behind.</li>
  <li><strong>Pressure, temperature and speed sensors</strong>, whose faults can look like a board or motor problem and often show as an <a href="/problems/washing-machine-showing-error-code/">error code</a>.</li>
  <li><strong>Couplings, clutches and gearboxes</strong> on top loaders, when the motor runs but the agitator or drum doesn't turn.</li>
  <li><strong>Inlet, drain and internal sump hoses</strong>, when one has split, perished or blocked.</li>
  <li><strong>Door handles, hinges, catches and door glass</strong>, when the door won't close or latch properly, or the glass is cracked.</li>
  <li><strong>Drum paddles and drum spiders</strong>, when a paddle has come loose or the spider that carries the drum has cracked or corroded.</li>
  <li><strong>Mains filters</strong>, where the power cable enters the machine, when a surge has left the machine dead.</li>
  <li><strong>Drying heaters, fans and thermostats</strong> on <a href="/services/washer-dryer-repairs/">washer-dryers</a>, when the machine washes but won't dry.</li>
</ul>

<h2>Original and compatible parts</h2>
<p>Original parts, also called genuine or OEM parts, are made by or for the manufacturer and carry its part number. Compatible parts, also called pattern parts, are made by other companies to fit the same machines, and their quality varies: some match the original and some don't.</p>
<p>For simple wear parts such as drain pumps, belts, carbon brushes and shock absorbers, a good compatible part is often a sensible choice. For control boards, and for safety parts like door locks, an exact match matters more, and the original is often the safer option. Either way, the part has to match the model number, not just the brand.</p>
<p>If your machine is still under the manufacturer's warranty, contact the manufacturer first, because an outside repair or a non-original part may affect that cover. When you get a quote, it's fair to ask which kind of part is quoted, whether the other kind is available, and how the two compare.</p>

<h2>Availability, cost and warranty</h2>
<p>If the part is available, most repairs are finished on the same visit. If it has to be ordered, the technician tells you before you agree to the repair, and it's fitted and tested on a second visit.</p>
<p>The price depends mostly on the part, from a pair of brushes to a control board or a tub assembly, and on the labour needed to reach it. The call-out fee is ${f.calloutFee}, ${f.calloutCondition}. Every repair carries a ${f.warranty} warranty on parts and labour. The <a href="/washing-machine-repair-cost/">page on repair costs</a> explains pricing, and our <a href="/repair-or-replace/">repair or replace guide</a> helps when a major part fails on an older machine.</p>`,
    faqs: [
      { q: `Should I buy the part myself before the technician comes?`, a: `It's usually better not to. The same symptom can have several causes, and parts that look identical often differ between models, so a part bought before diagnosis may not be the one the machine needs. Let the fault be confirmed first.` },
      { q: `Which washing machine parts wear out with normal use?`, a: `Parts that move, rub or flex wear gradually: carbon brushes, belts, shock absorbers, door seals, hoses and drum bearings all wear with use. Pumps more often fail because something gets into them, while electronic parts tend to fail suddenly, often after a surge.` },
      { q: `How do I find my washing machine's model number?`, a: `Look for a sticker or plate around the door opening on a front loader, under the lid on a top loader, or on the back of the machine. The model number is usually labelled separately from the serial number. Sending a photo of the whole sticker when you book is the easiest way to share it.` },
      { q: `Why are shock absorbers replaced in pairs?`, a: `Shock absorbers share the work of steadying the tub, so if only one is new, the old ones do less than their share and the tub can still move too much. Replacing them together, as a pair or as a full set on machines that have three or four, keeps the damping even and the spin steady.` },
      { q: `Is it worth replacing a control board on an older machine?`, a: `It depends on the price of the board and the overall condition of the machine. Boards for some models cost a large share of a new machine, so on an older machine that's also showing other wear, replacing the machine may make more sense. The technician confirms the board really is at fault and gives you a price before you decide.` },
      { q: `Why replace a door seal that only has a small hole?`, a: `Even a small hole lets water out every time the drum turns and the tub moves, and the leak runs into the base of the machine, towards the pump, the wiring and your floor. Holes also tend to grow as the rubber flexes.` },
    ],
  },
];

export const serviceBySlug = (slug: string) => services.find((s) => s.slug === slug);
export const serviceUrl = (slug: string) => `/services/${slug}/`;
