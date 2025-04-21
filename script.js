// Lake data (for now just Tappan Lake)
const lakes = [
    {
        name: 'Tappan Lake',
        siteId: '03128000',
        location: 'Harrison County, OH',
        parameterCd: '62614'
    },
    {
        name: 'Clarence J. Brown Reservoir',
        siteId: '03268090',
        location: 'Clark County, OH',
        parameterCd: '62614'
    },
    {
        name: 'East Fork Lake',
        siteId: '03247040',
        location: 'Clermont County, OH',
        parameterCd: '62614'
    },
    {
        name: 'Leesville Lake',
        siteId: '03120000',
        location: 'Carroll County, OH',
        parameterCd: '62614'
    },
    {
        name: 'Griggs Reservoir',
        siteId: '03221500',
        location: 'Franklin County, OH',
        parameterCd: '62614'
    },
    {
        name: 'Hoover Reservoir',
        siteId: '03228400',
        location: 'Delaware County, OH',
        parameterCd: '62614'
    },
    {
        name: 'Senecaville Lake',
        siteId: '03141000',
        location: 'Noble County, OH',
        parameterCd: '62614'
    },
    {
        name: 'West Fork Mill Creek Reservoir',
        siteId: '03256500',
        location: 'Hamilton County, OH',
        parameterCd: '62614'
    },
    {
        name: 'Clendening Lake',
        siteId: '03126500',
        location: 'Harrison County, OH',
        parameterCd: '62614'
    },
    {
        name: 'Piedmont Lake',
        siteId: '03125500',
        location: 'Harrison County, OH',
        parameterCd: '62614'
    },
    {
        name: 'Buckeye Lake',
        siteId: '395540082291600',
        location: 'Licking County, OH',
        parameterCd: '62614'
    },
    {
        name: 'Indian Lake',
        siteId: '03260500',
        location: 'Logan County, OH',
        parameterCd: '62615'
    },
    {
        name: 'Grand Lake St. Marys',
        siteId: '403204084342601',
        location: 'Mercer County, OH',
        parameterCd: '62615'
    },
    {
        name: 'Atwood Lake',
        siteId: '03121000',
        location: 'Tuscarawas County, OH',
        parameterCd: '62614'
    },
    {
        name: 'Caesar Creek Lake',
        siteId: '03242340',
        location: 'Warren County, OH',
        parameterCd: '62614'
    },
    {
        name: 'Berlin Lake ',
        siteId: '03090000',
        location: 'Portage County, OH',
        parameterCd: '62615'
    },
    {
        name: 'Michael J Kirwan Reservoir',
        siteId: '03092450',
        location: 'Portage County, OH',
        parameterCd: '62615'
    },
    {
        name: 'Lake Loramie',
        siteId: '03261800',
        location: 'Shelby County, OH',
        parameterCd: '62615'
    },  
    {
        name: 'Mosquito Creek Lake',
        siteId: '03095000',
        location: 'Trumbull County, OH',
        parameterCd: '62615'
    },
    {
        name: 'Milton Reservoir',
        siteId: '03091000',
        location: 'Mahoning County, OH',
        parameterCd: '62615'
    },
    
 
];

// State management
let currentLake = null;
let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
let levelChart = null;
let currentTimeRange = 7;

// DOM Elements
const launchScreen = document.getElementById('launchScreen');
const mainContent = document.getElementById('mainContent');
const lakeSearch = document.getElementById('lakeSearch');
const searchResults = document.getElementById('searchResults');
const favoritesList = document.getElementById('favoritesList');
const backButton = document.getElementById('backButton');
const favoriteButton = document.getElementById('favoriteButton');
const lakeName = document.getElementById('lakeName');
const siteId = document.getElementById('siteId');

// Search functionality
lakeSearch.addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    if (searchTerm.length < 2) {
        searchResults.style.display = 'none';
        return;
    }

    const results = lakes.filter(lake =>
        (lake.name?.toLowerCase().includes(searchTerm) || false) ||
        (lake.location?.toLowerCase().includes(searchTerm) || false)
    );

    displaySearchResults(results);
});

