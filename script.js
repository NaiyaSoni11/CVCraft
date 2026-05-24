const nameInput = document.getElementById("name");
const titleInput = document.getElementById("title");
const aboutInput = document.getElementById("about");
const skillsInput = document.getElementById("skills");
const educationInput = document.getElementById("education");
const projectsInput = document.getElementById("projects");
const contactInput = document.getElementById("contact");
const imageInput = document.getElementById("profileImage");

function updateResume(){

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

    if(imageFile){

        document.getElementById("previewImage").src =
            URL.createObjectURL(imageFile);

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

const downloadBtn = document.getElementById("downloadBtn");

downloadBtn.addEventListener("click", function(){

    const resume = 
document.getElementById("resumeContent")

    html2pdf().from(resume).save("CVCraft_Resume.pdf");

});
