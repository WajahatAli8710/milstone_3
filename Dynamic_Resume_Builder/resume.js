        // Handle profile picture upload
        document.getElementById('profilePicInput').addEventListener('change', function(e) {
            const file = e.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = function(e) {
                    document.getElementById('profilePic').src = e.target.result;
                }
                reader.readAsDataURL(file);
            }
        });

        // Add more skills fields
        function addSkill() {
            const skillsSection = document.getElementById('skillsSection');
            const newSkill = document.createElement('div');
            newSkill.className = 'skill-entry';
            newSkill.innerHTML = `
                <input type="text" class="skill" placeholder="Enter a skill" required>
                <button type="button" class="remove-btn" onclick="removeSkill(this)">✕</button>
            `;
            skillsSection.insertBefore(newSkill, skillsSection.lastElementChild);
        }

        // Remove skill field
        function removeSkill(button) {
            const skillEntry = button.parentElement;
            skillEntry.remove();
        }

        // Add more experience fields
        function addExperience() {
            const experienceSection = document.getElementById('experienceSection');
            const newExperience = document.createElement('div');
            newExperience.className = 'experience-entry';
            newExperience.innerHTML = `
                <input type="text" class="company-name" placeholder="Company Name" required>
                <input type="text" class="position" placeholder="Position" required>
                <input type="text" class="duration" placeholder="Duration" required>
                <button type="button" class="remove-btn" onclick="removeExperience(this)">✕</button>
            `;
            experienceSection.insertBefore(newExperience, experienceSection.lastElementChild);
        }

        // Remove experience field
        function removeExperience(button) {
            const experienceEntry = button.parentElement;
            experienceEntry.remove();
        }

        // Add more education fields
        function addEducation() {
            const educationSection = document.getElementById('educationSection');
            const newEducation = document.createElement('div');
            newEducation.className = 'education-entry';
            newEducation.innerHTML = `
                <input type="text" class="institution" placeholder="Institution" required>
                <input type="text" class="degree" placeholder="Degree" required>
                <input type="text" class="graduation-year" placeholder="Graduation Year" required>
                <button type="button" class="remove-btn" onclick="removeEducation(this)">✕</button>
            `;
            educationSection.insertBefore(newEducation, educationSection.lastElementChild);
        }

        // Remove education field
        function removeEducation(button) {
            const educationEntry = button.parentElement;
            educationEntry.remove();
        }

        // Generate resume preview
        function generateResume() {
            document.querySelector(".main-heading").textContent = ''
            // console.log(mainheading);
            
        window.print()
        }    