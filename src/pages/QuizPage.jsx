import React, { useContext, useState } from 'react';
import { CMSContext } from '../context/CMSContext';
import { QUIZ_QUESTIONS } from '../data/initialData';

export function QuizPage() {
  const { cmsData } = useContext(CMSContext);
  const speakers = cmsData.speakers || [];
  const questions = QUIZ_QUESTIONS || [];

  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [result, setResult] = useState(null);

  const handleSelectOption = (category) => {
    const newAnswers = [...answers, category];
    setAnswers(newAnswers);

    if (currentStep + 1 < questions.length) {
      setCurrentStep(currentStep + 1);
    } else {
      calculateResult(newAnswers);
    }
  };

  const calculateResult = (finalAnswers) => {
    const counts = { Technology: 0, Design: 0, Business: 0, Entertainment: 0 };
    finalAnswers.forEach(cat => counts[cat] = (counts[cat] || 0) + 1);

    let topCategory = 'Technology';
    let maxCount = -1;
    Object.keys(counts).forEach(cat => {
      if (counts[cat] > maxCount) {
        maxCount = counts[cat];
        topCategory = cat;
      }
    });

    const matchedSp = speakers.find(s => s.category === topCategory) || speakers[0];
    const matchPercentage = Math.round((maxCount / questions.length) * 100);

    setResult({
      speaker: matchedSp,
      category: topCategory,
      matchPercentage: Math.max(matchPercentage, 75)
    });
    setQuizCompleted(true);
  };

  const restartQuiz = () => {
    setCurrentStep(0);
    setAnswers([]);
    setQuizCompleted(false);
    setResult(null);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12 animate-page-enter">
      
      <div className="text-center space-y-3">
        <span className="px-4 py-1.5 bg-[#E62B1E]/15 border border-[#E62B1E]/40 text-[#E62B1E] font-black text-xs uppercase tracking-widest rounded-full">
          Interactive Experience
        </span>
        <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight font-heading">Which Past Speaker Are You?</h1>
        <p className="text-xs sm:text-sm text-gray-400 max-w-xl mx-auto">
          Discover your intellectual alter-ego from our distinguished alumni of past TEDxTapmi speakers by answering 4 mindset questions.
        </p>
      </div>

      <div className="bg-[#0E0E14] border border-[#262638] rounded-3xl p-6 sm:p-12 shadow-2xl relative tedx-neon-border">
        {!quizCompleted ? (
          <div className="space-y-8">
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-bold text-gray-400">
                <span>Question {currentStep + 1} of {questions.length}</span>
                <span className="text-[#E62B1E] font-mono">{Math.round(((currentStep + 1) / questions.length) * 100)}%</span>
              </div>
              <div className="w-full h-2.5 bg-[#171722] rounded-full overflow-hidden">
                <div
                  className="h-full bg-[#E62B1E] transition-all duration-300 shadow-md shadow-[#E62B1E]/50"
                  style={{ width: `${((currentStep + 1) / questions.length) * 100}%` }}
                />
              </div>
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-white font-heading leading-snug">
              {questions[currentStep]?.question}
            </h3>

            <div className="grid grid-cols-1 gap-4">
              {questions[currentStep]?.options.map((opt, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSelectOption(opt.category)}
                  className="p-5 bg-[#151520] hover:bg-[#1E1E2C] border border-[#272738] hover:border-[#E62B1E] rounded-2xl text-left font-medium text-xs sm:text-sm text-gray-200 hover:text-white transition-all flex items-center space-x-4 group cursor-pointer"
                >
                  <span className="w-8 h-8 rounded-full bg-[#E62B1E]/15 border border-[#E62B1E]/40 text-[#E62B1E] font-bold text-xs flex items-center justify-center group-hover:bg-[#E62B1E] group-hover:text-white transition-colors">
                    {String.fromCharCode(65 + idx)}
                  </span>
                  <span className="flex-1">{opt.label}</span>
                </button>
              ))}
            </div>
          </div>
        ) : (
          result && (
            <div className="text-center space-y-8 py-4">
              <span className="inline-block px-4 py-1.5 bg-[#E62B1E]/20 text-[#E62B1E] font-black text-xs uppercase tracking-widest rounded-full">
                🏆 Official Past Speaker Match
              </span>

              <div className="max-w-md mx-auto bg-[#14141E] border-2 border-[#E62B1E] rounded-3xl p-6 space-y-4 shadow-2xl text-center">
                <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-2 border-[#E62B1E] shadow-xl">
                  <img src={result.speaker.image} alt={result.speaker.name} className="w-full h-full object-cover" />
                </div>

                <div>
                  <span className="text-3xl font-black text-[#E62B1E] font-heading">{result.matchPercentage}% Match</span>
                  <h3 className="text-2xl font-black text-white font-heading mt-1">{result.speaker.name}</h3>
                  <p className="text-xs font-bold text-gray-400">{result.speaker.role}</p>
                </div>

                <div className="p-3 bg-black/60 border border-[#272738] rounded-xl text-xs text-gray-300 italic">
                  "{result.speaker.topic}"
                </div>

                <p className="text-xs text-gray-400 leading-relaxed">
                  Your answers align with a strong mindset in {result.category.toLowerCase()} innovation. Like past TEDx speaker {result.speaker.name}, you see challenges through a visionary lens!
                </p>
              </div>

              <div className="flex justify-center space-x-4">
                <button onClick={restartQuiz} className="px-6 py-3 bg-[#1B1B26] hover:bg-[#252535] text-white font-bold text-xs uppercase tracking-wider rounded-xl border border-gray-700 transition-all cursor-pointer">🔄 Retake Quiz</button>
                <button onClick={() => alert('Result copied! Share your past TEDx speaker match.')} className="px-6 py-3 bg-[#E62B1E] hover:bg-[#C42115] text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-lg shadow-[#E62B1E]/40 cursor-pointer">🔗 Share Match</button>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
}
