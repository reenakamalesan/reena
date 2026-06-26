/**
 * Biryani Safar - Application Logic
 * Contains: Biryani dataset, Gallery renderer, Search/Filter logic, Recommendation Engine, and Modal Handlers.
 */

// --- Biryani Dataset ---
const BIRYANI_DATA = [
    {
        id: "hyderabadi",
        name: "Hyderabadi Dum Biryani",
        origin: "Hyderabad, Telangana (South India)",
        spiceLevel: 5,
        aroma: "Intense & Spicy",
        riceType: "Long-grain Basmati",
        keyIngredients: [
            "Marinated Chicken/Mutton",
            "Premium Basmati Rice",
            "Fried Onions (Birista)",
            "Fresh Mint & Coriander",
            "Pure Ghee",
            "Saffron milk",
            "Whole spices (Mace, Cardamom, Cloves)"
        ],
        description: "The undisputed king of biryanis, famed for its hyper-aromatic dum cooking style where raw marinated meat and parboiled rice are slow-cooked together in layers in a sealed handi.",
        history: "Evolved under the rule of the Nizams of Hyderabad in the 18th century, blending traditional Mughal culinary techniques with local fiery Andhra spice profiles. The slow-cooking 'dum' process seals the steam, forcing the rich meat flavors and spice essences directly into every grain of rice.",
        servingSuggestions: "Best enjoyed piping hot with cold Mirchi ka Salan (a spicy chili-peanut-sesame gravy) and a cooling cucumber-onion raita.",
        categoryTags: ["Spicy", "Dum Style", "Long Grain"],
        image: "images/hyderabadi_biryani.png",
        criteria: { spice: "high", grain: "long", potato: "no" }
    },
    {
        id: "lucknowi",
        name: "Lucknowi (Awadhi) Biryani",
        origin: "Lucknow, Uttar Pradesh (North India)",
        spiceLevel: 2,
        aroma: "Mild & Exquisitely Perfumed",
        riceType: "Premium Extra-Long Basmati",
        keyIngredients: [
            "Tender Mutton",
            "Yakhni (Rich seasoned meat broth)",
            "Kewra Water (screwpine essence)",
            "Rose Water",
            "Saffron",
            "Ghee",
            "Sweet spices (Fennel, Nutmeg, Cardamom)"
        ],
        description: "A royal dish cooked in the Awadhi style, characterized by its subtle flavors and sophisticated fragrance. The meat is pre-cooked in a seasoned yakhni broth before layering with rice.",
        history: "Originating from the royal kitchens of the Nawabs of Awadh. Unlike spicy Southern varieties, the Awadhi style prioritizes delicate perfumes like rose and kewra, ensuring the meat is incredibly tender and the rice grains remain separate, fluffy, and lightly glazed with ghee.",
        servingSuggestions: "Best paired with a delicate Burhani Raita (garlic-infused yogurt) or light red onion rings sprinkled with lemon juice.",
        categoryTags: ["Mild", "Aromatic", "Long Grain"],
        image: "images/lucknowi_biryani.png",
        criteria: { spice: "low", grain: "long", potato: "no" }
    },
    {
        id: "kolkata",
        name: "Kolkata Biryani",
        origin: "Kolkata, West Bengal (East India)",
        spiceLevel: 3,
        aroma: "Fragrant & Sweet-scented",
        riceType: "Long-grain Basmati",
        keyIngredients: [
            "Marinated Mutton/Chicken",
            "Large soft-boiled Potato",
            "Hard-boiled Egg",
            "Kewra & Rose water",
            "Mitha Athor (sweet edible perfume)",
            "Yogurt marinade",
            "Saffron streaks"
        ],
        description: "A unique and beloved sweet-scented biryani distinguished by the addition of a soft, melt-in-the-mouth potato and a boiled egg, complementing the tender meat.",
        history: "In 1856, Nawab Wajid Ali Shah of Awadh was exiled to Metiabruz near Kolkata. His royal chefs adapted the Lucknowi biryani to local tastes and budget constraints by adding potatoes and eggs. Over time, these additions absorbed the rich meat fats and sweet fragrances, turning what started as a compromise into an iconic signature.",
        servingSuggestions: "Complements a classic slow-cooked Chicken or Mutton Chaap (thick, oily, spiced gravy dish) and a crisp cucumber salad.",
        categoryTags: ["Aromatic", "Egg & Potato", "Long Grain"],
        image: "images/kolkata_biryani.png",
        criteria: { spice: "medium", grain: "long", potato: "yes" }
    },
    {
        id: "malabar",
        name: "Malabar Thalassery Biryani",
        origin: "Malabar Coast, Kerala (South India)",
        spiceLevel: 3,
        aroma: "Rich & Ghee-forward",
        riceType: "Short-grain Kaima (Jeerakasala)",
        keyIngredients: [
            "Jeerakasala Rice (Kaima)",
            "Malabar chicken masala base",
            "Pure Ghee (abundant)",
            "Fried Cashews & Raisins",
            "Fried Onions",
            "Green Chili & Fennel paste",
            "Lemon juice"
        ],
        description: "Made with unique short, thin Kaima rice, this biryani layers a dry, highly-flavored chicken masala at the bottom with ghee-cooked rice on top, finished with fried cashews and raisins.",
        history: "Born from the confluence of Arab trader influences and local Mappila Muslim cooking styles along the Malabar coast of Kerala. It is unique because it completely avoids standard long basmati, choosing small, highly aromatic Kaima rice cooked separately in ghee and fused under dum.",
        servingSuggestions: "Tastes divine with Date Pickle (Eenthapazham achar), Coconut Chammanthi, and a simple onion-cucumber yogurt salad.",
        categoryTags: ["Mild", "Aromatic", "Short Grain"],
        image: "images/malabar_biryani.png",
        criteria: { spice: "medium", grain: "short", potato: "no" }
    },
    {
        id: "sindhi",
        name: "Sindhi Biryani",
        origin: "Sindh Province (West / South Asia)",
        spiceLevel: 5,
        aroma: "Spicy, Sour & Tangy",
        riceType: "Long-grain Basmati",
        keyIngredients: [
            "Spicy Chicken/Mutton",
            "Aloo Bukhara (Dried sour plums)",
            "Thick Tomatoes & Yogurt gravy",
            "Fresh Mint & Green chilies",
            "Roasted Potatoes",
            "Lemon slices",
            "Saffron and orange food coloring"
        ],
        description: "A highly spiced, colorful, and zesty biryani known for its layered composition of red, yellow, and white rice, roasted potatoes, and sweet-sour dried plums.",
        history: "Representing the bold and zesty food culture of Sindh, this biryani differs from Mughal styles by its heavy use of green chilies, yogurt-based tomato gravy, fresh mint, lemon wheels, and local ingredients like dried sour plums, making it exceptionally tangy, hot, and colorful.",
        servingSuggestions: "Best balanced with cold mint-coriander raita, fresh green salad, and sweet roasted papadums.",
        categoryTags: ["Spicy", "Egg & Potato", "Long Grain"],
        image: "images/sindhi_biryani.png",
        criteria: { spice: "high", grain: "long", potato: "yes" }
    }
];

