document.addEventListener('alpine:init', () => {
    if (("theme" in localStorage)) {
        Alpine.store('theme', localStorage.theme)
    }
    else {
        Alpine.store('theme', '1')
    }
    RefreshTheme();
})

function Clicked(idx) {
    Alpine.store('theme', idx);
    RefreshTheme();
}

function RefreshTheme() {
    var v = Alpine.store('theme');

    if (v == '1') { // auto
        var dk = window.matchMedia("(prefers-color-scheme: dark)").matches;

        document.documentElement.classList.remove("dark");
        document.documentElement.classList.remove("light");

        document.documentElement.classList.add(dk ? "dark" : "light");

        localStorage.theme = "1";
    }

    if (v == '2') { // light
        document.documentElement.classList.remove("dark");
        document.documentElement.classList.add("light");

        localStorage.theme = "2";
    }

    if (v == '3') { // dark
        document.documentElement.classList.remove("light");
        document.documentElement.classList.add("dark");

        localStorage.theme = "3";
    }
}

function IsDarkMode() {
    var dk = window.matchMedia("(prefers-color-scheme: dark)").matches;

    if (dk) {
        return true;
    }
    if (("theme" in localStorage)) {
        return localStorage.theme == 3;
    }
    return false;
}

//RefreshTheme();