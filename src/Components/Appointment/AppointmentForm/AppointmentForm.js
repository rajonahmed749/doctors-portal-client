import React from 'react';
import Modal from 'react-modal';
import { useForm } from "react-hook-form";

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};
Modal.setAppElement('#root');

const AppointmentForm = ({modalIsOpen , closeModal, appointmentOn, date}) => {
    const { register, handleSubmit,formState: { errors } } = useForm();
    const onSubmit = data =>{
        console.log(data);
         data.service =appointmentOn;
         data.date = date;
         data.created = new Date();

        fetch('http://localhost:5000/addAppointment', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(success =>{
            if(success){
                alert("connceted successfully");
                closeModal();   
            }
        })
        .catch((error) => {
            console.error('Error:', error);
          });
        
        
}
    return (
        <div>
 
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
                >
                <h2 className="text-brand text-center">{appointmentOn}</h2>
                <p className="text-center text-secondary"><small>ON {date.toDateString()}</small></p>
           
                 <form className="p-5" onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group">
                        <input type="text" name="name" placeholder="Your Name" className="form-control" {...register("name", { required: true })} />
                        {errors.name && <span className="text-danger">This field is required</span>}
                    </div>
                    <div className="form-group">
                        <input type="text" name="phone" placeholder="Phone Number" className="form-control" {...register("phone", { required: true })}/>
                        {errors.phone && <span className="text-danger">This field is required</span>}
                    </div>
                    <div className="form-group">
                        <input type="text" name="email" placeholder="Email" className="form-control" {...register("email", { required: true })}/>
                        {errors.email && <span className="text-danger">This field is required</span>}
                    </div>
                    <div className="form-group row">
                        <div className="col-4">
                            <select className="form-control" name="gender" {...register("gender", { required: true })}>
                                <option disabled={true} value="Not set">Select Gender</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Not set">Other</option>
                            </select>
                            {errors.gender && <span className="text-danger">This field is required</span>}
                        </div>
                        <div className="col-4">
                            <input className="form-control" name="age" placeholder="Your Age" type="number" {...register("age", { required: true })}/>
                            {errors.age && <span className="text-danger">This field is required</span>}
                        </div>
                        <div className="col-4">
                            <input className="form-control" name="weight" placeholder="Weight" type="number" {...register("weight", { required: true })}/>
                            {errors.weight && <span className="text-danger">This field is required</span>}
                        </div>
                    </div>

                    <div className="form-group text-right">
                        <button type="submit" className="btn btn-brand">Send</button>
                    </div>

                    {/* <button onClick={closeModal}>close</button> */}
                </form>
            </Modal>           
        </div>
    );
};
export default AppointmentForm;