// --- App State ---
let activeFilters = {
    tag: "all",
    search: ""
};

let quizAnswers = {
    spice: null,
    grain: null,
    potato: null
};

let quizStep = 1;

// --- DOM Elements ---
const biryaniGrid = document.getElementById("biryani-grid");
const searchInput = document.getElementById("biryani-search");
const clearSearchBtn = document.getElementById("clear-search");
const filterTags = document.querySelectorAll(".filter-tag");
const noResultsDiv = document.getElementById("no-results");
const resetFiltersBtn = document.getElementById("reset-filters-btn");

// Modal DOM
const detailsModal = document.getElementById("details-modal");
const closeModalBtn = document.getElementById("close-modal");
const modalImg = document.getElementById("modal-img");
const modalOrigin = document.getElementById("modal-origin");
const modalName = document.getElementById("modal-name");
const modalSpiceBar = document.getElementById("modal-spice-bar");
const modalSpiceText = document.getElementById("modal-spice-text");
const modalAromaText = document.getElementById("modal-aroma-text");
const modalDesc = document.getElementById("modal-desc");
const modalHistory = document.getElementById("modal-history");
const modalIngredientsList = document.getElementById("modal-ingredients-list");
const modalGrain = document.getElementById("modal-grain");
const modalServing = document.getElementById("modal-serving");
const modalTabBtns = document.querySelectorAll(".modal-tab-btn");
const tabPanes = document.querySelectorAll(".tab-pane");

