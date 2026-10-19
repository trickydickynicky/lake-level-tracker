const CWMS_BASE = 'https://cwms-data.usace.army.mil/cwms-data/timeseries';

const TAPPAN_INFLOW_TS_NAMES = [
    'Tappan-Lake.Flow.Inst.15Minutes.0.OBS'
];

async function fetchTappanInflow(days) {
    const name = 'Tappan-Lake.Flow.Inst.15Minutes.0.OBS';
    const nameDV = 'Tappan-Lake.Flow.Ave.~1Day.1Day.OBS'; // daily average for longer views

    const formatForCWMS = (date) => {
        const pad = n => String(n).padStart(2, '0');
        return `${date.getFullYear()}-${pad(date.getMonth()+1)}-${pad(date.getDate())}` +
               `T${pad(date.getHours())}:${pad(date.getMinutes())}:${pad(date.getSeconds())}`;
    };

    const fetchCWMS = async (tsName, windowDays) => {
        const end = new Date();
        const begin = new Date();
        begin.setDate(begin.getDate() - windowDays);
        const url = `${CWMS_BASE}?name=${encodeURIComponent(tsName)}&office=LRH` +
            `&begin=${encodeURIComponent(formatForCWMS(begin))}` +
            `&end=${encodeURIComponent(formatForCWMS(end))}` +
            `&format=json&timezone=EST5EDT&page-size=500`;
        const res = await fetch(url);
        if (!res.ok) return null;
        return res.json();
    };

    try {
        // Always get current value from 2-day IV window
        const recentData = await fetchCWMS(name, 2);
        const recentValues = (recentData?.values || []).filter(v => v[1] !== null);
        if (recentValues.length === 0) return null;
        const current = recentValues[recentValues.length - 1][1];

        // For chart series, pick strategy based on time range
        let chartValues = recentValues;

        if (days <= 7) {
            const data = await fetchCWMS(name, 4);
            const vals = (data?.values || []).filter(v => v[1] !== null);
            if (vals.length > 0) chartValues = vals;

        } else {
            // 30-day or 1-year: try daily average time series
            const data = await fetchCWMS(nameDV, days);
            const vals = (data?.values || []).filter(v => v[1] !== null);
            if (vals.length > 0) {
                chartValues = vals;
            } else {
                // fallback: just use the 2-day recent data if DV name doesn't exist
                console.warn('CWMS daily TS not found, falling back to recent IV data');
            }
        }

        return {
            current,
            series: chartValues.map(v => ({
                dateTime: new Date(v[0]).toISOString(),
                value: String(v[1])
            })),
            units: recentData.units || 'cfs'
        };

    } catch (e) {
        console.warn('CWMS fetch failed:', e);
        return null;
    }
}

/* =====================================================================
   DATA (same objects/fields as before, built with small helpers)
   ===================================================================== */
const F = {
    wl: (siteId, parameterCd) => ({ key: 'waterLevel', label: 'WATER LEVEL', unit: 'ft', icon: 'fa-tint', siteId, parameterCd, tempConversion: false }),
    of: (siteId) => ({ key: 'outflow', label: 'OUTFLOW', unit: 'cfs', icon: 'fa-chart-line', siteId, parameterCd: '00060', tempConversion: false }),
    wt: (siteId) => ({ key: 'waterTemp', label: 'WATER TEMPERATURE', unit: '°F', icon: 'fa-thermometer-half', siteId, parameterCd: '00010', tempConversion: true }),
    at: (siteId) => ({ key: 'airTemp', label: 'AIR TEMPERATURE', unit: '°F', icon: 'fa-wind', siteId, parameterCd: '00020', tempConversion: true })
};

const mkRiver = (name, siteId, location) => ({
    name, siteId, location, parameterCd: '00060',
    fields: [F.wl(siteId, '00065'), F.of(siteId)]
});

const mkLake = (name, siteId, location, parameterCd, ...extra) => ({
    name, siteId, location, parameterCd,
    fields: [F.wl(siteId, parameterCd), ...extra]
});

// Lake data with flexible field definitions
const rivers = [
    mkRiver('Lock 1 Outlet O&E Canal OH ', '410433081312500', 'Summit County, OH'),
    mkRiver('Cuyahoga River at Old Portage OH', '04206000', 'Summit County, OH'),
    mkRiver('Cuyahoga River at Jaite OH', '04206425', 'Summit County, OH'),
    mkRiver('Cuyahoga River at Independence OH', '04208000', 'Summit County, OH'),
    mkRiver('Cuyahoga River at Lower Harvard Brdg in Cleveland OH', '04208503', 'Summit County, OH'),
    mkRiver('Tuscarawas River at Clinton OH', '03116000', 'Summit County, OH'),
    mkRiver('Tuscarawas River at Massillon OH', '03117000', 'Summit County, OH'),
    mkRiver('Tuscarawas River at Newcomerstown OH', '03129000', 'Summit County, OH'),
    mkRiver('Tuscarawas River at New Philadelphia OH', '03124800', 'Summit County, OH'),
    mkRiver('Ohio River at Cincinnati OH', '03255000', 'Hamilton County, OH'),
    mkRiver('Ohio River at Ironton OH', '03216070', 'Lawrence County, OH'),
    mkRiver('Mahoning River at Leavittsburg OH', '03094000', 'Trumbull County, OH'),
    mkRiver('Mahoning River above West Ave at Youngstown OH', '03098600', 'Mahoning County, OH'),
    mkRiver('Mahoning River at Lowellville OH', '03099500', 'Mahoning County, OH'),
    mkRiver('Mahoning River bl Berlin Dam nr Berlin Center OH', '03090500', 'Mahoning County, OH'),
    mkRiver('Scioto River at Columbus OH', '03227500', 'Franklin County, OH'),
    mkRiver('Scioto River at Chillicothe OH', '03231500', 'Ross County, OH'),
    mkRiver('Great Miami River at Hamilton OH', '03274000', 'Butler County, OH'),
    mkRiver('Great Miami River at Dayton OH', '03270500', 'Montgomery County, OH'),
    mkRiver('Great Miami River at Middletown OH', '03272100', 'Butler County, OH'),
    mkRiver('Maumee River near Defiance OH', '04192500', 'Defiance County, OH'),
    mkRiver('Maumee River at Waterville OH', '04193500', 'Lucas County, OH'),
    mkRiver('Licking River near Newark OH', '03146500', 'Licking County, OH'),
    mkRiver('Hocking River at Athens OH', '03159500', 'Athens County, OH'),
    mkRiver('Little Miami River at Milford OH', '03245500', 'Clermont County, OH'),
    mkRiver('Licking River near Newark OH', '03146500', 'Ohio')
];

