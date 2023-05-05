import React, { Component } from 'react';
import Dropzone from 'react-dropzone';
import './Classifier.css'
import { Spinner, Button, Alert, Image } from 'react-bootstrap'
import axios from 'axios'

class Classifier extends Component {
    state = {
        files: [],
        isLoading: false,
        recentImage: null,
    }

    onDrop = (files) => {
        this.setState({
            files: [],
            isLoading: true,
            recentImage: null,
        })
        this.loadImage(files)
    }

    loadImage = (files) => {
        setTimeout(() => {
            this.setState({
                files,
                isLoading: false,
            }, () => {
                console.log(this.state.files)
            })
        }, 1000)
    }

    activateSpinner = () => {
        this.setState({
            files: [],
            isLoading: true,
        })
    }

    deactivateSpinner = () => {
        this.setState({ isLoading: false })
    }

    sendImage = () => {
        this.activateSpinner()
        let formData = new FormData()
        formData.append('picture', this.state.files[0], this.state.files[0].name)

        axios.post('http://127.0.0.1:8000/api/image/create/', formData, {
            headers: {
                'accept': 'application/json',
                'content-type': 'multipart/form-data'

            }
        }).then(resp => {
            this.getImageClass(resp)
            console.log(resp)
        }).catch(err => {
            console.log(err)
        })
    }

    getImageClass = (obj) => {
        axios.get(`http://127.0.0.1:8000/api/image/${obj.data.id}`, {
            headers: {
                'accept': 'application/json',
            }
        }).then(resp => {
            this.setState({ recentImage: resp })
            console.log(resp)
        }).catch(err => {
            console.log(err)
        })
        this.deactivateSpinner()
    }


