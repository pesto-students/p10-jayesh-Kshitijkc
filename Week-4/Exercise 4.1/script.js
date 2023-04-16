output = document.querySelector("#output");

promise = new Promise((resolve, reject) => {
    delay = Math.floor(Math.random() * 10000);
    setTimeout(() => {
        randomNumber = Math.floor(Math.random() * 10000);
        if(randomNumber % 5 == 0) {
            reject(`The number ${randomNumber} is divisible by 5, Time taken: ${delay}`)
        }
        resolve(`The number ${randomNumber} is not divisible by 5, Time taken: ${delay}`)
      }, delay);
})

promise
.then((message) => output.textContent = `Message from then: ${message}`)
.catch((error) => output.textContent = `Message from catch: ${error}`);