export interface Quote {
  text: string;
  who: string;
  where: string;
}

/** One is chosen per visit. Add a line to extend the pool. */
export const QUOTES: Quote[] = [
  {
    text: 'What I cannot create, I do not understand.',
    who: 'Richard Feynman',
    where: 'on his blackboard, 1988',
  },
  {
    text: 'Bad programmers worry about the code. Good programmers worry about data structures and their relationships.',
    who: 'Linus Torvalds',
    where: '2006',
  },
];
