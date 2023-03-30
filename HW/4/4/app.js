// var dropdown = document.getElementsByClassName("dropdown-btn");
// var i;

// for (i = 0; i < dropdown.length; i++) {
//   dropdown[i].addEventListener("click", function() {
//     this.classList.toggle("active");
//     var dropdownContent = this.nextElementSibling;
//     if (dropdownContent.style.display === "block") {
//       dropdownContent.style.display = "none";
//     } else {
//       dropdownContent.style.display = "block";
//     }
//   });
// }

// let dropDown = document.querySelector(".drop-btn");
// let i;
// console.log(dropDown);


// for (let i = 0; i < dropDown.length; i++) {
//     dropDown[i].addEventListener("click", function () {
//         this.classList.toggle("active");
//         let dropdownContent = this.nextElementSibling;
//         if (dropdownContent.style.display === "block") {
//             dropdownContent.style.display = "none";
//         } else {
//             dropdownContent.style.display = "block";
//         }
//     })
// }


const _click = (e) => {
    let children = "";
    const submenus = [];
    switch (e.id) {
        case "html":
            children = e.parentElement.childNodes;
            children.forEach(child => {
                if (child.classList && child.classList.contains('submenu')) {
                    let sub = document.getElementsByClassName('submenu');
                    for (let i = 0; i < sub.length; i++) {
                        if (getComputedStyle(sub[i])['display'] == "block" && sub[i] != child) {
                            sub[i].style.display = "none";

                        }
                    }
                    if (child.style['display'] == "block") {
                        child.style.display = "none";
                        e.textContent = "+ Html";
                    } else {
                        child.style.display = "block";
                        e.textContent = "- Html";
                    }

                }
            });
            break;
        case "css":
            children = e.parentElement.childNodes;
            children.forEach(child => {
                if (child.classList && child.classList.contains('submenu')) {
                    let sub = document.getElementsByClassName('submenu');
                    for (let i = 0; i < sub.length; i++) {
                        if (getComputedStyle(sub[i])['display'] == "block" && sub[i] != child) {
                            sub[i].style.display = "none";
                        }
                    }
                    if (child.style['display'] == "block") {
                        child.style.display = "none";
                        e.textContent = "+ Css";
                    } else {
                        child.style.display = "block";
                        e.textContent = "- Css";
                    }
                }
            });
            break;
        case "javascript":
            children = e.parentElement.childNodes;
            children.forEach(child => {
                if (child.classList && child.classList.contains('submenu')) {
                    let sub = document.getElementsByClassName('submenu');
                    for (let i = 0; i < sub.length; i++) {
                        if (getComputedStyle(sub[i])['display'] == "block" && sub[i] != child) {
                            sub[i].style.display = "none";
                        }
                    }
                    if (child.style['display'] == "block") {
                        child.style.display = "none";
                        e.textContent = "+ javascript";
                    } else {
                        child.style.display = "block";
                        e.textContent = "- javascript";
                    }
                }
            });
            break;
        case "react":
            children = e.parentElement.childNodes;
            children.forEach(child => {
                if (child.classList && child.classList.contains('submenu')) {
                    let sub = document.getElementsByClassName('submenu');
                    for (let i = 0; i < sub.length; i++) {
                        if (getComputedStyle(sub[i])['display'] == "block" && sub[i] != child) {
                            sub[i].style.display = "none";
                        }
                    }
                    if (child.style['display'] == "block") {
                        child.style.display = "none";
                        e.textContent = "+ React";
                    } else {
                        child.style.display = "block";
                        e.textContent = "- React";
                    }
                }
            });
            break;

        default:
            break;
    }
}