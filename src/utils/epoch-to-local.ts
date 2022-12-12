const epochToLocalDateTime = (epochTime: number) => {
  return new Date(epochTime * 1000) 
};

export { epochToLocalDateTime };
