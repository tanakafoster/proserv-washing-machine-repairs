import type { ContentPage } from './types';
import { site, brandUrl, errorCodeUrl } from './site';

const f = site.facts;

export interface Problem extends ContentPage {
  /** Matching service page slug (problem → service internal link). */
  serviceSlug: string;
}

export const problems: Problem[] = [
  {
    slug: 'washing-machine-not-draining',
    name: 'Not draining',
    serviceSlug: 'washing-machine-parts-replacement',
    title: 'Washing Machine Not Draining? Causes & Fix | ProServ',
    description: `Washing machine not draining? The usual causes, the safe checks to try first and when to call a technician. Call ProServ on ${site.phone.display}.`,
    h1: 'Washing machine not draining',
    primaryKeyword: 'washing machine not draining',
    summary: 'Water left in the drum, or a cycle that stops before the spin.',
    intro: `<p>A washing machine not draining usually has a blockage between the drum and your drain: a clogged pump filter, a kinked or blocked hose, or a blocked standpipe. If those are clear, the drain pump itself may have failed. Start with the safe checks below.</p>`,
    body: `
<h2>How your machine gets rid of water</h2>
<p>At the end of each wash, and before every spin, the control board switches on the drain pump. The pump draws water from the bottom of the tub through a filter, sometimes called the coin trap, and pushes it up the drain hose into your standpipe or sink trap. A pressure sensor tells the board when the tub is empty.</p>
<p>The board gives the pump a set time to do this. If the water hasn't gone by then, most machines stop the programme. Depending on the model, you'll see a drain code, a flashing light or a door that stays locked, with water still in the drum.</p>

<h2>Signs the drain is the problem</h2>
<ul>
  <li>Grey water standing in the drum when the programme ends or stops.</li>
  <li>The cycle stops before the spin, or the washing comes out dripping.</li>
  <li>Water goes down much more slowly than usual, or the machine gurgles as it drains.</li>
  <li>A hum or buzz from the bottom of the machine with no sound of water moving.</li>
  <li>A drain code on the display, such as <a href="${errorCodeUrl('lg')}">LG OE</a>, <a href="${errorCodeUrl('samsung')}">Samsung 5C</a> or <a href="${errorCodeUrl('bosch')}">Bosch E18</a>.</li>
  <li>A stale, swampy smell from water left sitting in the filter and sump.</li>
</ul>

<h2>Likely causes, most common first</h2>
<h3>A clogged pump filter</h3>
<p>Most front loaders have a filter behind a small flap at the bottom front. It catches lint, hair, coins, hair clips, buttons and the odd baby sock before they reach the pump, and once it's packed, water can't get past. It's the first thing to check on any front loader that won't drain.</p>
<p>Top loaders vary. Some have a filter at the bottom front like a front loader, some have a lint filter inside the drum, and some have none you can reach. Your manual shows which kind you have.</p>
<h3>A kinked, squashed or clogged drain hose</h3>
<p>Pushing the machine back against the wall can fold the drain hose flat behind it. Hoses also narrow over the years as lint and detergent sludge build up inside, especially at the end that joins the sink trap. A hose that's higher or longer than the manual allows makes the pump work harder too.</p>
<h3>A blocked standpipe, sink trap or household drain</h3>
<p>Sometimes the machine is pumping perfectly and the water simply has nowhere to go. If the sink next to the machine drains slowly, or grey water comes back up the standpipe, the blockage is in the plumbing. Some sink traps are sold with the washing machine spigot sealed, to be cut open when the hose is fitted, so a brand-new connection may still be closed.</p>
<h3>A jammed or failed drain pump</h3>
<p>A coin or hair clip that slips past the filter can jam the pump's impeller or snap its blades, and pumps also wear out with age. A pump that hums without moving water is usually jammed or has a broken impeller. One that makes no sound at all may have failed or may not be getting power from the board, and telling those apart takes electrical testing.</p>
<h3>Faults out of sight</h3>
<p>Less often, the blockage is inside the machine, such as a sock lodged in the sump hose between the tub and the pump. The water level sensor or its thin pressure hose can also fail, so the machine doesn't realise water is still inside. On top loaders, a faulty lid switch can stop the cycle before the final spin and leave the washing soaking. All of these need a technician.</p>

<h2>Safe checks before you call</h2>
<div class="callout callout-safety"><p><strong>Safety first:</strong> switch the machine off at the wall and unplug it before you touch the hose or the filter. If the last wash was hot, let the water cool first. Do only what your manual describes, never open panels or test anything electrical, and stop straight away if anything trips the power.</p></div>
<ol class="steps">
  <li><strong>Check the programme.</strong> Make sure the cycle has really finished and that no "rinse hold" option is selected, because it leaves the rinse water in the drum on purpose.</li>
  <li><strong>Look behind the machine.</strong> Check that the drain hose isn't kinked, crushed or pushed too far down the standpipe. If you have to ease the machine forward to see it, empty it through the pump filter first (step 4), then slide it gently without pulling on the hoses or the cable.</li>
  <li><strong>Test your drain.</strong> Run the tap in the sink next to the machine for a minute. If it drains slowly or water backs up the standpipe, a plumber needs to clear the blockage.</li>
  <li><strong>Clean the pump filter as your manual describes.</strong> Lay down towels and a shallow tray, and expect more water than the tray can hold. If there's a small emergency drain hose beside the filter, empty the machine through that first. Then unscrew the filter slowly, clear out the lint and any objects, and refit it straight and hand-tight.</li>
  <li><strong>Run a drain or spin programme.</strong> Plug in, switch on and watch the filter flap for drips. If the water goes, you've found the problem.</li>
  <li><strong>Write down any code.</strong> Note or photograph what the display shows. It saves time when you book.</li>
</ol>

<h2>When to stop and call a technician</h2>
<ul>
  <li>The filter and hose are clear and the machine still won't drain.</li>
  <li>The pump hums, buzzes or stays silent when it should be draining.</li>
  <li>The filter cap won't turn, or your model has no filter you can reach.</li>
  <li>There's a burning smell, or water is leaking from under the machine.</li>
  <li>The earth leakage or a breaker trips when the machine runs. Leave it unplugged, because that can mean a dangerous fault.</li>
  <li>The door is locked with water inside. Don't force it: a broken handle or lock adds to the repair.</li>
</ul>

<h2>What the technician checks and fixes</h2>
<p>The technician starts by draining the machine safely. Then they work along the drain path: the filter housing, the sump hose, the pump and its impeller, the drain hose and your standpipe. They test whether the pump is getting power from the board and whether its motor runs, and check the water level sensor and its pressure hose.</p>
<ul>
  <li><strong>Blockage:</strong> cleared, then proved with a test drain and spin.</li>
  <li><strong>Jammed or worn pump:</strong> cleared or replaced, one of the routine <a href="/services/washing-machine-parts-replacement/">washing machine parts replacements</a>.</li>
  <li><strong>Hose set-up:</strong> rerouted to the right height, or a damaged hose replaced. If the trouble started after a move, our <a href="/services/washing-machine-installation/">washing machine installation</a> service sets it up properly.</li>
  <li><strong>Sensor or control fault:</strong> tested, then repaired or replaced once you've accepted the quote.</li>
</ul>
<p>We fix drain faults on all major brands, including <a href="${brandUrl('defy')}">Defy</a>, <a href="${brandUrl('hisense')}">Hisense</a> and <a href="${brandUrl('whirlpool')}">Whirlpool</a>.</p>

<h2>How long a drain repair takes</h2>
<p>Clearing a blocked filter or hose is usually quick once the water is out. A new pump is normally fitted on the same visit when the part is available; if it has to be ordered, the technician tells you before you agree to the repair. The price depends on whether a part is needed and on your machine's brand and model, and our guide to <a href="/washing-machine-repair-cost/">what affects repair prices</a> explains the rest.</p>

<h2>How to stop it happening again</h2>
<ul class="checklist">
  <li>Empty pockets before every wash: coins, hair clips and paper tissues are common causes of a blocked filter.</li>
  <li>Wash underwired bras, baby socks and other small items in a mesh laundry bag.</li>
  <li>Clean the pump filter every few months, or as often as your manual suggests, and more often if you wash work clothes, pet bedding or sandy towels.</li>
  <li>Use the detergent dose on the pack for your load size. Too much leaves sludge in the hose and sump.</li>
  <li>Run a hot maintenance wash with the drum empty once a month. Our guide to <a href="/blog/why-does-my-washing-machine-smell/">why your washing machine smells</a> explains why it helps.</li>
</ul>

<h2>Book a drain repair</h2>
<p>Water that won't drain often brings other symptoms with it. A machine won't spin with water inside, so see <a href="/problems/washing-machine-not-spinning/">washing machine not spinning</a> if your washing is soaking. Most front loaders also keep the door locked until the water has gone, which our guide to a <a href="/problems/washing-machine-door-wont-open/">washing machine door that won't open</a> covers.</p>
<p>If it still won't drain after the checks, call or WhatsApp us, or <a href="/contact/">book a technician online</a>. They'll find the cause at your home and quote before any work starts.</p>`,
    faqs: [
      { q: `Can I keep using my washing machine if it isn't draining?`, a: `Not until the cause is fixed. Every new cycle adds water to a machine that can't get rid of it, works a struggling pump harder and risks a flooded floor. Switch it off at the wall and leave it until the water can be drained safely.` },
      { q: `How do I get the water out before the technician arrives?`, a: `Switch off at the wall and unplug first. On most front loaders the water comes out through the pump filter, or a small emergency drain hose beside it, as your manual describes, so lay down towels and a shallow tray. On a top loader you can scoop most of it into a bucket with a jug, or simply leave it for the technician, who drains the machine before starting work.` },
      { q: `Why does my machine drain slowly but eventually empty?`, a: `A partly blocked filter, a hose narrowed by lint and sludge, or a slow household drain are the usual reasons. A worn pump that has lost some of its strength can do it too. Clean the filter and test the sink first, and if it's still slow, have the pump checked before it fails completely.` },
      { q: `Is it normal to find water when I open the pump filter?`, a: `Yes. Some water always sits in the filter housing and the bottom of the tub, so expect some to run out even when the machine drained properly. It's only a problem if the drum itself still holds water after the programme ends.` },
      { q: `Can a blocked kitchen sink stop my washing machine draining?`, a: `Yes, if the machine drains into the sink trap or into a standpipe on the same pipe. The machine pumps normally, but the water backs up or drains so slowly that the programme times out. If the sink is slow too, a plumber clearing the drain is the fix, not a washing machine repair.` },
      { q: `My machine stopped draining after it was moved. Why?`, a: `The drain hose is the first suspect: it may be kinked behind the machine, pushed too far into the standpipe, or sitting higher than the manual allows. A new sink connection that was never opened has the same effect. Our <a href="/services/washing-machine-installation/">installation service</a> can set the hose and drain up correctly.` },
      { q: `What does it mean if the machine hums but no water moves?`, a: `The pump is being switched on but can't turn freely or move the water. Usually something is jammed in it or the impeller has broken, and occasionally the pump motor has failed. Switch off at the wall, unplug and clean the filter first, with towels and a tray ready, and if the hum continues, leave the machine off and have the pump tested.` },
      { q: `Is a drain repair expensive?`, a: `Not usually. Clearing a blockage is mostly labour, while a new pump adds the cost of the part, which varies by brand and model. You get a quote before any work starts, and the call-out fee is ${f.calloutFee}, ${f.calloutCondition}.` },
    ],
  },
  {
    slug: 'washing-machine-not-spinning',
    name: 'Not spinning',
    serviceSlug: 'front-loader-repairs',
    title: 'Washing Machine Not Spinning? Likely Causes | ProServ',
    description: `Washing machine not spinning, or washing still soaking wet? Find the likely cause, try the safe checks, then call ${site.phone.display} for a technician.`,
    h1: 'Washing machine not spinning',
    primaryKeyword: 'washing machine not spinning',
    summary: 'Clothes come out soaking wet, or the drum won\'t turn at all.',
    intro: `<p>A washing machine not spinning is often protecting itself: the load is out of balance, the water hasn't drained, or the door or lid isn't confirmed locked. If those are fine, worn carbon brushes, a broken belt or a motor fault are next. Here's how to narrow it down.</p>`,
    body: `
<h2>Why a machine refuses to spin</h2>
<p>Before a fast spin, a modern machine runs a short series of checks. The tub must be empty of water, the door or lid must be locked, and the load must be spread evenly enough that the drum won't thrash about at high speed.</p>
<p>To judge the balance, the machine tumbles the load slowly and measures how evenly the drum turns. If it's lopsided, the machine redistributes the washing and tries again, then spins at a lower speed or gives up. The job is to find out which check it's failing, or which drive part has worn out.</p>

<h2>Match the symptom to the cause</h2>
<table>
  <thead><tr><th>What you notice</th><th>What it usually points to</th></tr></thead>
  <tbody>
    <tr><td>Washes normally, but the final spin is slow, short or skipped</td><td>An unbalanced load, too many suds, or a programme with little or no spin</td></tr>
    <tr><td>Water left in the drum at the end</td><td>A drain problem: the machine won't spin until the water has gone</td></tr>
    <tr><td>Stops before the spin with the door symbol flashing</td><td>The door lock or lid switch isn't confirming</td></tr>
    <tr><td>Motor hums or runs, but the drum stays still</td><td>A snapped or slipped drive belt, or a worn coupling or clutch on a top loader</td></tr>
    <tr><td>Drum turns weakly or jerks, with a burning smell</td><td>Worn carbon brushes or a motor fault</td></tr>
    <tr><td>Nothing turns and there's no hum at all</td><td>The motor, its speed sensor, the wiring or the control board</td></tr>
  </tbody>
</table>

<h2>Likely causes in more detail</h2>
<h3>An unbalanced load</h3>
<p>This is the most common reason, and the easiest to fix. One heavy item on its own, such as a bath mat, a pair of jeans or a single duvet, ends up on one side of the drum and the machine can't even it out. Very small loads are harder to balance than mixed ones. Many machines show an unbalance code or symbol when this happens.</p>
<h3>Water still in the drum</h3>
<p>A machine won't spin while it still holds water. If water is left at the end, the fault is in the drain, so start with our guide to a <a href="/problems/washing-machine-not-draining/">washing machine not draining</a>.</p>
<h3>Suds and spin settings</h3>
<p>Foam cushions the drum and makes the motor work harder, so many machines add extra rinses and hold the spin until the suds die down. Too much detergent, or hand-washing powder in a front loader, is the usual cause. Wool, delicates and hand-wash programmes spin gently or not at all, and a "no spin" option or a spin speed turned right down leaves clothes wet even when nothing is broken.</p>
<h3>The door lock or lid switch</h3>
<p>Front loaders won't spin unless the door lock confirms the door is shut and locked, and on top loaders the lid switch or lid lock does the same job. On a top loader, a failed lid switch can let the machine fill and wash but stop it at the spin. On a front loader, a worn lock tends to stop the cycle starting or cut it off partway.</p>
<h3>Worn carbon brushes</h3>
<p>Many machines with a conventional brushed motor have two carbon brushes that press against a spinning part of the motor and wear down over the years. As they get short, the drum turns weakly, jerks or stops on the spin, sometimes with a burning smell. Direct drive and inverter motors, used on many <a href="${brandUrl('lg')}">LG</a> and <a href="${brandUrl('samsung')}">Samsung</a> front loaders, don't have brushes.</p>
<h3>A broken or slipping drive belt</h3>
<p>On belt-driven machines, a rubber belt links the motor to a large pulley on the back of the drum. If it snaps or comes off, the motor runs but the drum doesn't turn. A belt that keeps coming off is a warning sign in itself, because the pulley may be loose or the drum bearings may be wearing.</p>
<h3>Top loader drive parts</h3>
<p>Depending on the design, a top loader turns its agitator or pulsator through a drive coupling, a clutch or a gearbox. When one of them wears, you'll often hear the motor running while the drum barely moves, or the machine agitates but won't spin up.</p>
<h3>Motor, speed sensor or control board</h3>
<p>The motor itself, the sensor that reports its speed, the wiring between them and the board that drives the motor can all fail. Surges, especially when electricity returns after load shedding, can damage the motor control electronics. These faults need electrical testing, so they're strictly a technician's job.</p>

<h2>Safe checks you can do</h2>
<div class="callout callout-safety"><p><strong>Safety first:</strong> do these checks with the machine switched off at the wall, unless a step says to run a programme. Don't tilt the machine, take off the back panel or go looking for the belt: the drive parts sit right next to live wiring and are a technician's job.</p></div>
<ol class="steps">
  <li><strong>Check the programme and spin speed.</strong> Make sure you haven't picked a delicate, wool or no-spin setting, and that the spin speed isn't turned to its lowest.</li>
  <li><strong>Rebalance the load.</strong> Once the door unlocks, spread the washing out, take out one heavy item or add a couple of towels to a small load, then run a spin-only or rinse-and-spin programme.</li>
  <li><strong>Look for water and foam.</strong> If water is left in the drum, follow the drain guide. If there's a lot of foam, run a rinse without detergent and use less next time.</li>
  <li><strong>Close the door or lid properly.</strong> Make sure nothing is caught in the door seal and the door clicks shut. On a top loader, check that the lid closes fully.</li>
  <li><strong>Check that the machine is level.</strong> Press down on opposite corners. If it rocks, adjust the levelling feet as your manual describes and tighten their lock nuts.</li>
  <li><strong>Write down any code.</strong> An unbalance or motor code narrows things down, and our <a href="/error-codes/">washing machine error code guides</a> explain the common ones.</li>
</ol>

<h2>Signs to stop using the machine</h2>
<p>Switch off at the wall and leave it for a technician if you notice a burning smell, smoke or a crackling sound, if the drum grinds or scrapes as it turns, or if the machine trips the earth leakage. Don't keep restarting a spin that won't run either. Each attempt with a heavy, wet load strains the motor, and a slipping belt or a worn brush only gets worse.</p>

<h2>What the technician checks and fixes</h2>
<p>The technician rules out the simple causes first, then runs a spin test to see where the machine stops. With the panels off, they inspect the belt and pulley, measure the brushes, test the door lock signal, check the motor windings and speed sensor, and confirm the board is driving the motor properly.</p>
<ul>
  <li><strong>Brushes:</strong> replaced as a pair, with the motor checked for wear.</li>
  <li><strong>Belt:</strong> refitted or replaced, and the pulley and bearings checked so it stays on.</li>
  <li><strong>Door lock or lid switch:</strong> replaced and tested through a full spin.</li>
  <li><strong>Top loader drive:</strong> a worn coupling or clutch replaced. A worn gearbox costs more, so you'll hear the options first.</li>
  <li><strong>Motor, sensor or board:</strong> repaired or replaced. On an older machine you'll be told plainly if the repair isn't worth it, and our <a href="/repair-or-replace/">repair or replace guide</a> can help you decide.</li>
</ul>
<p>Most of this work comes under our <a href="/services/front-loader-repairs/">front loader repairs</a> and <a href="/services/top-loader-repairs/">top loader repairs</a>.</p>

<h2>How long the repair usually takes</h2>
<p>Brushes, belts, door locks and lid switches are usually fixed on the same visit when the part is available. Motor and board faults take longer to diagnose, and some boards are made for one model only, so if a part has to be ordered, you'll know before you agree to anything. Our page on <a href="/washing-machine-repair-cost/">repair costs</a> explains what affects the price.</p>

<h2>Keeping the spin working</h2>
<ul class="checklist">
  <li>Wash big and small items together, so the machine can balance the load.</li>
  <li>Use the right detergent and dose, so suds don't hold up the spin.</li>
  <li>Protect the electronics from surges. See <a href="/blog/protect-washing-machine-from-load-shedding/">how to protect your washing machine from load shedding</a>.</li>
</ul>

<h2>Book a spin repair</h2>
<p>Still soaking wet after the checks? Call us, or <a href="/contact/">send a booking request</a>, and a technician will come to you, find the cause and quote before starting. Your repair carries our ${f.warranty} warranty on parts and labour. If the spin is loud as well as weak, read our guide to a <a href="/problems/washing-machine-noisy-when-spinning/">washing machine noisy when spinning</a> too.</p>`,
    faqs: [
      { q: `Why are my clothes still soaking wet after the wash?`, a: `Either the machine skipped or shortened the final spin, or it never drained properly. Check the spin setting and the load balance first, then look for water left in the drum. If both look fine, a worn part is stopping the drum reaching full speed.` },
      { q: `Why does my machine spin with some loads but not others?`, a: `Balance is almost always the reason. A small load with one heavy item, like a bath mat or a pair of jeans, is the hardest to balance, while a mix of large and small items spreads out evenly. If it struggles with every load, have the shock absorbers and motor checked.` },
      { q: `Is a broken motor the usual reason a machine won't spin?`, a: `No. Load balance, drainage, the door lock, carbon brushes and belts are all much more common causes than a failed motor. That's why it pays to diagnose the machine properly before assuming the worst.` },
      { q: `Can load shedding stop my washing machine spinning?`, a: `It can. A surge when the power comes back can damage the board that drives the motor, and a machine cut off mid-cycle may need its programme restarted before it will spin. Switching off at the wall when the power goes, and waiting a few minutes after it returns, lowers the risk.` },
      { q: `Why does my washing machine smell of burning when it tries to spin?`, a: `Worn carbon brushes, a slipping belt or an overheating motor are the usual causes. Stop using the machine, switch it off at the wall and have it checked, because running it can damage the motor further.` },
      { q: `Why does my top loader agitate but not spin?`, a: `The lid switch or lid lock is the first suspect, because the machine won't spin unless it knows the lid is shut. A worn clutch, a slipping belt or water that hasn't drained can do the same. If the lid closes properly and the water has gone, the switch and drive parts need testing.` },
      { q: `How full should I load my front loader?`, a: `Fill the drum loosely, leaving roughly a hand's width of space at the top. A packed drum can't tumble or balance properly, while a very small load is easily thrown off balance. Your manual gives the maximum load for each programme.` },
      { q: `Why does my machine try to spin, stop and start again?`, a: `That's the machine trying to balance the load: it slows down, tumbles the washing and tries again. If it gives up after a few attempts, rearrange the load or run a spin-only programme. If it happens with every load, the shock absorbers, the motor or its speed sensor may need checking.` },
    ],
  },
  {
    slug: 'washing-machine-leaking',
    name: 'Leaking',
    serviceSlug: 'washing-machine-parts-replacement',
    title: 'Washing Machine Leaking? Find the Cause | ProServ',
    description: `Washing machine leaking from the front, back or underneath? What each leak usually means, safe first steps and when to call. Help on ${site.phone.display}.`,
    h1: 'Washing machine leaking: where it comes from and why',
    primaryKeyword: 'washing machine leaking',
    summary: 'Puddles under the machine, at the door or behind it.',
    intro: `<p>Is your washing machine leaking? Where the water appears usually tells you why: the door seal or detergent drawer at the front, the hose connections at the back, or a pump, hose or tub seal underneath. Before anything else, cut the power safely and close the machine's tap, as the first steps below explain.</p>`,
    body: `
<h2>First steps when you find water</h2>
<div class="callout callout-safety"><p><strong>Safety first:</strong> water and electricity don't mix, so switch the machine off at the wall before you touch it or mop around it. If the plug, socket or cable is wet, or you'd have to stand in water to reach the switch, don't touch them: turn the power off at the DB board instead, provided you can get to it without standing in water, and keep children and pets away.</p></div>
<ol class="steps">
  <li><strong>Cut the power safely.</strong> If the plug and socket are dry and you don't have to stand in water to reach them, switch off at the wall and unplug the machine. If not, switch off at the DB board as above and leave the plug alone until it has dried and been checked.</li>
  <li><strong>Close the washing machine tap.</strong> It's usually on the wall behind or beside the machine, and closing it stops a split hose or a faulty valve from adding more water.</li>
  <li><strong>Dry the floor.</strong> Mop up, put towels down and lift any rugs. In a flat or an upstairs unit, check whether water could be reaching the home below.</li>
  <li><strong>Think about when it happened.</strong> Water that appears while the machine fills, washes, drains or spins points to different parts, so it's worth noting.</li>
</ol>

<h2>Where is the water coming from?</h2>
<table>
  <thead><tr><th>Where the water is</th><th>Usually when</th><th>Likely cause</th></tr></thead>
  <tbody>
    <tr><td>Front, under the door</td><td>During the wash or spin</td><td>Damaged or dirty door seal, laundry caught in the seal, too many suds</td></tr>
    <tr><td>Top front, around the detergent drawer</td><td>While filling</td><td>Blocked drawer or softener siphon, caked powder, overfilled compartments, high water pressure</td></tr>
    <tr><td>Bottom front, by the filter flap</td><td>After cleaning the filter, or while draining</td><td>Filter cap not screwed in straight, or a worn filter seal</td></tr>
    <tr><td>Behind, at the tap or top back</td><td>While filling, or all the time</td><td>Perished hose washer, cracked or bulging inlet hose, loose connection</td></tr>
    <tr><td>Behind, on the floor near the drain</td><td>While draining</td><td>Drain hose out of the standpipe, a blocked standpipe overflowing, split drain hose</td></tr>
    <tr><td>Underneath, towards the middle</td><td>During the wash or spin</td><td>Pump, sump hose or internal hose, tub seal and bearings, cracked tub</td></tr>
    <tr><td>Inside the drum, with the machine off</td><td>Overnight or between washes</td><td>An inlet valve that isn't closing fully</td></tr>
  </tbody>
</table>

<h2>Leaks at the front</h2>
<h3>The door seal</h3>
<p>The rubber seal around a front loader's door folds back on itself, and the folds trap water, lint, hair and small items. Over time, underwires, coins and sharp objects nick or split the rubber, and mould and old detergent can perish it.</p>
<p>A sock caught between the seal and the glass holds the seal open and lets water out on every turn of the drum. If the door has dropped on worn hinges, it may not press evenly against the seal either.</p>
<h3>The detergent drawer</h3>
<p>When powder cakes in the compartments, the softener siphon blocks or the drawer housing clogs with residue, the incoming water backs up and spills out of the front. Very high mains pressure can push water out too, and so can filling a compartment past its MAX line.</p>

<h2>Leaks at the back</h2>
<p>The inlet hose screws onto the tap at one end and the machine at the other, with a rubber washer sealing each connection. Those washers flatten and perish with age, and over-tightening can crack the plastic nuts. The hose itself can split or bulge, and a bulging hose is a warning sign, because it can burst and flood a room in minutes.</p>
<p>At the drain end, the hose can jump out of the standpipe when the pump pushes water through it hard. A standpipe that's partly blocked can also overflow onto the floor behind the machine every time it drains.</p>

<h2>Leaks underneath</h2>
<p>Water from under the machine is usually coming from a part inside it. The common culprits are the drain pump and its seal, the sump hose that joins the tub to the pump, and the smaller hoses that carry water from the drawer to the tub. If the floor by the filter flap is wet, check the filter cap first.</p>
<p>A leak from the middle of the machine, especially with a rumble on the spin and rust-coloured water underneath, can mean the seal behind the drum has failed and water is reaching the bearings. Our article on the <a href="/blog/signs-washing-machine-bearings-are-worn/">signs of worn washing machine bearings</a> explains this in detail.</p>
<p>Less often, the outer tub itself has cracked or been holed. An underwire trapped between the drum and the tub can pierce it, and a drum knocking about on collapsed bearings or a broken drum spider can crack it. Some machines also have a leak sensor in the base that stops the machine and shows a code when water collects there.</p>

<h2>Safe checks before you call</h2>
<p>With the power off and the floor dry, you can safely check a few things yourself:</p>
<ul>
  <li>Hand-tighten the inlet hose connections at the tap and at the machine. Don't use tools, and stop if a nut is cracked.</li>
  <li>Look along the inlet hose for splits, bulges or perished rubber. If you find damage, keep the tap closed until the hose has been replaced.</li>
  <li>Make sure the drain hose is secure in the standpipe or sink trap, and that the standpipe isn't overflowing.</li>
  <li>Check that the pump filter cap is screwed in straight and firmly, as your manual describes.</li>
  <li>Pull back the folds of the door seal and look for holes, splits or trapped items, and clean out any fluff and residue.</li>
  <li>Take out and clean the detergent drawer and its housing.</li>
</ul>
<p>Don't run the machine again to find where the leak starts. Keep the tap closed and the machine off, take a photo of where the water was, and note what the machine was doing when you found it. That tells the technician where to start looking, which saves time when they trace the leak.</p>

<h2>When to stop using the machine</h2>
<ul>
  <li>Water has reached the plug, the socket or the cable.</li>
  <li>The earth leakage or a breaker trips. Leave the machine off, because water may have reached an electrical part.</li>
  <li>The water is coming from inside the machine rather than a hose connection.</li>
  <li>You can hear a rumble on the spin as well as seeing a leak.</li>
  <li>Water is spreading under kitchen units, into a wall or through to a neighbour below.</li>
</ul>

<h2>What the technician checks and fixes</h2>
<p>The technician dries the area, runs the machine under controlled conditions and, with the panels off, traces the water back to its source. Then they fix the cause, not just the symptom.</p>
<ul>
  <li><strong>Door seal:</strong> replaced, which on some models means taking the front panel off.</li>
  <li><strong>Inlet or drain hoses:</strong> replaced, with new washers and a check of the tap.</li>
  <li><strong>Pump, sump hose or internal hoses:</strong> resealed or replaced.</li>
  <li><strong>Detergent drawer and housing:</strong> cleared, or a cracked part replaced.</li>
  <li><strong>Tub seal and bearings:</strong> replaced together. On a machine with a sealed tub that can't be split, you'll get the cost of the whole tub assembly before you decide.</li>
  <li><strong>Cracked outer tub:</strong> replaced where it makes sense, or you'll be told honestly if a new machine is better value.</li>
</ul>
<p>Most of these are routine <a href="/services/washing-machine-parts-replacement/">washing machine parts replacements</a>. If the leak started after the machine was installed or moved, our <a href="/services/washing-machine-installation/">washing machine installation</a> service puts the connections right. We fix leaks on all major brands, including <a href="${brandUrl('bosch')}">Bosch</a>, <a href="${brandUrl('aeg')}">AEG</a>, <a href="${brandUrl('siemens')}">Siemens</a> and <a href="${brandUrl('defy')}">Defy</a>.</p>

<h2>How long a leak repair takes</h2>
<p>Hoses, washers, filter seals and drawer blockages are usually sorted on the first visit, and door seals and pumps are normally fitted on the same visit when the part is available. Bearings and tubs take several hours, and if parts have to be ordered in, you'll hear about it before you agree to the repair. For what drives the price, see our guide to <a href="/washing-machine-repair-cost/">how repair costs are worked out</a>.</p>

<h2>Preventing leaks</h2>
<ul class="checklist">
  <li>Check the inlet and drain hoses once a year, and replace any that look cracked, bulging or stiff.</li>
  <li>Close the washing machine tap when you go away for more than a day or two.</li>
  <li>Wipe the door seal after the last wash of the day and leave the door ajar so it dries, unless young children or pets can get to the machine.</li>
  <li>Clean the detergent drawer every few weeks, and use the dose on the pack.</li>
  <li>Keep the machine level, so it doesn't walk on the spin and stretch its hoses.</li>
</ul>

<h2>Get a leak fixed</h2>
<p>Leaks are worth fixing quickly. Call or WhatsApp us, or <a href="/contact/">book a leak repair</a>. On urgent call-outs we aim to arrive ${f.arrivalTime}, depending on where the technician is working, and you'll get a quote before any work starts. If water is also left in the drum, see <a href="/problems/washing-machine-not-draining/">why a machine won't drain</a>.</p>`,
    faqs: [
      { q: `Is a leaking washing machine dangerous?`, a: `It can be, mainly because of the electricity. Water that reaches the plug, the socket or the wiring inside the machine can cause a shock or trip the power, and a steady leak damages floors and cupboards. Treat it as urgent and keep the machine off until it's fixed.` },
      { q: `Can I use my washing machine if it's only leaking a little?`, a: `It's safer not to. Small leaks usually get bigger, water can reach electrical parts inside the machine, and some causes, like a failing tub seal, damage the bearings while you keep using it. Keep the tap closed and the machine off until it's been checked.` },
      { q: `Why does it only leak during the spin?`, a: `Spin leaks often point to the drain hose being pushed out of the standpipe by the force of the water, a loose hose inside the machine, or a worn tub seal. A split near the bottom of the door seal can also show up mainly at speed. Note whether the water is at the back, the front or underneath, and tell the technician.` },
      { q: `Why is there water in the drum when the machine is off?`, a: `The inlet valve is probably not closing fully, so water seeps in from the tap between washes. Left alone, it can fill the drum until it overflows, so close the tap and have the valve checked. Our guide to a <a href="/problems/washing-machine-not-filling-with-water/">washing machine not filling with water</a> explains how the valve works.` },
      { q: `Can a torn door seal be repaired, or does it need replacing?`, a: `A torn or split seal needs replacing. Patches and sealants don't last on a part that flexes and gets wet on every wash. On some models the front panel has to come off to fit a new one, so it's a technician's job.` },
      { q: `Why does water come out of the detergent drawer?`, a: `Usually the drawer or its housing is clogged with old powder and softener, so water can't flow through properly. High water pressure and overfilled compartments can cause it too. If it still spills after a thorough clean, have the inlet valve and the water pressure checked.` },
      { q: `How can I tell if the leak is from the machine or the plumbing?`, a: `Dry everything, then look at the tap, the hose and the standpipe while the machine is off. A drip from the tap itself, the pipe behind it or the standpipe is a plumbing problem. A drip where the hose screws on, or anywhere along it, usually means a perished hose washer or a damaged inlet hose, because the hose stays under mains pressure whenever the tap is open. If everything stays dry with the machine off, the leak is in the machine or its hoses, so close the tap and leave the machine off until a technician has traced it.` },
      { q: `Can too much detergent make a machine leak?`, a: `Yes. Excess suds can push past the door seal and out of the drawer, especially in front loaders. Use the dose on the pack and a detergent made for automatic machines, not hand-washing powder.` },
    ],
  },
  {
    slug: 'washing-machine-wont-turn-on',
    name: 'Won\'t switch on',
    serviceSlug: 'washing-machine-parts-replacement',
    title: 'Washing Machine Won\'t Turn On? What to Do | ProServ',
    description: `Washing machine won't turn on? Check the socket, the power and the settings safely, then call ${site.phone.display} for a technician to test it.`,
    h1: 'Washing machine won\'t turn on',
    primaryKeyword: 'washing machine won\'t turn on',
    summary: 'No lights, no display, no response from the buttons.',
    intro: `<p>When a washing machine won't turn on, the cause is often outside it: a dead socket, load shedding, empty prepaid units or a tripped supply. Inside the machine, a damaged mains filter, power cable or control board is most likely. Start with the checks below, which don't involve opening anything.</p>`,
    body: `
<h2>Dead, or just not starting?</h2>
<table>
  <thead><tr><th>What happens</th><th>Where to look</th></tr></thead>
  <tbody>
    <tr><td>Completely dead: no lights, no display, no sound</td><td>The power supply, socket, plug or cable first, then the machine's mains filter, power switch or board</td></tr>
    <tr><td>The display lights up but Start does nothing</td><td>Child lock, delay start, a door that isn't shut properly, or the door lock</td></tr>
    <tr><td>Clicks or hums, then nothing</td><td>The door lock trying to engage, or a fault on the control board</td></tr>
    <tr><td>Starts, then cuts out mid-cycle</td><td>A loose plug or multi-plug, a supply problem or an internal fault</td></tr>
    <tr><td>Trips the earth leakage or a breaker</td><td>A fault inside the machine: leave it off and call a technician</td></tr>
  </tbody>
</table>
<p>Being precise about what the machine is doing helps, because each version points somewhere different. It's also the first thing a technician will ask you.</p>

<h2>Check the power supply first</h2>
<p>Is the house power on? During load shedding, or after a fault in your street, the obvious can catch anyone out. On a prepaid meter, check that you still have units. If the lights and other plugs work, look at the machine's own socket: make sure the wall switch is on and the plug is pushed fully in.</p>
<p>Then plug a lamp or a phone charger into the same socket. If that doesn't work either, the socket or its circuit is the problem, and that's a job for an electrician rather than a washing machine technician. If the machine is plugged into a multi-plug or an extension lead, move it to a wall socket and try again.</p>

<h2>Settings that make a machine seem dead</h2>
<ul>
  <li><strong>Child lock.</strong> A key or lock symbol means the buttons are locked. Your manual shows which button to hold to turn it off.</li>
  <li><strong>Delay start.</strong> If a timer is set, the machine waits before starting and may show a countdown. Cancel it as your manual describes.</li>
  <li><strong>The programme dial.</strong> On a machine with a dial, check that it points at a programme and not at Off.</li>
  <li><strong>Standby.</strong> Many machines switch the display off after a few minutes without use. Press the power button again before you choose a programme.</li>
  <li><strong>The door.</strong> Most front loaders won't start until the door is pushed firmly shut and the lock engages. If yours won't lock, see <a href="/problems/washing-machine-door-wont-open/">washing machine door won't open or lock</a>.</li>
</ul>

<h2>Common causes inside the machine</h2>
<h3>Mains filter</h3>
<p>Many washing machines have a small suppression filter where the power cable enters the machine. Its job is to stop electrical interference, and a surge can blow it, leaving the machine completely dead. A failing filter can also trip the earth leakage.</p>
<h3>Power cable and plug</h3>
<p>Cables get crushed when a machine is pushed back against the wall, or chafed when it walks on the spin. Plugs can overheat and scorch, especially in a loose or worn socket. Any damage here means the machine mustn't be used until it's repaired.</p>
<h3>Power switch or button board</h3>
<p>On some models the power button sits on its own small board. The button, that board or the cable linking it to the main board can fail, so pressing it does nothing.</p>
<h3>Control board</h3>
<p>The control board runs everything, including its own power supply. Surges, especially when electricity returns after load shedding or an outage, can damage that supply or other parts of the board. Water from a leak dripping onto the electronics can do the same, which is why a leak and a dead machine sometimes go together. Some boards can be repaired, while others have to be replaced.</p>
<h3>Door lock</h3>
<p>If the display lights up but the machine won't go any further, the door lock may not be confirming that the door is shut. You might hear it click over and over, or see a door symbol flash.</p>

<h2>Safe checks before you call</h2>
<div class="callout callout-safety"><p><strong>Safety first:</strong> these checks only involve the socket, the plug and the machine's own buttons. Never open the machine, take off the back panel or test wiring yourself, and never use a machine whose cable or plug is damaged.</p></div>
<ol class="steps">
  <li><strong>Confirm the house has power,</strong> and on a prepaid meter, that you have units.</li>
  <li><strong>Check the wall switch and the plug.</strong> Switch on at the wall and push the plug in fully, in a wall socket rather than a multi-plug.</li>
  <li><strong>Test the socket</strong> with a lamp or a phone charger.</li>
  <li><strong>Look at the plug and cable</strong> without pulling on them. If you see scorch marks, melting or cuts, switch off at the wall, unplug and leave the machine for a technician.</li>
  <li><strong>Check the DB board.</strong> If the earth leakage or a breaker has tripped, unplug the washing machine and leave it off. Don't plug it in or switch it on again to test it, even if the switch resets: a machine that trips the power can have a dangerous fault, so it needs a technician.</li>
  <li><strong>Try the controls.</strong> Turn off the child lock, cancel any delay timer, close the door firmly and press Start.</li>
  <li><strong>After a power cut,</strong> switch off at the wall for a few minutes, then back on, and try once more. If it still won't respond, it needs testing.</li>
</ol>

<h2>Load shedding and surges</h2>
<p>Power interruptions are hard on washing machines. When electricity returns to an area the voltage can spike or flicker, and the board and mains filter take the hit. A machine cut off mid-cycle can also be left with water in the drum and the door locked.</p>
<p>Switching off at the wall when the power goes, and waiting a few minutes after it returns before switching on, reduces the risk. A good plug-in surge protector, rated for the machine's full load and plugged straight into the wall socket rather than a multi-plug, adds another layer. Our guide to <a href="/blog/protect-washing-machine-from-load-shedding/">protecting your washing machine from load shedding</a> covers it in more depth.</p>

<h2>What the technician tests and repairs</h2>
<p>A technician starts at the socket and works inwards. They confirm the supply, check the plug, cable and mains filter, test the power switch and the board's power supply, and look for scorched connectors or signs that water has reached electrical parts. If the machine trips the power, they test the main components, such as the heating element, to find the one that's leaking current to earth.</p>
<p>Mains filters, cables, switches and door locks are straightforward parts to replace. A control board is more involved: the technician checks whether it can be repaired and what a replacement would cost, and if water caused the damage, the leak gets fixed too. See <a href="/services/washing-machine-parts-replacement/">washing machine parts replacement</a> for the parts we fit, on all major brands from <a href="${brandUrl('samsung')}">Samsung</a> and <a href="${brandUrl('lg')}">LG</a> to <a href="${brandUrl('hisense')}">Hisense</a> and <a href="${brandUrl('defy')}">Defy</a>.</p>

<h2>Time and cost</h2>
<p>Supply, plug and filter faults are often found and fixed on the first visit. Boards are specific to each model, so if yours has to be ordered, the technician says so up front, before you agree to the repair. The part is the biggest factor in the price: a mains filter or switch is a small repair, while a board for a premium machine sits at the top of the scale. Our pages on <a href="/washing-machine-repair-cost/">how repair costs add up</a> and <a href="/repair-or-replace/">repairing or replacing a machine</a> help you weigh it up.</p>

<h2>Get it working again</h2>
<p>If the socket works and the machine is still dead, <a href="/contact/">book a repair</a> by phone, WhatsApp or the online form. Our ${f.calloutFee} call-out fee is ${f.calloutCondition}, and the repair is covered by our ${f.warranty} warranty on parts and labour.</p>`,
    faqs: [
      { q: `My washing machine stopped working after load shedding. Can it be fixed?`, a: `Usually, yes. The mains filter and the board's power supply are the parts a surge commonly damages, and both can be tested and replaced. Leave the machine switched off at the wall until a technician has seen it.` },
      { q: `Why does my washing machine trip the electricity?`, a: `A heating element leaking current to earth is a classic cause, along with a damaged cable, a failing mains filter or water reaching an electrical part. Either way, the earth leakage is a safety device doing its job. Leave the machine unplugged and have it tested before you use it again.` },
      { q: `Why do the lights come on but the machine won't start?`, a: `Check the child lock and any delay timer, and make sure the door is pushed firmly shut. If those are fine, the door lock may not be engaging or the board may not be responding to the buttons. Both need testing by a technician.` },
      { q: `Can I plug my washing machine into an extension lead?`, a: `It's safer not to. A washing machine draws a heavy current when it heats water, and extension leads and multi-plugs can overheat or make the machine cut out. Plug it straight into a wall socket that's in good condition.` },
      { q: `Is it worth repairing a control board?`, a: `Often, especially on a newer or better-quality machine, where a board costs far less than a new machine. On an older machine with other worn parts, the numbers may not add up. The technician gives you the price first, so you can decide.` },
      { q: `Why does my machine switch off in the middle of a cycle?`, a: `A loose plug, a worn socket or a multi-plug can lose the connection when the machine vibrates, and dips in the supply can do it too. If the plug and socket are sound and it keeps happening, an internal connection or the board needs testing.` },
      { q: `Can a burnt plug be the reason my machine is dead?`, a: `Yes. A scorched or melted plug usually means a poor connection that has overheated, and it can damage the socket as well. Don't use the machine: switch off at the wall and have the plug, the cable and the socket checked.` },
      { q: `My machine was dead, then started working again. Should I worry?`, a: `It's worth having it checked if it happens more than once. Faults that come and go usually come from a loose connection, a failing switch or a board on its way out, and they rarely fix themselves. Note when it happens and what the display shows, because that helps the technician find it.` },
    ],
  },
  {
    slug: 'washing-machine-door-wont-open',
    name: 'Door won\'t open or lock',
    serviceSlug: 'front-loader-repairs',
    title: 'Washing Machine Door Won\'t Open or Lock | ProServ',
    description: `Washing machine door won't open, or won't lock so the cycle can't start? Why it happens, what's safe to try and when to call ${site.phone.display}.`,
    h1: 'Washing machine door won\'t open (or won\'t lock)',
    primaryKeyword: 'washing machine door won\'t open',
    summary: 'Door stuck shut after a wash, or the machine won\'t start because it won\'t lock.',
    intro: `<p>When a washing machine door won't open, it's usually because the machine is keeping it locked: there's water inside, the drum is turning, or the lock is still releasing. If it stays shut after that, or won't lock at all, the lock, catch or handle has probably failed.</p>`,
    body: `
<h2>How the door lock works</h2>
<p>Every front loader has a door lock, sometimes called an interlock. When you press Start, it locks the door and tells the control board the door is safely shut, and only then does the machine fill. It stays locked while there's water in the drum, while the drum is turning and, on many models, while the water inside is too hot to open safely.</p>
<p>When the programme ends, many locks take a minute or two to release, so a short wait is normal. Modern top loaders often lock the lid during the spin as well, while older ones use a lid switch that stops the spin when the lid opens. Either way, the lock is there to keep hands away from a spinning drum and water inside the machine.</p>

<h2>Why the door won't open</h2>
<h3>The cycle hasn't really finished</h3>
<p>If the machine is still draining or doing a final spin, or you paused it partway, the lock stays on. Check the display or the programme lights before assuming there's a fault.</p>
<h3>Water left in the drum</h3>
<p>A machine that can't drain keeps the door locked, so it doesn't open onto a flood. If you can see water through the glass, the real problem is the drain. See <a href="/problems/washing-machine-not-draining/">washing machine not draining</a>.</p>
<h3>Hot water inside</h3>
<p>If you pause or stop a 60°C or 90°C wash partway, some machines keep the door locked until the water has cooled or drained, so you can't open it onto hot water. Give it time, or let the machine drain.</p>
<h3>Child lock</h3>
<p>The child lock locks the buttons and, on some models, the door as well. Look for a key or lock symbol on the display.</p>
<h3>A power cut mid-cycle</h3>
<p>If load shedding or an outage stopped the machine partway, the door may stay locked until the power returns and the machine can drain. Even if it does open, there may be water and hot washing behind it, so wait for the electricity.</p>
<h3>A broken handle, catch or lock</h3>
<p>If the handle feels loose or moves without any resistance, the handle mechanism has probably snapped. If the machine has drained, the drum is cool and the door still won't release, the lock or the signal from the board has most likely failed.</p>

<h2>Why the door won't lock</h2>
<p>The opposite problem stops the machine starting at all. The display lights up and you press Start, but nothing happens: the door symbol flashes, the lock clicks over and over, or a door code appears. The usual reasons are:</p>
<ul>
  <li>The door isn't pushed firmly shut, or laundry or a fold of the seal is caught in it.</li>
  <li>The plastic hook on the door, which the lock grabs, is bent, cracked or broken off.</li>
  <li>Worn hinges let the door drop, so the hook no longer lines up with the lock.</li>
  <li>The lock itself has failed, or the board isn't sending it the signal to lock.</li>
  <li>On a top loader, the lid switch or lid lock has failed, or something stops the lid closing fully.</li>
</ul>

<h2>Safe things to try first</h2>
<div class="callout callout-safety"><p><strong>Safety first:</strong> never prise the door with a screwdriver or knife, pull hard on the handle or reach in behind the seal. You can break the handle or the hook, tear the seal and turn a small repair into a bigger one. Don't take panels off to reach the lock, and never tamper with it.</p></div>
<ol class="steps">
  <li><strong>Wait.</strong> Give the machine a few minutes after the programme ends, and longer if you stopped a hot wash partway.</li>
  <li><strong>Check for water.</strong> If there's water in the drum, choose the drain or spin programme on the machine's own controls and let it finish. If it won't drain, follow our drain guide.</li>
  <li><strong>Turn off the child lock</strong> if a lock or key symbol is showing, using the buttons your manual gives.</li>
  <li><strong>Switch off at the wall for a few minutes,</strong> then back on, and try the drain or spin programme once. After a power cut, this often lets the machine finish and release the door.</li>
  <li><strong>For a door that won't lock,</strong> open it, check that nothing is caught between the door and the seal, and close it firmly until it clicks.</li>
</ol>
<p>Don't try to force or release the lock any other way. A drum with water in it floods the floor the moment the door opens, so if the machine won't drain and unlock on its own, switch off at the wall and leave it for the technician.</p>

<h2>Signs the lock or catch has failed</h2>
<ul>
  <li>The door stays locked long after the cycle, with no water inside and a cool drum.</li>
  <li>The lock clicks repeatedly, or a door code comes back every time you start a wash.</li>
  <li>The handle moves freely without opening the door.</li>
  <li>The hook on the door is visibly cracked, bent or missing.</li>
  <li>The door sags when it's open, or you have to lift it to close it.</li>
</ul>

<h2>What the technician does</h2>
<p>The first job is to get your washing out safely. The technician drains the machine if needed, then releases the lock from inside the machine without damaging the door or the seal. Next they test the lock and the signal reaching it from the board, and inspect the handle, the hook, the hinges and the door alignment.</p>
<ul>
  <li><strong>Faulty lock:</strong> replaced and tested through a full cycle.</li>
  <li><strong>Broken handle or hook:</strong> replaced. On some models these come as part of the door frame.</li>
  <li><strong>Worn hinges:</strong> replaced or adjusted so the door lines up with the lock again.</li>
  <li><strong>Board or wiring fault:</strong> traced, then repaired or replaced once you've accepted the quote.</li>
  <li><strong>Lid lock or lid switch on a top loader:</strong> replaced. See <a href="/services/top-loader-repairs/">top loader repairs</a>.</li>
</ul>
<p>Door faults on front loaders are part of our <a href="/services/front-loader-repairs/">front loader repairs</a>, on all major brands, including <a href="${brandUrl('whirlpool')}">Whirlpool</a> and <a href="${brandUrl('aeg')}">AEG</a>.</p>

<h2>How long it usually takes</h2>
<p>Locks, handles and door hooks are small parts, and fitting them is usually quick, so the job is normally finished on the same visit when the part is available. If the part for your model has to be ordered in, you're told before you agree to the work. Board faults take longer to trace. How the price is worked out is explained in our <a href="/washing-machine-repair-cost/">repair pricing guide</a>.</p>

<h2>Avoiding door trouble</h2>
<ul class="checklist">
  <li>Close the door with a firm push rather than a slam.</li>
  <li>Don't lean on the open door or let children swing on it. It wears the hinges and drops the door out of line.</li>
  <li>Wait for the lock to release instead of tugging the handle.</li>
  <li>Keep the seal clean, so fluff and residue don't stop the door closing.</li>
  <li>If load shedding is due, only start a wash that has time to finish.</li>
</ul>

<h2>Get the door open</h2>
<p>Washing stuck inside? Phone or WhatsApp us, or use our <a href="/contact/">booking form</a>. On urgent call-outs we aim to arrive ${f.arrivalTime}, depending on where the technician is working. If a door or lid code is showing, our guides to <a href="${errorCodeUrl('samsung')}">Samsung error codes</a>, <a href="${errorCodeUrl('lg')}">LG error codes</a>, <a href="${errorCodeUrl('bosch')}">Bosch error codes</a> and <a href="${errorCodeUrl('defy')}">Defy error codes</a> cover the common codes for those brands.</p>`,
    faqs: [
      { q: `How long should the door take to unlock after a wash?`, a: `On many machines it's a minute or two after the programme ends. If you stopped a hot wash partway, some models wait for the water to cool or drain first. If it's still locked well after that, with no water inside, the lock or its signal may have failed.` },
      { q: `Is a door lock expensive to replace?`, a: `A door lock is one of the smaller parts on a washing machine and fitting it is usually quick, so it's normally one of the less costly repairs. The price depends on the brand and model. You'll get the exact figure in the quote before any work starts.` },
      { q: `Why does my machine click but not start?`, a: `The click is usually the door lock trying to engage. If the lock can't confirm the door is shut, because the hook is damaged, the door is out of line or the lock has failed, the machine won't fill or start. Check that the door is closed firmly, then have the lock tested.` },
      { q: `Can I open the door during a power cut?`, a: `It's safer not to try. Many doors stay locked until the power returns, and even one that opens may have water and hot washing behind it, ready to flood the floor. Wait for the electricity to come back and let the machine drain, and the door should release.` },
      { q: `My door handle snapped. Can it be replaced?`, a: `Yes. On many front loaders the handle and its catch can be replaced on their own, while on some models they come with the door frame. The technician opens the door safely first, then fits the new part.` },
      { q: `Does the child lock lock the door as well?`, a: `On some models it does, and on others it only locks the buttons. Look for a key or lock symbol on the display, and check your manual for the button to hold to switch it off.` },
      { q: `Can I add washing after the cycle has started?`, a: `Many front loaders let you pause and add an item early in the cycle, but only if the water level and temperature are low enough. If the door doesn't unlock when you pause, the machine has decided it isn't safe yet. Let the cycle run and wash the item next time.` },
      { q: `Why does water drip out when I open the door?`, a: `A little water trapped in the folds of the seal is normal and drips out when you open the door, so wipe the seal after the last wash of the day. If water runs out, or the floor gets wet during the wash, the seal may be damaged. See our guide to a <a href="/problems/washing-machine-leaking/">washing machine leaking</a>.` },
    ],
  },
  {
    slug: 'washing-machine-noisy-when-spinning',
    name: 'Noisy or shaking',
    serviceSlug: 'front-loader-repairs',
    title: 'Washing Machine Noisy When Spinning? Causes | ProServ',
    description: `Washing machine noisy when spinning, banging or shaking? What each noise means, safe checks and when to stop using it. Call ${site.phone.display}.`,
    h1: 'Washing machine noisy when spinning or shaking',
    primaryKeyword: 'washing machine noisy when spinning',
    summary: 'Rumbling, grinding, banging or a machine that walks across the floor.',
    intro: `<p>Is your washing machine noisy when spinning? The kind of noise usually tells you what's wrong. A rumble or roar that rises with speed points to worn bearings, banging or shaking to an unbalanced load or worn suspension, and rattling or scraping to something caught between the drum and tub.</p>`,
    body: `
<h2>Which noises are normal?</h2>
<p>A washing machine is never silent. Water rushing in, the pump humming as it drains, the click of the door lock and a rising whine as the drum speeds up are all normal. So is a soft thud or two as the machine redistributes the load before a spin. Inverter and direct drive machines tend to be quieter than older belt-driven ones.</p>
<p>What isn't normal is a noise that's new, gets louder week by week, or comes with the machine moving. A rumble, bang, grind, squeal or scrape is worth investigating early, because the parts that make those noises tend to damage other parts the longer they run.</p>

<h2>Match the noise to the cause</h2>
<table>
  <thead><tr><th>The noise</th><th>When you hear it</th><th>Likely cause</th></tr></thead>
  <tbody>
    <tr><td>Rumbling or roaring, like a jet engine</td><td>Getting louder as the spin speeds up</td><td>Worn drum bearings</td></tr>
    <tr><td>Banging, thumping, rocking or walking</td><td>At the start of the spin, or all the way through</td><td>Unbalanced load, machine not level, worn suspension, transit bolts left in</td></tr>
    <tr><td>Rattling or clinking</td><td>During the wash and the spin</td><td>A coin, button or underwire between the drum and the tub</td></tr>
    <tr><td>Scraping or grating on every turn</td><td>Even at slow speed</td><td>Something caught between the drum and the tub, or a drum that has dropped and is rubbing</td></tr>
    <tr><td>Grinding or buzzing</td><td>While the water drains</td><td>An object in the drain pump, or a worn pump</td></tr>
    <tr><td>Squealing</td><td>As the drum speeds up</td><td>A worn or slipping drive belt, or failing bearings</td></tr>
    <tr><td>A heavy knock once per turn</td><td>During the spin</td><td>A loose counterweight or pulley, or a cracked drum support</td></tr>
  </tbody>
</table>

<h2>Worn bearings: the rumble that grows</h2>
<p>The drum turns on a pair of bearings at the back of the tub, protected by a rubber seal. When that seal lets water through, the bearings rust and wear, and the first sign is a low rumble on the spin that grows louder over weeks or months. Left alone, the drum develops play, the rumble turns into a roar, and the damage can spread to the shaft, the bearing housing and the tub.</p>
<p>Bearings are a bigger repair because the machine has to be stripped down to the tub, and on machines with a sealed tub the whole tub assembly is replaced. Our article on the <a href="/blog/signs-washing-machine-bearings-are-worn/">signs of worn washing machine bearings</a> explains how to tell, and our <a href="/washing-machine-repair-cost/">guide to repair costs</a> explains why the price varies.</p>

<h2>Banging, shaking and walking</h2>
<h3>An unbalanced load</h3>
<p>A single heavy item, such as a bath mat, a duvet or a pair of jeans in a small load, throws the drum off centre so it bangs against the cabinet. The machine usually tries to correct it, but not always in time. If it can't even the load out, many machines slow the spin or skip it, as our guide to a <a href="/problems/washing-machine-not-spinning/">machine that won't spin</a> explains.</p>
<h3>A machine that isn't level</h3>
<p>All four feet need to stand firmly on the floor with their lock nuts tightened. Uneven tiles, a sloping laundry floor or a suspended wooden floor upstairs can turn normal vibration into shaking you can feel across the room.</p>
<h3>Worn suspension</h3>
<p>Front loaders hang the tub on springs and steady it with shock absorbers, while many top loaders hang theirs from suspension rods. As these wear, the tub swings further than it should and knocks the cabinet on every spin.</p>
<h3>Transit bolts left in</h3>
<p>New front loaders are delivered with bolts through the back that lock the tub for transport. If they aren't removed, the machine shakes violently and can quickly damage itself. The same goes after a move if the bolts were refitted for the journey and never taken out again. Our <a href="/services/washing-machine-installation/">washing machine installation</a> service takes care of this.</p>
<h3>Loose counterweights</h3>
<p>Heavy weights bolted to the tub keep it steady. If their bolts work loose, you'll hear a heavy knock as the drum turns.</p>

<h2>Rattles, scrapes and trapped objects</h2>
<p>Coins, hair clips, buttons and bra underwires slip through the holes in the drum or past the door seal, and end up between the drum and the outer tub. There they rattle on every turn, scratch the drum and, in the worst cases, puncture the tub or jam the pump.</p>
<p>A scraping sound on every revolution needs attention before it does that kind of damage. If you can see something poking through a drum hole, don't run the machine again until it has been taken out.</p>

<h2>Safe checks before you call</h2>
<div class="callout callout-safety"><p><strong>Safety first:</strong> switch off at the wall and unplug before you check the drum, the seal or the filter. Don't tilt the machine or lie it down, don't take panels off, and don't run it again if you hear grinding or scraping.</p></div>
<ol class="steps">
  <li><strong>Note when the noise happens.</strong> Filling, washing, draining or spinning? A short video with sound, sent on WhatsApp, helps the technician a lot.</li>
  <li><strong>Rebalance the load.</strong> Spread the washing out, take out any single heavy item and run a spin-only programme to see whether the noise has gone.</li>
  <li><strong>Check that it's level.</strong> Press down on opposite corners. If it rocks, adjust the feet as your manual describes and tighten the lock nuts.</li>
  <li><strong>If it's new or recently moved,</strong> look at the back for transit bolts. If they're still in, don't use the machine until they've been taken out.</li>
  <li><strong>Check the seal and the filter.</strong> Clean out the folds of the door seal, and clean the pump filter as your manual describes, with towels and a tray ready for the water.</li>
  <li><strong>Give it space.</strong> Make sure the machine isn't touching a wall, a cupboard or another appliance, and that the hoses aren't knocking against anything.</li>
</ol>

<h2>When to stop using it</h2>
<p>Switch off at the wall and book a technician if the rumble is getting louder, if you hear grinding or scraping, if the machine keeps banging with a well-balanced load, or if it walks far enough to stretch its hoses. Water under the machine, a burning smell or rust-coloured water as well as the noise are also reasons to stop. They suggest a seal, bearing or motor problem that will only get worse. If water is collecting under the machine, our guide to a <a href="/problems/washing-machine-leaking/">leaking washing machine</a> helps you work out where it is coming from.</p>

<h2>What the technician checks and fixes</h2>
<p>The technician listens to the machine through a cycle, then checks the drum by hand for play and roughness. With the panels off they inspect the bearings and seal, the shock absorbers and springs or suspension rods, the counterweight bolts, the drum support, the belt and pulley, and the pump.</p>
<ul>
  <li><strong>Trapped objects:</strong> removed, often through the opening for the heating element, without stripping the machine.</li>
  <li><strong>Shock absorbers or suspension rods:</strong> replaced, usually as a pair or a full set so the tub hangs evenly.</li>
  <li><strong>Loose counterweights or pulley:</strong> refitted and tightened.</li>
  <li><strong>Bearings and seal:</strong> replaced together on a tub that can be split. On a sealed tub, you get a quote for the tub assembly so you can decide.</li>
  <li><strong>Noisy pump:</strong> cleared or replaced.</li>
</ul>
<p>Most of this falls under our <a href="/services/front-loader-repairs/">front loader repairs</a> and <a href="/services/top-loader-repairs/">top loader repairs</a>, on all major brands from <a href="${brandUrl('lg')}">LG</a> and <a href="${brandUrl('defy')}">Defy</a> to <a href="${brandUrl('speed-queen')}">Speed Queen</a>.</p>

<h2>How long noise repairs take</h2>
<p>Removing an object, tightening a counterweight or replacing shock absorbers is usually done in one visit when the parts are available. Bearings take several hours, and if the bearings or the tub for your model have to be ordered, that's explained with the quote, before you agree to the repair. On an older machine with worn bearings, our <a href="/repair-or-replace/">repair or replace guide</a> helps you weigh up the cost.</p>

<h2>Keeping it quiet</h2>
<ul class="checklist">
  <li>Mix large and small items in every load, and don't overload the drum.</li>
  <li>Empty pockets, and wash underwired bras in a laundry bag.</li>
  <li>Check the levelling whenever the machine has been moved.</li>
  <li>Have a new rumble looked at early, before it damages the tub.</li>
  <li>Keep the transit bolts if you're likely to move house, and have them refitted before the machine goes on the back of a bakkie.</li>
</ul>

<h2>Book a technician to listen</h2>
<p>Not sure what you're hearing? Send us a short video of the noise on WhatsApp, or <a href="/contact/">book a technician</a> to come and listen. You'll get a quote before any work starts, and the repair carries our ${f.warranty} warranty on parts and labour.</p>`,
    faqs: [
      { q: `Can I keep using a noisy washing machine?`, a: `It depends on the noise. A machine that bangs because of one heavy item is fine once you rebalance the load, but a rumble from worn bearings or a scraping object gets worse with every wash and can make the repair more expensive. If you're not sure, stop and get it checked.` },
      { q: `Why does my machine shake more with small loads?`, a: `A small load has fewer items to spread around the drum, so one heavy piece throws it off balance easily. Adding a few towels to even it out usually helps. If it shakes badly with every load size, the suspension needs checking.` },
      { q: `Are worn bearings worth replacing?`, a: `On many machines, yes, especially newer or better-quality ones where the tub can be split. On machines with a sealed tub the whole tub assembly is needed, which costs more and can tip the balance towards a new machine. The technician gives you the figures so you can decide.` },
      { q: `Why does my new washing machine shake so violently?`, a: `The transit bolts that lock the tub for delivery are probably still in, or the machine isn't level. Running it with the bolts in can damage the suspension and bearings quickly, so stop using it until they're out and the feet are adjusted.` },
      { q: `What is the rattling sound during the wash?`, a: `Usually a coin, button, hair clip or underwire that has worked its way between the drum and the outer tub. It may come and go as the object moves around. A technician can usually remove it without a major strip-down.` },
      { q: `Is it normal for my washing machine to move during the spin?`, a: `A little vibration is normal, but the machine shouldn't walk across the floor. If it moves, check the load, the levelling feet and the lock nuts. If it still moves with a balanced load on a level floor, the shock absorbers or springs are likely worn.` },
      { q: `Why does my machine squeal when the spin starts?`, a: `On belt-driven machines, a worn or loose belt can squeal as it slips on the pulley. A failing bearing can also squeal before it starts to rumble. Either way, have it checked before the belt breaks or the bearing wears further.` },
      { q: `My machine is upstairs and the whole floor shakes. What can help?`, a: `Start with the basics: a balanced load, a level machine with its lock nuts tight, and space all round it. Suspended floors move more than concrete slabs, so a slightly lower spin speed can help too. If it's worse than it used to be, the suspension may be worn.` },
    ],
  },
  {
    slug: 'washing-machine-showing-error-code',
    name: 'Showing an error code',
    serviceSlug: 'front-loader-repairs',
    title: 'Washing Machine Showing Error Code? Next Steps | ProServ',
    description: `Washing machine showing an error code? How codes work, the main code families, safe first steps and our brand guides. Call ${site.phone.display}.`,
    h1: 'Washing machine showing an error code',
    primaryKeyword: 'washing machine showing error code',
    summary: 'Letters, numbers or flashing lights on the display.',
    intro: `<p>A washing machine showing an error code has stopped because a self-check found something wrong. The code points to the system involved, such as the drain, water supply or door, but not always to the failed part. Here's how to read it and what to do next.</p>`,
    body: `
<h2>How error codes work</h2>
<p>A modern washing machine checks itself all the time. Sensors report the water level, the water temperature, the motor speed and whether the door is locked, and the control board times each stage of the cycle. When a reading falls outside its limits, say the water hasn't drained in the time allowed, the board stops the programme and shows a code. Many machines also keep recent codes in a memory a technician can read.</p>
<p>Each manufacturer sets its own codes, and they can change between models and generations of the same brand. Some aren't faults at all but status messages, such as a reminder that the child lock is on or that the power was interrupted. That's why the model number matters as much as the code.</p>

<h2>The main families of codes</h2>
<table>
  <thead><tr><th>Code family</th><th>What the machine detected</th><th>Where to start</th></tr></thead>
  <tbody>
    <tr><td>Water supply</td><td>The drum didn't fill to the right level in time</td><td>The tap, the inlet hose and its filter, and your water pressure</td></tr>
    <tr><td>Drain</td><td>The water didn't pump out in time</td><td>The pump filter, the drain hose and the standpipe</td></tr>
    <tr><td>Door or lock</td><td>The door isn't confirmed shut and locked</td><td>Close the door firmly and check nothing is caught in the seal</td></tr>
    <tr><td>Imbalance</td><td>The load is too uneven to spin safely</td><td>Rearrange the load and check the machine is level</td></tr>
    <tr><td>Foam</td><td>Too many suds in the drum</td><td>Use less detergent, or the right type</td></tr>
    <tr><td>Motor</td><td>The drum isn't turning as expected</td><td>Take out some washing if the drum is packed, then call a technician</td></tr>
    <tr><td>Heating</td><td>The water isn't heating, or the temperature sensor reads wrong</td><td>Nothing for you to check: it's electrical</td></tr>
    <tr><td>Communication</td><td>The boards inside the machine can't talk to each other</td><td>Switch off at the wall for a few minutes, and call a technician if it returns</td></tr>
  </tbody>
</table>
<p>Some machines add codes for leaks and overflows. Treat those as urgent: switch off at the wall (or at the DB board if the plug or socket is wet or you'd have to stand in water), close the tap and call a technician.</p>

<h2>What each family usually means</h2>
<h3>Water supply and drain codes</h3>
<p>These often have a simple cause you can check yourself. Samsung's 4C is a widely documented water supply code. On the drain side, LG's OE, Samsung's 5C and Bosch's E18 all point to water that isn't pumping away. Our guides to a <a href="/problems/washing-machine-not-filling-with-water/">washing machine not filling with water</a> and a <a href="/problems/washing-machine-not-draining/">washing machine not draining</a> walk you through the checks.</p>
<h3>Door, imbalance and foam codes</h3>
<p>These usually come down to how the machine is being used, so they're worth a careful look before you call. A door code can be as simple as a sock caught in the seal. Imbalance codes often clear when you spread the load or take out a single heavy item, and foam codes when you cut the dose or switch to a detergent made for automatic machines.</p>
<p>If they keep coming back, see <a href="/problems/washing-machine-door-wont-open/">washing machine door won't open or lock</a> or <a href="/problems/washing-machine-not-spinning/">washing machine not spinning</a>.</p>
<h3>Motor, heating and communication codes</h3>
<p>These point to electrical parts: the motor and its speed sensor, the heating element and temperature sensor, the wiring and the boards. There's nothing safe for an owner to test here, so note the code, and if it comes back after one restart at the wall, leave the machine off and book a technician. If a heating fault also trips the earth leakage, the machine must stay off until it's been checked.</p>

<h2>Brand error code guides</h2>
<p>We've written guides to the common codes on four brands found in many Gauteng homes:</p>
<ul>
  <li><a href="${errorCodeUrl('lg')}">LG washing machine error codes</a></li>
  <li><a href="${errorCodeUrl('samsung')}">Samsung washing machine error codes</a></li>
  <li><a href="${errorCodeUrl('bosch')}">Bosch washing machine error codes</a></li>
  <li><a href="${errorCodeUrl('defy')}">Defy washing machine error codes</a></li>
</ul>
<p>For other makes, start with your manual and our brand pages for <a href="${brandUrl('whirlpool')}">Whirlpool</a>, <a href="${brandUrl('hisense')}">Hisense</a>, <a href="${brandUrl('aeg')}">AEG</a>, <a href="${brandUrl('siemens')}">Siemens</a>, <a href="${brandUrl('miele')}">Miele</a>, <a href="${brandUrl('smeg')}">Smeg</a> and <a href="${brandUrl('speed-queen')}">Speed Queen</a>, or send us the code with your model number.</p>

<h2>Flashing lights instead of a code</h2>
<p>Machines without a digital display show faults with a pattern of flashing lights, or by lighting up an unusual combination of programme or option lights. The manual explains the pattern for your model. Count the flashes, note which lights are on, or take a short video, which is easier than describing it.</p>

<h2>Find your model number</h2>
<p>The model number is on a rating label. On a front loader, look around the door opening, behind the filter flap or on the back; on a top loader, look under the lid or on the back. Your manual shows exactly where. The model number tells you, and us, exactly which code list applies. A photo of the label saves typing out a long string of letters and numbers.</p>

<h2>Safe first steps</h2>
<div class="callout callout-safety"><p><strong>Safety first:</strong> only do the checks that match the code's family, and nothing that involves the inside of the machine. Don't open panels, test parts or try the service and test modes described online, which are designed for technicians. Never keep clearing a leak, overflow or heating code and carrying on.</p></div>
<ol class="steps">
  <li><strong>Record it.</strong> Photograph the code and note what the machine was doing when it stopped.</li>
  <li><strong>Look it up.</strong> Check your manual or our brand guides for what it means on your model.</li>
  <li><strong>Do the simple checks</strong> for that family from the table above: the tap, the hoses, the filter, the door, the load or the detergent.</li>
  <li><strong>Clear it once, unless it's a leak or overflow code.</strong> Switch off at the wall for a few minutes, then switch on again. A one-off glitch, often after a power cut, may not return. With a leak or overflow code, switch off at the wall (or at the DB board if the plug or socket is wet or you'd have to stand in water), close the tap and call a technician instead.</li>
  <li><strong>Test with a short programme.</strong> If the same code comes back, stop using the machine and book a technician.</li>
</ol>

<h2>Clearing a code versus fixing it</h2>
<p>Switching off at the wall clears the display, not the cause. If a drain code keeps returning, the pump is struggling every time you run the machine. If a heating code returns, your washing isn't getting the hot wash you chose, and some heating faults go on to trip the power. A code that comes back is the machine telling you, accurately, that something needs fixing.</p>

<h2>What the technician does with it</h2>
<p>To a technician, the code is the starting point, not the answer. A drain code, for example, could be a blocked filter, a sock in the sump hose, a failed pump, a faulty level sensor or a board that isn't switching the pump on. The technician reads the stored fault history and runs the built-in test programme where the machine has them, then tests the parts in that family until the faulty one is confirmed. Only then do you get a quote.</p>
<p>That's also why the time and cost vary for the same code. Clearing a blockage or realigning a door is quick, a pump, inlet valve or door lock is normally fitted on the same visit when the part is available, and motor and board faults take longer. Our <a href="/washing-machine-repair-cost/">repair cost guide</a> covers the factors that set the price.</p>

<h2>Book a repair</h2>
<p>When you get in touch, send the code, the model number and a photo of the display on WhatsApp, or include them in the <a href="/contact/">online booking form</a>. It helps the technician know what to expect. Code faults are handled under our <a href="/services/front-loader-repairs/">front loader repairs</a> and <a href="/services/top-loader-repairs/">top loader repairs</a>.</p>`,
    faqs: [
      { q: `Can I clear a washing machine error code myself?`, a: `Often, yes: switching off at the wall for a few minutes clears many codes from the display. Whether it stays clear depends on the cause. If the same code returns after the simple checks, there's a real fault to fix.` },
      { q: `My machine flashes lights instead of showing a code. What does that mean?`, a: `Machines without a digital display use patterns of flashing lights to show faults, and the manual lists what each pattern means. Count the flashes or take a short video. Send it to us with the model number when you book.` },
      { q: `Does the error code tell you exactly which part is broken?`, a: `Not usually. It tells you which system has a problem, such as the drain, and the cause could be a blockage, a pump, a sensor or the board. Testing confirms which one, and the quote is based on that.` },
      { q: `Are error codes the same on every machine of one brand?`, a: `No. Manufacturers change their codes between ranges and over the years, and a code on a front loader can mean something different on a top loader of the same brand. Always check it against your model number.` },
      { q: `Is it safe to keep using my machine while it shows a code?`, a: `It depends on the code. An imbalance or foam code is usually safe to sort out yourself, and a heating or motor code may clear after one restart at the wall, but if it comes back, leave the machine off until it's checked. With a leak or overflow code, switch off at the wall, or at the DB board if the plug, the socket or the floor around them is wet, then close the tap and call straight away. If the machine trips the power, leave it off and call a technician.` },
      { q: `Why did an error code appear after load shedding?`, a: `A cycle cut off by a power failure can leave water in the drum and an unfinished programme, and some machines show a code or a power-failure notice when the power returns. Switch off at the wall for a few minutes and restart. If a different code keeps appearing, the surge may have damaged something.` },
      { q: `My code isn't in any of your guides. What now?`, a: `Check the manual for your model first, because it's the most reliable source. If you don't have it, send us the code, the brand and the model number when you get in touch. The technician can then check it against your exact model.` },
      { q: `Can a technician read old error codes from my machine?`, a: `On many modern machines, yes. They store recent fault codes, and a technician can call them up in a service mode, which helps when a fault comes and goes. Older and simpler machines don't keep a history, so it helps to note the code yourself.` },
    ],
  },
  {
    slug: 'washing-machine-not-filling-with-water',
    name: 'Not filling with water',
    serviceSlug: 'washing-machine-parts-replacement',
    title: 'Washing Machine Not Filling With Water? | ProServ',
    description: `Washing machine not filling with water or filling slowly? Check the tap, hose, filter and pressure safely, then call ProServ on ${site.phone.display}.`,
    h1: 'Washing machine not filling with water',
    primaryKeyword: 'washing machine not filling with water',
    summary: 'The machine hums or clicks but no water comes in, or it fills very slowly.',
    intro: `<p>A washing machine not filling with water usually has a supply problem: a closed tap, low pressure, a kinked hose or a blocked inlet filter. If water reaches the machine but doesn't go in, the inlet valve, door lock or water level sensor is the next suspect.</p>`,
    body: `
<h2>How a machine fills</h2>
<p>When you start a programme, a front loader locks its door first. The control board then opens an electric inlet valve at the back, where the hose connects, and water runs through the detergent drawer, picking up the powder or liquid on its way into the drum. A pressure sensor tells the board when the right level is reached, and the valve closes.</p>
<p>Many machines have more than one valve, or a valve with several sections, so water can be sent to different compartments of the drawer. The board also times the fill. If the level isn't reached in the time allowed, most machines stop and show a water supply code (<a href="${errorCodeUrl('samsung')}">Samsung's 4C code</a> is a well-known example), or simply sit and hum.</p>

<h2>Signs it's a filling problem</h2>
<ul>
  <li>The machine hums or clicks after you press Start, but you can't hear water running in.</li>
  <li>It fills, but so slowly that the cycle takes far longer than usual.</li>
  <li>Detergent is left in the drawer, because not enough water ran through it.</li>
  <li>The washing comes out dry in places, or barely damp.</li>
  <li>A water supply code appears, or the programme stops early.</li>
  <li>Only some compartments of the drawer empty: the softener stays behind, for example.</li>
</ul>

<h2>Likely causes</h2>
<h3>Supply interruptions and low pressure</h3>
<p>Planned maintenance, burst pipes and supply cuts all affect water pressure, and a machine that can't fill in its allowed time gives up. If the taps in the house are weak too, the machine isn't the problem. Your manual lists the minimum water pressure your machine needs.</p>
<h3>Tanks, booster pumps and boreholes</h3>
<p>Homes that run from a backup tank, a booster pump or a borehole depend on the pump for pressure. If the pump is off, has lost power or is struggling, the machine won't fill properly. This catches people out when the washing machine runs on backup power during load shedding but the pump doesn't. Borehole water can also carry sand that blocks the inlet filter.</p>
<h3>A closed or partly closed tap</h3>
<p>The washing machine tap is easily knocked half-closed when things are stored under the counter or the machine is pulled out. An old tap can also seize or block inside, and replacing it is a plumber's job.</p>
<h3>A kinked or squashed inlet hose</h3>
<p>If the machine was pushed back hard against the wall, the inlet hose can be folded or pinched behind it. Old rubber hoses also stiffen with age and kink more easily.</p>
<h3>A blocked inlet filter</h3>
<p>A small mesh filter sits where the hose connects to the machine, and some hoses have another at the tap end. It catches sand, grit and rust, especially after pipe repairs or an outage, when the water comes back dirty. Once it clogs, water only trickles in.</p>
<h3>A faulty inlet valve</h3>
<p>The inlet valve is electrically operated. If its coil fails or the valve sticks, no water comes in even with good pressure, and if one section fails, water only reaches some compartments of the drawer. A valve that buzzes without letting water through is a typical sign.</p>
<h3>Door lock, level sensor or control board</h3>
<p>A front loader won't open the valve until the door lock is confirmed. If the water level sensor or its pressure hose is faulty, the machine can think it's already full and never start filling, and the board that switches the valve can fail too.</p>

<h2>Safe checks you can do</h2>
<div class="callout callout-safety"><p><strong>Safety first:</strong> close the washing machine tap, then switch off at the wall and unplug before you disconnect a hose or touch the filter. Expect a little water when you undo the hose, so keep a towel handy. Don't remove the back panel or test the valve yourself.</p></div>
<ol class="steps">
  <li><strong>Check your water.</strong> Open the nearest tap. If the pressure is weak or the water is off, wait for the supply to return. If you're on a tank or borehole, make sure the pump is running.</li>
  <li><strong>Open the machine's tap fully.</strong> If your machine takes hot water as well as cold, check both taps.</li>
  <li><strong>Straighten the hose.</strong> Ease the machine forward and make sure the inlet hose isn't kinked or trapped.</li>
  <li><strong>Clean the inlet filter as your manual describes.</strong> With the tap closed and the machine unplugged, unscrew the hose from the back of the machine, rinse the mesh filter under a tap and refit the hose hand-tight. Open the tap and check for drips.</li>
  <li><strong>Close the door firmly</strong> and start the programme again.</li>
  <li><strong>Note any code</strong> and check what it means in your manual or our <a href="/error-codes/">washing machine error code guides</a>.</li>
</ol>

<h2>Overfilling, or draining while filling</h2>
<p>The opposite fault is more urgent. If water keeps coming in after the drum is full, rises up the door glass, or appears in the drum when the machine is off, the inlet valve may be stuck open or the level sensor faulty. Switch off at the wall, close the tap and call a technician.</p>
<p>A machine that fills and drains at the same time, so it never seems to fill, is usually siphoning. That happens when the drain hose is pushed too far down the standpipe, taped in so no air can get in, or sits too low, so the water is pulled straight out again. The hose needs to sit loosely at the height and depth your manual shows, and our <a href="/services/washing-machine-installation/">washing machine installation</a> service can set it up correctly.</p>

<h2>When to call a technician</h2>
<p>Book a visit if the supply is good, the tap is open, the hose and filter are clear and the machine still won't fill. The same goes if the valve buzzes but no water comes in, only some compartments of the drawer empty, the machine overfills or the code keeps coming back. If the earth leakage trips at any point, leave the machine off.</p>

<h2>What the technician checks and fixes</h2>
<p>The technician checks the flow and pressure reaching the machine, then the hose and filters. They test the inlet valve and the signal the board sends to it, check that the door lock confirms, and test the water level sensor and its hose.</p>
<ul>
  <li><strong>Faulty inlet valve:</strong> replaced. It's one of the more routine <a href="/services/washing-machine-parts-replacement/">washing machine parts replacements</a>.</li>
  <li><strong>Blocked filter or damaged hose:</strong> cleaned or replaced.</li>
  <li><strong>Level sensor or door lock:</strong> replaced and tested through a full fill.</li>
  <li><strong>Board fault:</strong> repaired or replaced once you've accepted the quote.</li>
  <li><strong>A supply or tap problem:</strong> explained clearly, so you know when a plumber is the right person for it.</li>
</ul>
<p>We sort out filling faults on all major brands, including <a href="${brandUrl('hisense')}">Hisense</a>, <a href="${brandUrl('samsung')}">Samsung</a>, <a href="${brandUrl('smeg')}">Smeg</a> and <a href="${brandUrl('miele')}">Miele</a>.</p>

<h2>How long it usually takes</h2>
<p>Most filling faults are found quickly, and a filter clean or a hose fix happens on the spot. An inlet valve is usually fitted on the same visit when the part is available; when one has to be ordered, the technician tells you before you say yes to the repair. Our guide to <a href="/washing-machine-repair-cost/">the cost of a repair</a> covers what the price depends on.</p>

<h2>Preventing filling problems</h2>
<ul class="checklist">
  <li>Keep the tap fully open while the machine is in use, and close it when you go away.</li>
  <li>After a water outage or pipe repairs, run a cold tap until the water is clear before you start a wash, so the grit doesn't end up in the filter.</li>
  <li>Clean the inlet filter once or twice a year, and more often on borehole water.</li>
  <li>Replace inlet hoses that are cracked, bulging or stiff.</li>
  <li>Leave a little space behind the machine so the hose can't kink.</li>
</ul>

<h2>Get the water flowing again</h2>
<p>Still no water going in? <a href="/contact/">Get in touch to book a technician</a>, who will diagnose it at your home and quote before any work starts. There's a ${f.calloutFee} call-out fee, ${f.calloutCondition}. If water is getting in but not out, see <a href="/problems/washing-machine-not-draining/">washing machine not draining</a> instead.</p>`,
    faqs: [
      { q: `Why does my washing machine fill so slowly?`, a: `Low water pressure and a partly blocked inlet filter are the usual causes, along with a tap that isn't fully open. A weak or sticking inlet valve can do it too. If the house pressure is normal and the filter is clean, have the valve tested.` },
      { q: `Can I use my washing machine during a water outage?`, a: `Not reliably. With no water or very low pressure, most machines stop partway through with a water supply code. Wait until the supply is back to normal before you start a wash.` },
      { q: `Will a booster pump help with low pressure?`, a: `If your home has low pressure most of the time, a pressure pump can help, but that's a plumbing job rather than a washing machine repair. A technician can first confirm whether the machine itself has a fault. That way you don't pay for a pump when the problem is a blocked filter.` },
      { q: `Why is detergent left in the drawer after a wash?`, a: `Not enough water is flowing through the drawer. Low pressure, a partly blocked inlet filter, a clogged drawer or a failing section of the inlet valve can all cause it. Clean the drawer and the inlet filter first, then have the valve checked if it carries on.` },
      { q: `Why does my machine buzz but no water comes in?`, a: `The buzz is often the inlet valve being switched on. If no water follows, either nothing is reaching the valve, because of a closed tap, no supply or a blocked filter, or the valve has stuck. Check the tap and the filter, then call a technician.` },
      { q: `Why won't my machine take water after a plumber worked on the pipes?`, a: `Grit loosened by the work often ends up in the machine's inlet filter, and taps are sometimes left closed afterwards. Check that the tap is fully open and clean the filter as your manual describes. If water still won't go in, have the valve checked.` },
      { q: `Should I close the washing machine tap after every wash?`, a: `It's a good habit if the tap is easy to reach, because it takes the pressure off the hose and valve between washes. At the very least, close it when you go away for a few days. An old tap that's stiff to turn should be replaced by a plumber.` },
      { q: `Does a water supply code mean my inlet valve is broken?`, a: `Not necessarily. The code only says the machine didn't fill in time, and a closed tap, low pressure or a blocked filter is more likely than a failed valve. Do the simple checks first, and call if the code comes back.` },
    ],
  },
];

export const problemUrl = (slug: string) => `/problems/${slug}/`;
