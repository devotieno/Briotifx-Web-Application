"use client";

import { useState } from 'react';
import Image from 'next/image';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer'; // Ensure Footer.tsx or Footer.jsx exists in the components folder
import PricingCard from '../components/PricingCard';
import styles from '../styles/Home.module.css';
import { FaChartLine, FaCogs, FaBrain, FaShieldAlt, FaHistory, FaDesktop, FaRocket, FaGlobe, FaBolt, FaStopwatch, FaChartBar } from "react-icons/fa";


export default function Home() {
  const [isHovered, setIsHovered] = useState(false);

  const handlePurchaseClick = () => {
    window.location.href = 'https://beacons.ai/briotifx';
  };

  return (
  <div style={{ fontFamily: 'Roboto, Arial, Helvetica, sans-serif' }}>
      {/* Navbar */}
      <Navbar />

      {/* Main Container */}
      <div className={styles.container}>
        {/* Home Section */}
          <section className={styles.home} id="home">
          <div>
            <h1 
              style={{ 
                textAlign: 'center', 
                fontSize: 'clamp(36px, 5vw, 52px)',
                fontWeight: 800, 
                color: '#222',
                letterSpacing: '-1px'
              
              }}
            >
             <span style={{ color: '#007BFF' }}>BRIOTIFX - </span> Forex Trade Signals Software
            </h1>
            <p 
              style={{ 
                textAlign: 'center', 
                fontSize: 'clamp(18px, 2.5vw, 22px)',
        color: 'grey',
      
         
              }}
            >
              Your ultimate Forex trade signals generator, providing accurate and timely signals to boost your trading success.
              <br/><span style={{fontSize: 'clamp(16px, 2.5vw, 22px)', width: 40}}>-</span> Even as a complete beginner.
            </p>
            <br/>
            <div style={{ display: 'flex', justifyContent: 'center'}}>
              <button 
                onClick={handlePurchaseClick}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                style={{ 
                  fontSize: '20px',
        padding: '15px 40px',
        borderRadius: '30px',
        background: isHovered
          ? 'linear-gradient(90deg, #0056b3 0%, #007BFF 100%)'
          : 'linear-gradient(90deg, #007BFF 0%, #0056b3 100%)',
        color: '#fff',
        border: 'none',
        cursor: 'pointer',
        fontWeight: 600,
        width:300,
        boxShadow: '0 2px 12px rgba(0,0,0,0.10)',
        transition: 'transform 0.3s, background 0.3s',
        transform: isHovered ? 'scale(1.07)' : 'scale(1)'
                }}
              >
                Purchase Now
              </button>
            </div>

            <div style={{ marginTop: '20px', textAlign: 'center' }}>
              <Image 
                src="/users.jpeg" 
                alt="Users" 
                width={290} 
                height={48}
                style={{ maxWidth: '100%', height: 'auto' }} 
              />
            </div>
            <i><p style={{ textAlign: 'center' }}><span><b>507</b></span> Traders love the software</p></i>
            <p style={{ textAlign: 'center' }}>Rating: <span style={{ color: '#FFD700', fontWeight: 600 }}>★★★★☆</span> (4.8/5)</p>
          </div>
          
          
        </section>
        <br/>
        <br/>
        {/* About Section */}
        <section id="about" style={{
  background: 'linear-gradient(90deg, #f8fafc 0%, #e3f0ff 100%)',
  borderRadius: '18px',
  boxShadow: '0 4px 24px rgba(0,0,0,0.07)',
  padding: '48px 24px',
  margin: '40px 0'
}}>
  <h1 style={{
    marginTop: 0,
    textAlign: 'center',
    fontSize: 'clamp(32px, 5vw, 44px)',
    fontWeight: 700,
    letterSpacing: '-1px'
  }}>
    About <span style={{ color: '#007BFF' }}>BRIOTIFX</span>
  </h1>
  <p style={{
    textAlign: 'center',
    fontSize: 'clamp(18px, 2.5vw, 22px)',
    color: '#444',
    maxWidth: 800,
    margin: '24px auto 40px auto'
  }}>
    BRIOTIFX is a web-based trading analysis tool that empowers forex traders with actionable insights and precise signals. Analyze major currency pairs like <b>CAD/X, EUR/USD, GBP/USD, USD/JPY</b> and more across multiple timeframes (5m, 15m, 30m, 60m).
    <br /><br />
    Perfect for both beginners looking to simplify their trading and seasoned traders aiming to optimize their strategies.
  </p>
  <div style={{
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '32px',
    marginTop: '32px'
  }}>
    <div style={{
      background: '#fff',
      borderRadius: '14px',
      boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
      padding: '32px 24px',
      minWidth: 220,
      maxWidth: 320,
      textAlign: 'center',
      flex: '1 1 220px'
    }}>
      <FaBolt size={36} color="#007BFF" style={{ marginBottom: 12 }} />
      <h3 style={{ margin: '10px 0 8px 0', fontWeight: 600 }}>Real-time Signals</h3>
      <p style={{ color: '#666', fontSize: 16 }}>
        Get instant, actionable buy/sell signals as market conditions change.
      </p>
    </div>
    <div style={{
      background: '#fff',
      borderRadius: '14px',
      boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
      padding: '32px 24px',
      minWidth: 220,
      maxWidth: 320,
      textAlign: 'center',
      flex: '1 1 220px'
    }}>
      <FaStopwatch size={36} color="#007BFF" style={{ marginBottom: 12 }} />
      <h3 style={{ margin: '10px 0 8px 0', fontWeight: 600 }}>Stop-loss & Take-profit</h3>
      <p style={{ color: '#666', fontSize: 16 }}>
        Automatic calculation of stop-loss and take-profit levels for every trade.
      </p>
    </div>
    <div style={{
      background: '#fff',
      borderRadius: '14px',
      boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
      padding: '32px 24px',
      minWidth: 220,
      maxWidth: 320,
      textAlign: 'center',
      flex: '1 1 220px'
    }}>
      <FaChartBar size={36} color="#007BFF" style={{ marginBottom: 12 }} />
      <h3 style={{ margin: '10px 0 8px 0', fontWeight: 600 }}>Backtest Results</h3>
      <p style={{ color: '#666', fontSize: 16 }}>
        Access detailed backtest metrics to evaluate strategy performance.
      </p>
    </div>
  </div>
</section>


        {/* Key Features Section */}
        <section id="features" style={{ padding: '48px 20px'}}>
          <h1
            style={{
              textAlign: 'center',
              fontSize: 'clamp(32px, 5vw, 44px)',
              fontWeight: 800,
              letterSpacing: '-1px',
              marginTop: 70,
              marginBottom: 8,
              background: 'linear-gradient(90deg, #007BFF 0%, #00c6ff 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              color: 'transparent',
              display: 'inline-block'
            }}
          >
            Key Features
          </h1>
          <div
            style={{
              width: 80,
              height: 4,
              background: 'linear-gradient(90deg, #007BFF 0%, #00c6ff 100%)',
              borderRadius: 2,
              margin: '0 auto 32px auto'
            }}
          />
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '32px',
            margin: '40px 0'
          }}>
            <div className={styles.featureCard}>
              <FaChartLine size={40} color="#007BFF" style={{marginBottom: 10}} />
              <h4>Real-Time Multi-Symbol Analysis</h4>
              <p style={{color: 'grey'}}>
                Analyzes multiple forex pairs simultaneously, including CAD/X, EUR/USD, GBP/USD, USD/JPY, and more. Supports multiple timeframes and delivers real-time, color-coded buy/sell signals.
              </p>
            </div>
            <div className={styles.featureCard}>
              <FaCogs size={40} color="#007BFF" style={{marginBottom: 10}} />
              <h4>Advanced Technical Indicators</h4>
              <p style={{color: 'grey'}}>
                Integrates a suite of technical indicators and ATR. Combines these into a weighted Combined Signal for holistic trading decisions.
              </p>
            </div>
            <div className={styles.featureCard}>
              <FaBrain size={40} color="#007BFF" style={{marginBottom: 10}} />
              <h4>Adaptive Market Regime Detection</h4>
              <p style={{color: 'grey'}}>
                Detects market conditions (volatile, trending, or ranging) and adapts indicator weights dynamically for higher accuracy.
              </p>
            </div>
            <div className={styles.featureCard}>
              <FaShieldAlt size={40} color="#007BFF" style={{marginBottom: 10}} />
              <h4>Dynamic Risk Management</h4>
              <p style={{color: 'grey'}}>
                Calculates stop-loss/take-profit levels using ATR-based adjustments. Ensures a default risk-reward ratio of 1:2, customizable to your style.
              </p>
            </div>
            <div className={styles.featureCard}>
              <FaHistory size={40} color="#007BFF" style={{marginBottom: 10}} />
              <h4>Comprehensive Backtesting</h4>
              <p style={{color: 'grey'}}>
                Backtests on historical data and provides detailed metrics like Total Return, Win Rate, Sharpe Ratio, and Max Drawdown.
              </p>
            </div>
            <div className={styles.featureCard}>
              <FaDesktop size={40} color="#007BFF" style={{marginBottom: 10}} />
              <h4>Sleek Web Interface</h4>
              <p style={{color: 'grey'}}>
                Responsive, web-based experience with real-time updates, dark mode, and intuitive color-coded signals.
              </p>
            </div>
            <div className={styles.featureCard}>
              <FaRocket size={40} color="#007BFF" style={{marginBottom: 10}} />
              <h4>Performance Optimization</h4>
              <p style={{color: 'grey'}}>
                Optimized for speed and efficiency. Uses caching and parallel processing for fast analysis and reduced server load.
              </p>
            </div>
            <div className={styles.featureCard}>
              <FaGlobe size={40} color="#007BFF" style={{marginBottom: 10}} />
              <h4>Compatibility</h4>
              <p style={{color: 'grey'}}>
                Works on all modern browsers and devices. Data sourced via yfinance, compatible with any broker providing standard forex data feeds.
              </p>
            </div>
          </div>
          <div style={{ textAlign: 'center', marginTop: '80px', marginBottom: '10px' }}>
            <h1 style={{ fontSize: '15px', }}><i>Sample of analysis output -Dark Mode</i></h1>
            <Image 
              src="/picture.png" 
              alt="BRIOTIFX"
              width={800}
              height={200} 
              style={{ borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' , maxWidth: '100%', height: 'auto' }} 
            />
          </div>
        </section>

        {/* Pricing Section */}
        
        <section id="pricing" style={{ padding: '20px' }}>
          <h1
            style={{
              textAlign: 'center',
              fontSize: 'clamp(32px, 5vw, 44px)',
              fontWeight: 800,
              letterSpacing: '-1px',
              marginBottom: 8,
              background: 'linear-gradient(90deg, #007BFF 0%, #00c6ff 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              color: 'transparent',
              display: 'inline-block'
            }}
          >
            Pricing Plans
          </h1>
          <div
            style={{
              width: 80,
              height: 4,
              background: 'linear-gradient(90deg, #007BFF 0%, #00c6ff 100%)',
              borderRadius: 2,
              margin: '0 auto 32px auto'
            }}
          />
          <div className={styles.pricing}>
            
            <PricingCard
              title="Elite-Plan"
              price="$169 (One-time payment)"
              features={['Limited to 5 currency pairs/symbols of your choice', 'No recurring fees','Full access to all features',  'Advanced backtesting','Email support']}
              link="https://shop.beacons.ai/briotifx/bd04f511-715b-4f13-aa70-3fb0c35c2b59"
            />
            <PricingCard
              title="Pro-Plan"
              price="$229 (One-time payment)"
              features={['Unlimited currency pairs/symbols','No recurring fees','Full access to all features', 'Advanced backtesting', 'Email support']}
              link="https://shop.beacons.ai/briotifx/9e583349-e9ee-47a3-b9d8-d98e04bd5d7c"
            />
          </div>
          <br/>
          <p style={{ textAlign: 'center' }}>
            <span style={{ fontSize: '14px', color: 'red' }}><i>30-Day Money-Back Guarantee: Not satisfied? Get a full refund within 30 days.</i></span>
          </p>
        </section>
        <br/>
        <br/>
        <br/>

        {/* Reviews Section */}
        <section id="reviews" style={{ background: 'linear-gradient(90deg, #f8fafc 0%, #e3f0ff 100%)', borderRadius: 18, margin: '60px 0', padding: '48px 20px' }}>
  <h1
    style={{
      textAlign: 'center',
      fontSize: 'clamp(32px, 5vw, 44px)',
      fontWeight: 800,
      letterSpacing: '-1px',
      marginTop: 0,
      marginBottom: 8,
      background: 'linear-gradient(90deg, #007BFF 0%, #00c6ff 100%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
      color: 'transparent',
      display: 'inline-block'
    }}
  >
    Reviews & Performance
  </h1>
  <div
    style={{
      width: 80,
      height: 4,
      background: 'linear-gradient(90deg, #007BFF 0%, #00c6ff 100%)',
      borderRadius: 2,
      margin: '0 auto 32px auto'
    }}
  />
  <h2 style={{ textAlign: 'center', fontSize: 22, fontWeight: 600, color: '#222', marginBottom: 32 }}>
    What Our Users Say
  </h2>
  <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px', marginTop: '40px' }}>
            <div style={{ textAlign: 'center' }}>
                <Image 
                    src="/review1.jpeg" 
                    alt="Review 1" 
                    width={562} 
                    height={132} 
                    style={{ borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' , maxWidth: '100%', height: 'auto' }} 
                />
                
            </div>
            <div style={{ textAlign: 'center' }}>
                <Image 
                    src="/review2.jpeg" 
                    alt="Review 2" 
                    width={552} 
                    height={126} 
                    style={{ borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' , maxWidth: '100%', height: 'auto' }} 
                />
                
            </div>
            <div style={{ textAlign: 'center' }}>
                <Image 
                    src="/review3.jpeg" 
                    alt="Review 3" 
                    width={598} 
                    height={135} 
                    style={{ borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' , maxWidth: '100%', height: 'auto' }} 
                />
                
            </div>
            <div style={{ textAlign: 'center' }}>
                <Image 
                    src="/review5.jpeg" 
                    alt="Review 3" 
                    width={640} 
                    height={141} 
                    style={{ borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' , maxWidth: '100%', height: 'auto' }} 
                />
                
            </div>
  </div>
  <br/>
  <br/>
  <br/>
  <br/>
  <br/>
  <br/>
  
<div
            style={{
              width: 80,
              height: 4,
              background: 'linear-gradient(90deg, #007BFF 0%, #00c6ff 100%)',
              borderRadius: 2,
              margin: '0 auto 32px auto'
            }}
          />
  <h2 style={{ textAlign: 'center', fontSize: 22, fontWeight: 600, color: '#222', margin: '48px 0 16px 0' }}>
    Performance Highlights
  </h2>
  <p style={{
    textAlign: 'center',
    fontSize: 18,
    color: '#444',
    maxWidth: 700,
    margin: '0 auto 32px auto',
    lineHeight: 1.6
  }}>
    <b>Signal Accuracy:</b> <br />
    Achieves a historical win rate of <span style={{ fontWeight: 700 }}>80-90%</span> across major pairs (based on backtesting; past performance is not indicative of future results).
  </p>

  <h2 style={{ textAlign: 'center', fontSize: 22, fontWeight: 700, color: 'red', margin: '48px 0 16px 0' }}>
    Risk Warning
  </h2>
  <p style={{
    border: '1px solid red',
    padding: '16px',
    backgroundColor: '#f8d7da',
    color: '#721c24',
    borderRadius: 8,
    maxWidth: 700,
    margin: '0 auto',
    fontSize: 16,
    textAlign: 'center'
  }}>
    <i>
      Forex trading carries a high level of risk and may not be suitable for all investors. Leverage can amplify both profits and losses, potentially exceeding your initial investment. Before using BRIOTIFX Software, consider your financial goals, experience level, and risk tolerance. We recommend testing the tool on a demo account first and consulting a financial advisor. Past performance does not guarantee future results.
    </i>
  </p>
</section>
      </div>


      {/* Community Section */}
      <section
        style={{
          margin: '40px auto 0 auto',
          maxWidth: 600,
          padding: '32px 20px',
          borderRadius: 16,
          background: 'rgba(255,255,255,0.18)',
          boxShadow: '0 8px 32px 0 rgba(31,38,135,0.15)',
          backdropFilter: 'blur(8px)',
          WebkitBackdropFilter: 'blur(8px)',
          border: '1px solid rgba(255,255,255,0.3)',
          textAlign: 'center'
        }}
      >
        <h2 style={{ fontWeight: 700, fontSize: 28, marginBottom: 12 }}>
          Join Our Free Community Group!
        </h2>
        <p style={{ fontSize: 18, color: '#333', marginBottom: 24 }}>
          Connect with other traders, get tips, and stay updated with the latest from BRIOTIFX.
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: 16, flexWrap: 'wrap' }}>
          <a
            href="https://t.me/+o95FBcaEfaVmNjA0"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-block',
              padding: '12px 32px',
              fontSize: 18,
              borderRadius: 30,
              background: 'linear-gradient(90deg, #007BFF 0%, #00c6ff 100%)',
              color: '#fff',
              fontWeight: 600,
              textDecoration: 'none',
              boxShadow: '0 2px 12px rgba(0,0,0,0.10)',
              transition: 'transform 0.2s'
            }}
          >
            Join Free on Telegram
          </a>
          <a
        href='https://chat.whatsapp.com/GJdlTvW3z1iA6l8FbTUGhU'
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-block',
              padding: '12px 32px',
              fontSize: 18,
              borderRadius: 30,
              background: 'linear-gradient(90deg, #25D366 0%, #128C7E 100%)',
              color: '#fff',
              fontWeight: 600,
              textDecoration: 'none',
              boxShadow: '0 2px 12px rgba(0,0,0,0.10)',
              transition: 'transform 0.2s'
            }}
          >
            Join Free on WhatsApp
          </a>
        </div>
      </section>

      
      
      <br/>
      <br/>
      <br/>

      {/* Footer */}
      <Footer />
      
    </div>
    
  );
}