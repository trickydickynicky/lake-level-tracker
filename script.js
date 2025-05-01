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
    {
        name: 'Whitney Point Lake',
        siteId: '01511000',
        location: 'Broome County, NY',
        parameterCd: '62615'
    },
    {
        name: 'Owasco Lake',
        siteId: '04235396',
        location: 'Cayuga County, NY',
        parameterCd: '62615'
    },
    {
        name: 'Chautauqua Lake',
        siteId: '03013946',
        location: 'Chautauqua County, NY',
        parameterCd: '62615'
    },
    {
        name: 'Richelieu R (Lake Champlain)',
        siteId: '04295000',
        location: 'Clinton County, NY',
        parameterCd: '62615'
    },
    {
        name: 'Cannonsville Reservoir',
        siteId: '01423910',
        location: 'Delaware County, NY',
        parameterCd: '62615'
    },
    {
        name: 'East Sidney Lake',
        siteId: '01499500',
        location: 'Delaware County, NY',
        parameterCd: '62615'
    },
    {
        name: 'Pepacton Reservoir',
        siteId: '01414750',
        location: 'Cayuga County, NY',
        parameterCd: '62615'
    },
    {
        name: 'Lake Champlain',
        siteId: '04294413',
        location: 'Essex County, NY',
        parameterCd: '62615'
    },
    {
        name: 'Lake George',
        siteId: '04278000',
        location: 'Essex County, NY',
        parameterCd: '62615'
    },
    {
        name: 'Sixth Lake',
        siteId: '04253300',
        location: 'Hamilton County, NY',
        parameterCd: '62615'
    },
    {
        name: 'First Lake',
        siteId: '04253400',
        location: 'Herkimer County, NY',
        parameterCd: '62615'
    },
    {
        name: 'Stillwater Reservoir',
        siteId: '04256500',
        location: 'Herkimer County, NY',
        parameterCd: '62615'
    },  
    {
        name: 'Conesus Lake',
        siteId: '04227980',
        location: 'Livingston County, NY',
        parameterCd: '62615'
    },
    {
        name: 'Hempstead Lake',
        siteId: '0131079450',
        location: 'Nassau County, NY',
        parameterCd: '62615'
    },
    {
        name: 'Hinckley Reservoir',
        siteId: '01343900',
        location: 'Oneida County, NY',
        parameterCd: '62615'
    },
    {
        name: 'Onondaga CR at Flood Ctrl Dam',
        siteId: '04238500',
        location: 'Onondaga County, NY',
        parameterCd: '62615'
    },
    {
        name: 'Onondaga Lake',
        siteId: '04240495',
        location: 'Onondaga County, NY',
        parameterCd: '62615'
    },
    {
        name: 'Baisley Pond',
        siteId: '01311820',
        location: 'Queens County, NY',
        parameterCd: '62615'
    },
    {
        name: 'Conselyeas Pond',
        siteId: '01311815',
        location: 'Queens County, NY',
        parameterCd: '62615'
    },
    {
        name: 'Springfield Park Pond',
        siteId: '01311816',
        location: 'Queens County, NY',
        parameterCd: '62615'
    },
    {
        name: 'Clove Lake',
        siteId: '01376547',
        location: 'Richmond County, NY',
        parameterCd: '62614'
    },
    {
        name: 'Ohrback Lake',
        siteId: '01376531',
        location: 'Richmond County, NY',
        parameterCd: '62614'
    },
    {
        name: 'Great Sacandaga Lake',
        siteId: '01323500',
        location: 'Saratoga County, NY',
        parameterCd: '62614'
    },
    {
        name: 'Saratoga Lake',
        siteId: '01330884',
        location: 'Saratoga County, NY',
        parameterCd: '62614'
    },
    {
        name: 'Schoharie Reservoir',
        siteId: '01350100',
        location: 'Schoharie County, NY',
        parameterCd: '62615'
    },
    {
        name: 'Almond Lake',
        siteId: '01523000',
        location: 'Steuben County, NY',
        parameterCd: '62615'
    },
    {
        name: 'Arkport Reservoir',
        siteId: '01521000',
        location: 'Steuben County, NY',
        parameterCd: '62615'
    },
    {
        name: 'Georgica Pond',
        siteId: '01304705',
        location: 'Suffolk County, NY',
        parameterCd: '62615'
    },
    {
        name: 'Laurel Lake',
        siteId: '01304250',
        location: 'Suffolk County, NY',
        parameterCd: '62615'
    },
    {
        name: 'Neversink Reservoir',
        siteId: '01435900',
        location: 'Sullivan County, NY',
        parameterCd: '62615'
    },  
    {
        name: 'Cayuga Inlet (Cayuga Lake)',
        siteId: '04233500',
        location: 'Tompkins County, NY',
        parameterCd: '62615'
    },  
    {
        name: 'Lake Champlain North',
        siteId: '04279085',
        location: 'Washington County, NY',
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

    // Show/hide thresholds card and weather for Tappan Lake
    const thresholdsBox = document.getElementById('thresholds-box');
    const weatherBox = document.getElementById('weather-box');
    
    if (lake.siteId === '03128000') { // Tappan Lake siteId
        thresholdsBox.style.display = 'block';
        weatherBox.style.display = 'block';
        // Only initialize weather for Tappan Lake
        updateWeather();
    } else {
        thresholdsBox.style.display = 'none';
        weatherBox.style.display = 'none';
    }

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

// Initialize when DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize favorites list
    updateFavoritesList();
});

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
            // For mobile, show shorter date format
            if (window.innerWidth <= 768) {
                return `${date.toLocaleDateString('en-US', { month: 'numeric', day: 'numeric' })} ${date.toLocaleTimeString('en-US', { hour: 'numeric' })}`;
            }
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

    // Determine if we're on mobile
    const isMobile = window.innerWidth <= 768;
    
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
                pointRadius: days <= 7 ? 0 : (isMobile ? 0 : 2)
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            aspectRatio: isMobile ? 1 : 2,
            plugins: {
                legend: {
                    display: false // Hide legend on mobile
                },
                tooltip: {
                    mode: 'index',
                    intersect: false,
                    padding: isMobile ? 12 : 6,
                    titleFont: {
                        size: isMobile ? 14 : 12
                    },
                    bodyFont: {
                        size: isMobile ? 14 : 12
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: false,
                    title: {
                        display: true,
                        text: 'Feet',
                        font: {
                            size: isMobile ? 14 : 12
                        },
                        color: '#ffffff'
                    },
                    grid: {
                        display: true,
                        color: 'rgba(255, 255, 255, 0.1)'
                    },
                    ticks: {
                        font: {
                            size: isMobile ? 14 : 12
                        },
                        padding: isMobile ? 8 : 4,
                        color: '#ffffff'
                    }
                },
                x: {
                    title: {
                        display: false
                    },
                    grid: {
                        display: false
                    },
                    ticks: {
                        maxRotation: isMobile ? 45 : 45,
                        minRotation: isMobile ? 45 : 45,
                        maxTicksLimit: isMobile ? 6 : (days <= 7 ? 10 : (days <= 30 ? 15 : 12)),
                        font: {
                            size: isMobile ? 12 : 11
                        },
                        padding: isMobile ? 8 : 4,
                        color: '#ffffff'
                    }
                }
            },
            interaction: {
                mode: 'nearest',
                axis: 'x',
                intersect: false
            },
            layout: {
                padding: {
                    left: isMobile ? 10 : 0,
                    right: isMobile ? 10 : 0,
                    top: isMobile ? 20 : 0,
                    bottom: isMobile ? 10 : 0
                }
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
    if (currentLake) {
        fetchLakeData(currentTimeRange);
    }
});

