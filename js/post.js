function copy(element) {
    navigator.clipboard.writeText(element.parentElement);
    element.parentElement.parentElement.classList.remove("show");
    element.parentElement.parentElement.offsetWidth
    element.parentElement.parentElement.classList.add("show")
}