const lakes = [
    {
        ...mkLake('Tappan Lake', '03128000', 'Harrison County, OH', '62614',
            F.of('03128500'),
            { key: 'inflow', label: 'INFLOW', unit: 'cfs', icon: 'fa-arrow-right', siteId: 'TPPN', parameterCd: 'USACE', tempConversion: false },
            { key: 'flowCombo', label: 'OUTFLOW + INFLOW', unit: 'cfs', icon: 'fa-exchange-alt', siteId: 'TPPN', parameterCd: 'USACE_COMBO', tempConversion: false },
            F.wt('03127989'), F.at('402120081134200')),
        thresholds: [
            'At 899.30 ft: Summer Pool',
            'At 898.3 ft: Stuck on Lift',
            'At 900.5 ft: Remove Gangplank',
            'At 901.5 ft: Remove Lift',
            'Below 896.3 ft: Boat ramp closed',
            'Below 897.3 ft: Public Boat Ramp closed',
            'At 893.30 ft: Winter Pool',
            'At 899 ft: Unregulated flow begins at orifice',
            'Above 900.8 ft: Beach closed',
            'Above 901.9 ft: County Rd. 25, Fisher Farm flooded',
            'Above 902.5 ft: Franklin Twp. Rd. Monroe flooded',
            'Above 902.7 ft: County Rd. 22, 250 yards off Rt. 250, flooded',
            'Above 902.7 ft: State Rt. 646, 150 yards off Rt. 250, flooded',
            'Above 903 ft: Twp. Rd. 313, 314 flooded',
            'Above 905 ft: Twp. Rd. 215 flooded',
            'Above 906 ft: State Route 250 flooded at various points',
            'Above 906 ft: State Route 210 flooded at various points',
            'Above 907 ft: Country Market service station and ceramic shop closed',
            'Above 909 ft: Tappan Marina closed'
        ]
    },
    mkLake('Seneca Lake', '03141000', 'Noble County, OH', '62614', F.of('03141500'), F.wt('03140900'), F.at('395521081260500')),
    mkLake('Atwood Lake', '03121000', 'Tuscarawas County, OH', '62614', F.of('03121500'), F.wt('03120820'), F.at('403127081171000')),
    mkLake('Clendening Lake', '03126500', 'Harrison County, OH', '62614', F.of('03126910'), F.wt('03126395'), F.at('401434081132100')),
    mkLake('Piedmont Lake', '03125500', 'Harrison County, OH', '62614', F.of('03126000'), F.wt('03125338'), F.at('401133081125300')),
    mkLake('Berlin Lake ', '03090000', 'Portage County, OH', '62615', F.of('03090500'), F.wt('03086500')),
    mkLake('Clarence J. Brown Reservoir', '03268090', 'Clark County, OH', '62614'),
    mkLake('East Fork Lake', '03247040', 'Clermont County, OH', '62614', F.of('03246500'), F.wt('03247041')),
    mkLake('Leesville Lake', '03120000', 'Carroll County, OH', '62614', F.of('03120500'), F.wt('03119341'), F.at('402815081114300')),
    mkLake('Griggs Reservoir', '03221500', 'Franklin County, OH', '62614', F.of('03220000'), F.wt('03221500')),
    mkLake('Hoover Reservoir', '03228400', 'Delaware County, OH', '62614', F.of('03228500'), F.wt('03228400')),
    mkLake('West Fork Mill Creek Reservoir', '03256500', 'Hamilton County, OH', '62614'),
    mkLake('Buckeye Lake', '395540082291600', 'Licking County, OH', '62614'),
    mkLake('Indian Lake', '03260500', 'Logan County, OH', '62615', F.wt('03260500')),
    mkLake('Grand Lake St. Marys', '403204084342601', 'Mercer County, OH', '62615', F.of('03322485')),
    mkLake('Caesar Creek Lake', '03242340', 'Warren County, OH', '62614', F.wt('03242350')),
    mkLake('Michael J Kirwan Reservoir', '03092450', 'Portage County, OH', '62615', F.of('03092460'), F.wt('03092460')),
    mkLake('Lake Loramie', '03261800', 'Shelby County, OH', '62615'),
    mkLake('Mosquito Creek Lake', '03095000', 'Trumbull County, OH', '62615', F.of('03095500'), F.wt('03095500')),
    mkLake('Milton Reservoir', '03091000', 'Mahoning County, OH', '62615', F.of('03091500'), F.wt('03095500')),
    mkLake('Whitney Point Lake', '01511000', 'Broome County, NY', '62615',
        { key: 'airTemp', label: 'AIR TEMPERATURE', unit: '°F', icon: 'fa-wind', siteId: '01511000', parameterCd: '00021', tempConversion: false }),
    mkLake('Owasco Lake', '04235396', 'Cayuga County, NY', '62615'),
    mkLake('Chautauqua Lake', '03013946', 'Chautauqua County, NY', '62615', F.of('03014500')),
    mkLake('Richelieu R (Lake Champlain)', '04295000', 'Clinton County, NY', '62615', F.wt('04295000')),
    mkLake('Cannonsville Reservoir', '01423910', 'Delaware County, NY', '62615'),
    mkLake('East Sidney Lake', '01499500', 'Delaware County, NY', '62615'),
    mkLake('Pepacton Reservoir', '01414750', 'Cayuga County, NY', '62615'),
    mkLake('Lake Champlain', '04294413', 'Essex County, NY', '62615'),
    mkLake('Lake George', '04278000', 'Essex County, NY', '62615'),
    mkLake('Sixth Lake', '04253300', 'Hamilton County, NY', '62615'),
    mkLake('First Lake', '04253400', 'Herkimer County, NY', '62615'),
    mkLake('Stillwater Reservoir', '04256500', 'Herkimer County, NY', '62615'),
    mkLake('Conesus Lake', '04227980', 'Livingston County, NY', '62615'),
    mkLake('Hempstead Lake', '0131079450', 'Nassau County, NY', '62615'),
    mkLake('Hinckley Reservoir', '01343900', 'Oneida County, NY', '62615'),
    mkLake('Onondaga CR at Flood Ctrl Dam', '04238500', 'Onondaga County, NY', '62615'),
    mkLake('Onondaga Lake', '04240495', 'Onondaga County, NY', '62615'),
    mkLake('Baisley Pond', '01311820', 'Queens County, NY', '62615'),
    mkLake('Conselyeas Pond', '01311815', 'Queens County, NY', '62615'),
    mkLake('Springfield Park Pond', '01311816', 'Queens County, NY', '62615'),
    mkLake('Clove Lake', '01376547', 'Richmond County, NY', '62614'),
    mkLake('Ohrback Lake', '01376531', 'Richmond County, NY', '62614'),
    mkLake('Great Sacandaga Lake', '01323500', 'Saratoga County, NY', '62614'),
    mkLake('Saratoga Lake', '01330884', 'Saratoga County, NY', '62614'),
    mkLake('Schoharie Reservoir', '01350100', 'Schoharie County, NY', '62615'),
    mkLake('Almond Lake', '01523000', 'Steuben County, NY', '62615'),
    mkLake('Arkport Reservoir', '01521000', 'Steuben County, NY', '62615'),
    mkLake('Georgica Pond', '01304705', 'Suffolk County, NY', '62615'),
    mkLake('Laurel Lake', '01304250', 'Suffolk County, NY', '62615'),
    mkLake('Neversink Reservoir', '01435900', 'Sullivan County, NY', '62615'),
    mkLake('Cayuga Inlet (Cayuga Lake)', '04233500', 'Tompkins County, NY', '62615'),
    mkLake('Lake Champlain North', '04279085', 'Washington County, NY', '62615')
];

