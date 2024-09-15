async function apiCall1() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ data: 'API response 1' });
      }, 2000); // Simulate a 2-second delay
    });
  }
  
  async function apiCall2() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ data: 'API response 2' });
      }, 1500); // Simulate a 1.5-second delay
    });
  }
  
  async function concurrentRequests() {
    try {
      const [result1, result2] = await Promise.all([apiCall1(), apiCall2()]);
      console.log("Combined results:", { result1, result2 });
    } catch (error) {
      console.error("An error occurred:", error.message);
    }
  }
  
  // Test
  concurrentRequests();