function displaySearchResults(results) {
    searchResults.innerHTML = '';
    if (results.length === 0) {
        searchResults.style.display = 'none';
        return;
    }

    searchResults.style.display = 'block';
    results.forEach(lake => {
        const isFavorite = favorites.some(fav => fav.siteId === lake.siteId);
        const div = document.createElement('div');
        div.className = 'search-result-item';
        div.innerHTML = `
            <div>
                <div class="lake-name">${lake.name}</div>
                <div class="lake-location">${lake.location}</div>
            </div>
            <i class="fas ${isFavorite ? 'fa-star' : 'fa-star'} favorite-icon ${isFavorite ? 'favorited' : ''}" 
               data-site-id="${lake.siteId}"></i>
        `;
        div.addEventListener('click', () => selectLake(lake));

        // Add event listener to the star icon to toggle favorite
        const favoriteIcon = div.querySelector('.favorite-icon');
        favoriteIcon.addEventListener('click', (e) => {
            e.stopPropagation();  // Prevent selecting the lake
            toggleFavorite(lake);  // Toggle favorite status when clicked
        });

        searchResults.appendChild(div);
    });
}


// Favorites functionality
function toggleFavorite(lake) {
    const index = favorites.findIndex(fav => fav.siteId === lake.siteId);
    if (index === -1) {
        favorites.push(lake);
    } else {
        favorites.splice(index, 1);
    }
    localStorage.setItem('favorites', JSON.stringify(favorites));
    updateFavoritesList();
    updateFavoriteButton();
}

function updateFavoritesList() {
    favoritesList.innerHTML = '';
    favorites.forEach(lake => {
        const div = document.createElement('div');
        div.className = 'favorite-item';
        div.innerHTML = `
            <div>
                <div class="lake-name">${lake.name}</div>
                <div class="lake-location">${lake.location}</div>
            </div>
            <div class="favorite-controls">
                <i class="fas fa-times remove-favorite" data-site-id="${lake.siteId}"></i>
            </div>
        `;
        
        // Event listener for removing favorite
        const removeButton = div.querySelector('.remove-favorite');
        removeButton.addEventListener('click', (e) => {
            e.stopPropagation(); // Prevent the lake selection event from triggering
            const siteId = e.target.getAttribute('data-site-id');
            removeFavorite(siteId);
        });

        div.addEventListener('click', () => selectLake(lake));
        favoritesList.appendChild(div);
    });
}

function removeFavorite(siteId) {
    const index = favorites.findIndex(fav => fav.siteId === siteId);
    if (index !== -1) {
        favorites.splice(index, 1);
        localStorage.setItem('favorites', JSON.stringify(favorites));
        updateFavoritesList();  // Re-render the list after removal
    }
}


function updateFavoriteButton() {
    if (!currentLake) return;
    const isFavorite = favorites.some(fav => fav.siteId === currentLake.siteId);
    favoriteButton.innerHTML = `<i class="fas ${isFavorite ? 'fa-star' : 'fa-star'}"></i>`;
    favoriteButton.className = `favorite-button ${isFavorite ? 'favorited' : ''}`;
}

// Lake selection
function selectLake(lake) {
    currentLake = lake;
    launchScreen.style.display = 'none';
    mainContent.style.display = 'block';
    lakeName.textContent = `${lake.name} Level Tracker`;
    siteId.textContent = lake.siteId;
    updateFavoriteButton();
    fetchLakeData(currentTimeRange);
}

// Back button
backButton.addEventListener('click', () => {
    launchScreen.style.display = 'flex';
    mainContent.style.display = 'none';
    currentLake = null;
    if (levelChart) {
        levelChart.destroy();
    }
});

// Favorite button
favoriteButton.addEventListener('click', () => {
    if (currentLake) {
        toggleFavorite(currentLake);
    }
});

// Initialize favorites list
updateFavoritesList();