// Helper function to get a specific field for a lake
function getFieldForLake(lake, fieldKey) {
    return lake.fields?.find(f => f.key === fieldKey);
}

// Helper function to get all available metrics for a lake
function getAvailableMetrics(lake) {
    return lake.fields?.map(f => f.key) || ['waterLevel'];
}

// State management
let currentLake = null;
let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
let detailChart = null;
let currentTimeRangeDays = 7;
let activeMetric = 'waterLevel';
let currentItemType = 'lakes';

const IV_API_URL = 'https://waterservices.usgs.gov/nwis/iv/';
const DV_API_URL = 'https://waterservices.usgs.gov/nwis/dv/';

// DOM Elements
const launchScreen = document.getElementById('launchScreen');
const mainContent = document.getElementById('mainContent');
const lakeSearch = document.getElementById('lakeSearch');
const searchResults = document.getElementById('searchResults');
const favoritesList = document.getElementById('favoritesList');
const allItemsList = document.getElementById('allItemsList');
const backButton = document.getElementById('backButton');
const favoriteButton = document.getElementById('favoriteButton');

/* =====================================================================
   UI helpers (visual only)
   ===================================================================== */
const reduceMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const COLOR_UP = '#00C805';
const COLOR_DOWN = '#FF5000';
const cssVar = (n) => getComputedStyle(document.documentElement).getPropertyValue(n).trim();
const fmtUnit = (u) => (u === '°F' ? u : ' ' + u);
const decFor = (f) => f.tempConversion ? 0 : ((f.key === 'outflow' || f.key === 'inflow') ? 1 : 2);
const rangeLabel = (d) => d <= 7 ? 'Past week' : d <= 30 ? 'Past month' : 'Past year';
const cacheKey = (it) => it.siteId + '|' + it.name;
const dataCache = new Map();

function playEnter(el, cls) {
    el.classList.remove('screen-enter', 'screen-enter-back');
    void el.offsetWidth;
    el.classList.add(cls || 'screen-enter');
}

function animateNumber(el, from, to, dec, dur = 550) {
    cancelAnimationFrame(el._raf);
    if (reduceMotion() || from === to || !isFinite(from) || !isFinite(to)) {
        el.textContent = isFinite(to) ? to.toFixed(dec) : el.textContent;
        return;
    }
    const t0 = performance.now();
    const step = (now) => {
        const t = Math.min(1, (now - t0) / dur);
        const e = 1 - Math.pow(1 - t, 3);
        el.textContent = (from + (to - from) * e).toFixed(dec);
        if (t < 1) el._raf = requestAnimationFrame(step);
    };
    el._raf = requestAnimationFrame(step);
}

async function runPool(tasks, limit = 4) {
    let i = 0;
    const workers = Array.from({ length: Math.min(limit, tasks.length) }, async () => {
        while (i < tasks.length) { const t = tasks[i++]; await t(); }
    });
    await Promise.all(workers);
}

function sparkSVG(vals, color) {
    if (!vals || vals.length < 2) return '';
    const step = Math.max(1, Math.ceil(vals.length / 40));
    const pts = vals.filter((_, i) => i % step === 0 || i === vals.length - 1);
    const min = Math.min(...pts), max = Math.max(...pts), span = max - min;
    const d = pts.map((v, i) => {
        const x = (i / (pts.length - 1)) * 64;
        const y = span === 0 ? 14 : 24 - ((v - min) / span) * 22 - 1;
        return (i ? 'L' : 'M') + x.toFixed(1) + ' ' + y.toFixed(1);
    }).join('');
    return `<svg viewBox="0 0 64 28" preserveAspectRatio="none" aria-hidden="true"><path class="spark-path" pathLength="1" d="${d}" fill="none" stroke="${color}" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke"/></svg>`;
}

function pillHTML(pd) {
    if (!pd || typeof pd.change !== 'number') return '';
    const c = pd.change, d = pd.dec ?? 2;
    const cls = Math.abs(c) < Math.pow(10, -d) / 2 ? 'flat' : (c > 0 ? 'up' : 'down');
    const arrow = cls === 'up' ? '▲ ' : cls === 'down' ? '▼ ' : '';
    return `<div class="change-pill ${cls}">${arrow}${Math.abs(c).toFixed(d)}</div>`;
}

// Hero number + change line
let heroPrev = null;
let heroState = { text: '--', change: '' };
const heroEl = () => document.getElementById('currentValueNumber');

function setHeroValue(text) {
    const el = heroEl();
    heroState.text = text;
    el.classList.toggle('long', String(text).length > 9);
    if (/^-?\d+(\.\d+)?$/.test(text)) {
        const to = parseFloat(text);
        const dec = (text.split('.')[1] || '').length;
        const from = heroPrev !== null ? heroPrev : to - Math.abs(to) * 0.03;
        animateNumber(el, from, to, dec);
        heroPrev = to;
    } else {
        cancelAnimationFrame(el._raf);
        el.textContent = text;
        heroPrev = null;
    }
}

function setHeroChange(html) {
    heroState.change = html;
    document.getElementById('heroChange').innerHTML = html;
}

