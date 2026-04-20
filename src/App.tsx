import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Trophy, Github, Linkedin, Hexagon, ArrowRight, XCircle, RotateCcw, Check, X, Circle, CircleDot } from 'lucide-react';
import { Question, getRandomSession } from './data/questions';

const GITHUB_URL = "https://github.com/Barrsum";
const LINKEDIN_URL = "https://www.linkedin.com/in/ram-bapat-barrsum-diamos";

type GameStage = 'start' | 'question' | 'results';

export default function App() {
  const [stage, setStage] = useState<GameStage>('start');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<string[]>([]);
  const [sessionQuestions, setSessionQuestions] = useState<Question[]>([]);

  const startGame = () => {
    setSessionQuestions(getRandomSession(5));
    setCurrentIndex(0);
    setUserAnswers([]);
    setStage('question');
  };

  const handleOptionSelect = (ans: string) => {
    const newAnswers = [...userAnswers, ans];
    setUserAnswers(newAnswers);
    
    if (currentIndex < sessionQuestions.length - 1) {
      setCurrentIndex(prev => prev + 1);
    } else {
      setStage('results');
    }
  };

  const getScoreInfo = () => {
    const score = sessionQuestions.reduce((acc, q, idx) => {
      return acc + (userAnswers[idx] === q.correctAnswer ? 1 : 0);
    }, 0);
    
    let rank = 'Failure';
    let TrophyIcon = <XCircle size={64} className="text-[#888888] drop-shadow-xl" />;
    
    if (score === 5) {
      rank = 'Gold Class';
      TrophyIcon = <Trophy size={64} className="text-[#D4AF37] drop-shadow-xl" />;
    } else if (score === 4) {
      rank = 'Silver Class';
      TrophyIcon = <Trophy size={64} className="text-[#C0C0C0] drop-shadow-xl" />;
    } else if (score === 3) {
      rank = 'Bronze Class';
      TrophyIcon = <Trophy size={64} className="text-[#CD7F32] drop-shadow-xl" />;
    }

    return { score, rank, TrophyIcon };
  };

  // Safe fallback before session is loaded
  const currentQ = sessionQuestions.length > 0 ? sessionQuestions[currentIndex] : null;

  return (
    <div className="min-h-screen bg-[#F7F7F9] text-[#0A0A0A] flex flex-col font-sans selection:bg-[#0A0A0A] selection:text-[#F7F7F9]">
      
      {/* Header */}
      <header className="w-full px-8 py-8 flex justify-between items-center z-50">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-[#0A0A0A] flex items-center justify-center text-[#F7F7F9] shadow-xl">
            <Hexagon size={24} strokeWidth={1.5} />
          </div>
          <div className="flex flex-col">
            <h1 className="text-2xl font-serif font-bold tracking-tight uppercase text-[#0A0A0A] leading-none mb-1">Silhouette</h1>
            <span className="text-[10px] font-sans font-medium text-[#666666] tracking-[0.2em] uppercase">Visual Assessment</span>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="flex-1 flex flex-col items-center justify-center p-6 w-full max-w-4xl mx-auto">
        <div className="w-full relative">
          <AnimatePresence mode="wait">
            
            {/* START SCREEN */}
            {stage === 'start' && (
              <motion.div 
                key="start"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="w-full flex flex-col items-center text-center px-4"
              >
                <div className="px-5 py-2 border border-[#E5E5E5] rounded-full mb-10 bg-white premium-card-shadow">
                  <span className="text-xs font-semibold tracking-widest text-[#444444] uppercase">Created by Ram Bapat</span>
                </div>
                
                <h2 className="text-6xl md:text-8xl font-serif text-[#0A0A0A] mb-6 tracking-tight">
                  <span className="italic font-light">The</span> Silhouette
                </h2>
                
                <p className="text-[#666666] text-lg md:text-xl max-w-lg leading-relaxed mb-16 font-light">
                  A premium visual geometry challenge. Five silhouettes will be presented. Select the correct classification or attribute for each. Results are strictly sealed until completion.
                </p>
                
                <button 
                  onClick={startGame}
                  className="group flex items-center gap-4 px-12 py-5 bg-[#0A0A0A] text-[#F7F7F9] font-medium text-sm tracking-[0.2em] uppercase hover:bg-white hover:text-[#0A0A0A] hover:border-[#0A0A0A] border border-transparent transition-all duration-300"
                >
                  Initiate Sequence
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </motion.div>
            )}

            {/* QUESTION SCREEN */}
            {stage === 'question' && currentQ && (
              <motion.div 
                key={`q-${currentIndex}`}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="w-full max-w-5xl mx-auto flex flex-col"
              >
                {/* Live Progress HUD */}
                <div className="w-full flex justify-between items-end mb-8 lg:mb-12 border-b border-[#E5E5E5] pb-4">
                  <div className="flex flex-col gap-2">
                    <span className="text-[10px] font-sans font-bold text-[#888888] tracking-[0.2em] uppercase">Progression</span>
                    <div className="flex gap-3 items-center">
                      {sessionQuestions.map((q, i) => {
                        if (i < currentIndex) {
                          const isCorrect = userAnswers[i] === q.correctAnswer;
                          return isCorrect ? <Check key={i} size={18} strokeWidth={3} className="text-[#0A0A0A]" /> : <X key={i} size={18} strokeWidth={3} className="text-[#A0A0A0]" />;
                        }
                        if (i === currentIndex) {
                           return <CircleDot key={i} size={18} strokeWidth={2.5} className="text-[#0A0A0A]" />;
                        }
                        return <Circle key={i} size={16} strokeWidth={2} className="text-[#E5E5E5]" />;
                      })}
                    </div>
                  </div>

                  <div className="flex flex-col items-end gap-1">
                     <span className="text-[10px] font-sans font-bold text-[#888888] tracking-[0.2em] uppercase">Current Score</span>
                     <div className="font-serif text-2xl text-[#0A0A0A] leading-none">
                        {sessionQuestions.slice(0, currentIndex).reduce((acc, q, idx) => acc + (userAnswers[idx] === q.correctAnswer ? 1 : 0), 0)}
                        <span className="text-sm font-sans text-[#888888] ml-1">/ {currentIndex}</span>
                     </div>
                  </div>
                </div>

                <div className="w-full flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
                  {/* Left Side: Silhouette Display */}
                  <div className="w-full lg:w-1/2 aspect-square bg-white premium-card-shadow flex flex-col items-center justify-center p-12 relative overflow-hidden group">
                  <div className="absolute top-8 left-8 text-xs font-semibold tracking-widest text-[#888888] uppercase">
                    Stage 0{currentIndex + 1}
                  </div>
                  
                  <motion.div 
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
                    className="w-full h-full flex items-center justify-center text-[#0A0A0A] shape-shadow group-hover:scale-105 transition-transform duration-700"
                  >
                    <currentQ.Svg className="w-3/4 h-3/4" />
                  </motion.div>
                </div>

                {/* Right Side: Question & Options */}
                <div className="w-full lg:w-1/2 flex flex-col justify-center">
                  <h3 className="text-3xl md:text-5xl font-serif text-[#0A0A0A] mb-12 leading-snug">
                    {currentQ.text}
                  </h3>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {currentQ.options.map((opt, i) => (
                      <button
                        key={i}
                        onClick={() => handleOptionSelect(opt)}
                        className="w-full py-6 px-6 bg-white border border-[#E5E5E5] text-left text-lg font-serif text-[#444444] hover:border-[#0A0A0A] hover:bg-[#0A0A0A] hover:text-white transition-all duration-300 premium-card-shadow"
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                </div>
                </div>
              </motion.div>
            )}

            {/* RESULTS SCREEN */}
            {stage === 'results' && (() => {
              const { score, rank, TrophyIcon } = getScoreInfo();
              return (
                <motion.div 
                  key="results"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="w-full flex flex-col items-center justify-center"
                >
                  <div className="bg-white premium-card-shadow p-12 md:p-16 w-full max-w-3xl flex flex-col items-center text-center">
                    
                    <motion.div 
                      initial={{ scale: 0, rotate: -15 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ type: 'spring', damping: 15, delay: 0.2 }}
                      className="mb-8"
                    >
                      {TrophyIcon}
                    </motion.div>
                    
                    <h2 className="text-5xl font-serif text-[#0A0A0A] mb-4">Assessment Concluded</h2>
                    <p className={`font-semibold tracking-[0.2em] uppercase mb-12 ${score >= 3 ? 'text-[#0A0A0A]' : 'text-[#888888]'}`}>
                      {rank}
                    </p>
                    
                    <div className="text-7xl font-serif text-[#0A0A0A] mb-16 flex items-baseline gap-4 justify-center">
                      {score} <span className="text-3xl font-sans font-light text-[#888888]">/ 5</span>
                    </div>

                    <div className="w-full border-t border-[#E5E5E5] pt-12 flex flex-col gap-6 text-left">
                      {sessionQuestions.map((q, i) => {
                        const userAns = userAnswers[i];
                        const isCorrect = userAns === q.correctAnswer;
                        return (
                          <div key={i} className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-[#F0F0F0] last:border-0">
                            <div className="flex items-center gap-6 mb-3 sm:mb-0">
                              <div className="w-12 h-12 flex-shrink-0 bg-[#F9FAFB] flex items-center justify-center text-[#0A0A0A]">
                                <q.Svg className="w-6 h-6" />
                              </div>
                              <span className="font-sans text-sm text-[#444444] max-w-[200px]">{q.text}</span>
                            </div>
                            
                            <div className="flex items-center gap-4 pl-18 sm:pl-0">
                              {!isCorrect && (
                                <span className="font-serif text-[#A0A0A0] line-through text-lg">{userAns}</span>
                              )}
                              <span className={`font-serif text-xl ${isCorrect ? 'text-[#0A0A0A] font-medium' : 'text-[#0A0A0A]'}`}>
                                {q.correctAnswer}
                              </span>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  <button 
                    onClick={startGame}
                    className="mt-12 flex items-center gap-4 px-10 py-5 bg-white border border-[#E5E5E5] text-[#0A0A0A] font-medium text-sm tracking-[0.2em] uppercase hover:bg-[#0A0A0A] hover:text-white transition-all duration-300 premium-card-shadow"
                  >
                    <RotateCcw size={18} />
                    Repeat Sequence
                  </button>
                </motion.div>
              );
            })()}
          </AnimatePresence>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full px-8 py-8 flex flex-col sm:flex-row justify-between items-center z-50 text-[#666666] border-t border-[#E5E5E5] bg-white mt-auto">
        <div className="flex items-center gap-4 mb-4 sm:mb-0">
          <span className="font-sans text-xs font-bold tracking-[0.15em] uppercase text-[#0A0A0A]">
            Ram Bapat
          </span>
          <div className="w-1 h-1 bg-[#0A0A0A]"></div>
          <span className="font-sans text-xs font-medium uppercase tracking-[0.15em]">
            Day 21 • Silhouette
          </span>
        </div>
        
        <div className="flex items-center gap-6">
          <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className="hover:text-[#0A0A0A] transition-colors">
            <Github size={20} />
          </a>
          <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className="hover:text-[#0A66C2] transition-colors">
            <Linkedin size={20} />
          </a>
        </div>
      </footer>
    </div>
  );
}
