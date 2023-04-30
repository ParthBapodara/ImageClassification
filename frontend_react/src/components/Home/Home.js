import React from 'react'

import "./Home.css"

const Home = () => {
     return (
          <>
               <div className='home-container'>
                    <div className='home-left-side'>
                         <div className='home-left-input-content'>
                              <div className='home-image-container'>
                                   <img src="https://images.pexels.com/photos/1480913/pexels-photo-1480913.jpeg?auto=compress&cs=tinysrgb&w=600" className='home-image' />
                              </div>
                              <p>Input Image</p>
                         </div>
                         <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="#ffffff" class="bi bi-arrow-right-circle-fill" viewBox="0 0 16 16">
                              <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" />
                         </svg>
                         <div className='home-right-result-content'>
                              <div className='result'>
                                   <p>Pomeranian</p>
                              </div>
                              <p>Resultant Category</p>
                         </div>
                    </div>
                    <div className='home-right-side'>
                         <h1 className='home-title'>Pomeranian</h1>
                         <p>A Pomeranian is a small, toy breed of dog that typically weighs between 3 and 7 pounds. They have a thick, fluffy double coat that can come in a variety of colors, including orange, cream, sable, and black. Their small, pointed ears stand erect, and their eyes are round and dark. Pomeranians have a short snout and a cute, fox-like face.</p>
                         <p>Pomeranians are known for being playful, energetic, and affectionate. They are intelligent dogs that can be trained easily, but may have a stubborn streak. Due to their small size and adaptability, they make great pets for people living in apartments or small homes. Pomeranians are also social dogs that enjoy being around their owners and thrive on attention.</p>
                         <a href="/classification">Try Now</a>
                    </div>
               </div>
               <div className='home-info-container'>
                    <h1>Image Classification</h1>
                    <p>Image classification is a process of assigning one or multiple categories or labels to an image based on its visual content. This is typically done using machine learning algorithms that have been trained on a large dataset of labeled images. The goal of image classification is to accurately identify the object(s) or scene(s) depicted in an image. The process of image classification involves several steps, including preprocessing the image data, selecting and training an appropriate machine learning model, fine-tuning the model for optimal performance, and evaluating its accuracy and performance on a test dataset. There are many practical applications of image classification, including object recognition in photos and videos, facial recognition, content-based image retrieval, and medical imaging analysis. It is an important area of research in computer vision and artificial intelligence, with many ongoing efforts to improve the accuracy and efficiency of image classification algorithms.</p>
               </div>

               <div className='home-container' style={{ flexDirection: 'row-reverse', backgroundColor: 'deepskyblue' }}>
                    <div className='home-left-side'>
                         <div className='home-left-input-content'>
                              <div className='home-image-container'>
                                   <img src="https://images.pexels.com/photos/7752793/pexels-photo-7752793.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className='home-image' />
                              </div>
                              <p style={{ color: "#000" }}>Input Image</p>
                         </div>
                         <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="#000000" class="bi bi-arrow-right-circle-fill" viewBox="0 0 16 16">
                              <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" />
                         </svg>
                         <div className='home-right-result-content'>
                              <div className='result' style={{ backgroundColor: '#000' }}>
                                   <p style={{ color: "#fff" }}>Golden Retriever</p>
                              </div>
                              <p style={{ color: "#000" }}>Resultant Category</p>
                         </div>
                    </div>
                    <div className='home-right-side'>
                         <h1 className='home-title' style={{ color: "#000" }}>Golden Retriever</h1>
                         <p style={{ color: "#000" }}>Golden Retrievers are a medium to large-sized breed of dog that originated in Scotland. They are known for their lustrous, golden coat, which is thick and water-repellent. Their coat can range in shades from light cream to deep red, but all variations have a distinct feathering on the legs, tail, and chest.</p>
                         <p style={{ color: "#000" }}>Golden Retrievers have a friendly and intelligent expression, with dark, round eyes that convey a sense of warmth and kindness. They have a broad skull and a powerful, muscular build that is balanced by a gentle, wagging tail.</p>
                         <p style={{ color: "#000" }}>As a breed, Golden Retrievers are known for their affectionate and loyal nature. They are intelligent and easy to train, which makes them a popular choice as service dogs or as family pets.</p>
                         <a href="/classification">Try Now</a>
                    </div>
               </div>
          </>
     )
}

export default Home