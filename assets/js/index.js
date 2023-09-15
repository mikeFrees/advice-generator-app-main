document.addEventListener("DOMContentLoaded", function () {     //making sure that the web page is fully loaded

    const url = "https://api.adviceslip.com/advice";
    const adviceIDElement = document.getElementById("adviceID");
    const adviceTextElement = document.getElementById("adviceText");
    const getAdviceButton = document.getElementById("getAdviceButton");

    getAdviceButton.addEventListener("click", getAdvice);

    async function getAdvice() {
        // Use fetch() to make the request to the API
        const response = await fetch(url).catch((error) => console.error(`Error fetching data: ${error.message}`));;
        const data = await response.json();
        displayAdvice(data.slip);
    } 

    function displayAdvice(quote) {     
        console.log(quote);
        adviceIDElement.textContent = `Advice #${quote.id}`;
        adviceTextElement.textContent = `"${quote.advice}"`;
    }

});
