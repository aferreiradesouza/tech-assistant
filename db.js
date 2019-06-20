module.exports = function() {

  const obterDados = (url, param) => {
    return require(url)[param]
  } 

  return {
    posts: obterDados('./posts.json', 'posts'),
    comments: obterDados('./posts.json', 'comments'),
    profile: obterDados('./profile.json', 'profile')
  }
}