// Quiz DOM
const quizSteps = document.querySelectorAll(".quiz-step");
const optionBtns = document.querySelectorAll(".option-btn");
const currentStepSpan = document.getElementById("current-step");
const quizProgressBar = document.getElementById("quiz-progress");
const prevStepBtn = document.getElementById("prev-step-btn");
const resultTitle = document.getElementById("result-title");
const resultCardPreview = document.getElementById("result-card-preview");
const resultExplanation = document.getElementById("result-explanation");
const restartQuizBtn = document.getElementById("restart-quiz-btn");
const viewMatchedBtn = document.getElementById("view-matched-btn");

// --- Initialization ---
document.addEventListener("DOMContentLoaded", () => {
    renderBiryaniGrid(BIRYANI_DATA);
    setupEventListeners();
});

// --- Event Listeners setup ---
function setupEventListeners() {
    // Search Box
    searchInput.addEventListener("input", (e) => {
        activeFilters.search = e.target.value.toLowerCase().trim();
        toggleClearButton();
        filterAndRender();
    });

    clearSearchBtn.addEventListener("click", () => {
        searchInput.value = "";
        activeFilters.search = "";
        toggleClearButton();
        filterAndRender();
        searchInput.focus();
    });

    // Tag Filters
    filterTags.forEach(tagBtn => {
        tagBtn.addEventListener("click", () => {
            filterTags.forEach(btn => btn.classList.remove("active"));
            tagBtn.classList.add("active");
            activeFilters.tag = tagBtn.getAttribute("data-filter");
            filterAndRender();
        });
    });

    // Reset Filters
    resetFiltersBtn.addEventListener("click", () => {
        searchInput.value = "";
        activeFilters.search = "";
        toggleClearButton();
        
        filterTags.forEach(btn => btn.classList.remove("active"));
        filterTags[0].classList.add("active");
        activeFilters.tag = "all";
        
        filterAndRender();
    });

    // Modal tabs
    modalTabBtns.forEach(tabBtn => {
        tabBtn.addEventListener("click", () => {
            modalTabBtns.forEach(btn => btn.classList.remove("active"));
            tabPanes.forEach(pane => pane.classList.remove("active"));
            
            tabBtn.classList.add("active");
            const tabId = `tab-${tabBtn.getAttribute("data-tab")}`;
            document.getElementById(tabId).classList.add("active");
        });
    });

    // Modal closing
    closeModalBtn.addEventListener("click", hideModal);
    detailsModal.addEventListener("click", (e) => {
        if (e.target === detailsModal) hideModal();
    });
    window.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && detailsModal.classList.contains("active")) {
            hideModal();
        }
    });

    // Quiz options click
    optionBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            const questionType = btn.getAttribute("data-answer");
            const answerValue = btn.getAttribute("data-value");
            
            quizAnswers[questionType] = answerValue;
            
            // Advance to next step
            if (quizStep < 3) {
                goToQuizStep(quizStep + 1);
            } else {
                calculateAndShowQuizResult();
            }
        });
    });

    // Quiz Back Button
    prevStepBtn.addEventListener("click", () => {
        if (quizStep > 1) {
            goToQuizStep(quizStep - 1);
        }
    });

    // Quiz Restart Button
    restartQuizBtn.addEventListener("click", () => {
        quizAnswers = { spice: null, grain: null, potato: null };
        goToQuizStep(1);
    });

    // Quiz View Matched scroll and open
    viewMatchedBtn.addEventListener("click", () => {
        const matchedId = viewMatchedBtn.getAttribute("data-matched-id");
        if (matchedId) {
            const targetCard = document.getElementById(`card-${matchedId}`);
            if (targetCard) {
                targetCard.scrollIntoView({ behavior: "smooth", block: "center" });
                
                // Add highlight flash class
                targetCard.style.outline = "3px solid var(--accent-saffron)";
                targetCard.style.boxShadow = "0 0 30px rgba(255, 143, 61, 0.4)";
                
                setTimeout(() => {
                    targetCard.style.outline = "none";
                    targetCard.style.boxShadow = "";
                    showModal(matchedId);
                }, 1000);
            }
        }
    });
}