    render() {

        const files = this.state.files.map(file => (
            <li key={file.name}>
                {file.name} - {file.size} bytes
            </li>
        ));


        return (
            <>
                <div className='w-full text-left container my-5'>
                    <h1 className='text-2xl text-white font-bold px-10'>What it does?</h1>
                    <p className='text-[#00bfff] text-lg font-bold my-3 px-10'>It can classify images of any different kind of objects for example, animals, bugs, different objects which are used in day-to-day life like chair, laptop, phone, sofa/couch, bag etc...</p>
                    <div className='text-center'>
                        <p className='text-xl text-white font-bold mb-3 tracking-widest'>Examples</p>
                    </div>
                    <div className='grid grid-cols-3 gap-x-10 px-10'>
                        <div className='w-fit mx-auto flex flex-col items-center gap-y-5'>
                            <div className='min-w-[22rem] h-52 rounded-xl overflow-hidden'>
                                <img src='https://images.pexels.com/photos/567540/pexels-photo-567540.jpeg?auto=compress&cs=tinysrgb&w=1080' alt='' className='w-full h-full object-cover' />
                            </div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="#fff" className="bi bi-arrow-down-circle-fill" viewBox="0 0 16 16">
                                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z" />
                            </svg>
                            <div className='min-w-[22rem] h-52 rounded-xl overflow-hidden bg-[#00bfff] flex items-center justify-center'>
                                <p className='text-2xl font-bold text-black'>African Chameleon</p>
                            </div>
                        </div>
                        <div className='w-fit mx-auto flex flex-col items-center gap-y-5'>
                            <div className='min-w-[22rem] h-52 rounded-xl overflow-hidden'>
                                <img src='https://images.pexels.com/photos/39362/the-ball-stadion-football-the-pitch-39362.jpeg?auto=compress&cs=tinysrgb&w=1080' alt='' className='w-full h-full object-cover' />
                            </div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="#fff" className="bi bi-arrow-down-circle-fill" viewBox="0 0 16 16">
                                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z" />
                            </svg>
                            <div className='min-w-[22rem] h-52 rounded-xl overflow-hidden bg-[#00bfff] flex items-center justify-center'>
                                <p className='text-2xl font-bold text-black'>Soccer Ball</p>
                            </div>
                        </div>
                        <div className='w-fit mx-auto flex flex-col items-center gap-y-5'>
                            <div className='min-w-[22rem] h-52 rounded-xl overflow-hidden'>
                                <img src='https://images.pexels.com/photos/3757055/pexels-photo-3757055.jpeg?auto=compress&cs=tinysrgb&w=1080' alt='' className='w-full h-full object-cover' />
                            </div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="#fff" className="bi bi-arrow-down-circle-fill" viewBox="0 0 16 16">
                                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z" />
                            </svg>
                            <div className='min-w-[22rem] h-52 rounded-xl overflow-hidden bg-[#00bfff] flex items-center justify-center'>
                                <p className='text-2xl font-bold text-black'>Studio Couch</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-full text-left container' style={{ margin: "100px auto" }}>
                    <h1 className='text-2xl text-white font-bold px-10'>What it doesn't?</h1>
                    <p className='text-[#00bfff] text-lg font-bold my-3 px-10'>It can not classify images of humans, fictional characters or random images like certificates. It can somewhat classify the images which are in above category, for example, if you upload an image of any human wearing a coat/suit etc. It can identify that.</p>
                    <div className='text-center'>
                        <p className='text-xl text-white font-bold mb-3 tracking-widest'>Examples</p>
                    </div>
                    <div className='grid grid-cols-3 gap-x-10 px-10'>
                        <div className='w-fit mx-auto flex flex-col items-center gap-y-5'>
                            <div className='min-w-[22rem] max-w-[22rem] h-52 rounded-xl overflow-hidden'>
                                <img src='/img/IE1.jpeg' alt='' className='w-full h-full object-cover' />
                            </div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="#fff" className="bi bi-arrow-down-circle-fill" viewBox="0 0 16 16">
                                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z" />
                            </svg>
                            <div className='min-w-[22rem] h-52 rounded-xl overflow-hidden bg-[#00bfff] flex items-center justify-center'>
                                <p className='text-2xl font-bold text-black'>Can't Classify The Image</p>
                            </div>
                        </div>
                        <div className='w-fit mx-auto flex flex-col items-center gap-y-5'>
                            <div className='min-w-[22rem] max-w-[22rem] h-52 rounded-xl overflow-hidden'>
                                <img src='/img/IE2.jpeg' alt='' className='w-full h-full object-cover' />
                            </div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="#fff" className="bi bi-arrow-down-circle-fill" viewBox="0 0 16 16">
                                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z" />
                            </svg>
                            <div className='min-w-[22rem] h-52 rounded-xl overflow-hidden bg-[#00bfff] flex items-center justify-center'>
                                <p className='text-2xl font-bold text-black'>Can't Classify The Image</p>
                            </div>
                        </div>
                        <div className='w-fit mx-auto flex flex-col items-center gap-y-5'>
                            <div className='min-w-[22rem] max-w-[22rem] h-52 rounded-xl overflow-hidden'>
                                <img src='/img/IE3.jpeg' alt='' className='w-full h-full object-cover' />
                            </div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="#fff" className="bi bi-arrow-down-circle-fill" viewBox="0 0 16 16">
                                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z" />
                            </svg>
                            <div className='min-w-[22rem] h-52 rounded-xl overflow-hidden bg-[#00bfff] flex items-center justify-center'>
                                <p className='text-2xl font-bold text-black'>Can't Classify The Image</p>
                            </div>
                        </div>
                    </div>
                </div>
                <Dropzone onDrop={this.onDrop} accept='image/png, image/jpeg'>
                    {({ isDragActive, getRootProps, getInputProps }) => (
                        <section className="container" style={{ marginBottom: "20px" }}>
                            <div {...getRootProps({ className: 'dropzone back' })}>
                                <input {...getInputProps()} />
                                <i className="far fa-image mb-2" style={{ fontSize: 100, color: "#fff" }}></i>
                                <p className='' >{isDragActive ? 'Drop an image' : 'Drag and drop some files here, or click to select files'}</p>
                            </div>
                            <aside style={{ color: "#fff", fontWeight: "700" }}>
                                {files}
                            </aside>

                            {this.state.files.length > 0 &&
                                <Button variant='info' size='lg' className='mt-3 select-image-btn' onClick={this.sendImage}>Select Image</Button>
                            }

                            {this.state.isLoading &&
                                <Spinner animation="border" role="status">
                                    <span className="sr-only">Loading...</span>
                                </Spinner>
                            }
                            {this.state.recentImage &&
                                <React.Fragment>
                                    <Image className='justify-content-center mb-2 w-fit h-40 mx-auto object-contain !rounded-xl !overflow-hidden' src={"http://127.0.0.1:8000" + this.state.recentImage.data.picture}
                                        height='200' rounded />
                                    <Alert variant='primary' style={{
                                        backgroundColor: "#000",
                                        borderColor: "#000",
                                        color: "#fff",
                                        fontWeight: "700",
                                        textTransform: "capitalize"
                                    }}>
                                        {this.state.recentImage.data.classified === "" ? "Can't classify the image" : this.state.recentImage.data.classified.replace(/_/g, ' ')}
                                        {/* {this.state.recentImage.data.classified.replace(/_/g, ' ')} */}
                                    </Alert>
                                </React.Fragment>
                            }


                        </section>
                    )}
                </Dropzone>
            </>
        );
    }
}

export default Classifier;

