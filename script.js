document.addEventListener('DOMContentLoaded', function () {
    const newsList = document.getElementById('news-list');

    // Function to fetch news data from an API (simulated data here)
    async function fetchNews() {
        try {
            const response = await fetch('https://newsapi.org/v2/everything?q=african%20archaeology&apiKey=YourAPIKey');
            const data = await response.json();
            console.log(data)
            return data.articles;
        } catch (error) {
            console.error('Error fetching news:', error);
            return [];
        }
    }

    // Function to populate news feed
    async function populateNewsFeed() {
        const newsData = await fetchNews();

        newsList.innerHTML = ' ';
        newsData.forEach(item => {
            const li = document.createElement('li');
            li.className = 'news-item';
            li.innerHTML = `
                <h2 class="news-title">${item.title}</h2>
                <img src=${item.urlToImage}>            
                <p class="news-description">${item.description}</p>
                <a class="news-link" href="${item.url}" target="_blank">Read more</a>

                            `;
            newsList.appendChild(li);
        });
    }
    setInterval(populateNewsFeed, 2000)
    // Initial population of news feed
    //populateNewsFeed();
});