// --- Render Core Grid ---
function renderBiryaniGrid(data) {
    biryaniGrid.innerHTML = "";
    
    if (data.length === 0) {
        noResultsDiv.classList.remove("hidden");
        return;
    }
    
    noResultsDiv.classList.add("hidden");
    
    data.forEach(biryani => {
        const card = document.createElement("div");
        card.className = "biryani-card";
        card.id = `card-${biryani.id}`;
        
        // Dynamic list of icons for tags
        let tagsHtml = biryani.categoryTags.map(tag => {
            let icon = "";
            if (tag === "Spicy") icon = "🔥";
            if (tag === "Mild") icon = "🍃";
            if (tag === "Aromatic") icon = "🌸";
            if (tag === "Dum Style") icon = "🏺";
            if (tag === "Egg & Potato") icon = "🥚";
            if (tag === "Short Grain") icon = "🌾";
            return `<span class="feature-item"><span class="feature-icon">${icon}</span> ${tag}</span>`;
        }).join("");

        // Build HTML
        card.innerHTML = `
            <div class="card-img-container">
                <img src="${biryani.image}" alt="${biryani.name}" loading="lazy">
                <span class="card-origin-tag">${biryani.origin.split(",")[0]}</span>
            </div>
            <div class="card-content">
                <h3 class="card-title">${biryani.name}</h3>
                <p class="card-desc">${biryani.description}</p>
                <div class="card-features">
                    ${tagsHtml}
                </div>
                <div class="card-action">
                    <button class="btn-card" onclick="showModal('${biryani.id}')">
                        Explore Details
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                    </button>
                </div>
            </div>
        `;
        biryaniGrid.appendChild(card);
    });
}

// --- Filter and Search logic ---
function filterAndRender() {
    let filtered = BIRYANI_DATA;
    
    // Tag filter
    if (activeFilters.tag !== "all") {
        filtered = filtered.filter(item => item.categoryTags.includes(activeFilters.tag));
    }
    
    // Search query filter
    if (activeFilters.search !== "") {
        filtered = filtered.filter(item => {
            const nameMatch = item.name.toLowerCase().includes(activeFilters.search);
            const originMatch = item.origin.toLowerCase().includes(activeFilters.search);
            const descMatch = item.description.toLowerCase().includes(activeFilters.search);
            const ingredientMatch = item.keyIngredients.some(ing => ing.toLowerCase().includes(activeFilters.search));
            
            return nameMatch || originMatch || descMatch || ingredientMatch;
        });
    }
    
    renderBiryaniGrid(filtered);
}

function toggleClearButton() {
    if (searchInput.value.length > 0) {
        clearSearchBtn.style.display = "block";
    } else {
        clearSearchBtn.style.display = "none";
    }
}

// --- Quiz Logic & Recommendation Engine ---
function goToQuizStep(step) {
    quizStep = step;
    
    // Hide all steps, show target
    quizSteps.forEach(stepDiv => {
        stepDiv.classList.remove("active");
    });
    
    const targetStepDiv = document.querySelector(`.quiz-step[data-step="${step}"]`);
    if (targetStepDiv) targetStepDiv.classList.add("active");
    
    // Update indicator and progress bar
    if (step === "result") {
        currentStepSpan.parentElement.style.visibility = "hidden";
        quizProgressBar.style.width = "100%";
        prevStepBtn.classList.add("hidden");
    } else {
        currentStepSpan.parentElement.style.visibility = "visible";
        currentStepSpan.textContent = step;
        quizProgressBar.style.width = `${(step / 3) * 100}%`;
        
        if (step > 1) {
            prevStepBtn.classList.remove("hidden");
        } else {
            prevStepBtn.classList.add("hidden");
        }
    }
}

