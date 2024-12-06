export const validateInternshipForm = (formData, step) => {
    const errors = {};

    switch(step) {
        case 1:
            if (!formData.fullName.trim()) {
                errors.fullName = "Full name is required";
            }
            if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
                errors.email = "Invalid email address";
            }
            if (!formData.phone.match(/^\d{10}$/)) {
                errors.phone = "Invalid phone number";
            }
            break;
            
        case 2:
            if (!formData.university.trim()) {
                errors.university = "University name is required";
            }
            if (!formData.degree.trim()) {
                errors.degree = "Degree is required";
            }
            if (formData.gpa && (parseFloat(formData.gpa) > 4.0 || parseFloat(formData.gpa) < 0)) {
                errors.gpa = "GPA must be between 0 and 4.0";
            }
            break;
            
        case 3:
            if (!formData.skills.trim()) {
                errors.skills = "Please list at least one skill";
            }
            if (formData.linkedIn && !formData.linkedIn.includes('linkedin.com')) {
                errors.linkedIn = "Please enter a valid LinkedIn URL";
            }
            break;
            
        case 4:
            if (!formData.resume) {
                errors.resume = "Resume is required";
            }
            if (!formData.coverLetter.trim()) {
                errors.coverLetter = "Cover letter is required";
            }
            break;
    }

    return errors;
};
