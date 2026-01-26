document.addEventListener('DOMContentLoaded', function() {
    const avatar = document.querySelector('.profile-avatar');
    const name = document.querySelector('.profile-name');
    const username = document.querySelector('.profile-username');
    const repositories = document.querySelector('#repositorios');
    const followers = document.querySelector('#seguidores');
    const following = document.querySelector('#seguindo');
    const link = document.querySelector('.profile-link');

    const endpoint = 'https://api.github.com/users/gugainglez2';

    fetch(endpoint)
        .then(function(resposta) {
            if (!resposta.ok) {
                throw new Error("Erro ao buscar dados do GitHub");
            }
            return resposta.json();
        })
        .then(function(json) {
            avatar.src = json.avatar_url;
            name.innerText = json.name;
            username.innerText = `@${json.login}`;
            link.href = json.html_url;
            repositories.innerHTML = `<h4>Repositórios</h4> ${json.public_repos}`;
            followers.innerHTML = `<h4>Seguidores</h4> ${json.followers}`;
            following.innerHTML = `<h4>Seguindo</h4> ${json.following}`;
        })
        .catch(function(erro) {
            alert("Ocorreu um erro ao buscar o perfil. Tente novamente mais tarde.");
            console.error(erro);
        });
});