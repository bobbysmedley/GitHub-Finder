class Github{
  constructor(){
    this.client_id = 'Iv1.c9e8b676ebfea433';
    this.client_secret = 'f08b0fb73f7817bb6fcae4ea09ad031f021a2d89';
    this.repos_count = 5;
    this.repos_sort = 'created: asc';
  }

  async getUser(user){
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const reposResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);


    const profile = await profileResponse.json();

    const repos = await reposResponse.json();


    return {
      profile,
      repos
    }
  }
}