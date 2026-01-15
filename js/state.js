export const state = {
  step: 1
};

export const steps = {
  1: {
    title: "First Examples",
    stage: "AI Training",
    bitik: "We are training AI to recognise backpacks.",
    ai: "Ready to learn!",
    aiStatus: "Waiting for examples…",

    aiAfter: "I’ve remembered the first examples!",
    aiStatusAfter: "Now I know what a backpack looks like."
  },

  2: {
    title: "AI Mistake",
    stage: "Test Check",
    bitik: "Checking the test...",
    ai: "This isn’t a backpack!",
    aiStatus: "I got confused…",

    aiAfter: "Now I understand why I made a mistake.",
    aiStatusAfter: "I need more examples!"
  },

  3: {
    title: "More Training",
    stage: "AI Training",
    bitik: "Let’s add more examples.",
    ai: "Learning…",
    aiStatus: "Now I understand better.",

    aiAfter: "Now I have lots of different examples!",
    aiStatusAfter: "I will do much better this time around."
  },

  4: {
    title: "AI Succeeds",
    stage: "Test",
    bitik: "Testing again...",
    ai: "This is a backpack!",
    aiStatus: "Now I get it!",

    aiAfter: "Yes! Now I recognise confidently!",
    aiStatusAfter: "Training works!"
  },

  5: {
    title: "Trick",
    stage: "Hard Test",
    bitik: "Is this a backpack or not?",
    ai: "Hmm… looks like it…",
    aiStatus: "I might be wrong.",

    aiAfter: "Now I see the differences!",
    aiStatusAfter: "Not everything round is a backpack."
  }
};
