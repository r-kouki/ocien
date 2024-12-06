import { useState } from 'react';
import { FootprintQuestion, FootprintAnswers } from './types';

const questions: FootprintQuestion[] = [
  {
    id: 'plastic',
    question: 'How often do you use single-use plastics?',
    options: [
      { value: 3, label: 'Daily (water bottles, packaging, etc.)' },
      { value: 2, label: 'A few times a week' },
      { value: 1, label: 'Rarely - I mostly use reusable items' },
      { value: 0, label: 'Never - I completely avoid single-use plastics' },
    ],
  },
  {
    id: 'seafood',
    question: 'How do you choose your seafood?',
    options: [
      { value: 3, label: 'I don\'t check the source' },
      { value: 2, label: 'I sometimes check for sustainable options' },
      { value: 1, label: 'I usually choose sustainable options' },
      { value: 0, label: 'I only eat certified sustainable seafood' },
    ],
  },
  {
    id: 'transport',
    question: 'What\'s your primary mode of transportation?',
    options: [
      { value: 3, label: 'Personal car (daily use)' },
      { value: 2, label: 'Mix of car and public transport' },
      { value: 1, label: 'Mainly public transport' },
      { value: 0, label: 'Walking, cycling, or electric vehicles' },
    ],
  },
];

export function useFootprintCalculator() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<FootprintAnswers>({});
  const [score, setScore] = useState<number | null>(null);

  const setAnswer = (questionId: string, value: number) => {
    const newAnswers = { ...answers, [questionId]: value };
    setAnswers(newAnswers);

    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      // Calculate final score
      const totalPoints = Object.values(newAnswers).reduce((sum, val) => sum + val, 0);
      const maxPoints = questions.length * 3;
      const finalScore = Math.round((totalPoints / maxPoints) * 100);
      setScore(finalScore);
    }
  };

  return {
    questions,
    currentQuestion: questions[currentIndex],
    answers,
    setAnswer,
    score,
    progress: ((currentIndex + 1) / questions.length) * 100,
  };
}