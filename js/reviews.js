
const container = document.getElementById("reviews-container");
const template = document.getElementById("review-template");
const prevButton = document.getElementById("review-prev");
const nextButton = document.getElementById("review-next");
const status = document.getElementById("reviews-status");

// Load reviews from JSON
async function loadReviews() {
    try {
        const response = await fetch("./data/reviews.json");

        if (!response.ok) {
            throw new Error("Unable to load reviews.");
        }

        const reviews = await response.json();

        if (!Array.isArray(reviews)) {
            throw new Error("Invalid review data.");
        }

        container.replaceChildren();

        // Generate a card for every review
        reviews.forEach(review => {

            const card = template.content.cloneNode(true);

            const rating = Math.min(
                5,
                Math.max(1, Math.round(Number(review.rating) || 1))
            );

            // Generate customer initials
            const initials = review.name
                .trim()
                .split(/\s+/)
                .slice(0, 2)
                .map(word => word.charAt(0))
                .join("")
                .toUpperCase();

            // Insert review data
            card.querySelector("[data-name]").textContent =
                review.name;

            card.querySelector("[data-product]").textContent =
                review.product;

            card.querySelector("[data-review]").textContent =
                review.review;

            card.querySelector("[data-initials]").textContent =
                initials;

            // Generate star rating
            const stars = card.querySelector("[data-rating]");

            stars.textContent =
                "★".repeat(rating) + "☆".repeat(5 - rating);

            stars.setAttribute(
                "aria-label",
                `${rating} out of 5 stars`
            );

            // Display the card
            container.appendChild(card);
        });

        status.textContent = reviews.length
            ? ""
            : "No reviews available yet.";

        updateButtons();

    } catch (error) {
        container.replaceChildren();
        status.textContent = "Customer reviews are currently unavailable.";
        console.error("Error loading reviews:", error);
        updateButtons();
    }
}

// Calculate the width of one card, including the gap
function getScrollAmount() {
    const card = container.firstElementChild;

    if (!card) return container.clientWidth;

    const gap = parseFloat(
        getComputedStyle(container).columnGap
    ) || 0;

    return card.getBoundingClientRect().width + gap;
}

// Update navigation button states
function updateButtons() {
    prevButton.disabled = container.scrollLeft <= 1;

    nextButton.disabled =
        container.scrollLeft + container.clientWidth
        >= container.scrollWidth - 1;
}

// Previous review
prevButton.addEventListener("click", () => {
    container.scrollBy({
        left: -getScrollAmount()
    });
});

// Next review
nextButton.addEventListener("click", () => {
    container.scrollBy({
        left: getScrollAmount()
    });
});

container.addEventListener("scroll", updateButtons);
window.addEventListener("resize", updateButtons);

updateButtons();
loadReviews();
