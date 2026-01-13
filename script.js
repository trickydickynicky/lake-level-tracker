// Lake data with flexible field definitions
const lakes = [
    {
        name: 'Tappan Lake',
        siteId: '03128000',
        location: 'Harrison County, OH',
        parameterCd: '62614',
        fields: [
            { key: 'waterLevel', label: 'WATER LEVEL', unit: 'ft', icon: 'fa-tint', siteId: '03128000', parameterCd: '62614', tempConversion: false },
            { key: 'outflow', label: 'OUTFLOW', unit: 'cfs', icon: 'fa-chart-line', siteId: '03128500', parameterCd: '00060', tempConversion: false },
            { key: 'waterTemp', label: 'WATER TEMPERATURE', unit: '°F', icon: 'fa-thermometer-half', siteId: '03127989', parameterCd: '00010', tempConversion: true },
            { key: 'airTemp', label: 'AIR TEMPERATURE', unit: '°F', icon: 'fa-wind', siteId: '402120081134200', parameterCd: '00020', tempConversion: true }
        ]
    },
    {
        name: 'Clarence J. Brown Reservoir',
        siteId: '03268090',
        location: 'Clark County, OH',
        parameterCd: '62614',
        fields: [
            { key: 'waterLevel', label: 'WATER LEVEL', unit: 'ft', icon: 'fa-tint', siteId: '03268090', parameterCd: '62614', tempConversion: false }
        ]
    },
    {
        name: 'East Fork Lake',
        siteId: '03247040',
        location: 'Clermont County, OH',
        parameterCd: '62614',
        fields: [
            { key: 'waterLevel', label: 'WATER LEVEL', unit: 'ft', icon: 'fa-tint', siteId: '03247040', parameterCd: '62614', tempConversion: false },
            { key: 'outflow', label: 'OUTFLOW', unit: 'cfs', icon: 'fa-chart-line', siteId: '03246500', parameterCd: '00060', tempConversion: false },
            { key: 'waterTemp', label: 'WATER TEMPERATURE', unit: '°F', icon: 'fa-thermometer-half', siteId: '03247041', parameterCd: '00010', tempConversion: true }
        ]
    },
    {
        name: 'Leesville Lake',
        siteId: '03120000',
        location: 'Carroll County, OH',
        parameterCd: '62614',
        fields: [
            { key: 'waterLevel', label: 'WATER LEVEL', unit: 'ft', icon: 'fa-tint', siteId: '03120000', parameterCd: '62614', tempConversion: false },
            { key: 'outflow', label: 'OUTFLOW', unit: 'cfs', icon: 'fa-chart-line', siteId: '03120500', parameterCd: '00060', tempConversion: false },
            { key: 'waterTemp', label: 'WATER TEMPERATURE', unit: '°F', icon: 'fa-thermometer-half', siteId: '03119341', parameterCd: '00010', tempConversion: true },
            { key: 'airTemp', label: 'AIR TEMPERATURE', unit: '°F', icon: 'fa-wind', siteId: '402815081114300', parameterCd: '00020', tempConversion: true }
        ]
    },
    {
        name: 'Griggs Reservoir',
    siteId: '03221500',
    location: 'Franklin County, OH',
    parameterCd: '62614',
    fields: [
        { key: 'waterLevel', label: 'WATER LEVEL', unit: 'ft', icon: 'fa-tint', siteId: '03221500', parameterCd: '62614', tempConversion: false },
        { key: 'outflow', label: 'OUTFLOW', unit: 'cfs', icon: 'fa-chart-line', siteId: '03220000', parameterCd: '00060', tempConversion: false },
        { key: 'waterTemp', label: 'WATER TEMPERATURE', unit: '°F', icon: 'fa-thermometer-half', siteId: '03221500', parameterCd: '00010', tempConversion: true },
    ]
    },
    {
        name: 'Hoover Reservoir',
        siteId: '03228400',
        location: 'Delaware County, OH',
        parameterCd: '62614',
        fields: [
            { key: 'waterLevel', label: 'WATER LEVEL', unit: 'ft', icon: 'fa-tint', siteId: '03228400', parameterCd: '62614', tempConversion: false },
            { key: 'outflow', label: 'OUTFLOW', unit: 'cfs', icon: 'fa-chart-line', siteId: '03228500', parameterCd: '00060', tempConversion: false },
            { key: 'waterTemp', label: 'WATER TEMPERATURE', unit: '°F', icon: 'fa-thermometer-half', siteId: '03228400', parameterCd: '00010', tempConversion: true },
        ]
    },
    {
        name: 'Seneca Lake',
        siteId: '03141000',
        location: 'Noble County, OH',
        parameterCd: '62614',
        fields: [
            { key: 'waterLevel', label: 'WATER LEVEL', unit: 'ft', icon: 'fa-tint', siteId: '03141000', parameterCd: '62614', tempConversion: false },
            { key: 'outflow', label: 'OUTFLOW', unit: 'cfs', icon: 'fa-chart-line', siteId: '03141500', parameterCd: '00060', tempConversion: false },
            { key: 'waterTemp', label: 'WATER TEMPERATURE', unit: '°F', icon: 'fa-thermometer-half', siteId: '03140900', parameterCd: '00010', tempConversion: true },
            { key: 'airTemp', label: 'AIR TEMPERATURE', unit: '°F', icon: 'fa-wind', siteId: '395521081260500', parameterCd: '00020', tempConversion: true }
        ]
    },
    {
        name: 'West Fork Mill Creek Reservoir',
        siteId: '03256500',
        location: 'Hamilton County, OH',
        parameterCd: '62614',
        fields: [
            { key: 'waterLevel', label: 'WATER LEVEL', unit: 'ft', icon: 'fa-tint', siteId: '03256500', parameterCd: '62614', tempConversion: false }
        ]
    },
    {
        name: 'Clendening Lake',
        siteId: '03126500',
        location: 'Harrison County, OH',
        parameterCd: '62614',
        fields: [
            { key: 'waterLevel', label: 'WATER LEVEL', unit: 'ft', icon: 'fa-tint', siteId: '03126500', parameterCd: '62614', tempConversion: false },
            { key: 'outflow', label: 'OUTFLOW', unit: 'cfs', icon: 'fa-chart-line', siteId: '03126910', parameterCd: '00060', tempConversion: false },
            { key: 'waterTemp', label: 'WATER TEMPERATURE', unit: '°F', icon: 'fa-thermometer-half', siteId: '03126395', parameterCd: '00010', tempConversion: true },
            { key: 'airTemp', label: 'AIR TEMPERATURE', unit: '°F', icon: 'fa-wind', siteId: '401434081132100', parameterCd: '00020', tempConversion: true }
        ]
    },
    {
        name: 'Piedmont Lake',
        siteId: '03125500',
        location: 'Harrison County, OH',
        parameterCd: '62614',
        fields: [
            { key: 'waterLevel', label: 'WATER LEVEL', unit: 'ft', icon: 'fa-tint', siteId: '03125500', parameterCd: '62614', tempConversion: false },
            { key: 'outflow', label: 'OUTFLOW', unit: 'cfs', icon: 'fa-chart-line', siteId: '03126000', parameterCd: '00060', tempConversion: false },
            { key: 'waterTemp', label: 'WATER TEMPERATURE', unit: '°F', icon: 'fa-thermometer-half', siteId: '03125338', parameterCd: '00010', tempConversion: true },
            { key: 'airTemp', label: 'AIR TEMPERATURE', unit: '°F', icon: 'fa-wind', siteId: '401133081125300', parameterCd: '00020', tempConversion: true }
        ]
    },
    {
        name: 'Buckeye Lake',
        siteId: '395540082291600',
        location: 'Licking County, OH',
        parameterCd: '62614',
        fields: [
            { key: 'waterLevel', label: 'WATER LEVEL', unit: 'ft', icon: 'fa-tint', siteId: '395540082291600', parameterCd: '62614', tempConversion: false }
        ]
    },
    {
        name: 'Indian Lake',
        siteId: '03260500',
        location: 'Logan County, OH',
        parameterCd: '62615',
        fields: [
            { key: 'waterLevel', label: 'WATER LEVEL', unit: 'ft', icon: 'fa-tint', siteId: '03260500', parameterCd: '62615', tempConversion: false },
            { key: 'waterTemp', label: 'WATER TEMPERATURE', unit: '°F', icon: 'fa-thermometer-half', siteId: '03260500', parameterCd: '00010', tempConversion: true },
        ]
    },
    {
        name: 'Grand Lake St. Marys',
        siteId: '403204084342601',
        location: 'Mercer County, OH',
        parameterCd: '62615',
        fields: [
            { key: 'waterLevel', label: 'WATER LEVEL', unit: 'ft', icon: 'fa-tint', siteId: '403204084342601', parameterCd: '62615', tempConversion: false },
            { key: 'outflow', label: 'OUTFLOW', unit: 'cfs', icon: 'fa-chart-line', siteId: '03322485', parameterCd: '00060', tempConversion: false },
        ]
    },
    {
        name: 'Atwood Lake',
        siteId: '03121000',
        location: 'Tuscarawas County, OH',
        parameterCd: '62614',
        fields: [
            { key: 'waterLevel', label: 'WATER LEVEL', unit: 'ft', icon: 'fa-tint', siteId: '03121000', parameterCd: '62614', tempConversion: false },
            { key: 'outflow', label: 'OUTFLOW', unit: 'cfs', icon: 'fa-chart-line', siteId: '03121500', parameterCd: '00060', tempConversion: false },
            { key: 'waterTemp', label: 'WATER TEMPERATURE', unit: '°F', icon: 'fa-thermometer-half', siteId: '03120820', parameterCd: '00010', tempConversion: true },
            { key: 'airTemp', label: 'AIR TEMPERATURE', unit: '°F', icon: 'fa-wind', siteId: '403127081171000', parameterCd: '00020', tempConversion: true }
        ]
    },
    {
        name: 'Caesar Creek Lake',
        siteId: '03242340',
        location: 'Warren County, OH',
        parameterCd: '62614',
        fields: [
            { key: 'waterLevel', label: 'WATER LEVEL', unit: 'ft', icon: 'fa-tint', siteId: '03242340', parameterCd: '62614', tempConversion: false },
            { key: 'waterTemp', label: 'WATER TEMPERATURE', unit: '°F', icon: 'fa-thermometer-half', siteId: '03242350', parameterCd: '00010', tempConversion: true }
        ]
    },
    {
        name: 'Berlin Lake ',
    siteId: '03090000',
    location: 'Portage County, OH',
    parameterCd: '62615',
    fields: [
        { key: 'waterLevel', label: 'WATER LEVEL', unit: 'ft', icon: 'fa-tint', siteId: '03090000', parameterCd: '62615', tempConversion: false },
        { key: 'outflow', label: 'OUTFLOW', unit: 'cfs', icon: 'fa-chart-line', siteId: '03090500', parameterCd: '00060', tempConversion: false },
        { key: 'waterTemp', label: 'WATER TEMPERATURE', unit: '°F', icon: 'fa-thermometer-half', siteId: '03086500', parameterCd: '00010', tempConversion: true }
    ]
    },
    {
        name: 'Michael J Kirwan Reservoir',
        siteId: '03092450',
        location: 'Portage County, OH',
        parameterCd: '62615',
        fields: [
            { key: 'waterLevel', label: 'WATER LEVEL', unit: 'ft', icon: 'fa-tint', siteId: '03092450', parameterCd: '62615', tempConversion: false },
            { key: 'outflow', label: 'OUTFLOW', unit: 'cfs', icon: 'fa-chart-line', siteId: '03092460', parameterCd: '00060', tempConversion: false },
            { key: 'waterTemp', label: 'WATER TEMPERATURE', unit: '°F', icon: 'fa-thermometer-half', siteId: '03092460', parameterCd: '00010', tempConversion: true }
        ]
    },
    {
        name: 'Lake Loramie',
        siteId: '03261800',
        location: 'Shelby County, OH',
        parameterCd: '62615',
        fields: [
            { key: 'waterLevel', label: 'WATER LEVEL', unit: 'ft', icon: 'fa-tint', siteId: '03261800', parameterCd: '62615', tempConversion: false }
        ]
    },  
    {
        name: 'Mosquito Creek Lake',
        siteId: '03095000',
        location: 'Trumbull County, OH',
        parameterCd: '62615',
        fields: [
            { key: 'waterLevel', label: 'WATER LEVEL', unit: 'ft', icon: 'fa-tint', siteId: '03095000', parameterCd: '62615', tempConversion: false },
            { key: 'outflow', label: 'OUTFLOW', unit: 'cfs', icon: 'fa-chart-line', siteId: '03095500', parameterCd: '00060', tempConversion: false },
            { key: 'waterTemp', label: 'WATER TEMPERATURE', unit: '°F', icon: 'fa-thermometer-half', siteId: '03095500', parameterCd: '00010', tempConversion: true } 
        
        ]
    },
    {
        name: 'Milton Reservoir',
        siteId: '03091000',
        location: 'Mahoning County, OH',
        parameterCd: '62615',
        fields: [
            { key: 'waterLevel', label: 'WATER LEVEL', unit: 'ft', icon: 'fa-tint', siteId: '03091000', parameterCd: '62615', tempConversion: false },
            { key: 'outflow', label: 'OUTFLOW', unit: 'cfs', icon: 'fa-chart-line', siteId: '03091500', parameterCd: '00060', tempConversion: false },
            { key: 'waterTemp', label: 'WATER TEMPERATURE', unit: '°F', icon: 'fa-thermometer-half', siteId: '03095500', parameterCd: '00010', tempConversion: true } 
        ]
    },
    {
        name: 'Whitney Point Lake',
        siteId: '01511000',
        location: 'Broome County, NY',
        parameterCd: '62615',
        fields: [
            { key: 'waterLevel', label: 'WATER LEVEL', unit: 'ft', icon: 'fa-tint', siteId: '01511000', parameterCd: '62615', tempConversion: false }
            
            
        ]
    },
    {
        name: 'Owasco Lake',
        siteId: '04235396',
        location: 'Cayuga County, NY',
        parameterCd: '62615',
        fields: [
            { key: 'waterLevel', label: 'WATER LEVEL', unit: 'ft', icon: 'fa-tint', siteId: '04235396', parameterCd: '62615', tempConversion: false }
        ]
    },
    {
        name: 'Chautauqua Lake',
        siteId: '03013946',
        location: 'Chautauqua County, NY',
        parameterCd: '62615',
        fields: [
            { key: 'waterLevel', label: 'WATER LEVEL', unit: 'ft', icon: 'fa-tint', siteId: '03013946', parameterCd: '62615', tempConversion: false }
        ]
    },
    {
        name: 'Richelieu R (Lake Champlain)',
    siteId: '04295000',
    location: 'Clinton County, NY',
    parameterCd: '62615',
    fields: [
        { key: 'waterLevel', label: 'WATER LEVEL', unit: 'ft', icon: 'fa-tint', siteId: '04295000', parameterCd: '62615', tempConversion: false },
        { key: 'waterTemp', label: 'WATER TEMPERATURE', unit: '°F', icon: 'fa-thermometer-half', siteId: '04295000', parameterCd: '00010', tempConversion: true }
    ]
    },
    {
        name: 'Cannonsville Reservoir',
        siteId: '01423910',
        location: 'Delaware County, NY',
        parameterCd: '62615',
        fields: [
            { key: 'waterLevel', label: 'WATER LEVEL', unit: 'ft', icon: 'fa-tint', siteId: '01423910', parameterCd: '62615', tempConversion: false }
        ]
    },
    {
        name: 'East Sidney Lake',
        siteId: '01499500',
        location: 'Delaware County, NY',
        parameterCd: '62615',
        fields: [
            { key: 'waterLevel', label: 'WATER LEVEL', unit: 'ft', icon: 'fa-tint', siteId: '01499500', parameterCd: '62615', tempConversion: false }
        ]
    },
    {
        name: 'Pepacton Reservoir',
        siteId: '01414750',
        location: 'Cayuga County, NY',
        parameterCd: '62615',
        fields: [
            { key: 'waterLevel', label: 'WATER LEVEL', unit: 'ft', icon: 'fa-tint', siteId: '01414750', parameterCd: '62615', tempConversion: false }
        ]
    },
    {
        name: 'Lake Champlain',
        siteId: '04294413',
        location: 'Essex County, NY',
        parameterCd: '62615',
        fields: [
            { key: 'waterLevel', label: 'WATER LEVEL', unit: 'ft', icon: 'fa-tint', siteId: '04294413', parameterCd: '62615', tempConversion: false }
        ]
    },
    {
        name: 'Lake George',
        siteId: '04278000',
        location: 'Essex County, NY',
        parameterCd: '62615',
        fields: [
            { key: 'waterLevel', label: 'WATER LEVEL', unit: 'ft', icon: 'fa-tint', siteId: '04278000', parameterCd: '62615', tempConversion: false }
        ]
    },
    {
        name: 'Sixth Lake',
        siteId: '04253300',
        location: 'Hamilton County, NY',
        parameterCd: '62615',
        fields: [
            { key: 'waterLevel', label: 'WATER LEVEL', unit: 'ft', icon: 'fa-tint', siteId: '04253300', parameterCd: '62615', tempConversion: false }
        ]
    },
    {
        name: 'First Lake',
        siteId: '04253400',
        location: 'Herkimer County, NY',
        parameterCd: '62615',
        fields: [
            { key: 'waterLevel', label: 'WATER LEVEL', unit: 'ft', icon: 'fa-tint', siteId: '04253400', parameterCd: '62615', tempConversion: false }
        ]
    },
    {
        name: 'Stillwater Reservoir',
        siteId: '04256500',
        location: 'Herkimer County, NY',
        parameterCd: '62615',
        fields: [
            { key: 'waterLevel', label: 'WATER LEVEL', unit: 'ft', icon: 'fa-tint', siteId: '04256500', parameterCd: '62615', tempConversion: false }
        ]
    },  
    {
        name: 'Conesus Lake',
        siteId: '04227980',
        location: 'Livingston County, NY',
        parameterCd: '62615',
        fields: [
            { key: 'waterLevel', label: 'WATER LEVEL', unit: 'ft', icon: 'fa-tint', siteId: '04227980', parameterCd: '62615', tempConversion: false }
        ]
    },
    {
        name: 'Hempstead Lake',
        siteId: '0131079450',
        location: 'Nassau County, NY',
        parameterCd: '62615',
        fields: [
            { key: 'waterLevel', label: 'WATER LEVEL', unit: 'ft', icon: 'fa-tint', siteId: '0131079450', parameterCd: '62615', tempConversion: false }
        ]
    },
    {
        name: 'Hinckley Reservoir',
        siteId: '01343900',
        location: 'Oneida County, NY',
        parameterCd: '62615',
        fields: [
            { key: 'waterLevel', label: 'WATER LEVEL', unit: 'ft', icon: 'fa-tint', siteId: '01343900', parameterCd: '62615', tempConversion: false }
        ]
    },
    {
        name: 'Onondaga CR at Flood Ctrl Dam',
        siteId: '04238500',
        location: 'Onondaga County, NY',
        parameterCd: '62615',
        fields: [
            { key: 'waterLevel', label: 'WATER LEVEL', unit: 'ft', icon: 'fa-tint', siteId: '04238500', parameterCd: '62615', tempConversion: false }
        ]
    },
    {
        name: 'Onondaga Lake',
        siteId: '04240495',
        location: 'Onondaga County, NY',
        parameterCd: '62615',
        fields: [
            { key: 'waterLevel', label: 'WATER LEVEL', unit: 'ft', icon: 'fa-tint', siteId: '04240495', parameterCd: '62615', tempConversion: false }
        ]
    },
    {
        name: 'Baisley Pond',
        siteId: '01311820',
        location: 'Queens County, NY',
        parameterCd: '62615',
        fields: [
            { key: 'waterLevel', label: 'WATER LEVEL', unit: 'ft', icon: 'fa-tint', siteId: '01311820', parameterCd: '62615', tempConversion: false }
        ]
    },
    {
        name: 'Conselyeas Pond',
        siteId: '01311815',
        location: 'Queens County, NY',
        parameterCd: '62615',
        fields: [
            { key: 'waterLevel', label: 'WATER LEVEL', unit: 'ft', icon: 'fa-tint', siteId: '01311815', parameterCd: '62615', tempConversion: false }
        ]
    },
    {
        name: 'Springfield Park Pond',
        siteId: '01311816',
        location: 'Queens County, NY',
        parameterCd: '62615',
        fields: [
            { key: 'waterLevel', label: 'WATER LEVEL', unit: 'ft', icon: 'fa-tint', siteId: '01311816', parameterCd: '62615', tempConversion: false }
        ]
    },
    {
        name: 'Clove Lake',
        siteId: '01376547',
        location: 'Richmond County, NY',
        parameterCd: '62614',
        fields: [
            { key: 'waterLevel', label: 'WATER LEVEL', unit: 'ft', icon: 'fa-tint', siteId: '01376547', parameterCd: '62614', tempConversion: false }
        ]
    },
    {
        name: 'Ohrback Lake',
        siteId: '01376531',
        location: 'Richmond County, NY',
        parameterCd: '62614',
        fields: [
            { key: 'waterLevel', label: 'WATER LEVEL', unit: 'ft', icon: 'fa-tint', siteId: '01376531', parameterCd: '62614', tempConversion: false }
        ]
    },
    {
        name: 'Great Sacandaga Lake',
        siteId: '01323500',
        location: 'Saratoga County, NY',
        parameterCd: '62614',
        fields: [
            { key: 'waterLevel', label: 'WATER LEVEL', unit: 'ft', icon: 'fa-tint', siteId: '01323500', parameterCd: '62614', tempConversion: false }
        ]
    },
    {
        name: 'Saratoga Lake',
        siteId: '01330884',
        location: 'Saratoga County, NY',
        parameterCd: '62614',
        fields: [
            { key: 'waterLevel', label: 'WATER LEVEL', unit: 'ft', icon: 'fa-tint', siteId: '01330884', parameterCd: '62614', tempConversion: false }
        ]
    },
    {
        name: 'Schoharie Reservoir',
        siteId: '01350100',
        location: 'Schoharie County, NY',
        parameterCd: '62615',
        fields: [
            { key: 'waterLevel', label: 'WATER LEVEL', unit: 'ft', icon: 'fa-tint', siteId: '01350100', parameterCd: '62615', tempConversion: false }
        ]
    },
    {
        name: 'Almond Lake',
        siteId: '01523000',
        location: 'Steuben County, NY',
        parameterCd: '62615',
        fields: [
            { key: 'waterLevel', label: 'WATER LEVEL', unit: 'ft', icon: 'fa-tint', siteId: '01523000', parameterCd: '62615', tempConversion: false }
        ]
    },
    {
        name: 'Arkport Reservoir',
        siteId: '01521000',
        location: 'Steuben County, NY',
        parameterCd: '62615',
        fields: [
            { key: 'waterLevel', label: 'WATER LEVEL', unit: 'ft', icon: 'fa-tint', siteId: '01521000', parameterCd: '62615', tempConversion: false }
        ]
    },
    {
        name: 'Georgica Pond',
        siteId: '01304705',
        location: 'Suffolk County, NY',
        parameterCd: '62615',
        fields: [
            { key: 'waterLevel', label: 'WATER LEVEL', unit: 'ft', icon: 'fa-tint', siteId: '01304705', parameterCd: '62615', tempConversion: false }
        ]
    },
    {
        name: 'Laurel Lake',
        siteId: '01304250',
        location: 'Suffolk County, NY',
        parameterCd: '62615',
        fields: [
            { key: 'waterLevel', label: 'WATER LEVEL', unit: 'ft', icon: 'fa-tint', siteId: '01304250', parameterCd: '62615', tempConversion: false }
        ]
    },
    {
        name: 'Neversink Reservoir',
        siteId: '01435900',
        location: 'Sullivan County, NY',
        parameterCd: '62615',
        fields: [
            { key: 'waterLevel', label: 'WATER LEVEL', unit: 'ft', icon: 'fa-tint', siteId: '01435900', parameterCd: '62615', tempConversion: false }
        ]
    },  
    {
        name: 'Cayuga Inlet (Cayuga Lake)',
        siteId: '04233500',
        location: 'Tompkins County, NY',
        parameterCd: '62615',
        fields: [
            { key: 'waterLevel', label: 'WATER LEVEL', unit: 'ft', icon: 'fa-tint', siteId: '04233500', parameterCd: '62615', tempConversion: false }
        ]
    },  
    {
        name: 'Lake Champlain North',
        siteId: '04279085',
        location: 'Washington County, NY',
        parameterCd: '62615',
        fields: [
            { key: 'waterLevel', label: 'WATER LEVEL', unit: 'ft', icon: 'fa-tint', siteId: '04279085', parameterCd: '62615', tempConversion: false }
        ]
    },
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

const IV_API_URL = 'https://waterservices.usgs.gov/nwis/iv/';
const DV_API_URL = 'https://waterservices.usgs.gov/nwis/dv/';

// DOM Elements
const launchScreen = document.getElementById('launchScreen');
const mainContent = document.getElementById('mainContent');
const lakeSearch = document.getElementById('lakeSearch');
const searchResults = document.getElementById('searchResults');
const favoritesList = document.getElementById('favoritesList');
const backButton = document.getElementById('backButton');
const favoriteButton = document.getElementById('favoriteButton');

// Search functionality
lakeSearch.addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    if (searchTerm.length < 2) {
        searchResults.style.display = 'none';
        return;
    }

    const results = lakes.filter(lake =>
        lake.name?.toLowerCase().includes(searchTerm) ||
        lake.location?.toLowerCase().includes(searchTerm)
    );

    displaySearchResults(results);
});