// Weather configuration
const OPENWEATHER_API_KEY = '5a4493fab9fbc015750a5d9a58224756';
const CADIZ_LAT = 40.2728;
const CADIZ_LON = -81.0023;

// Weather functions
async function fetchWeatherData() {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${CADIZ_LAT}&lon=${CADIZ_LON}&appid=${OPENWEATHER_API_KEY}&units=imperial`);
        if (!response.ok) {
            throw new Error(`Weather data fetch failed: ${response.status}`);
        }
        const data = await response.json();
        console.log('Weather data received:', data); // Debug log
        return data;
    } catch (error) {
        console.error('Error fetching weather data:', error);
        return null;
    }
}

function updateWeatherDisplay(weatherData) {
    const weatherBox = document.getElementById('weather-box');
    
    if (!weatherData) {
        weatherBox.innerHTML = `
            <div class="weather-content">
                <p>Unable to load weather data</p>
            </div>
        `;
        return;
    }

    const weatherIcon = document.getElementById('weather-icon');
    const weatherTemp = document.getElementById('weather-temp');
    const weatherDescription = document.getElementById('weather-description');
    const weatherHumidity = document.getElementById('weather-humidity');
    const weatherWind = document.getElementById('weather-wind');

    // Update weather icon
    const iconCode = weatherData.weather[0].icon;
    weatherIcon.src = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
    
    // Update temperature
    weatherTemp.textContent = `${Math.round(weatherData.main.temp)}°F`;
    
    // Update description
    weatherDescription.textContent = weatherData.weather[0].description;
    
    // Update humidity
    weatherHumidity.textContent = `Humidity: ${weatherData.main.humidity}%`;
    
    // Update wind speed
    weatherWind.textContent = `Wind: ${Math.round(weatherData.wind.speed)} mph`;

    // Show the weather box
    weatherBox.style.display = 'block';
}

async function updateWeather() {
    console.log('Updating weather...'); // Debug log
    const weatherData = await fetchWeatherData();
    updateWeatherDisplay(weatherData);
}

// Initialize function
async function initialize() {
    // Initial weather update
    await updateWeather();
    
    // Update weather every 30 minutes
    setInterval(updateWeather, 30 * 60 * 1000);
}
