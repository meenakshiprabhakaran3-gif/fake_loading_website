let progress = 0;

let attemptCount = 0;

let loading;

const messages = [
    "Initializing...",
    "Loading important things...",
    "Finding motivation...",
    "Downloading common sense...",
    "Searching for Wi-Fi...",
    "Asking the computer nicely...",
    "Almost there...",
    "Definitely not wasting your time..."
];

function startLoading() {

    clearInterval(loading);

    progress = 0;

    attemptCount++;

    document.getElementById("attempts").innerText = attemptCount;

    document.getElementById("progress-bar").style.width = "0%";

    document.getElementById("percentage").innerText = "0%";

    document.getElementById("title").innerText = "Please Wait...";

    document.getElementById("message").innerText = "Initializing...";

    document.getElementById("result").innerText = "";

    document.getElementById("retry").style.display = "none";

    document.querySelector(".emoji").innerText = "⏳";

    let messageIndex = 0;

    loading = setInterval(function () {

        if (progress < 99) {

            progress++;

            document.getElementById("progress-bar").style.width =
                progress + "%";

            document.getElementById("percentage").innerText =
                progress + "%";

            if (progress % 12 === 0 && messageIndex < messages.length - 1) {

                messageIndex++;

                document.getElementById("message").innerText =
                    messages[messageIndex];
            }

        } else {

            clearInterval(loading);

            document.getElementById("message").innerText =
                "99%... Just one more second...";

            setTimeout(function () {

                document.getElementById("title").innerText =
                    "🎉 CONGRATULATIONS!";

                document.getElementById("result").innerText =
                    "JUST KIDDING! 🤡";

                document.getElementById("message").innerText =
                    "You waited for absolutely nothing.";

                document.querySelector(".emoji").innerText = "🤡";

                document.getElementById("retry").style.display =
                    "inline-block";

            }, 3000);
        }

    }, 100);

}

startLoading();