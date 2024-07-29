import { useModalActions, useModalStore } from '@/store/modal'
import { FONTS } from '@/styles/font'
import styled from '@emotion/styled'
import { useRouter } from 'next/router'
import useSignupForm from './useSignupForm'
import {
  SIGNUP_FORM,
  SIGNUP_INITIAL_VALUES,
  SIGNUP_VALIDATION,
} from '@/constants'
import useDiscordOAuth from './useDiscordOAuth'
import { useEffect } from 'react'

const SignupForm = () => {
  const router = useRouter()
  const goLoginPage = () => {
    router.push('/login')
  }

  const isOpen = useModalStore()
  const { closeModal } = useModalActions()
  const { values, errorMsg, handleInputChange, submitSignupForm } =
    useSignupForm({
      initialValues: SIGNUP_INITIAL_VALUES,
      validate: SIGNUP_VALIDATION,
    })
  const { handleDiscordOAuthPopup, dsUser } = useDiscordOAuth()
  useEffect(() => {
    if (dsUser.dsId && dsUser.dsName) {
      handleInputChange('dsId', dsUser.dsId)
      handleInputChange('dsName', dsUser.dsName)
    }
  }, [dsUser])

  return (
    <Section onSubmit={submitSignupForm}>
      <Form>
        {SIGNUP_FORM.map(({ label, id, type, placeholder, name }, idx) => (
          <InputWrapper key={idx}>
            <InputLabel>{label}</InputLabel>
            <Input
              id={id}
              type={type}
              placeholder={placeholder}
              name={name}
              style={{ width: name == 'dsName' ? '14rem' : '20rem' }}
              value={values[name]}
              onChange={(e) => handleInputChange(e.target.name, e.target.value)}
            />
          </InputWrapper>
        ))}

        <button>회원가입</button>
      </Form>
      <Link onClick={goLoginPage}> 로그인</Link>
    </Section>
  )
}

export default SignupForm

const Section = styled.section`
  color: var(--color-green-400);
`

const Form = styled.form``

const InputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  gap: 1rem;
  width: 28rem;
  margin-bottom: 1.5rem;
`
const InputLabel = styled.div`
  text-align: end;
  width: 6.4rem;
  display: inline-block;
`
const Input = styled.input`
  color: var(--color-green-400);
  background-color: transparent;
  border-bottom: 0.1rem solid var(--color-green-400);
  height: 4rem;
  /*width: 20rem;*/
  &::placeholder {
    color: var(--color-green-400);
  }
`

const Link = styled.div`
  text-align: center;
  text-decoration: underline;
`
