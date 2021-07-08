const linksDiv = document.querySelector('.links');
var comentarios = 'comments'
async function getData(){
  const req = await fetch(`https://hn.algolia.com/api/v1/search?query=foo&tags=story`)
  const resp = await req.json()
  console.log(resp.hits)
  resp.hits.forEach((link)=>{
    const newDiv = document.createElement('div')
    const a = document.createElement('a')
    const p = document.createElement('p')
    p.innerText =`${link.num_comments} comentários`
    a.innerText = link.title 
    a.href = link.url
    newDiv.appendChild(a)
    newDiv.appendChild(p)
    linksDiv.appendChild(newDiv)
  })
}

getData()