import React from 'react'
import './Modal.css'
function Modal() {
    return (
        <div className="modal fade" id="learnMore1" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                    <div className="modal-body">
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>

                        <div className="container">
                            <div className="row">
                                <div className="col-sm-8 text-center">
                                    <img src="http://numbots.com/wp-content/uploads/2018/12/Fairybot-with-shadow.png" alt="" className="img-fluid" />
                                </div>
                                <div className="col-sm-4 align-self-center">
                                    <h5 className="intro-title">intro title</h5>
                                    <h3>TITLE</h3>
                                    <p>Some other content, some other content</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Modal