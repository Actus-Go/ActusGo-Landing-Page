import React from 'react'

import SignIN from '../../components/auth/SignIn/SignInForm'

function signup( {formData, andleChange} ) {
  return (
    <div className="min-h-screen mx-auto grid place-items-center text-center px-8">
      <SignIN
      formData={ formData }
      handleChange=  { andleChange }
      />
      </div>
  )
}

export default signup