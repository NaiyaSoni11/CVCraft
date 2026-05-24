const nameInput = document.getElementById("name");
const titleInput = document.getElementById("title");
const aboutInput = document.getElementById("about");
const skillsInput = document.getElementById("skills");
const educationInput = document.getElementById("education");
const projectsInput = document.getElementById("projects");
const contactInput = document.getElementById("contact");
const imageInput = document.getElementById("profileImage");

function updateResume() {

    document.getElementById("previewName").innerText =
        nameInput.value || "Your Name";

    document.getElementById("previewTitle").innerText =
        titleInput.value || "Professional Title";

    document.getElementById("previewAbout").innerText =
        aboutInput.value || "About yourself will appear here.";

    document.getElementById("previewSkills").innerText =
        skillsInput.value;

    document.getElementById("previewEducation").innerText =
        educationInput.value;

    document.getElementById("previewProjects").innerText =
        projectsInput.value;

    document.getElementById("previewContact").innerText =
        contactInput.value;

    const imageFile = imageInput.files[0];

    if (imageFile) {

        const reader = new FileReader();

        reader.onload = function(e) {
            document.getElementById("previewImage").src = e.target.result;
        };

        reader.readAsDataURL(imageFile);
    }
}

nameInput.addEventListener("input", updateResume);
titleInput.addEventListener("input", updateResume);
aboutInput.addEventListener("input", updateResume);
skillsInput.addEventListener("input", updateResume);
educationInput.addEventListener("input", updateResume);
projectsInput.addEventListener("input", updateResume);
contactInput.addEventListener("input", updateResume);
imageInput.addEventListener("change", updateResume);

document.getElementById("downloadBtn")
.addEventListener("click", function(){

    window.print();

});