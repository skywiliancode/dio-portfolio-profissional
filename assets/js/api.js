
async function fetchProfileData() {
  const url = "https://raw.githubusercontent.com/skywiliancode/dio-portfolio-profissional/main/data/profile.json"
  const fetching = await fetch(url)
  return await fetching.json()
}