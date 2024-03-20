
// Fetch the data from the provided JSON endpoint
const apiNews = document.querySelector('api_news'); 
let array = [];
fetch('./data.json')
.then(response => response.json())
.then(data => {
array.push(data);

let display = ``;
array[0].map((article,index) => {
    console.log(article)
    display += `
        <div class='box' >
            <h2> <span> ${index+1}. </span>  ${article.title}</h2>
            <a href="${article.link}">Read More</a>
        </div>`;
});
document.querySelector("#api_news").innerHTML = display ;
})
.catch(error => console.error('Error fetching data:', error));