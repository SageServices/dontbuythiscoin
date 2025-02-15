import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Wallet, 
  Zap, 
  Coins, 
  Users, 
  ChevronDown, 
  Github, 
  Twitter, 
  MessageCircle, 
  Lock, 
  Rocket, 
  Gift, 
  HelpCircle,
  ExternalLink,
  Send,
  CreditCard,
  Code,
  ShoppingCart,
  Copy,
  CheckCircle,
  Store,
  TrendingUp,
  Shield,
  DollarSign,
  Share2
} from 'lucide-react';

function ThunderEffect() {
  return (
    <div className="thunder-container">
      <div className="thunder-bolt" />
      <div className="thunder-bolt" />
      <div className="thunder-bolt" />
      <div className="background-pulse" />
    </div>
  );
}

function RainEffect() {
  return (
    <div className="rain-container">
      {[...Array(20)].map((_, i) => (
        <div key={i} className="rain-drop" />
      ))}
    </div>
  );
}

function SpinningWheelEffect() {
  return (
    <div className="spinner-container">
      {[...Array(5)].map((_, i) => (
        <div key={i} className="spinning-wheel" />
      ))}
    </div>
  );
}

function FallingText() {
  return (
    <div className="falling-text">
      {[...Array(5)].map((_, i) => (
        <div key={i} className="dbtc-text">$DBTC</div>
      ))}
    </div>
  );
}

function GlitchOverlay() {
  return (
    <>
      <div className="glitch-overlay" />
      <div className="glitch-overlay" style={{ animationDelay: '-4s' }} />
    </>
  );
}

function Hero() {
  const handleConnectWallet = () => {
    window.open('https://raydium.io/swap/?inputCurrency=sol&outputCurrency=DBTcxc1aDyXPFGUa7EwvVoVpU4yqpGEZMGKgvtPpBZw3&fixed=in', '_blank');
  };

  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="relative z-10 min-h-screen flex items-center justify-center text-center px-4 pt-16"
    >
      <div className="max-w-4xl mx-auto">
        <motion.h1 
          className="text-5xl md:text-7xl font-bold golden-header mb-6"
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Don't Buy This Coin
        </motion.h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8">
          $DBTC on Solana - The Coin You Shouldn't Buy 🌐🚀
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleConnectWallet}
            className="electric-button px-8 py-3 bg-gradient-to-r from-green-400 to-green-500 rounded-full text-black font-semibold transition-all relative overflow-hidden"
          >
            <Wallet className="inline-block mr-2 h-5 w-5" />
            Trade on Raydium
          </motion.button>
          <motion.a 
            href="https://www.coingecko.com/en/coins/dont-buy-this-coin"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="electric-button px-8 py-3 bg-gradient-to-r from-green-500 to-green-400 rounded-full text-black font-semibold transition-all"
          >
            <TrendingUp className="inline-block mr-2 h-5 w-5" />
            View on CoinGecko
          </motion.a>
        </div>
      </div>
    </motion.section>
  );
}

