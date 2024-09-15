function fetchData() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ data: "API response data" });
      }, 2000);  // Simulate a 2-second delay for fetching data
    });
  }
  
  async function awaitCall() {
    const data = await fetchData();
    console.log("Data received:", data);
  }
  
  // Test
  awaitCall();
  