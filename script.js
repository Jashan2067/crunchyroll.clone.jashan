// ✅ Featured anime section
const featuredAnime = [
    {
        title: "Attack on Titan",
        url: "https://hianime.cx/watch/attack-on-titan-112?ep=3303",
        image: "aot.jpg",
        episodes: "89 Episodes",
        rating: "9.8"
    },
    {
        title: "Demon Slayer",
        url: "https://hianime.cx/watch/demon-slayer-kimetsu-no-yaiba-47?ep=1234",
        image: "DM.jpg",
        episodes: "55 Episodes",
        rating: "9.6"
    },
    {
        title: "Jujutsu Kaisen",
        url: "https://hianime.cx/watch/jujutsu-kaisen-105?ep=456",
        image: "jjk.jpg",
        episodes: "47 Episodes",
        rating: "9.4"
    },
    {
        title: "One Piece",
        url: "https://hianime.cx/watch/one-piece-100?ep=2142",
        image: "one piece.jpg",
        episodes: "1100+ Episodes",
        rating: "9.2"
    },
    {
        title: "My Dress Up Darling",
        url: "https://hianime.cx/watch/my-dress-up-darling-17930?ep=85827",
        image: "dud.jpg",
        episodes: "24 episodes",
        rating: "9.2"
    },
];

// ✅ New episodes section
const newEpisodes = [
    {
        title: "Chainsaw Man",
        url: "https://hianime.cx/watch/chainsaw-man-17406?ep=94597",
        episode: "Episode 12",
        image: "CM.jpg",
        time: "2 hours ago"
    },
    {
        title: "Spy x Family",
        url: "https://hianime.cx/watch/spy-x-family-17977?ep=89506",
        episode: "Episode 25",
        image: "sxf.jpg",
        time: "5 hours ago"
    },
    {
        title: "My Hero Academia",
        url: "https://hianime.cx/watch/my-hero-academia-322?ep=6210",
        episode: "Episode 138",
        image: "mha.jpg",
        time: "1 day ago"
    },
    {
        title: "Bleach: TYBW",
        url: "https://hianime.cx/watch/bleach-thousand-year-blood-war-arc-15665?ep=94563",
        episode: "Episode 13",
        image: "b.jpg",
        time: "2 days ago"
    },
    {
        title: "One Punch Man",
        url: "https://hianime.cx/watch/one-punch-man-63?ep=1501",
        episode: "Episode 47",
        image: "opm.jpg",
        time: "3 days ago"
    }
];

// ✅ You Might Like This Section
const mightlike = [
    {
        title: "Frieren Beyond Journey's End",
        url: "https://hianime.cx/watch/frieren-beyond-journeys-end-18542?ep=107257",
        episode: "Episode 24",
        image: "f.jpg",
        time: "2 hours ago"
    },
    {
        title: "Solo Leveling",
        url: "https://hianime.cx/watch/solo-leveling-18718?ep=114721",
        episode: "Episode 10",
        image: "solo.jpg",
        time: "5 hours ago"
    },
    {
        title: "Tokyo Ghoul",
        url: "https://hianime.cx/watch/tokyo-ghoul-790?ep=13547",
        episode: "Episode 24",
        image: "tg.jpg",
        time: "1 day ago"
    },
    {
        title: "Naruto Shippuden",
        url: "https://hianime.cx/watch/naruto-shippuden-355?ep=7882",
        episode: "Episode 500",
        image: "np.png",
        time: "3 days ago"
    },
    {
        title: "Vinland Saga",
        url: "https://hianime.cx/watch/vinland-saga-40?ep=1134",
        episode: "Episode 24",
        image: "vld.jpg",
        time: "4 days ago"
    }
];

