function handleSearch() {
    const username = document.getElementById("search-box").value.trim();
    if (username !== "") {
        fetch(`https://api.github.com/users/${username}`)
            .then((response) => response.json())
            .then((data) => {
                // Met à jour les informations de l'utilisateur
                document.querySelector(".cardName h2").textContent = data.name || "N/A";
                document.querySelector(".cardName p").textContent = `@${data.login}` || "N/A";
                document.querySelector(".cardRepos strong").textContent = data.public_repos || "N/A";
                document.querySelector(".twitter").textContent = data.twitter_username || "N/A";
                document.querySelector(".github").textContent = data.login || "N/A";
                document.querySelector(".githuburl").textContent = data.html_url || "N/A";
                document.querySelector(".localisation").textContent = data.location || "N/A";
                document.querySelector(".cardFollowers strong").textContent = data.followers || "N/A";
                document.querySelector(".cardFollowing strong").textContent = data.following || "N/A";
                document.querySelector(".biography p").textContent = data.bio || "ERROR404: Biography";
                document.querySelector(".joinedDate").textContent = formatDate(data.created_at);
            
            })
            
            .catch((error) => {
                console.log("Erreur lors de la requête API:", error);
            });
    }
}
function formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', options);
  }
document.querySelector(".search-button").addEventListener("click", handleSearch);