function linearSearch(item0, item) {
    for (let i = 0; i < arr.length; i++) {
      if (item0[i] === item) { 
        return i;
      }
    }
    
    
    return null;
  }