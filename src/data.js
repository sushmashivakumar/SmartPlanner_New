export const Data = [
    {"id": "1000","features": "BSP Integration","function_owner":"Aravind","function": "Integration","domain":"Linux Driver","status": "ON", "mode":"Medium", "milestone":"PO","date":"","category": "Accessories","feature_owner": "Horizontal","estimation_type":"HC","q1":1, "q2":0.25, "q3":0.5, "q4":1},
    {"id": "1001","features": "Triage/CI","function": "Integration", "function_owner":"Aravind","domain":"Linux Driver","status": "ON","mode":"Medium", "milestone":"A1","date":"","category": "Accessories","feature_owner": "Horizontal","estimation_type":"HC","q1":1, "q2":0.25, "q3":0.5, "q4":1},
    {"id": "1002","features": "Kernel","function": "Kernel","function_owner":"Paul Mei","domain":"Linux Driver","status": "ON","mode":"Medium", "milestone":"PRQ","date":"","category": "Fitness","feature_owner": "Validation", "estimation_type":"HC","q1":1, "q2":0.25, "q3":0.5, "q4":1},
    {"id": "1003","features": "Integration","function": "Integration","function_owner":"Aravind","domain":"Windows Server","status": "ON","mode":"Medium", "milestone":"ES","date":"","category": "Clothing","feature_owner": "Validation","estimation_type":"HC","q1":1, "q2":0.25, "q3":0.5, "q4":1},
    {"id": "1004","features": "Triage/CI","function": "Integration","function_owner":"Aravind","domain":"Windows Server","status": "ON","mode":"Medium", "milestone":"A0","date":"","category": "Accessories","feature_owner": "Validation","estimation_type":"HC","q1":1, "q2":0.25, "q3":0.5, "q4":1},
    {"id": "1005","features": "Q&R","function": "Core Team","function_owner":"Ravi","domain":"Core Team","status": "ON","mode":"Medium","milestone":"B0","date":"","category": "Accessories","feature_owner": "Validation","estimation_type":"HC","q1":1, "q2":0.25, "q3":0.5, "q4":1},
    {"id": "1006","features": "Remote Board Farm HC","function": "ADA","function_owner":"Dinesh","domain":"ADA","status": "ON","mode":"Medium","milestone":"Alpha","date":"","category": "Accessories","feature_owner": "Development","estimation_type":"BTI","q1":1, "q2":0.25, "q3":0.5, "q4":1},
    {"id": "1007","features": "DevOps HC - Windows Server","function": "ADA","function_owner":"Dinesh","domain":"ADA","status": "ON","mode":"Medium","milestone":"Beta","date":"","category": "Accessories","feature_owner": "Development","estimation_type":"BTI","q1":1, "q2":0.25, "q3":0.5, "q4":1},
    {"id": "1008","features": "Automation Framework HC - Yocto","function": "ADA","function_owner":"Dinesh","domain":"ADA","status": "ON","mode":"Medium","milestone":"PV","date":"","category": "Electronics","feature_owner":"Development","rating": 4,"estimation_type":"BTI","q1":1, "q2":0.25, "q3":0.5, "q4":1},
    {"id": "1009","features": "Automation Framework HC - Windows Server","function": "ADA","function_owner":"Dinesh","domain":"ADA","status": "ON","mode":"Medium","milestone":"PO","date":"","category": "Electronics","feature_owner": "Development","estimation_type":"BTI","q1":1, "q2":0.25, "q3":0.5, "q4":1}
]

export const SummaryData = [
    {
        'id':1,
        'models':'SW-Development',
        'hc':'$3,386',
        'bti':'$7,159',
        'hardware_resources':'$7,159'
    },
    {
        'id':2,
        'models':'SW-Validation',
        'hc':'$3,386',
        'bti':'$7,159',
        'hardware_resources':'$7,159'
    },
    {
        'id':3,
        'models':'SW-Horizontal',
        'hc':'$3,386',
        'bti':'$7,159',
        'hardware_resources':'$7,159'
    },
    {
        'id':3,
        'models':'Total',
        'hc':'$3,386',
        'bti':'$7,159',
        'hardware_resources':'$7,159'
    },
]

export const SummaryColumns = [
    {
        field: "models", header: "Models" ,
    },
    {
        field: "hc", header: "HC" ,
    },
    {
        field: "bti", header: "BTI" ,
    },
    {
        field: "hardware_resources", header: "Hardware Resources" ,
    },
]

export const PMOData = [
    {
        'milestone_id':1,
        'milestone':'Date',
        'popl-2':'04/05/2022',
        'popl-3':'05/05/2022',
        'po':'05/05/2022',
        'es':'05/05/2022',
        'ao':'05/05/2022',
        'bo':'05/05/2022',
        'alpha':'05/05/2022',
        'beta':'05/05/2022',
        'prq':'25/05/2022',
        'pv':'29/05/2022',
       
    },
  
]

export const PMOColumns = [
    // {
    //     field: "milestone", header: "Milestone" ,
    // },
    {
        field: "popl_2", header: "POPL1-2" ,
    },
    {
        field: "popl_3", header: "POPL1-3" ,
    },
    {
        field: "po", header: "PO" ,
    },
    // {
    //     field: "es", header: "ES" ,
    // },
    {
        field: "ao", header: "A0" ,
    },
    {
        field: "bo", header: "B0" ,
    },
    {
        field: "alpha", header: "Alpha" ,
    },
    {
        field: "beta", header: "Beta" ,
    },
    {
        field: "prq", header: "PRQ" ,
    },
    {
        field: "pv", header: "PV" ,
    },
]
