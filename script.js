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
let tempChart = null;
let outflowChart = null;
let airTempChart = null;
let currentTimeRange = 7;
let currentTempTimeRange = 7;
let currentOutflowTimeRange = 7;

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

    // Show/hide thresholds card and charts for Tappan Lake
    const thresholdsBox = document.getElementById('thresholds-box');
    const tempChartContainer = document.getElementById('tempChartContainer');
    const outflowChartContainer = document.getElementById('outflowChartContainer');
    const airTempChartContainer = document.getElementById('airTempChartContainer');
    
    if (lake.siteId === '03128000') { // Tappan Lake siteId
        thresholdsBox.style.display = 'block';
        tempChartContainer.style.display = 'block';
        outflowChartContainer.style.display = 'block';
        airTempChartContainer.style.display = 'block';
    } else {
        thresholdsBox.style.display = 'none';
        tempChartContainer.style.display = 'none';
        outflowChartContainer.style.display = 'none';
        airTempChartContainer.style.display = 'none';
        // Destroy charts if they exist
        if (tempChart) {
            tempChart.destroy();
            tempChart = null;
        }
        if (outflowChart) {
            outflowChart.destroy();
            outflowChart = null;
        }
        if (airTempChart) {
            airTempChart.destroy();
            airTempChart = null;
        }
    }

    fetchLakeData(currentTimeRange, currentTempTimeRange, currentOutflowTimeRange);
}

// Back button
backButton.addEventListener('click', () => {
    launchScreen.style.display = 'flex';
    mainContent.style.display = 'none';
    currentLake = null;
    if (levelChart) {
        levelChart.destroy();
    }
    if (tempChart) {
        tempChart.destroy();
    }
    if (outflowChart) {
        outflowChart.destroy();
    }
    if (airTempChart) {
        airTempChart.destroy();
    }
});

// Favorite button
favoriteButton.addEventListener('click', () => {
    if (currentLake) {
        toggleFavorite(currentLake);
    }
});

// Initialize function
async function initialize() {
    // Initialize favorites list
    updateFavoritesList();
    
    // Ensure launch screen is visible and main content is hidden
    launchScreen.style.display = 'flex';
    mainContent.style.display = 'none';
    
    // Reset current lake
    currentLake = null;
}

// Initialize when DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    initialize();
});

// Existing lake data fetching and chart code
const IV_API_URL = 'https://waterservices.usgs.gov/nwis/iv/';
const DV_API_URL = 'https://waterservices.usgs.gov/nwis/dv/';

