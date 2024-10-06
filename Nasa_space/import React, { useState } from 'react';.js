import React, { useState } from 'react';
import { Button } from "./components/ui/button"
import { Input } from "./components/ui/input"
import { Textarea } from "./components/ui/textarea"
import { Card, CardHeader, CardContent } from "./components/ui/card"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import './App.css';

const climateSampleData = [
  { year: 2015, emissions: 35.5 },
  { year: 2016, emissions: 35.8 },
  { year: 2017, emissions: 36.2 },
  { year: 2018, emissions: 36.8 },
  { year: 2019, emissions: 37.1 },
  { year: 2020, emissions: 35.9 },
  { year: 2021, emissions: 36.3 },
];

const App = () => {
  const [activeSection, setActiveSection] = useState('about');
  const [name, setName] = useState('');
  const [story, setStory] = useState('');
  const [submittedStories, setSubmittedStories] = useState([]);

  const handleNavClick = (section) => {
    setActiveSection(section);
  };

  const handleStorySubmit = (e) => {
    e.preventDefault();
    if (name.trim() !== "" && story.trim() !== "") {
      setSubmittedStories([...submittedStories, { name, story }]);
      setName('');
      setStory('');
      alert('Your story has been submitted successfully!');
    } else {
      alert('Please fill in both fields before submitting.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      {/* Header and Navigation remain unchanged */}
      <header className="bg-green-600 text-white p-6 text-center">
        <h1 className="text-4xl font-bold mb-2">Climate Data Visualization</h1>
        <p className="text-xl mb-4">Visualizing our planet's future through data.</p>
        <Button onClick={() => handleNavClick('about')}>Get Started</Button>
      </header>

      <nav className="bg-green-500 p-4">
        <div className="flex justify-center space-x-4">
          {['about', 'features', 'demo', 'news', 'story'].map((section) => (
            <Button
              key={section}
              onClick={() => handleNavClick(section)}
              variant={activeSection === section ? "secondary" : "ghost"}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </Button>
          ))}
        </div>
      </nav>

      <main className="container mx-auto mt-8 p-4">
        {/* About, Features, and Demo sections remain unchanged */}
        {activeSection === 'about' && (
          <section className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold mb-4">About the Project</h2>
            <p className="mb-4">The Climate Data Visualization App is a comprehensive platform designed to educate users about greenhouse gas (GHG) emissions and their socioeconomic impacts. This app features an engaging and user-friendly interface that guides visitors through various sections, promoting awareness and action towards climate change.</p>
          </section>
        )}

{activeSection === 'features' && (
          <section className="bg-white rounded-lg shadow-md p-6" style={{
            backgroundImage: "url('https://i.pinimg.com/564x/8d/3f/d8/8d3fd81ca78dacf8dedb8c10e7e66660.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            color: "white"
          }}>
            <h2 className="text-2xl font-bold mb-4">Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="bg-opacity-75 bg-gray-800 text-white">
                <CardHeader>
                  <h3 className="text-xl font-semibold">User-Friendly Dashboard</h3>
                </CardHeader>
                <CardContent>
                  <p>Select regions and GHG types to explore data.</p>
                  <Button className="mt-4" onClick={() => window.open('https://ourworldindata.org/grapher/ghg-emissions-by-world-region', '_blank')}>Learn More</Button>
                </CardContent>
              </Card>
              <Card className="bg-opacity-75 bg-gray-800 text-white">
                <CardHeader>
                  <h3 className="text-xl font-semibold">Interactive Visualizations</h3>
                </CardHeader>
                <CardContent>
                  <p>Explore trends in GHG emissions through dynamic charts.</p>
                  <Button className="mt-4" onClick={() => window.open('https://www.earthdata.nasa.gov/learn/pathfinders/greenhouse-gases-data-pathfinder', '_blank')}>Learn More</Button>
                </CardContent>
              </Card>
              <Card className="bg-opacity-75 bg-gray-800 text-white">
                <CardHeader>
                  <h3 className="text-xl font-semibold">Comparative Analysis</h3>
                </CardHeader>
                <CardContent>
                 <p>Analyze the impact of socioeconomic factors on GHG emissions.</p>
                  <Button className="mt-4" onClick={() => window.open('https://home.dartmouth.edu/news/2022/07/study-shows-economic-impacts-greenhouse-gas-emissions', '_blank')}>Learn More</Button>
                </CardContent>
              </Card>
              <Card className="bg-opacity-75 bg-gray-800 text-white">
                <CardHeader>
                  <h3 className="text-xl font-semibold">Carbon Footprint</h3>
                </CardHeader>
                <CardContent>
                  <p>A carbon footprint is the total greenhouse gas (GHG) emissions caused directly and indirectly by an individual.</p>
                  <Button className="mt-4" onClick={() => window.open('https://css.umich.edu/publications/factsheets/sustainability-indicators/carbon-footprint-factsheet', '_blank')}>Learn More</Button>
                </CardContent>
              </Card>
            </div>
          </section>
        )}

        {activeSection === 'demo' && (
          <section className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold mb-4">Demo Section</h2>
            <p className="mb-4">Explore our interactive climate data visualization:</p>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={climateSampleData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="year" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="emissions" fill="#8884d8" />
              </BarChart>
            </ResponsiveContainer>
            <p className="mt-4">This chart shows the trend of global greenhouse gas emissions over recent years.</p>
          </section>
        )}

        {/* Updated Previous NEWS section */}
        {activeSection === 'news' && (
          <section className="rounded-lg shadow-md p-6 text-white" style={{
            backgroundImage: "url('https://cdna.artstation.com/p/assets/images/images/038/340/062/large/hashan-madhuranga-2079-the-ghost-town-the-robot-concept-art-work-the-logozty-hashan-madhuranga-3d-artist-2.jpg?1622814515')",
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}>
            <h2 className="text-3xl font-bold mb-4">Previous NEWS</h2>
            <p className="mb-6">Stay updated with the latest news on greenhouse gas emissions and climate initiatives.</p>
            
            <ul className="space-y-6">
              <li>
                <a href="https://www.thehindubusinessline.com/data-stories/data-focus/indias-greenhouse-gas-emissions-increase-since-2021/article68677953.ece" target="_blank" rel="noopener noreferrer" className="text-cyan-300 hover:underline text-xl font-semibold">
                  India's Greenhouse Gas Emissions Increase Since 2021
                </a>
                <p className="mt-2">This article discusses the recent trends in India's greenhouse gas emissions, highlighting significant increases since 2021 and the implications for climate policy.</p>
              </li>
              <li>
                <a href="https://winnipegsun.com/news/provincial/selkirk-announces-notable-improvements-to-emissions" target="_blank" rel="noopener noreferrer" className="text-cyan-300 hover:underline text-xl font-semibold">
                  Selkirk Announces Notable Improvements to Emissions
                </a>
                <p className="mt-2">Selkirk city officials have announced important steps taken to reduce emissions and improve sustainability within the community.</p>
              </li>
              <li>
                <a href="https://www.agriland.ie/farming-news/nis-agriculture-ghg-emissions-forecast-to-reduce-by-1-by-2032/" target="_blank" rel="noopener noreferrer" className="text-cyan-300 hover:underline text-xl font-semibold">
                  NI's Agriculture GHG Emissions Forecast to Reduce by 1% by 2032
                </a>
                <p className="mt-2">This piece forecasts a reduction in greenhouse gas emissions from agriculture in Northern Ireland, aiming for a 1% decrease by 2032.</p>
              </li>
              <li>
                <a href="https://unfccc.int/news/food-loss-and-waste-account-for-8-10-of-annual-global-greenhouse-gas-emissions-cost-usd-1-trillion" target="_blank" rel="noopener noreferrer" className="text-cyan-300 hover:underline text-xl font-semibold">
                  Food Loss and Waste Account for 8-10% of Annual Global Greenhouse Gas Emissions
                </a>
                <p className="mt-2">The article highlights the significant impact of food loss and waste on global greenhouse gas emissions, costing approximately USD 1 trillion annually.</p>
              </li>
              <li>
                <a href="https://energy.economictimes.indiatimes.com/news/oil-and-gas/bpcl-signs-mou-with-mumbai-port-to-develop-green-fuel-ecosystem/113900781" target="_blank" rel="noopener noreferrer" className="text-cyan-300 hover:underline text-xl font-semibold">
                  BPCL Signs MoU with Mumbai Port to Develop Green Fuel Ecosystem
                </a>
                <p className="mt-2">This news piece discusses the partnership between BPCL and Mumbai Port aimed at developing a sustainable green fuel ecosystem.</p>
              </li>
            </ul>
          </section>
        )}

        {/* Story section remains unchanged */}
        {activeSection === 'story' && (
          <section className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold mb-4">Tell Us Your Climate Story</h2>
            <form onSubmit={handleStorySubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block mb-2">Your Name:</label>
                <Input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div>
                <label htmlFor="story" className="block mb-2">Your Climate Story:</label>
                <Textarea
                  id="story"
                  rows="5"
                  value={story}
                  onChange={(e) => setStory(e.target.value)}
                  required
                />
              </div>
              <Button type="submit">Submit Your Story</Button>
            </form>

            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4">Submitted Stories</h3>
              {submittedStories.map((submittedStory, index) => (
                <Card key={index} className="mb-4">
                  <CardHeader>
                    <h4 className="font-semibold">{submittedStory.name} shared:</h4>
                  </CardHeader>
                  <CardContent>
                    <p>{submittedStory.story}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        )}
      </main>

      <footer className="bg-green-600 text-white p-4 text-center mt-8">
        <p>&copy; 2024 Climate Data Visualization App. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;