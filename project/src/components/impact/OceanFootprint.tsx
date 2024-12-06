import React from 'react';
import { useFootprintCalculator } from './useFootprintCalculator';
import { FootprintQuestion } from './types';

export function OceanFootprint() {
  const { questions, currentQuestion, answers, setAnswer, score, progress } = 
    useFootprintCalculator();

  return (
    <div className="bg-white rounded-xl p-8 shadow-sm">
      <h3 className="text-2xl font-bold mb-6">Calculate Your Ocean Footprint</h3>
      
      <div className="mb-6">
        <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
          <div
            className="h-full bg-blue-500 transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {score !== null ? (
        <div className="text-center space-y-4">
          <div className="text-4xl font-bold text-blue-600">{score} / 100</div>
          <p className="text-gray-600">
            Your ocean impact score. The lower the score, the better your
            practices are for ocean health.
          </p>
          <button
            onClick={() => window.location.reload()}
            className="bg-blue-500 text-white px-6 py-2 rounded-lg
              hover:bg-blue-600 transition-colors"
          >
            Retake Quiz
          </button>
        </div>
      ) : (
        <div className="space-y-6">
          <div className="space-y-4">
            <h4 className="text-xl font-semibold text-gray-900">
              {currentQuestion.question}
            </h4>
            <div className="grid gap-3">
              {currentQuestion.options.map((option) => (
                <button
                  key={option.value}
                  onClick={() => setAnswer(currentQuestion.id, option.value)}
                  className={`p-4 rounded-lg text-left transition-all
                    ${answers[currentQuestion.id] === option.value
                      ? 'bg-blue-50 border-2 border-blue-200'
                      : 'bg-gray-50 border-2 border-transparent hover:bg-blue-50/50'
                    }`}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}