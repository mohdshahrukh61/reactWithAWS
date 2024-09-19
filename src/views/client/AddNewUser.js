import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CForm,
  CFormInput,
  CFormLabel,
  CRow,
  CFormTextarea,
} from '@coreui/react'

const AddNewUser = () => {
  const [data, setData] = React.useState({})
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);


  const handleSubmit = (e) => {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    const dataObj = {
      companyName: data.get('companyName'),
      companyAddress: data.get('companyAddress'),
      phoneno: data.get('phoneno'),
      emailid: data.get('emailid'),
    }
    console.log(dataObj)
    setData(dataObj)
    setIsLoaded(true);
    postData(dataObj)
  }
  
 
  //post data into api using axios
  const postData = async (datas) => {
    const response = await axios.post(
      'https://b9pjduz6s2.execute-api.ap-south-1.amazonaws.com/Ptc/addcompany',
      JSON.stringify(datas),
    )
    console.log(response)
    if (response.status === 200) {
      if (response.data === 'successfully created') {
        alert('User Added Successfully')
      }
      setIsLoaded(true);
    }
  }
  useEffect(() => {
    postData(false);
  }, [])

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } 

  return (
    <>
      <CCard>
        <CCardHeader>
          Create User Information
          <CButton color="noborder" size="sm" style={{ float: 'right' }}></CButton>
        </CCardHeader>
        <CCardBody>
          <CRow>
            <CForm onSubmit={handleSubmit} className="row g-3 needs-validation">
              <CCol xs="6" sm="6">
                <CFormLabel htmlFor="floatingInput"> Name</CFormLabel>
                <CFormInput type="text" name="companyName" id="floatingInput" />
              </CCol>

              <CCol xs="6" sm="6">
                <CFormLabel htmlFor="floatingInput">Email Id</CFormLabel>
                <CFormInput type="text" name="emailid" id="floatingInput" required/>
              </CCol>

              <CCol xs="6" sm="6">
                <CFormLabel htmlFor="floatingInput">Phone No.</CFormLabel>
                <CFormInput type="text" name="phoneno" id="floatingInput" required />
              </CCol>
            
              <CCol xs="6" sm="6">
                <CFormLabel htmlFor="floatingInput">Address</CFormLabel>
                <CFormTextarea aria-label="With textarea" name="companyAddress"></CFormTextarea>
              </CCol>
                 <CCol xs="12" sm="12">
                <CButton color="primary" type="submit" size="sm">          
                  Submit        
                </CButton>
              </CCol>
            </CForm>
          </CRow>
        </CCardBody>
      </CCard>
    </>
  )
}

export default AddNewUser
