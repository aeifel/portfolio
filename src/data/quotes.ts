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
  { text: 'Simplicity is prerequisite for reliability.', who: 'Edsger Dijkstra', where: 'EWD498, 1975' },
  { text: 'Simple things should be simple, complex things should be possible.', who: 'Alan Kay', where: '' },
  { text: 'A complex system that works is invariably found to have evolved from a simple system that worked.', who: 'John Gall', where: 'Systemantics, 1975' },
  { text: 'Talk is cheap. Show me the code.', who: 'Linus Torvalds', where: '2000' },
  { text: 'Adding manpower to a late software project makes it later.', who: 'Fred Brooks', where: 'The Mythical Man-Month, 1975' },
  { text: 'Make it work, make it right, make it fast.', who: 'Kent Beck', where: '' },
  { text: 'Walking on water and developing software from a specification are easy if both are frozen.', who: 'Edward V. Berard', where: '' },
];