function createLakeCard(lake, lakeData = null) {
    const isFavorite = favorites.some(fav => fav.siteId === lake.siteId);
    const div = document.createElement('div');
    div.className = 'lake-card';
    
    // Build data grid dynamically based on lake fields
    let dataGridHTML = '<div class="lake-data-grid">';
    
    if (lake.fields) {
        lake.fields.forEach(field => {
            const data = lakeData?.[field.key] || { value: '--', unit: field.unit };
            dataGridHTML += `
                <div class="lake-data-item">
                    <div class="lake-data-label">
                        <i class="fas ${field.icon} lake-data-icon ${field.key}"></i>
                        <span class="lake-data-label-text">${field.label}</span>
                    </div>
                    <div class="lake-data-value">
                        ${data.value}
                        <span class="lake-data-unit">${data.unit}</span>
                    </div>
                </div>
            `;
        });
    }
    dataGridHTML += '</div>';
    
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
        ${dataGridHTML}
    `;
    
    div.addEventListener('click', () => selectLake(lake));

    const heartButton = div.querySelector('.lake-card-heart');
    heartButton.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleFavorite(lake);
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
        const apiUrl = IV_API_URL;
        
        const result = {};
        
        // Fetch data for each field the lake has
        if (lake.fields) {
            const requests = lake.fields.map(field =>
                fetch(`${apiUrl}?format=json&sites=${field.siteId}&parameterCd=${field.parameterCd}&startDT=${formatDate(startDate)}&endDT=${formatDate(endDate)}&siteStatus=all`)
            );
            
            const responses = await Promise.all(requests);
            const dataList = await Promise.all(responses.map(r => r.json()));
            
            lake.fields.forEach((field, index) => {
                const data = dataList[index];
                if (data.value.timeSeries && data.value.timeSeries.length > 0) {
                    const values = data.value.timeSeries[0].values[0].value;
                    if (values.length > 0) {
                        let currentValue = parseFloat(values[values.length - 1].value);
                        
                        if (field.tempConversion) {
                            currentValue = (currentValue * 9/5) + 32;
                            result[field.key] = { 
                                value: currentValue.toFixed(0), 
                                unit: field.unit 
                            };
                        } else if (field.key === 'outflow') {
                            result[field.key] = { 
                                value: currentValue.toFixed(1), 
                                unit: field.unit 
                            };
                        } else {
                            result[field.key] = { 
                                value: currentValue.toFixed(2), 
                                unit: field.unit 
                            };
                        }
                    }
                }
            });
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
    
    const favoriteLakes = lakes.filter(lake => favorites.some(fav => fav.siteId === lake.siteId));
    const otherLakes = lakes.filter(lake => !favorites.some(fav => fav.siteId === lake.siteId));
    
    for (const lake of favoriteLakes) {
        const lakeData = await fetchLakeCurrentData(lake);
        const card = createLakeCard(lake, lakeData);
        favoritesList.appendChild(card);
    }
    
    if (allLakesList) {
        for (const lake of otherLakes) {
            const lakeData = await fetchLakeCurrentData(lake);
            const card = createLakeCard(lake, lakeData);
            allLakesList.appendChild(card);
        }
    }
}

function updateFavoriteButton() {
    if (!currentLake) return;
    const isFavorite = favorites.some(fav => fav.siteId === currentLake.siteId);
    favoriteButton.className = `favorite-button-detail ${isFavorite ? 'favorited' : ''}`;
}

// Detail view: Dynamic metric tabs
function createMetricTabs() {
    if (!currentLake) return;
    
    const container = document.getElementById('metricTabsContainer');
    container.innerHTML = '';
    
    const availableMetrics = getAvailableMetrics(currentLake);
    
    // Dynamically set grid columns based on number of metrics
    container.style.gridTemplateColumns = `repeat(${Math.min(availableMetrics.length, 4)}, 1fr)`;
    
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
    
    const field = getFieldForLake(currentLake, activeMetric);
    if (!field) return;
    
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
                document.getElementById('currentValueNumber').textContent = displayValue.toFixed(field.tempConversion ? 0 : (field.key === 'outflow' ? 1 : 2));
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
    let values = data.map(item => parseFloat(item.value));
    
    if (field.tempConversion) {
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
                label: field.label,
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
                legend: { display: false },
                tooltip: {
                    mode: 'index',
                    intersect: false,
                    padding: 8,
                    titleFont: { size: 12, family: "'Courier New', Courier, monospace" },
                    bodyFont: { size: 12, family: "'Courier New', Courier, monospace" },
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
                        font: { size: 10, family: "'Courier New', Courier, monospace" },
                        color: 'rgba(255, 255, 255, 0.4)'
                    }
                },
                x: {
                    grid: { display: false },
                    ticks: {
                        font: { size: 10, family: "'Courier New', Courier, monospace" },
                        color: 'rgba(255, 255, 255, 0.4)',
                        maxTicksLimit: days <= 7 ? 7 : 10
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

// Lake selection
function selectLake(lake) {
    currentLake = lake;
    launchScreen.style.display = 'none';
    mainContent.style.display = 'block';
    
    document.getElementById('lakeName').textContent = lake.name;
    document.getElementById('lakeLocation').textContent = lake.location;
    document.getElementById('detailSiteId').textContent = lake.siteId;
    
    const isFavorite = favorites.some(fav => fav.siteId === lake.siteId);
    favoriteButton.className = `favorite-button-detail ${isFavorite ? 'favorited' : ''}`;
    
    activeMetric = getAvailableMetrics(lake)[0];
    currentTimeRangeDays = 7;
    
    createMetricTabs();
    loadDetailViewData();
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

// Favorite button
favoriteButton.addEventListener('click', () => {
    if (currentLake) {
        toggleFavorite(currentLake);
        const isFavorite = favorites.some(fav => fav.siteId === currentLake.siteId);
        favoriteButton.className = `favorite-button-detail ${isFavorite ? 'favorited' : ''}`;
    }
});

// Chart label dropdown functionality
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

// Initialize function
async function initialize() {
    launchScreen.style.display = 'flex';
    mainContent.style.display = 'none';
    currentLake = null;
    await updateFavoritesList();
}

// Initialize when DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    initialize();
    setupChartLabelDropdown();
});