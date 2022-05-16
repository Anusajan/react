import React from 'react'
import Navbar from './Navbar'

const Registerpage = () => {
  return (
    <div>
        <Navbar/>

<div className="container">
    <div className="row">
    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
               <div className="row g-2">
                   <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label for="" className="label-form">name</label>
                    <input type="text" className="form-control"/>
                   </div>
                   <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                       <label for="" className="form-label">rollno</label>
                       <input type="text" className="form-control"/>
                   </div>
                   <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label for="" className="form-label">admission no</label>
                    <input type="text" className="form-control"/>
                   </div>
                   <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label for="" className="form-label">mobile number</label> 
                    <input type="text" className="form-control"/>

                   </div>
                   <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label for="" className="label-form">college</label>
                    <input type="text" className="form-control"/></div>
                   <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label for="" className="label-form">username</label>
                    <input type="text" className="form-control"/>  
                   </div>
                   <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label for="" className="label-form">password</label>
                    <input type="text" className="form-control"/>     
                   </div>
                   <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                     <button className="btn btn-success">register</button>

                   </div>
                  
               </div>
           </div>
    </div>
</div>
    </div>
  )
}

export default Registerpage