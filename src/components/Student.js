import React, {useState} from 'react'

const Student = () => {
    var [name,setName]=useState("Rahul")
    var [age,setAge]=useState("32")
    const newValues =() =>{
      setName(
    name="irene"
      )
    setAge(
    age="23"
    )
    }
  return (
    <div><div className="container">
    <div className="row">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row g-3">
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label for="" className="form-label">Name</label>
                    <br></br>
                    <label for="" className="form-label">{name}</label>
                    
                </div>
                <div className="col col-12 col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label for="" className="form-label">age</label>
                    <br></br>
                    <label for="" className="form-label">{age}</label> 
                     
                </div>
                <div className="col col-12 col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label for="" className="form-label">college</label> 
                    <br></br>
                    <label for="" className="form-label">Mount Zion College of Enginearing</label>
                    
                </div>
                <div className="col col-12 col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <button onClick={newValues} className="btn btn-success">change</button>
                </div>
              
            </div>
        </div>

    </div>
</div></div>
  )
}

export default Student