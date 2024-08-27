function matchPattern(inputLine, pattern) {
    let regex = pattern.replace('\\d', '[0-9]').replace('\\w', '[0-9a-zA-Z]');

    if (pattern.length === 1) {
        return inputLine.includes(pattern);
    } else if(pattern === "\\d") {
        return /\d/.test(inputLine);
    } else if (pattern === "\\w") {
        const regex = new RegExp(pattern);
        return regex.test(inputLine);
    } else if(pattern.startsWith('[') && pattern.endsWith(']')) {
        const ptrn = new RegExp(pattern);
        return ptrn.test(inputLine);
    } else {
        return new RegExp(regex).test(inputLine);
    }
}

function runPatternMatcher() {
    const pattern = document.getElementById("pattern").value;
    const inputLine = document.getElementById("inputString").value.trim();
    const result = matchPattern(inputLine, pattern);

    document.getElementById("result").textContent = result ? "Pattern Matched!" : "Pattern Not Matched!";
}
