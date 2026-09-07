const filterButtons = document.querySelectorAll(".filters button")
const cards = document.querySelectorAll(".box_container .box")
const email = document.getElementById("emailBtn")

const filterCards = (e) => {
    document.querySelector(".active_button").classList.remove("active_button")
    e.target.classList.add("active_button")

    cards.forEach(card => {
        card.classList.add("hide")
        if(card.dataset.name === e.target.dataset.name || e.target.dataset.name === "all"){
            card.classList.remove("hide")
        }
    })
}

filterButtons.forEach(button => button.addEventListener("click", filterCards))

function scrollToBottom () {
    var height = document.body.scrollHeight
    window.scroll(0, height)
}

window.addEventListener('scroll', checkScroll)

function checkScroll(){
    const scrollIcon = document.querySelector(".scroll_to_bottom")
    var height = document.documentElement.scrollHeight
    var current = window.scrollY+window.innerHeight
    if (current >= height) {
        scrollIcon.classList.add("hide")
    }
    else {
        scrollIcon.classList.remove("hide")
    }
}

emailBtn.addEventListener("click", function() {
    window.location.href = "mailto:ines.mlaouhi.pro@gmail.com"
})

// Sample project data
const data = {
    1: {
        images: ["Projects\Medina_Project\img1.png", "Projects\Medina_Project\img2.png", "Projects\Medina_Project\img3.png"],
        text: ["Project 1", "Description of project 1"]
    },
    2: {
        images: ["assets/project2/img1.png", "assets/project2/img2.png", "assets/project2/img3.png"],
        text: ["Project 2", "Description of project 2"]
    },
    3: {
        images: ["assets/project3/img1.png", "assets/project3/img2.png", "assets/project3/img3.png"],
        text: ["Project 3", "Description of project 3"]
    }
};

// Function to get URL parameter
function getParameterByName(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}

// Load project content based on URL parameter
function loadProject() {
    const projectId = getParameterByName('id');
    console.log("Project ID:", projectId); // Debugging
    const project = data[projectId];
    console.log("Project Data:", project); // Debugging
    
    if (project) {
        document.getElementById('image1').src = project.images[0];
        document.getElementById('image2').src = project.images[1];
        document.getElementById('image3').src = project.images[2];
        document.getElementById('text1').innerText = project.text[0];
        document.getElementById('text2').innerText = project.text[1];
    } else {
        document.getElementById('text1').innerText = "Project not found";
        document.getElementById('text2').innerText = "";
    }
}

// Call the function to load the content
loadProject();
