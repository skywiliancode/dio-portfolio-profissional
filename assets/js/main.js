
function updateProfileInfo(profileData) {
  const photo = document.getElementById('profile.photo')
  photo.alt = profileData.name

  const name = document.getElementById('profile.name')
  name.innerHTML = profileData.name

  const job = document.getElementById('profile.job')
  job.innerHTML = profileData.job

  const location = document.getElementById('profile.location')
  location.innerHTML = profileData.location

  const phone = document.getElementById('profile.phone')
  phone.innerHTML = profileData.phone
  phone.href = `tel:${profileData.phone}`

  const email = document.getElementById('profile.email')
  email.innerHTML = profileData.email
  email.href = `mailto:${profileData.email}`

}

function updateSoftSkills(profileData) {

  const softSkills = document.getElementById('soft-skills.skills')
  softSkills.innerHTML = profileData.skills.softSkills.map(skill => `<li>${skill}</li>`).join('')
}

function updateHardSkills(profileData) {
  const hardSkills = document.getElementById('hard-skills.skills')
  hardSkills.innerHTML = profileData.skills.hardSkills.map(skill => `<li><img src="${skill.logo}" alt="${skill.name}" title="${skill.name}"`).join('')
}

function updateLanguages(profileData) {
  const languages = document.getElementById('languages')
  languages.innerHTML = profileData.languages.map(language => `<li>${language}</li>`).join('')
}

function updateProjects(profileData) {
  const projects = document.getElementById('profile.projects')
  projects.innerHTML = profileData.portfolio.map(project => {
    return `
    <li>
      <span class="title ${project.github ? 'class="github"' : 'class = ""'}">${project.name}</span>
      <a href="${project.url}" target="_blank">${project.url}</a>
    </li>`
  }).join('')
}

(async () => {
  const profileData = await fetchProfileData()
  console.log(profileData)
  updateProfileInfo(profileData)
  updateSoftSkills(profileData)
  updateHardSkills(profileData)
  updateLanguages(profileData)
  updateProjects(profileData)
})()