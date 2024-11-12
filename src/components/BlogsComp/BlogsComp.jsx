import React from 'react'
import BlogsCard from './BlogsCard'
import img1 from "../../assets/img1.jpg"
import img2 from "../../assets/img2.webp"
import img3 from "../../assets/img3.webp"

const BlogsData =[
  {
    id: 1,
    image: img1,
    title: "The 10 Best Places to Visit in India",
    description: "Explore India's top travel destinations, from bustling cities to serene landscapes.",
    author: "John Doe",
    date: "April, 2022",
  },
  {
    id: 2,
    image: img2,
    title: "A Guide to Japan's Cherry Blossom Season",
    description: "Everything you need to know about experiencing sakura season in Japan.",
    author: "Jane Smith",
    date: "March, 2023",
  },
  {
    id: 3,
    image: img3,
    title: "Top 5 Beaches in Thailand",
    description: "Discover the most beautiful beaches Thailand has to offer.",
    author: "Emily Johnson",
    date: "June, 2023",
  },


]

const BlogsComp = () => {
  return (
    <div>
      <div data-aos="fade-up" className='container'>
       <h1 className='my-8 border-l-8
       border-primary/50 py-2 pl-2 text-3xl 
       font-bold '>Our Latest Blogs</h1> 
       <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 
       md:grid-cols-3 '>
        {
          BlogsData.map((item, index) =>(
          <BlogsCard key={index.id} 
          {...item}/>
        ))
        }
       </div>
      </div>
    </div>
  )
}

export default BlogsComp