import useLoginForm from '@/components/pages/Login/form/useLoginForm'

import { St } from './style'
import { useRouter } from 'next/router'

import { useModalActions, useModalStore } from '@/store/modal'
import { LOGIN_INITIAL_VALUES, LOGIN_VALIDATION } from '@/constants'
import { LOGIN_FORM, IMAGE_ADDRESS } from '@/constants'

const LoginForm = () => {
  const router = useRouter()
  const goSignupPage = () => {
    router.push('/signup')
  }
  const isOpen = useModalStore()
  const { closeModal } = useModalActions()

  const {
    values,
    emailFlagCheck,
    handleEmailFlagCheck,
    errorMsg,
    handleInputChange,
    submitLoginForm,
  } = useLoginForm({
    initialValues: LOGIN_INITIAL_VALUES,
    validate: LOGIN_VALIDATION,
  })

  return (
    <St.Section onSubmit={submitLoginForm}>
      <St.Form>
        {LOGIN_FORM.map(({ label, id, type, placeholder, name }, idx) => (
          <div key={idx}>
            <St.Input
              id={id}
              type={type}
              placeholder={placeholder}
              name={name}
              value={values[name]}
              onChange={(e) => handleInputChange(e.target.name, e.target.value)}
            />
          </div>
        ))}

        <button type="submit">로그인</button>
      </St.Form>
    </St.Section>
  )
}

export default LoginForm
