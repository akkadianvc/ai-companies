import React, { useState, useMemo } from 'react';

const data = [
  {name:"Hugging Face",f:395.2,h:367,y:2016,s:"D",r:6,c:"B2B",i:["Comm & IT"],w:20213708,rv:70},
  {name:"Anduril Industries",f:3417.0,h:2497,y:2017,s:"E",r:12,c:"B2G",i:["Aerospace & defense"],w:201488,rv:500},
  {name:"insitro",f:825.4,h:302,y:2018,s:"C",r:5,c:"B2B",i:["Life sciences"],w:45308,rv:7.5},
  {name:"Scale AI",f:1605.1,h:3695,y:2016,s:"F",r:9,c:"B2B",i:["Industrial","Comm & IT"],w:330551,rv:760},
  {name:"OpenAI",f:11330.1,h:2322,y:2015,s:"SM",r:10,c:"B2G",i:["Business","Comm & IT","Social"],w:1705467153,rv:850},
  {name:"Synthesia",f:158.5,h:371,y:2017,s:"C",r:6,c:"B2B",i:["Comm & IT","Business"],w:2458995,rv:5},
  {name:"Cresta",f:156.0,h:261,y:2017,s:"C",r:4,c:"B2B",i:["Comm & IT"],w:57419,rv:35},
  {name:"Anyscale",f:259.6,h:580,y:2019,s:"C",r:4,c:"B2C",i:["Comm & IT"],w:187007,rv:13},
  {name:"Vannevar Labs",f:91.1,h:128,y:2019,s:"B",r:3,c:"B2G",i:["Aerospace & defense"],w:11972,rv:25},
  {name:"Owkin",f:329.1,h:446,y:2016,s:"B",r:7,c:"B2B",i:["Life sciences"],w:30622,rv:101.4},
  {name:"Anthropic",f:5754.0,h:753,y:2021,s:"B",r:5,c:"B2B",i:["Life sciences","Consulting"],w:4552827,rv:850},
  {name:"Cohere",f:890.0,h:640,y:2019,s:"C",r:5,c:"B2C",i:["Education","Finance","Comm & IT","Life sciences"],w:534202,rv:35},
  {name:"DeepL",f:400.2,h:1175,y:2017,s:"VU",r:3,c:"B2B",i:["Comm & IT"],w:250002034,rv:30},
  {name:"Sana",f:85.1,h:204,y:2016,s:"B",r:6,c:"B2B",i:["Business"],w:49214,rv:9.8},
  {name:"Traction AI",f:0,h:2,y:2020,s:"VU",r:0,c:"B2B",i:["Business"],w:2008,rv:null},
  {name:"Writer",f:126.0,h:746,y:2020,s:"B",r:3,c:"B2B",i:["Business"],w:1942113,rv:99.6},
  {name:"Figure",f:845.0,h:124,y:2022,s:"B",r:3,c:"B2B",i:["Industrial"],w:372397,rv:28},
  {name:"LangChain",f:35.0,h:43,y:2023,s:"A",r:2,c:"B2B",i:["Comm & IT"],w:3281332,rv:null},
  {name:"Mistral AI",f:894.8,h:99,y:2023,s:"B",r:3,c:"B2B",i:["Comm & IT"],w:2990157,rv:65},
  {name:"Pika",f:135.0,h:28,y:2023,s:"B",r:4,c:"B2C",i:["Comm & IT"],w:2245156,rv:null},
  {name:"Abridge",f:204.6,h:106,y:2018,s:"C",r:8,c:"B2C",i:["Life sciences"],w:77554,rv:7.6},
  {name:"Codeium",f:65.0,h:46,y:null,s:"B",r:1,c:"B2C",i:["Comm & IT"],w:1164036,rv:36},
  {name:"Adept",f:415.0,h:34,y:2022,s:"B",r:2,c:"B2C",i:["Comm & IT"],w:57671,rv:10},
  {name:"Together AI",f:232.5,h:87,y:2022,s:"A",r:4,c:"B2B",i:["Life sciences","Comm & IT"],w:327581,rv:44},
  {name:"Weaviate",f:67.7,h:73,y:2019,s:"B",r:3,c:"B2B",i:["Comm & IT"],w:509767,rv:16},
  {name:"Character.AI",f:150.0,h:143,y:2021,s:"A",r:2,c:"B2C",i:["Comm & IT"],w:198307234,rv:0},
  {name:"Pinecone",f:138.0,h:212,y:2019,s:"B",r:3,c:"B2B",i:["Comm & IT"],w:868988,rv:16},
  {name:"Databricks",f:4181.6,h:8713,y:2013,s:"I",r:11,c:"B2B",i:["Comm & IT"],w:3540354,rv:1600},
  {name:"Tome",f:75.3,h:66,y:2020,s:"B",r:3,c:"B2B",i:["Comm & IT","Business"],w:3318541,rv:5},
  {name:"Midjourney",f:null,h:44,y:2021,s:"VU",r:null,c:null,i:["Education"],w:17675475,rv:null},
  {name:"Sierra",f:110.0,h:52,y:2023,s:"C",r:1,c:"B2B",i:["Comm & IT"],w:117023,rv:null},
  {name:"Perplexity",f:165.4,h:104,y:2022,s:"B",r:4,c:null,i:["Comm & IT"],w:52531932,rv:20},
  {name:"unstructured.io",f:68.2,h:61,y:2022,s:"B",r:3,c:"B2B",i:["Comm & IT"],w:66627,rv:12},
  {name:"Harvey",f:110.8,h:50,y:2022,s:"B",r:3,c:"B2B",i:["Business"],w:168326,rv:10},
  {name:"Glean",f:355.3,h:503,y:2019,s:"D",r:4,c:"B2B",i:["Business","Comm & IT"],w:611223,rv:39},
  {name:"Kumo.AI",f:54.5,h:57,y:2021,s:"B",r:3,c:"B2B",i:["Comm & IT","Business"],w:13605,rv:null},
  {name:"Waabi",f:282.7,h:142,y:2021,s:"B",r:2,c:"B2B",i:["Comm & IT","Industrial"],w:24156,rv:19.5},
  {name:"Baseten",f:72.8,h:40,y:2019,s:"B",r:4,c:"B2B",i:["Comm & IT"],w:108616,rv:2.7},
  {name:"Notion",f:411.6,h:877,y:2016,s:"C",r:6,c:"B2B",i:["Business","Comm & IT"],w:164430889,rv:67.2},
  {name:"Cradle",f:29.5,h:59,y:2021,s:"A",r:2,c:"B2B",i:["Life sciences"],w:28721,rv:5.3},
  {name:"Cerebras Systems",f:720.0,h:359,y:2016,s:"F",r:6,c:"B2B",i:["Finance","Energy","Comm & IT"],w:107144,rv:1000},
  {name:"AssemblyAI",f:158.1,h:112,y:2017,s:"C",r:6,c:"B2B",i:["Comm & IT"],w:604202,rv:5},
  {name:"Hebbia AI",f:124.1,h:69,y:2020,s:"B",r:3,c:"B2B",i:["Business","Finance"],w:28775,rv:null},
  {name:"Anthropic",f:5754.0,h:753,y:2021,s:"B",r:5,c:"B2B",i:["Life sciences","Consulting"],w:4552827,rv:850},
  {name:"Stability AI",f:648.0,h:200,y:2020,s:"A",r:2,c:"B2B",i:["AI","Image Gen"],w:1500000,rv:45},
  {name:"Inflection AI",f:1525.0,h:100,y:2022,s:"B",r:2,c:"B2B",i:["AI","ML"],w:500000,rv:20},
  {name:"Replit",f:265.2,h:150,y:2016,s:"B",r:4,c:"B2B",i:["Software Dev","EdTech"],w:10000000,rv:30}
];

