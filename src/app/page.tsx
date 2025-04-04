"use client";

import { useState } from 'react';
import Image from 'next/image';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer'; // Ensure Footer.tsx or Footer.jsx exists in the components folder
import PricingCard from '../components/PricingCard';
import ReviewCard from '../components/ReviewCard';
import styles from '../styles/Home.module.css';


export default function Home() {
  const [isHovered, setIsHovered] = useState(false);

  const handlePurchaseClick = () => {
    window.location.href = 'https://beacons.ai/briotifx';
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif' }}>
      {/* Navbar */}
      <Navbar />

      {/* Main Container */}
      <div className={styles.container}>
        {/* Home Section */}
         <section className={styles.home} id="home">
          <div>
            <h1 style={{ textAlign: 'center', fontSize: 55, fontWeight: 'bold', fontFamily: 'Arial, sans-serif' }}>BRIOTIFX - Forex Trade Signals Software</h1>
            <p style={{ textAlign: 'center', fontSize: 22, fontFamily: 'Arial, sans-serif', color: 'grey' }}>
              Your ultimate Forex trade signals generator, providing accurate and timely signals to boost your trading success.
              <br/><span style={{fontSize: 22, width:40}}>-</span> Even as a complete beginner.
            </p>
            <br/>
            <div style={{ display: 'flex', justifyContent: 'center'}}>
              <button 
                onClick={handlePurchaseClick}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                style={{ 
                  fontSize: '20px', 
                  padding: '15px 30px', 
                  borderRadius: '25px', 
                  backgroundColor: isHovered ? '#0056b3' : '#007BFF', 
                  color: '#fff', 
                  border: 'none', 
                  cursor: 'pointer', 
                  width: '300px', 
                  transform: isHovered ? 'scale(1.1)' : 'scale(1)',
                  transition: 'transform 0.3s ease, background-color 0.3s ease' 
                }}
              >
                Purchase Now
              </button>
            </div>

            <div style={{ marginTop: '20px', textAlign: 'center' }}>
              <Image 
                src="/users.jpeg" 
                alt="Users" 
                width={300} 
                height={200}
                style={{ maxWidth: '100%', height: 'auto' }} 
              />
            </div>
            <p style={{ textAlign: 'center' }}><span><b>507</b></span> traders love the software</p>
            <p style={{ textAlign: 'center' }}>Rating: ★★★★☆ (4.8/5)</p>
          </div>
          
          
        </section>
        <br/>
        <br/>
        {/* About Section */}
        <section id="about">
          <h1 style={{marginTop: '60px'}}>About BRIOTIFX</h1>
          <p>
          This is a web-based trading analysis tool that empowers forex traders with actionable insights and precise signals. It analyzes major currency pairs like CAD/X, EUR/USD, GBP/USD, USD/JPY and more across multiple timeframes (5m, 15m, 30m, 60m), providing;
          <br/>
          <br/>

          <i>
          1.Real-time signals, <br/>
          2.Stop-loss/take-profit levels, and<br/>
          3.Detailed backtest results. <br/>
          </i>

    This tool is perfect for both beginners looking to simplify their trading and seasoned traders aiming to optimize their strategies.

            </p>
          <div style={{ textAlign: 'center', marginTop: '80px', marginBottom: '80px' }}>
            <Image 
              src="/briotifx.png" 
              alt="BRIOTIFX" 
              width={800} 
              height={400} 
              style={{ maxWidth: '100%', height: 'auto' }} 
            />
          </div>
        </section>

        {/* Key Features Section */}
        <section id="features">
          <h1>Key Features</h1>
          <div className={styles.carouselContainer}>
            <div className={styles.carousel}>
              <div className={styles.carouselItem}>
                <h4>Real-Time Multi-Symbol Analysis</h4>
                <p style={{color: 'grey'}}>
                  Analyzes multiple forex pairs simultaneously, including CAD/X, EUR/USD, GBP/USD, USD/JPY, and many more. Supports multiple timeframes (5m, 15m, 30m, 60m) to cater to scalpers, day traders, and swing traders. Delivers real-time signals with clear buy/sell recommendations, color-coded for easy interpretation (e.g., Strong Buy, Weak Sell).
                </p>
              </div>
              <div className={styles.carouselItem}>
                <h4>Advanced Technical Indicators</h4>
                <p style={{color: 'grey'}}>
                  Integrates a suite of technical indicators: Simple Moving Averages (SMA), Relative Strength Index (RSI), MACD, Bollinger Bands, and Average True Range (ATR). Combines these indicators into a weighted Combined Signal for a holistic trading decision.
                </p>
              </div>
              <div className={styles.carouselItem}>
                <h4>Adaptive Market Regime Detection</h4>
                <p style={{color: 'grey'}}>
                  Automatically detects market conditions (volatile, trending, or ranging) using volatility ratios and SMA trends. Adapts indicator weights dynamically to ensure signals are tailored to current market dynamics for higher accuracy.
                </p>
              </div>
              <div className={styles.carouselItem}>
                <h4>Dynamic Risk Management</h4>
                <p style={{color: 'grey'}}>
                  Calculates stop-loss and take-profit levels for both long and short positions using ATR-based adjustments. Adjusts risk parameters based on market regime and ensures a default risk-reward ratio of 1:2, customizable to suit your trading style.
                </p>
              </div>
              <div className={styles.carouselItem}>
                <h4>Comprehensive Backtesting</h4>
                <p style={{color: 'grey'}}>
                  Performs backtesting on historical data to evaluate strategy performance. Provides detailed metrics like Total Return, Total Trades, Win Rate, Sharpe Ratio, and Max Drawdown to help refine your strategy with data-driven insights.
                </p>
              </div>
              <div className={styles.carouselItem}>
                <h4>Sleek Web Interface</h4>
                <p style={{color: 'grey'}}>
                  Built with a responsive, web-based experience featuring a dual-carousel layout. Real-time signal updates, dark-themed design, and intuitive color-coded signals make it user-friendly and efficient.
                </p>
              </div>
              <div className={styles.carouselItem}>
                <h4>Performance Optimization</h4>
                <p style={{ marginBottom: '80px', color: 'grey'}}>
                  Optimized for speed and efficiency, even with large datasets.
                  Uses caching and parallel processing to ensure fast analysis even with large datasets. Reduces server load and improves response times for a seamless user experience.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" style={{ backgroundColor: '#f0f0f0', padding: '20px' }}>
          <h1 style={{ textAlign: 'center' }}>Pricing Plans</h1>
          <div className={styles.pricing}>
            <PricingCard
              title="Basic Plan"
              price="$49/month"
              features={['Access to core features','Signals for 4 major pairs','Basic backtesting','Email support']}
              link="https://shop.beacons.ai/briotifx/a28a1f4c-c3e4-4a88-80f0-027ba1f81385"
            />
            <PricingCard
              title="Pro-Plan"
              price="$99/month"
              features={['Includes all features',' Unlimited symbols', 'Advanced backtesting','Priority support']}
              link="https://shop.beacons.ai/briotifx/bd04f511-715b-4f13-aa70-3fb0c35c2b59"
            />
            <PricingCard
              title="Lifetime Access"
              price="$399 (One-time payment)"
              features={['Full access to all features', 'including future updates', 'no recurring fees', 'Lifetime support']}
              link="https://shop.beacons.ai/briotifx/9e583349-e9ee-47a3-b9d8-d98e04bd5d7c"
            />
          </div>
          <br/>
          <p style={{ textAlign: 'center' }}>
            <span style={{ fontSize: '14px', color: 'red' }}><i>30-Day Money-Back Guarantee: Not satisfied? Get a full refund within 30 days.</i></span>
          </p>
        </section>

        {/* Reviews Section */}
        <section id="reviews">
          <h1 style={{marginTop: '80px'}}>Reviews & Performance</h1>
          <h1 style={{ textAlign: 'center' }}>
            <span style={{ fontSize: '20px', fontWeight: 'bold' }}>Top Reviews</span>
          </h1>
          <div className={styles.pricing}>
            <ReviewCard
              name="John Doe"
              review="BRIOTIFX has transformed my trading experience!"
              
            />
            <ReviewCard
              name="Jane Smith"
              review="Accurate signals and great support." 
            />
          </div>
          <h1 style={{ textAlign: 'center' , marginTop: '60px' }}>
            <span style={{ fontSize: '20px', fontWeight: 'bold' }}>Performance Highlights</span>
          </h1>
          <p>
          
Signal Accuracy: <br/>
Achieves a historical win rate of <i><b style={{ color: 'greenyellow'}}>80-90%</b></i> across major pairs (based on backtesting; past performance is not indicative of future results).  

<br/>
<br/>


Average Monthly Pips: <br/>
Generates an average of <i><b style={{color: 'greenyellow'}}>800-1200 pips per month </b></i>, depending on market conditions and timeframe.





          </p>
        </section>
      </div>

      {/* Footer */}
      <Footer />
      
    </div>
    
  );
}