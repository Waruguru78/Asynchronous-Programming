function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
  async function iterateWithAsyncAwait(values) {
    for (const value of values) {
      console.log(value);
      await delay(1000);  // Wait 1 second between each log
    }
  }
  
  // Test
  const values = [1, 2, 3, 4];
  iterateWithAsyncAwait(values);
  