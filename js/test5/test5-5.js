// options 的属性表示其他参数，必传参数：name，value 可选传参数：secure，path，domain，expires
function setCookie1(name, value, options) {
    options = options || {};
    let secure = options.secure || false,
        path = options.path || "/",
        domain = options.domain || "example. com ",
        expires = options.expires || new Date(Date.now() + 360000000);
    console.log(options);
    console.log(secure);
    console.log(path);
    console.log(domain);
    console.log(expires);
    console.log("----------------------------------------------------");
}
setCookie1("type", "js");

setCookie1("type", "js", {
    secure: true,
    expires: 60000
});


function setCookie2(name, value, {
    secure = false,
    path = "/",
    domain = "example. com ",
    expires = new Date(Date.now() + 360000000)
} = {
    secure: false,
    path: "/",
    domain: "example. com ",
    expires: new Date(Date.now() + 360000000)
}) {
    //函数体
    console.log(secure);
    console.log(path);
    console.log(domain);
    console.log(expires);
    console.log("----------------------------------------------------");
}

setCookie2("type", "js");

setCookie2("type", "js", {
    secure: true,
    expires: 60000
});