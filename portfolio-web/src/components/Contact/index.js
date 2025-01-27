import { useRef } from 'react'
import './index.scss'
import Loader from 'react-loaders'
import emailjs from '@emailjs/browser'

const Contact = () => {
    const formRef = useRef()
    const sendEmail = (e) => {
        e.preventDefault()

        emailjs
        .sendForm(
            'service_pv2m8jo',
            'template_3s3686r',
            formRef.current,
            'sz8tZo8_i4XO6OzCe'
        )
        .then( () => {
            alert('Message successfully sent!')
            window.location.reload(false)
        },
        (error) => {
            alert(error.message)
            alert('Failed to send the message, please try again.')
        })
    }

    return (
        <>
        <div className='container contact-page'>
            <div className='text-zone'>
                <h1 className="text-hover">Contact Me</h1>
                <p>
                    I am currently working as an <b>Experience Designer Co-op at the Ministry of Public and Business Service Delivery and Procurement in Toronto, Ontario,</b> but am interested in data analysis and data science opportunities. In a landscape that is always changing,
                    it's important to stay connected. If you are hiring, would like to discuss career opportunities in tech or just want to
                    chat, feel free to reach out, <br/><br/> Thank you for your time, <br/><br/> Regards, <br/> Ali Sher
                </p>
                <div className='contact-form'>
                    <form ref={formRef} onSubmit={sendEmail}>
                        <ul>
                            <li className='half'>
                                <input type='text' name='from_name' placeholder='Name' required/>
                            </li>
                            <li className='half'>
                                <input type='email' name='from_email' placeholder='Email' required/>
                            </li>
                            <li>
                                <input type='text' name='subject' placeholder="Subject" required/>
                            </li>
                            <li>
                                <textarea name='message' placeholder='Message'></textarea>
                            </li>
                            <li>
                                <input type='submit' className='flat-button' value="SEND" />
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
        </div>
        <Loader type="square-spin" />
        </>
    )
}

export default Contact