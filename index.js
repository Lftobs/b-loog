const mnav = document.querySelector('.mobnav')
const menu = document.querySelector('.links')
const theme = document.querySelector('.tog')
const head = document.querySelector("header")
const foot = document.querySelector("footer")
const nav = document.querySelector(".nav")
const body = document.querySelector(".main")

mnav.addEventListener("click", () => {
    const visible = menu.getAttribute("data-v")
    
    const  humb = mnav.getAttribute("aria-expanded")
    
    
    if (visible === "false") {
        menu.setAttribute("data-v", true);
        mnav.setAttribute("aria-expanded", true)
    }else {
        menu.setAttribute("data-v", false);
        mnav.setAttribute("aria-expanded", false)
    }
    console.log(visible)
})



theme.addEventListener("click", () => {
    console.log("ok")
    const dtheme = theme.getAttribute("lm")
    const htheme = head.getAttribute("lt")
    const ttheme = menu.getAttribute("lt")
    //const ftheme = menu.getAttribute("lt")
    console.log(dtheme)
    if (dtheme === "true") {
        theme.setAttribute("lm", false)
        head.setAttribute("lt", false)
        menu.setAttribute("lt", false)
        foot.setAttribute("lt", false)
        body.setAttribute("lt", false)
        nav.setAttribute("lt", false)
    }else {
        theme.setAttribute("lm", true)
        head.setAttribute("lt", true)
        menu.setAttribute("lt", true)
        foot.setAttribute("lt", true)
        body.setAttribute("lt", true)
        nav.setAttribute("lt", true)
    }
})
