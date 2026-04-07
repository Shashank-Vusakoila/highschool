import Head from 'next/head';
import { useState, useEffect, useRef } from 'react';

export default function Home() {
  const [slideIndex, setSlideIndex] = useState(0);
  const [testIndex, setTestIndex] = useState(0);
  const [programmeCarouselIndex, setProgrammeCarouselIndex] = useState(0);
  const [journeyRevealRun, setJourneyRevealRun] = useState(0);
  const [journeyRevealCount, setJourneyRevealCount] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [enquiry, setEnquiry] = useState({
    parentName: '',
    childName: '',
    phone: '',
    classApplying: '',
    village: '',
  });
  const [formMessage, setFormMessage] = useState('');
  const timerRef = useRef(null);
  const journeyTimerRef = useRef(null);
  const journeySectionRef = useRef(null);
  const mapsLink = 'https://maps.app.goo.gl/c4gayoQiuib1UGxHA?g_st=ipc';
  const mapsEmbedLink = 'https://www.google.com/maps?q=Nalanda%20High%20School%20Andhra%20Pradesh%20India&z=15&output=embed';
  const whatsappNumber = '7732034101';
  const whatsappLink = `https://wa.me/91${whatsappNumber}`;

  const slides = [
    {
      bg: '/images/hero1.jpg',
      tag: 'Welcome to Nalanda High School',
      h1: 'Nurturing Every Child',
      em: 'to Reach Their Best',
      p: 'Nalanda High School provides quality education inspired by the spirit of ancient Nalanda - building confident, knowledgeable students rooted in values and ready for the future.',
      btn1: { label: 'Discover Our Story', href: '#about' },
      btn2: { label: 'Apply for Admission', href: '#contact' },
    },
    {
      bg: '/images/hero2.jpg',
      tag: 'Academic Excellence',
      h1: 'Education Beyond',
      em: 'the Classroom',
      p: 'From hands-on learning to creative arts programmes - Nalanda equips students with life skills, critical thinking, and the confidence to lead.',
      btn1: { label: 'Our Programmes', href: '#programmes' },
      btn2: { label: 'Find Our Campus', href: '#location' },
    },
    {
      bg: '/images/hero3.jpg',
      tag: 'A Campus Full of Life',
      h1: 'Quality Education',
      em: 'Close to Home',
      p: 'Set in a green, peaceful environment, Nalanda High School offers a nurturing campus where children feel safe, inspired, and eager to learn every day.',
      btn1: { label: 'View Our Campus', href: '#about' },
      btn2: { label: 'Talk to Us', href: '#contact' },
    },
  ];
  const activeSlide = slides[slideIndex];
  const slideCount = slides.length;
  const currentYear = new Date().getFullYear();

  const testimonials = [
    {
      text: 'My daughter was hesitant to go to school before she joined Nalanda. Within a year, she was reciting poems on stage at the Annual Day. The teachers here do not just teach - they truly care about every child. I am so grateful to this school.',
      name: 'Laxmi Devi',
      role: 'Parent - Class 6 Student',
    },
    {
      text: 'My son joined Nalanda three years ago. His transformation has been remarkable - from a shy boy to a confident young leader. The values and discipline instilled here are truly exceptional. Nalanda is genuinely special.',
      name: 'Ramesh Kumar',
      role: 'Parent - Class 8 Student',
    },
    {
      text: 'The teachers at Nalanda are exceptional. They go above and beyond - personal attention, extra support, and genuine warmth. My children have grown so much in their communication skills and self-confidence.',
      name: 'Saraswathi Rao',
      role: 'Parent - Class 4 & 7 Students',
    },
  ];

  const spotlightProgrammes = [
    {
      no: '01',
      kicker: 'Academics',
      title: 'Activity-Based Learning',
      desc: 'Hands-on, inquiry-driven classrooms that spark curiosity and build deep conceptual understanding from Class I to X.',
      bullets: ['Inquiry-based classroom learning', 'Project and activity-driven teaching', 'Confidence in concepts, not just memory'],
      img: '/images/programmes/activity-based-learning.jpeg',
      imgAlt: 'Students learning in the computer lab',
    },
    {
      no: '02',
      kicker: 'Sports & Fitness',
      title: 'Physical Education & Sports',
      desc: 'Regular sports, yoga, and physical fitness programmes that build teamwork, discipline, and healthy habits.',
      bullets: ['Team sports and athletics', 'Fitness and wellness routines', 'Leadership through sports'],
      img: '/images/programmes/physical-education-sports-main.jpeg',
      imgAlt: 'Students doing outdoor physical exercise',
      carouselImgs: [
        {
          src: '/images/programmes/physical-education-sports-main.jpeg',
          alt: 'Students doing outdoor physical exercise',
        },
        {
          src: '/images/programmes/physical-education-sports-secondary.jpeg',
          alt: 'Students practicing meditation together',
        },
      ],
    },
    {
      no: '03',
      kicker: 'Arts & Culture',
      title: 'Creative Arts Festival',
      desc: 'Annual art festivals, cultural performances, and creative workshops that celebrate each child\'s unique talent and expression.',
      bullets: ['Creative arts performances', 'Cultural celebrations', 'Student art exhibitions'],
      img: '/images/programmes/creative-arts-festival.jpeg',
      imgAlt: 'Students participating in a school cultural programme',
    },
    {
      no: '04',
      kicker: 'Life Skills',
      title: 'Life Skills Programme',
      desc: 'Communication, emotional intelligence, and career awareness - preparing students for life beyond school walls.',
      bullets: ['Communication skills', 'Emotional intelligence', 'Career readiness'],
      img: '/images/programmes/life-skills-programme.jpeg',
      imgAlt: 'Students learning through hands-on field activity',
    },
  ];
  const testimonialCount = testimonials.length;

  const learningPillars = [
    {
      no: '01',
      title: 'Hands-On Learning',
      desc: 'Activity-led lessons help students understand clearly and stay engaged every day.',
      points: ['Activity-led teaching', 'Practical learning', 'Clear concepts'],
    },
    {
      no: '02',
      title: 'Future-Ready Thinking',
      desc: 'Children learn to think, speak, and solve problems with growing confidence.',
      points: ['Critical thinking', 'Confident communication', 'Problem-solving'],
    },
    {
      no: '03',
      title: 'Whole-Child Growth',
      desc: 'Academics, sports, arts, and values come together for balanced development.',
      points: ['Sports and fitness', 'Arts and creativity', 'Values and discipline'],
    },
    {
      no: '04',
      title: 'Caring School Community',
      desc: 'A caring campus and supportive teachers help every child feel safe and encouraged.',
      points: ['Dedicated teachers', 'Safe campus', 'Parent support'],
    },
  ];

  const founders = [
    {
      name: 'Ilapuram Kiran Kumar Reddy',
      initials: 'IK',
      role: 'Founder',
      desc: 'Committed to building a school environment where discipline, care, and quality education grow together.',
    },
    {
      name: 'Bhasker Rao Gupta',
      initials: 'BG',
      role: 'Founder',
      desc: 'Focused on creating a strong educational foundation that supports every child with confidence and opportunity.',
    },
  ];

  const admissionSteps = [
    { no: '01', title: 'Connect', desc: 'Message us on WhatsApp or visit the campus.' },
    { no: '02', title: 'Visit', desc: 'Meet the team and see the school environment.' },
    { no: '03', title: 'Enquire', desc: 'Share your child\'s details and class requirement.' },
    { no: '04', title: 'Start', desc: 'Begin your child\'s journey with confidence.' },
  ];

  const campusMoments = [
    { title: 'Learning Spaces', img: '/images/hero1.jpg' },
    { title: 'Campus Life', img: '/images/campus-life.jpg' },
    { title: 'Digital Learning', img: '/images/digital-learning-classroom.jpeg' },
    { title: 'Community Feel', img: '/images/community-feel.jpg' },
  ];

  const parentPromises = [
    {
      icon: '01',
      title: 'Children Feel Known Here',
      desc: 'Families want a school where children are seen, guided, and encouraged personally instead of getting lost in the crowd.',
    },
    {
      icon: '02',
      title: 'Learning Feels Practical',
      desc: 'The focus moves beyond memorisation toward understanding, expression, participation, and confidence in the classroom.',
    },
    {
      icon: '03',
      title: 'Parents Feel Reassured',
      desc: 'From admissions support to transport guidance and campus visits, the parent journey feels approachable and clear.',
    },
  ];

  const resetTimer = (n) => {
    clearInterval(timerRef.current);
    setSlideIndex(n);
    timerRef.current = setInterval(() => {
      setSlideIndex(prev => (prev + 1) % slideCount);
    }, 5200);
  };

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setSlideIndex(prev => (prev + 1) % slideCount);
    }, 5200);
    return () => clearInterval(timerRef.current);
  }, [slideCount]);

  useEffect(() => {
    const tTimer = setInterval(() => {
      setTestIndex(prev => (prev + 1) % testimonialCount);
    }, 6200);
    return () => clearInterval(tTimer);
  }, [testimonialCount]);

  const handleEnquiryChange = (field) => (e) => {
    setEnquiry(prev => ({ ...prev, [field]: e.target.value }));
  };

  const handleEnquirySubmit = (e) => {
    e.preventDefault();

    if (!enquiry.parentName || !enquiry.childName || !enquiry.phone || !enquiry.classApplying) {
      setFormMessage('Please fill parent name, child name, phone number, and class before submitting.');
      return;
    }

    const message = [
      'Hello Nalanda High School, I would like admission information.',
      `Parent / Guardian Name: ${enquiry.parentName}`,
      `Child Name: ${enquiry.childName}`,
      `Phone Number: ${enquiry.phone}`,
      `Class Applying For: ${enquiry.classApplying}`,
      `Village / Town: ${enquiry.village || 'Not provided'}`,
    ].join('\n');

    setFormMessage('Opening WhatsApp with your enquiry details...');
    window.open(`${whatsappLink}?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('in'); });
      },
      { threshold: 0.12 }
    );
    document.querySelectorAll('.sr').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const programmeTimer = setInterval(() => {
      setProgrammeCarouselIndex((prev) => (prev + 1) % 2);
    }, 2000);

    return () => clearInterval(programmeTimer);
  }, []);

  useEffect(() => {
    if (!journeyRevealRun) return undefined;

    clearInterval(journeyTimerRef.current);
    setJourneyRevealCount(0);

    let currentStep = 0;
    journeyTimerRef.current = setInterval(() => {
      currentStep += 1;
      setJourneyRevealCount(currentStep);

      if (currentStep >= admissionSteps.length) {
        clearInterval(journeyTimerRef.current);
      }
    }, 260);

    return () => clearInterval(journeyTimerRef.current);
  }, [journeyRevealRun, admissionSteps.length]);

  useEffect(() => {
    const section = journeySectionRef.current;
    if (!section) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setJourneyRevealRun((run) => run || 1);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  const goSlide = (n) => resetTimer((n + slides.length) % slides.length);

  return (
    <>
      <Head>
        <title>Nalanda High School | Quality Education in Andhra Pradesh</title>
        <meta name="description" content="Nalanda High School offers quality education, caring teachers, a safe campus, and all-round development for children from Nursery to 10th Class." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0d2340" />
        <meta property="og:title" content="Nalanda High School" />
        <meta property="og:description" content="Quality education, safe campus culture, and all-round development for every child." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/images/about.jpg" />
        <link rel="icon" href="/images/logo.jpg" />
      </Head>

      {/* TOPBAR */}
      <div className="topbar">
        <div className="topbar-inner">
          <span>Admissions: <a href={whatsappLink} target="_blank" rel="noreferrer">WhatsApp +91 {whatsappNumber}</a></span>
          <div className="topbar-r">
            <span><a href="mailto:nalandahighschool@gmail.com">nalandahighschool@gmail.com</a></span>
            <span>Inspiring Young Minds Since Inception</span>
          </div>
        </div>
      </div>

      {/* NAV */}
      <nav id="nav">
        <div className="nav-inner">
          <div className="nav-logo">
            <div className="logo-circle">
              <img src="/images/logo.jpg" alt="NHS Logo" width={46} height={46} style={{ objectFit: 'cover', borderRadius: '50%' }} />
            </div>
            <div className="logo-txt">
              <div className="name">Nalanda <span>High School</span></div>
              <div className="sub">Andhra Pradesh - India</div>
            </div>
          </div>

          <ul className="nav-links">
            <li>
              <a href="#">About <span className="arr">v</span></a>
              <div className="drop">
                <a href="#about">About Us</a>
                <a href="#about">Our Mission</a>
                <a href="#approach">Why Nalanda</a>
              </div>
            </li>
            <li><a href="#programmes">Academics</a></li>
            <li><a href="#life">Life at Nalanda</a></li>
            <li><a href="#location">Our Campus</a></li>
            <li><a href="#contact">Admissions</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>

          <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
            <span /><span /><span />
          </button>
          <a href="#contact" className="nav-cta">Apply Now</a>
        </div>

        {/* Mobile Menu */}
        <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
          <a href="#about" onClick={() => setMenuOpen(false)}>About Us</a>
          <a href="#programmes" onClick={() => setMenuOpen(false)}>Academics</a>
          <a href="#life" onClick={() => setMenuOpen(false)}>Life at Nalanda</a>
          <a href="#location" onClick={() => setMenuOpen(false)}>Our Campus</a>
          <a href="#approach" onClick={() => setMenuOpen(false)}>Why Nalanda</a>
          <a href="#contact" onClick={() => setMenuOpen(false)} className="mob-cta">Apply Now</a>
        </div>
      </nav>

      {/* HERO SLIDER */}
      <section className="hero">
        <div className="hero-ambient hero-ambient-a" />
        <div className="hero-ambient hero-ambient-b" />
        {slides.map((s, i) => (
          <div key={i} className={`slide${slideIndex === i ? ' active' : ''}`}>
            <img className="slide-bg" src={s.bg} alt={s.tag} />
            <div className="slide-ov" />
          </div>
        ))}
        <div className="hero-shell">
          <div className="slide-body">
            <div className="slide-tag">{activeSlide.tag}</div>
            <h1 className="slide-h">{activeSlide.h1}<em>{activeSlide.em}</em></h1>
            <p className="slide-p">{activeSlide.p}</p>
            <div className="hero-trust-row">
              <div className="hero-trust-pill">Established 2012</div>
              <div className="hero-trust-pill">650+ Students</div>
              <div className="hero-trust-pill">28 Classrooms</div>
            </div>
            <div className="hero-btns">
              <a href={activeSlide.btn1.href} className="btn-solid">{activeSlide.btn1.label}</a>
              <a href={activeSlide.btn2.href} className="btn-ghost">{activeSlide.btn2.label}</a>
            </div>
            <div className="hero-caption">
              A values-based school journey built around strong teaching, personal attention, and steady growth from Nursery to 10th Class.
            </div>
          </div>
          <aside className="hero-aside sr d2">
            <div className="hero-showcase">
              <div className="hero-showcase-main">
                <img src="/images/about.jpg" alt="Nalanda campus view" />
                <div className="hero-showcase-badge">
                  <span>Campus Environment</span>
                  <strong>A caring school setting where students can learn with confidence.</strong>
                </div>
              </div>
              <div className="hero-showcase-stack">
                <div className="hero-mini-card">
                  <img src="/images/split.jpg" alt="Nalanda campus" />
                  <div>
                    <span>Campus Life</span>
                    <strong>Structured, safe, and vibrant</strong>
                  </div>
                </div>
                <div className="hero-mini-card">
                  <img src="/images/hero3.jpg" alt="Nalanda students" />
                  <div>
                    <span>Admissions Open</span>
                    <strong>Nursery to 10th Class</strong>
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </div>
        <div className="slider-ctrl">
          <div className="dots">
            {slides.map((_, i) => (
              <div key={i} className={`dot${slideIndex === i ? ' on' : ''}`} onClick={() => goSlide(i)} />
            ))}
          </div>
          <div className="arrows">
            <button onClick={() => goSlide(slideIndex - 1)}>&#8592;</button>
            <button onClick={() => goSlide(slideIndex + 1)}>&#8594;</button>
          </div>
        </div>
      </section>

      {/* STATS STRIP */}
      <div className="stats-strip">
        <div className="stats-row">
          <div className="st sr"><div className="st-num">650<span>+</span></div><div className="st-lbl">Students Enrolled</div></div>
          <div className="st sr d1"><div className="st-num">40<span>+</span></div><div className="st-lbl">Dedicated Educators</div></div>
          <div className="st sr d2"><div className="st-num">28</div><div className="st-lbl">Classrooms</div></div>
          <div className="st sr d3"><div className="st-num">100<span>%</span></div><div className="st-lbl">Holistic Education</div></div>
        </div>
      </div>

      <div className="news-ribbon" aria-label="School highlights">
        <div className="news-ribbon-track">
          {[
            'Admissions open for Nursery to 10th Class',
            'Campus visits welcome for parents',
            'Safe campus and dedicated teachers',
            'Bus routes across nearby areas',
            'Classroom learning with sports and arts',
            'WhatsApp enquiries available directly',
          ].concat([
            'Admissions open for Nursery to 10th Class',
            'Campus visits welcome for parents',
            'Safe campus and dedicated teachers',
            'Bus routes across nearby areas',
            'Classroom learning with sports and arts',
            'WhatsApp enquiries available directly',
          ]).map((item, i) => (
            <span key={i} className="news-ribbon-item">{item}</span>
          ))}
        </div>
      </div>

      <section className="section parent-promise-sec">
        <div className="wrap">
          <div className="parent-promise-wrap">
            <div className="parent-promise-copy sr">
              <div className="eyebrow">What Parents Need Most</div>
              <h2 className="sec-title" style={{ maxWidth: '620px', marginBottom: '14px' }}>
                A School That Feels
                <br />
                <em>Trustworthy, Warm, and Well-Structured</em>
              </h2>
              <p className="sec-body" style={{ maxWidth: '620px' }}>
                Parents look for more than a good campus. They want a school that feels safe, caring, well-run, and genuinely invested in their child. Nalanda leads with those priorities through personal attention, meaningful learning, and an admissions process that feels easy to begin.
              </p>
            </div>
            <div className="parent-promise-grid">
              {parentPromises.map((promise, i) => (
                <article key={promise.title} className={`promise-card sr d${i + 1}`}>
                  <div className="promise-icon">{promise.icon}</div>
                  <h3 className="promise-title">{promise.title}</h3>
                  <p className="promise-desc">{promise.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="section" id="about">
        <div className="wrap">
          <div className="about-grid">
            <div className="about-img sr">
              <img src="/images/about.jpg" alt="Nalanda High School campus" style={{ width: '100%', height: '440px', objectFit: 'cover' }} />
              <div className="about-badge">
                <div className="ab-tag">Nalanda High School</div>
                <div className="ab-val">NHS - Est. 2012</div>
              </div>
            </div>
            <div className="sr d2">
              <div className="eyebrow">About Nalanda High School</div>
              <h2 className="sec-title">Where Every Child Gets<br />a Chance to <em>Shine</em></h2>
              <p className="sec-body">Nalanda High School is inspired by the legacy of ancient Nalanda - the world&apos;s first great university - and carries that spirit forward by providing quality, values-based education to students from Nursery to 10th Class. Rooted in community and dedicated to excellence, we build not just academic skills but confident, compassionate human beings.</p>
              <div className="features">
                <div className="feat">
                  <div className="feat-ico">01</div>
                  <div>
                    <div className="feat-title">Holistic Curriculum</div>
                    <div className="feat-desc">Activity-based, inquiry-driven learning designed to nurture curiosity, creativity, and critical thinking.</div>
                  </div>
                </div>
                <div className="feat">
                  <div className="feat-ico">02</div>
                  <div>
                    <div className="feat-title">Caring, Trained Teachers</div>
                    <div className="feat-desc">Our educators are dedicated mentors who go beyond textbooks to inspire a lifelong love of learning.</div>
                  </div>
                </div>
                <div className="feat">
                  <div className="feat-ico">03</div>
                  <div>
                    <div className="feat-title">Safe, Green Campus</div>
                    <div className="feat-desc">A spacious, serene campus surrounded by nature - the perfect environment for children to grow and thrive.</div>
                  </div>
                </div>
              </div>
              <a href="#contact" className="readmore">Join the Nalanda Family</a>
            </div>
          </div>
        </div>
      </section>

      {/* PROGRAMMES */}
      <section className="section" id="programmes">
        <div className="wrap">
          <div className="programme-hero sr">
            <div className="programme-hero-copy">
              <div className="eyebrow eyebrow-c">Our Programmes</div>
              <h2 className="sec-title">
                All-Round Development for <em>Every Student</em>
              </h2>
              <p className="sec-body">
                Beyond academics - Nalanda invests in every dimension of a child&apos;s growth.
              </p>
            </div>
          </div>
          <div className="programme-showcase">
            <div className="programme-cards-grid sr">
              {spotlightProgrammes.map((programme) => (
                <article key={programme.no} className="programme-card">
                  <div className="programme-card-image">
                    {programme.carouselImgs ? (
                      <div className="programme-card-carousel">
                        {programme.carouselImgs.map((image, index) => (
                          <img
                            key={image.src}
                            className={`programme-card-carousel-image${programmeCarouselIndex === index ? ' is-active' : ''}`}
                            src={image.src}
                            alt={image.alt}
                          />
                        ))}
                      </div>
                    ) : (
                      <img src={programme.img} alt={programme.imgAlt || programme.title} />
                    )}
                  </div>
                  <div className="programme-card-body">
                    <div className="prog-tag">{programme.kicker}</div>
                    <h3 className="programme-card-title">{programme.title}</h3>
                    <p className="programme-card-desc">{programme.desc}</p>
                    <a href="#contact" className="readmore programme-card-link">Learn More</a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section campus-mosaic-sec">
        <div className="wrap">
          <div className="campus-mosaic-head sr">
            <div className="eyebrow eyebrow-c">The Nalanda Experience</div>
            <h2 className="sec-title" style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 14px' }}>
              A More Cinematic Look at
              <br />
              <em>School Life and Environment</em>
            </h2>
          </div>
          <div className="campus-mosaic">
            {campusMoments.map((item, i) => (
              <article key={item.title} className={`campus-tile campus-tile-${i + 1} sr d${(i % 3) + 1}`}>
                <img src={item.img} alt={item.title} />
                <div className="campus-tile-overlay" />
                <div className="campus-tile-copy">
                  <span>{item.title}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section feature-ref-sec" id="approach">
        <div className="wrap">
          <div className="feature-ref-head sr">
            <div className="feature-ref-copy">
              <div className="eyebrow">Why Families Choose Nalanda</div>
              <h2 className="sec-title feature-ref-title">
                A Bright Start Built on
                <br />
                <em>Care, Confidence, and Strong Learning</em>
              </h2>
              <p className="sec-body feature-ref-body">
                Nalanda gives children personal attention, strong teaching, and a safe, encouraging environment to grow.
              </p>
              <div className="feature-ref-tags">
                <span className="feature-ref-tag">Personal Attention</span>
                <span className="feature-ref-tag">Safe Campus</span>
                <span className="feature-ref-tag">Confident Growth</span>
              </div>
            </div>
          </div>
          <div className="pillar-grid feature-ref-tags">
            {learningPillars.map((pillar, i) => (
              <span key={pillar.no} className={`feature-ref-tag sr ${i % 2 ? 'd1' : ''}`}>
                {pillar.title}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="founders-sec">
        <div className="wrap">
          <div className="founders-hdr sr">
            <div className="eyebrow eyebrow-c">Leadership</div>
            <h2 className="sec-title" style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 14px' }}>
              The Founders Behind
              <br />
              <em>Nalanda High School</em>
            </h2>
            <p className="sec-body" style={{ margin: '0 auto', textAlign: 'center', maxWidth: '700px' }}>
              Nalanda High School is guided by founders who believe in disciplined learning, personal care, and meaningful educational growth for every child.
            </p>
          </div>
          <div className="founders-grid">
            {founders.map((founder, i) => (
              <article key={founder.name} className={`founder-card sr d${i + 1}`}>
                <div className="founder-avatar">{founder.initials}</div>
                <div className="founder-role-tag">{founder.role}</div>
                <h3 className="founder-name">{founder.name}</h3>
                <div className="founder-divider" />
                <p className="journey-desc" style={{ maxWidth: '420px', margin: '0 auto' }}>{founder.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SPLIT */}
      <section className="split" id="life">
        <div className="split-txt sr">
          <div className="eyebrow eyebrow-lt">A Campus Full of Life</div>
          <h2 className="sec-title sec-title-w">Our Students Are<br />Prepared for <em style={{ color: '#dbeeff' }}>Achievement</em></h2>
          <p className="sec-body sec-body-w">Nalanda High School nurtures not just academic excellence but holistic development - arts, sports, life skills, and character. Our students leave not just with marks, but with confidence, values, and a vision for their future.</p>
          <div className="split-btns">
            <a href="#programmes" className="btn-wh-solid">Our Academics</a>
            <a href="#contact" className="btn-wh-out">Apply Now</a>
          </div>
        </div>
        <div className="split-img">
          <img src="/images/split.jpg" alt="Nalanda campus aerial view" />
        </div>
      </section>

      {/* LOCATION */}
      <section className="section" id="location">
        <div className="wrap">
          <div className="location-hdr sr">
            <div className="eyebrow eyebrow-c">Our Campus</div>
            <h2 className="sec-title" style={{ textAlign: 'center', maxWidth: '520px', margin: '0 auto 14px' }}>Visit Nalanda<br /><em>High School</em></h2>
            <p className="sec-body" style={{ textAlign: 'center', margin: '0 auto' }}>Conveniently located and served by our own fleet of school buses - Nalanda is always within reach.</p>
          </div>
          <div className="location-layout">
            <div className="map-card sr">
              <div className="map-frame">
                <iframe
                  src={mapsEmbedLink}
                  loading="lazy"
                  allowFullScreen=""
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Nalanda High School location map"
                />
                <div className="map-ui">
                  <div className="map-badge">Google Maps</div>
                  <a href={mapsLink} target="_blank" rel="noreferrer" className="map-open-btn">Open Directions</a>
                </div>
              </div>
              <div className="map-foot">
                <span className="map-foot-label">Nalanda High School - Andhra Pradesh, India</span>
                <a href={mapsLink} target="_blank" rel="noreferrer" className="map-foot-link">View Larger Map</a>
              </div>

            </div>
            <div className="sr d2">
              <div className="location-info">
                <div className="loc-item">
                  <div className="loc-ico">LOC</div>
                  <div>
                    <div className="loc-label">Address</div>
                    <div className="loc-val">Nalanda High School<br />Andhra Pradesh, India<br /><a href={mapsLink} target="_blank" rel="noreferrer" style={{ color: 'var(--accent-1)', fontSize: '.78rem', fontStyle: 'italic' }}>Open exact school location in Google Maps</a></div>
                  </div>
                </div>
                <div className="loc-item">
                  <div className="loc-ico">WA</div>
                  <div>
                    <div className="loc-label">WhatsApp</div>
                    <div className="loc-val">
                      <a href={whatsappLink} target="_blank" rel="noreferrer">+91 {whatsappNumber}</a>
                    </div>
                  </div>
                </div>
                <div className="loc-item">
                  <div className="loc-ico">MAIL</div>
                  <div>
                    <div className="loc-label">Email</div>
                    <div className="loc-val"><a href="mailto:nalandahighschool@gmail.com">nalandahighschool@gmail.com</a></div>
                  </div>
                </div>
                <div className="loc-item">
                  <div className="loc-ico">BUS</div>
                  <div>
                    <div className="loc-label">Transport</div>
                    <div className="loc-val">School bus service available across surrounding villages and towns. Contact the office for routes &amp; timings.</div>
                  </div>
                </div>
                <div className="loc-item">
                  <div className="loc-ico">HRS</div>
                  <div>
                    <div className="loc-label">School Hours</div>
                    <div className="loc-val">Mon - Sat: 8:30 AM - 4:30 PM<br />Office: 9:00 AM - 5:00 PM</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section ref={journeySectionRef} className="section admission-journey-sec">
        <div className="wrap">
          <div className="journey-head sr">
            <div className="eyebrow eyebrow-c">Admissions Journey</div>
            <h2 className="sec-title journey-title-main">A Simple Path from Enquiry<br /><em>to First Day</em></h2>
            <p className="sec-body journey-body">Clear, friendly steps that help families move forward with ease.</p>
          </div>
          <div className="journey-grid">
            {admissionSteps.map((step, i) => (
              <article key={step.no} className={`journey-card sr d${i % 4} journey-card-reveal${journeyRevealCount > i ? ' revealed' : ''}`}>
                <div className="journey-step-top">
                  <div className="journey-no">{step.no}</div>
                  <div className="journey-step-line" />
                </div>
                <h3 className="journey-title">{step.title}</h3>
                <p className="journey-desc">{step.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="test-sec">
        <div className="test-inner">
          <div className="eyebrow eyebrow-lt eyebrow-c sr">Parent Testimonials</div>
          <h2 className="sec-title sec-title-w sr d1">Voices from the<br /><em style={{ color: '#dbeeff' }}>Nalanda Family</em></h2>
          <div className="tslider">
            {testimonials.map((t, i) => (
              <div key={i} className={`tslide${testIndex === i ? ' on' : ''}`}>
                <div className="tq">&ldquo;</div>
                <p className="t-text">{t.text}</p>
                <div className="t-name">{t.name}</div>
                <div className="t-role">{t.role}</div>
              </div>
            ))}
          </div>
          <div className="tdots">
            {testimonials.map((_, i) => (
              <div key={i} className={`dot${testIndex === i ? ' on' : ''}`} onClick={() => setTestIndex(i)} />
            ))}
          </div>
        </div>
      </section>

      {/* ADMISSIONS CTA */}
      <section className="admit-sec" id="contact">
        <div className="admit-inner">
          <div className="admit-txt sr">
            <div className="eyebrow">Admissions Open</div>
            <h2 className="sec-title">Give Your Child the<br /><em>Education They Deserve</em></h2>
            <p className="sec-body">Nalanda High School welcomes all children from Nursery to 10th Class. Our doors are open to every family in the community. Enrol today and take the first step toward a brighter future.</p>
            <div className="admit-btns" style={{ marginTop: '28px' }}>
              <a href={whatsappLink} target="_blank" rel="noreferrer" className="btn-green">WhatsApp Now</a>
              <a href={mapsLink} target="_blank" rel="noreferrer" className="btn-green-out">Open School Location</a>
            </div>
            <div className="admit-proof-list">
              <div className="admit-proof-item">Campus visits available for parents</div>
              <div className="admit-proof-item">Direct WhatsApp admission support</div>
              <div className="admit-proof-item">Transport guidance for nearby areas</div>
            </div>
            <div style={{ marginTop: '32px', padding: '22px', background: 'var(--panel-strong)', border: '1px solid rgba(255,255,255,.7)', borderRadius: '20px', boxShadow: 'var(--shadow-sm)', backdropFilter: 'var(--glass)' }}>
              <p style={{ fontSize: '.78rem', fontWeight: 700, color: 'var(--navy)', marginBottom: '10px', letterSpacing: '.08em', textTransform: 'uppercase' }}>School Office</p>
              <p style={{ fontSize: '.8rem', color: 'var(--muted)', lineHeight: 1.7 }}>
                Nalanda High School<br />
                Andhra Pradesh, India<br />
                <strong style={{ color: 'var(--navy)' }}>
                  <a href="mailto:nalandahighschool@gmail.com">nalandahighschool@gmail.com</a>
                </strong>
              </p>
            </div>
          </div>

          <form className="admit-form sr d2" onSubmit={handleEnquirySubmit}>
            <h3>Request Admission Information</h3>
            <div className="fgrp">
              <input type="text" placeholder="Parent / Guardian Name" value={enquiry.parentName} onChange={handleEnquiryChange('parentName')} />
              <input type="text" placeholder="Child's Name" value={enquiry.childName} onChange={handleEnquiryChange('childName')} />
              <input type="tel" placeholder="Phone Number" value={enquiry.phone} onChange={handleEnquiryChange('phone')} />
              <select value={enquiry.classApplying} onChange={handleEnquiryChange('classApplying')}>
                <option value="">Class Applying For</option>
                {['Nursery', 'LKG', 'UKG', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X'].map(c => (
                  <option key={c} value={['Nursery', 'LKG', 'UKG'].includes(c) ? c : `Class ${c}`}>
                    {['Nursery', 'LKG', 'UKG'].includes(c) ? c : `Class ${c}`}
                  </option>
                ))}
              </select>
              <input type="text" placeholder="Village / Town" value={enquiry.village} onChange={handleEnquiryChange('village')} />
              <button type="submit">Submit Enquiry -&gt;</button>
              {formMessage ? <p className="form-msg">{formMessage}</p> : null}
            </div>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="footer-top">
          <div>
            <div className="fl-logo-row">
              <div className="logo-circle" style={{ width: '42px', height: '42px', fontSize: '1.05rem', overflow: 'hidden' }}>
                <img src="/images/logo.jpg" alt="NHS" width={42} height={42} style={{ objectFit: 'cover' }} />
              </div>
              <div>
                <div className="fl-name">Nalanda <span>High School</span></div>
                <div className="fl-sub">Andhra Pradesh - India</div>
              </div>
            </div>
            <p className="fl-desc">Inspired by the ancient seat of learning, Nalanda High School is dedicated to providing quality, inclusive education to every child - building futures rooted in values, knowledge, and confidence.</p>
            <div className="fl-affil">Founded by <strong>Ilapuram Kiran Kumar Reddy &amp; Bhasker Rao Gupta</strong></div>
          </div>

          <div className="fc">
            <h5>Quick Links</h5>
            <a href="#">Home</a>
            <a href="#about">About Us</a>
            <a href="#approach">Why Nalanda</a>
            <a href="#programmes">Academics</a>
            <a href="#life">Life at Nalanda</a>
            <a href="#location">Our Campus</a>
            <a href="#contact">Admissions</a>
            <a href="#contact">Contact</a>
          </div>

          <div className="fc">
            <h5>Contact</h5>
            <p><strong>School Office</strong><br />Nalanda High School<br />Andhra Pradesh, India</p>
            <p style={{ marginTop: '10px' }}><strong>WhatsApp</strong><br /><a href={whatsappLink} target="_blank" rel="noreferrer">+91 {whatsappNumber}</a></p>
            <p style={{ marginTop: '10px' }}><strong>Location</strong><br /><a href={mapsLink} target="_blank" rel="noreferrer">Open in Google Maps</a></p>
            <p style={{ marginTop: '10px' }}><strong>Email</strong><br /><a href="mailto:nalandahighschool@gmail.com">nalandahighschool@gmail.com</a></p>
          </div>

          <div className="fc">
            <h5>Classes Offered</h5>
            {['Nursery - UKG (Foundational)', 'Class I - V (Primary)', 'Class VI - VIII (Middle)', 'Class IX - X (Secondary)'].map(c => (
              <a key={c} href="#contact">{c}</a>
            ))}
            <h5 style={{ marginTop: '20px' }}>Transport</h5>
            <a href="#contact">Bus Routes Available</a>
            <a href="#contact">Enquire for Details</a>
          </div>
        </div>
        <div className="footer-bot">
          <p>Copyright {currentYear} Nalanda High School. All rights reserved.</p>
          <p>650+ Students - 40+ Educators - 28 Classrooms</p>
        </div>
      </footer>

      <div className="mobile-cta-bar">
        <a href={whatsappLink} target="_blank" rel="noreferrer" className="mobile-cta-primary">WhatsApp Admissions</a>
        <a href="#contact" className="mobile-cta-secondary">Apply Now</a>
      </div>
    </>
  );
}
