import type { ContentPage } from './types';
import { errorCodeUrl } from './site';

export interface Problem extends ContentPage {
  /** Matching service page slug (problem → service internal link). */
  serviceSlug: string;
}

const safety = `<p class="callout"><strong>Safety note:</strong> before checking anything, switch the machine off and unplug it. Don't open panels, test wiring or work on anything electrical. Water and electricity are a dangerous mix, and that work is for a qualified technician.</p>`;

export const problems: Problem[] = [
  {
    slug: 'washing-machine-not-draining',
    name: 'Not draining',
    serviceSlug: 'washing-machine-parts-replacement',
    title: 'Washing Machine Not Draining? Causes & Fix | ProServ',
    description: 'Washing machine not draining? Usual causes are a blocked filter, hose or failed pump. Get a technician at your door: 079 895 0496.',
    h1: 'Washing machine not draining',
    primaryKeyword: 'washing machine not draining',
    summary: 'Water left in the drum at the end of the cycle.',
    intro: `<p>A washing machine not draining is one of the most common faults we're called out for, and one of the most fixable. You open the door (or try to) and there's a drum full of grey water, or the cycle stops before the spin. In most cases something is blocking the water's way out, or the pump that pushes it out has stopped working.</p>`,
    body: `
<h2>Likely causes</h2>
<h3>1. A blocked pump filter</h3>
<p>Front loaders have a small filter behind a flap at the bottom front of the machine. It catches lint, coins, buttons and hair clips before they reach the pump. When it's packed, water can't get through. This is the cause more often than anything else.</p>
<h3>2. A kinked or blocked drain hose</h3>
<p>If the machine has been pushed back against the wall, the hose behind it can fold flat. Hoses also clog with lint and detergent sludge over time, especially where they join the sink trap.</p>
<h3>3. A blocked drain or standpipe</h3>
<p>Sometimes the machine is fine and the problem is the household drain. If the sink next to the machine is also slow, or water comes back up the standpipe, the blockage is in the plumbing.</p>
<h3>4. A failed drain pump</h3>
<p>Pumps wear out, and an object that gets past the filter can jam or break the impeller. You may hear a hum with no water moving, or hear nothing at all. A pump replacement is a routine repair.</p>
<h3>5. A pressure switch or control fault</h3>
<p>Less often, the machine doesn't "know" it still has water inside, or the control board isn't telling the pump to run. These need testing with proper equipment.</p>

<h2>What you can safely check</h2>
${safety}
<ul>
  <li>Make sure the drain hose behind the machine isn't kinked or squashed.</li>
  <li>Check whether the sink or standpipe next to the machine is draining normally.</li>
  <li>If you're comfortable doing so, put towels and a shallow tray down and open the pump filter flap. Expect a lot of water. Unscrew the filter slowly, clean it and refit it firmly.</li>
  <li>Look at the display. Many machines show a drain code, such as <a href="${errorCodeUrl('lg')}">LG OE</a>, <a href="${errorCodeUrl('samsung')}">Samsung 5C/5E</a> or <a href="${errorCodeUrl('bosch')}">Bosch E18</a>.</li>
</ul>

<h2>When to call us</h2>
<p>Call if the filter and hose are clear and it still won't drain, if the pump hums or is silent, if there's a burning smell, or if you'd rather not deal with a drum full of water. Don't force the door open: most machines keep it locked while water is inside, and breaking the lock adds to the repair.</p>
<p>Our technician will drain the machine safely, find the cause and quote before fixing it. Pumps are often on the van, so it's usually a one-visit job. Read more about <a href="/services/washing-machine-parts-replacement/">pump and parts replacement</a>, or <a href="/contact/">book a repair</a>.</p>`,
    faqs: [
      { q: 'Can I still use my washing machine if it is not draining?', a: 'No. Running more cycles can overheat the pump and may cause a leak. Switch it off and get it checked.' },
      { q: 'How much does it cost to fix a washing machine that will not drain?', a: 'If it is a blockage, it is usually just the call-out and labour. A new pump costs more. See our washing machine repair cost page for what affects the price.' },
      { q: 'Why does my machine drain slowly but eventually empty?', a: 'A partly blocked filter, hose or household drain is the usual reason. A weak pump can also do it.' },
    ],
  },
  {
    slug: 'washing-machine-not-spinning',
    name: 'Not spinning',
    serviceSlug: 'front-loader-repairs',
    title: 'Washing Machine Not Spinning? Likely Causes | ProServ',
    description: 'Washing machine not spinning or clothes still soaking wet? Find the likely cause, then call 079 895 0496 for a technician at your door.',
    h1: 'Washing machine not spinning',
    primaryKeyword: 'washing machine not spinning',
    summary: 'Clothes come out soaking wet, or the drum won\'t turn at all.',
    intro: `<p>A washing machine not spinning leaves you with soaking wet washing and a drying line that drips for a day. Sometimes the drum doesn't turn at all; sometimes it washes fine but won't speed up for the final spin. The cause can be as simple as an unbalanced load or as involved as a motor fault, and the symptoms usually point us in the right direction.</p>`,
    body: `
<h2>Likely causes</h2>
<h3>Unbalanced load</h3>
<p>Modern machines check the balance before spinning. A single heavy item like a bath mat, a duvet, or a pair of jeans bunched with towels can stop the spin to protect the machine. Many machines show a code for this, such as UE or UB.</p>
<h3>Water not draining</h3>
<p>A machine won't spin with water still in the drum. If there's water left at the end, start with <a href="/problems/washing-machine-not-draining/">washing machine not draining</a>.</p>
<h3>Worn carbon brushes</h3>
<p>On machines with brushed motors, the brushes wear down over years. The drum may turn slowly, jerk, or stop altogether, sometimes with a burning smell.</p>
<h3>Broken or slipping drive belt</h3>
<p>Belt-driven machines need the belt to turn the drum. If it has snapped or come off, the motor runs but the drum stays still. On top loaders, a worn drive coupling or clutch gives the same result.</p>
<h3>Motor, tacho or inverter fault</h3>
<p>The motor, the speed sensor (tacho) or the motor control electronics can fail. These need electrical testing.</p>
<h3>Door lock or lid switch fault</h3>
<p>The machine won't spin unless it can confirm the door or lid is locked. A faulty lock can let it fill and wash but block the spin.</p>

<h2>What you can safely check</h2>
${safety}
<ul>
  <li>Redistribute the load, take out one or two heavy items, and try a "spin only" cycle.</li>
  <li>Check that you haven't chosen a "no spin" or "rinse hold" option.</li>
  <li>Make sure the water has drained and the pump filter is clear.</li>
  <li>Note any code on the display. Our <a href="/error-codes/">error code guides</a> can help.</li>
</ul>

<h2>When to call us</h2>
<p>If a balanced load still won't spin, the drum won't turn by hand when the machine is off, or there's a burning smell, it's time for a technician. Brushes, belts, door locks and couplings are routine repairs. Motor faults take a little longer to diagnose. See <a href="/services/front-loader-repairs/">front loader repairs</a> and <a href="/services/top-loader-repairs/">top loader repairs</a>, or <a href="/contact/">book a visit</a>.</p>`,
    faqs: [
      { q: 'Why does my machine spin with some loads but not others?', a: 'It is almost always balance. Small loads with one heavy item are the hardest for the machine to balance. Mixing large and small items helps.' },
      { q: 'Is it the motor if my washing machine is not spinning?', a: 'Not usually. Balance, drainage, brushes, belts and door locks are far more common causes than a failed motor.' },
      { q: 'Can a power surge stop my machine spinning?', a: 'Yes. Surges can damage the motor control electronics. Load shedding switch-backs are a common trigger in Gauteng.' },
    ],
  },
  {
    slug: 'washing-machine-leaking',
    name: 'Leaking',
    serviceSlug: 'washing-machine-parts-replacement',
    title: 'Washing Machine Leaking? Find the Cause | ProServ',
    description: 'Washing machine leaking from the front, back or bottom? Common causes and when to call. Fast help in Gauteng on 079 895 0496.',
    h1: 'Washing machine leaking: where it comes from and why',
    primaryKeyword: 'washing machine leaking',
    summary: 'Puddles under the machine, at the door or behind it.',
    intro: `<p>A washing machine leaking onto the floor needs attention quickly, both for your floors and because water near electrics is dangerous. The good news is that where the water appears tells us a lot about the cause. Before anything else, switch the machine off at the wall and turn off its tap.</p>`,
    body: `
<h2>Leaking from the front, under the door</h2>
<p>On a front loader this usually means the <strong>door seal</strong>. Look for splits, holes or a buildup of fluff and detergent in the folds. A sock or underwire caught between the seal and the door glass can also hold the seal open. Too much detergent can push suds out past the seal too.</p>

<h2>Leaking from the detergent drawer</h2>
<p>A blocked drawer, or water pressure that's higher than usual, can make water spill out of the drawer area. Too much powder caking in the drawer is a common reason.</p>

<h2>Water under the machine</h2>
<ul>
  <li><strong>Pump filter not tightened</strong> after cleaning, or its seal is worn.</li>
  <li><strong>Pump or sump hose</strong> leaking inside the machine.</li>
  <li><strong>Tub seal and bearings.</strong> Water coming from under the middle of the machine, sometimes with a rumbling noise, can mean the drum shaft seal has failed. See <a href="/blog/signs-washing-machine-bearings-are-worn/">signs of worn bearings</a>.</li>
  <li><strong>Cracked outer tub</strong>, which can happen after an object like an underwire gets trapped between the drum and tub.</li>
</ul>

<h2>Leaking at the back</h2>
<p>Check the <strong>inlet hose</strong> where it screws onto the tap and onto the machine. Rubber washers perish, and hoses crack with age. A drain hose that's slipped out of the standpipe will also flood the floor behind the machine when it drains.</p>

<h2>What you can safely check</h2>
${safety}
<ul>
  <li>Dry the floor, then run a short rinse while watching where water first appears.</li>
  <li>Hand-tighten the inlet hose connections at the tap and the machine.</li>
  <li>Make sure the drain hose is securely in the standpipe or connected to the sink trap.</li>
  <li>Check and tighten the pump filter cap.</li>
  <li>Inspect the door seal folds for holes or trapped items.</li>
</ul>

<h2>When to call us</h2>
<p>Call if the leak is coming from inside the machine, if the door seal is damaged, or if water has reached the plug or wall socket. We'll trace the leak and quote before replacing anything. Door seals, hoses and pumps are standard <a href="/services/washing-machine-parts-replacement/">parts replacements</a>. If your machine was recently installed or moved, our <a href="/services/washing-machine-installation/">installation service</a> can check the set-up. <a href="/contact/">Book a technician</a>.</p>`,
    faqs: [
      { q: 'Is a leaking washing machine dangerous?', a: 'It can be. Water near the plug, socket or wiring is an electrical risk. Switch off at the wall before touching anything and keep children away from the area.' },
      { q: 'Can a door seal be replaced?', a: 'Yes. Door seals are a common repair on front loaders. Some models need the front panel removed, so it is a technician job.' },
      { q: 'Why does it only leak during the spin?', a: 'Spin leaks often point to the tub seal, a loose hose inside the machine, or the drain hose coming out of the standpipe from the force of the water.' },
    ],
  },
  {
    slug: 'washing-machine-wont-turn-on',
    name: 'Won\'t switch on',
    serviceSlug: 'washing-machine-parts-replacement',
    title: 'Washing Machine Won\'t Turn On? What to Do | ProServ',
    description: 'Washing machine won\'t turn on? Check the simple things first, then call 079 895 0496 for a technician to test the board and power safely.',
    h1: 'Washing machine won\'t turn on',
    primaryKeyword: 'washing machine won\'t turn on',
    summary: 'No lights, no display, no response from the buttons.',
    intro: `<p>When a washing machine won't turn on there's no display, no lights and no sound when you press the buttons. It's frustrating, but it doesn't always mean an expensive repair. In Gauteng, power interruptions and surges are a common trigger, and some faults are simple once a technician has tested the supply and the machine's electronics.</p>`,
    body: `
<h2>Likely causes</h2>
<h3>No power reaching the machine</h3>
<p>The wall socket, the switch, a tripped circuit breaker or earth leakage, or a faulty extension lead can all cut the supply. Machines plugged into multi-plugs are especially prone to this.</p>
<h3>Mains filter or internal fuse</h3>
<p>Many machines have a suppression (mains) filter where the cable enters. A surge can blow it, and the machine goes completely dead.</p>
<h3>Control board (PCB) fault</h3>
<p>Surges, especially when power comes back on after load shedding, can damage the control board or its power supply. Some boards can be repaired; others need replacing. Our article on <a href="/blog/protect-washing-machine-from-load-shedding/">protecting your machine from load shedding</a> explains how to cut the risk.</p>
<h3>Power button or display board</h3>
<p>On some models the power button sits on a separate board, and the button or its connector fails.</p>
<h3>Door lock</h3>
<p>Some machines light up but won't start because the door lock can't confirm the door is shut. If you see lights but nothing happens, read <a href="/problems/washing-machine-door-wont-open/">washing machine door won't open or lock</a>.</p>

<h2>What you can safely check</h2>
${safety}
<ul>
  <li>Plug something else, like a kettle, into the same socket to see if it works.</li>
  <li>Check your distribution board for a tripped breaker or earth leakage. If it trips again when the machine is plugged in, leave the machine unplugged and call us: that's a fault inside the machine.</li>
  <li>Plug the machine directly into the wall rather than a multi-plug or extension.</li>
  <li>Check that the child lock isn't on. Many machines show a key or lock symbol.</li>
</ul>
<p>Please don't open the machine or test wiring yourself.</p>

<h2>When to call us</h2>
<p>If the socket works and the machine is still dead, or if it trips the electricity, it needs a technician. We'll test the supply, filter, board and controls, and quote before replacing anything. See <a href="/services/washing-machine-parts-replacement/">PCB and parts replacement</a> or <a href="/contact/">book a repair</a>.</p>`,
    faqs: [
      { q: 'My washing machine stopped working after load shedding. Can it be fixed?', a: 'Often, yes. Surges commonly damage the mains filter or the control board power supply. A technician can test which part has failed.' },
      { q: 'Why does my washing machine trip the electricity?', a: 'Usually a fault such as a failing heating element, a damaged cable, or water reaching an electrical part. Leave it unplugged and get it tested.' },
      { q: 'Is a control board expensive?', a: 'It depends on the brand and model. Board repairs are sometimes possible at a lower cost than a new board. You will get a quote before any work.' },
    ],
  },
  {
    slug: 'washing-machine-door-wont-open',
    name: 'Door won\'t open or lock',
    serviceSlug: 'front-loader-repairs',
    title: 'Washing Machine Door Won\'t Open or Lock | ProServ',
    description: 'Washing machine door won\'t open, or won\'t lock so the cycle can\'t start? Causes and what to do. Technician help on 079 895 0496.',
    h1: 'Washing machine door won\'t open (or won\'t lock)',
    primaryKeyword: 'washing machine door won\'t open',
    summary: 'Door stuck shut after a wash, or the machine won\'t start because it won\'t lock.',
    intro: `<p>A washing machine door that won't open usually happens at the worst moment: the clothes are washed and you need them out. The opposite happens too: the door won't lock, so the machine won't start. Both problems are linked to the door lock (interlock), a small safety device that stops the door opening while there's water inside or the drum is turning.</p>`,
    body: `
<h2>Why the door won't open</h2>
<ul>
  <li><strong>The machine is still locked for safety.</strong> Most front loaders keep the door locked for a minute or two after the cycle ends. Wait a few minutes before assuming there's a fault.</li>
  <li><strong>Water is still in the drum.</strong> If the machine hasn't drained, it will stay locked. See <a href="/problems/washing-machine-not-draining/">washing machine not draining</a>.</li>
  <li><strong>Child lock is on.</strong> This locks the buttons and, on some models, the door.</li>
  <li><strong>Faulty door lock or broken handle.</strong> The lock mechanism, the handle or the catch on the door can break.</li>
  <li><strong>Power was cut mid-cycle.</strong> After load shedding, some machines stay locked until they're powered up and complete or cancel the cycle.</li>
</ul>

<h2>Why the door won't lock</h2>
<p>If the machine lights up but won't start, or shows a door code, the lock may not be engaging. The door catch can be bent or broken, the lock can fail, or the door may be dropping on worn hinges so it doesn't line up. Laundry caught in the seal can stop the door closing fully.</p>

<h2>What you can safely check</h2>
${safety}
<ul>
  <li>Wait five minutes after the cycle ends and try again.</li>
  <li>Switch off, wait a minute and switch on again, then select "drain" or "spin" to clear any water.</li>
  <li>Check for a key or lock symbol, and turn off the child lock as per your manual.</li>
  <li>Make sure no clothing is caught in the door seal.</li>
</ul>
<p>Avoid pulling hard on the handle or prising the door. It's easy to break the handle or the catch and turn a small repair into a bigger one. Emergency release cords on some models should only be used if the drum is empty of water.</p>

<h2>When to call us</h2>
<p>If the door is still stuck after the drum has drained and you've waited, or the machine won't lock to start a wash, a technician can open it safely and replace the lock or catch. It's usually a quick job. Common codes like <a href="${errorCodeUrl('lg')}">LG dE</a> or <a href="${errorCodeUrl('samsung')}">Samsung DC/dE</a> point to the door circuit. See <a href="/services/front-loader-repairs/">front loader repairs</a> or <a href="/contact/">book now</a>.</p>`,
    faqs: [
      { q: 'How do I open my washing machine door with clothes inside?', a: 'Wait a few minutes, make sure the water has drained, then switch off and on and run a drain or spin cycle. If it is still locked, call a technician rather than forcing it.' },
      { q: 'Is a door lock expensive to replace?', a: 'Door locks are one of the less expensive parts and are often carried on the van, so it is usually a one-visit repair.' },
      { q: 'Why does my machine click but not start?', a: 'The click is usually the door lock trying to engage. If the lock does not confirm, the machine will not start. The lock or the catch may need replacing.' },
    ],
  },
  {
    slug: 'washing-machine-noisy-when-spinning',
    name: 'Noisy or shaking',
    serviceSlug: 'front-loader-repairs',
    title: 'Washing Machine Noisy When Spinning? Causes | ProServ',
    description: 'Washing machine noisy when spinning, banging or shaking? Find the cause before it gets worse. Technician help in Gauteng: 079 895 0496.',
    h1: 'Washing machine noisy when spinning or shaking',
    primaryKeyword: 'washing machine noisy when spinning',
    summary: 'Rumbling, grinding, banging or a machine that walks across the floor.',
    intro: `<p>A washing machine noisy when spinning is telling you something. Different noises point to different causes: a rumble or roar usually means bearings, a bang or thump means the drum is moving too much, and a rattle can be something as simple as a coin stuck in the drum. Catching it early can save the tub, the seal and the cabinet from damage.</p>`,
    body: `
<h2>What the noise might mean</h2>
<h3>Rumbling, roaring or a jet-engine sound</h3>
<p>This is the classic sign of <strong>worn drum bearings</strong>. It gets louder as the drum speeds up. With the machine off and empty, the drum may feel rough or have play when you lift it. Our article on <a href="/blog/signs-washing-machine-bearings-are-worn/">signs your washing machine bearings are worn</a> covers this in detail, and the <a href="/washing-machine-repair-cost/">repair cost page</a> explains bearing replacement pricing.</p>
<h3>Banging, thumping or "walking"</h3>
<ul>
  <li><strong>Unbalanced load</strong>, such as one heavy item.</li>
  <li><strong>Machine not level</strong>, or on an uneven or soft floor.</li>
  <li><strong>Worn shock absorbers or springs</strong> on front loaders, or <strong>suspension rods</strong> on top loaders.</li>
  <li><strong>Transit bolts still in</strong> on a newly installed front loader. This causes violent shaking and damages the machine quickly. See <a href="/services/washing-machine-installation/">washing machine installation</a>.</li>
</ul>
<h3>Rattling or scraping</h3>
<p>Coins, underwires and buttons can get trapped between the drum and the outer tub, or in the pump. A scraping sound on every turn of the drum needs to be looked at before it scratches or cracks the tub.</p>
<h3>Grinding or humming during drain</h3>
<p>A noisy pump, often with something caught in it.</p>

<h2>What you can safely check</h2>
${safety}
<ul>
  <li>Rebalance the load and try again with a mixed load.</li>
  <li>Check the machine is level and all four feet are firmly on the floor.</li>
  <li>If it's newly installed, check the transit bolts have been removed from the back.</li>
  <li>Check pockets and the pump filter for coins and small objects.</li>
</ul>

<h2>When to call us</h2>
<p>Call if the noise is a rumble that gets louder on spin, if the machine keeps banging with a balanced load, or if there's scraping or water under the machine. We'll identify the cause and quote before starting. See <a href="/services/front-loader-repairs/">front loader repairs</a>, <a href="/services/top-loader-repairs/">top loader repairs</a>, or <a href="/contact/">book a visit</a>.</p>`,
    faqs: [
      { q: 'Can I keep using a noisy washing machine?', a: 'If it is a bearing noise, using it causes more damage over time and can make the repair more expensive. It is best to get it checked soon.' },
      { q: 'Why does my machine shake more with small loads?', a: 'Small loads are harder to balance, especially if one item is heavy. Adding a few towels often helps.' },
      { q: 'Are bearings worth replacing?', a: 'On many machines, yes. On some machines with sealed tubs the cost is higher. We will advise you honestly.' },
    ],
  },
  {
    slug: 'washing-machine-showing-error-code',
    name: 'Showing an error code',
    serviceSlug: 'front-loader-repairs',
    title: 'Washing Machine Showing Error Code? Next Steps | ProServ',
    description: 'Washing machine showing an error code? What codes mean, safe first steps and when to call. Brand code guides inside. Call 079 895 0496.',
    h1: 'Washing machine showing an error code',
    primaryKeyword: 'washing machine showing error code',
    summary: 'Letters, numbers or flashing lights on the display.',
    intro: `<p>A washing machine showing an error code is actually being helpful. Modern machines run self-checks during every cycle, and when something is outside normal limits they stop and show a code. The code narrows down where the problem is, such as water supply, drainage, the door, the motor or heating, but it doesn't always say which part has failed. That's where a technician comes in.</p>`,
    body: `
<h2>What error codes usually point to</h2>
<p>Codes are different on every brand, and sometimes on different models of the same brand, but most fall into a few groups:</p>
<ul>
  <li><strong>Water supply</strong>: the machine isn't filling in the expected time. See <a href="/problems/washing-machine-not-filling-with-water/">washing machine not filling with water</a>.</li>
  <li><strong>Drainage</strong>: water isn't leaving in time. See <a href="/problems/washing-machine-not-draining/">washing machine not draining</a>.</li>
  <li><strong>Door or lock</strong>: the door isn't confirmed shut. See <a href="/problems/washing-machine-door-wont-open/">door won't open or lock</a>.</li>
  <li><strong>Unbalanced load</strong>: the machine can't balance for spin.</li>
  <li><strong>Motor or speed sensor</strong>: the drum isn't turning as expected.</li>
  <li><strong>Heating or temperature</strong>: water isn't reaching temperature, or the sensor reads wrong.</li>
  <li><strong>Leak or overflow</strong>: water detected where it shouldn't be.</li>
  <li><strong>Communication or board</strong>: the electronics can't talk to each other.</li>
</ul>

<h2>Brand error code guides</h2>
<p>We've written guides for the brands we see most:</p>
<ul>
  <li><a href="${errorCodeUrl('lg')}">LG washing machine error codes</a> (OE, IE, UE, dE and more)</li>
  <li><a href="${errorCodeUrl('samsung')}">Samsung washing machine error codes</a> (4C, 5C, UB, DC and more)</li>
  <li><a href="${errorCodeUrl('bosch')}">Bosch washing machine error codes</a> (E17, E18, E23 and more)</li>
  <li><a href="${errorCodeUrl('defy')}">Defy washing machine error codes</a></li>
</ul>
<p>Codes vary between models, so always check the manual for your exact model number. It's on a sticker inside the door rim or on the back of the machine.</p>

<h2>Safe first steps when you see a code</h2>
<ol>
  <li>Write down or photograph the code. It saves time when you contact us.</li>
  <li>Switch off at the wall for a few minutes, then switch on and try again. Some codes are one-off glitches, often after a power cut.</li>
  <li>Do the simple checks for that type of code: the tap is open, the drain hose isn't kinked, the door is closed properly, the load is balanced.</li>
  <li>If the code comes back, stop using the machine and call.</li>
</ol>
<p>Please don't open the machine or test electrical parts yourself.</p>

<h2>When to call us</h2>
<p>A code that keeps coming back after the simple checks means a part needs testing. Send us the code and the model on WhatsApp and we'll tell you what it usually means for your machine and book a visit. See <a href="/services/front-loader-repairs/">front loader repairs</a>, <a href="/services/top-loader-repairs/">top loader repairs</a> or <a href="/contact/">contact us</a>.</p>`,
    faqs: [
      { q: 'Can I clear a washing machine error code myself?', a: 'Switching off at the wall for a few minutes clears many one-off codes. If the code returns, there is a real fault that needs fixing.' },
      { q: 'My machine flashes lights instead of a code. What does that mean?', a: 'Machines without a digital display show faults with flashing lights. The pattern is listed in the manual. Send us a short video on WhatsApp and we can help.' },
      { q: 'Does the error code tell you exactly which part is broken?', a: 'Not always. It points to an area, such as drainage. The cause could be a blockage, a pump, a sensor or the board, and testing confirms which.' },
    ],
  },
  {
    slug: 'washing-machine-not-filling-with-water',
    name: 'Not filling with water',
    serviceSlug: 'washing-machine-parts-replacement',
    title: 'Washing Machine Not Filling With Water? | ProServ',
    description: 'Washing machine not filling with water or filling slowly? Check the tap, hose and pressure, then call ProServ on 079 895 0496.',
    h1: 'Washing machine not filling with water',
    primaryKeyword: 'washing machine not filling with water',
    summary: 'The machine hums or clicks but no water comes in, or it fills very slowly.',
    intro: `<p>A washing machine not filling with water will usually sit there humming, or stop after a few minutes with an error. Sometimes it fills, but so slowly that the cycle takes forever. Low water pressure is common in Gauteng during maintenance or supply outages, so it's worth checking the simple things before assuming the machine is at fault.</p>`,
    body: `
<h2>Likely causes</h2>
<h3>Water supply or low pressure</h3>
<p>If the taps in the house are weak, or the municipal supply is interrupted, the machine can't fill in the time it expects. Machines on a JoJo tank or a booster pump can have the same problem if the pump isn't running.</p>
<h3>Tap closed or partly closed</h3>
<p>It sounds obvious, but the washing machine tap is often bumped closed when things are moved under the counter.</p>
<h3>Kinked inlet hose</h3>
<p>The hose behind the machine can fold flat when the machine is pushed back.</p>
<h3>Blocked inlet filter</h3>
<p>There's a small mesh filter where the hose connects to the machine. Sand and grit from the water supply, especially after pipe repairs in your area, can block it.</p>
<h3>Faulty inlet valve</h3>
<p>The inlet (fill) valve opens to let water in. When its coil fails or it sticks, no water comes in even with good pressure. This is a common repair.</p>
<h3>Pressure switch, door lock or board</h3>
<p>The machine won't open the valve if it thinks it's already full, or if the door isn't confirmed locked.</p>

<h2>What you can safely check</h2>
${safety}
<ul>
  <li>Open a nearby tap to check you have water and normal pressure.</li>
  <li>Make sure the washing machine tap is fully open.</li>
  <li>Straighten any kinks in the inlet hose.</li>
  <li>With the tap off, unscrew the hose from the back of the machine and look at the mesh filter. If it's full of grit, rinse it gently. Refit it and check for leaks.</li>
</ul>

<h2>When to call us</h2>
<p>If the supply is good, the hose is clear and the machine still won't fill, the inlet valve or a control part needs testing. Common codes include <a href="${errorCodeUrl('lg')}">LG IE</a>, <a href="${errorCodeUrl('samsung')}">Samsung 4C/4E</a> and <a href="${errorCodeUrl('bosch')}">Bosch E17</a>. Inlet valves are standard <a href="/services/washing-machine-parts-replacement/">parts replacements</a>. <a href="/contact/">Book a technician</a>.</p>`,
    faqs: [
      { q: 'Why does my washing machine fill so slowly?', a: 'Low water pressure or a partly blocked inlet filter are the usual causes. A weak inlet valve can also do it.' },
      { q: 'Can I use my washing machine during a water outage?', a: 'Not reliably. Many machines will stop with a water supply error. Wait for normal pressure to return.' },
      { q: 'Will a booster pump help?', a: 'If your home has low pressure most of the time, a pressure pump may help. That is a plumbing job. We can check whether the machine itself is the problem.' },
    ],
  },
];

export const problemUrl = (slug: string) => `/problems/${slug}/`;
