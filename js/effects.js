// Play a specific mp3 url
function playMp3(url) {
    const audio = new Audio(url);
    audio.play();
}

// Play punch sound for 6x7
function playSixSevenSound() {
    playMp3('https://www.myinstants.com/media/sounds/67_SQlv2Xv.mp3');
}
function correct_answer() {
    const defaults = {
        spread: 360,
        ticks: 100,
        gravity: 0,
        decay: 0.94,
        startVelocity: 30,
    };

    function shoot() {
        confetti({
            ...defaults,
            particleCount: 20,
            scalar: 1.2,
            shapes: ["circle", "square"],
            colors: ["#a864fd", "#29cdff", "#78ff44", "#ff718d", "#fdff6a"],
        });

        confetti({
            ...defaults,
            particleCount: 40,
            scalar: 5,
            shapes: ["emoji", "image"],
            shapeOptions: {
                emoji: {
                    value: ["🐱‍💻", "🌈", "🖖", "💎", "👩‍💻", "⚡", "🚀", "🧠", "🤯", "🍓", "🐘", "✨"],
                },
                image: {
                    src: ["https://upload.wikimedia.org/wikipedia/commons/1/1e/Roblox_Logo_2025.png"],
                    width: 32,
                    height: 32
                }
            },
        });
    }

    setTimeout(shoot, 0);
    setTimeout(shoot, 100);
    setTimeout(shoot, 200);
}


function playCorrectSound() {
    correct_answer();
    const assets = [
        "https://wind010.github.io/ctf_soundboard/assets/machine_pwned.mp3",
        "https://www.myinstants.com/media/sounds/capuccino-assasino-italian-brainrot.mp3",
        "https://www.myinstants.com/media/sounds/italian-brainrot-ringtone.mp3",
        "https://www.myinstants.com/media/sounds/tung-tung-tung-tung-sahur.mp3",
        "https://www.myinstants.com/media/sounds/strawberry-elephant-spawn-troll-steal-a-brainrot.mp3",
        "https://www.myinstants.com/media/sounds/steal-a-brainrot-dragon-cannelloni.mp3",
        "https://www.myinstants.com/media/sounds/tung-tung-tung-saur-tatata-saur.mp3",
        "https://www.myinstants.com/media/sounds/thick-of-it-brainrot.mp3",
        "https://www.myinstants.com/media/sounds/balerina-capuchina.mp3",
        "https://www.myinstants.com/media/sounds/bobrito-bandito-italian-brainrot.mp3",
        "https://www.myinstants.com/media/sounds/sahur-song.mp3",
        "https://www.myinstants.com/media/sounds/tralalero-tralala-meme_R8mqoQo.mp3",
        "https://www.myinstants.com/media/sounds/noo-la-policia.mp3",
        "https://www.myinstants.com/media/sounds/steal-a-brainrot-garama-and-mandundung.mp3",
        "https://www.myinstants.com/media/sounds/meowl-steal-a-brainrot.mp3",
        "https://www.myinstants.com/media/sounds/trippi-troppi-italian-brainrot.mp3",
        "https://www.myinstants.com/media/sounds/udin-din-din-dun.mp3",
        "https://www.myinstants.com/media/sounds/get-out-memes.mp3",
        "https://www.myinstants.com/media/sounds/dragon-cannelloni-steal-a-brainrot.mp3",
        "https://www.myinstants.com/media/sounds/brainrot-ringtone.mp3",
        "https://www.myinstants.com/media/sounds/drill-brainrot.mp3",
        "https://www.myinstants.com/media/sounds/toilet-ananas-nasdas.mp3",
        "https://www.myinstants.com/media/sounds/brainrot-rap.mp3",
        "https://www.myinstants.com/media/sounds/rickroll-tralalero-tralala.mp3",
        "https://www.myinstants.com/media/sounds/steal-a-brainrot-los-tralaleritos.mp3",
        "https://www.myinstants.com/media/sounds/la-grande-combonicione-de-brainrots.mp3",
        "https://www.myinstants.com/media/sounds/garam-brainrot.mp3",
        "https://www.myinstants.com/media/sounds/brainrot-phonk.mp3",
        "https://www.myinstants.com/media/sounds/steal-a-brainrot-job-job-job-sahur.mp3",
        "https://www.myinstants.com/media/sounds/capuccino-assasino-italian-brainrot.mp3",
        "https://www.myinstants.com/media/sounds/oh-berinjela.mp3",
        "https://www.myinstants.com/media/sounds/brainrot-cat.mp3",
        "https://www.myinstants.com/media/sounds/mateooo-italian-brainrot-by-tristan-k.mp3",
        "https://www.myinstants.com/media/sounds/ksi-thick-of-it-brainrot.mp3",
        "https://www.myinstants.com/media/sounds/hotspot-brainrot.mp3",
        "https://www.myinstants.com/media/sounds/steal-a-brainrot-chicleteira-bicicletera.mp3",
        "https://www.myinstants.com/media/sounds/anatoxic-garamararamararaman.mp3"
    ];
    const audio = new Audio(assets[Math.floor(Math.random() * assets.length)]);
    audio.play();
}

function playErrorSound() {
    const assets = [
        "https://www.myinstants.com/media/sounds/metal_gear_solid_game_over_screen_clean_background-1.mp3",
        "https://www.myinstants.com/media/sounds/movie_1.mp3",
        "https://www.myinstants.com/media/sounds/dun-dun-dun-sound-effect-brass_8nFBccR.mp3",
        "https://www.myinstants.com/media/sounds/punch-gaming-sound-effect-hd_RzlG1GE.mp3",
        "https://www.myinstants.com/media/sounds/steal-a-brainrot-kid-cry.mp3",
        "https://www.myinstants.com/media/sounds/epic-fail-weweweweeee.mp3",
        "https://www.myinstants.com/media/sounds/sound-fail-fallo_5HiYK9J.mp3",
        "https://www.myinstants.com/media/sounds/epic-fail_1.mp3"
    ];
    const audio = new Audio(assets[Math.floor(Math.random() * assets.length)]);
    audio.play();
}

window.addEventListener('load', function () {
    var img = document.getElementById('image');
    if (!img) return;
    img.onload = playCorrectSound;
    img.onerror = playErrorSound;
});


