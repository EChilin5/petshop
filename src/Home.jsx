import React from 'react'
import PetCard from './PetCard'
import "./Home.css"
import spypet from './images/petspy.png'

const Home = () => {

    const list = [1,2,3,4,5,6,7,8,9]

    // Secret agent data
const spyAgents = [
  {
    id: 1,
    name: 'Max',
    codename: 'GOLDEN THUNDER',
    breed: 'Golden Retriever',
    specialty: 'Explosive Detection & Coastal Infiltration',
    rank: 'LIEUTENANT',
    location: 'San Francisco, CA',
    image: 'https://images.unsplash.com/photo-1615233500064-caa995e2f9dd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb2xkZW4lMjByZXRyaWV2ZXIlMjBwdXBweXxlbnwxfHx8fDE3NzU1Njg5NDJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Friendly and energetic golden retriever who loves to play fetch and go for long walks.',
    category: 'dog',
    missionsCompleted: 47,
    stealthRating: 8,
  },
  {
    id: 2,
    name: 'Luna',
    codename: 'SHADOW WHISKER',
    breed: 'Tabby Cat',
    specialty: 'Silent Surveillance & Rooftop Navigation',
    rank: 'SPECIALIST',
    location: 'Los Angeles, CA',
    image: 'https://images.unsplash.com/photo-1622070338539-f86345f216e5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0YWJieSUyMGNhdCUyMGtpdHRlbnxlbnwxfHx8fDE3NzU2ODg4NTV8MA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Sweet and playful kitten who loves cuddles and chasing toy mice.',
    category: 'cat',
    missionsCompleted: 63,
    stealthRating: 10,
  },
  {
    id: 3,
    name: 'Charlie',
    codename: 'TRACKER PRIME',
    breed: 'Beagle',
    specialty: 'Scent Tracking & Evidence Recovery',
    rank: 'SERGEANT',
    location: 'Seattle, WA',
    image: 'https://images.unsplash.com/photo-1608113239836-1ccb7c8ce02e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWFnbGUlMjBkb2clMjBzaXR0aW5nfGVufDF8fHx8MTc3NTY4ODg1Nnww&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Loyal beagle with a great nose and even better personality. Great with kids!',
    category: 'dog',
    missionsCompleted: 82,
    stealthRating: 7,
  },
  {
    id: 4,
    name: 'Bella',
    codename: 'VELVET PHANTOM',
    breed: 'Persian',
    specialty: 'High Society Infiltration & Intel Gathering',
    rank: 'CAPTAIN',
    location: 'Portland, OR',
    image: 'https://images.unsplash.com/photo-1599907370836-939f2d59b897?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJzaWFuJTIwY2F0JTIwZmx1ZmZ5fGVufDF8fHx8MTc3NTYwMzE3M3ww&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Elegant Persian cat with a calm demeanor. Loves quiet afternoons and gentle petting.',
    category: 'cat',
    missionsCompleted: 91,
    stealthRating: 9,
  },
  {
    id: 5,
    name: 'Rocky',
    codename: 'ARCTIC GHOST',
    breed: 'Siberian Husky',
    specialty: 'Cold Weather Ops & Endurance Missions',
    rank: 'CORPORAL',
    location: 'Denver, CO',
    image: 'https://images.unsplash.com/photo-1715213352213-2ecde1f4279a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxodXNreSUyMHB1cHB5JTIwYmx1ZSUyMGV5ZXN8ZW58MXx8fHwxNzc1NTkxODQ4fDA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Energetic husky with beautiful blue eyes. Needs an active family and plenty of exercise.',
    category: 'dog',
    missionsCompleted: 34,
    stealthRating: 6,
  },
  {
    id: 6,
    name: 'Oliver',
    codename: 'COPPER STRIKE',
    breed: 'Orange Tabby',
    specialty: 'Urban Reconnaissance & Asset Protection',
    rank: 'VETERAN',
    location: 'Austin, TX',
    image: 'https://images.unsplash.com/photo-1667518157438-05eccbadb225?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcmFuZ2UlMjB0YWJieSUyMGNhdHxlbnwxfHx8fDE3NzU2ODg4NTd8MA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Laid-back orange tabby who enjoys sunbathing and occasional play sessions.',
    category: 'cat',
    missionsCompleted: 128,
    stealthRating: 8,
  },
  {
    id: 7,
    name: 'Cooper',
    codename: 'TIDAL FORCE',
    breed: 'Chocolate Labrador',
    specialty: 'Water Rescue & Maritime Surveillance',
    rank: 'COMMANDER',
    location: 'Boston, MA',
    image: 'https://images.unsplash.com/photo-1610919399248-7032a7a0017e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYWJyYWRvciUyMHJldHJpZXZlciUyMGNob2NvbGF0ZXxlbnwxfHx8fDE3NzU2ODg4NTd8MA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Gentle and well-trained chocolate lab. Perfect family dog who loves swimming.',
    category: 'dog',
    missionsCompleted: 156,
    stealthRating: 7,
  },
  {
    id: 8,
    name: 'Mia',
    codename: 'SAPPHIRE EYES',
    breed: 'Siamese',
    specialty: 'Psychological Ops & Distraction Tactics',
    rank: 'MAJOR',
    location: 'Miami, FL',
    image: 'https://images.unsplash.com/photo-1743560769534-1f8abb6acb9a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaWFtZXNlJTIwY2F0JTIwcG9ydHJhaXR8ZW58MXx8fHwxNzc1Njg4ODU3fDA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Talkative Siamese cat with striking blue eyes. Very social and loves attention.',
    category: 'cat',
    missionsCompleted: 103,
    stealthRating: 9,
  },
];

    const goToSection = () => {
    document
      .getElementById("contact")
      .scrollIntoView({
        behavior: "smooth"
      });
  };


  return (
    <div className='home-main'>
        <div className='home-hero'>
            <img className="spypetimg" src={spypet} alt="spy pet"/>
          
            <p className='hero-heading'>Security Clearance: Top Secret</p>
           <h1 className='hero-title'>Recruit Elite Field Agents</h1>
            <div>
                <p className='hero-description'>The P.A.W.S Agency (Paws and Whiskers Survelience) needs operatives.
                Browse our roster of highly trained feline and canine operatives</p>
            </div>
            <div><button className='hero-btn-agent'  onClick={goToSection}>View Agent Roster</button></div>
        </div>
        {/* <div>
            <button>All Units</button>
            <button>🐕 k9 Division</button>
            <button>🐱 Feline OPS</button>
        </div>   */}
        <section id="contact">
        <div className='pet-container'>
            {list.map(map=>{
                return <div key={map} className='pet-item' ><PetCard/> </div>
            })}
        </div>
        </section>
    </div>
  )
}

export default Home