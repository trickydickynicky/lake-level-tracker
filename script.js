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

function createLakeCard(lake, lakeData = null) {
    const isFavorite = favorites.some(fav => fav.siteId === lake.siteId);
    const div = document.createElement('div');
    div.className = 'lake-card';
    
    const level = lakeData?.level || { value: '--', unit: 'ft' };
    const outflow = lakeData?.outflow || { value: '--', unit: 'cfs' };
    const waterTemp = lakeData?.waterTemp || { value: '--', unit: '°F' };
    const airTemp = lakeData?.airTemp || { value: '--', unit: '°F' };
    
    div.innerHTML = `
        <div class="lake-card-header">
            <div>
                <div class="lake-name">${lake.name}</div>
                <div class="lake-location">${lake.location}</div>
            </div>
            <button class="lake-card-heart ${isFavorite ? 'favorited' : ''}" data-site-id="${lake.siteId}">
                <i class="far fa-heart"></i>
                <i class="fas fa-heart"></i>
            </button>
        </div>
        <div class="lake-data-grid">
            <div class="lake-data-item">
                <div class="lake-data-label">
                    <i class="fas fa-tint lake-data-icon level"></i>
                    <span class="lake-data-label-text">LEVEL</span>
                </div>
                <div class="lake-data-value">
                    ${level.value}
                    <span class="lake-data-unit">${level.unit}</span>
                </div>
            </div>
            <div class="lake-data-item">
                <div class="lake-data-label">
                    <i class="fas fa-chart-line lake-data-icon outflow"></i>
                    <span class="lake-data-label-text">OUTFLOW</span>
                </div>
                <div class="lake-data-value">
                    ${outflow.value}
                    <span class="lake-data-unit">${outflow.unit}</span>
                </div>
            </div>
            <div class="lake-data-item">
                <div class="lake-data-label">
                    <i class="fas fa-thermometer-half lake-data-icon water"></i>
                    <span class="lake-data-label-text">WATER</span>
                </div>
                <div class="lake-data-value">
                    ${waterTemp.value}
                    <span class="lake-data-unit">${waterTemp.unit}</span>
                </div>
            </div>
            <div class="lake-data-item">
                <div class="lake-data-label">
                    <i class="fas fa-thermometer-half lake-data-icon air"></i>
                    <span class="lake-data-label-text">AIR</span>
                </div>
                <div class="lake-data-value">
                    ${airTemp.value}
                    <span class="lake-data-unit">${airTemp.unit}</span>
                </div>
            </div>
        </div>
    `;
    
    div.addEventListener('click', () => selectLake(lake));
    
    const heartButton = div.querySelector('.lake-card-heart');
    heartButton.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleFavorite(lake);
        // Update the heart icon
        const isNowFavorite = favorites.some(fav => fav.siteId === lake.siteId);
        heartButton.classList.toggle('favorited', isNowFavorite);
    });
    
    return div;
}