function changeHTML(delta, first, dec, unit, label) {
    const cls = Math.abs(delta) < Math.pow(10, -dec) / 2 ? 'flat' : (delta > 0 ? 'up' : 'down');
    const sign = delta > 0 ? '+' : delta < 0 ? '−' : '';
    const arrow = cls === 'flat' ? '' : `<span class="tri">${cls === 'up' ? '▲' : '▼'}</span>`;
    const pct = (first !== 0 && isFinite(first)) ? ` (${sign}${Math.abs(delta / first * 100).toFixed(2)}%)` : '';
    return `<span class="delta ${cls}">${arrow}${sign}${Math.abs(delta).toFixed(dec)}${fmtUnit(unit)}${pct}</span><span class="range-label">${label}</span>`;
}

function applyAccent(color) {
    mainContent.style.setProperty('--accent', color);
}

function setDetailLoading(on) {
    mainContent.classList.toggle('is-loading', on);
}

function syncRangePills() {
    document.querySelectorAll('#rangePills button').forEach(b => {
        b.classList.toggle('active', parseInt(b.getAttribute('data-days')) === currentTimeRangeDays);
    });
}

/* =====================================================================
   Lists / search
   ===================================================================== */
// Referenced on page load in the original; kept as a harmless no-op so nothing throws.
function loadActiveRivers() {}

document.addEventListener('DOMContentLoaded', () => {
    loadActiveRivers(); // Load rivers dynamically
});

async function loadItemData(item) {
    const d = await fetchLakeCurrentData(item);
    if (d) dataCache.set(cacheKey(item), d);
    return d;
}

// Search functionality
let searchSeq = 0;
lakeSearch.addEventListener('input', async (e) => {
    const seq = ++searchSeq;
    const searchTerm = e.target.value.toLowerCase();
    if (searchTerm.length < 2) {
        searchResults.style.display = 'none';
        return;
    }

    // Search BOTH lakes and rivers
    const allData = [...lakes, ...rivers];
    const results = allData.filter(item =>
        item.name?.toLowerCase().includes(searchTerm) ||
        item.location?.toLowerCase().includes(searchTerm)
    );

    // Show rows right away (cached values or skeletons), then fill in live data
    displaySearchResults(results, results.map(r => dataCache.get(cacheKey(r)) || null), false);

    const itemDatas = new Array(results.length).fill(null);
    await runPool(results.map((item, i) => async () => {
        if (seq !== searchSeq) return;
        itemDatas[i] = await loadItemData(item);
    }), 6);
    if (seq !== searchSeq) return;

    displaySearchResults(results, itemDatas.map((d, i) => d || dataCache.get(cacheKey(results[i])) || null), true);
});

function createLakeCard(lake, lakeData = null, settled = false, prevData = null) {
    const isFavorite = favorites.some(fav => fav.siteId === lake.siteId);
    const div = document.createElement('div');
    div.className = 'lake-card';

    const fields = lake.fields || [];
    const loading = !lakeData && !settled;
    const pf = lakeData ? fields.find(f => lakeData[f.key]) : null;
    const pd = pf ? lakeData[pf.key] : null;
    const unit = pd ? pd.unit : ((fields[0] || {}).unit || '');

    let sparkHTML = '', figureHTML = '';
    if (loading) {
        sparkHTML = '<div class="skel skel-spark"></div>';
        figureHTML = '<div class="skel skel-value"></div><div class="skel skel-pill"></div>';
    } else {
        const color = pd && typeof pd.change === 'number' && pd.change < 0 ? COLOR_DOWN : COLOR_UP;
        sparkHTML = pd && pd.spark ? sparkSVG(pd.spark, color) : '';
        figureHTML = `<div class="lake-data-value"><span class="num">${pd ? pd.value : '--'}</span><span class="lake-data-unit">${unit}</span></div>${pillHTML(pd)}`;
    }

    // Secondary metrics as one quiet line (same data the old grid showed)
    let metaHTML = '';
    if (lakeData) {
        const short = { waterLevel: 'Level', outflow: 'Out', inflow: 'In', waterTemp: 'Water', airTemp: 'Air' };
        const parts = fields
            .filter(f => f !== pf && f.key !== 'flowCombo' && lakeData[f.key])
            .map(f => `${short[f.key] || f.label} ${lakeData[f.key].value}${fmtUnit(lakeData[f.key].unit)}`);
        if (parts.length) metaHTML = `<div class="lake-meta">${parts.join(' · ')}</div>`;
    }

    div.innerHTML = `
        <div class="lake-row">
            <div class="lake-info">
                <div class="lake-name">${lake.name}</div>
                <div class="lake-location">${lake.location}</div>
            </div>
            <div class="lake-spark">${sparkHTML}</div>
            <div class="lake-figure">${figureHTML}</div>
            <button class="lake-card-heart ${isFavorite ? 'favorited' : ''}" data-site-id="${lake.siteId}" aria-label="Favorite">
                <i class="far fa-heart"></i>
                <i class="fas fa-heart"></i>
            </button>
        </div>
        ${metaHTML}
    `;

    // Roll the number from its previous value when fresh data replaces cached data
    const pv = pf && prevData ? prevData[pf.key] : null;
    if (pd && pv && pv.value !== pd.value) {
        animateNumber(div.querySelector('.num'), parseFloat(pv.value), parseFloat(pd.value), pd.dec ?? 2);
    }

    div.addEventListener('click', () => selectLake(lake));

    const heartButton = div.querySelector('.lake-card-heart');
    heartButton.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleFavorite(lake);
        const isNowFavorite = favorites.some(fav => fav.siteId === lake.siteId);
        heartButton.classList.toggle('favorited', isNowFavorite);
        heartButton.classList.remove('pop');
        void heartButton.offsetWidth;
        heartButton.classList.add('pop');
    });

    return div;
}

