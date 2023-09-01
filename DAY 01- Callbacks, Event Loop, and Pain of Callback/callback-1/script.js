document.addEventListener("DOMContentLoaded", function () {
    const resultElement = document.getElementById("result");
  
    function fetchData(callback) {
      setTimeout(function () {
        const data = { message: "Data fetched successfully" };
        callback(data);
      }, 2000);
    }
  
    function processData(data, callback) {
      setTimeout(function () {
        const processedData = data.message.toUpperCase();
        callback(processedData);
      }, 2000);
    }
  
    function performFinalOperation(processedData, callback) {
      setTimeout(function () {
        const result = `${processedData}`;
        callback(result);
      }, 2000);
    }
  
    function displayResult(result) {
      resultElement.innerText = result;
    }
  
    fetchData(function (data) {
      displayResult("Step 1: Data fetched.");
      processData(data, function (processedData) {
        displayResult("Step 2: Data processed.");
        performFinalOperation(processedData, function (result) {
          displayResult(`Step 3: Final operation completed. ${result}`);
        });
      });
    });
  });
  