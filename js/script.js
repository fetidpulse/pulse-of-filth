function copyText(text) {
    navigator.clipboard.writeText(text).then(() => {
        alert("copied: " + text);
    }).catch(err => {
        console.error("Copy failed:", err);
    });
}