// Existing lake data fetching and chart code
const IV_API_URL = 'https://waterservices.usgs.gov/nwis/iv/';
const DV_API_URL = 'https://waterservices.usgs.gov/nwis/dv/';

async function fetchLakeData(days = 7) {
    if (!currentLake) return;
    
    try {
        const endDate = new Date();
        const startDate = new Date();
        startDate.setDate(startDate.getDate() - days);
        
        const formatDate = (date) => {
            return date.toISOString().split('T')[0];
        };

        const apiUrl = days >= 30 ? DV_API_URL : IV_API_URL;
        const parameterCd = currentLake.parameterCd || '62614'; // fallback if missing;
        
        const response = await fetch(
            `${apiUrl}?format=json&sites=${currentLake.siteId}&parameterCd=${parameterCd}&startDT=${formatDate(startDate)}&endDT=${formatDate(endDate)}&siteStatus=all`
        );
        
        const data = await response.json();
        
        if (data.value.timeSeries && data.value.timeSeries.length > 0) {
            const timeSeries = data.value.timeSeries[0];
            const values = timeSeries.values[0].value;
            
            const currentValue = values[values.length - 1];
            const currentLevel = parseFloat(currentValue.value);
            const lastUpdated = new Date(currentValue.dateTime);
            
            document.getElementById('current-level-value').textContent = `${currentLevel.toFixed(2)} ft`;
            document.getElementById('last-updated').textContent = `Last updated: ${lastUpdated.toLocaleString()}`;
            
            updateChart(values, days);
        }
    } catch (error) {
        console.error('Error fetching lake data:', error);
        document.getElementById('current-level-value').textContent = 'Error loading data';
    }
}

function updateChart(data, days) {
    const ctx = document.getElementById('levelChart').getContext('2d');
    
    const formatDate = (date, days) => {
        if (days <= 7) {
            return `${date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })} ${date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}`;
        } else if (days <= 30) {
            return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
        } else {
            return date.toLocaleDateString('en-US', { month: 'short', year: '2-digit' });
        }
    };
    
    const labels = data.map(item => formatDate(new Date(item.dateTime), days));
    const values = data.map(item => parseFloat(item.value));
    
    if (levelChart) {
        levelChart.destroy();
    }
    
    levelChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: 'Lake Level (ft)',
                data: values,
                borderColor: '#3498db',
                backgroundColor: 'rgba(52, 152, 219, 0.1)',
                borderWidth: 2,
                fill: true,
                tension: 0.1,
                pointRadius: days <= 7 ? 0 : 2
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            aspectRatio: 2,
            plugins: {
                legend: {
                    display: true,
                    position: 'top'
                },
                tooltip: {
                    mode: 'index',
                    intersect: false
                }
            },
            scales: {
                y: {
                    beginAtZero: false,
                    title: {
                        display: true,
                        text: 'Feet'
                    },
                    grid: {
                        display: true,
                        color: 'rgba(0, 0, 0, 0.1)'
                    }
                },
                x: {
                    title: {
                        display: true,
                        text: 'Date'
                    },
                    grid: {
                        display: false
                    },
                    ticks: {
                        maxRotation: 45,
                        minRotation: 45,
                        maxTicksLimit: days <= 7 ? 10 : (days <= 30 ? 15 : 12)
                    }
                }
            },
            interaction: {
                mode: 'nearest',
                axis: 'x',
                intersect: false
            }
        }
    });
}

// Time range selector
document.getElementById('timeRange').addEventListener('change', (e) => {
    currentTimeRange = parseInt(e.target.value);
    if (currentLake) {
        fetchLakeData(currentTimeRange);
    }
});

// Fetch data immediately and then every 15 minutes
fetchLakeData(currentTimeRange);
setInterval(() => fetchLakeData(currentTimeRange), 15 * 60 * 1000); 
// Resize chart when window resizes
window.addEventListener('resize', () => {
    if (levelChart) {
        levelChart.resize();
    }
});