const formatCurrency = (value) => value ? `$${value.toFixed(1)}M` : 'N/A';

const Dashboard = () => {
  const [filter, setFilter] = useState({year: 'All', stage: 'All', customer: 'All'});

  const filteredData = useMemo(() => data.filter(company => 
    (filter.year === 'All' || company.y === parseInt(filter.year)) &&
    (filter.stage === 'All' || company.s === filter.stage) &&
    (filter.customer === 'All' || company.c === filter.customer)
  ), [filter]);

  const uniqueValues = useMemo(() => ({
    years: [...new Set(data.map(c => c.y))].sort((a, b) => b - a),
    stages: [...new Set(data.map(c => c.s))],
    customers: [...new Set(data.map(c => c.c))]
  }), []);

  return (
    <div style={{fontFamily: 'Arial, sans-serif', padding: '20px'}}>
      <h1 style={{textAlign: 'center'}}>AI Companies Dashboard</h1>
      <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '20px'}}>
        {Object.entries(filter).map(([key, value]) => (
          <div key={key}>
            <label>{key.charAt(0).toUpperCase() + key.slice(1)}: </label>
            <select value={value} onChange={(e) => setFilter(prev => ({...prev, [key]: e.target.value}))}>
              <option value="All">All</option>
              {uniqueValues[key + 's']?.map(v => <option key={v} value={v}>{v}</option>)}
            </select>
          </div>
        ))}
      </div>
      <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '20px'}}>
        {filteredData.map(company => (
          <div key={company.name} style={{border: '1px solid #ddd', borderRadius: '8px', padding: '15px'}}>
            <h3 style={{margin: '0 0 10px'}}>{company.name}</h3>
            <p><strong>Funding:</strong> {formatCurrency(company.f)}</p>
            <p><strong>Revenue:</strong> {formatCurrency(company.rv)}</p>
            <p><strong>Headcount:</strong> {company.h}</p>
            <p><strong>Web Traffic:</strong> {company.w.toLocaleString()}</p>
            <p><strong>Founded:</strong> {company.y || 'N/A'}</p>
            <p><strong>Stage:</strong> {company.s}</p>
            <p><strong>Customer:</strong> {company.c || 'N/A'}</p>
            <p><strong>Industry:</strong> {company.i.join(', ')}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