// ✅ Render “You Might Like This” section
const mightLikeContainer = document.getElementById('mightLike');
if (mightLikeContainer) {
    mightlike.forEach(anime => {
        mightLikeContainer.innerHTML += `
            <div class="bg-black rounded-lg overflow-hidden card-hover cursor-pointer">
                <div class="relative">
                <a href="${anime.url}" target="_blank">
                    <img src="${anime.image}" alt="${anime.title}" class="w-full h-70 object-cover">
                    </a>
                    <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                        <div class="text-sm text-gray-300">${anime.time}</div>
                    </div>
                </div>
                <div class="p-4">
                    <h3 class="font-bold text-lg mb-1">${anime.title}</h3>
                    <p class="text-orange-500 text-sm">${anime.episode}</p>
                </div>
            </div>
        `;
    });
}

// ✅ Function to create anime cards
function createAnimeCard(anime, isEpisode = false) {
    if (isEpisode) {
        return `
            <div class="bg-black rounded-lg overflow-hidden card-hover cursor-pointer">
                <div class="relative">
                <a href="${anime.url}" target="_blank">
                    <img src="${anime.image}" alt="${anime.title}" class="w-full h-70 object-cover">
                    </a>
                    <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                        <div class="text-sm text-gray-300">${anime.time}</div>
                    </div>
                </div>
                <div class="p-4">
                    <h3 class="font-bold text-lg mb-1">${anime.title}</h3>
                    <p class="text-orange-500 text-sm">${anime.episode}</p>
                </div>
            </div>
        `;
    }

    // ✅ Featured anime card with clickable link
    return `
        <div class="bg-black rounded-lg overflow-hidden card-hover cursor-pointer">
            <a href="${anime.url}" target="_blank">
                <img src="${anime.image}" alt="${anime.title}" class="w-full h-70 object-cover">
            </a>
            <div class="p-4">
                <h3 class="font-bold text-lg mb-2">${anime.title}</h3>
                <div class="flex justify-between items-center text-sm text-gray-400">
                    <span>${anime.episodes}</span>
                    <span class="flex items-center">
                        <svg class="w-4 h-4 text-yellow-400 mr-1" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                        </svg>
                        ${anime.rating}
                    </span>
                </div>
            </div>
        </div>
    `;
}

// ✅ DOM loaded logic
document.addEventListener('DOMContentLoaded', function() {

    // Featured anime cards
    const featuredContainer = document.getElementById('featuredAnime');
    if (featuredContainer) {
        featuredAnime.forEach(anime => {
            featuredContainer.innerHTML += createAnimeCard(anime);
        });
    }

    // New episodes cards
    const episodesContainer = document.getElementById('newEpisodes');
    if (episodesContainer) {
        newEpisodes.forEach(episode => {
            episodesContainer.innerHTML += createAnimeCard(episode, true);
        });
    }

    // ✅ Apply background-size: contain to all anime cards
    document.querySelectorAll(".card-hover").forEach(card => {
        card.style.backgroundSize = "contain";
        card.style.backgroundRepeat = "no-repeat";
        card.style.backgroundPosition = "center";
    });

    // Search bar
    const searchInput = document.querySelector('input[type="text"]');
    if (searchInput) {
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                const searchTerm = this.value.trim();
                if (searchTerm) {
                    alert(`Searching for: ${searchTerm}`);
                    this.value = '';
                }
            }
        });
    }

    // Buttons: Start Trial, Browse Anime, Login
    document.querySelectorAll("button").forEach(button => {
        const text = button.textContent.trim();

        if (text.includes("Start Free Trial")) {
            button.addEventListener("click", () => window.location.href = "https://hianime.cx/");
        } else if (text.includes("Browse Anime")) {
            button.addEventListener("click", () => window.location.href = "https://hianime.cx/");
        } else if (text.includes("Login")) {
            button.addEventListener("click", () => window.location.href = "login.html");
        }
    });

    // Login link (if separate)
    const loginButton = document.getElementById("loginLink");
    if (loginButton) {
        loginButton.addEventListener("click", function (event) {
            event.preventDefault();
            window.location.href = "login.html";
        });
    }
});
