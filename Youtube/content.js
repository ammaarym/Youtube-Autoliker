console.log("Content.js is running!");

// if it alr exists
let like = document.getElementById("like");

// create button
if (!like){
    let like = document.createElement('button');
    like.innerText = "Click to like";
    like.id = "like";

    // style button
    // not moving when scrolling
    like.style.position = "fixed";
    // space inside button - makes it bigger/smaller
    like.style.padding = "24px 40px";
    like.style.fontFamily = "Monospace";
    like.style.font = "Monaco";
    like.style.fontSize = "20px";
    like.style.fontWeight = "bold";
    // distance from top of screen
    like.style.top = "40px";
    // distance from right of screen
    like.style.right = "40px";
    // puts on top of all other elements
    like.style.zIndex = "9999";
    like.style.backgroundColor = "#DEA799";
    like.style.color = "black";
    like.style.border = "none";
    // rounds the button
    like.style.borderRadius = "15px";
    like.style.cursor = "pointer";

    // inject into the page
    document.body.appendChild(like);

    // click listener that triggers youtube like
    like.addEventListener("click", () => {
        console.log("Autolike extension button clicked!");

        // find youtube button
        const likeWeb = document.querySelector('button[aria-label^="like this video"]');
        if (likeWeb){
            // click website button
            likeWeb.click();
            console.log("Button clicked on website");
        }
        else{
            console.log("Like button not found");
        }
    })
}

console.log.clear();