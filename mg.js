// Three arrays with realistic message pieces
const subjects = ['The sun', 'Your spirit', 'The moon', 'A wise owl', 'Your energy'];
const actions = ['will guide', 'is whispering', 'is inspiring', 'will challenge', 'encourages'];
const objects = ['you today.', 'a new opportunity.', 'your next adventure.', 'a moment of reflection.', 'you to take a leap.'];

// Helper function to pick a random item from any array
const random = (array) => {
  let i = Math.floor(Math.random() * array.length);
  return array[i];
};

// Function to generate the full message
const generateMessage = () => {
  const message = `${random(subjects)} ${random(actions)} ${random(objects)}`;
  return message;
};

// Print a random message each time the program runs
console.log(generateMessage());
