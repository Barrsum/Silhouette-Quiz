import React from 'react';

export interface Question {
  id: number;
  Svg: React.FC<React.SVGProps<SVGSVGElement>>;
  text: string;
  options: string[];
  correctAnswer: string;
}

const svgProps = { fill: "currentColor", strokeLinejoin: "round" as const, strokeWidth: "2", stroke: "currentColor" };

export const questionBank: Question[] = [
  {
    id: 1,
    Svg: (props) => <svg viewBox="0 0 100 100" {...props}><polygon points="50,10 88,38 73,85 27,85 12,38" {...svgProps}/></svg>,
    text: "What is the name of this geometric shape?",
    options: ["Hexagon", "Pentagon", "Heptagon", "Octagon"],
    correctAnswer: "Pentagon"
  },
  {
    id: 2,
    Svg: (props) => <svg viewBox="0 0 100 100" {...props}><polygon points="50,10 85,30 85,70 50,90 15,70 15,30" {...svgProps}/></svg>,
    text: "How many corners does this shape possess?",
    options: ["5", "8", "6", "7"],
    correctAnswer: "6"
  },
  {
    id: 3,
    Svg: (props) => <svg viewBox="0 0 100 100" {...props}><polygon points="25,20 75,20 90,80 10,80" {...svgProps}/></svg>,
    text: "Identify this specific quadrilateral.",
    options: ["Rhombus", "Parallelogram", "Trapezoid", "Rectangle"],
    correctAnswer: "Trapezoid"
  },
  {
    id: 4,
    Svg: (props) => <svg viewBox="0 0 100 100" {...props}><polygon points="33,10 67,10 90,33 90,67 67,90 33,90 10,67 10,33" {...svgProps}/></svg>,
    text: "How many sides construct this flat silhouette?",
    options: ["6 sides", "8 sides", "10 sides", "12 sides"],
    correctAnswer: "8 sides"
  },
  {
    id: 5,
    Svg: (props) => <svg viewBox="0 0 100 100" {...props}><polygon points="50,15 90,50 50,85 10,50" {...svgProps}/></svg>,
    text: "What is the proper classification for this shape?",
    options: ["Kite", "Rhombus", "Square", "Arrow"],
    correctAnswer: "Rhombus"
  },
  {
    id: 6,
    Svg: (props) => <svg viewBox="0 0 100 100" {...props}><polygon points="50,10 90,80 10,80" {...svgProps}/></svg>,
    text: "What type of triangle is this?",
    options: ["Scalene", "Equilateral", "Right", "Obtuse"],
    correctAnswer: "Equilateral"
  },
  {
    id: 7,
    Svg: (props) => <svg viewBox="0 0 100 100" {...props}><polygon points="20,10 20,90 90,90" {...svgProps}/></svg>,
    text: "Identify this triangle based on its angles.",
    options: ["Acute Triangle", "Obtuse Triangle", "Equilateral Triangle", "Right Triangle"],
    correctAnswer: "Right Triangle"
  },
  {
    id: 8,
    Svg: (props) => <svg viewBox="0 0 100 100" {...props}><rect x="20" y="20" width="60" height="60" {...svgProps}/></svg>,
    text: "What is the most precise name for this polygon?",
    options: ["Rectangle", "Parallelogram", "Square", "Quadrilateral"],
    correctAnswer: "Square"
  },
  {
    id: 9,
    Svg: (props) => <svg viewBox="0 0 100 100" {...props}><rect x="15" y="30" width="70" height="40" {...svgProps}/></svg>,
    text: "Identify this quadrilateral.",
    options: ["Square", "Rhombus", "Rectangle", "Kite"],
    correctAnswer: "Rectangle"
  },
  {
    id: 10,
    Svg: (props) => <svg viewBox="0 0 100 100" {...props}><polygon points="25,30 85,30 75,70 15,70" {...svgProps}/></svg>,
    text: "What shape is this silhouette?",
    options: ["Trapezoid", "Parallelogram", "Rhombus", "Kite"],
    correctAnswer: "Parallelogram"
  },
  {
    id: 11,
    Svg: (props) => <svg viewBox="0 0 100 100" {...props}><polygon points="50,10 80,40 50,90 20,40" {...svgProps}/></svg>,
    text: "Which quadrilateral features two distinct pairs of equal-length adjacent sides?",
    options: ["Trapezium", "Kite", "Rhombus", "Rectangle"],
    correctAnswer: "Kite"
  },
  {
    id: 12,
    Svg: (props) => <svg viewBox="0 0 100 100" {...props}><polygon points="50,10 81,25 90,60 67,88 33,88 10,60 19,25" {...svgProps}/></svg>,
    text: "How many sides does this shape have?",
    options: ["5", "7", "9", "11"],
    correctAnswer: "7"
  },
  {
    id: 13,
    Svg: (props) => <svg viewBox="0 0 100 100" {...props}><polygon points="50,10 76,19 94,42 84,70 64,88 36,88 16,70 6,42 24,19" {...svgProps}/></svg>,
    text: "Identify this 9-sided polygon.",
    options: ["Enneagon", "Decagon", "Heptagon", "Dodecagon"],
    correctAnswer: "Enneagon"
  },
  {
    id: 14,
    Svg: (props) => <svg viewBox="0 0 100 100" {...props}><polygon points="50,5 76,13 93,31 98,56 86,79 66,93 42,95 20,83 6,61 6,36 19,16" {...svgProps}/></svg>,
    text: "How many vertices are prominently visible here?",
    options: ["10", "11", "9", "12"],
    correctAnswer: "11"
  },
  {
    id: 15,
    Svg: (props) => <svg viewBox="0 0 100 100" {...props}><circle cx="50" cy="50" r="40" {...svgProps}/></svg>,
    text: "Which defining property characterizes this shape?",
    options: ["All points equidistant from a center", "Two focal points", "Infinite corners", "Perpendicular diagonals"],
    correctAnswer: "All points equidistant from a center"
  },
  {
    id: 16,
    Svg: (props) => <svg viewBox="0 0 100 100" {...props}><ellipse cx="50" cy="50" rx="45" ry="25" {...svgProps}/></svg>,
    text: "What is the proper geometric name?",
    options: ["Oval", "Ellipse", "Crescent", "Lens"],
    correctAnswer: "Ellipse"
  },
  {
    id: 17,
    Svg: (props) => <svg viewBox="0 0 100 100" {...props}><polygon points="50,10 62,35 90,35 68,52 75,80 50,62 25,80 32,52 10,35 38,35" {...svgProps}/></svg>,
    text: "How many points does this star polygon project?",
    options: ["4", "5", "6", "8"],
    correctAnswer: "5"
  },
  {
    id: 18,
    Svg: (props) => <svg viewBox="0 0 100 100" {...props}><polygon points="50,10 60,32 85,32 65,48 72,72 50,55 28,72 35,48 15,32 40,32" {...svgProps}/></svg>,
    text: "Identify this shape.",
    options: ["Pentagram", "Hexagram", "Octagram", "Heptagram"],
    correctAnswer: "Hexagram"
  },
  {
    id: 19,
    Svg: (props) => <svg viewBox="0 0 100 100" {...props}><path d="M 60,10 A 40,40 0 1,0 60,90 A 30,30 0 1,1 60,10 Z" {...svgProps}/></svg>,
    text: "What is the name of this non-convex shape?",
    options: ["Annulus", "Lens", "Crescent", "Torus"],
    correctAnswer: "Crescent"
  },
  {
    id: 20,
    Svg: (props) => <svg viewBox="0 0 100 100" {...props}><polygon points="30,40 60,40 60,20 90,50 60,80 60,60 30,60" {...svgProps}/></svg>,
    text: "What is the common term for this specific polygon?",
    options: ["Cross", "Chevron", "Arrow", "Kite"],
    correctAnswer: "Arrow"
  },
  {
    id: 21,
    Svg: (props) => <svg viewBox="0 0 100 100" {...props}><polygon points="40,10 60,10 60,40 90,40 90,60 60,60 60,90 40,90 40,60 10,60 10,40 40,40" {...svgProps}/></svg>,
    text: "How many lines of symmetry does a perfect version of this shape feature?",
    options: ["2", "4", "8", "None"],
    correctAnswer: "4"
  },
  {
    id: 22,
    Svg: (props) => <svg viewBox="0 0 100 100" {...props}><polygon points="30,20 70,50 30,80 45,50" {...svgProps}/></svg>,
    text: "What is the name of this V-shaped polygon?",
    options: ["Chevron", "Dart", "Kite", "Delta"],
    correctAnswer: "Chevron"
  },
  {
    id: 23,
    Svg: (props) => <svg viewBox="0 0 100 100" {...props}><path d="M50,85 C50,85 10,55 10,35 C10,15 35,15 50,35 C65,15 90,15 90,35 C90,55 50,85 50,85 Z" {...svgProps}/></svg>,
    text: "While not a standard geometric polygon, what form is this silhouette recognized as?",
    options: ["Spade", "Heart", "Club", "Diamond"],
    correctAnswer: "Heart"
  },
  {
    id: 24,
    Svg: (props) => <svg viewBox="0 0 100 100" {...props}><polygon points="20,20 40,20 40,60 80,60 80,80 20,80" {...svgProps}/></svg>,
    text: "What is the name of this L-shaped polygon?",
    options: ["Gnomon", "Chevron", "Trapezium", "Concave Quadrilateral"],
    correctAnswer: "Gnomon"
  },
  {
    id: 25,
    Svg: (props) => <svg viewBox="0 0 100 100" {...props}><path d="M 50,10 A 40,40 0 1,1 49.9,10 Z M 50,25 A 25,25 0 1,0 50.1,25 Z" fillRule="evenodd" {...svgProps}/></svg>,
    text: "What is the geometric name for this ring-like shape?",
    options: ["Torus", "Annulus", "Spherical Shell", "Circle"],
    correctAnswer: "Annulus"
  },
  {
    id: 26,
    Svg: (props) => <svg viewBox="0 0 100 100" {...props}><polygon points="50,10 74,18 90,36 90,64 74,82 50,90 26,82 10,64 10,36 26,18" {...svgProps}/></svg>,
    text: "Count the sides. What is the name of this shape?",
    options: ["Decagon", "Octagon", "Dodecagon", "Heptagon"],
    correctAnswer: "Decagon"
  }
];

export const getRandomSession = (count: number = 5): Question[] => {
  const shuffled = [...questionBank].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};