function displaySearchResults(results, dataArray, settled = true) {
    searchResults.innerHTML = '';
    if (results.length === 0) {
        searchResults.style.display = 'none';
        return;
    }

    searchResults.style.display = 'block';
    results.forEach((lake, index) => {
        const card = createLakeCard(lake, dataArray[index], settled);
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
        const result = {};

        if (lake.fields) {
            // Handle USGS fields as before
            const usgsFields = lake.fields.filter(f => f.parameterCd !== 'USACE' && f.parameterCd !== 'USACE_COMBO');
            const requests = usgsFields.map(field =>
                fetch(`${IV_API_URL}?format=json&sites=${field.siteId}&parameterCd=${field.parameterCd}&startDT=${formatDate(startDate)}&endDT=${formatDate(endDate)}&siteStatus=all`)
            );
            const responses = await Promise.all(requests);
            const dataList = await Promise.all(responses.map(r => r.json()));

            usgsFields.forEach((field, index) => {
                const data = dataList[index];
                if (data.value.timeSeries && data.value.timeSeries.length > 0) {
                    const values = data.value.timeSeries[0].values[0].value;
                    if (values.length > 0) {
                        let currentValue = parseFloat(values[values.length - 1].value);
                        // Extra (display-only): the same 1-day series, kept for sparkline + change pill
                        const conv = n => field.tempConversion ? (n * 9 / 5) + 32 : n;
                        const nums = values.map(v => conv(parseFloat(v.value))).filter(n => isFinite(n));
                        const extra = nums.length > 1 ? { spark: nums, change: nums[nums.length - 1] - nums[0] } : {};
                        const dec = field.tempConversion ? 0 : (field.key === 'outflow' ? 1 : 2);
                        if (field.tempConversion) {
                            currentValue = (currentValue * 9/5) + 32;
                            result[field.key] = Object.assign({ value: currentValue.toFixed(0), unit: field.unit, dec }, extra);
                        } else if (field.key === 'outflow') {
                            result[field.key] = Object.assign({ value: currentValue.toFixed(1), unit: field.unit, dec }, extra);
                        } else {
                            result[field.key] = Object.assign({ value: currentValue.toFixed(2), unit: field.unit, dec }, extra);
                        }
                    }
                }
            });

            // Handle USACE inflow fields
            const hasUSACE = lake.fields.some(f => f.parameterCd === 'USACE' || f.parameterCd === 'USACE_COMBO');
            if (hasUSACE) {
                const inflowResult = await fetchTappanInflow(2);
                if (inflowResult) {
                    result['inflow'] = { value: inflowResult.current.toFixed(1), unit: 'cfs', dec: 1 };
                    // combo card just shows inflow value as a teaser
                    result['flowCombo'] = { value: `${result['outflow']?.value || '--'} / ${inflowResult.current.toFixed(1)}`, unit: 'cfs' };
                }
            }
        }
        return result;
    } catch (error) {
        console.error('Error fetching lake data:', error);
        return null;
    }
}

let favGen = 0;
let allGen = 0;

function mountRows(items, container, gen, getGen, tasks) {
    items.forEach(item => {
        const cached = dataCache.get(cacheKey(item)) || null;
        let card = createLakeCard(item, cached, false);
        container.appendChild(card);
        tasks.push(async () => {
            const d = await loadItemData(item);
            if (gen !== getGen()) return;
            const next = createLakeCard(item, d || cached, true, d ? cached : null);
            card.replaceWith(next);
            card = next;
        });
    });
}

async function renderAllItems() {
    const gen = ++allGen;
    allItemsList.innerHTML = '';
    // Get the right data source
    const dataSource = currentItemType === 'lakes' ? lakes : rivers;
    const otherItems = dataSource.filter(item => !favorites.some(fav => fav.siteId === item.siteId));
    const tasks = [];
    mountRows(otherItems, allItemsList, gen, () => allGen, tasks);
    await runPool(tasks, 4);
}

async function updateFavoritesList() {
    const gen = ++favGen;
    favoritesList.innerHTML = '';

    // Favorites should ALWAYS show all favorited items (lakes AND rivers)
    const favoriteLakes = [...lakes, ...rivers].filter(item => favorites.some(fav => fav.siteId === item.siteId));
    const tasks = [];
    mountRows(favoriteLakes, favoritesList, gen, () => favGen, tasks);

    await Promise.all([runPool(tasks, 4), renderAllItems()]);
}

function updateFavoriteButton() {
    if (!currentLake) return;
    const isFavorite = favorites.some(fav => fav.siteId === currentLake.siteId);
    favoriteButton.className = `favorite-button-detail ${isFavorite ? 'favorited' : ''}`;
}

/* =====================================================================
   Detail view
   ===================================================================== */
function createMetricTabs() {
    if (!currentLake) return;

    const container = document.getElementById('metricTabsContainer');
    container.innerHTML = '';

    const availableMetrics = getAvailableMetrics(currentLake);

    availableMetrics.forEach(metricKey => {
        const field = getFieldForLake(currentLake, metricKey);
        if (!field) return;

        const button = document.createElement('button');
        button.className = `metric-tab ${metricKey === activeMetric ? 'active' : ''}`;
        button.setAttribute('data-metric', metricKey);
        button.innerHTML = `
            <i class="fas ${field.icon}"></i>
            <span>${field.label}</span>
        `;

        button.addEventListener('click', () => {
            activeMetric = metricKey;
            heroPrev = null;
            updateMetricTabs();
            loadDetailViewData();
        });

        container.appendChild(button);
    });
}

function updateMetricTabs() {
    document.querySelectorAll('.metric-tab').forEach(tab => {
        tab.classList.remove('active');
    });

    const activeTab = document.querySelector(`[data-metric="${activeMetric}"]`);
    if (activeTab) {
        activeTab.classList.add('active');
    }
}

// Load data for detail view
async function loadDetailViewData() {
    if (!currentLake) return;
    syncRangePills();
    if (!detailChart) setDetailLoading(true);
    try {
        await loadDetailViewDataInner();
    } finally {
        setDetailLoading(false);
    }
}

async function loadDetailViewDataInner() {
    if (!currentLake) return;

    const field = getFieldForLake(currentLake, activeMetric);
    if (!field) return;

    // USACE inflow — bypass USGS fetch
    if (activeMetric === 'inflow' && currentLake.name === 'Tappan Lake') {
        const result = await fetchTappanInflow(currentTimeRangeDays);
        if (result) {
            document.getElementById('currentDataLabel').textContent = 'INFLOW';
            setHeroValue(result.current.toFixed(1));
            document.getElementById('currentDataUnit').textContent = 'cfs';
            const timeLabel = currentTimeRangeDays === 7 ? '7 DAY HISTORY' : currentTimeRangeDays === 30 ? '30 DAY HISTORY' : '1 YEAR HISTORY';
            document.getElementById('chartLabelText').textContent = timeLabel;
            updateDetailChart(result.series, currentTimeRangeDays, field);
        } else {
            setHeroValue('--');
            document.getElementById('currentDataLabel').textContent = 'INFLOW';
            document.getElementById('currentDataUnit').textContent = 'cfs';
        }
        return; // skip USGS fetch below
    }
    // Outflow + Inflow combo chart
    if (activeMetric === 'flowCombo' && currentLake.name === 'Tappan Lake') {
        const [inflowResult, outflowData] = await Promise.all([
            fetchTappanInflow(currentTimeRangeDays),
            (async () => {
                const end = new Date();
                const begin = new Date();
                begin.setDate(begin.getDate() - 4);
                const formatDate = d => d.toISOString().split('T')[0];
                const apiUrl = currentTimeRangeDays >= 30 ? DV_API_URL : IV_API_URL;
                const res = await fetch(`${apiUrl}?format=json&sites=03128500&parameterCd=00060&startDT=${formatDate(begin)}&endDT=${formatDate(end)}&siteStatus=all`);
                return res.json();
            })()
        ]);

        const outflowValues = outflowData?.value?.timeSeries?.[0]?.values?.[0]?.value || [];

        document.getElementById('currentDataLabel').textContent = 'OUTFLOW + INFLOW';
        setHeroValue(`${parseFloat(outflowValues[outflowValues.length - 1]?.value || 0).toFixed(1)} / ${inflowResult?.current?.toFixed(1) || '--'}`);
        document.getElementById('currentDataUnit').textContent = 'cfs';

        const timeLabel = currentTimeRangeDays === 7 ? '7 DAY HISTORY' : currentTimeRangeDays === 30 ? '30 DAY HISTORY' : '1 YEAR HISTORY';
        document.getElementById('chartLabelText').textContent = timeLabel;

        if (inflowResult && outflowValues.length > 0) {
            updateComboChart(
                inflowResult.series,
                outflowValues.map(v => ({ dateTime: v.dateTime, value: v.value })),
                currentTimeRangeDays
            );
        }
        return;
    }
    const days = currentTimeRangeDays;

    try {
        const endDate = new Date();
        const startDate = new Date();
        startDate.setDate(startDate.getDate() - days);

        const formatDate = (date) => date.toISOString().split('T')[0];
        const apiUrl = days >= 30 ? DV_API_URL : IV_API_URL;

        const dataUrl = `${apiUrl}?format=json&sites=${field.siteId}&parameterCd=${field.parameterCd}&startDT=${formatDate(startDate)}&endDT=${formatDate(endDate)}&siteStatus=all`;

        const response = await fetch(dataUrl);
        const data = await response.json();

        if (data.value.timeSeries && data.value.timeSeries.length > 0) {
            const timeSeries = data.value.timeSeries[0];
            const values = timeSeries.values[0].value;

            if (values.length > 0) {
                const currentValue = values[values.length - 1];
                let displayValue = parseFloat(currentValue.value);

                if (field.tempConversion) {
                    displayValue = (displayValue * 9/5) + 32;
                }

                document.getElementById('currentDataLabel').textContent = field.label;
                setHeroValue(displayValue.toFixed(field.tempConversion ? 0 : (field.key === 'outflow' ? 1 : 2)));
                document.getElementById('currentDataUnit').textContent = field.unit;

                updateDetailChart(values, days, field);

                const timeLabel = days === 7 ? '7 DAY HISTORY' : days === 30 ? '30 DAY HISTORY' : '1 YEAR HISTORY';
                document.getElementById('chartLabelText').textContent = timeLabel;
            }
        }
    } catch (error) {
        console.error('Error loading detail data:', error);
    }
}

/* ---------- Chart: plugins, reveal, scrubber ---------- */
let chartMeta = null;

const chartPlugins = [{
    id: 'rhEffects',
    beforeInit(chart) { chart.$reveal = chart.options.revealStart ? 0 : 1; },
    beforeDatasetsDraw(chart) {
        const p = chart.$reveal;
        if (p == null || p >= 1) { chart.$clip = false; return; }
        const c = chart.ctx;
        c.save();
        c.beginPath();
        c.rect(0, 0, chart.width * p, chart.height);
        c.clip();
        chart.$clip = true;
    },
    afterDatasetsDraw(chart) {
        if (chart.$clip) { chart.ctx.restore(); chart.$clip = false; }
        if (chart.$scrubX == null) return;
        const { ctx, chartArea: a } = chart;
        ctx.save();
        ctx.strokeStyle = cssVar('--muted');
        ctx.globalAlpha = 0.6;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(chart.$scrubX, Math.max(0, a.top - 8));
        ctx.lineTo(chart.$scrubX, a.bottom);
        ctx.stroke();
        ctx.globalAlpha = 1;
        (chart.$scrubIdx || []).forEach((idx, di) => {
            const el = chart.getDatasetMeta(di).data[idx];
            if (!el) return;
            ctx.beginPath(); ctx.arc(el.x, el.y, 6.5, 0, Math.PI * 2); ctx.fillStyle = cssVar('--bg'); ctx.fill();
            ctx.beginPath(); ctx.arc(el.x, el.y, 4.5, 0, Math.PI * 2); ctx.fillStyle = chart.data.datasets[di].borderColor; ctx.fill();
        });
        ctx.restore();
    }
}];

function revealChart(chart) {
    if (reduceMotion()) { chart.$reveal = 1; chart.draw(); return; }
    const start = performance.now(), dur = 900;
    chart.$reveal = 0;
    const step = (now) => {
        if (chart !== detailChart || !chart.ctx) return;
        const t = Math.min(1, (now - start) / dur);
        chart.$reveal = 1 - Math.pow(1 - t, 3);
        chart.draw();
        if (t < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
}

function baseChartOptions() {
    return {
        responsive: true,
        maintainAspectRatio: false,
        animation: false,
        events: [],
        revealStart: true,
        layout: { padding: { top: 18, bottom: 10, left: 0, right: 0 } },
        plugins: { legend: { display: false }, tooltip: { enabled: false } },
        scales: { x: { display: false }, y: { display: false, grace: '8%' } },
        elements: { point: { radius: 0, hitRadius: 0 } }
    };
}

function morphAnimation() {
    return reduceMotion() ? false : { duration: 420, easing: 'easeOutCubic' };
}

function trendColor(values) {
    if (!values || values.length < 2) return COLOR_UP;
    return values[values.length - 1] >= values[0] ? COLOR_UP : COLOR_DOWN;
}

function setLegend(show) {
    document.getElementById('chartLegend').hidden = !show;
}

// Update detail chart
function updateDetailChart(data, days, field) {
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
    const times = data.map(item => new Date(item.dateTime).getTime());
    let values = data.map(item => parseFloat(item.value));

    if (field.tempConversion) {
        values = values.map(v => (v * 9/5) + 32);
    }

    const dec = decFor(field);
    const color = trendColor(values);
    applyAccent(color);
    chartMeta = { kind: 'single', dec, unit: field.unit, days, ds: [{ times, values }] };
    if (values.length) {
        setHeroChange(changeHTML(values[values.length - 1] - values[0], values[0], dec, field.unit, rangeLabel(days)));
    }
    setLegend(false);

    // Same kind of chart already on screen: morph smoothly to the new data
    if (detailChart && detailChart.$kind === 'single') {
        const ds = detailChart.data.datasets[0];
        detailChart.data.labels = labels;
        ds.data = values;
        ds.label = field.label;
        ds.borderColor = color;
        detailChart.$scrubX = null;
        detailChart.options.animation = morphAnimation();
        detailChart.update();
        return;
    }

    if (detailChart) {
        detailChart.destroy();
        detailChart = null;
    }

    detailChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: field.label,
                data: values,
                borderColor: color,
                backgroundColor: 'transparent',
                borderWidth: 2,
                fill: false,
                tension: 0.1,
                pointRadius: 0,
                spanGaps: true
            }]
        },
        options: baseChartOptions(),
        plugins: chartPlugins
    });
    detailChart.$kind = 'single';
    revealChart(detailChart);
}

