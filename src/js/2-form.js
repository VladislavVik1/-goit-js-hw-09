const form = document.querySelector(".feedback-form");
const LOCAL_STORAGE_KEY = "feedback-form-state";

let formData = {
    email: "",
    message: ""
};
const savedData = localStorage.getItem(LOCAL_STORAGE_KEY);
if (savedData) {
    formData = JSON.parse(savedData);
    form.elements.email.value = formData.email;
    form.elements.message.value = formData.message;
}

form.addEventListener("input", (event) => {
    formData[event.target.name] = event.target.value.trim();
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(formData));
});

// Обробник події submit
form.addEventListener("submit", (event) => {
    event.preventDefault();
    
    if (!formData.email || !formData.message) {
        alert("Fill please all fields");
        return;
    }
    
    console.log("Form Data Submitted:", formData);
    localStorage.removeItem(LOCAL_STORAGE_KEY);
    form.reset();
    formData = { email: "", message: "" };
});
