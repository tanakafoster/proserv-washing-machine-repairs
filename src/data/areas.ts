import type { FaqItem } from './types';
import { site, brandUrl, errorCodeUrl, areaUrl } from './site';

const f = site.facts;

/** Small helpers so every internal link uses the site's URL patterns (and a slug typo shows up as a broken link in the audit). */
const link = (href: string, text: string) => `<a href="${href}">${text}</a>`;
const brand = (slug: string, text: string) => link(brandUrl(slug), text);
const area = (slug: string, text: string) => link(areaUrl(slug), text);
const codes = (slug: string, text: string) => link(errorCodeUrl(slug), text);

/** The call-out sentence, word for word as the owner defined it (read from site.facts). */
const callout = `The call-out fee is ${f.calloutFee}, ${f.calloutCondition}.`;

/**
 * Area page content, keyed by the area slug in src/data/site.ts.
 * Each area must be genuinely different (local detail, suburbs, area-specific FAQ).
 * The suburb lists only name places inside that area (checked against municipal and Wikipedia
 * listings). The first four suburbs also appear on the /areas/ cards. To add a suburb, make sure it
 * really belongs to that area; anyone not listed is invited to ask.
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
    description: `Washing machine repairs in Johannesburg: Randburg, Roodepoort, the northern suburbs and the south. Quote before work starts. Call ${site.phone.display}.`,
    h1: 'Washing machine repairs in Johannesburg',
    intro: `<p>ProServ does washing machine repairs in Johannesburg at your home, from Parkhurst and Northcliff to Randburg, Roodepoort and the southern suburbs. Our technician finds the fault and gives you a quote before any work starts.</p>`,
    suburbs: [
      'Randburg', 'Roodepoort', 'Rosebank', 'Northcliff', 'Parkhurst', 'Parkview', 'Parktown', 'Parktown North', 'Saxonwold',
      'Greenside', 'Emmarentia', 'Victory Park', 'Craighall Park', 'Melville', 'Linden', 'Killarney', 'Ferndale', 'Blairgowrie',
      'Windsor', 'Bordeaux', 'Cresta', 'Fairland', 'Malanshof', 'Fontainebleau', 'Robindale', 'Sharonlea', 'Bromhof', 'Boskruin',
      'Sundowner', 'Northwold', 'Olivedale', 'North Riding', 'Randpark Ridge', 'Florida', 'Weltevredenpark', 'Constantia Kloof',
      'Little Falls', 'Ruimsig',
      'Honeydew', 'Mondeor', 'Glenvista', 'Bassonia', 'Mulbarton', 'Glenanda', 'Houghton', 'Norwood', 'Orange Grove',
      'Highlands North', 'Linksfield',
    ],
    body: `
<h2>Where we work in Johannesburg</h2>
<p>Our Johannesburg area covers the older suburbs north of the city centre, Randburg, Roodepoort and the south. In the inner north that means places such as Parktown, Parkview, Saxonwold, Rosebank, Greenside, Emmarentia and Parkhurst, around Zoo Lake and Emmarentia Dam, with Melville, Linden and Northcliff a little further west.</p>
<p>Randburg runs north from Ferndale and Blairgowrie to Bromhof, Olivedale and North Riding, with Malibongwe Drive and Beyers Naudé Drive as its main routes. Roodepoort stretches west along Ontdekkers Road and Hendrik Potgieter Road through Florida, Weltevredenpark and Little Falls to Ruimsig. In the south we work in Mondeor, Glenvista, Bassonia and Mulbarton, close to the Klipriviersberg Nature Reserve, and in the east we cover suburbs such as Houghton, Norwood, Orange Grove, Highlands North and Linksfield.</p>
<p>Sandton, Fourways and Midrand have their own pages, ${area('sandton', 'washing machine repairs in Sandton')} and ${area('midrand', 'washing machine repairs in Midrand')}, while Bedfordview, Edenvale and the rest of Ekurhuleni are on our ${area('east-rand', 'East Rand page')}. If you aren't sure which page covers your street, just tell us where you are when you book.</p>

<h2>Older houses and their laundries</h2>
<p>Many homes in Parkview, Emmarentia, Greenside, Linden and Melville were built long before automatic washing machines were common. The machine usually ended up wherever a tap and a drain could be found: a scullery off the kitchen, an outside room or the garage. That still works, but it brings a few problems of its own.</p>
<ul>
  <li><strong>Drain hoses into outside gullies.</strong> A hose pushed into a gully can slip out and flood the yard, and without a high loop it can siphon water out of the drum while the machine fills. Lint and leaves clog outside drains too. See ${link('/problems/washing-machine-not-draining/', 'washing machine not draining')}.</li>
  <li><strong>Old pipes.</strong> Rust and scale from ageing pipes collect in the small mesh filter where the inlet hose joins the machine, until it fills slowly or stops with a water supply error. See ${link('/problems/washing-machine-not-filling-with-water/', 'washing machine not filling with water')}.</li>
  <li><strong>Timber floors.</strong> Suspended wooden floors flex, so even a level machine can rock and walk on a fast spin. A solid base and correctly set feet make a real difference. See ${link('/problems/washing-machine-noisy-when-spinning/', 'washing machine noisy when spinning')}.</li>
  <li><strong>Dim back rooms.</strong> Outside laundries are often poorly lit, with one old socket. A working light and a wall socket close to the machine make the visit quicker and safer.</li>
</ul>
<p>Moving the machine to a better spot during a renovation? Our ${link('/services/washing-machine-installation/', 'washing machine installation')} service connects it to the new tap and drain, levels it and runs a test wash.</p>

<h2>Flats and apartment blocks</h2>
<p>In the apartment blocks of Killarney, Rosebank and central Randburg, the washing machine usually lives in the kitchen or a small bathroom, with little space around it. Passages in older blocks are narrow, lifts can be small, and parking close to the entrance is hard to find.</p>
<p>When you book, give us the building name, your floor, whether there's a lift and where the technician can park. The technician works on the machine where it stands, so clearing a little space in front of it is usually all that's needed.</p>
<p>A leak in a flat can reach the unit below quickly. If water is coming out, switch the machine off at the wall, close its tap and tell the caretaker or building manager if it has gone through the floor. Our page on a ${link('/problems/washing-machine-leaking/', 'washing machine leaking')} explains where the water usually comes from.</p>
<p>Where there's nowhere to hang washing, a washer-dryer often does both jobs. We repair the drying side as well as the washing side: see ${link('/services/washer-dryer-repairs/', 'washer dryer repairs')}.</p>

<h2>Complexes in Randburg and Roodepoort</h2>
<p>Randburg and Roodepoort have a great many townhouse and cluster complexes, from Northwold, Bromhof and North Riding to Weltevredenpark and Little Falls. Access is usually through a guardhouse or a gate intercom. Send us the complex name, unit number and any gate code when you book, and tell us whether visitor parking is inside or on the street.</p>
<p>In many townhouses the machine stands under the kitchen counter and shares a drain with the sink. If the sink gurgles or fills with grey water when the machine empties, the blockage is often in the shared trap or the drain rather than in the machine. A machine squeezed between cupboards can also kink its own hoses when it's pushed back after cleaning, which slows both filling and draining.</p>

<h2>Family homes in the south</h2>
<p>Mondeor, Glenvista, Bassonia, Mulbarton and Glenanda are made up largely of freestanding family homes, with some newer cluster developments, and the machine is usually in a garage, a laundry or a back room. In a busy household it may run a load or two every day. That wears the parts that carry the weight: drum bearings and shock absorbers on front loaders, and suspension rods, drive couplings and lid switches on top loaders.</p>
<p>A rumble that grows louder as the drum speeds up usually means worn bearings, and our article on ${link('/blog/signs-washing-machine-bearings-are-worn/', 'signs your washing machine bearings are worn')} explains what to listen for. For the other faults, see ${link('/services/top-loader-repairs/', 'top loader repairs')} and ${link('/services/front-loader-repairs/', 'front loader repairs')}. Before assuming the worst about a noisy machine, check that the load is spread evenly and the machine stands firmly on all four feet.</p>

<h2>When the power cuts out</h2>
<p>When the power goes off mid-wash, whether it's load shedding or a local fault, the machine stops with water in the drum and the door locked. That's normal. Switch it off at the wall, wait until the power has been back and steady for a few minutes, then switch on again: many machines carry on, or let you run a drain or spin.</p>
<p>Don't force the door, because the lock is holding back the water inside. Our guide to a ${link('/problems/washing-machine-door-wont-open/', "washing machine door that won't open")} explains what to do. If the machine stays dead, shows an error it didn't have before, or trips the electricity, leave it switched off at the wall and see ${link('/problems/washing-machine-wont-turn-on/', "washing machine won't turn on")}. Our guide to ${link('/blog/protect-washing-machine-from-load-shedding/', 'protecting your washing machine from load shedding')} has simple ways to cut the risk of surge damage.</p>

<h2>Brands we repair in Johannesburg</h2>
<p>We're an independent repairer and work on all major washing machine brands, old and new, whether yours is a front loader, a top loader or a washer-dryer. That includes ${brand('defy', 'Defy')}, ${brand('lg', 'LG')}, ${brand('samsung', 'Samsung')}, ${brand('bosch', 'Bosch')}, ${brand('whirlpool', 'Whirlpool')}, ${brand('hisense', 'Hisense')}, ${brand('aeg', 'AEG')}, ${brand('siemens', 'Siemens')}, ${brand('miele', 'Miele')}, ${brand('smeg', 'Smeg')} and ${brand('speed-queen', 'Speed Queen')}. The brand names belong to their owners, and we aren't connected to any manufacturer.</p>
<p>If your machine is showing a code, our guides to ${codes('lg', 'LG error codes')}, ${codes('samsung', 'Samsung error codes')}, ${codes('bosch', 'Bosch error codes')} and ${codes('defy', 'Defy error codes')} explain what it usually points to. Photograph the code and the model sticker before you call, because it speeds up the diagnosis.</p>

<h2>What to tell us when you book</h2>
<table>
  <thead><tr><th>Where your machine is</th><th>What helps the technician</th></tr></thead>
  <tbody>
    <tr><td>House with a scullery or outside laundry</td><td>Where the machine stands, how to reach it and whether dogs need to be shut away</td></tr>
    <tr><td>Flat or apartment block</td><td>Building name, floor number, whether there's a lift and where to park</td></tr>
    <tr><td>Townhouse complex</td><td>Complex name, unit number, gate code and visitor parking</td></tr>
    <tr><td>Security estate</td><td>Estate name, stand number and how security registers visitors</td></tr>
  </tbody>
</table>
<p>Call or WhatsApp us, or use our ${link('/contact/', 'booking form')}, with your suburb, the brand and model, and what the machine is doing. We aim to arrive ${f.arrivalTime} on urgent call-outs, depending on where the technician is working. The technician diagnoses the fault and quotes before any work starts. ${callout}</p>
<p>Every repair carries a ${f.warranty} warranty on parts and labour, and we bring ${f.yearsInBusiness} years of washing machine repair experience to each job. Our main ${link('/', 'washing machine repairs')} page explains how the service works across Gauteng.</p>`,
    faqs: [
      { q: `Do you come out to Randburg and Roodepoort?`, a: `Yes. Both are part of our Johannesburg area, from Ferndale, Blairgowrie and North Riding in Randburg to Florida, Weltevredenpark and Ruimsig in Roodepoort. Send your suburb and street when you book and we'll find a time that suits you.` },
      { q: `Do you cover Johannesburg South?`, a: `Yes. We work in Mondeor, Glenvista, Bassonia, Mulbarton and Glenanda, among other southern suburbs. If yours isn't on our list, ask us anyway.` },
      { q: `Is Sandton part of your Johannesburg area?`, a: `We cover Sandton, Fourways and Midrand too, but each has its own page because they're big areas in their own right. See ${area('sandton', 'Sandton washing machine repairs')} and ${area('midrand', 'Midrand washing machine repairs')} for their suburbs and local details.` },
      { q: `My machine is in a scullery or an outside room. Can you repair it there?`, a: `Yes. The technician repairs it at your home, so tell us when you book that it's in an outbuilding or the garage. A working light and a wall socket close to the machine make the job quicker and safer.` },
      { q: `Can you fix a washing machine in a flat with no lift?`, a: `Yes. The technician comes up to your flat and works on the machine there, so stairs aren't a problem. Tell us which floor you're on and where to park, because parking near older blocks can be tight.` },
      { q: `The power went off mid-wash and now the door won't open. Is the machine broken?`, a: `Probably not. Most front loaders keep the door locked while there's water inside. Once the power has been back for a few minutes, switch on and run a drain or spin, then try the door again, and call us rather than forcing it if it stays locked.` },
      { q: `How soon can a technician get to me in Johannesburg?`, a: `On urgent call-outs we aim to arrive ${f.arrivalTime}, depending on where the technician is working. Johannesburg is spread out, so tell us your suburb and how urgent it is, and we'll give you a realistic time.` },
      { q: `My old house's machine drains into a gully outside. Is that a problem?`, a: `It can work if the hose is held firmly, keeps a high loop and the gully drains freely. Outside gullies clog with lint and leaves, though, and a loose hose can flood the yard or siphon water out while the machine fills. The technician checks the drain set-up as part of the visit.` },
    ],
    nearby: ['sandton', 'midrand', 'east-rand'],
  },
  pretoria: {
    title: 'Washing Machine Repairs Pretoria | ProServ',
    description: `Washing machine repairs in Pretoria: Pretoria East, Hatfield, Montana, Silverton and more. We quote at your home first. Call ${site.phone.display}.`,
    h1: 'Washing machine repairs in Pretoria',
    intro: `<p>For washing machine repairs in Pretoria, ProServ comes to your home, whether that's a student flat in Hatfield, a house in Montana or an estate in Pretoria East. A technician finds the fault on the spot and gives you a price before any work begins.</p>`,
    suburbs: [
      'Hatfield', 'Brooklyn', 'Lynnwood', 'Menlyn', 'Faerie Glen', 'Garsfontein', 'Moreleta Park', 'Elarduspark', 'Wingate Park',
      'Constantia Park', 'Monument Park', 'Waterkloof', 'Waterkloof Ridge', 'Newlands', 'Olympus', 'Wapadrand', 'Silver Lakes', 'La Montagne',
      'Mooikloof', 'Equestria', 'Die Wilgers', 'Murrayfield', 'Meyerspark', 'Silverton', 'Villieria', 'Queenswood', 'Mayville',
      'Arcadia', 'Sunnyside', 'Menlo Park', 'Pretoria North', 'Annlin', 'Sinoville', 'Montana', 'Wonderboom', 'Theresapark',
      'Doornpoort', 'Dorandia', 'Akasia', 'Pretoria West', 'Daspoort',
    ],
    body: `
<h2>Our Pretoria service area</h2>
<p>Pretoria spreads across a series of ridges and valleys, and our area covers most of the city. In the east we work in Lynnwood, Menlyn, Faerie Glen, Garsfontein, Moreleta Park and Elarduspark, out to Silver Lakes, La Montagne and Mooikloof. Closer to the centre are Hatfield, Brooklyn, Arcadia and Sunnyside, around the Union Buildings, the University of Pretoria and Loftus Versfeld.</p>
<p>North of the Magaliesberg we cover Pretoria North, Annlin, Sinoville, Montana, Wonderboom and Akasia, and we also work in Silverton, Meyerspark, Villieria, Queenswood and Pretoria West. Giving us the nearest main road, such as Lynnwood Road, Atterbury Road, Garsfontein Road, Solomon Mahlangu Drive or Zambezi Drive, helps the technician plan the trip. Centurion and Midrand, to the south, have their own pages: ${area('centurion', 'washing machine repairs in Centurion')} and ${area('midrand', 'washing machine repairs in Midrand')}.</p>

<h2>Security estates in Pretoria East</h2>
<p>Many homes in Pretoria East are in security estates and gated complexes, such as Silver Lakes, Woodhill and the estates around Mooikloof. Each one has its own access rules. Some send you a code to share, some scan the visitor's ID or driver's licence, and some only let contractors in during set hours.</p>
<p>Please sort out access before the visit: register the technician with security, or send us the instructions with your booking, including the estate name, your stand or unit number and the gate to use. Time spent waiting at the boom is time the technician could have spent on your machine.</p>
<p>Bigger homes often have a separate laundry, sometimes upstairs, where a leak can soak a ceiling before anyone notices. If you see water, switch off at the wall and close the tap straight away. For large-capacity machines and combination units, see ${link('/services/front-loader-repairs/', 'front loader repairs')} and ${link('/services/washer-dryer-repairs/', 'washer dryer repairs')}.</p>

<h2>Student digs and rental flats</h2>
<p>Around the University of Pretoria and the other campuses nearby, Hatfield, Brooklyn, Arcadia and Sunnyside have plenty of student digs, communes and rental flats where one machine serves several people. Shared machines take a beating from overloading, too much detergent, coins and hair ties left in pockets, and doors yanked open mid-cycle. Blocked pump filters, broken door handles and worn door locks often follow.</p>
<p>If you rent, check who pays for repairs before you book: you, the landlord or the company that manages the property. Because the technician quotes before any work starts, there's time to get the go-ahead. ${callout}</p>
<p>For a machine that has stopped with water inside, start with ${link('/problems/washing-machine-not-draining/', 'washing machine not draining')}, and for a stuck door see ${link('/problems/washing-machine-door-wont-open/', "washing machine door won't open")}. Landlords with several units can keep machines going between tenants with ${link('/services/washing-machine-servicing/', 'washing machine servicing')}.</p>

<h2>Homes north of the Magaliesberg</h2>
<p>Pretoria North, Annlin, Sinoville, Montana, Wonderboom and Theresapark have plenty of freestanding family homes as well as newer townhouse complexes. In many of these homes the machine stands in the garage or a back room rather than in the kitchen.</p>
<p>Garage floors usually slope towards the door so that water can run out, and a washing machine standing on a slope rocks and walks on a fast spin. Adjusting the feet, or giving the machine a solid level base, often cures the noise. If it still bangs with a balanced load, the shock absorbers, springs or suspension rods may be worn: see ${link('/problems/washing-machine-noisy-when-spinning/', 'washing machine noisy when spinning')} and ${link('/services/top-loader-repairs/', 'top loader repairs')}.</p>

<h2>Winter blankets and heavy loads</h2>
<p>When the cold nights arrive, heavy blankets, duvets and bath mats go into the machine, and they're often more than it can handle. A duvet soaks up a great deal of water, so it weighs far more wet than dry, and a drum packed with one bulky item can't balance for the spin. The machine bangs, stops with an unbalance error or strains its bearings and shock absorbers.</p>
<p>Check the capacity on the machine's label or in the manual before you wash bulky bedding, and wash one large item with a few towels rather than on its own, so the load can spread out. If the machine refuses to spin after a heavy wash, our page on a ${link('/problems/washing-machine-not-spinning/', 'washing machine not spinning')} explains why. For a king-size duvet, a large laundromat machine may be the kinder option for your own machine.</p>

<h2>Summer storms and power surges</h2>
<p>Pretoria's summer afternoons often end in thunderstorms, and a nearby lightning strike or a supply that trips and comes back can send a surge through the house. Washing machine electronics don't handle that well, and the control board and mains filter are the parts most at risk.</p>
<p>A few habits help. If a storm is building, finish or pause the wash and switch the machine off at the wall before the lightning gets close. Switch it off at the wall when you go away for a few days too, and plug it into a good surge protector rated for the machine's current rather than a cheap multi-plug. Our guide to ${link('/blog/protect-washing-machine-from-load-shedding/', 'protecting your machine from load shedding')} covers surge protection in more detail, and ${link('/problems/washing-machine-wont-turn-on/', "washing machine won't turn on")} explains what to check if it won't start afterwards.</p>

<h2>Water cuts and low pressure</h2>
<p>When the supply in your suburb is interrupted, or the pressure drops after a burst pipe or maintenance, the machine can't fill in the time it expects. It stops with a water supply error, such as IE on many LG machines or 4C on a Samsung. Check that the other taps in the house are running normally before blaming the machine, and wait for the pressure to recover.</p>
<p>When the water comes back it can carry sand and sediment loosened in the pipes, so run a cold tap for a minute before you start a wash. If the machine fills slowly afterwards, the mesh filter where the inlet hose joins the machine may be blocked. Switch off at the wall, unplug, close the tap and clean the filter as your manual describes, with a towel underneath for the water left in the hose. See ${link('/problems/washing-machine-not-filling-with-water/', 'washing machine not filling with water')}, and our guides to ${codes('lg', 'LG error codes')} and ${codes('samsung', 'Samsung error codes')}.</p>

<h2>Brands we repair in Pretoria</h2>
<p>From well-used ${brand('defy', 'Defy')} and ${brand('whirlpool', 'Whirlpool')} top loaders to the latest ${brand('lg', 'LG')}, ${brand('samsung', 'Samsung')} and ${brand('hisense', 'Hisense')} front loaders, we repair all major washing machine brands in Pretoria homes. That includes European makes such as ${brand('bosch', 'Bosch')}, ${brand('siemens', 'Siemens')}, ${brand('aeg', 'AEG')}, ${brand('miele', 'Miele')} and ${brand('smeg', 'Smeg')}, and heavy-duty ${brand('speed-queen', 'Speed Queen')} machines too.</p>
<p>ProServ is independent and isn't linked to any of these manufacturers, whose names are their own trademarks. Owners of Bosch and Defy machines will find our ${codes('bosch', 'Bosch error codes')} and ${codes('defy', 'Defy error codes')} guides useful, and the ${link('/error-codes/', 'error code hub')} lists every guide.</p>

<h2>Booking a technician in Pretoria</h2>
<p>Call or WhatsApp us, or send the ${link('/contact/', 'booking form')}, with your suburb, the brand and model, and what the machine is doing. We aim to arrive ${f.arrivalTime} on urgent call-outs, depending on where the technician is working, and otherwise book a time that suits you.</p>
<p>The technician diagnoses the fault at your home and quotes before starting, and repairs carry a ${f.warranty} warranty on parts and labour. With ${f.repairsCompleted} repairs behind us, we know what to look for. Our ${link('/', 'washing machine repairs')} home page explains the rest of the service.</p>`,
    faqs: [
      { q: `Do you cover Pretoria North, Montana and Akasia?`, a: `Yes. The suburbs north of the Magaliesberg are part of our Pretoria area, including Pretoria North, Annlin, Sinoville, Montana, Wonderboom, Doornpoort and Akasia. Send your address when you book and we'll give you a time.` },
      { q: `Can your technician get into estates such as Silver Lakes, Woodhill and Mooikloof?`, a: `Yes. Register the technician with the estate's security, or send us the access instructions when you book. If the gate needs an ID scan or a code, tell us in advance so there's no delay at the boom.` },
      { q: `I'm a student in Hatfield and my landlord pays for repairs. How does that work?`, a: `Check with your landlord before you book, and tell us who will decide on the quote. You'll get the quote after the diagnosis, before any work starts. ${callout}` },
      { q: `How can we stop the shared machine in our digs from breaking down?`, a: `Agree on a few house rules: empty pockets, don't pack the drum full, use the detergent dose on the pack, and let the door unlock by itself before opening it. The pump filter catches coins and hair ties before they reach the pump, so clean it regularly as the manual describes. Switch off at the wall and unplug first, and keep towels and a tray ready for the water.` },
      { q: `My machine died after a thunderstorm. Can it be repaired?`, a: `Often, yes. Storm surges commonly damage the mains filter or the power supply on the control board, and a technician can test which part has failed. Leave the machine switched off at the wall until then, especially if it tripped the electricity.` },
      { q: `Is Centurion included in your Pretoria area?`, a: `Yes. Centurion is part of the City of Tshwane, and because it's a large area with its own suburbs and estates, it has a separate page. See ${area('centurion', 'Centurion washing machine repairs')} for the details.` },
      { q: `Do you work in Silverton, Villieria and Queenswood?`, a: `Yes, along with Meyerspark, Mayville and the neighbouring suburbs. Not sure whether we reach your street? Ask us when you book.` },
      { q: `Do you cover Pretoria West and Daspoort?`, a: `Yes, both are part of our Pretoria area. Give us your street and the nearest main road when you book, and we'll confirm when the technician can be there.` },
      { q: `Can you service the machines in my rental units between tenants?`, a: `Yes. A service clears the pump filter and drain path, checks the hoses, seals and drum, and ends with a test cycle, so problems turn up before the next tenant moves in. If you have several machines at one address, tell us when you book.` },
    ],
    nearby: ['centurion', 'midrand'],
  },
  centurion: {
    title: 'Washing Machine Repairs Centurion | ProServ',
    description: `Washing machine repairs in Centurion, from Lyttelton and Eldoraigne to Irene and Olievenhoutbosch. Quote before any work. Call ${site.phone.display}.`,
    h1: 'Washing machine repairs in Centurion',
    intro: `<p>Washing machine repairs in Centurion, done at your home: ProServ covers established suburbs such as Lyttelton and Eldoraigne, the complexes of Rooihuiskraal and Wierdapark, and the estates around Irene. You get a quote at your door, before any work begins.</p>`,
    suburbs: [
      'Lyttelton', 'Eldoraigne', 'Irene', 'Rooihuiskraal', 'Lyttelton Manor', 'Clubview', 'Doringkloof', 'Die Hoewes', 'Zwartkop',
      'Wierdapark', 'Rooihuiskraal North', 'Heuweloord', 'Highveld', 'The Reeds', 'Celtisdal', 'Hennopspark', 'Valhalla',
      'Pierre van Ryneveld Park', 'Southdowns', 'Kosmosdal', 'Amberfield', 'Monavoni', 'Thatchfield', 'Heritage Hill',
      'Olievenhoutbosch', 'Raslouw', 'Mnandi', 'Laudium', 'Erasmia',
    ],
    body: `
<h2>Centurion at a glance</h2>
<p>Centurion lies between Pretoria and Midrand and has been part of the City of Tshwane since 2000. It began as Lyttelton, became Verwoerdburg in 1967 and took its present name in 1995. The middle of town is near where the N1 and N14 freeways meet, around Centurion Mall and Centurion Lake on the Hennops River, with SuperSport Park and the Gautrain station close by.</p>
<p>The R21 runs along the eastern side past Irene, and the R55 links the western suburbs and smallholdings with Pretoria and Kyalami. Air Force Base Waterkloof and Air Force Base Swartkop are both in Centurion, and Smuts House at Irene is now a museum. All of these make handy landmarks when you give the technician directions.</p>
<p>Our Centurion area takes in the suburbs, estates and smallholdings described on this page. To the north and south, our ${area('pretoria', 'washing machine repairs in Pretoria')} and ${area('midrand', 'washing machine repairs in Midrand')} pages take over.</p>

<h2>Established family suburbs</h2>
<p>Lyttelton, Lyttelton Manor, Clubview, Doringkloof, Zwartkop and Eldoraigne are made up mostly of freestanding homes with gardens, garages and a laundry or scullery. When a washing machine has stood in the same spot for years, a few things start to give trouble.</p>
<ul>
  <li><strong>Perished hoses.</strong> Inlet hoses harden and crack with age, and the rubber washers at each end flatten. A hose that bursts while you're out can flood a kitchen, so have it checked if it's bulging, cracked or simply old.</li>
  <li><strong>Stiff washing machine taps.</strong> A tap that hasn't been turned in years can start to drip from the spindle once it's moved. A leak at the hose connection is a washing machine matter; a leak from the tap body or the wall fitting is a job for a plumber.</li>
  <li><strong>Machines on patios.</strong> Washing machines are made for indoor use. Out on an open patio, rain, dust and strong sun get at the controls and plastic parts, and water near the plug is a hazard, so a covered, dry spot indoors or in the garage is far safer.</li>
  <li><strong>Years of wear.</strong> Bearings, door seals, carbon brushes and pumps all wear out in time. A ${link('/services/washing-machine-servicing/', 'washing machine servicing')} visit checks them before they fail, and our ${link('/services/washing-machine-parts-replacement/', 'parts replacement')} page explains what each part does.</li>
</ul>

<h2>Townhouses and upstairs units</h2>
<p>Rooihuiskraal, Rooihuiskraal North, Wierdapark, Heuweloord, Highveld, The Reeds and Celtisdal have a great many townhouse complexes, where the machine sits in a compact laundry nook or under the kitchen counter. Space is tight, so tell us if the machine is built in between cupboards and the technician will allow time to slide it out.</p>
<p>In an upstairs unit, vibration travels through the floor to the neighbours below. A machine that shakes the room usually has an uneven load, a foot out of adjustment or worn shock absorbers. On a newly installed front loader, transit bolts that were never removed cause violent shaking and damage the bearings and suspension quickly, so the technician checks for them first. More on this under ${link('/problems/washing-machine-noisy-when-spinning/', 'washing machine noisy when spinning')}.</p>
<p>Without room for a tumble dryer, many townhouses rely on a washer-dryer, which adds a heater, a fan and a condenser to the usual front loader parts. If the clothes come out damp, see ${link('/services/washer-dryer-repairs/', 'washer dryer repairs')}; for the washing side, ${link('/services/front-loader-repairs/', 'front loader repairs')}.</p>
<p>Access in complexes is usually through a guardhouse or a gate intercom. Send us the complex name, unit number and any visitor parking rules when you book.</p>

<h2>New homes and first installations</h2>
<p>In newer developments such as Kosmosdal, Amberfield, Thatchfield, Monavoni, Heritage Hill and Olievenhoutbosch, the builder placed the washing machine tap, the drain and the plug point, and they don't always suit the machine you buy. Typical snags are a standpipe that's too low or too narrow for the drain hose, a hose pushed so far down the standpipe that the machine siphons, and a socket hidden right behind the machine where the plug gets crushed.</p>
<p>Our ${link('/services/washing-machine-installation/', 'washing machine installation')} service connects the machine to the tap and drain, takes out the transit bolts, levels it and runs a test wash. If the plumbing or electrical point needs changing, we'll tell you, so you can get a plumber or electrician in before the machine is used. If a new machine overflows, leaks or won't drain on its first wash, the installation is the first thing to check: see ${link('/problems/washing-machine-not-draining/', 'washing machine not draining')}.</p>

<h2>Plumber, electrician or technician?</h2>
<table>
  <thead><tr><th>What you notice</th><th>Who to call</th></tr></thead>
  <tbody>
    <tr><td>Water leaks from the tap body or the pipe in the wall</td><td>A plumber</td></tr>
    <tr><td>The sink and the machine both drain slowly</td><td>A plumber, for the household drain</td></tr>
    <tr><td>A lamp plugged into the machine's socket doesn't work either</td><td>An electrician, for the plug point or circuit</td></tr>
    <tr><td>The earth leakage trips only when the machine runs</td><td>A washing machine technician: leave the machine off until it's tested</td></tr>
    <tr><td>A leak at the hose connection, a machine that won't drain while the sink is fine, a new noise or an error code</td><td>A washing machine technician</td></tr>
  </tbody>
</table>
<p>If you're not sure which it is, describe the problem when you book and we'll tell you honestly whether it's a job for us. Details such as where the water appears, and whether anything else in the house is affected, help us point you to the right person.</p>

<h2>Irene, estates and smallholdings</h2>
<p>Irene, Southdowns and Pierre van Ryneveld Park have a mix of established homes and security estates. For an estate, register the technician at the gate or send us the access instructions with your booking, including the estate name and stand number.</p>
<p>On the western side, the smallholdings around Raslouw and Mnandi often have long driveways, farm gates and dogs. Send a location pin on WhatsApp and tell us how to get through the gate. If your water comes from a borehole or a tank with a pressure pump, mention that too: sediment can block the inlet filter, and a pump that has tripped looks just like a machine that won't fill. Our page on a ${link('/problems/washing-machine-not-filling-with-water/', 'washing machine not filling with water')} covers the other causes.</p>

<h2>Backup power and outages</h2>
<p>If your home has solar panels, an inverter and batteries, a washing machine can usually run on backup power. Heating the water draws far more than turning the drum, so a cold or quick programme puts less strain on the batteries during an outage. If you're not sure whether the machine's socket is on the backup circuit, or whether the inverter can carry it, ask your installer.</p>
<p>Without backup, switch the machine off at the wall when the power goes and wait a few minutes after it returns before switching on. If it won't come back to life, see ${link('/problems/washing-machine-wont-turn-on/', "washing machine won't turn on")} and our guide to ${link('/blog/protect-washing-machine-from-load-shedding/', 'protecting your washing machine from load shedding')}.</p>

<h2>Brands we repair in Centurion</h2>
<p>We repair all major washing machine brands across Centurion, including ${brand('samsung', 'Samsung')}, ${brand('lg', 'LG')}, ${brand('defy', 'Defy')}, ${brand('hisense', 'Hisense')}, ${brand('whirlpool', 'Whirlpool')}, ${brand('bosch', 'Bosch')}, ${brand('siemens', 'Siemens')}, ${brand('aeg', 'AEG')}, ${brand('miele', 'Miele')}, ${brand('smeg', 'Smeg')} and ${brand('speed-queen', 'Speed Queen')}. We're an independent repair business, so the brand names here simply describe the machines we fix. For a code on the display, the ${link('/error-codes/', 'washing machine error code guides')} cover LG, Samsung, Bosch and Defy.</p>

<h2>Booking a Centurion repair</h2>
<p>Call or WhatsApp us, or fill in the ${link('/contact/', 'contact form')}, with your suburb or estate, the brand and model of the machine and what it's doing. A photo of the model sticker and any error code helps. ${callout} Every repair carries our ${f.warranty} warranty on parts and labour.</p>
<p>With ${f.yearsInBusiness} years of washing machine repair experience, we'll tell you plainly whether a repair makes sense, and our ${link('/repair-or-replace/', 'repair or replace guide')} helps you weigh it up. More about our ${link('/', 'washing machine repairs')} across Gauteng is on the home page.</p>`,
    faqs: [
      { q: `Which parts of Centurion do you cover?`, a: `All the main suburbs, from Lyttelton, Clubview and Eldoraigne to Rooihuiskraal, Wierdapark, Irene, Highveld and Olievenhoutbosch. The list on this page names more of them. If yours isn't there, ask us.` },
      { q: `Do you cover Irene and Pierre van Ryneveld Park?`, a: `Yes, along with Doringkloof, Highveld and Southdowns on the eastern side. If you live in an estate, register the technician at the gate when you book so there's no wait at the boom.` },
      { q: `My machine in an upstairs unit shakes the whole floor. Can you help?`, a: `Yes. The technician checks the load, the levelling, the shock absorbers and springs, and whether the transit bolts were removed when the machine was installed. Then you get a quote to fix the cause.` },
      { q: `We've just moved into a new development and the drain overflows. What's wrong?`, a: `Usually the drain set-up rather than the machine. The standpipe may be too low or too narrow, or the hose pushed in too far, which causes overflows and siphoning. The technician checks it and tells you if a plumber needs to move or change the drain point.` },
      { q: `Do you cover the western suburbs such as Laudium, Erasmia and Olievenhoutbosch?`, a: `Yes. They're part of our Centurion area, along with Raslouw, Kosmosdal and Monavoni. Send your street address when you book and we'll confirm a time.` },
      { q: `My washing machine tap drips when I turn it. Is that your job or a plumber's?`, a: `If the drip comes from where the hose screws on, a new washer or inlet hose usually fixes it, and the technician can replace those. If water leaks from the tap body or the wall fitting, that's plumbing. Either way, close the tap fully, or the main supply if it won't stop.` },
      { q: `Do you go out to the smallholdings in Raslouw and Mnandi?`, a: `Yes, they're part of our Centurion area. Send a location pin on WhatsApp with your booking, and tell us about the gate and any dogs, so the technician can get in.` },
      { q: `Can you install a new washing machine in my Centurion townhouse?`, a: `Yes. The technician connects it to the tap and drain, removes the transit bolts, levels it and runs a test wash. If the existing tap or drain point won't suit the machine, you'll know before it's used.` },
    ],
    nearby: ['pretoria', 'midrand'],
  },
  sandton: {
    title: 'Washing Machine Repairs Sandton | ProServ',
    description: `Washing machine repairs in Sandton, Bryanston, Rivonia, Fourways and Sunninghill, including integrated machines. Quote first. Call ${site.phone.display}.`,
    h1: 'Washing machine repairs in Sandton',
    intro: `<p>ProServ carries out washing machine repairs in Sandton in homes and apartments alike, from Sandton Central and Morningside to Bryanston, Rivonia, Sunninghill and Fourways. The technician diagnoses the fault where the machine stands and quotes before any work starts.</p>`,
    suburbs: [
      'Bryanston', 'Rivonia', 'Morningside', 'Sunninghill', 'Sandown', 'Sandhurst', 'Hyde Park', 'Illovo', 'Inanda', 'Atholl',
      'Parkmore', 'Benmore Gardens', 'Hurlingham', 'Paulshof', 'Woodmead', 'Wendywood', 'Gallo Manor', 'Magaliessig', 'Fourways',
      'Lonehill', 'Douglasdale', 'Craigavon', 'Broadacres', 'Beverley', 'Dainfern',
    ],
    body: `
<h2>Sandton and the Fourways side</h2>
<p>Our Sandton area runs from Sandton Central, with Sandton City, Nelson Mandela Square and the Gautrain station, out through Sandown, Sandhurst, Hyde Park, Inanda, Illovo and Morningside. Beyond them are Bryanston, Parkmore and Benmore Gardens, Rivonia, Sunninghill and Paulshof, and Woodmead, Wendywood and Gallo Manor.</p>
<p>We also cover the Fourways side: Fourways itself, Lonehill, Douglasdale, Magaliessig, Craigavon, Broadacres and the Dainfern estates, around Fourways Mall, Montecasino and Lonehill Koppie. The main routes are the N1 western bypass, the M1, Rivonia Road, Grayston Drive, Witkoppen Road and Winnie Mandela Drive, which many people still call William Nicol. Randburg, Rosebank and Parkhurst are on our ${area('johannesburg', 'washing machine repairs in Johannesburg')} page, and Kyalami and Waterfall are covered under ${area('midrand', 'washing machine repairs in Midrand')}.</p>

<h2>Apartments and residential towers</h2>
<p>Sandton Central, Morningside, Rivonia and Sunninghill have a great many apartment blocks and residential towers, often with a concierge or security desk, basement parking and lifts. Each building sets its own rules for contractors. Some ask for ID at the desk or a booking in advance, some limit work to certain hours, and visitor parking is often short or time-limited.</p>
<p>When you book, give us the building name, your unit number, where the technician should park and anything security needs to know. If the machine has to come out of a cupboard, clearing the space in front of it before the visit saves time.</p>
<p>A leak in a tower block is more than a wet floor, because water finds its way into the ceilings and units below. If your machine is leaking, switch it off at the wall, close the tap, mop up and tell building management. Our guide to a ${link('/problems/washing-machine-leaking/', 'washing machine leaking')} helps you work out where the water is coming from. If neighbours on the same floor also have slow drains, mention that too, because the blockage may be in the building's shared drain pipe rather than in your machine.</p>
<p>If your building runs a generator during outages, the machine loses power twice: when the grid goes down and again when the supply switches back. Many machines simply pause and carry on. If yours shows a new error afterwards, switch it off at the wall for a few minutes before trying again.</p>

<h2>Integrated machines in fitted kitchens</h2>
<p>Fitted kitchens in Sandton homes and apartments often hide the washing machine behind a cabinet door. An integrated machine is fixed into its housing, with the cabinet door attached to the machine's own door and a plinth covering the feet.</p>
<p>To work on one, the technician removes the plinth, frees the fixings and slides the machine out, checking that the hoses and cable haven't been trapped behind it. After the repair it goes back in and the door alignment is checked. It takes longer than a freestanding machine, and that time is part of the quote.</p>
<p>Freestanding machines squeezed into a tall cupboard have their own problems: hoses kinked against the back wall and too little air around the machine. If yours was fitted that way, our ${link('/services/washing-machine-installation/', 'washing machine installation')} service can reconnect it with the hoses running freely.</p>

<h2>Premium front loaders and washer-dryers</h2>
<p>Premium European front loaders from makers such as ${brand('miele', 'Miele')}, ${brand('bosch', 'Bosch')}, ${brand('siemens', 'Siemens')}, ${brand('aeg', 'AEG')} and ${brand('smeg', 'Smeg')} are worth repairing properly. They rely on sensors and electronic controls, so careful diagnosis matters more than swapping parts until the fault goes away. Some model-specific parts have to be ordered, and if so the technician tells you before you agree to the repair.</p>
<p>Many premium machines also have leak protection that shuts off the water when it senses water in the base, and the machine stops with a code. Clearing the code isn't the fix: the leak behind it has to be found and repaired first. Pumps, hoses, door seals and the other parts involved are covered on our ${link('/services/washing-machine-parts-replacement/', 'washing machine parts replacement')} page.</p>
<p>In apartments without space for a tumble dryer, a washer-dryer does both jobs, and its drying side has its own heater, fan and condenser or air duct. Lint that builds up where you can't see it is a frequent reason for clothes coming out hot but damp. See ${link('/services/washer-dryer-repairs/', 'washer dryer repairs')}, and for the washing side, ${link('/services/front-loader-repairs/', 'front loader repairs')}.</p>
<p>A good machine costs a lot to replace, so a repair usually makes sense while the drum, bearings and electronics are sound. Our ${link('/repair-or-replace/', 'repair or replace guide')} and the page on ${link('/washing-machine-repair-cost/', 'washing machine repair cost')} explain how to weigh it up.</p>

<h2>Family homes and estates</h2>
<p>Bryanston, Hyde Park, Inanda and Sandhurst are mostly large freestanding homes behind walls, electric gates and intercoms, often with a separate laundry or scullery. Further north, Fourways, Lonehill and Douglasdale mix cluster homes with security estates such as Dainfern, Fourways Gardens and Cedar Lakes, where visitors are registered at the gate.</p>
<p>For a house, tell us how the technician gets in and whether dogs need to be put away, and if your street is behind a boom or a road closure, whether the guard needs your name or a code. For an estate, register the technician with security or send us the access instructions when you book.</p>
<p>Large laundries often have a tumble dryer stacked on top of the washing machine. That's fine on the stacking kit made for the pair, which holds the dryer in place, but a dryer simply resting on top can creep forward during a fast spin and fall. If yours wobbles, stop using the pair until it's secured, and tell us when you book if the dryer will have to come down for the repair.</p>
<p>Family machines that run every day wear their bearings, shock absorbers, pumps and door locks, front loaders and top loaders alike. Worn bearings usually give plenty of warning, starting with a low rumble on the spin, and our guide to the ${link('/blog/signs-washing-machine-bearings-are-worn/', 'signs of worn washing machine bearings')} explains why it pays to book early. See ${link('/services/top-loader-repairs/', 'top loader repairs')}, and our article on ${link('/blog/front-loader-vs-top-loader/', 'front loaders versus top loaders')} if you're weighing up a replacement.</p>

<h2>Before the technician arrives</h2>
<ul class="checklist">
  <li>Find the brand and model number on the sticker inside the door rim or on the back of the machine.</li>
  <li>Write down any error code and what the machine was doing when it stopped.</li>
  <li>If it's leaking, keep the tap closed and the machine switched off at the wall.</li>
  <li>Clear the cupboard, the space in front of the machine and anything stored on top of it.</li>
  <li>Let the concierge, security desk or estate gate know that a technician is expected.</li>
</ul>

<h2>Brands we repair in Sandton</h2>
<p>Alongside the European makes above, we repair ${brand('lg', 'LG')}, ${brand('samsung', 'Samsung')}, ${brand('hisense', 'Hisense')}, ${brand('defy', 'Defy')}, ${brand('whirlpool', 'Whirlpool')} and ${brand('speed-queen', 'Speed Queen')} machines, so all major washing machine brands are covered. ProServ is an independent repairer: the brand names are trademarks of their owners and appear here only to describe what we fix. Our guides to ${codes('lg', 'LG error codes')}, ${codes('samsung', 'Samsung error codes')}, ${codes('bosch', 'Bosch error codes')} and ${codes('defy', 'Defy error codes')} explain what the display is telling you.</p>

<h2>Booking a technician in Sandton</h2>
<p>Call or WhatsApp us, or use the ${link('/contact/', 'booking form')}. Tell us your suburb or building, the brand and model, what the machine is doing and how the technician gets in. We aim to get to urgent call-outs ${f.arrivalTime}, depending on where the technician is working.</p>
<p>${callout} Repairs carry a ${f.warranty} warranty on parts and labour. More about how our ${link('/', 'washing machine repairs')} work is on the home page.</p>`,
    faqs: [
      { q: `Do you repair Miele and Smeg washing machines in Sandton?`, a: `Yes. We repair ${brand('miele', 'Miele')}, ${brand('smeg', 'Smeg')} and other premium European machines at your home. Some model-specific parts have to be ordered, and if so the technician tells you before you agree to the repair.` },
      { q: `What should I tell the concierge or security desk?`, a: `Let them know a ProServ washing machine technician is expected at your unit, and ask where contractors should park. If the building needs contractors registered in advance or only allows work at certain times, tell us when you book.` },
      { q: `Can you take out an integrated machine without damaging my kitchen?`, a: `The technician removes the plinth, slides the machine out carefully and refits it after the repair, checking that the cabinet door lines up. Integrated machines take longer than freestanding ones, and that time is included in the quote.` },
      { q: `My apartment washer-dryer washes but won't dry. Is that a separate fault?`, a: `Usually, yes. The drying side has its own heater, fan and condenser or air duct, and a lint blockage or a failed heater are typical causes. Our page on ${link('/services/washer-dryer-repairs/', 'washer dryer repairs')} explains more.` },
      { q: `My machine leaked into the apartment below. What should I do first?`, a: `Switch the machine off at the wall, close its tap and mop up, then tell building management and your neighbour. Don't run it again until the leak has been found. Our technician traces where the water came from and quotes before replacing anything.` },
      { q: `Do you cover Fourways, Lonehill and Dainfern?`, a: `Yes. We include the Fourways side in our Sandton area, from Lonehill, Douglasdale and Magaliessig to Craigavon, Broadacres and Dainfern. For estates, register the technician with security when you book.` },
      { q: `Do you work in Bryanston, Rivonia and Sunninghill?`, a: `Yes, along with Morningside, Parkmore, Benmore Gardens, Paulshof and Woodmead. If your suburb isn't on our list, ask us when you book.` },
      { q: `Do you cover Illovo, Hyde Park and Inanda?`, a: `Yes. They're part of our Sandton area, together with Sandhurst, Sandown and Atholl. For houses behind a boom or road closure, let the guard know a technician is coming.` },
      { q: `Is it worth repairing an older premium machine?`, a: `Often, yes. If the drum, bearings and electronics are sound, replacing a pump, door lock or heater costs far less than a new machine of the same quality. The technician will tell you if the numbers don't add up.` },
    ],
    nearby: ['johannesburg', 'midrand'],
  },
  midrand: {
    title: 'Washing Machine Repairs Midrand | ProServ',
    description: `Washing machine repairs in Midrand: Halfway House, Vorna Valley, Kyalami, Waterfall and the smallholdings. Quote at home first. Call ${site.phone.display}.`,
    h1: 'Washing machine repairs in Midrand',
    intro: `<p>Our washing machine repairs in Midrand happen at your home, whether it's a complex in Vorna Valley or Noordwyk, an estate in Waterfall or Kyalami, or a smallholding in Blue Hills. The technician diagnoses the fault there and then, and you get a quote before any work starts.</p>`,
    suburbs: [
      'Halfway House', 'Vorna Valley', 'Kyalami', 'Waterfall', 'Noordwyk', 'Carlswald', 'Halfway Gardens', 'Erand Gardens',
      'Midridge Park', 'President Park', 'Kyalami Hills', 'Barbeque Downs', 'Blue Hills', 'Glen Austin', 'Crowthorne', 'Randjesfontein', 'Country View',
    ],
    body: `
<h2>Midrand between two cities</h2>
<p>Midrand grew up around Halfway House, named for its position halfway between Pretoria and Johannesburg. It became a municipality in 1981 and joined the City of Johannesburg in 2000. The N1 runs straight through it, with the R101 (Pretoria Main Road) alongside, the R55 on the western side through Kyalami, and Olifantsfontein Road heading east towards Tembisa.</p>
<p>Allandale Road, New Road and Samrand Road are the main local links. Landmarks include Gallagher Convention Centre, the Mall of Africa in Waterfall City, the Kyalami racing circuit, Grand Central Airport, the Gautrain station and the Nizamiye Mosque, all useful when you give the technician directions.</p>
<p>Sandton and the Fourways side lie to the south and west, Centurion to the north and the East Rand to the east. See ${area('sandton', 'washing machine repairs in Sandton')}, ${area('centurion', 'washing machine repairs in Centurion')} and ${area('east-rand', 'washing machine repairs on the East Rand')} for those areas.</p>

<h2>Complexes and apartment living</h2>
<p>Much of central Midrand, including Halfway House, Halfway Gardens, Vorna Valley, Noordwyk, Carlswald and Erand Gardens, is made up of townhouse complexes and apartment developments, many of them fairly recent. The machine usually stands under a kitchen counter or in a narrow utility cupboard, and its drain often joins the sink trap, so a blocked trap shows up as a machine that won't empty.</p>
<p>Access is through a gate, a guardhouse or an intercom, and visitor parking can be limited. Give us the complex name and unit number when you book, and tell us if the technician will need a gate code.</p>
<p>Moving between rentals is hard on a front loader. Without its transit bolts, the drum swings freely in transit and can damage the suspension, and a door seal or hose can tear when the machine is squeezed through a doorway. Keep the bolts when you move in, and have the machine connected, levelled and checked at the new place: our ${link('/services/washing-machine-installation/', 'washing machine installation')} service covers this.</p>

<h2>Quick washes and musty smells</h2>
<p>In a busy apartment the machine often runs on quick, cold programmes, which are handy but leave detergent residue and lint behind in the door seal, the detergent drawer and the pump filter. Over a few months that film turns grey and musty, and the smell transfers to your washing.</p>
<p>Once a month, run a hot maintenance wash with the drum empty, wipe out the folds of the door seal and rinse the drawer. Use the detergent dose on the pack rather than a little extra, and leave the door and drawer open after the last wash of the day so they can dry. If the smell stays, our article on ${link('/blog/why-does-my-washing-machine-smell/', 'why your washing machine smells')} goes through the other causes.</p>

<h2>Waterfall and the Kyalami estates</h2>
<p>Midrand's security estates include Waterfall Country Estate and Waterfall Equestrian Estate, along with the estates and clusters of Kyalami Hills, Barbeque Downs and the rest of Kyalami. Access is tightly controlled, often with pre-registration and ID checks at the gate. Register the technician with security or send the access details when you book, including your stand number.</p>
<p>Newer homes often mean newer machines: large-capacity front loaders and washer-dryers with inverter motors, electronic controls and detailed error codes. They're well worth repairing when something goes wrong. See ${link('/services/front-loader-repairs/', 'front loader repairs')} and ${link('/services/washer-dryer-repairs/', 'washer dryer repairs')}.</p>

<h2>Smallholdings and borehole water</h2>
<p>On the agricultural holdings in Kyalami, Blue Hills, Glen Austin, Crowthorne and Randjesfontein, homes sit on bigger plots with long driveways, farm gates, and often horses and dogs. Send a location pin on WhatsApp with your booking and tell us how the gate works, so the technician doesn't have to hunt for the entrance.</p>
<p>Horse blankets, saddle cloths and dog bedding are hard on a household machine. Hair and bits of hay wrap around the drum paddles, clog the pump filter and lodge in the door seal, so brush and shake them off thoroughly outside first, and wash them in small loads if the manual allows it.</p>
<p>Some of these properties draw water from a borehole or store it in tanks with a pressure pump. That affects a washing machine in three ways.</p>
<ul>
  <li><strong>Sand and silt</strong> from a borehole collect in the mesh filter at the inlet hose, slowing the fill until the machine stops with a water supply error.</li>
  <li><strong>Hard water</strong> leaves scale on the heating element over time, so washes come out cooler and the element can eventually fail. If your kettle and taps grow white crusts, the machine is probably scaling up inside too.</li>
  <li><strong>Pump and tank problems</strong> look just like a machine fault. If the pressure pump has tripped or the tank is empty, the machine can't fill, so check the other taps first.</li>
</ul>
<p>Clean the inlet filter as your manual describes, with the machine switched off at the wall, unplugged and its tap closed, and a towel ready for the water left in the hose. If it still fills slowly or won't heat, see ${link('/problems/washing-machine-not-filling-with-water/', 'washing machine not filling with water')} or book a ${link('/services/washing-machine-servicing/', 'washing machine service')}.</p>

<h2>Error codes on newer machines</h2>
<p>Modern machines stop and show a code when something is outside normal limits, which makes diagnosis quicker. An OE code on an LG or 5C on a Samsung, for example, usually points to a drainage problem, but the code shows where the fault is rather than which part has failed. Photograph the code together with the model sticker, usually inside the door rim or on the back, and send both to us on WhatsApp.</p>
<p>After a power dip, switch the machine off at the wall and wait until the supply has been steady for a few minutes before trying again, because some codes are one-off glitches. If it keeps coming back, see ${link('/problems/washing-machine-showing-error-code/', 'washing machine showing an error code')}, our guides to ${codes('lg', 'LG error codes')} and ${codes('samsung', 'Samsung error codes')}, or the full ${link('/error-codes/', 'error code hub')}.</p>
<p>Once the technician has tested the area the code points to, the cause is often a single part such as a drain pump, an inlet valve, a door lock or a sensor. Our ${link('/services/washing-machine-parts-replacement/', 'washing machine parts replacement')} page explains what each of those does and why it fails.</p>

<h2>Brands we repair in Midrand</h2>
<p>We repair all major washing machine brands in Midrand homes, including ${brand('lg', 'LG')}, ${brand('samsung', 'Samsung')}, ${brand('hisense', 'Hisense')}, ${brand('bosch', 'Bosch')}, ${brand('siemens', 'Siemens')}, ${brand('aeg', 'AEG')}, ${brand('miele', 'Miele')}, ${brand('smeg', 'Smeg')}, ${brand('defy', 'Defy')}, ${brand('whirlpool', 'Whirlpool')} and ${brand('speed-queen', 'Speed Queen')}. As an independent repairer, we use those names only to show which machines we work on, and they remain trademarks of their owners. Owners of Defy and Bosch machines have their own guides too: ${codes('defy', 'Defy error codes')} and ${codes('bosch', 'Bosch error codes')}.</p>

<h2>Booking a Midrand technician</h2>
<p>Call or WhatsApp us, or use the ${link('/contact/', 'booking form')}, with your suburb, complex or estate, the brand and model, and what the machine is doing. The technician diagnoses the fault at your home and quotes before any work starts. ${callout}</p>
<p>If you need someone during the morning or afternoon rush, allow for the traffic on the N1 and the main roads through Midrand, which can stretch any arrival time. Repairs carry our ${f.warranty} warranty on parts and labour. You'll find more about our ${link('/', 'washing machine repairs')} across Gauteng on the home page.</p>`,
    faqs: [
      { q: `Do you cover Waterfall and Kyalami Hills?`, a: `Yes, along with Barbeque Downs and the other Kyalami estates. Register the technician with estate security or send the access instructions when you book, so there's no delay at the gate.` },
      { q: `My machine runs on borehole water. Does that matter?`, a: `It can. Borehole sand collects in the inlet filter and slows filling, and hard water scales up the heating element over time. Mention your water source when you book so the technician checks those parts.` },
      { q: `Do you come out to smallholdings in Blue Hills and Glen Austin?`, a: `Yes, and to Kyalami, Crowthorne and Randjesfontein too. Send a location pin on WhatsApp and let us know about gates, dogs or horses, so the technician can find you and get in safely.` },
      { q: `How quickly can you get to Midrand?`, a: `For urgent call-outs we aim to be with you ${f.arrivalTime}, depending on where the technician is working. Midrand sits between our Johannesburg and Pretoria areas, so give us your suburb and we'll confirm a realistic time.` },
      { q: `Our estate only lets contractors in at certain times. Can you work around that?`, a: `Yes. Tell us the estate's contractor hours when you book, so the visit can be booked inside them. If security needs the visit registered in advance, please do that before the day.` },
      { q: `Can I use the machine while our borehole pump is off?`, a: `It's better not to. Without pressure the machine can't fill in the time it expects and will stop with a water supply error partway through the programme. Wait until the pump is running and the other taps have normal pressure again.` },
      { q: `We're moving out of our Midrand flat. Can you get the machine ready to move?`, a: `Yes. Ideally the transit bolts go back in before the move so the drum can't swing, so look for them now and tell us when you book if they're lost. At the new place the machine needs to be connected, levelled and tested before its first wash.` },
      { q: `Do you cover Vorna Valley, Noordwyk and Carlswald?`, a: `Yes, together with Halfway House, Halfway Gardens, Erand Gardens and the rest of central Midrand. Give us the complex name and unit number when you book.` },
      { q: `My machine is built in under the counter. Can you repair it there?`, a: `Yes. The technician slides it out to work on it and pushes it back without kinking the hoses. Clear the cupboard doors and anything stored on top first, and tell us if it's fixed into the cabinetry so we allow enough time.` },
    ],
    nearby: ['sandton', 'centurion', 'johannesburg'],
  },
  'east-rand': {
    title: 'Washing Machine Repairs East Rand | ProServ',
    description: `Washing machine repairs on the East Rand: Kempton Park, Benoni, Boksburg, Germiston, Edenvale, Alberton and more. Call ProServ on ${site.phone.display}.`,
    h1: 'Washing machine repairs on the East Rand',
    intro: `<p>ProServ brings washing machine repairs on the East Rand to your door, from Kempton Park, Edenvale and Bedfordview to Germiston, Boksburg, Benoni, Springs and Alberton. The technician finds the fault at your home and quotes before any work starts.</p>`,
    suburbs: [
      'Kempton Park', 'Benoni', 'Boksburg', 'Germiston', 'Edenvale', 'Bedfordview', 'Alberton', 'Brakpan', 'Springs', 'Nigel',
      'Birchleigh', 'Glen Marais', 'Norkem Park', 'Van Riebeeck Park', 'Bonaero Park', 'Aston Manor', 'Esther Park', 'Edleen',
      'Croydon', 'Rhodesfield', 'Greenstone Hill', 'Primrose', 'Sunward Park', 'Beyers Park', 'Northmead', 'Farrarmere',
      'Rynfield', 'Brackenhurst', 'Brackendowns', 'Meyersdal', 'New Redruth', 'Alberante', 'Mayberry Park',
    ],
    body: `
<h2>Ekurhuleni, town by town</h2>
<p>The East Rand is the City of Ekurhuleni: a string of towns rather than one city, joined by the N3, N12, N17, R21 and R24, with OR Tambo International Airport in the Kempton Park area. We work right across it, so tell us your town as well as your suburb when you book.</p>
<p>Kempton Park spreads from Bonaero Park beside the airport to Birchleigh and Glen Marais further north. Edenvale and Bedfordview are right on the Johannesburg border near Gillooly's Interchange. Germiston and Boksburg follow to the south and east, near Germiston Lake and the East Rand Mall, then Benoni, a town known for its many lakes, with Brakpan, Springs and Nigel further east and Alberton to the south. West of Bedfordview our ${area('johannesburg', 'washing machine repairs in Johannesburg')} page takes over, and Midrand lies to the north-west, beyond Tembisa: see ${area('midrand', 'washing machine repairs in Midrand')}.</p>

<h2>Older homes in the mining towns</h2>
<p>Germiston, Boksburg, Benoni, Brakpan and Springs grew up around mining more than a century ago, and their older suburbs have many freestanding houses on generous plots, with garages, outbuildings and outside laundries. In homes like these the washing machine often stands in the garage or an outside room, with its drain hose hooked over a laundry trough.</p>
<p>A hose that simply hangs over the edge can jump out when the pump pushes water through and flood the floor. Clip it into the U-shaped guide that comes with most machines and fasten the guide to the trough. If the trough itself drains slowly, the blockage is probably in the household drain rather than the machine: see ${link('/problems/washing-machine-not-draining/', 'washing machine not draining')}.</p>
<p>Planning to move the machine out of the kitchen and into the garage? Have the tap, drain and socket in place first, and our ${link('/services/washing-machine-installation/', 'washing machine installation')} service will connect and level it there.</p>
<div class="callout callout-safety"><p><strong>Safety first:</strong> plug the machine straight into a wall socket rather than an extension lead, and keep the plug and socket away from a wet floor. If the earth leakage or a breaker on the DB board trips when the machine runs, leave it switched off at the wall and call a technician, because a trip can point to a dangerous fault.</p></div>

<h2>Estates and complexes</h2>
<p>Newer housing on the East Rand includes security estates such as Meyersdal Eco Estate and Meyersdal Nature Estate in Alberton, as well as townhouse complexes across Kempton Park, Boksburg and Benoni. Register the technician with security or send us the access instructions when you book, with the estate or complex name and your unit or stand number. If visitor parking is outside the gate, tell us where the technician should leave the vehicle.</p>
<p>In a townhouse the machine is usually in a small laundry off the kitchen or in the garage, often with very little room on either side. If it's boxed in by a tumble dryer, shelves or a freezer, clearing a gap before the visit lets the technician pull it out without moving everything else first.</p>

<h2>Work clothes, grit and heavy loads</h2>
<p>If someone in your house works in one of the East Rand's industrial areas, such as Isando, Spartan, Jet Park, Wadeville or Alrode, or on a building site or a mine, their work clothes bring sand, metal filings, grease and grit into the machine. That grit settles in the sump and the pump filter and wears the pump. On a front loader it also collects in the folds of the door seal, where it can wear a hole that leaks on every wash: see ${link('/services/front-loader-repairs/', 'front loader repairs')} and ${link('/services/washing-machine-parts-replacement/', 'parts replacement')} for what's involved.</p>
<ul class="checklist">
  <li>Shake or brush work clothes off outside before they go into the machine.</li>
  <li>Wash heavy overalls in smaller loads, so the drum isn't overloaded and the load can balance for the spin.</li>
  <li>Clean the pump filter regularly, as the manual describes, with the machine switched off at the wall and unplugged, and towels and a tray ready for the water.</li>
  <li>Use a detergent made for heavy soiling, at the dose on the pack, rather than simply adding more.</li>
  <li>Never put clothes soaked in petrol, paraffin, thinners or other flammable liquids into the machine: let them air out completely first, as washing machine manuals warn.</li>
</ul>
<p>A machine that washes work wear every day earns a regular ${link('/services/washing-machine-servicing/', 'washing machine servicing')} visit, which clears the drain path and checks the parts that grit wears out. Mention the work wear when you book, so the technician knows to look closely at the pump and door seal.</p>

<h2>Top loaders and big family loads</h2>
<p>If your household runs a big top loader every day, the parts that carry the weight wear first. A motor that runs while the drum or agitator stays still often points to a worn belt, drive coupling or clutch, a machine that won't spin with the lid shut can point to the lid switch or lock, and banging on spin often means worn suspension rods. See ${link('/services/top-loader-repairs/', 'top loader repairs')} and ${link('/problems/washing-machine-noisy-when-spinning/', 'washing machine noisy when spinning')}.</p>
<p>Heavy-duty machines such as ${brand('speed-queen', 'Speed Queen')} top loaders are built for hard work and are generally worth repairing, as are long-serving ${brand('defy', 'Defy')} and ${brand('whirlpool', 'Whirlpool')} machines when the tub and cabinet are sound. Our ${link('/repair-or-replace/', 'repair or replace guide')} helps you decide when an older machine has done its time.</p>

<h2>After a power outage</h2>
<p>When the power comes back after load shedding or a fault, the voltage can spike or flicker before it settles. Switching the machine off at the wall during the outage, and waiting a few minutes before switching back on, protects its electronics. If it's dead afterwards, the mains filter or the control board may have taken the hit: see ${link('/problems/washing-machine-wont-turn-on/', "washing machine won't turn on")} and our guide to ${link('/blog/protect-washing-machine-from-load-shedding/', 'protecting your washing machine from load shedding')}. If you plan to claim for surge damage on your household insurance, check what your insurer needs before the machine is repaired or replaced.</p>

<h2>Brands we repair on the East Rand</h2>
<p>We repair all major washing machine brands across Ekurhuleni, from ${brand('lg', 'LG')}, ${brand('samsung', 'Samsung')} and ${brand('hisense', 'Hisense')} to ${brand('bosch', 'Bosch')}, ${brand('siemens', 'Siemens')}, ${brand('aeg', 'AEG')}, ${brand('miele', 'Miele')} and ${brand('smeg', 'Smeg')}, along with the Defy, Whirlpool and Speed Queen machines mentioned above. We're independent and not tied to any manufacturer, and the names belong to their owners. If the display shows a code, start with our ${codes('defy', 'Defy error codes')} guide or the ${link('/error-codes/', 'error code hub')}.</p>

<h2>Booking a technician on the East Rand</h2>
<p>Call or WhatsApp us, or use the ${link('/contact/', 'booking form')}, with your town and suburb, the brand and model, and what the machine is doing. We aim to arrive ${f.arrivalTime} on urgent call-outs, depending on where the technician is working, and on an area this size the suburb makes a real difference. If the address is new or hard to find, share a location pin on WhatsApp, and tell us if someone other than you will be home to let the technician in.</p>
<p>${callout} Every repair carries our ${f.warranty} warranty on parts and labour, and ${f.repairsCompleted} repairs have taught us what lasts. Our main ${link('/', 'washing machine repairs')} page explains the rest of the service.</p>`,
    faqs: [
      { q: `Which East Rand towns do you cover?`, a: `Kempton Park, Edenvale, Bedfordview, Germiston, Boksburg, Benoni, Brakpan, Springs, Nigel and Alberton, with their suburbs. The East Rand is a big area, so give us your town and suburb when you book, and we'll tell you when to expect the technician.` },
      { q: `We run a guesthouse near OR Tambo. Can you look after our washing machines?`, a: `Yes. A machine that runs several loads a day wears faster, so a service every six months or so catches worn hoses, pumps and bearings before they fail. Tell us how many machines you have when you book.` },
      { q: `Is Alberton part of your East Rand area?`, a: `Yes. Alberton falls under Ekurhuleni, and we cover suburbs such as Brackenhurst, Brackendowns, New Redruth, Alberante, Mayberry Park and Meyersdal. For the Meyersdal estates, register the technician with security when you book.` },
      { q: `Do you repair machines in Kempton Park near the airport?`, a: `Yes, including Bonaero Park, Rhodesfield, Aston Manor, Esther Park and Croydon close to OR Tambo, and Birchleigh, Glen Marais and Norkem Park further north. Tell us the complex or street name when you book.` },
      { q: `Can you repair a Speed Queen top loader in Benoni?`, a: `Yes. We repair Speed Queen machines across the East Rand, along with other heavy-duty top loaders. Some parts for these models have to be ordered, and if so the technician tells you before you agree to the repair.` },
      { q: `My machine is full of sand from work overalls. Can you clean it out?`, a: `Yes. The technician clears the pump filter, the drain path and the sump, and checks the pump, door seal and drum for grit damage. Shaking or brushing overalls off outside before washing keeps most of the sand out.` },
      { q: `Our DB board trips whenever the machine starts heating. What should I do?`, a: `Leave the machine switched off at the wall and don't keep resetting the breaker. A trip like that can point to a dangerous fault, such as a failing heating element or water reaching an electrical part, and it needs a technician to test it.` },
      { q: `Do you cover Bedfordview and Edenvale?`, a: `Yes. Both are part of Ekurhuleni and of our East Rand area, close to the Johannesburg border, and we work in Edenvale suburbs such as Greenstone Hill. If your street is on the Johannesburg side, our ${area('johannesburg', 'Johannesburg page')} covers you.` },
      { q: `The drain hose keeps jumping out of our laundry trough. How do I stop it?`, a: `Clip the hose into the U-shaped guide supplied with most machines and fasten the guide to the edge of the trough, so the end can't jump out when the pump pushes water through. If the hose is stretched to reach, a longer hose or a proper standpipe may be needed.` },
    ],
    nearby: ['johannesburg', 'midrand'],
  },
};