function updateComboChart(inflowSeries, outflowSeries, days) {
    const ctx = document.getElementById('detailChart').getContext('2d');

    // Convert both series to {x: timestamp, y: value} objects
    const outflowData = outflowSeries.map(v => ({
        x: new Date(v.dateTime).getTime(),
        y: parseFloat(v.value)
    }));

    const inflowData = inflowSeries.map(v => ({
        x: new Date(v.dateTime).getTime(),
        y: parseFloat(v.value)
    }));

    const oVals = outflowData.map(p => p.y);
    const color = trendColor(oVals);
    const muted = cssVar('--muted') || '#8a9199';
    applyAccent(color);
    chartMeta = {
        kind: 'combo', dec: 1, unit: 'cfs', days,
        ds: [
            { times: outflowData.map(p => p.x), values: oVals },
            { times: inflowData.map(p => p.x), values: inflowData.map(p => p.y) }
        ]
    };
    if (oVals.length) {
        setHeroChange(changeHTML(oVals[oVals.length - 1] - oVals[0], oVals[0], 1, 'cfs', rangeLabel(days)));
    }
    setLegend(true);

    if (detailChart && detailChart.$kind === 'combo') {
        detailChart.data.datasets[0].data = outflowData;
        detailChart.data.datasets[0].borderColor = color;
        detailChart.data.datasets[1].data = inflowData;
        detailChart.$scrubX = null;
        detailChart.options.animation = morphAnimation();
        detailChart.update();
        return;
    }

    if (detailChart) detailChart.destroy();

    const opts = baseChartOptions();
    opts.parsing = false;
    opts.scales.x = { type: 'time', display: false };

    detailChart = new Chart(ctx, {
        type: 'line',
        data: {
            datasets: [
                {
                    label: 'Outflow',
                    data: outflowData,
                    borderColor: color,
                    backgroundColor: 'transparent',
                    borderWidth: 2,
                    fill: false,
                    tension: 0.1,
                    pointRadius: 0
                },
                {
                    label: 'Inflow',
                    data: inflowData,
                    borderColor: muted,
                    backgroundColor: 'transparent',
                    borderWidth: 2,
                    fill: false,
                    tension: 0.1,
                    pointRadius: 0
                }
            ]
        },
        options: opts,
        plugins: chartPlugins
    });
    detailChart.$kind = 'combo';
    revealChart(detailChart);
}

