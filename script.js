function getUserIP(callback) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://api.ipify.org?format=json', true);
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
        var response = JSON.parse(xhr.responseText);
        var ipAddress = response.ip;
        callback(ipAddress);
      }
    };
    xhr.send();
  }








  // Function to send tracking data to the server
function sendTrackingData(data) {
    var xhr = new XMLHttpRequest();
    xhr.open('POST', '/track', true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify(data));
  }
  
  // Function to get the user's IP address using an API
  function getUserIP(callback) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://api.ipify.org?format=json', true);
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
        var response = JSON.parse(xhr.responseText);
        var ipAddress = response.ip;
        callback(ipAddress);
      }
    };
    xhr.send();
  }
  
  // Capture and send data when the page loads
  window.addEventListener('load', function () {
    getUserIP(function (ipAddress) {
      var trackingData = {
        page: window.location.href,
        ip: ipAddress,
        // Add any other data you want to track, e.g., user agent, etc.
      };
  
      sendTrackingData(trackingData);
    });
  });