async function fetchLakeData(levelDays = 7, tempDays = 7, outflowDays = 7) {
    if (!currentLake) return;
    
    try {
        const endDate = new Date();
        const levelStartDate = new Date();
        const tempStartDate = new Date();
        const outflowStartDate = new Date();
        const airTempStartDate = new Date();
        levelStartDate.setDate(levelStartDate.getDate() - levelDays);
        tempStartDate.setDate(tempStartDate.getDate() - tempDays);
        outflowStartDate.setDate(outflowStartDate.getDate() - outflowDays);
        airTempStartDate.setDate(airTempStartDate.getDate() - 7); // Always 7 days for air temp
        
        const formatDate = (date) => {
            return date.toISOString().split('T')[0];
        };

        const levelApiUrl = levelDays >= 30 ? DV_API_URL : IV_API_URL;
        const tempApiUrl = tempDays >= 30 ? DV_API_URL : IV_API_URL;
        const outflowApiUrl = outflowDays >= 30 ? DV_API_URL : IV_API_URL;
        const parameterCd = currentLake.parameterCd || '62614'; // fallback if missing;
        
        // Prepare API requests
        const requests = [
            fetch(`${levelApiUrl}?format=json&sites=${currentLake.siteId}&parameterCd=${parameterCd}&startDT=${formatDate(levelStartDate)}&endDT=${formatDate(endDate)}&siteStatus=all`)
        ];

        // Only add temperature, outflow, and air temperature requests for Tappan Lake
        if (currentLake.siteId === '03128000') {
            requests.push(
                fetch(`${outflowApiUrl}?format=json&sites=03128500&parameterCd=00060&startDT=${formatDate(outflowStartDate)}&endDT=${formatDate(endDate)}&siteStatus=all`),
                fetch(`${tempApiUrl}?format=json&sites=03127989&parameterCd=00010&startDT=${formatDate(tempStartDate)}&endDT=${formatDate(endDate)}&siteStatus=all`),
                fetch(`${tempApiUrl}?format=json&sites=402120081134200&parameterCd=00020&startDT=${formatDate(airTempStartDate)}&endDT=${formatDate(endDate)}&siteStatus=all`)
            );
        }
        
        // Fetch data
        const responses = await Promise.all(requests);
        const data = await Promise.all(responses.map(r => r.json()));
        
        if (data[0].value.timeSeries && data[0].value.timeSeries.length > 0) {
            const timeSeries = data[0].value.timeSeries[0];
            const values = timeSeries.values[0].value;
            
            const currentValue = values[values.length - 1];
            const currentLevel = parseFloat(currentValue.value);
            const lastUpdated = new Date(currentValue.dateTime);
            
            document.getElementById('current-level-value').textContent = `${currentLevel.toFixed(2)} ft`;
            document.getElementById('last-updated').textContent = `Last updated: ${lastUpdated.toLocaleString()}`;
            
            updateLevelChart(values, levelDays);
        }

        // Only update outflow, temperature, and air temperature charts for Tappan Lake
        if (currentLake.siteId === '03128000') {
            if (data[1].value.timeSeries && data[1].value.timeSeries.length > 0) {
                const timeSeries = data[1].value.timeSeries[0];
                const values = timeSeries.values[0].value;
                updateOutflowChart(values, outflowDays);
            }

            if (data[2].value.timeSeries && data[2].value.timeSeries.length > 0) {
                const timeSeries = data[2].value.timeSeries[0];
                const values = timeSeries.values[0].value;
                // Update current water temperature
                const currentValue = values[values.length - 1];
                const currentTemp = (parseFloat(currentValue.value) * 9/5) + 32;
                document.getElementById('current-water-temp-value').textContent = `${currentTemp.toFixed(1)}°F`;
                updateTempChart(values, tempDays);
            }

            if (data[3].value.timeSeries && data[3].value.timeSeries.length > 0) {
                const timeSeries = data[3].value.timeSeries[0];
                const values = timeSeries.values[0].value;
                // Update current air temperature
                const currentValue = values[values.length - 1];
                const currentTemp = (parseFloat(currentValue.value) * 9/5) + 32;
                document.getElementById('current-air-temp-value').textContent = `${currentTemp.toFixed(1)}°F`;
                updateAirTempChart(values);
            }
        } else {
            // Clear temperature readings for non-Tappan lakes
            document.getElementById('current-air-temp-value').textContent = 'N/A';
            document.getElementById('current-water-temp-value').textContent = 'N/A';
        }
    } catch (error) {
        console.error('Error fetching lake data:', error);
        document.getElementById('current-level-value').textContent = 'Error loading data';
    }
}

