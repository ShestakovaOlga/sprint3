function paddingLeft(char, length, text) {
    if (length <= text.length) {
        return text;
    }
    const n = length - text.length;
    let left = "";
    while (left.length < n) {
        left += char
    }
    return left + text
}
module.exports = paddingLeft;