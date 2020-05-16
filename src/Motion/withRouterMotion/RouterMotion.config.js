const routerMotion = {
  variants: {
    initial: { opacity: 0, x: 100 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -100 },
    transition: { duration: 0.5 },
  },
  initial: 'initial',
  animate: 'animate',
  exit: 'exit',
  transition: 'transition',
};

export default routerMotion;
