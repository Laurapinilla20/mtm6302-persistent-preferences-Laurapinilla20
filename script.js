const emojiList = [
    { emoji: "😀", code: "U+1F600" },
    { emoji: "😂", code: "U+1F602" },
    { emoji: "😎", code: "U+1F60E" },
    { emoji: "😍", code: "U+1F60D" },
    { emoji: "😜", code: "U+1F61C" },
    { emoji: "😔", code: "U+1F614" },
    { emoji: "🤔", code: "U+1F914" },
    { emoji: "😢", code: "U+1F622" },
    { emoji: "🙃", code: "U+1F643" },
    { emoji: "😷", code: "U+1F637" },
    { emoji: "😇", code: "U+1F607" },
    { emoji: "🤩", code: "U+1F929" }
];


function loadEmojiList() {
    const listContainer = document.getElementById("emoji-list");
    listContainer.innerHTML = ""; // Limpiar la lista
    emojiList.forEach(item => {
        const listItem = document.createElement("li");
        listItem.classList.add(localStorage.getItem('list-style') || 'list-style1'); // Aplicar el estilo de lista
        listItem.innerHTML = `${item.emoji} <span>${item.code}</span>`;
        listContainer.appendChild(listItem);
    });
}


function changeTheme(theme) {
    document.body.className = theme;
    localStorage.setItem('theme', theme);
}

function changeListStyle(style) {
    const listItems = document.querySelectorAll("#emoji-list li");
    listItems.forEach(item => {
        item.className = style;
    });
    localStorage.setItem('list-style', style);
}

function loadPreferences() {
    const savedTheme = localStorage.getItem('theme');
    const savedListStyle = localStorage.getItem('list-style');

    if (savedTheme) {
        changeTheme(savedTheme);
        document.getElementById("theme").value = savedTheme;
    }
    if (savedListStyle) {
        changeListStyle(savedListStyle);
        document.getElementById("list-style").value = savedListStyle;
    }
}

document.getElementById("theme").addEventListener("change", (e) => {
    changeTheme(e.target.value);
});

document.getElementById("list-style").addEventListener("change", (e) => {
    changeListStyle(e.target.value);
});

loadEmojiList();
loadPreferences();

