function area(shape, width, height) {
    var area = width + height;
    return "I'm a " + shape + " With an area of " + area + " cm squared.";
}
document.body.innerHTML = area("reangle", 30, 15);

