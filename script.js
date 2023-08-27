(function () {
  const second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24;
  
  const countDown = new Date("aug 31, 2023 12:00:00").getTime(),
      x = setInterval(function() {    

        const now = new Date().getTime(),
              distance = countDown - now;
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

          document.getElementById("hours").children[0].innerText = hours.toString()[0],
          document.getElementById("hours").children[1].innerText = hours.toString()[1],
          document.getElementById("minutes").children[0].innerText = minutes.toString()[0],
          document.getElementById("minutes").children[1].innerText = minutes.toString()[1],
          document.getElementById("seconds").children[0].innerText = seconds.toString()[0],
          document.getElementById("seconds").children[1].innerText = seconds.toString()[1];
        
          if (seconds < 10) {
            document.getElementById("seconds").children[0].innerText = 0;
            document.getElementById("seconds").children[1].innerText = seconds.toString()[0];
          }

          if (minutes < 10) {
            document.getElementById("seconds").children[0].innerText = 0;
            document.getElementById("seconds").children[1].innerText = minutes.toString()[0];
          }

          if (hours < 10) {
            document.getElementById("seconds").children[0].innerText = 0;
            document.getElementById("seconds").children[1].innerText = hours.toString()[0];
          }
      
        }, 0)
  }());