function Features() {
  return (
    <section className="relative z-10 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-green-400 mb-16">Key Features</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: <Zap className="h-8 w-8 text-green-400" />,
              title: "Ultra-Fast Transactions",
              description: "Built on Solana for lightning-fast transactions with minimal fees"
            },
            {
              icon: <Shield className="h-8 w-8 text-green-400" />,
              title: "Community Driven",
              description: "A dedicated community of holders and stakers driving growth"
            },
            {
              icon: <DollarSign className="h-8 w-8 text-green-400" />,
              title: "Growth Potential",
              description: "Aiming for a $1B market cap with strong fundamentals"
            }
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="electric-border bg-gray-900/50 backdrop-blur-sm p-6 rounded-2xl border border-green-500/30 hover:border-green-400 transition-all group"
            >
              <div className="mb-4 transform group-hover:scale-110 transition-transform">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-green-400 mb-2">{feature.title}</h3>
              <p className="text-gray-300/80">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Tokenomics() {
  return (
    <section className="relative z-10 py-20 px-4 bg-black/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-green-400 mb-16">Tokenomics</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="electric-border bg-gray-900/50 backdrop-blur-sm p-8 rounded-2xl border border-green-500/30"
          >
            <h3 className="text-2xl font-bold text-green-400 mb-4">Supply & Distribution</h3>
            <ul className="space-y-4">
              <li className="flex items-center">
                <Coins className="h-5 w-5 text-green-400 mr-2" />
                <span className="text-gray-300">Total Supply: 1,000,000,000 $DBTC</span>
              </li>
              <li className="flex items-center">
                <Coins className="h-5 w-5 text-green-400 mr-2" />
                <span className="text-gray-300">Circulating Supply: 999,879,473 $DBTC</span>
              </li>
              <li className="flex items-center">
                <DollarSign className="h-5 w-5 text-green-400 mr-2" />
                <span className="text-gray-300">Market Cap: ~$335,806</span>
              </li>
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="electric-border bg-gray-900/50 backdrop-blur-sm p-8 rounded-2xl border border-green-500/30"
          >
            <h3 className="text-2xl font-bold text-green-400 mb-4">Price Statistics</h3>
            <ul className="space-y-4">
              <li className="flex items-center">
                <TrendingUp className="h-5 w-5 text-green-400 mr-2" />
                <span className="text-gray-300">Current Price: $0.0003358</span>
              </li>
              <li className="flex items-center">
                <Rocket className="h-5 w-5 text-green-400 mr-2" />
                <span className="text-gray-300">All-Time High: $0.001909 (Jan 14, 2025)</span>
              </li>
              <li className="flex items-center">
                <Gift className="h-5 w-5 text-green-400 mr-2" />
                <span className="text-gray-300">24h Volume: ~$10,068.81</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Roadmap() {
  return (
    <section className="relative z-10 py-20 px-4 bg-black/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-green-400 mb-16">Roadmap</h2>
        <div className="space-y-8">
          {[
            {
              phase: "Phase 1: Launch & Growth",
              items: [
                "Initial launch on Raydium DEX",
                "CoinGecko listing",
                "Community building initiatives"
              ],
              icon: <Rocket className="h-6 w-6 text-green-400" />
            },
            {
              phase: "Phase 2: Market Expansion",
              items: [
                "Additional DEX listings",
                "Marketing partnerships",
                "Price tracking integrations"
              ],
              icon: <TrendingUp className="h-6 w-6 text-green-400" />
            },
            {
              phase: "Phase 3: $1B Market Cap",
              items: [
                "Major exchange listings",
                "Strategic partnerships",
                "Enhanced utility development"
              ],
              icon: <DollarSign className="h-6 w-6 text-green-400" />
            }
          ].map((phase, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="electric-border bg-gray-900/50 backdrop-blur-sm p-6 rounded-2xl border border-green-500/30"
            >
              <div className="flex items-center mb-4">
                {phase.icon}
                <h3 className="text-xl font-semibold text-green-400 ml-2">{phase.phase}</h3>
              </div>
              <ul className="space-y-2">
                {phase.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="text-gray-300/80 flex items-center">
                    <span className="w-2 h-2 bg-green-400 rounded-full mr-2" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  return (
    <section className="relative z-10 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-green-400 mb-16">FAQ</h2>
        <div className="space-y-6">
          {[
            {
              question: "What is DBTC?",
              answer: "DBTC (Don't Buy This Coin) is a unique cryptocurrency built on the Solana blockchain, known for its unconventional name and strong community focus."
            },
            {
              question: "How can I buy DBTC?",
              answer: "DBTC can be traded on Raydium DEX using the DBTC/SOL trading pair. Make sure to have SOL in your wallet before trading."
            },
            {
              question: "What makes DBTC unique?",
              answer: "DBTC stands out with its distinctive branding, dedicated community of holders and stakers, and ambitious goal of reaching a $1B market cap."
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="electric-border bg-gray-900/50 backdrop-blur-sm p-6 rounded-2xl border border-green-500/30"
            >
              <div className="flex items-center mb-2">
                <HelpCircle className="h-5 w-5 text-green-400 mr-2" />
                <h3 className="text-xl font-semibold text-green-400">{item.question}</h3>
              </div>
              <p className="text-gray-300/80 ml-7">{item.answer}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Community() {
  return (
    <section className="relative z-10 py-20 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-green-400 mb-8">Join Our Community</h2>
        <div className="flex justify-center gap-6">
          <motion.a
            href="https://twitter.com/DontBuyThisCoin"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            className="electric-button p-4 rounded-full bg-green-400/20 text-green-400 hover:bg-green-400/30"
          >
            <Twitter className="h-8 w-8" />
          </motion.a>
          <motion.a
            href="https://t.me/dbtc_portal"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            className="electric-button p-4 rounded-full bg-green-400/20 text-green-400 hover:bg-green-400/30"
          >
            <MessageCircle className="h-8 w-8" />
          </motion.a>
          <motion.a
            href="https://www.coingecko.com/en/coins/dont-buy-this-coin"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            className="electric-button p-4 rounded-full bg-green-400/20 text-green-400 hover:bg-green-400/30"
          >
            <ExternalLink className="h-8 w-8" />
          </motion.a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  const handleShare = async () => {
    try {
      if (navigator.share) {
        await navigator.share({
          title: "Don't Buy This Coin",
          text: "Check out Don't Buy This Coin ($DBTC) on Solana!",
          url: window.location.href
        });
      } else {
        // Fallback to copying URL
        await navigator.clipboard.writeText(window.location.href);
        alert('Link copied to clipboard!');
      }
    } catch (error) {
      console.error('Error sharing:', error);
    }
  };

  return (
    <footer className="relative z-10 py-8 px-4 border-t border-green-500/20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="text-gray-300/80 mb-4 md:mb-0">
          © 2025 Don't Buy This Coin. All rights reserved.
        </div>
        <div className="flex space-x-6">
          <a 
            href="https://x.com/DBTCCOIN" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-green-400 hover:text-green-300 transition-colors"
          >
            <Twitter className="h-6 w-6" />
          </a>
          <a 
            href="https://t.me/DBTC_MC_CODED" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-green-400 hover:text-green-300 transition-colors"
          >
            <MessageCircle className="h-6 w-6" />
          </a>
          <button 
            onClick={handleShare}
            className="text-green-400 hover:text-green-300 transition-colors"
          >
            <Share2 className="h-6 w-6" />
          </button>
        </div>
      </div>
    </footer>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <ThunderEffect />
      <RainEffect />
      <SpinningWheelEffect />
      <FallingText />
      <GlitchOverlay />
      <div className="relative z-10">
        <Hero />
        <Features />
        <Tokenomics />
        <Roadmap />
        <FAQ />
        <Community />
        <Footer />
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="fixed bottom-8 left-1/2 -translate-x-1/2 text-purple-400/50 z-20"
      >
        <ChevronDown className="h-6 w-6 animate-bounce" />
      </motion.div>
    </div>
  );
}

export default App;