let temporaryData = [
    {
        id: "dkjjhdffh34463tfs",
        title: "Really good title",
        created: "2012-10-01",
        source: "https://images.unsplash.com/photo-1485201543483-f06c8d2a8fb4?ixlib=rb-1.2.1ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
    },
    {
        id: "kfsehr7ghdg7s8f",
        title: "Really good title",
        created: "2012-10-01",
        source: "https://images.unsplash.com/photo-1569173784625-34f37a1a35ef?ixlib=rb-1.2.1ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
    },
    {
        id: "87ffffsjhdgjgvjhdj",
        title: "Really good title",
        created: "2019-05-12",
        source: "https://images.unsplash.com/photo-1500829243541-74b677fecc30?ixlib=rb-1.2.1ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=755&q=80"
    },
    {
        id: "kjadhfsi8ufhaoos99",
        title: "Really good title",
        created: "2016-06-22",
        source: "https://images.unsplash.com/photo-1564097449148-f629e6dc0402?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
    },  
    { 
        id: "sdhfk8fsad436f",
        title: "Really good title",
        created: "2016-06-22",
        source: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?ixlib=rb-1.2.1&auto=formatfit=crop&w=751&q=80"
    },
    {
        id: "wairehfldf8dfd8fdf9df",
        title: "Really good title",
        created: "2016-06-22",
        source: "https://images.unsplash.com/photo-1510797215324-95aa89f43c33?ixlib=rb-1.2.1& ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
    },  
    { 
        id: "akad9a122wu2hudu",
        title: "Really good title",
        created: "2012-10-18",
        source: "https://images.unsplash.com/photo-1505429155379-441cc7a574f7?ixlib=rb-1.2.1& ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
    },  
    { 
        id: "kjadsaeryecsz7d66d6dad",
        title: "Really good title",
        created: "2019-05-12",
        source: "https://images.unsplash.com/photo-1569191086551-b3606745884f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
    },  
    { 
        id: "ahdsjfda89f898f7af",
        title: "Really good title",
        created: "2016-06-14",
        source: "https://images.unsplash.com/photo-1482192505345-5655af888cc4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },  
    { 
        id: "adu8asfsf9sf9saf",
        title: "Really good title",
        created: "2016-06-09",
        source: "https://images.unsplash.com/photo-1418065460487-3e41a6c84dc5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
    },  
    { 
        id: "adafjjhfkjfc822",
        title: "Really good title",
        created: "2016-06-09",
        source: "https://images.unsplash.com/photo-1517811409552-396f829138a2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
    },  
    { 
        id: "awY29dja<s09d",
        title: "Really good title",
        created: "2016-06-09",
        source: "https://images.unsplash.com/photo-1508669232496-137b159c1cdb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
    } 
] 

function createElementWithClassname(elementTag, elementClassName){
    let element = document.createElement(elementTag)
    element.className = elementClassName
    return element
}

let mainSection = document.getElementById("gallery")

function addBox(element){
    let {title, created, source} = element
    let box = createElementWithClassname("div", "gallery__box")
    let imageTitle = createElementWithClassname("h2", "gallery__box--title")
    let date = createElementWithClassname("p", "gallery__box--date")
    let image = createElementWithClassname("img", "gallery__box--image")
    imageTitle .appendChild(document.createTextNode(title)) 
    date.appendChild(document.createTextNode(created))
    image.src = source
    image.alt = title
    box.appendChild(image)
    box.appendChild(imageTitle)
    box.appendChild(date)
    mainSection.appendChild(box)
}

temporaryData.forEach(element => addBox(element))


