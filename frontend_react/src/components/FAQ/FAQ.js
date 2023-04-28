import React from 'react'

import './FAQ.css'

const FAQ = () => {

     const tempFAQs = [
          {
               que: "What is image classification ?",
               ans: "Image classification is the process of assigning a label or category to an input image. It is a fundamental problem in computer vision, with numerous real-world applications."
          },
          {
               que: "How does image classification work ?",
               ans: "Image classification works by training a model on a dataset of labeled images. The model learns to recognize patterns in the images and then uses these patterns to predict the labels of new, unseen images."
          },
          {
               que: "What are some applications of image classification ?",
               ans: "Some applications of image classification include object recognition, face recognition, medical imaging, and self-driving cars."
          },
          {
               que: "What are some challenges of image classification ?",
               ans: "Image classification models can face challenges such as data bias, overfitting, and adversarial attacks. Data bias can occur when the dataset used to train the model is not representative of the real world. Overfitting occurs when the model memorizes the training data and performs poorly on new, unseen data. Adversarial attacks are deliberate attempts to deceive the model by adding small perturbations to the input image."
          },
          {
               que: "What are some techniques used in image classification ?",
               ans: "Deep learning methods, particularly convolutional neural networks (CNNs), are commonly used for image classification. Other techniques include feature extraction and traditional machine learning algorithms."
          },
          {
               que: "What is a convolutional neural network (CNN) ?",
               ans: "A convolutional neural network is a type of deep learning model that is commonly used for image classification. It works by applying a series of convolutional filters to the input image, which extract features from the image. These features are then passed through a series of fully connected layers to make the final classification."
          },
          {
               que: "How can I train an image classification model ?",
               ans: "Training an image classification model involves several steps. First, you need to collect and label a dataset of images. Then, you can use a deep learning framework such as TensorFlow or PyTorch to define and train your model. You will need to tune the hyperparameters of your model, such as the learning rate and batch size, to achieve good performance."
          },
          {
               que: "What is transfer learning ?",
               ans: "Transfer learning is a technique that involves using a pre-trained model as a starting point for a new image classification task. The pre-trained model has already learned to recognize features in images, so it can be fine-tuned on a new dataset to achieve good performance with less training data."
          },
     ]

     return (
          <div className='faq-container'>
               <h1 className='faq-title'>Frequently Asked Questions</h1>
               <div className='faqs'>
                    {tempFAQs.map((item, index) => (
                         <div className='faq-individual' id={"faq-" + index}>
                              <div className='question-container'>
                                   <p>{item.que}</p>
                                   <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#ffffff" class="bi bi-chevron-down faq-dropdwon-arrow" viewBox="0 0 16 16" id={"faqOpener-" + index} onClick={() => {
                                        if (document.getElementById("faqOpener-" + index).style.transform === "rotate(-180deg)") {
                                             document.getElementById("faq-" + index).style.maxHeight = '30px'
                                             document.getElementById("faqOpener-" + index).style.transform = 'rotate(0deg)'
                                        }
                                        else {
                                             document.getElementById("faq-" + index).style.maxHeight = 'fit-content'
                                             document.getElementById("faqOpener-" + index).style.transform = 'rotate(-180deg)'
                                        }
                                   }}>
                                        <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
                                   </svg>
                              </div>
                              <div className='answer-container'>
                                   <p>{item.ans}</p>
                              </div>
                         </div>
                    ))}
               </div>
          </div>
     )
}

export default FAQ