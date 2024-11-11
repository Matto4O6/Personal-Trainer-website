// this function will set a cookie to a specific user when they access the website
// it will have a name, value and an expiry date

document.addEventListener("DOMContentLoaded", function() {
  const exerciseresults = document.querySelector(".result-box");
  const exerciseinputs = document.querySelector("#input-box");

  const AvailableExercises = [
    'bench press', 'push-ups', 'pullups', 'cardio', 'farmers walk',
    'weights', 'chest press', 'bicep curls', 'tricep curls', '50m sprint',
    'cycle', 'shoulder press', 'lat pulldown', 'squats', 'pilates',
  ];

  exerciseinputs.onkeyup = function(){
      let result = [];
      let input = exerciseinputs.value;
      if(input.length){
          result = AvailableExercises.filter((keyword)=>{
            return keyword.toLowerCase().includes(input.toLowerCase());
          });
          console.log(result)
      }
      display(result);

      if(!result.length){
        exerciseresults.innerHTML = '';
      }
  };

  function display(result){
    exerciseresults.innerHTML = result.join("<br>");
  }
  
});

// this function will set a cookie to a specific user when they access the website
// it will have a name, value and an expiry date

document.addEventListener("DOMContentLoaded", function() {
  SetCookie = (cName, cValue, expDays) => {
      let CurrentDate = new Date();
      CurrentDate.setTime(CurrentDate.getTime() + (expDays * 24 * 60 * 60 * 1000));
      const expires = "expires=" + CurrentDate.toUTCString();
      document.cookie = cName + "=" + cValue + "; " + expires + "; path=/";
  }

  // Function to get a cookie from a user if they access the website again
  GetCookie = (cName) => {
      const name = cName + "=";
      const cDecoded = decodeURIComponent(document.cookie)
      const cArr = cDecoded.split("; ");
      let value;
      cArr.forEach(val => {
          if (val.indexOf(name) === 0) value = val.substring(name.length);   
      })

      return value;
  }

  // Notifies the user if the cookie exists
  cookieIdentify = (block) => {
      if (!GetCookie("cookie"))
          document.querySelector("#WebCookies").style.display = block;
  }

  window.addEventListener("load", cookieIdentify);
  
  // button for webcookies
  document.querySelector("#WebCookies-btn").addEventListener("click", () => {
      document.querySelector("#WebCookies").style.display = "none";
      SetCookie("cookie", true, 30);
  });
});



