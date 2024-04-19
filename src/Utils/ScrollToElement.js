export const scrollToElement = (arg) => {
  const element = document.getElementById(arg);
  // consol
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};