import React from 'react'
import PlacesCard from './PlacesCard'
import img1 from "../../assets/img1.jpg"
import img2 from "../../assets/img2.webp"
import img3 from "../../assets/img3.webp"
import img4 from "../../assets/img4.jpg"
import img5 from "../../assets/img5.jpeg"
import img6 from "../../assets/img6.webp"
import img7 from "../../assets/img7.jpg"
import img8 from "../../assets/img8.jpg"
import img9 from "../../assets/img9.avif"
import img10 from "../../assets/img10.jpg"

const PlacesData=[
    {
        img: img1,
        title:"Boat tour",
        location: "India",
        description : "The Taj Mahal is an ivory-white marble mausoleum on the right bank of the river Yamuna in Agra, Uttar Pradesh, India. It was commissioned in 1631 by the fifth Mughal emperor, Shah Jahan to house the tomb of his beloved wife, Mumtaz Mahal; it also houses the tomb of Shah Jahan himself.",
        price : '$6700',
        type: "Cultural Relax"
    },
    {
        img: img2,
        title: "Safari Adventure",
        location: "Kenya",
        description: "Experience the wild savannahs of Kenya with this exhilarating safari adventure, exploring the heart of African wildlife.",
        price: '$7500',
        type: "Adventure Wildlife"
    },
    {
        img: img3,
        title: "Skiing in the Alps",
        location: "Switzerland",
        description: "Enjoy the majestic views and thrilling skiing experiences in the snow-capped Swiss Alps.",
        price: '$9200',
        type: "Adventure Sport"
    },
    {
        img: img4,
        title: "Beachside Relaxation",
        location: "Maldives",
        description: "Relax on the pristine beaches of the Maldives, soaking in the sun and enjoying luxurious seaside resorts.",
        price: '$12000',
        type: "Relaxation Beach"
    },
    {
        img: img5,
        title: "Cultural Exploration",
        location: "Egypt",
        description: "Discover the ancient wonders of Egypt, including the Great Pyramids of Giza and the Sphinx, with a focus on history and culture.",
        price: '$5400',
        type: "Cultural History"
    },
    {
        img: img6,
        title: "Mountain Trekking",
        location: "Nepal",
        description: "Challenge yourself with a trek to the base camp of Mount Everest, the world's highest mountain in the Himalayas.",
        price: '$8500',
        type: "Adventure Trek"
    },
    {
        img: img7,
        title: "City of Lights",
        location: "France",
        description: "Visit Paris, the city of love and lights, famous for the Eiffel Tower, Louvre Museum, and its vibrant street life.",
        price: '$6900',
        type: "Cultural City"
    },
    {
        img: img8,
        title: "Rainforest Escape",
        location: "Brazil",
        description: "Explore the lush Amazon Rainforest in Brazil, home to thousands of exotic species of wildlife and flora.",
        price: '$7700',
        type: "Adventure Nature"
    },
    {
        img: img9,
        title: "Northern Lights Tour",
        location: "Iceland",
        description: "Witness the spectacular Northern Lights phenomenon in Iceland, along with geysers, waterfalls, and glaciers.",
        price: '$9800',
        type: "Natural Phenomena"
    },
    {
        img: img10,
        title: "Wine Tasting Experience",
        location: "Italy",
        description: "Indulge in the rich tastes of Italy’s finest wines in Tuscany, with picturesque vineyards and culinary delights.",
        price: '$6300',
        type: "Culinary Relax"
    }
]

const Places = () => {
  return (
    <div className='bg-gray-50 py-10'>
        <div className='container'>
            <h1 className='my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold'>Best Places to visit</h1>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3
            gap-4'>
                {
                    PlacesData.map((item,index)=> (
                        <PlacesCard key={index}
                        {...item} />
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default Places