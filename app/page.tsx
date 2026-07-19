const services = [
  ["01", "Brand Strategy & Messaging", "Clarify what your organization stands for, how it should sound, and the story every public touchpoint should reinforce."],
  ["02", "Digital Brand Management", "Create a consistent, current presence across profiles, platforms, photography, messaging, and leadership communications."],
  ["03", "Reputation Oversight", "Monitor reviews, mentions, recurring themes, and public signals—then give leadership thoughtful recommendations."],
  ["04", "Executive Branding", "Help owners and leaders show up with the clarity, confidence, and warmth their role requires."],
  ["05", "Organic Social Presence", "Plan purposeful content that reflects your people, culture, expertise, and community involvement."],
  ["06", "Creative Coordination", "Guide photography and video so every asset feels intentional, elevated, and aligned with your brand."],
];

const steps = [
  ["Discover", "Review the public-facing brand and listen to leadership."],
  ["Define", "Establish priorities, standards, messages, and opportunities."],
  ["Direct", "Coordinate content, creative work, and public presentation."],
  ["Steward", "Monitor consistency, reputation, and the next right moves."],
];

export default function Home() {
  return <main>
    <header className="topbar">
      <a className="logo" href="#top" aria-label="Haley Mae home">HALEY MAE<span>Brand Management</span></a>
      <nav aria-label="Main navigation"><a href="#approach">Approach</a><a href="#services">Services</a><a href="#process">Process</a><a href="#about">About</a></nav>
      <a className="top-cta" href="#contact">Request a Brand Review</a>
    </header>

    <section className="hero" id="top">
      <div className="hero-copy">
        <p className="eyebrow">Brand presentation · reputation · stewardship</p>
        <h1>Your reputation is already speaking.</h1>
        <p className="lead">We help respected organizations make sure it says the right things—with clear strategy, elevated presentation, and thoughtful oversight.</p>
        <div className="actions"><a className="button dark" href="#contact">Schedule a Brand Review <b>↗</b></a><a className="link" href="#approach">Explore our approach ↓</a></div>
        <div className="location"><span>Atlanta, Georgia</span><span>Serving select organizations nationwide</span></div>
      </div>
      <figure className="hero-image"><img src="/images/hero.png" alt="Refined executive office overlooking the Atlanta skyline"/><figcaption><b>01</b> The strongest brands feel consistent before they say a word.</figcaption></figure>
    </section>

    <section className="intro" id="approach">
      <p className="label">The opportunity</p>
      <div><h2>Let the outside reflect the excellence on the inside.</h2><aside><p>Your organization may be exceptional in person. But potential clients, employees, donors, and community partners often encounter your brand long before they meet your people.</p><p>Haley Mae brings leadership-level attention to those impressions—so your public presence feels as capable, current, and credible as the organization behind it.</p></aside></div>
    </section>

    <section className="story">
      <img src="/images/strategy.png" alt="Executive conference table prepared for a brand strategy review"/>
      <div><p className="label">A different kind of partner</p><h2>Brand stewardship, not marketing noise.</h2><p>We work as an extension of leadership—bringing structure, judgment, and consistency to the digital places where trust is built or lost.</p><ul><li>Senior-level attention</li><li>Clear monthly priorities</li><li>Coordinated creative direction</li><li>Reputation-aware recommendations</li></ul></div>
    </section>

    <section className="services" id="services">
      <div className="heading"><p className="label">What we manage</p><h2>One clear standard across every public impression.</h2><p>Focused support for organizations that care deeply about how they are seen, understood, and trusted.</p></div>
      <div className="service-list">{services.map(([n,t,d])=><article key={n}><span>{n}</span><h3>{t}</h3><p>{d}</p></article>)}</div>
    </section>

    <section className="results">
      <img src="/images/reputation.png" alt="Brand reputation and presentation review in a refined workspace"/>
      <div><p className="label">What stronger looks like</p><blockquote>“Every photograph, profile, post, review response, and leadership update should feel like it came from the same confident organization.”</blockquote><div className="outcomes"><p><b>Clearer</b> positioning and public language</p><p><b>Stronger</b> leadership and recruiting presence</p><p><b>Consistent</b> visuals across every platform</p><p><b>Informed</b> reputation decisions and responses</p></div></div>
    </section>

    <section className="process" id="process">
      <div className="heading"><p className="label">How we work</p><h2>Thoughtful from the first review forward.</h2></div>
      <div className="steps">{steps.map(([t,d],i)=><article key={t}><span>0{i+1}</span><h3>{t}</h3><p>{d}</p></article>)}</div>
      <p className="fine">Ongoing engagements are tailored to the organization’s size, platforms, leadership needs, and creative priorities. Photography, videography, and outside production are coordinated and quoted separately when needed.</p>
    </section>

    <section className="fit">
      <p className="label">Designed for</p><h2>Established organizations at a visible moment.</h2>
      <div className="fit-grid"><article><span>01</span><h3>Growing organizations</h3><p>Whose public presence has not kept pace with the quality or scale of their work.</p></article><article><span>02</span><h3>Leadership-led firms</h3><p>Where trust in the people behind the organization materially shapes opportunity.</p></article><article><span>03</span><h3>Reputation-conscious teams</h3><p>That want a steady, experienced eye on public presentation and perception.</p></article></div>
      <p className="industries">Professional services · Healthcare · Real estate · Education · Churches & nonprofits · Hospitality · Private companies</p>
    </section>

    <section className="about" id="about"><div className="monogram">HM</div><div><p className="label">About Haley Mae</p><h2>Warm judgment. Elevated standards. Personal attention.</h2></div><aside><p>Haley Mae is a founder-led brand management firm built for organizations that value reputation, professionalism, and long-term trust.</p><p>Drawing on experience in client relations, hospitality, private aviation, photography, and public presentation, Haley brings a discerning but practical perspective to how organizations show up.</p><p>The result is not a louder brand. It is a more considered, confident, and credible one.</p></aside></section>

    <section className="contact" id="contact"><p className="label">Begin the conversation</p><h2>See your brand the way the public sees it.</h2><p>A private introductory review helps identify what already feels strong, what may be weakening trust, and where focused attention can make the greatest difference.</p><a className="button light" href="mailto:hello@haleymae.com?subject=Brand%20Review%20Request">Request a Brand Review <b>↗</b></a><div><span>Confidential introductory conversation</span><span>Atlanta · Available nationwide</span></div></section>

    <footer><a className="logo" href="#top">HALEY MAE<span>Brand Management</span></a><p>Helping organizations look as strong publicly as they are in person.</p><nav><a href="#services">Services</a><a href="#process">Process</a><a href="#about">About</a><a href="#contact">Contact</a></nav><small>© 2026 Haley Mae LLC. All rights reserved.</small></footer>
  </main>;
}
