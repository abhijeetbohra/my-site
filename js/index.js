const percentageVal = {
    shitposting: '0%',
    memeing: '0%',
    photoshop: '0%',
    achievement: '0%'
} 

function loadMDC() {
    const b = baffle('.title', {characters: 'sargibbathtrainoof', speed: 90}).start().once().reveal(500, 500);
    const typed = new Typed(".desc", {
        strings: ["Public Relations ^300/  Student ^300/ Moderator ^300/ Memer ^300/ Shitposter"],
        typeSpeed: 10,
        startDelay: 1000,
        showCursor: false
    });
    anime({
        targets: '.fab-theme',
        opacity: 100,
        delay: 1500,
        duration: 3000,
    })

    const determinates = document.querySelectorAll('.mdc-linear-progress');
    for (let i = 0, determinate; determinate = determinates[i]; i++) {
        const linearprogress = new mdc.linearProgress.MDCLinearProgress(determinate);
        if (i === 0) {
            linearprogress.progress = 0.75;
        } else if (i === 1) {
            linearprogress.progress = 1;
        } else if (i === 2) {
            linearprogress.progress = 0.7;
        } else if (i === 3) {
            linearprogress.progress = 1;
        };
    };
    
    anime({
        targets: percentageVal,
        shitposting: '75%',
        memeing: '100%',
        photoshop: '70%',
        achievement: '110%',
        easing: 'linear',
        round: 1,
        update: function(anim) {
            document.querySelector('.shitposting').innerHTML = percentageVal.shitposting
            document.querySelector('.memeing').innerHTML = percentageVal.memeing
            document.querySelector('.photoshop').innerHTML = percentageVal.photoshop
            document.querySelector('.achievement').innerHTML = percentageVal.achievement
        }
    })
    
    mdc.topAppBar.MDCTopAppBar.attachTo(document.querySelector('.mdc-top-app-bar'));

    mdc.chips.MDCChipSet.attachTo(document.querySelector('.mdc-chip-set'));

    const fabs = document.querySelectorAll('.mdc-fab');
    for (var i = 0, fab; fab = fabs[i]; i++) {
        mdc.ripple.MDCRipple.attachTo(fab);
    };

    const timeline = new anime.timeline({
        targets: '.scroll-icon',
        loop: true,
        duration: 1000
    })

    timeline.add({
        translateY: -20,
    })
    .add({
        opacity: 0
    })
    
    
}

function toggle() {
    let fabVisible = false;
    const bTrain = document.getElementById("eg");
    if (bTrain.classList.contains("invisible")) {
        bTrain.classList.remove("invisible");
        bTrain.href = 'https://youtu.be/5YJgBfGeXPg'
    } else {
        return;
    };
};

function toggleTheme() {
    const bodyEl = document.body
    if (bodyEl.classList.contains("theme-dark")) {
        bodyEl.classList.remove("theme-dark");
        bodyEl.classList.add("theme-light");
        document.querySelector('meta[name="theme-color"]').setAttribute("content", "#FFFFFF");
    } else {
        bodyEl.classList.add("theme-dark");
        bodyEl.classList.remove("theme-light");
        document.querySelector('meta[name="theme-color"]').setAttribute("content", "#000000");
    }
}
