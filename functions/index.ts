import { createFunc, Struct, Unknown } from 'farrow-faas'

export default createFunc(
  {
    input: Unknown,
    output: Struct(
      {
        message: String,
      },
    ),
  },
  () => {
    return {
      message: 'Hello world',
    }
  },
)
