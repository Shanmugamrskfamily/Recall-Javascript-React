document.addEventListener("DOMContentLoaded", 
function () {
    let step = 1;
    let resultElement = document.getElementById("result");

    function fetchData(callback) {
      setTimeout(function () {
        const data = { message: "Data fetched successfully" };
        callback(data);
      }, 1000);
    }

    function processData(data, callback) {
      setTimeout(function () {
        const processedData = data.message.toUpperCase();
        callback(processedData);
      }, 1000);
    }

    function performAdditionalOperation(processedData, callback) {
      setTimeout(function () {
        const result = `${processedData}`;
        callback(result);
      }, 1000);
    }
    
    if (step === 1) {
      fetchData(function (data) {
        resultElement.innerText = "Step 1: Data fetched.";
        step = 2;
        processData(data, function (processedData) {
          resultElement.innerText = "Step 2: Data processed.";
          step = 3;
          performAdditionalOperation(processedData, function (result) {
            resultElement.innerText =
              "Step 3: Additional operation completed. " + result;
          });
        });
      });
    }
  });