function nearestIndex(els, px) {
    if (!els.length) return -1;
    let lo = 0, hi = els.length - 1;
    while (lo < hi) {
        const mid = (lo + hi) >> 1;
        if (els[mid].x < px) lo = mid + 1; else hi = mid;
    }
    if (lo > 0 && Math.abs(els[lo - 1].x - px) <= Math.abs(els[lo].x - px)) lo--;
    return lo;
}

function scrubTo(clientX) {
    const chart = detailChart;
    if (!chart || !chartMeta) return;
    const rect = chart.canvas.getBoundingClientRect();
    const a = chart.chartArea;
    const px = Math.max(a.left, Math.min(a.right, clientX - rect.left));
    const idxs = chart.data.datasets.map((_, di) => nearestIndex(chart.getDatasetMeta(di).data, px));
    const el0 = chart.getDatasetMeta(0).data[idxs[0]];
    if (!el0) return;
    chart.$scrubX = el0.x;
    chart.$scrubIdx = idxs;
    chart.draw();

    const m = chartMeta;
    const d0 = m.ds[0];
    const v0 = d0.values[idxs[0]];
    const t0 = d0.times[idxs[0]];
    const when = new Date(t0).toLocaleString('en-US', m.days <= 7
        ? { month: 'short', day: 'numeric', hour: 'numeric', minute: '2-digit' }
        : { month: 'short', day: 'numeric', year: 'numeric' });

    const el = heroEl();
    cancelAnimationFrame(el._raf);
    if (m.kind === 'combo' && m.ds[1].values[idxs[1]] !== undefined) {
        el.textContent = `${v0.toFixed(1)} / ${m.ds[1].values[idxs[1]].toFixed(1)}`;
    } else {
        el.textContent = v0.toFixed(m.dec);
    }
    document.getElementById('heroChange').innerHTML = changeHTML(v0 - d0.values[0], d0.values[0], m.dec, m.unit, when);
}

function endScrub() {
    const chart = detailChart;
    if (chart && chart.$scrubX != null) {
        chart.$scrubX = null;
        chart.draw();
    }
    heroEl().textContent = heroState.text;
    document.getElementById('heroChange').innerHTML = heroState.change;
}

