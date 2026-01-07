'use client'
import FooterLink from '@/components/forms/FooterLink'
import InputField from '@/components/forms/InputField'
import SelectField from '@/components/forms/SelectField'
import { Button } from '@/components/ui/button'
import { INVESTMENT_GOALS, PREFERRED_INDUSTRIES, RISK_TOLERANCE_OPTIONS } from '@/lib/constants'
import React from 'react'
import { useForm } from 'react-hook-form'

const signup = () => {

  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm<SignUpFormData>(
    {
      defaultValues: {
        fullName: '',
        email: '',
        password: '',
        country: 'India',
        investmentGoals: '',
        riskTolerance: '',
        preferredIndustry: ''
      },
      mode: 'onBlur'
    }
  )
  const onSubmit = async (data: SignUpFormData) => {
    try {

    } catch (error) {
      console.log(error, { message: error });
    }
  }

  return (
    <>
    <h1 className='form-title'> Sign Up and Personalize🎯</h1>
    <form onSubmit={handleSubmit(onSubmit)} className='space-y-5'>
      <InputField
      name = " fullName"
      label = "full Name"
      placeholder="Arun Nath"
      register={register}
      error={errors.fullName}
      validation={{required: 'true', minLength: 2}}
      />
      <InputField
        name = "email"
        label="Email"
        placeholder='conact@arun.com'
        register={register}
        error={errors.email}
        validation={{required: 'Email name is required', patterns: /^\w+@\w+\.\w+$/, message: 'Email address is required'}}
      />
      <InputField
      name='password'
      label='password'
      type='password'
      placeholder='Enter a better password'
      register={register}
      error={errors.password}
      validation={{required: 'Password is required', minLength: 8}}
      />
      <SelectField
      name ="investmentGoals"
      label="Investment Goals"
      placeholder="Select your investment goal"
      options={INVESTMENT_GOALS}
      control={control}
      error={errors.investmentGoals}
      required
      />
      <SelectField
      name ="riskTolerance"
      label="Risk Toalerance"
      placeholder="Select your risk level"
      options={RISK_TOLERANCE_OPTIONS}
      control={control}
      error={errors.riskTolerance}
      required
      />
      <SelectField
      name ="preferredIndustry"
      label="Preferred Industry"
      placeholder="Select your preferred industry"
      options={PREFERRED_INDUSTRIES}
      control={control}
      error={errors.preferredIndustry}
      required
      />


    <Button type='submit'  disabled={isSubmitting} className='yellow-btn  w-full mt-5'>
      {isSubmitting ?"Creating Account":"Start your  Investing Journey"}

    </Button>
    <FooterLink text="Already have an account?" linkText="Sign In" href="/sign-in" />
   </form>
    </>

  )
}

export default signup