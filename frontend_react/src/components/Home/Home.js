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
                                   <p>Golden Retriever</p>
                              </div>
                              <p>Resultant Category</p>
                         </div>
                    </div>
                    <div className='home-right-side'>
                         <h1 className='home-title'>Image Classification</h1>
                         <p>Image classification is the process of categorizing an image into a specific class or category based on its features or visual characteristics. It is an important task in computer vision, with applications in areas such as medical diagnosis, autonomous driving, and image search.</p>
                         <p>The process of image classification involves the use of deep learning algorithms, such as convolutional neural networks (CNNs), to automatically learn and extract features from the input images. These features are then used to train the classifier to recognize and distinguish between different classes. The accuracy of image classification depends on the quality of the dataset and the training process, as well as the complexity of the images being classified.</p>
                         <a href="/classification">Try Now</a>
                    </div>
               </div>
               <div className='home-info-container'>
                    <h1>Demo Text</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris non risus vitae leo auctor euismod non vitae arcu. Curabitur at tortor tincidunt, mollis mi sit amet, porttitor purus. Praesent maximus, arcu non ultricies venenatis, odio ex consequat diam, quis consectetur sem leo in mauris. Cras molestie dictum purus. Vivamus tincidunt, eros sit amet euismod posuere, ante eros tempor ante, tristique fermentum mi nisl vitae nunc. Nullam varius non nisi id cursus. Vivamus et nulla sapien. Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras eu ante scelerisque orci finibus lobortis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue orci eget neque faucibus, ut rhoncus velit ullamcorper. Maecenas sodales neque non fringilla cursus. Integer pharetra tincidunt malesuada. Vivamus faucibus elit mauris, eu scelerisque dolor dignissim quis. Nunc sapien ante, pretium id imperdiet vitae, iaculis bibendum diam.</p>
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
                                   <p style={{ color: "#fff" }}>Siberian Husky</p>
                              </div>
                              <p style={{ color: "#000" }}>Resultant Category</p>
                         </div>
                    </div>
                    <div className='home-right-side'>
                         <h1 className='home-title' style={{ color: "#000" }}>What Is Image Classification</h1>
                         <p style={{ color: "#000" }}>Image classification is the task of assigning a label or a category to an input image. It is a fundamental problem in computer vision, with numerous real-world applications such as object recognition, face recognition, and medical imaging.</p>
                         <p style={{ color: "#000" }}>The process of image classification involves training a model on a dataset of labeled images, and then using this model to predict the labels of new, unseen images. Deep learning methods, particularly convolutional neural networks (CNNs), have revolutionized the field of image classification, achieving state-of-the-art performance on a wide range of datasets. Despite their success, image classification models still face challenges such as data bias, overfitting, and adversarial attacks.</p>
                         <a href="/classification">Try Now</a>
                    </div>
               </div>
          </>
     )
}

export default Home