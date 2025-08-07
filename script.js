 let userInput = document.getElementById('date');
    let result = document.getElementById("result");

    function calculateAge() {
      let birthDate = new Date(userInput.value);
      let today = new Date();

      let years = today.getFullYear() - birthDate.getFullYear();
      let months = today.getMonth() - birthDate.getMonth();
      let days = today.getDate() - birthDate.getDate();

      if (days < 0) {
        months--;
        let daysInPrevMonth = new Date(today.getFullYear(), today.getMonth(), 0).getDate();
        days += daysInPrevMonth;
      }

      if (months < 0) {
        years--;
        months += 12;
      }

      result.innerHTML = `You are ${years} years, ${months} months, and ${days} days old.`;
    }