function setupChartScrub() {
    const wrap = document.querySelector('.chart-wrapper-detail');
    if (!wrap) return;

    const HOLD_MS = 200;      // how long to hold before scrubbing starts
    const MOVE_SLOP = 8;      // px of movement during the hold that means "this is a scroll"
    let scrubbing = false;
    let holdTimer = null;
    let startX = 0, startY = 0, lastX = 0;

    const begin = (pointerId) => {
        scrubbing = true;
        try { wrap.setPointerCapture(pointerId); } catch (_) {}
        if (navigator.vibrate) navigator.vibrate(8); // light haptic where supported
        scrubTo(lastX);
    };
    const stop = () => {
        clearTimeout(holdTimer);
        holdTimer = null;
        if (scrubbing) { scrubbing = false; endScrub(); }
    };

    wrap.addEventListener('pointerdown', (e) => {
        startX = lastX = e.clientX;
        startY = e.clientY;
        if (e.pointerType === 'mouse') { begin(e.pointerId); return; }
        // touch / pen: wait for a press-and-hold
        clearTimeout(holdTimer);
        holdTimer = setTimeout(() => begin(e.pointerId), HOLD_MS);
    });

    wrap.addEventListener('pointermove', (e) => {
        lastX = e.clientX;
        if (scrubbing) { scrubTo(e.clientX); return; }
        if (e.pointerType === 'mouse') { scrubTo(e.clientX); return; } // desktop hover
        // finger moved before the hold finished -> it's a scroll, cancel the pending scrub
        if (holdTimer && (Math.abs(e.clientX - startX) > MOVE_SLOP || Math.abs(e.clientY - startY) > MOVE_SLOP)) {
            clearTimeout(holdTimer);
            holdTimer = null;
        }
    });

    // Once scrubbing, block the page from scrolling for the rest of this touch
    wrap.addEventListener('touchmove', (e) => { if (scrubbing) e.preventDefault(); }, { passive: false });

    // Stop the long-press context menu / text selection popup
    wrap.addEventListener('contextmenu', (e) => e.preventDefault());

    wrap.addEventListener('pointerup', stop);
    wrap.addEventListener('pointercancel', stop);
    wrap.addEventListener('pointerleave', (e) => { if (e.pointerType === 'mouse') stop(); });
}

// Lake selection
let launchScrollY = 0;
function selectLake(lake) {
    currentLake = lake;
    launchScrollY = window.scrollY;
    launchScreen.style.display = 'none';
    mainContent.style.display = 'block';
    playEnter(mainContent, 'screen-enter');
    window.scrollTo(0, 0);

    document.getElementById('lakeName').textContent = lake.name;
    document.getElementById('lakeLocation').textContent = lake.location;

    const isFavorite = favorites.some(fav => fav.siteId === lake.siteId);
    favoriteButton.className = `favorite-button-detail ${isFavorite ? 'favorited' : ''}`;

    activeMetric = getAvailableMetrics(lake)[0];
    currentTimeRangeDays = 7;

    heroPrev = null;
    heroEl().textContent = '--';
    heroState = { text: '--', change: '' };
    document.getElementById('heroChange').innerHTML = '';
    applyAccent(COLOR_UP);
    setLegend(false);

    displayThresholds(lake);

    createMetricTabs();
    loadDetailViewData();
}

function displayThresholds(lake) {
    const thresholdsBox = document.getElementById('thresholds-box');
    const thresholdsList = document.getElementById('thresholds-list');

    if (lake.thresholds && lake.thresholds.length > 0) {
        // Clear existing items
        thresholdsList.innerHTML = '';

        // Add new threshold items
        lake.thresholds.forEach(threshold => {
            const li = document.createElement('li');
            li.textContent = threshold;
            thresholdsList.appendChild(li);
        });

        // Show thresholds section with proper heading
        document.querySelector('.thresholds h2').textContent = `${lake.name} Thresholds`;
        thresholdsBox.style.display = 'block';
    } else {
        // Hide thresholds section if lake doesn't have any
        thresholdsBox.style.display = 'none';
    }
}

// Back button
backButton.addEventListener('click', () => {
    launchScreen.style.display = 'flex';
    mainContent.style.display = 'none';
    playEnter(launchScreen, 'screen-enter-back');
    window.scrollTo(0, launchScrollY);
    currentLake = null;
    if (detailChart) {
        detailChart.destroy();
        detailChart = null;
    }
});

// Favorite button
favoriteButton.addEventListener('click', () => {
    if (currentLake) {
        toggleFavorite(currentLake);
        const isFavorite = favorites.some(fav => fav.siteId === currentLake.siteId);
        favoriteButton.className = `favorite-button-detail ${isFavorite ? 'favorited' : ''}`;
        favoriteButton.classList.add('pop');
        setTimeout(() => favoriteButton.classList.remove('pop'), 320);
    }
});

// Chart label dropdown functionality (kept; the visible UI is now the range pills)
function setupChartLabelDropdown() {
    const chartLabel = document.getElementById('chartLabel');
    const chartLabelContainer = chartLabel?.closest('.chart-label-container');
    const dropdown = document.getElementById('chartLabelDropdown');
    const dropdownOptions = dropdown?.querySelectorAll('.dropdown-option');

    if (!chartLabel || !chartLabelContainer || !dropdown) return;

    chartLabel.addEventListener('click', (e) => {
        e.stopPropagation();
        chartLabelContainer.classList.toggle('active');
    });

    dropdownOptions?.forEach(option => {
        option.addEventListener('click', (e) => {
            e.stopPropagation();
            const days = parseInt(option.getAttribute('data-days'));
            currentTimeRangeDays = days;

            document.getElementById('chartLabelText').textContent = option.textContent;
            chartLabelContainer.classList.remove('active');
            loadDetailViewData();
        });
    });

    document.addEventListener('click', (e) => {
        if (!chartLabelContainer.contains(e.target)) {
            chartLabelContainer.classList.remove('active');
        }
    });
}

// Time-range pills (1W / 1M / 1Y) drive the same state as the dropdown
function setupRangePills() {
    document.querySelectorAll('#rangePills button').forEach(btn => {
        btn.addEventListener('click', () => {
            const days = parseInt(btn.getAttribute('data-days'));
            if (days === currentTimeRangeDays) return;
            currentTimeRangeDays = days;
            loadDetailViewData();
        });
    });
}

// Initialize function
async function initialize() {
    launchScreen.style.display = 'flex';
    mainContent.style.display = 'none';
    currentLake = null;

    // Handle lakes/rivers toggle (bottom tab bar)
    document.querySelectorAll('.toggle-btn').forEach(btn => {
        btn.addEventListener('click', async () => {
            document.querySelectorAll('.toggle-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentItemType = btn.getAttribute('data-type');
            document.getElementById('allItemsTitle').textContent = currentItemType === 'lakes' ? 'Lakes' : 'Rivers';
            const section = document.querySelector('.all-items-section');
            if (section) section.scrollIntoView({ behavior: reduceMotion() ? 'auto' : 'smooth', block: 'start' });
            await renderAllItems();
        });
    });

    document.getElementById('tabSaved').addEventListener('click', () => {
        document.querySelector('.favorites-section').scrollIntoView({ behavior: reduceMotion() ? 'auto' : 'smooth', block: 'start' });
    });
    document.getElementById('tabSearch').addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: reduceMotion() ? 'auto' : 'smooth' });
        lakeSearch.focus({ preventScroll: true });
    });

    await updateFavoritesList();
}

// Initialize when DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    initialize();
    setupChartLabelDropdown();
    setupRangePills();
    setupChartScrub();
});