function displaySearchResults(results) {
    searchResults.innerHTML = '';
    if (results.length === 0) {
        searchResults.style.display = 'none';
        return;
    }

    searchResults.style.display = 'block';
    results.forEach(lake => {
        const card = createLakeCard(lake);
        searchResults.appendChild(card);
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

async function fetchLakeCurrentData(lake) {
    try {
        const endDate = new Date();
        const startDate = new Date();
        startDate.setDate(startDate.getDate() - 1);
        
        const formatDate = (date) => date.toISOString().split('T')[0];
        const apiUrl = 'https://waterservices.usgs.gov/nwis/iv/';
        
        const requests = [
            fetch(`${apiUrl}?format=json&sites=${lake.siteId}&parameterCd=${lake.parameterCd || '62614'}&startDT=${formatDate(startDate)}&endDT=${formatDate(endDate)}&siteStatus=all`)
        ];
        
        // For Tappan Lake, also fetch outflow, water temp, and air temp
        if (lake.siteId === '03128000') {
            requests.push(
                fetch(`${apiUrl}?format=json&sites=03128500&parameterCd=00060&startDT=${formatDate(startDate)}&endDT=${formatDate(endDate)}&siteStatus=all`),
                fetch(`${apiUrl}?format=json&sites=03127989&parameterCd=00010&startDT=${formatDate(startDate)}&endDT=${formatDate(endDate)}&siteStatus=all`),
                fetch(`${apiUrl}?format=json&sites=402120081134200&parameterCd=00020&startDT=${formatDate(startDate)}&endDT=${formatDate(endDate)}&siteStatus=all`)
            );
        }
        
        const responses = await Promise.all(requests);
        const data = await Promise.all(responses.map(r => r.json()));
        
        const result = {
            level: { value: '--', unit: 'ft' },
            outflow: { value: '--', unit: 'cfs' },
            waterTemp: { value: '--', unit: '°F' },
            airTemp: { value: '--', unit: '°F' }
        };
        
        if (data[0].value.timeSeries && data[0].value.timeSeries.length > 0) {
            const values = data[0].value.timeSeries[0].values[0].value;
            if (values.length > 0) {
                const current = parseFloat(values[values.length - 1].value);
                result.level = { value: current.toFixed(2), unit: 'ft' };
            }
        }
        
        if (lake.siteId === '03128000' && data.length > 1) {
            if (data[1].value.timeSeries && data[1].value.timeSeries.length > 0) {
                const values = data[1].value.timeSeries[0].values[0].value;
                if (values.length > 0) {
                    const current = parseFloat(values[values.length - 1].value);
                    result.outflow = { value: current.toFixed(1), unit: 'cfs' };
                }
            }
            
            if (data[2].value.timeSeries && data[2].value.timeSeries.length > 0) {
                const values = data[2].value.timeSeries[0].values[0].value;
                if (values.length > 0) {
                    const current = (parseFloat(values[values.length - 1].value) * 9/5) + 32;
                    result.waterTemp = { value: current.toFixed(0), unit: '°F' };
                }
            }
            
            if (data[3].value.timeSeries && data[3].value.timeSeries.length > 0) {
                const values = data[3].value.timeSeries[0].values[0].value;
                if (values.length > 0) {
                    const current = (parseFloat(values[values.length - 1].value) * 9/5) + 32;
                    result.airTemp = { value: current.toFixed(0), unit: '°F' };
                }
            }
        }
        
        return result;
    } catch (error) {
        console.error('Error fetching lake data:', error);
        return null;
    }
}

async function updateFavoritesList() {
    favoritesList.innerHTML = '';
    const allLakesList = document.getElementById('allLakesList');
    if (allLakesList) allLakesList.innerHTML = '';
    
    // Get favorite and non-favorite lakes
    const favoriteLakes = lakes.filter(lake => favorites.some(fav => fav.siteId === lake.siteId));
    const otherLakes = lakes.filter(lake => !favorites.some(fav => fav.siteId === lake.siteId));
    
    // Display favorites
    for (const lake of favoriteLakes) {
        const lakeData = await fetchLakeCurrentData(lake);
        const card = createLakeCard(lake, lakeData);
        favoritesList.appendChild(card);
    }
    
    // Display all other lakes
    if (allLakesList) {
        for (const lake of otherLakes) {
            const lakeData = await fetchLakeCurrentData(lake);
            const card = createLakeCard(lake, lakeData);
            allLakesList.appendChild(card);
        }
    }
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
    favoriteButton.className = `favorite-button ${isFavorite ? 'favorited' : ''}`;
    if (isFavorite) {
        favoriteButton.querySelector('.far').style.display = 'none';
        favoriteButton.querySelector('.fas').style.display = 'inline';
    } else {
        favoriteButton.querySelector('.far').style.display = 'inline';
        favoriteButton.querySelector('.fas').style.display = 'none';
    }
}

// Detail view state
let activeMetric = 'waterLevel';
let detailChart = null;
let currentTimeRangeDays = 7;

// Lake selection
function selectLake(lake) {
    currentLake = lake;
    launchScreen.style.display = 'none';
    mainContent.style.display = 'block';
    
    // Update header
    document.getElementById('lakeName').textContent = lake.name;
    document.getElementById('lakeLocation').textContent = lake.location;
    document.getElementById('detailSiteId').textContent = lake.siteId;
    
    // Update favorite button
    const favoriteButton = document.getElementById('favoriteButton');
    const isFavorite = favorites.some(fav => fav.siteId === lake.siteId);
    favoriteButton.className = `favorite-button-detail ${isFavorite ? 'favorited' : ''}`;
    if (isFavorite) {
        favoriteButton.querySelector('.far').style.display = 'none';
        favoriteButton.querySelector('.fas').style.display = 'inline';
    } else {
        favoriteButton.querySelector('.far').style.display = 'inline';
        favoriteButton.querySelector('.fas').style.display = 'none';
    }
    
    // Reset to water level tab
    activeMetric = 'waterLevel';
    currentTimeRangeDays = 7;
    updateMetricTabs();
    
    // Update chart label to default
    const chartLabelText = document.getElementById('chartLabelText');
    if (chartLabelText) {
        chartLabelText.textContent = '7 DAY HISTORY';
    }
    
    // Load data for the selected metric
    loadDetailViewData();
    
    // Set up metric tabs if not already done
    setupMetricTabs();
}

// Back button
backButton.addEventListener('click', () => {
    launchScreen.style.display = 'flex';
    mainContent.style.display = 'none';
    currentLake = null;
    if (detailChart) {
        detailChart.destroy();
        detailChart = null;
    }
});

// Metric tab switching
function updateMetricTabs() {
    document.querySelectorAll('.metric-tab').forEach(tab => {
        tab.classList.remove('active');
    });
    
    const activeTab = document.querySelector(`[data-metric="${activeMetric}"]`);
    if (activeTab) {
        activeTab.classList.add('active');
    }
    
    // Hide/show tabs based on lake
    if (currentLake && currentLake.siteId !== '03128000') {
        // Hide tabs that aren't available for non-Tappan lakes
        document.getElementById('tabOutflow').style.display = 'none';
        document.getElementById('tabWater').style.display = 'none';
        document.getElementById('tabAir').style.display = 'none';
        // Ensure water level is selected
        if (activeMetric !== 'waterLevel') {
            activeMetric = 'waterLevel';
        }
    } else {
        document.getElementById('tabOutflow').style.display = 'flex';
        document.getElementById('tabWater').style.display = 'flex';
        document.getElementById('tabAir').style.display = 'flex';
    }
}

// Set up metric tab event listeners
function setupMetricTabs() {
    document.querySelectorAll('.metric-tab').forEach(tab => {
        tab.addEventListener('click', () => {
            activeMetric = tab.getAttribute('data-metric');
            updateMetricTabs();
            loadDetailViewData();
        });
    });
}

// Load data for detail view
async function loadDetailViewData() {
    if (!currentLake) return;
    
    const days = currentTimeRangeDays;
    
    try {
        const endDate = new Date();
        const startDate = new Date();
        startDate.setDate(startDate.getDate() - days);
        
        const formatDate = (date) => date.toISOString().split('T')[0];
        const apiUrl = days >= 30 ? DV_API_URL : IV_API_URL;
        
        let dataUrl = '';
        let parameterCd = '';
        let label = '';
        let unit = '';
        
        switch(activeMetric) {
            case 'waterLevel':
                dataUrl = `${apiUrl}?format=json&sites=${currentLake.siteId}&parameterCd=${currentLake.parameterCd || '62614'}&startDT=${formatDate(startDate)}&endDT=${formatDate(endDate)}&siteStatus=all`;
                label = 'WATER LEVEL';
                unit = 'ft';
                break;
            case 'outflow':
                if (currentLake.siteId !== '03128000') return;
                dataUrl = `${apiUrl}?format=json&sites=03128500&parameterCd=00060&startDT=${formatDate(startDate)}&endDT=${formatDate(endDate)}&siteStatus=all`;
                label = 'OUTFLOW';
                unit = 'cfs';
                break;
            case 'waterTemp':
                if (currentLake.siteId !== '03128000') return;
                dataUrl = `${apiUrl}?format=json&sites=03127989&parameterCd=00010&startDT=${formatDate(startDate)}&endDT=${formatDate(endDate)}&siteStatus=all`;
                label = 'WATER TEMPERATURE';
                unit = '°F';
                break;
            case 'airTemp':
                if (currentLake.siteId !== '03128000') return;
                dataUrl = `${apiUrl}?format=json&sites=402120081134200&parameterCd=00020&startDT=${formatDate(startDate)}&endDT=${formatDate(endDate)}&siteStatus=all`;
                label = 'AIR TEMPERATURE';
                unit = '°F';
                break;
        }
        
        if (!dataUrl) return;
        
        const response = await fetch(dataUrl);
        const data = await response.json();
        
        if (data.value.timeSeries && data.value.timeSeries.length > 0) {
            const timeSeries = data.value.timeSeries[0];
            const values = timeSeries.values[0].value;
            
            if (values.length > 0) {
                const currentValue = values[values.length - 1];
                let displayValue = parseFloat(currentValue.value);
                
                // Convert to Fahrenheit for temperatures
                if (activeMetric === 'waterTemp' || activeMetric === 'airTemp') {
                    displayValue = (displayValue * 9/5) + 32;
                }
                
                // Update current data display
                document.getElementById('currentDataLabel').textContent = label;
                document.getElementById('currentValueNumber').textContent = displayValue.toFixed(activeMetric === 'waterLevel' ? 2 : (activeMetric === 'outflow' ? 1 : 0));
                document.getElementById('currentDataUnit').textContent = unit;
                
                // Update chart
                updateDetailChart(values, days, unit);
                
                // Update chart label
                const timeLabel = days === 7 ? '7 DAY HISTORY' : days === 30 ? '30 DAY HISTORY' : '1 YEAR HISTORY';
                document.querySelector('.chart-label').textContent = timeLabel;
            }
        }
    } catch (error) {
        console.error('Error loading detail data:', error);
    }
}

// Update detail chart
function updateDetailChart(data, days, unit) {
    const ctx = document.getElementById('detailChart').getContext('2d');
    
    const formatDate = (date, days) => {
        if (days <= 7) {
            return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
        } else if (days <= 30) {
            return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
        } else {
            return date.toLocaleDateString('en-US', { month: 'short', year: '2-digit' });
        }
    };
    
    const labels = data.map(item => formatDate(new Date(item.dateTime), days));
    let values = data.map(item => parseFloat(item.value));
    
    // Convert to Fahrenheit for temperatures
    if (activeMetric === 'waterTemp' || activeMetric === 'airTemp') {
        values = values.map(v => (v * 9/5) + 32);
    }
    
    if (detailChart) {
        detailChart.destroy();
    }
    
    detailChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: activeMetric,
                data: values,
                borderColor: '#ef4444',
                backgroundColor: 'rgba(239, 68, 68, 0.1)',
                borderWidth: 2,
                fill: false,
                tension: 0.1,
                pointRadius: 0
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    mode: 'index',
                    intersect: false,
                    padding: 8,
                    titleFont: {
                        size: 12,
                        family: "'Courier New', Courier, monospace"
                    },
                    bodyFont: {
                        size: 12,
                        family: "'Courier New', Courier, monospace"
                    },
                    backgroundColor: '#000',
                    borderColor: 'rgba(255, 255, 255, 0.2)',
                    borderWidth: 1,
                    titleColor: '#fff',
                    bodyColor: '#fff'
                }
            },
            scales: {
                y: {
                    beginAtZero: false,
                    grid: {
                        display: true,
                        color: 'rgba(255, 255, 255, 0.1)',
                        borderDash: [3, 3]
                    },
                    ticks: {
                        font: {
                            size: 10,
                            family: "'Courier New', Courier, monospace"
                        },
                        color: 'rgba(255, 255, 255, 0.4)'
                    }
                },
                x: {
                    grid: {
                        display: false
                    },
                    ticks: {
                        font: {
                            size: 10,
                            family: "'Courier New', Courier, monospace"
                        },
                        color: 'rgba(255, 255, 255, 0.4)',
                        maxTicksLimit: days <= 7 ? 7 : (days <= 30 ? 10 : 12)
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

// Chart label dropdown functionality
function setupChartLabelDropdown() {
    const chartLabel = document.getElementById('chartLabel');
    const chartLabelContainer = chartLabel?.closest('.chart-label-container');
    const dropdown = document.getElementById('chartLabelDropdown');
    const dropdownOptions = dropdown?.querySelectorAll('.dropdown-option');
    
    if (!chartLabel || !chartLabelContainer || !dropdown) return;
    
    // Toggle dropdown on label click
    chartLabel.addEventListener('click', (e) => {
        e.stopPropagation();
        chartLabelContainer.classList.toggle('active');
    });
    
    // Handle option selection
    dropdownOptions?.forEach(option => {
        option.addEventListener('click', (e) => {
            e.stopPropagation();
            const days = parseInt(option.getAttribute('data-days'));
            currentTimeRangeDays = days;
            
            // Update label text
            document.getElementById('chartLabelText').textContent = option.textContent;
            
            // Close dropdown
            chartLabelContainer.classList.remove('active');
            
            // Reload data
            loadDetailViewData();
        });
    });
    
    // Close dropdown when clicking outside
    document.addEventListener('click', (e) => {
        if (!chartLabelContainer.contains(e.target)) {
            chartLabelContainer.classList.remove('active');
        }
    });
}

// Favorite button
favoriteButton.addEventListener('click', () => {
    if (currentLake) {
        toggleFavorite(currentLake);
        // Update favorite button in detail view
        const isFavorite = favorites.some(fav => fav.siteId === currentLake.siteId);
        favoriteButton.className = `favorite-button-detail ${isFavorite ? 'favorited' : ''}`;
        if (isFavorite) {
            favoriteButton.querySelector('.far').style.display = 'none';
            favoriteButton.querySelector('.fas').style.display = 'inline';
        } else {
            favoriteButton.querySelector('.far').style.display = 'inline';
            favoriteButton.querySelector('.fas').style.display = 'none';
        }
    }
});

// Initialize function
async function initialize() {
    // Ensure launch screen is visible and main content is hidden
    launchScreen.style.display = 'flex';
    mainContent.style.display = 'none';
    
    // Reset current lake
    currentLake = null;
    
    // Initialize favorites list (async)
    await updateFavoritesList();
}

// Initialize when DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    initialize();
    setupMetricTabs();
    setupChartLabelDropdown();
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
                fetch(`${IV_API_URL}?format=json&sites=402120081134200&parameterCd=00020&startDT=${formatDate(airTempStartDate)}&endDT=${formatDate(endDate)}&siteStatus=all`)
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
        } else {
            document.getElementById('current-level-value').textContent = 'No data available';
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
            } else {
                document.getElementById('current-water-temp-value').textContent = 'No data available';
            }

            if (data[3].value.timeSeries && data[3].value.timeSeries.length > 0) {
                const timeSeries = data[3].value.timeSeries[0];
                const values = timeSeries.values[0].value;
                // Update current air temperature
                const currentValue = values[values.length - 1];
                const currentTemp = (parseFloat(currentValue.value) * 9/5) + 32;
                document.getElementById('current-air-temp-value').textContent = `${currentTemp.toFixed(1)}°F`;
                updateAirTempChart(values);
            } else {
                document.getElementById('current-air-temp-value').textContent = 'No data available';
            }
        } else {
            // Clear temperature readings for non-Tappan lakes
            document.getElementById('current-air-temp-value').textContent = 'N/A';
            document.getElementById('current-water-temp-value').textContent = 'N/A';
        }
    } catch (error) {
        console.error('Error fetching lake data:', error);
        document.getElementById('current-level-value').textContent = 'Error loading data';
        document.getElementById('current-air-temp-value').textContent = 'Error loading data';
        document.getElementById('current-water-temp-value').textContent = 'Error loading data';
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
                borderColor: '#ef4444',
                backgroundColor: 'rgba(239, 68, 68, 0.1)',
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
                        size: 12,
                        family: "'Courier New', Courier, monospace"
                    },
                    bodyFont: {
                        size: 12,
                        family: "'Courier New', Courier, monospace"
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
                            size: isMobile ? 10 : 10,
                            family: "'Courier New', Courier, monospace"
                        },
                        color: 'rgba(255, 255, 255, 0.4)'
                    },
                    grid: {
                        display: true,
                        color: 'rgba(255, 255, 255, 0.1)',
                        borderDash: [3, 3]
                    },
                    ticks: {
                        font: {
                            size: isMobile ? 10 : 10,
                            family: "'Courier New', Courier, monospace"
                        },
                        padding: isMobile ? 8 : 4,
                        color: 'rgba(255, 255, 255, 0.4)'
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
                            size: isMobile ? 10 : 10,
                            family: "'Courier New', Courier, monospace"
                        },
                        padding: isMobile ? 8 : 4,
                        color: 'rgba(255, 255, 255, 0.4)'
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
                borderColor: '#ef4444',
                backgroundColor: 'rgba(239, 68, 68, 0.1)',
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
                        size: 12,
                        family: "'Courier New', Courier, monospace"
                    },
                    bodyFont: {
                        size: 12,
                        family: "'Courier New', Courier, monospace"
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
                            size: isMobile ? 10 : 10,
                            family: "'Courier New', Courier, monospace"
                        },
                        color: 'rgba(255, 255, 255, 0.4)'
                    },
                    grid: {
                        display: true,
                        color: 'rgba(255, 255, 255, 0.1)',
                        borderDash: [3, 3]
                    },
                    ticks: {
                        font: {
                            size: isMobile ? 10 : 10,
                            family: "'Courier New', Courier, monospace"
                        },
                        padding: isMobile ? 8 : 4,
                        color: 'rgba(255, 255, 255, 0.4)',
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
                            size: isMobile ? 10 : 10,
                            family: "'Courier New', Courier, monospace"
                        },
                        padding: isMobile ? 8 : 4,
                        color: 'rgba(255, 255, 255, 0.4)'
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
                borderColor: '#ef4444',
                backgroundColor: 'rgba(239, 68, 68, 0.1)',
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
                        size: 12,
                        family: "'Courier New', Courier, monospace"
                    },
                    bodyFont: {
                        size: 12,
                        family: "'Courier New', Courier, monospace"
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
                            size: isMobile ? 10 : 10,
                            family: "'Courier New', Courier, monospace"
                        },
                        color: 'rgba(255, 255, 255, 0.4)'
                    },
                    grid: {
                        display: true,
                        color: 'rgba(255, 255, 255, 0.1)',
                        borderDash: [3, 3]
                    },
                    ticks: {
                        font: {
                            size: isMobile ? 10 : 10,
                            family: "'Courier New', Courier, monospace"
                        },
                        padding: isMobile ? 8 : 4,
                        color: 'rgba(255, 255, 255, 0.4)',
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
                            size: isMobile ? 10 : 10,
                            family: "'Courier New', Courier, monospace"
                        },
                        padding: isMobile ? 8 : 4,
                        color: 'rgba(255, 255, 255, 0.4)'
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
                borderColor: '#ef4444',
                backgroundColor: 'rgba(239, 68, 68, 0.1)',
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
                        size: 12,
                        family: "'Courier New', Courier, monospace"
                    },
                    bodyFont: {
                        size: 12,
                        family: "'Courier New', Courier, monospace"
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
                            size: isMobile ? 10 : 10,
                            weight: 'normal',
                            family: "'Courier New', Courier, monospace"
                        },
                        color: 'rgba(255, 255, 255, 0.4)'
                    },
                    grid: {
                        display: true,
                        color: 'rgba(255, 255, 255, 0.1)',
                        borderDash: [3, 3]
                    },
                    ticks: {
                        font: {
                            size: isMobile ? 10 : 10,
                            weight: 'normal',
                            family: "'Courier New', Courier, monospace"
                        },
                        padding: isMobile ? 8 : 4,
                        color: 'rgba(255, 255, 255, 0.4)',
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
                        color: 'rgba(255, 255, 255, 0.4)'
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

// Time range selectors (for old chart system if it exists)
const timeRangeElement = document.getElementById('timeRange');
if (timeRangeElement) {
    timeRangeElement.addEventListener('change', (e) => {
        currentTimeRange = parseInt(e.target.value);
        if (currentLake) {
            fetchLakeData(currentTimeRange, currentTempTimeRange, currentOutflowTimeRange);
        }
    });
}

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
