//
// This is only a SKELETON file for the 'Bob' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const hey = (message) => {
  const speech = message.trimEnd();
  const isQuestion = speech.endsWith("?");
  const isShout = (speech.toLocaleUpperCase('en-US') === speech && /[A-Z]{1}/.test(speech));

  // He says 'Fine. Be that way!' if you address him without actually saying anything.
  if (speech === '') return 'Fine. Be that way!';

  // He answers 'Calm down, I know what I'm doing!' if you yell a question at him.
  if (isShout && isQuestion) return "Calm down, I know what I'm doing!";

    // He answers 'Whoa, chill out!' if you YELL AT HIM (in all capitals).
  if (isShout && !isQuestion) return "Whoa, chill out!";

  // Bob answers 'Sure.' if you ask him a question, such as "How are you?".
  if (!isShout && isQuestion) return "Sure.";

  // He answers 'Whatever.' to anything else.
  return 'Whatever.';
};