function calculateAndShowQuizResult() {
    // Scoring Algorithm:
    // Q1 (Spice): high, medium, low
    // Q2 (Grain): long, short, either
    // Q3 (Potato): yes, no
    
    let bestMatch = null;
    let highestScore = -1;
    
    BIRYANI_DATA.forEach(biryani => {
        let score = 0;
        
        // Spice level check
        if (quizAnswers.spice === "high" && biryani.criteria.spice === "high") score += 3;
        else if (quizAnswers.spice === "medium" && biryani.criteria.spice === "medium") score += 3;
        else if (quizAnswers.spice === "low" && biryani.criteria.spice === "low") score += 3;
        else if (Math.abs(getSpiceWeight(quizAnswers.spice) - getSpiceWeight(biryani.criteria.spice)) === 1) score += 1; // adjacent spice is fine
        
        // Grain structure check
        if (quizAnswers.grain === "either") score += 2;
        else if (quizAnswers.grain === biryani.criteria.grain) score += 2;
        
        // Potato check
        if (quizAnswers.potato === biryani.criteria.potato) score += 2;
        
        if (score > highestScore) {
            highestScore = score;
            bestMatch = biryani;
        }
    });
    
    // Fallback if somehow not matched
    if (!bestMatch) {
        bestMatch = BIRYANI_DATA[0]; // Hyderabadi default
    }
    
    // Populate Results Step
    resultTitle.textContent = bestMatch.name;
    viewMatchedBtn.setAttribute("data-matched-id", bestMatch.id);
    
    // Generate simple explanation
    let explanationText = "";
    if (bestMatch.id === "hyderabadi") {
        explanationText = "Based on your love for bold spices and classic basmati rice, you are matched with Hyderabadi Dum Biryani! It is fiery, rich, and intensely layered.";
    } else if (bestMatch.id === "lucknowi") {
        explanationText = "Since you prefer a mild spice profile and extra-long fragrant grains, the Lucknowi Awadhi Biryani is perfect for you. It prioritizes exquisite aroma and delicate yakhni flavors.";
    } else if (bestMatch.id === "kolkata") {
        explanationText = "With your preference for medium spice and the inclusion of soft potatoes and eggs, Kolkata Biryani is your soul food. It is fragrant, mild-to-medium, and incredibly satisfying.";
    } else if (bestMatch.id === "malabar") {
        explanationText = "You prefer ghee-cooked short grains and a highly-flavored masala. The Malabar Thalassery Biryani is your match! Its cashew-raisin garnish and short Kaima rice offer a unique coastal flair.";
    } else if (bestMatch.id === "sindhi") {
        explanationText = "For someone who loves intense spice, tangy ingredients (like sour plums), and roasted potatoes, Sindhi Biryani is the ultimate feast. It is highly zesty and packed with color.";
    }
    resultExplanation.textContent = explanationText;
    
    // Create card preview
    resultCardPreview.innerHTML = `
        <div class="biryani-card" style="margin: 0; box-shadow: 0 4px 15px rgba(0,0,0,0.3)">
            <div class="card-img-container" style="height: 140px;">
                <img src="${bestMatch.image}" alt="${bestMatch.name}" style="object-fit: cover; height: 100%;">
            </div>
            <div class="card-content" style="padding: 1rem; text-align: left;">
                <h4 style="font-size: 1.1rem; font-family: var(--font-sans); color: var(--text-primary); margin-bottom: 0.25rem;">${bestMatch.name}</h4>
                <p style="font-size: 0.75rem; color: var(--text-muted); margin-bottom: 0.5rem;">${bestMatch.origin.split(",")[0]}</p>
                <div style="font-size: 0.75rem; color: var(--accent-saffron); font-weight: 600;">Spice Level: ${"🌶️".repeat(bestMatch.spiceLevel)}</div>
            </div>
        </div>
    `;
    
    goToQuizStep("result");
}

function getSpiceWeight(spiceVal) {
    if (spiceVal === "low") return 1;
    if (spiceVal === "medium") return 2;
    if (spiceVal === "high") return 3;
    return 2;
}

// --- Modal Handlers ---
function showModal(id) {
    const biryani = BIRYANI_DATA.find(item => item.id === id);
    if (!biryani) return;
    
    // Fill basic details
    modalImg.src = biryani.image;
    modalImg.alt = biryani.name;
    modalOrigin.textContent = biryani.origin;
    modalName.textContent = biryani.name;
    
    // Fill metrics
    modalSpiceBar.style.width = `${(biryani.spiceLevel / 5) * 100}%`;
    modalSpiceText.textContent = `${biryani.spiceLevel}/5`;
    modalAromaText.textContent = biryani.aroma;
    
    // Fill text sections
    modalDesc.textContent = biryani.description;
    modalHistory.textContent = biryani.history;
    modalGrain.textContent = biryani.riceType;
    modalServing.textContent = biryani.servingSuggestions;
    
    // Fill ingredients list
    modalIngredientsList.innerHTML = "";
    biryani.keyIngredients.forEach(ing => {
        const li = document.createElement("li");
        li.textContent = ing;
        modalIngredientsList.appendChild(li);
    });
    
    // Reset to first tab
    modalTabBtns.forEach(btn => btn.classList.remove("active"));
    tabPanes.forEach(pane => pane.classList.remove("active"));
    
    modalTabBtns[0].classList.add("active");
    tabPanes[0].classList.add("active");
    
    // Display modal
    detailsModal.classList.add("active");
    detailsModal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden"; // Prevent background scroll
}

function hideModal() {
    detailsModal.classList.remove("active");
    detailsModal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = ""; // Re-enable background scroll
}
