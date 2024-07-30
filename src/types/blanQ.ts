interface BlanQStoreProps extends BlanQStateProps {
  actions: BlanQActionsProps
}

interface BlanQStateProps {
  blanQInfo: {
    quiz: string
    code: string
  }
}

interface BlanQActionsProps {
  resetBlanQ: () => void
  setQuiz: (quiz: BlanQStateProps['blanQInfo']['quiz']) => void
  setCode: (code: BlanQStateProps['blanQInfo']['code']) => void
}

export type { BlanQStoreProps, BlanQStateProps, BlanQActionsProps }
