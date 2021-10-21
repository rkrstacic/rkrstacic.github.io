// Trigger button selector
const themeButton = document.querySelector(".toggle-theme");
const themeText = document.querySelector("#tooltip");
const experienceText = document.querySelector(".r2-r3");

// Selectors for root variables
const _rootSelectors = {
    theme: '--current-theme',
    top: '--top-color',
    bottom: '--bottom-color',
    button: '--button-color',
    buttonHover: '--button-color-hover',
    buttonFilter: '--button-color-filter',
    buttonHoverFilter: '--button-color-hover-filter',
    switchButton: '--switch-button-color',
    text: '--text-color',
    invert: '--filter-invert',
    profileFilter: '--profile-filter'
};

// Changes root property of the document
function changeProp(propName, value){
    document.documentElement.style.setProperty(propName, value);
}

// Applies the theme
function applyTheme(theme){
    for (const [key, value] of Object.entries(theme)) {
        changeProp(_rootSelectors[key], value);
    }
}

// Switches between light and dark theme
function changeTheme(){
    const currentTheme = getComputedStyle(document.documentElement).getPropertyValue(_rootSelectors.theme);
    const newTheme = currentTheme == 1 ? lightTheme: darkTheme;

    // Update theme state for the next call
    changeProp(_rootSelectors.theme, Math.abs(currentTheme - 1));

    // Update the tooltip
    themeText.innerHTML = currentTheme == 1 ? lightTooltip: darkTooltip;

    // Apply the theme
    applyTheme(newTheme);
}


// Initialize dark theme
changeProp(_rootSelectors.theme, 0);
changeTheme();

// Set experience year
const currentYear = new Date().getFullYear();
experienceText.innerHTML = currentYear - 2017 + "+";

// On click, change the theme
themeButton.addEventListener("click", () => {
	changeTheme();
});
