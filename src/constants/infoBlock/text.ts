export const ROUTE_INFO_BLOCK_MAPPING: {
  [key: string]: { main: string; sub: string }
} = {
  '/blanQ': {
    main: '이야기는 하루에 한 번만 만들 수 있어요!',
    sub: '오늘 공유하고 싶은 이야기를 적어봐요',
  },
  '/blanQ/quiz': {
    main: '자동으로 blanQ-uiz를 생성해드려요',
    sub: '문장을 적어주시면 AI를 통해 퀴즈를 생성해요',
  },

  '/chemi/quiz': {
    main: '한 번 도전에 5번까지 입력할 수 있어요',
    sub: '포인트 1개를 사용해서 도전할 수 있어요',
  },
}
