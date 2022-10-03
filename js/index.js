//footer
const today = new Date();
const thisYear = today.getFullYear();
const footer = document.querySelector('footer');
const copyright = document.createElement('p');
copyright.innerHTML = "Ki Vera Luna Pardillo " + thisYear;
footer.appendChild(copyright);
footer.className = 'footer_class';

//List of skills
const skills = ["HTML", "CSS", "Python", "SQL"];
const skillsSection = document.getElementById('skills');
const skillsList = skillsSection.querySelector('ul');

for (i=0; i < skills.length; i++) {
    let skill = document.createElement('li');
    skill.classList.add('skills_skill');
    skill.innerText = skills[i];
    skillsList.appendChild(skill);

}

// messages event listener
const messageForm = document.querySelector('form');

messageForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const message = e.target.message.value;

    // console.log(name, email, message);

    const messageSection = document.getElementById('messages'); //display message in list 
    messageSection.className = 'messages_section';

  

    const messageList = messageSection.querySelector('ul');
    const newMessage = document.createElement('li');
    newMessage.innerHTML = `<div> 
                           <span class="strong">${message}</span> 
                           <p><a class="link" href="mailto:${ email}">${name}</a> &nbsp;</p> 
                           </div>`
    messageList.className ='message_section';

    const removeButton = document.createElement('button');
    removeButton.innerText = 'remove';
    removeButton.type = 'button';
    removeButton.className = 'button_remove';
    
    removeButton.addEventListener('click', (e) => {
        const entry = e.target.parentNode;
        messageList.removeChild(entry);
    });

    newMessage.appendChild(removeButton);
    messageList.appendChild(newMessage);

    messageForm.reset();
    
});

    window.addEventListener("scroll", function(){
        var header = document.querySelector("header");
        header.classList.toggle("sticky", window.scrollY > 0);
    })

/* Set the width of the sidebar to 250px and the left margin of the page content to 250px */
function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  }
  
/* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
function closeNav() {
document.getElementById("mySidebar").style.width = "0";
document.getElementById("main").style.marginLeft = "0";
}