function updateLevelChart(data, days) {
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
                    display: false
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

function updateTempChart(data, days) {
    const ctx = document.getElementById('tempChart').getContext('2d');
    
    const formatDate = (date, days) => {
        if (days <= 7) {
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
    // Convert Celsius to Fahrenheit: °F = (°C × 9/5) + 32
    const values = data.map(item => (parseFloat(item.value) * 9/5) + 32);
    
    if (tempChart) {
        tempChart.destroy();
    }

    const isMobile = window.innerWidth <= 768;
    
    tempChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: 'Water Temperature (°F)',
                data: values,
                borderColor: '#e74c3c',
                backgroundColor: 'rgba(231, 76, 60, 0.1)',
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
                    display: false
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
                    },
                    callbacks: {
                        label: function(context) {
                            return `Temperature: ${context.raw.toFixed(1)}°F`;
                        }
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: false,
                    title: {
                        display: true,
                        text: '°F',
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
                        color: '#ffffff',
                        callback: function(value) {
                            return value.toFixed(1) + '°F';
                        }
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

function updateOutflowChart(data, days) {
    const ctx = document.getElementById('outflowChart').getContext('2d');
    
    const formatDate = (date, days) => {
        if (days <= 7) {
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
    
    if (outflowChart) {
        outflowChart.destroy();
    }

    const isMobile = window.innerWidth <= 768;
    
    outflowChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: 'Outflow (cfs)',
                data: values,
                borderColor: '#2ecc71',
                backgroundColor: 'rgba(46, 204, 113, 0.1)',
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
                    display: false
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
                    },
                    callbacks: {
                        label: function(context) {
                            return `Outflow: ${context.raw.toFixed(1)} cfs`;
                        }
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'cfs',
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
                        color: '#ffffff',
                        callback: function(value) {
                            return value.toFixed(1) + ' cfs';
                        }
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

function updateAirTempChart(data) {
    const ctx = document.getElementById('airTempChart').getContext('2d');
    
    const formatDate = (date) => {
        if (window.innerWidth <= 768) {
            return `${date.toLocaleDateString('en-US', { month: 'numeric', day: 'numeric' })} ${date.toLocaleTimeString('en-US', { hour: 'numeric' })}`;
        }
        return `${date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })} ${date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}`;
    };
    
    const labels = data.map(item => formatDate(new Date(item.dateTime)));
    // Convert Celsius to Fahrenheit: °F = (°C × 9/5) + 32
    const values = data.map(item => (parseFloat(item.value) * 9/5) + 32);
    
    if (airTempChart) {
        airTempChart.destroy();
    }

    const isMobile = window.innerWidth <= 768;
    
    airTempChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: 'Air Temperature (°F)',
                data: values,
                borderColor: '#f39c12',
                backgroundColor: 'rgba(243, 156, 18, 0.1)',
                borderWidth: 2,
                fill: true,
                tension: 0.1,
                pointRadius: 0
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            aspectRatio: isMobile ? 1 : 2,
            plugins: {
                legend: {
                    display: false
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
                    },
                    callbacks: {
                        label: function(context) {
                            return `Temperature: ${context.raw.toFixed(1)}°F`;
                        }
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: false,
                    title: {
                        display: true,
                        text: '°F',
                        font: {
                            size: isMobile ? 14 : 12,
                            weight: 'normal'
                        },
                        color: '#ffffff'
                    },
                    grid: {
                        display: true,
                        color: 'rgba(255, 255, 255, 0.1)'
                    },
                    ticks: {
                        font: {
                            size: isMobile ? 14 : 12,
                            weight: 'normal'
                        },
                        padding: isMobile ? 8 : 4,
                        color: '#ffffff',
                        callback: function(value) {
                            return value.toFixed(1) + '°F';
                        }
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
                        maxTicksLimit: isMobile ? 6 : 10,
                        font: {
                            size: isMobile ? 12 : 11,
                            weight: 'normal'
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

// Time range selectors
document.getElementById('timeRange').addEventListener('change', (e) => {
    currentTimeRange = parseInt(e.target.value);
    if (currentLake) {
        fetchLakeData(currentTimeRange, currentTempTimeRange, currentOutflowTimeRange);
    }
});

document.getElementById('tempTimeRange').addEventListener('change', (e) => {
    currentTempTimeRange = parseInt(e.target.value);
    if (currentLake) {
        fetchLakeData(currentTimeRange, currentTempTimeRange, currentOutflowTimeRange);
    }
});

document.getElementById('outflowTimeRange').addEventListener('change', (e) => {
    currentOutflowTimeRange = parseInt(e.target.value);
    if (currentLake) {
        fetchLakeData(currentTimeRange, currentTempTimeRange, currentOutflowTimeRange);
    }
});

// Fetch data immediately and then every 15 minutes
fetchLakeData(currentTimeRange, currentTempTimeRange, currentOutflowTimeRange);

// Resize charts when window resizes
window.addEventListener('resize', () => {
    if (currentLake) {
        fetchLakeData(currentTimeRange, currentTempTimeRange, currentOutflowTimeRange);
    }
});
