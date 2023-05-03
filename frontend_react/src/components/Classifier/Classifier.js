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
                                    {this.state.recentImage.data.classified.replace(/_/g, ' ')}
                                </Alert>
                            </React.Fragment>
                        }


                    </section>
                )}
            </Dropzone>

        );
    }
}

export default Classifier;

