import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ThreeWrapper from '@/components/ThreeWrapper';
import ProcessCarousel from '@/components/ProcessCarousel';
import ServicesCarousel from '@/components/ServicesCarousel';
import ScrollReveal from '@/components/ScrollReveal';

import { Mail, Target, CheckCircle, Smartphone, MessageCircle, BarChart, PenTool, Star, TrendingUp, Layers, Check, ArrowRight } from 'lucide-react';

export default function Home() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Irshad Ahamed',
    url: 'https://irshadahamed.com',
    jobTitle: 'SaaS Builder & Full Stack Developer',
    sameAs: [
      'https://www.linkedin.com/in/irshad-ahamed',
      'https://github.com/irshadahamed',
      'https://twitter.com/irshadahamed',
    ],
    image: 'https://irshadahamed.com/profile.jpg',
    description: 'SaaS Builder and Developer transforming complex problems into elegant, scalable digital solutions.',
  };

  return (
    <main style={{ minHeight: '100vh', position: 'relative' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ThreeWrapper />
      <div style={{ position: 'relative', zIndex: 10 }}>
        <Navbar />
        <Hero />

        {/* 1. Services */}
        <section id="services" style={{ minHeight: 'auto', padding: '6rem 0', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', zIndex: 10 }}>
          <ScrollReveal>
            <div style={{ width: '100%', textAlign: 'center' }}>
              <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem', color: '#fff' }}>Services</h2>
              <ServicesCarousel />
            </div>
          </ScrollReveal>
        </section>

        {/* ========================================= */}
        {/* == SMM PROPOSAL CARD LINK (Know More) == */}
        {/* ========================================= */}
        <section id="smm-proposal" style={{ padding: '0 5% 6rem 5%', maxWidth: '1200px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '2rem', zIndex: 10, position: 'relative', width: '100%', boxSizing: 'border-box' }}>
          <ScrollReveal>
             <div className="glass glass-hover" style={{ padding: 'clamp(2rem, 6vw, 4rem) clamp(1.5rem, 5vw, 4rem)', width: '100%', maxWidth: '900px', margin: '0 auto', textAlign: 'center', borderRadius: '24px', border: '1px solid var(--glass-border)', background: 'linear-gradient(135deg, rgba(255,255,255,0.03), rgba(255,255,255,0.01))', boxSizing: 'border-box', overflow: 'hidden' }}>
                <div style={{ display: 'inline-flex', padding: '1rem', background: 'rgba(59, 130, 246, 0.1)', borderRadius: '50%', marginBottom: '1.5rem' }}>
                  <Target size={40} color="var(--primary)" />
                </div>
                <h2 className="gradient-text" style={{ fontSize: 'clamp(1.8rem, 6vw, 3rem)', marginBottom: '1rem', fontWeight: 800, wordBreak: 'break-word' }}>Social Media Management</h2>
                <p style={{ opacity: 0.9, marginBottom: '2.5rem', fontSize: 'clamp(1rem, 3vw, 1.3rem)', color: '#fff', maxWidth: '600px', margin: '0 auto 2.5rem auto' }}>
                  We don't just manage social media—we build brands that people trust, follow, and buy from. Discover our complete Social Media Management & Branding strategies.
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem' }}>
                  <a href="/ahmd-graphix" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem', padding: '1rem 2.5rem', background: 'var(--primary)', color: '#fff', borderRadius: '50px', fontSize: '1.1rem', fontWeight: 'bold', textDecoration: 'none', boxShadow: '0 4px 15px rgba(59, 130, 246, 0.4)', transition: 'transform 0.2s ease, box-shadow 0.2s ease' }}>
                    Know More <ArrowRight size={20} />
                  </a>
                </div>
             </div>
          </ScrollReveal>
        </section>

        {/* 2. Process */}
        <section id="process" style={{ minHeight: 'auto', padding: '6rem 0', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', zIndex: 10 }}>
          <ScrollReveal>
            <div style={{ width: '100%', textAlign: 'center' }}>
              <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem', color: '#fff' }}>Our Process</h2>
              <ProcessCarousel />
            </div>
          </ScrollReveal>
        </section>

        {/* 3. Contact Segment */}
        <section id="contact" style={{ minHeight: 'auto', padding: '6rem 5%', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', zIndex: 10, width: '100%', boxSizing: 'border-box' }}>
          <ScrollReveal>
            <div className="glass" style={{ padding: 'clamp(2rem, 6vw, 4rem) clamp(1.5rem, 5vw, 4rem)', width: '100%', maxWidth: '800px', margin: '0 auto', boxSizing: 'border-box', overflow: 'hidden' }}>
              <h2 style={{ fontSize: 'clamp(1.8rem, 6vw, 3rem)', marginBottom: '1rem', textAlign: 'center', wordBreak: 'break-word' }} className="gradient-text">Let&apos;s Work Together</h2>
              <p style={{ textAlign: 'center', opacity: 0.8, marginBottom: '3rem', fontSize: 'clamp(1rem, 3vw, 1.2rem)', color: '#fff' }}>
                Ready to start your next project? Drop me a line.
              </p>
              <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
                <a href="mailto:ahamedirshad1412@gmail.com" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.75rem 1.5rem', background: 'var(--primary)', color: '#fff', borderRadius: '50px', fontWeight: 'bold', textDecoration: 'none', whiteSpace: 'nowrap' }}>
                  <Mail size={20} />
                  Email Me
                </a>
                <a href="https://wa.me/916381950719" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.75rem 1.5rem', background: 'var(--glass-bg)', border: '1px solid var(--glass-border)', borderRadius: '50px', color: '#fff', textDecoration: 'none', whiteSpace: 'nowrap' }}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
                  </svg>
                  WhatsApp
                </a>
              </div>
            </div>
          </ScrollReveal>
        </section>

        <footer style={{ padding: '2rem', textAlign: 'center', borderTop: '1px solid var(--glass-border)', background: 'var(--glass-bg)' }}>
          <p style={{ color: '#fff', opacity: 0.8, margin: 0 }}>© {new Date().getFullYear()} Irshad Ahamed. All rights reserved.</p>
        </footer>
      </div>
    </main>
  );
}
