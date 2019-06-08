// alert("Connected")


var addbutton = document.querySelector("#addtodo")
addbutton.addEventListener("click", addtodo)


var removebutton = document.querySelector("#removetodo")
removebutton.addEventListener("click", removetodo)



var removeallbutton = document.querySelector("#removealltodo")
removeallbutton.addEventListener("click", removealltodo)

list = document.querySelector("ul")
list.addEventListener("input", handleinput)


function addtodo() {

    var item = document.querySelector(".enter").value

    console.log("Add todo is clicked");
    ul = document.querySelector("ul")
    if (ul == null) {
        ul = document.createElement("ul")
        var create = 1

    }
    li = document.createElement("li")
    input = document.createElement("input")
    input.type = "checkbox"
    input.setAttribute("class", "tocheck")
    label = document.createElement("label")
    text = document.createTextNode(item)


    label.appendChild(text)
    li.appendChild(input)
    li.appendChild(label)
    ul.appendChild(li)

    if (create == 1) {
        list = document.querySelector(".list")
        list.appendChild(ul)
    }

    // to clear the entered input value
    document.querySelector(".enter").value = ''




}

function removetodo() {
    console.log("Remove todo is clicked");
    ul = document.querySelector("ul")
    //console.log(ul);
    li = ul.children



    for (let index = 0; index < li.length; index++) {
        const element = li[index]
        // console.log(element);
        if (element.children[0] == document.querySelector(".checked") || document.querySelectorAll(".tocheck")[index].checked) {
            element.remove()
            index--;
        }
    }

}


function removealltodo(e) {


    console.log("Remove all is clicked");
    ul = document.querySelector("ul")
    console.log(ul);
    ul.remove()

}

function handleinput(e) {
    if (e.target.checked) {
        console.log("hi");
    }

    else {
        e.target.checked = false
        e.target.setAttribute("class", "tocheck")
        console.log("YEY");
    }


}



