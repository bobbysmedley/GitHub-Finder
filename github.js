class Github{
  constructor(){
    this.client_id = '112f068373f4aa3268ca';
    this.client_secret = '4d02cca67c019803c17af07a87efd3c09e9d8b69';
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