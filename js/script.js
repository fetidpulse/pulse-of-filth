function copyText(text) {
    navigator.clipboard.writeText(text).then(() => {
        alert("Copied: " + text);
    }).catch(err => {
        console.error("Copy failed:", err);
    });
}
