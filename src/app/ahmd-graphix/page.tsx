import React from 'react';
import Navbar from '@/components/Navbar';
import ScrollReveal from '@/components/ScrollReveal';
import { 
  Mail, Target, CheckCircle, Smartphone, 
  MessageCircle, BarChart, PenTool, Star, 
  TrendingUp, Layers, Check, ArrowRight
} from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';

export const metadata = {
  title: 'AHMD Graphix - Social Media Management Proposal',
  description: 'Complete Social Media Management Proposal Booklet by AHMD Graphix.',
};

export default function AhmdGraphixProposal() {
  return (
    <>
      <Navbar />
      <div style={{ padding: '6rem 5%', maxWidth: '1200px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '4rem', color: '#fff' }}>
        
        {/* 1. Cover Page */}
        <ScrollReveal>
          <div className="glass" style={{ padding: '4rem 2rem', textAlign: 'center', borderRadius: '24px' }}>
            <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', marginBottom: '1rem', color: '#ffffff', fontWeight: 800 }}>
              AHMD Graphix
            </h1>
            <h2 style={{ fontSize: 'clamp(1.2rem, 3vw, 1.8rem)', opacity: 0.9, marginBottom: '2rem', fontWeight: 500, color: '#fff' }}>
              Our Social Media Management
            </h2>
            <p style={{ fontSize: 'clamp(1rem, 2vw, 1.2rem)', opacity: 0.95, marginBottom: '2rem', color: '#fff' }}>
              Transforming Brands Through Creative Digital Presence
            </p>
            
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem', marginTop: '2rem' }}>
              <span className="glass" style={{ padding: '0.75rem 1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem', borderRadius: '50px', fontSize: 'clamp(0.8rem, 1.5vw, 1rem)' }}>
                <Target size={18} /> Social Media Management
              </span>
              <span className="glass" style={{ padding: '0.75rem 1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem', borderRadius: '50px', fontSize: 'clamp(0.8rem, 1.5vw, 1rem)' }}>
                <PenTool size={18} /> Content Creation
              </span>
              <span className="glass" style={{ padding: '0.75rem 1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem', borderRadius: '50px', fontSize: 'clamp(0.8rem, 1.5vw, 1rem)' }}>
                <Star size={18} /> Branding
              </span>
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1.5rem', marginTop: '3rem' }}>
              <a href="https://wa.me/916381950719" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '1rem 2rem', background: 'var(--primary)', color: '#fff', borderRadius: '50px', fontWeight: 'bold', textDecoration: 'none' }}>
                <FaWhatsapp size={20} />
                Contact Us
              </a>
              <a href="mailto:ahamedirshad1412@gmail.com" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '1rem 2rem', background: 'var(--glass-bg)', border: '1px solid var(--glass-border)', borderRadius: '50px', color: '#fff', textDecoration: 'none' }}>
                <Mail size={20} />
                Email
              </a>
            </div>
          </div>
        </ScrollReveal>

        {/* 2. About AHMD Graphix */}
        <ScrollReveal>
          <div style={{ padding: '2rem 0' }}>
            <h2 className="gradient-text" style={{ fontSize: 'clamp(2rem, 4vw, 2.5rem)', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '1rem', color: '#fff' }}>
              About AHMD Graphix
            </h2>
            <p style={{ fontSize: 'clamp(1rem, 2vw, 1.2rem)', lineHeight: '1.8', opacity: 0.9, marginBottom: '1.5rem', color: '#fff' }}>
              At <strong style={{color: '#fff'}}>AHMD Graphix</strong>, we don&apos;t just manage social media—we build brands that people trust, follow, and buy from.
            </p>
            <p style={{ fontSize: 'clamp(1rem, 2vw, 1.1rem)', lineHeight: '1.8', opacity: 0.95, marginBottom: '1.5rem', color: '#fff' }}>
              We are a creative digital service provider focused on helping businesses establish a strong and consistent online presence. With a deep understanding of the market, trends, and audience behavior, we craft strategies that drive real results.
            </p>
            <div className="glass" style={{ padding: '2rem', borderLeft: '4px solid var(--primary)', marginTop: '2rem' }}>
              <h3 style={{ fontSize: 'clamp(1.2rem, 2.5vw, 1.5rem)', marginBottom: '1rem', color: '#fff' }}>Our Mission is Simple:</h3>
              <p style={{ fontSize: 'clamp(1rem, 2vw, 1.2rem)', fontWeight: 500, margin: 0, color: '#fff' }}>
                Turn your social media into a powerful business tool that attracts customers and generates revenue.
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* 3. Our Vision & Mission */}
        <ScrollReveal>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
            <div className="glass glass-hover" style={{ padding: '3rem 2rem', borderRadius: '16px' }}>
              <h3 style={{ fontSize: 'clamp(1.5rem, 3vw, 1.8rem)', marginBottom: '1rem', color: 'var(--primary)' }}>Vision</h3>
              <p style={{ fontSize: 'clamp(1rem, 2vw, 1.1rem)', lineHeight: '1.7', opacity: 0.9, color: '#fff' }}>
                To become a trusted creative partner for businesses looking to grow digitally.
              </p>
            </div>
            <div className="glass glass-hover" style={{ padding: '3rem 2rem', borderRadius: '16px' }}>
              <h3 style={{ fontSize: 'clamp(1.5rem, 3vw, 1.8rem)', marginBottom: '1.5rem', color: 'var(--secondary)' }}>Mission</h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <li style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}><CheckCircle color="var(--accent)" size={24} style={{ flexShrink: 0 }} /> <span style={{ opacity: 0.9, fontSize: 'clamp(0.95rem, 1.5vw, 1.1rem)', color: '#fff' }}>Deliver high-quality content and strategy</span></li>
                <li style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}><CheckCircle color="var(--accent)" size={24} style={{ flexShrink: 0 }} /> <span style={{ opacity: 0.9, fontSize: 'clamp(0.95rem, 1.5vw, 1.1rem)', color: '#fff' }}>Help brands stand out in a crowded market</span></li>
                <li style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}><CheckCircle color="var(--accent)" size={24} style={{ flexShrink: 0 }} /> <span style={{ opacity: 0.9, fontSize: 'clamp(0.95rem, 1.5vw, 1.1rem)', color: '#fff' }}>Provide affordable yet impactful digital solutions</span></li>
              </ul>
            </div>
          </div>
        </ScrollReveal>

        {/* 4. Challenges Businesses Face Today */}
        <ScrollReveal>
          <div className="glass" style={{ padding: 'clamp(2rem, 5vw, 4rem)', borderRadius: '24px' }}>
            <h2 className="gradient-text" style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap', color: '#fff' }}>
              Challenges Businesses Face Today
            </h2>
            <p style={{ fontSize: 'clamp(1rem, 2vw, 1.2rem)', marginBottom: '2rem', opacity: 0.9, color: '#fff' }}>Most businesses struggle with:</p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem', marginBottom: '2.5rem' }}>
              {['Inconsistent content posting', 'Poor design and low-quality visuals', 'No clear brand identity', 'Low engagement and reach', 'No time to manage social media', 'Lack of strategy and direction'].map((chal, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1rem', background: 'rgba(239, 68, 68, 0.1)', borderRadius: '12px', border: '1px solid rgba(239, 68, 68, 0.2)' }}>
                  <span style={{ color: '#f87171', fontWeight: 'bold' }}>✕</span>
                  <span style={{ opacity: 0.9, color: '#fff' }}>{chal}</span>
                </div>
              ))}
            </div>
            <div style={{ padding: '1.5rem', background: 'rgba(255,255,255,0.05)', borderRadius: '12px', textAlign: 'center' }}>
              <p style={{ fontSize: 'clamp(1rem, 2vw, 1.2rem)', fontWeight: 500, margin: 0, color: '#fff' }}>
                This leads to <strong style={{ color: '#f87171' }}>lost customers, low visibility, and weak brand perception</strong>
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* 5. Our Solution */}
        <ScrollReveal>
          <div className="glass" style={{ padding: 'clamp(2rem, 5vw, 4rem)', borderRadius: '24px', border: '1px solid var(--accent)' }}>
            <h2 className="gradient-text" style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '1rem', color: '#fff' }}>
              Our Solution
            </h2>
            <p style={{ fontSize: 'clamp(1rem, 2vw, 1.2rem)', lineHeight: '1.8', opacity: 0.9, marginBottom: '2rem', color: '#fff' }}>
              We provide <strong style={{ color: '#fff' }}>end-to-end social media management services</strong> that cover everything from planning to execution and growth. With AHMD Graphix, your business will have:
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
              {['A consistent and professional online presence', 'High-quality and engaging content', 'A clear brand identity', 'A strategy focused on growth and conversions'].map((sol, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', padding: '1.5rem', background: 'rgba(16, 185, 129, 0.1)', borderRadius: '12px', border: '1px solid rgba(16, 185, 129, 0.2)' }}>
                  <CheckCircle color="var(--accent)" size={24} style={{ flexShrink: 0 }} />
                  <span style={{ opacity: 0.9, fontSize: 'clamp(0.95rem, 1.5vw, 1.1rem)', fontWeight: 500, color: '#fff' }}>{sol}</span>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* 6. Our Services */}
        <ScrollReveal>
          <div>
            <h2 className="gradient-text" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: '3rem', textAlign: 'center', color: '#fff' }}>
              Our Services
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              
              {/* Content Creation */}
              <div className="glass glass-hover" style={{ padding: 'clamp(2rem, 5vw, 3rem) 2rem', borderRadius: '16px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                  <div style={{ padding: '1rem', background: 'rgba(59, 130, 246, 0.1)', borderRadius: '12px' }}>
                    <PenTool size={32} color="var(--primary)" />
                  </div>
                  <h3 style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', margin: 0, color: '#fff' }}>A. Content Creation</h3>
                </div>
                <p style={{ fontSize: '1.1rem', opacity: 0.9, marginBottom: '2rem', color: '#fff' }}>Content is the backbone of social media success.</p>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
                  <div>
                    <h4 style={{ fontSize: '1.3rem', marginBottom: '1rem', color: 'var(--primary)' }}>We create:</h4>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                      {['Static posts (offers, branding, awareness)', 'Carousel posts (educational & storytelling)', 'Islamic Reminders & Value-driven content', 'Halal-compliant short-form videos', 'Promotional designs (sales, launches)'].map((item, i) => (
                        <li key={i} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}><ArrowRight size={16} color="var(--primary)" style={{marginTop:'4px'}} /> <span style={{ opacity: 0.9, color: '#fff' }}>{item}</span></li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1.3rem', marginBottom: '1rem', color: 'var(--secondary)' }}>What makes our content different:</h4>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                      {['Trend-based designs', 'Audience-focused messaging', 'Platform-optimized visuals', 'Strong call-to-actions'].map((item, i) => (
                        <li key={i} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}><Check size={18} color="var(--secondary)" style={{marginTop:'2px'}} /> <span style={{ opacity: 0.9, color: '#fff' }}>{item}</span></li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Grid for other services */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
                <div className="glass glass-hover" style={{ padding: '2rem', borderRadius: '16px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                    <div style={{ padding: '1rem', background: 'rgba(139, 92, 246, 0.1)', borderRadius: '12px' }}>
                      <Smartphone size={32} color="var(--secondary)" />
                    </div>
                    <h3 style={{ fontSize: 'clamp(1.2rem, 3vw, 1.5rem)', margin: 0, color: '#fff', wordBreak: 'break-word', whiteSpace: 'normal' }}>B. Social Media Management</h3>
                  </div>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    {['Account setup & optimization', 'Bio & profile enhancement', 'Content scheduling', 'Highlight & feed structuring', 'Monthly calendar'].map((item, i) => (
                      <li key={i} style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', padding: '1rem', background: 'rgba(255,255,255,0.03)', borderRadius: '8px' }}>
                        <CheckCircle size={18} color="var(--secondary)" /> <span style={{ opacity: 0.9, color: '#fff' }}>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="glass glass-hover" style={{ padding: '2rem', borderRadius: '16px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                    <div style={{ padding: '1rem', background: 'rgba(16, 185, 129, 0.1)', borderRadius: '12px' }}>
                      <MessageCircle size={32} color="var(--accent)" />
                    </div>
                    <h3 style={{ fontSize: '1.5rem', margin: 0, color: '#fff' }}>C. Engagement</h3>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    {['Responding to comments', 'Replying to messages', 'Interaction strategies', 'Increasing loyalty'].map((item, i) => (
                      <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1rem', border: '1px solid var(--glass-border)', borderRadius: '8px' }}>
                        <span style={{ opacity: 0.9, color: '#fff' }}>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="glass glass-hover" style={{ padding: '2rem', borderRadius: '16px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                    <div style={{ padding: '1rem', background: 'rgba(245, 158, 11, 0.1)', borderRadius: '12px' }}>
                      <BarChart size={32} color="#f59e0b" />
                    </div>
                    <h3 style={{ fontSize: '1.5rem', margin: 0, color: '#fff' }}>D. Strategy</h3>
                  </div>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    {['Monthly performance reports', 'Insights & analytics tracking', 'Competitor research', 'Hashtag strategy', 'Growth optimization'].map((item, i) => (
                      <li key={i} style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', padding: '1rem', background: 'rgba(255,255,255,0.03)', borderRadius: '8px' }}>
                        <TrendingUp size={18} color="#f59e0b" /> <span style={{ opacity: 0.9, color: '#fff' }}>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Additional Services */}
              <div className="glass glass-hover" style={{ padding: 'clamp(2rem, 5vw, 3rem) 2rem', borderRadius: '16px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                  <div style={{ padding: '1rem', background: 'rgba(236, 72, 153, 0.1)', borderRadius: '12px' }}>
                    <Layers size={32} color="#ec4899" />
                  </div>
                  <h3 style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', margin: 0, color: '#fff' }}>E. Additional Services (Add-Ons)</h3>
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
                  {['Paid Ads (Meta Ads – FB & IG)', 'Video Editing & Animation', 'Product Photography', 'Logo & Identity Design', 'Poster & Banner Design'].map((item, i) => (
                    <span key={i} style={{ padding: '0.75rem 1.5rem', borderRadius: '50px', border: '1px solid var(--glass-border)', background: 'rgba(255,255,255,0.02)', color: '#fff' }}>
                      {item}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </ScrollReveal>

        {/* 7. Our Plans & Pricing */}
        <ScrollReveal>
          <div>
            <h2 className="gradient-text" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: '3rem', textAlign: 'center', color: '#fff' }}>
              Our Plans & Pricing
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
              
              {/* Basic Plan */}
              <div className="glass glass-hover" style={{ padding: '2.5rem 2rem', display: 'flex', flexDirection: 'column', borderRadius: '24px' }}>
                <div style={{ display: 'inline-block', padding: '0.5rem 1rem', background: 'rgba(16, 185, 129, 0.2)', color: 'var(--accent)', borderRadius: '50px', fontSize: '0.9rem', fontWeight: 600, marginBottom: '1.5rem', alignSelf: 'flex-start' }}>
                  Basic Plan
                </div>
                <h3 style={{ fontSize: '2rem', marginBottom: '0.5rem', color: '#fff' }}>₹12k - ₹15k</h3>
                <p style={{ opacity: 0.9, marginBottom: '2rem', color: '#fff' }}>/ Month</p>
                
                <div style={{ marginBottom: '2rem', flexGrow: 1 }}>
                  <h4 style={{ fontSize: '1.1rem', marginBottom: '1rem', opacity: 0.9, color: '#fff' }}>Includes:</h4>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                    {['12 posts/month (3 per week)', 'Basic creative designs', 'Captions & hashtags', 'Posting & scheduling', 'Monthly report'].map((item, i) => (
                      <li key={i} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}><Check size={18} color="var(--accent)" style={{ flexShrink: 0, marginTop: '2px' }} /> <span style={{ opacity: 0.95, fontSize: '0.95rem', color: '#fff' }}>{item}</span></li>
                    ))}
                  </ul>
                </div>

                <div style={{ padding: '1.5rem', background: 'rgba(255,255,255,0.03)', borderRadius: '12px' }}>
                  <p style={{ margin: '0 0 0.5rem 0', display: 'flex', gap: '0.5rem', fontSize: '0.95rem', color: '#fff' }}><strong>Best for:</strong> Small businesses</p>
                  <p style={{ margin: 0, display: 'flex', gap: '0.5rem', fontSize: '0.95rem', color: '#fff' }}><strong>Goal:</strong> Build presence</p>
                </div>
              </div>

              {/* Standard Plan */}
              <div className="glass glass-hover" style={{ padding: '2.5rem 2rem', display: 'flex', flexDirection: 'column', borderRadius: '24px', border: '2px solid var(--primary)', transform: 'scale(1.02) translateY(-10px)', boxShadow: '0 10px 30px rgba(59, 130, 246, 0.2)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.5rem' }}>
                  <div style={{ padding: '0.5rem 1rem', background: 'rgba(245, 158, 11, 0.2)', color: '#f59e0b', borderRadius: '50px', fontSize: '0.9rem', fontWeight: 600 }}>
                    Standard Plan
                  </div>
                  <span style={{ fontSize: '0.75rem', background: 'var(--primary)', color: '#fff', padding: '0.3rem 0.8rem', borderRadius: '50px', fontWeight: 'bold' }}>RECOMMENDED</span>
                </div>
                <h3 style={{ fontSize: '2.2rem', marginBottom: '0.5rem', color: 'var(--primary)' }}>₹15k - ₹20k</h3>
                <p style={{ opacity: 0.9, marginBottom: '2rem', color: '#fff' }}>/ Month</p>
                
                <div style={{ marginBottom: '2rem', flexGrow: 1 }}>
                  <h4 style={{ fontSize: '1.1rem', marginBottom: '1rem', opacity: 0.9, color: '#fff' }}>Includes:</h4>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                    {['16–20 posts/month', '4–6 reels', 'Premium custom designs', 'Captions + advanced strategy', 'Posting & scheduling', 'Basic engagement handling', 'Monthly analytics report'].map((item, i) => (
                      <li key={i} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}><Check size={18} color="var(--primary)" style={{ flexShrink: 0, marginTop: '2px' }} /> <span style={{ opacity: 0.95, fontSize: '0.95rem', color: '#fff' }}>{item}</span></li>
                    ))}
                  </ul>
                </div>

                <div style={{ padding: '1.5rem', background: 'rgba(59, 130, 246, 0.1)', borderRadius: '12px' }}>
                  <p style={{ margin: '0 0 0.5rem 0', display: 'flex', gap: '0.5rem', fontSize: '0.95rem', color: '#fff' }}><strong>Best for:</strong> Growing businesses</p>
                  <p style={{ margin: 0, display: 'flex', gap: '0.5rem', fontSize: '0.95rem', color: '#fff' }}><strong>Goal:</strong> Engagement + Growth</p>
                </div>
              </div>

              {/* Premium Plan */}
              <div className="glass glass-hover" style={{ padding: '2.5rem 2rem', display: 'flex', flexDirection: 'column', borderRadius: '24px' }}>
                <div style={{ display: 'inline-block', padding: '0.5rem 1rem', background: 'rgba(239, 68, 68, 0.2)', color: '#f87171', borderRadius: '50px', fontSize: '0.9rem', fontWeight: 600, marginBottom: '1.5rem', alignSelf: 'flex-start' }}>
                  Premium Plan
                </div>
                <h3 style={{ fontSize: '2rem', marginBottom: '0.5rem', color: '#fff' }}>₹25k+</h3>
                <p style={{ opacity: 0.9, marginBottom: '2rem', color: '#fff' }}>/ Month</p>
                
                <div style={{ marginBottom: '2rem', flexGrow: 1 }}>
                  <h4 style={{ fontSize: '1.1rem', marginBottom: '1rem', opacity: 0.9, color: '#fff' }}>Includes:</h4>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                    {['Daily posting', 'Advanced reels & editing', 'Full engagement handling', 'Ads support', 'Strategy calls', 'Priority service'].map((item, i) => (
                      <li key={i} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}><Check size={18} color="#f87171" style={{ flexShrink: 0, marginTop: '2px' }} /> <span style={{ opacity: 0.95, fontSize: '0.95rem', color: '#fff' }}>{item}</span></li>
                    ))}
                  </ul>
                </div>

                <div style={{ padding: '1.5rem', background: 'rgba(255,255,255,0.03)', borderRadius: '12px' }}>
                  <p style={{ margin: '0 0 0.5rem 0', display: 'flex', gap: '0.5rem', fontSize: '0.95rem', color: '#fff' }}><strong>Best for:</strong> Established brands</p>
                  <p style={{ margin: 0, display: 'flex', gap: '0.5rem', fontSize: '0.95rem', color: '#fff' }}><strong>Goal:</strong> Leads & Sales</p>
                </div>
              </div>

            </div>
          </div>
        </ScrollReveal>

        {/* 8 & 9. What You Get & Why Choose Us */}
        <ScrollReveal>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <div className="glass" style={{ padding: 'clamp(2rem, 5vw, 4rem)', borderRadius: '24px' }}>
              <h2 className="gradient-text" style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap', color: '#fff' }}>
                What You Get
              </h2>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '2rem' }}>
                <div>
                  <h4 style={{ fontSize: '1.2rem', marginBottom: '1rem', color: 'var(--primary)' }}>Growth</h4>
                  <ul style={{ paddingLeft: '1.2rem', opacity: 0.95, gap: '0.5rem', display: 'flex', flexDirection: 'column' }}>
                    <li>Increased visibility</li>
                    <li>More engagement</li>
                    <li>Brand recognition</li>
                    <li>More leads</li>
                  </ul>
                </div>
                <div>
                  <h4 style={{ fontSize: '1.2rem', marginBottom: '1rem', color: 'var(--secondary)' }}>Branding</h4>
                  <ul style={{ paddingLeft: '1.2rem', opacity: 0.95, gap: '0.5rem', display: 'flex', flexDirection: 'column' }}>
                    <li>Consistent identity</li>
                    <li>Professional design</li>
                    <li>Strong positioning</li>
                  </ul>
                </div>
                <div>
                  <h4 style={{ fontSize: '1.2rem', marginBottom: '1rem', color: 'var(--accent)' }}>Time Saved</h4>
                  <ul style={{ paddingLeft: '1.2rem', opacity: 0.95, gap: '0.5rem', display: 'flex', flexDirection: 'column' }}>
                    <li>We manage it all</li>
                    <li>Focus on your business</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="glass" style={{ padding: 'clamp(2rem, 5vw, 4rem)', borderRadius: '24px' }}>
              <h2 className="gradient-text" style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap', color: '#fff' }}>
                Why Choose AHMD Graphix
              </h2>
              <p style={{ fontSize: '1.1rem', opacity: 0.9, marginBottom: '2rem', color: '#fff' }}>We are not just designers—we are growth partners.</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
                {['Creative designs', 'Global & Halal audience focus', 'Affordable pricing', 'Consistent execution', 'Personalized strategies', 'High ROI focus'].map((item, i) => (
                  <span key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.75rem 1.25rem', background: 'rgba(255,255,255,0.05)', borderRadius: '50px', border: '1px solid var(--glass-border)', fontSize: '0.95rem', color: '#fff' }}>
                    <CheckCircle size={16} color="var(--primary)" /> {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* 10. Our Working Process */}
        <ScrollReveal>
          <div>
            <h2 className="gradient-text" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: '3rem', textAlign: 'center', color: '#fff' }}>
              Our Working Process
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '800px', margin: '0 auto' }}>
              {[
                { step: '1', title: 'Business Understanding', desc: 'Goals, target audience, and competitors.' },
                { step: '2', title: 'Strategy Planning', desc: 'Content themes, schedule, and growth approach.' },
                { step: '3', title: 'Content Creation', desc: 'Designing posts, captions, and reels.' },
                { step: '4', title: 'Execution', desc: 'Posting content and managing engagement.' },
                { step: '5', title: 'Analysis & Optimization', desc: 'Monthly reports and strategy improvements.' }
              ].map((item, i) => (
                <div key={i} className="glass glass-hover" style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', padding: '1.5rem', borderRadius: '16px', flexWrap: 'wrap' }}>
                  <div style={{ width: '50px', height: '50px', borderRadius: '50%', background: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', fontWeight: 'bold', flexShrink: 0, color: '#fff' }}>
                    {item.step}
                  </div>
                  <div style={{ flex: '1 1 200px' }}>
                    <h3 style={{ fontSize: '1.3rem', margin: '0 0 0.5rem 0', color: '#fff' }}>{item.title}</h3>
                    <p style={{ margin: 0, opacity: 0.95, color: '#fff' }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
        
        {/* Quick Info */}
        <ScrollReveal>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
            <div className="glass" style={{ padding: '2rem', borderRadius: '16px' }}>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#fff' }}>Content Workflow & Reporting</h3>
              <ul style={{ paddingLeft: '1.2rem', opacity: 0.95, gap: '0.5rem', display: 'flex', flexDirection: 'column' }}>
                <li>Monthly content calendar & approvals</li>
                <li>Regular posting schedule</li>
                <li>Performance tracking & monthly reports</li>
                <li>Reach, engagement insights & growth suggestions</li>
              </ul>
            </div>

            <div className="glass" style={{ padding: '2rem', borderRadius: '16px' }}>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#fff' }}>Target Industries We Serve</h3>
              <ul style={{ paddingLeft: '1.2rem', opacity: 0.95, gap: '0.5rem', display: 'flex', flexDirection: 'column' }}>
                <li>Halal Restaurants & Cafes</li>
                <li>E-commerce & Modest Fashion</li>
                <li>Real Estate & Agency</li>
                <li>Clinics & Healthcare</li>
                <li>Tech & IT Solutions</li>
              </ul>
            </div>

            <div className="glass" style={{ padding: '2rem', borderRadius: '16px', border: '1px solid var(--accent)' }}>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--accent)' }}>Bonus for New Clients</h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, gap: '0.8rem', display: 'flex', flexDirection: 'column' }}>
                <li style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}><CheckCircle size={16} color="var(--accent)" /> <span style={{ opacity: 0.9, color: '#fff' }}>Free Social Media Audit</span></li>
                <li style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}><CheckCircle size={16} color="var(--accent)" /> <span style={{ opacity: 0.9, color: '#fff' }}>1 Free Reel</span></li>
                <li style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}><CheckCircle size={16} color="var(--accent)" /> <span style={{ opacity: 0.9, color: '#fff' }}>Strategy Consultation</span></li>
              </ul>
            </div>

            <div className="glass" style={{ padding: '2rem', borderRadius: '16px' }}>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#fff' }}>Terms & Conditions</h3>
              <ul style={{ paddingLeft: '1.2rem', opacity: 0.95, gap: '0.5rem', display: 'flex', flexDirection: 'column', fontSize: '0.9rem' }}>
                <li>Monthly payment in advance</li>
                <li>Minimum 1-month commitment</li>
                <li>Content revisions limited (2 per post)</li>
                <li>Ads budget not included in service fee</li>
                <li>Timely approvals required from client</li>
              </ul>
            </div>
          </div>
        </ScrollReveal>

        {/* Final CTA */}
        <ScrollReveal>
          <div className="glass" style={{ padding: 'clamp(2rem, 4vw, 5rem) clamp(1rem, 3vw, 2rem)', textAlign: 'center', background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(139, 92, 246, 0.1))', border: '1px solid rgba(59, 130, 246, 0.3)', borderRadius: '24px', overflow: 'hidden' }}>
            <h2 className="gradient-text" style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', marginBottom: '1rem', color: '#fff', wordBreak: 'break-word' }}>Investment Summary</h2>
            <p style={{ fontSize: '1.2rem', opacity: 0.9, marginBottom: '0.5rem', color: '#fff' }}>We recommend:</p>
            <h3 style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', color: 'var(--primary)', marginBottom: '1rem', wordBreak: 'break-word' }}>Standard Plan – ₹18,000/month</h3>
            <p style={{ opacity: 0.8, marginBottom: '3rem', maxWidth: '600px', margin: '0 auto 3rem auto', color: '#fff' }}>This plan offers the best balance between cost and growth.</p>

            <h2 className="gradient-text" style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', marginBottom: '1rem', color: '#fff', wordBreak: 'break-word' }}>Let&apos;s Work Together</h2>
            <p style={{ fontSize: 'clamp(1rem, 2vw, 1.2rem)', opacity: 0.9, marginBottom: '2rem', maxWidth: '600px', margin: '0 auto 2rem auto', color: '#fff' }}>
              Your social media has the power to bring real customers—and <strong style={{color: '#fff'}}>AHMD Graphix</strong> is here to make that happen.
            </p>
            
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1.5rem', marginBottom: '3rem' }}>
            <a href="https://wa.me/916381950719" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '1rem 2.5rem', background: 'var(--primary)', color: '#fff', borderRadius: '50px', fontSize: '1.1rem', fontWeight: 'bold', textDecoration: 'none', boxShadow: '0 4px 15px rgba(59, 130, 246, 0.4)' }}>
              <FaWhatsapp size={24} />
              Contact Us
            </a>
          </div>

          <div style={{ paddingTop: '2rem', borderTop: '1px solid var(--glass-border)', maxWidth: '600px', margin: '0 auto' }}>
            <p style={{ fontSize: 'clamp(1rem, 2vw, 1.2rem)', fontStyle: 'italic', opacity: 0.8, margin: 0, color: '#fff' }}>
              “Social media success is not about being present—it&apos;s about being powerful.”
            </p>
          </div>
          </div>
        </ScrollReveal>

      </div>
    </>
  );
}
